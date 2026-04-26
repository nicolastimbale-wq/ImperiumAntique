const http = require("http");
const { randomUUID } = require("crypto");

const PORT = Number(process.env.MULTIPLAYER_PORT || 8787);
const HOST = String(process.env.MULTIPLAYER_HOST || "0.0.0.0").trim() || "0.0.0.0";
const CORS_ORIGIN = process.env.MULTIPLAYER_CORS_ORIGIN || "*";

const rooms = new Map();

function nowIso() {
  return new Date().toISOString();
}

function writeJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "Access-Control-Allow-Origin": CORS_ORIGIN,
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS"
  });
  res.end(JSON.stringify(payload));
}

function writeNoContent(res) {
  res.writeHead(204, {
    "Access-Control-Allow-Origin": CORS_ORIGIN,
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS"
  });
  res.end();
}

function parseBodyJson(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", chunk => {
      body += String(chunk || "");
      if (body.length > 8_000_000) {
        reject(new Error("Payload trop volumineux."));
        req.destroy();
      }
    });
    req.on("end", () => {
      if (!body.trim()) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(new Error("JSON invalide."));
      }
    });
    req.on("error", reject);
  });
}

function normalizeRoomCode(value) {
  return String(value || "")
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, 12);
}

function generateRoomCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  for (let attempt = 0; attempt < 32; attempt += 1) {
    let code = "";
    for (let i = 0; i < 6; i += 1) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
    if (!rooms.has(code)) {
      return code;
    }
  }
  return randomUUID().replace(/-/g, "").slice(0, 8).toUpperCase();
}

function normalizePlayerName(value) {
  const name = String(value || "").trim();
  if (!name) {
    return "Joueur";
  }
  return name.slice(0, 24);
}

function createRoom({ hostName }) {
  const code = generateRoomCode();
  const hostId = randomUUID();
  const room = {
    code,
    hostId,
    version: 0,
    snapshot: null,
    lobby: {
      phase: "lobby",
      startedAt: "",
      players: {}
    },
    createdAt: nowIso(),
    updatedAt: nowIso(),
    players: new Map(),
    subscribers: new Set()
  };

  room.players.set(hostId, {
    id: hostId,
    role: "host",
    name: normalizePlayerName(hostName),
    joinedAt: nowIso(),
    lastSeenAt: nowIso()
  });
  room.lobby.players[hostId] = {
    nation: "",
    ready: false
  };

  rooms.set(code, room);
  return room;
}

function roomPublicPlayers(room) {
  return [...room.players.values()].map(player => ({
    id: player.id,
    role: player.role,
    name: player.name,
    joinedAt: player.joinedAt
  }));
}

function sendSse(res, payload) {
  res.write(`data: ${JSON.stringify(payload)}\n\n`);
}

function broadcastRoom(room, payload) {
  room.subscribers.forEach(res => {
    try {
      sendSse(res, payload);
    } catch (error) {
      room.subscribers.delete(res);
    }
  });
}

function touchPlayer(room, playerId) {
  if (!playerId || !room.players.has(playerId)) {
    return;
  }
  room.players.get(playerId).lastSeenAt = nowIso();
}

function roomParticipants(room) {
  const host = [...room.players.values()].find(player => player.role === "host") || null;
  const guest = [...room.players.values()].find(player => player.role === "guest") || null;
  return { host, guest };
}

function ensureLobbyPlayerState(room, playerId) {
  if (!room?.lobby || !playerId) {
    return null;
  }
  if (!room.lobby.players || typeof room.lobby.players !== "object") {
    room.lobby.players = {};
  }
  if (!room.lobby.players[playerId]) {
    room.lobby.players[playerId] = {
      nation: "",
      ready: false
    };
  }
  return room.lobby.players[playerId];
}

function roomPublicLobby(room) {
  const participants = roomParticipants(room);
  const hostState = participants.host ? ensureLobbyPlayerState(room, participants.host.id) : null;
  const guestState = participants.guest ? ensureLobbyPlayerState(room, participants.guest.id) : null;

  const hostReady = !!hostState?.ready;
  const guestReady = !!guestState?.ready;
  const hostNation = String(hostState?.nation || "");
  const guestNation = String(guestState?.nation || "");
  const canStart =
    room.lobby?.phase === "lobby" &&
    !!participants.host &&
    !!participants.guest &&
    hostReady &&
    guestReady &&
    hostNation.trim().length > 0 &&
    guestNation.trim().length > 0;

  return {
    phase: room.lobby?.phase === "in_game" ? "in_game" : "lobby",
    startedAt: String(room.lobby?.startedAt || ""),
    host: participants.host
      ? {
          id: participants.host.id,
          name: participants.host.name,
          ready: hostReady,
          nation: hostNation
        }
      : null,
    guest: participants.guest
      ? {
          id: participants.guest.id,
          name: participants.guest.name,
          ready: guestReady,
          nation: guestNation
        }
      : null,
    canStart
  };
}

function normalizeNation(value) {
  return String(value || "")
    .trim()
    .slice(0, 40);
}

function updateLobbyPlayer(room, playerId, { nation, ready } = {}) {
  const state = ensureLobbyPlayerState(room, playerId);
  if (!state) {
    return;
  }

  if (typeof nation === "string") {
    state.nation = normalizeNation(nation);
    state.ready = false;
  }

  if (typeof ready === "boolean") {
    state.ready = ready;
  }
}

function resetRoomLobbyForReplay(room) {
  room.lobby.phase = "lobby";
  room.lobby.startedAt = "";
  room.snapshot = null;
  Object.keys(room.lobby.players || {}).forEach(playerId => {
    if (room.lobby.players[playerId]) {
      room.lobby.players[playerId].ready = false;
    }
  });
}

function joinRoom(room, playerName) {
  const participants = roomParticipants(room);
  if (participants.guest) {
    return null;
  }

  if (room.lobby?.phase === "in_game") {
    return null;
  }

  const playerId = randomUUID();
  room.players.set(playerId, {
    id: playerId,
    role: "guest",
    name: normalizePlayerName(playerName),
    joinedAt: nowIso(),
    lastSeenAt: nowIso()
  });
  ensureLobbyPlayerState(room, playerId);
  room.updatedAt = nowIso();
  return room.players.get(playerId);
}

function leaveRoom(room, playerId) {
  if (!room.players.has(playerId)) {
    return false;
  }
  const leavingWasHost = room.hostId === playerId;
  if (room?.lobby?.players && room.lobby.players[playerId]) {
    delete room.lobby.players[playerId];
  }
  room.players.delete(playerId);

  if (leavingWasHost) {
    const next = [...room.players.values()][0];
    room.hostId = next ? next.id : "";
    if (next) {
      next.role = "host";
    }
  }

  room.updatedAt = nowIso();

  if (room.players.size === 0) {
    room.snapshot = null;
    room.lobby = {
      phase: "lobby",
      startedAt: "",
      players: {}
    };
  } else if (room.lobby?.phase === "in_game") {
    resetRoomLobbyForReplay(room);
  }

  return true;
}

function cleanupRooms() {
  const now = Date.now();
  const maxIdleMs = 1000 * 60 * 45;
  const maxPlayerInactivityMs = 1000 * 60 * 20;

  rooms.forEach((room, code) => {
    [...room.players.values()].forEach(player => {
      const lastSeen = Date.parse(player.lastSeenAt || room.createdAt);
      if (Number.isFinite(lastSeen) && now - lastSeen > maxPlayerInactivityMs) {
        leaveRoom(room, player.id);
      }
    });

    const roomUpdatedAt = Date.parse(room.updatedAt || room.createdAt);
    const hasAudience = room.subscribers.size > 0 || room.players.size > 0;

    if (!hasAudience && Number.isFinite(roomUpdatedAt) && now - roomUpdatedAt > maxIdleMs) {
      rooms.delete(code);
    }
  });
}

setInterval(cleanupRooms, 30_000).unref();

const server = http.createServer(async (req, res) => {
  const method = String(req.method || "GET").toUpperCase();

  if (method === "OPTIONS") {
    writeNoContent(res);
    return;
  }

  const requestUrl = new URL(req.url || "/", "http://localhost");
  const pathname = requestUrl.pathname;

  try {
    if (method === "GET" && pathname === "/health") {
      writeJson(res, 200, {
        ok: true,
        service: "imperium-multiplayer-server",
        now: nowIso(),
        rooms: rooms.size
      });
      return;
    }

    if (method === "POST" && pathname === "/api/create-room") {
      const body = await parseBodyJson(req);
      const room = createRoom({ hostName: body.playerName });
      writeJson(res, 200, {
        ok: true,
        roomCode: room.code,
        playerId: room.hostId,
        role: "host",
        version: room.version,
        players: roomPublicPlayers(room),
        lobby: roomPublicLobby(room),
        hasSnapshot: !!room.snapshot
      });
      return;
    }

    if (method === "POST" && pathname === "/api/join-room") {
      const body = await parseBodyJson(req);
      const roomCode = normalizeRoomCode(body.roomCode);
      const room = rooms.get(roomCode);
      if (!room) {
        writeJson(res, 404, { ok: false, error: "Salle introuvable." });
        return;
      }

      const player = joinRoom(room, body.playerName);
      if (!player) {
        writeJson(res, 409, { ok: false, error: "Salle complete ou deja demarree." });
        return;
      }

      room.version += 1;
      room.updatedAt = nowIso();
      broadcastRoom(room, {
        type: "presence",
        roomCode: room.code,
        version: room.version,
        players: roomPublicPlayers(room)
      });
      broadcastRoom(room, {
        type: "lobby-updated",
        roomCode: room.code,
        version: room.version,
        lobby: roomPublicLobby(room),
        players: roomPublicPlayers(room),
        senderId: player.id
      });

      writeJson(res, 200, {
        ok: true,
        roomCode: room.code,
        playerId: player.id,
        role: player.role,
        version: room.version,
        hasSnapshot: !!room.snapshot,
        players: roomPublicPlayers(room),
        lobby: roomPublicLobby(room)
      });
      return;
    }

    const roomPathMatch = pathname.match(/^\/api\/rooms\/([A-Za-z0-9-]+)\/(state|events|leave|ping|lobby|start)$/);
    if (!roomPathMatch) {
      writeJson(res, 404, { ok: false, error: "Route inconnue." });
      return;
    }

    const roomCode = normalizeRoomCode(roomPathMatch[1]);
    const action = roomPathMatch[2];
    const room = rooms.get(roomCode);
    if (!room) {
      writeJson(res, 404, { ok: false, error: "Salle introuvable." });
      return;
    }

    if (method === "GET" && action === "state") {
      writeJson(res, 200, {
        ok: true,
        roomCode: room.code,
        version: room.version,
        updatedAt: room.updatedAt,
        snapshot: room.snapshot,
        players: roomPublicPlayers(room),
        lobby: roomPublicLobby(room)
      });
      return;
    }

    if (method === "POST" && action === "state") {
      const body = await parseBodyJson(req);
      const playerId = String(body.playerId || "");
      if (!playerId || !room.players.has(playerId)) {
        writeJson(res, 403, { ok: false, error: "Joueur non autorise." });
        return;
      }

      if (!body.snapshot || typeof body.snapshot !== "object") {
        writeJson(res, 400, { ok: false, error: "Snapshot manquant." });
        return;
      }

      touchPlayer(room, playerId);
      room.snapshot = body.snapshot;
      room.lobby.phase = "in_game";
      room.version += 1;
      room.updatedAt = nowIso();

      broadcastRoom(room, {
        type: "state-updated",
        roomCode: room.code,
        version: room.version,
        senderId: playerId,
        updatedAt: room.updatedAt
      });

      writeJson(res, 200, {
        ok: true,
        roomCode: room.code,
        version: room.version,
        updatedAt: room.updatedAt,
        lobby: roomPublicLobby(room)
      });
      return;
    }

    if (method === "GET" && action === "lobby") {
      writeJson(res, 200, {
        ok: true,
        roomCode: room.code,
        version: room.version,
        updatedAt: room.updatedAt,
        players: roomPublicPlayers(room),
        lobby: roomPublicLobby(room)
      });
      return;
    }

    if (method === "POST" && action === "lobby") {
      const body = await parseBodyJson(req);
      const playerId = String(body.playerId || "");
      if (!playerId || !room.players.has(playerId)) {
        writeJson(res, 403, { ok: false, error: "Joueur non autorise." });
        return;
      }

      if (room.lobby?.phase === "in_game") {
        writeJson(res, 409, { ok: false, error: "La partie est deja demarree." });
        return;
      }

      touchPlayer(room, playerId);
      updateLobbyPlayer(room, playerId, {
        nation: typeof body.nation === "string" ? body.nation : undefined,
        ready: typeof body.ready === "boolean" ? body.ready : undefined
      });

      room.version += 1;
      room.updatedAt = nowIso();
      const lobby = roomPublicLobby(room);

      broadcastRoom(room, {
        type: "lobby-updated",
        roomCode: room.code,
        version: room.version,
        players: roomPublicPlayers(room),
        lobby,
        senderId: playerId
      });

      writeJson(res, 200, {
        ok: true,
        roomCode: room.code,
        version: room.version,
        updatedAt: room.updatedAt,
        players: roomPublicPlayers(room),
        lobby
      });
      return;
    }

    if (method === "POST" && action === "start") {
      const body = await parseBodyJson(req);
      const playerId = String(body.playerId || "");
      if (!playerId || !room.players.has(playerId)) {
        writeJson(res, 403, { ok: false, error: "Joueur non autorise." });
        return;
      }

      const player = room.players.get(playerId);
      if (!player || player.role !== "host") {
        writeJson(res, 403, { ok: false, error: "Seul l'hote peut demarrer." });
        return;
      }

      const lobby = roomPublicLobby(room);
      if (!lobby.canStart) {
        writeJson(res, 409, { ok: false, error: "Les deux joueurs doivent etre prets avec une nation choisie." });
        return;
      }

      room.lobby.phase = "in_game";
      room.lobby.startedAt = nowIso();
      room.version += 1;
      room.updatedAt = nowIso();

      const lobbyMaj = roomPublicLobby(room);
      broadcastRoom(room, {
        type: "lobby-updated",
        roomCode: room.code,
        version: room.version,
        players: roomPublicPlayers(room),
        lobby: lobbyMaj,
        senderId: playerId
      });

      writeJson(res, 200, {
        ok: true,
        roomCode: room.code,
        version: room.version,
        updatedAt: room.updatedAt,
        players: roomPublicPlayers(room),
        lobby: lobbyMaj
      });
      return;
    }

    if (method === "GET" && action === "events") {
      const playerId = String(requestUrl.searchParams.get("playerId") || "");
      if (!playerId || !room.players.has(playerId)) {
        writeJson(res, 403, { ok: false, error: "Joueur non autorise." });
        return;
      }

      touchPlayer(room, playerId);
      res.writeHead(200, {
        "Content-Type": "text/event-stream; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
        "Access-Control-Allow-Origin": CORS_ORIGIN
      });
      res.write(": connected\n\n");

      room.subscribers.add(res);

      sendSse(res, {
        type: "connected",
        roomCode: room.code,
        version: room.version,
        players: roomPublicPlayers(room),
        lobby: roomPublicLobby(room),
        now: nowIso()
      });

      const keepAlive = setInterval(() => {
        try {
          res.write(": keepalive\n\n");
        } catch (error) {}
      }, 20_000);

      req.on("close", () => {
        clearInterval(keepAlive);
        room.subscribers.delete(res);
      });

      return;
    }

    if (method === "POST" && action === "ping") {
      const body = await parseBodyJson(req);
      const playerId = String(body.playerId || "");
      if (!playerId || !room.players.has(playerId)) {
        writeJson(res, 403, { ok: false, error: "Joueur non autorise." });
        return;
      }

      touchPlayer(room, playerId);
      writeJson(res, 200, {
        ok: true,
        roomCode: room.code,
        version: room.version,
        now: nowIso()
      });
      return;
    }

    if (method === "POST" && action === "leave") {
      const body = await parseBodyJson(req);
      const playerId = String(body.playerId || "");
      if (!playerId || !room.players.has(playerId)) {
        writeJson(res, 403, { ok: false, error: "Joueur non autorise." });
        return;
      }

      leaveRoom(room, playerId);
      room.version += 1;
      room.updatedAt = nowIso();
      broadcastRoom(room, {
        type: "presence",
        roomCode: room.code,
        version: room.version,
        players: roomPublicPlayers(room)
      });
      broadcastRoom(room, {
        type: "lobby-updated",
        roomCode: room.code,
        version: room.version,
        players: roomPublicPlayers(room),
        lobby: roomPublicLobby(room),
        senderId: playerId
      });

      writeJson(res, 200, {
        ok: true,
        roomCode: room.code,
        version: room.version
      });
      return;
    }

    writeJson(res, 405, { ok: false, error: "Methode non supportee." });
  } catch (error) {
    writeJson(res, 500, {
      ok: false,
      error: error?.message || "Erreur serveur."
    });
  }
});

server.listen(PORT, HOST, () => {
  console.log(`[multiplayer] serveur en ecoute sur http://${HOST}:${PORT}`);
});
