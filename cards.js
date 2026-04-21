/* =========================================================
   1) DONNÉES DES CARTES
   ========================================================= */

const cartesCommunes = [
  {
    nom: "Cité", //--CHECK--//
    pin: "Persistante",
    statut: "Aucun",
    typeCarte: "Maison",
    typeRegion: [],
    effet: "Solstice: vous POUVEZ défausser 1 carte pour Choisir: gagnez 1 Population OU gagnez 1 Matériaux OU piocher 1 carte.",
     solsticeCode: [
    {
      type: "optionnel",
      message: "Défausser 1 carte pour activer le Solstice de Cité ?",
      effetSiOui: [
        { type: "defausserMain", quantite: 1 },
        {
          type: "choisir",
          options: [
            {
              label: "Gagner 1 Population",
              effets: [{ type: "gagner", ressource: "population", quantite: 1 }]
            },
            {
              label: "Gagner 1 Matériaux",
              effets: [{ type: "gagner", ressource: "materiaux", quantite: 1 }]
            },
            {
              label: "Piocher 1 carte",
              effets: [{ type: "piocher", quantite: 1 }]
            }
          ]
        }
      ]
    }
  ],
    coutDeveloppement: "Aucun",
    categorie: "Tradition, Civilisé",
    styleBandeau: "Tradition",
    nation: "Aucun",
    localisationDepart: "Aucun",
    pointsVictoire: 1,
    conditionVictoire: "Aucun"
  },

  {
    nom: "Ville",  //---CHECK---//
    pin: "Persistante",
    statut: "Barbare",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Épuiser: tous les joueurs PEUVENT gagner 2 Matériaux. Solstice: vous POUVEZ gagner 2 Progrès. Si vous le faites, Choisir: abandonnez cette <i>Ville</i> OU archivez-la dans votre Histoire.",
    epuiserCode: [
  {
    type: "optionnel",
    message: "Utiliser l'effet Épuiser de Ville pour gagner 2 Matériaux ?",
    effetSiOui: [
      { type: "gagner", ressource: "materiaux", quantite: 2 }
    ]
  }
],

solsticeCode: [
  {
    type: "optionnel",
    message: "Activer le Solstice de Ville pour gagner 2 Progrès ?",
    effetSiOui: [
      { type: "gagner", ressource: "progres", quantite: 2 },
      {
        type: "choisir",
        options: [
          {
            label: "Abandonner cette Ville",
            effets: [
              { type: "abandonnerSource" }
            ]
          },
          {
            label: "Archiver cette Ville dans votre Histoire",
            effets: [
              { type: "archiverSource" }
            ]
          }
        ]
      }
    ]
  }
],
    coutDeveloppement: "Aucun",
    categorie: "Tradition",
    styleBandeau: "Tradition",
    nation: "Aucun",
    localisationDepart: "Aucun",
    pointsVictoire: "Conditionnel",
    conditionVictoire: "2 PV si dans votre Histoire"
  },

  {
    nom: "Ville",  //---CHECK---//  
    pin: "Persistante",
    statut: "Barbare",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Épuiser: tous les joueurs PEUVENT gagner 2 Matériaux. Solstice: vous POUVEZ gagner 2 Progrès. Si vous le faites, Choisir: abandonnez cette <i>Ville</i> OU archivez-la dans votre Histoire.",
    epuiserCode: [
  {
    type: "optionnel",
    message: "Utiliser l'effet Épuiser de Ville pour gagner 2 Matériaux ?",
    effetSiOui: [
      { type: "gagner", ressource: "materiaux", quantite: 2 }
    ]
  }
],

solsticeCode: [
  {
    type: "optionnel",
    message: "Activer le Solstice de Ville pour gagner 2 Progrès ?",
    effetSiOui: [
      { type: "gagner", ressource: "progres", quantite: 2 },
      {
        type: "choisir",
        options: [
          {
            label: "Abandonner cette Ville",
            effets: [
              { type: "abandonnerSource" }
            ]
          },
          {
            label: "Archiver cette Ville dans votre Histoire",
            effets: [
              { type: "archiverSource" }
            ]
          }
        ]
      }
    ]
  }
],
    coutDeveloppement: "Aucun",
    categorie: "Tradition",
    styleBandeau: "Tradition",
    nation: "Aucun",
    localisationDepart: "Aucun",
    pointsVictoire: "Conditionnel",
    conditionVictoire: "2 PV si dans votre Histoire"
  },

  {
    nom: "Commandement",  //---CHECK---// 
    pin: "Aucun",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Action gratuite. Choisir: piocher 1 carte OU archivez 1 carte de votre main ou de votre défausse dans votre Histoire.",
    effetsCode: [
  {
    type: "choisir",
    options: [
      {
        label: "Piocher 1 carte",
        effets: [
          { type: "piocher", quantite: 1 }
        ]
      },
      {
        label: "Archiver 1 carte de votre main ou de votre défausse",
        effets: [
          { type: "archiverDepuisMainOuDefausse" }
        ]
      }
    ]
  }
],
    coutDeveloppement: "Aucun",
    categorie: "Tradition, Civilisé",
    styleBandeau: "Tradition",
    nation: "Aucun",
    localisationDepart: "Aucun",
    pointsVictoire: 1,
    conditionVictoire: "Aucun"
  },

  {
    nom: "Jeu", //---CHECK---// 
    pin: "Aucun",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Action gratuite. Payez 1 Matériaux et annoncez une des catégories suivantes: Tradition, Civilisé, Région, ou Vassal. Révélez la première carte de la pioche Principale. Si elle correspond à la catégorie annoncée, ajoutez-la à votre main. Sinon, exilez-la.",
    effetsCode: [
  { type: "payer", ressource: "materiaux", quantite: 1 },
  {
    type: "annoncerCategorieEtRevelerPrincipale",
    categories: ["Tradition", "Civilisé", "Région", "Vassal"]
  }
],
    coutDeveloppement: "Aucun",
    categorie: "Tradition, Civilisé",
    styleBandeau: "Tradition",
    nation: "Aucun",
    localisationDepart: "Aucun",
    pointsVictoire: 1,
    conditionVictoire: "Aucun"
  },

  {
  nom: "Invasion", //---CHECK---//
  pin: "Épée",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Payez 3 Matériaux. Tous les autres joueurs récupèrent une Instabilité. Choisir: innovez en Vassal OU innovez en Région et chaque autre joueur rappelle une Région",
  effetsCode: [
    {
      type: "payer",
      ressource: "materiaux",
      quantite: 3
    },
    {
      type: "autresJoueursRecuperentInstabilite",
      quantite: 1
    },
    {
      type: "choisir",
      options: [
        {
          label: "Innover en Vassal",
          effets: [
            {
              type: "innover",
              categorie: "Vassal"
            }
          ]
        },
        {
          label: "Innover en Région et chaque autre joueur rappelle une Région",
          effets: [
            {
              type: "innover",
              categorie: "Région"
            },
            {
              type: "autresJoueursRappellentCategorie",
              categorie: "Région",
              quantite: 1
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Tradition",
  styleBandeau: "Tradition",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: 1,
  conditionVictoire: "Aucun"
},

  {
  nom: "Agriculture",  //---CHECK---//
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Épuiser: pour le reste du tour, considérez 1 Blé comme 3 Sac",
  epuiserCode: [
    {
      type: "activerAgriculture"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Tradition",
  styleBandeau: "Tradition",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: "Variable",
  conditionVictoire: "2 PV par Blé"
},

  {
  nom: "Masque de jade",  //---CHECK---//
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Masque",
  typeRegion: [],
  effet: "Piochez jusqu’à 3 cartes si possible. Puis placez 1 carte de votre main au-dessus de votre deck.",
  effetsCode: [
    {
      type: "piocherJusqua",
      quantite: 3,
      sansRafraichissement: true
      
    },
    {
      type: "placerCarteMainAuDessusDeck"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Tradition",
  styleBandeau: "Tradition",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: "Conditionnel",
  conditionVictoire: "1 PV si dans votre Histoire"
},

  {
    nom: "Chadouf",  //---CHECK---//
    pin: "Persistante",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Épuiser: quand vous gagnez 1 Matériaux d’une Eau en jeu, épuisez cette carte pour gagner 1 Progrès.",
    coutDeveloppement: "Aucun",
    categorie: "Tradition",
    styleBandeau: "Tradition",
    nation: "Aucun",
    localisationDepart: "Aucun",
    pointsVictoire: "Variable",
    conditionVictoire: "2 PV par Eau"
  },

{
  nom: "Navires", //---CHECK---//
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Épuiser: rappelez une Eau pour gagner 2 Matériaux et 1 Population OU rappelez une Blé pour gagner 1 action.",
  epuiserCode: [
    {
      type: "choisir",
      options: [
        {
          label: "Rappeler une Eau pour gagner 2 Matériaux et 1 Population",
          effets: [
            {
              type: "rappelerRegionAvecTag",
              tagRegion: "Eau"
            },
            {
              type: "gagnerMateriauxDepuisEau",
              quantite: 2
            },
            {
              type: "gagner",
              ressource: "population",
              quantite: 1
            }
          ]
        },
        {
          label: "Rappeler une Blé pour gagner 1 action",
          effets: [
            {
              type: "rappelerRegionAvecTag",
              tagRegion: "Blé"
            },
            {
              type: "gagnerAction",
              quantite: 1
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Tradition",
  styleBandeau: "Tradition",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: "Variable",
  conditionVictoire: "1 PV par Blé et par Eau"
},

 {
  nom: "Sanctuaire",  //---CHECK---//
  pin: "Persistante",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Épuiser: payez 1 Matériaux pour piocher 1 carte. Solstice: vous POUVEZ défausser 1 carte pour renvoyer une Instabilité de votre défausse.",
  epuiserCode: [
    {
      type: "payer",
      ressource: "materiaux",
      quantite: 1
    },
    {
      type: "piocher",
      quantite: 1
    }
  ],
  solsticeCode: [
  {
    type: "optionnel",
    condition: () =>
      (jeu.joueurZones.mainJoueur || []).length > 0 &&
      (existeInstabiliteDansDefausse() || existeInstabiliteDansMain()),
    message: "Défausser 1 carte pour renvoyer une Instabilité de votre défausse ?",
    effetSiOui: [
      {
        type: "defausserMain",
        quantite: 1
      },
      {
        type: "condition",
        condition: () => existeInstabiliteDansDefausse(),
        effets: [
          {
            type: "renvoyerInstabiliteDepuisDefausse"
          }
        ]
      }
    ]
  }
],
  coutDeveloppement: "Aucun",
  categorie: "Tradition",
  styleBandeau: "Tradition",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: 1,
  conditionVictoire: "Aucun"
},

  {
  nom: "Port",
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Épuiser: gagnez 1 Matériaux par Eau dans votre zone de jeu. Vous POUVEZ payer 3 Matériaux pour récupérer 1 carte de votre défausse.",
  epuiserCode: [
    {
      type: "gagnerMateriauxParEauEnJeu",
      quantiteParEau: 1
    },
    {
      type: "optionnel",
      condition: () =>
        (jeu.joueurZones.defausseJoueur || []).length > 0 &&
        (jeu.joueur.materiaux || 0) >= 3,
      message: "Payer 3 Matériaux pour récupérer 1 carte de votre défausse ?",
      effetSiOui: [
        {
          type: "payer",
          ressource: "materiaux",
          quantite: 3
        },
        {
          type: "recupererCarteDepuisDefausse"
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Tradition, Civilisé",
  styleBandeau: "Tradition",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: 1,
  conditionVictoire: "Aucun"
},

  {
  nom: "Anciens",  //---CHECK---//
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: acquérez Tradition OU innovez en Tradition et tous les autres joueurs gagnent 1 Progrès.",
  effetsCode: [
    {
      type: "choisir",
      afficherMarcheAvantChoix: true,
      options: [
        {
          label: "Acquérir Tradition",
          effets: [
            {
              type: "acquerir",
              categorie: "Tradition"
            }
          ]
        },
        {
          label: "Innover en Tradition et tous les autres joueurs gagnent 1 Progrès",
          effets: [
            {
              type: "innover",
              categorie: "Tradition"
            },
            {
              type: "autresJoueursGagnentProgres",
              quantite: 1
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Tradition",
  styleBandeau: "Tradition",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: 1,
  conditionVictoire: "Aucun"
},

 {
  nom: "Cité",  //---CHECK---//
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Maison",
  typeRegion: [],
  effet: "Solstice: vous POUVEZ défausser 1 carte pour Choisir: gagnez 1 Population OU gagnez 1 Matériaux OU piochez 1 carte.",
  solsticeCode: [
    {
      type: "optionnel",
      message: "Défausser 1 carte pour activer le Solstice de Cité ?",
      effetSiOui: [
        {
          type: "defausserMain",
          quantite: 1
        },
        {
          type: "choisir",
          options: [
            {
              label: "Gagner 1 Population",
              effets: [
                {
                  type: "gagner",
                  ressource: "population",
                  quantite: 1
                }
              ]
            },
            {
              label: "Gagner 1 Matériaux",
              effets: [
                {
                  type: "gagner",
                  ressource: "materiaux",
                  quantite: 1
                }
              ]
            },
            {
              label: "Piocher 1 carte",
              effets: [
                {
                  type: "piocher",
                  quantite: 1
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Tradition, Civilisé",
  styleBandeau: "Tradition",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: 1,
  conditionVictoire: "Aucun"
},

{
  nom: "Mysticisme",  //---CHECK---//
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Épuiser: gagnez 1 action. Solstice: Choisir: récupérez une Instabilité OU défaussez 2 cartes.",
  epuiserCode: [
    {
      type: "gagnerAction",
      quantite: 1
    }
  ],
  solsticeCode: [
    {
      type: "choisir",
      options: [
        {
          label: "Récupérer 1 Instabilité",
          effets: [
            {
              type: "recupererInstabilite"
            }
          ]
        },
        {
          label: "Défausser 2 cartes",
          effets: [
            {
              type: "defausserMain",
              quantite: 2
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Tradition",
  styleBandeau: "Tradition",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: 1,
  conditionVictoire: "Aucun"
},

 {
  nom: "Oracle",  //---CHECK---// 
  pin: "Aucun",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Action gratuite. Piochez 2 cartes et défaussez l’une d’entre elles.",
  effetsCode: [
    {
      type: "piocherDeuxPuisDefausserUnePiochee"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Tradition",
  styleBandeau: "Tradition",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: "Variable",
  conditionVictoire: "2 PV par Renommée"
},
{
  nom: "Cité",  //---CHECK---//
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Maison",
  typeRegion: [],
  effet: "Solstice: vous POUVEZ défausser 1 carte pour Choisir: gagner 1 Population OU gagnez 1 Matériaux OU piochez 1 carte.",
  solsticeCode: [
    {
      type: "optionnel",
      message: "Défausser 1 carte pour activer le Solstice de Cité ?",
      effetSiOui: [
        {
          type: "defausserMain",
          quantite: 1
        },
        {
          type: "choisir",
          options: [
            {
              label: "Gagner 1 Population",
              effets: [
                {
                  type: "gagner",
                  ressource: "population",
                  quantite: 1
                }
              ]
            },
            {
              label: "Gagner 1 Matériaux",
              effets: [
                {
                  type: "gagner",
                  ressource: "materiaux",
                  quantite: 1
                }
              ]
            },
            {
              label: "Piocher 1 carte",
              effets: [
                {
                  type: "piocher",
                  quantite: 1
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Tradition, Civilisé",
  styleBandeau: "Tradition",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: 1,
  conditionVictoire: "Aucun"
},
{
  nom: "Diplomatie",  //---CHECK---//
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Payez 3 Matériaux pour innover en Vassal",
  effetsCode: [
    {
      type: "lancerPaiementPuisInnoverParmiCategories",
      ressource: "materiaux",
      quantite: 3,
      categories: ["Vassal"]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Tradition, Civilisé",
  styleBandeau: "Tradition",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: 1,
  conditionVictoire: "Aucun"
},

 {
  nom: "Forêt", //---CHECK---//
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: ["Sac", "Sac", "Blé"],
  effet: "Exilez 1 carte du Marché. Vous POUVEZ réserver 1 carte.",
  effetsCode: [
    {
      type: "exilerCarteVisibleDuMarche"
    },
    {
      type: "optionnel",
      message: "Voulez-vous réserver 1 carte sous cette carte ?",
      effetSiOui: [
        {
          type: "reserverSousSource",
          quantite: 1
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Région",
  styleBandeau: "Région",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: 0,
  conditionVictoire: "Aucun"
},

 {
  nom: "Steppe",
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: ["Sac", "Sac", "Blé"],
  effet: "Exilez 1 carte du Marché. Vous POUVEZ réserver 1 carte.",
  effetsCode: [
    {
      type: "exilerCarteVisibleDuMarche"
    },
    {
      type: "optionnel",
      message: "Voulez-vous réserver 1 carte sous cette carte ?",
      effetSiOui: [
        {
          type: "reserverSousSource",
          quantite: 1
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Région",
  styleBandeau: "Région",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: 0,
  conditionVictoire: "Aucun"
},

{
  nom: "Région boisée",
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: ["Sac", "Blé"],
  effet: "Vous POUVEZ récupérer 1 carte de votre défausse et la placer au-dessus de votre deck. Exilez 1 carte du Marché. Vous POUVEZ réserver 1 carte.",
  effetsCode: [
    {
      type: "optionnel",
      condition: () => jeu.joueurZones.defausseJoueur.length > 0,
      message: "Récupérer une carte de votre défausse et la placer au-dessus de votre deck ?",
      effetSiOui: [
        {
          type: "recupererCarteDepuisDefausseVersDeck"
        }
      ]
    },
    {
      type: "exilerCarteVisibleDuMarche"
    },
    {
      type: "optionnel",
      message: "Voulez-vous réserver 1 carte sous cette carte ?",
      effetSiOui: [
        {
          type: "reserverSousSource",
          quantite: 1
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Région",
  styleBandeau: "Région",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: 0,
  conditionVictoire: "Aucun"
},

 {
  nom: "Voie sacrée", //---CHECK---//
  pin: "Persistante",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Épuiser: regardez la première carte de votre deck Nation. Puis vous POUVEZ abandonner Voie sacrée pour échanger cette carte avec une carte de votre main.",
  epuiserCode: [
    {
      type: "activerVoieSacree"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Région",
  styleBandeau: "Région",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: 1,
  conditionVictoire: "Aucun"
},

 {
  nom: "Jungle",  //---CHECK---//
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Gagnez 1 Population. Exilez 1 carte du Marché. Vous POUVEZ réserver 1 carte.",
  effetsCode: [
    {
      type: "gagner",
      ressource: "population",
      quantite: 1
    },
    {
      type: "exilerCarteVisibleDuMarche"
    },
    {
      type: "optionnel",
      message: "Voulez-vous réserver 1 carte sous cette carte ?",
      effetSiOui: [
        {
          type: "reserverSousSource",
          quantite: 1
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Région",
  styleBandeau: "Région",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: 1,
  conditionVictoire: "Aucun"
},

 {
  nom: "Oasis", //---CHECK---//
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: ["Sac", "Sac", "Eau"],
  effet: "Exilez 1 carte du Marché. Vous POUVEZ réserver 1 carte.",
  effetsCode: [
    {
      type: "exilerCarteVisibleDuMarche"
    },
    {
      type: "optionnel",
      message: "Voulez-vous réserver 1 carte sous cette carte ?",
      effetSiOui: [
        {
          type: "reserverSousSource",
          quantite: 1
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Région",
  styleBandeau: "Région",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: 0,
  conditionVictoire: "Aucun"
},

{
  nom: "Plaine inondable",  //---CHECK---//
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: ["Sac", "Eau"],
  effet: "Vous POUVEZ archiver 1 carte de votre défausse dans votre Histoire. Exilez 1 carte du Marché. Vous POUVEZ réserver 1 carte.",
  effetsCode: [
    {
      type: "optionnel",
      condition: () => jeu.joueurZones.defausseJoueur.length > 0,
      message: "Archiver une carte de votre défausse dans votre Histoire ?",
      effetSiOui: [
        {
          type: "archiverCarteDepuisDefausse"
        }
      ]
    },
    {
      type: "exilerCarteVisibleDuMarche"
    },
    {
      type: "optionnel",
      message: "Voulez-vous réserver 1 carte sous cette carte ?",
      effetSiOui: [
        {
          type: "reserverSousSource",
          quantite: 1
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Région",
  styleBandeau: "Région",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: 0,
  conditionVictoire: "Aucun"
},

  {
  nom: "Montagne",  //---CHECK---//
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Gagnez 3 Matériaux. Exilez 1 carte du Marché. Vous POUVEZ réserver 1 carte.",
  effetsCode: [
    {
      type: "gagner",
      ressource: "materiaux",
      quantite: 3
    },
    {
      type: "exilerCarteVisibleDuMarche"
    },
    {
      type: "optionnel",
      message: "Voulez-vous réserver 1 carte sous cette carte ?",
      effetSiOui: [
        {
          type: "reserverSousSource",
          quantite: 1
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Région",
  styleBandeau: "Région",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: 1,
  conditionVictoire: "Aucun"
},

  {
  nom: "Marais",    //---CHECK---//
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: ["Sac", "Eau"],
  effet: "Gagnez 2 Matériaux. Exilez 1 carte du Marché. Vous POUVEZ réserver 1 carte.",
  effetsCode: [
    {
      type: "gagner",
      ressource: "materiaux",
      quantite: 2
    },
    {
      type: "exilerCarteVisibleDuMarche"
    },
    {
      type: "optionnel",
      message: "Voulez-vous réserver 1 carte sous cette carte ?",
      effetSiOui: [
        {
          type: "reserverSousSource",
          quantite: 1
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Région",
  styleBandeau: "Région",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: 0,
  conditionVictoire: "Aucun"
},

{
  nom: "Rivière",   //---CHECK---//
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: ["Sac", "Sac", "Eau"],
  effet: "Vous POUVEZ archiver 1 carte de votre défausse dans votre Histoire. Exilez 1 carte du Marché. Vous POUVEZ réserver 1 carte.",
  effetsCode: [
    {
      type: "optionnel",
      condition: () => jeu.joueurZones.defausseJoueur.length > 0,
      message: "Archiver une carte de votre défausse dans votre Histoire ?",
      effetSiOui: [
        {
          type: "archiverCarteDepuisDefausse"
        }
      ]
    },
    {
      type: "exilerCarteVisibleDuMarche"
    },
    {
      type: "optionnel",
      message: "Voulez-vous réserver 1 carte sous cette carte ?",
      effetSiOui: [
        {
          type: "reserverSousSource",
          quantite: 1
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Région",
  styleBandeau: "Région",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: 0,
  conditionVictoire: "Aucun"
},

 {
  nom: "Collines",  //---CHECK---//
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: ["Sac", "Blé"],
  effet: "Gagnez 1 Population. Exilez 1 carte du Marché. Vous POUVEZ réserver 1 carte.",
  effetsCode: [
    {
      type: "gagner",
      ressource: "population",
      quantite: 1
    },
    {
      type: "exilerCarteVisibleDuMarche"
    },
    {
      type: "optionnel",
      message: "Voulez-vous réserver 1 carte sous cette carte ?",
      effetSiOui: [
        {
          type: "reserverSousSource",
          quantite: 1
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Région",
  styleBandeau: "Région",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: 0,
  conditionVictoire: "Aucun"
},

  {
  nom: "Côte",  //---CHECK---//
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: ["Sac", "Blé"],
  effet: "Piocher 1 carte. Exilez 1 carte du Marché. Vous POUVEZ réserver 1 carte.",
  effetsCode: [
    {
      type: "piocher",
      quantite: 1
    },
    {
      type: "exilerCarteVisibleDuMarche"
    },
    {
      type: "optionnel",
      message: "Voulez-vous réserver 1 carte sous cette carte ?",
      effetSiOui: [
        {
          type: "reserverSousSource",
          quantite: 1
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Région",
  styleBandeau: "Région",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: 0,
  conditionVictoire: "Aucun"
},

{
  nom: "Cap", //---CHECK---//
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: ["Sac", "Eau"],
  effet: "Exilez 1 carte du Marché. Vous POUVEZ réserver 1 carte. Passif: vous POUVEZ rappeler <i>Cap</i> pour éviter les effets d’une épée.",
  effetsCode: [
    {
      type: "exilerCarteVisibleDuMarche"
    },
    {
      type: "optionnel",
      message: "Voulez-vous réserver 1 carte sous cette carte ?",
      effetSiOui: [
        {
          type: "reserverSousSource",
          quantite: 1
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Région",
  styleBandeau: "Région",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: 0,
  conditionVictoire: "Aucun"
},

 {
  nom: "Monnaie", //---CHECK---//
  pin: "Persistante",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Épuiser: piocher 1 carte. Solstice: gagnez 2 Matériaux.",
  epuiserCode: [
    {
      type: "piocher",
      quantite: 1
    }
  ],
  solsticeCode: [
    {
      type: "gagner",
      ressource: "materiaux",
      quantite: 2
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Civilisé",
  styleBandeau: "Civilisé",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: 2,
  conditionVictoire: "Aucun"
},

 {
  nom: "Corruption",  //---CHECK---//
  pin: "Épée",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Tous les joueurs gagnent 2 Matériaux. Tous les autres joueurs récupèrent une Instabilité. Gagnez 1 Progrès.",
  effetsCode: [
    {
      type: "gagner",
      ressource: "materiaux",
      quantite: 2
    },
    {
      type: "autresJoueursGagnentMateriaux",
      quantite: 2
    },
    {
      type: "autresJoueursRecuperentInstabilite"
    },
    {
      type: "gagner",
      ressource: "progres",
      quantite: 1
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Civilisé",
  styleBandeau: "Civilisé",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: 2,
  conditionVictoire: "Aucun"
},

 {
  nom: "Éducation", //---CHECK---//
  pin: "Aucun",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Action gratuite. Vous POUVEZ archiver 1 carte de votre main dans votre Histoire. Vous POUVEZ archiver 1 carte de votre défausse dans votre Histoire.",
  effetsCode: [
    {
      type: "optionnel",
      condition: () => jeu.joueurZones.mainJoueur.length > 0,
      message: "Voulez-vous archiver 1 carte de votre main dans votre Histoire ?",
      effetSiOui: [
        {
          type: "archiverDepuisMain"
        }
      ]
    },
    {
      type: "optionnel",
      condition: () => jeu.joueurZones.defausseJoueur.length > 0,
      message: "Voulez-vous archiver 1 carte de votre défausse dans votre Histoire ?",
      effetSiOui: [
        {
          type: "archiverCarteDepuisDefausse"
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Civilisé",
  styleBandeau: "Civilisé",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: 2,
  conditionVictoire: "Aucun"
},

 {
  nom: "Cataphractaire",  //---CHECK---//
  pin: "Épée",
  statut: "Empire",
  typeCarte: "Casque",
  typeRegion: [],
  effet: "Chaque autre joueur abandonne une Région. Vous POUVEZ acquérir Région/Vassal. Vous POUVEZ réserver Cataphractaire sous une Région pour déclencher l’effet de jeu de cette dernière.",
  effetsCode: [
    {
      type: "autresJoueursAbandonnentCategorie",
      categorie: "Région",
      quantite: 1
    },
    {
      type: "optionnel",
      message: "Voulez-vous acquérir une carte Région ou Vassal ?",
      effetSiOui: [
        {
          type: "acquerirParmiCategories",
          categories: ["Région", "Vassal"]
        }
      ]
    },
    {
      type: "optionnel",
      condition: () => obtenirRegionsDansTableauJoueur().length > 0,
      message: "Voulez-vous réserver Cataphractaire sous une Région pour déclencher l'effet de jeu de cette dernière ?",
      effetSiOui: [
        {
          type: "reserverSourceSousRegionPuisDeclencherEffetJeu"
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Civilisé",
  styleBandeau: "Civilisé",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: 2,
  conditionVictoire: "Aucun"
},

 {
  nom: "Pharmacie", //---CHECK---// 
  pin: "Persistante",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Solstice: Choisir: gagnez 1 Population OU payez 2 Population pour gagner 1 Progrès.",
  solsticeCode: [
    {
      type: "choisir",
      options: [
        {
          label: "Gagner 1 Population",
          effets: [
            {
              type: "gagner",
              ressource: "population",
              quantite: 1
            }
          ]
        },
        {
          label: "Payer 2 Population pour gagner 1 Progrès",
          effets: [
            {
              type: "payer",
              ressource: "population",
              quantite: 2
            },
            {
              type: "gagner",
              ressource: "progres",
              quantite: 1
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Civilisé",
  styleBandeau: "Civilisé",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: 2,
  conditionVictoire: "Aucun"
},

  {
  nom: "Métropole", //---CHECK---//
  pin: "Persistante",
  statut: "Empire",
  typeCarte: "Duplex",
  typeRegion: [],
  effet: "Solstice: Choisir: gagnez 1 Population OU gagnez 1 Matériaux OU piocher 1 carte.",
  solsticeCode: [
    {
      type: "choisir",
      options: [
        {
          label: "Gagner 1 Population",
          effets: [
            {
              type: "gagner",
              ressource: "population",
              quantite: 1
            }
          ]
        },
        {
          label: "Gagner 1 Matériaux",
          effets: [
            {
              type: "gagner",
              ressource: "materiaux",
              quantite: 1
            }
          ]
        },
        {
          label: "Piocher 1 carte",
          effets: [
            {
              type: "piocher",
              quantite: 1
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Civilisé",
  styleBandeau: "Civilisé",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: 2,
  conditionVictoire: "Aucun"
},

 {
  nom: "Usuriers",  //---CHECK---//
  pin: "Aucun",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Action gratuite. Payez 3 Matériaux pour gagner 1 action.",
  effetsCode: [
    {
      type: "payer",
      ressource: "materiaux",
      quantite: 3
    },
    {
      type: "gagnerAction",
      quantite: 1
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Civilisé",
  styleBandeau: "Civilisé",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: "Variable",
  conditionVictoire: "1 PV par 10 Matériaux"
},

  {
  nom: "Temple",  //---CHECK---// 
  pin: "Persistante",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Épuiser: défausser 1 carte pour gagner 1 Progrès. Solstice: renvoyez une Instabilité de votre défausse.",
  epuiserCode: [
    {
      type: "defausserMain",
      quantite: 1
    },
    {
      type: "gagner",
      ressource: "progres",
      quantite: 1
    }
  ],
  solsticeCode: [
  {
    type: "optionnel",
    condition: () => existeInstabiliteDansDefausse(),
    message: "Voulez-vous renvoyer une Instabilité de votre défausse ?",
    effetSiOui: [
      {
        type: "renvoyerInstabiliteDepuisDefausse"
      }
    ]
  }
],
  coutDeveloppement: "Aucun",
  categorie: "Civilisé",
  styleBandeau: "Civilisé",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: "Variable",
  conditionVictoire: "1 PV par 5 Progrès"
},

 {
  nom: "Mercenaires", //---CHECK---// 
  pin: "Aucun",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Action gratuite. Payez 1 Population pour gagner 1 action.",
  effetsCode: [
    {
      type: "payer",
      ressource: "population",
      quantite: 1
    },
    {
      type: "gagnerAction",
      quantite: 1
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Civilisé",
  styleBandeau: "Civilisé",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: "Variable",
  conditionVictoire: "1 PV par 4 Population"
},

  {
  nom: "Onagre",  //---CHECK---//
  pin: "Épée",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Chaque autre joueur abandonne une Maison. Gagnez 2 Matériaux par Maison abandonnée. Vous POUVEZ acquérir Région/Vassal.",
  effetsCode: [
    {
      type: "autresJoueursAbandonnentCategorieAvecRetour",
      categorie: "Maison",
      quantite: 1,
      stockerDans: "maisonsAbandonnees"
    },
    {
      type: "gagnerMateriauxSelonVariable",
      variable: "maisonsAbandonnees",
      multiplicateur: 2
    },
    {
      type: "optionnel",
      message: "Voulez-vous acquérir une carte Région ou Vassal ?",
      effetSiOui: [
        {
          type: "acquerirParmiCategories",
          categories: ["Région", "Vassal"]
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Civilisé",
  styleBandeau: "Civilisé",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: 2,
  conditionVictoire: "Aucun"
},

  {
  nom: "Développement urbain",  //---CHECK---//
  pin: "Aucun",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Gagnez 1 Matériaux et 1 Population par Maison et par Duplex dans votre zone de jeu.",
  effetsCode: [
    {
      type: "gagnerMateriauxEtPopulationParTypeCarte",
      typesCartes: ["Maison", "Duplex"],
      quantiteMateriauxParCarte: 1,
      quantitePopulationParCarte: 1
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Civilisé",
  styleBandeau: "Civilisé",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: "Variable",
  conditionVictoire: "2 PV par Maison et par Duplex"
},

 {
  nom: "Exportations",  //---CHECK---// 
  pin: "Épée",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Tous les joueurs gagnent 2 Matériaux. Donnez à chaque autre joueur 1 carte de votre main ou de votre défausse.",
  effetsCode: [
    {
      type: "gagner",
      ressource: "materiaux",
      quantite: 2
    },
    {
      type: "autresJoueursGagnentMateriaux",
      quantite: 2
    },
    {
      type: "donnerUneCarteAChaqueAutreJoueurDepuisMainOuDefausse"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Civilisé",
  styleBandeau: "Civilisé",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: "Variable",
  conditionVictoire: "1 PV par 10 cartes"
},

{
  nom: "Sumériens", //---CHECK---//
  bandeau: "Bleu",
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Cette carte ne peut pas être jouée. À la fin de la partie, avant le décompte final, renvoie jusqu'à 2 Instabilité.",
  jouable: false,
  coutDeveloppement: "Aucun",
  categorie: "Vassal",
  styleBandeau: "Vassal",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: 3,
  conditionVictoire: "Aucun"
},

  {
  nom: "Aksoumites",  //---CHECK---// 
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Gagnez 4 Matériaux.",
  effetsCode: [
    {
      type: "gagner",
      ressource: "materiaux",
      quantite: 4
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Vassal",
  styleBandeau: "Vassal",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: "Variable",
  conditionVictoire: "1 PV par Vassal"
},

{
  nom: "Ioniens", //---CHECK---// 
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Action gratuite. Renvoyez jusqu’à 2 Instabilité de votre main ou de la défausse. Archivez <i>Ioniens</i> dans votre Histoire.",
  effetsCode: [
    {
      type: "renvoyerJusquaNInstabilitesDepuisMainOuDefausse",
      quantiteMax: 2
    },
    {
      type: "archiverSourceDepuisContexte"
}
    
  ],
  coutDeveloppement: "Aucun",
  categorie: "Vassal",
  styleBandeau: "Vassal",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: 3,
  conditionVictoire: "Aucun"
},

  {
  nom: "Assyriens", //---CHECK---// 
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Action gratuite. Gagnez 1 Population.",
  effetsCode: [
    {
      type: "gagner",
      ressource: "population",
      quantite: 1
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Vassal",
  styleBandeau: "Vassal",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: 3,
  conditionVictoire: "Aucun"
},

  {
  nom: "Arméniens", //---CHECK---//
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Acquérez Tradition. Archivez <i>Arméniens</i> dans votre Histoire.",
  effetsCode: [
    {
      type: "acquerir",
      categorie: "Tradition"
    },
    {
      type: "archiverSourceDepuisMain"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Vassal",
  styleBandeau: "Vassal",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: 3,
  conditionVictoire: "Aucun"
},

 {
  nom: "Égyptiens", //---CHECK---//
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Si vous êtes en Barbare, placez la première carte de votre deck Nation dans votre défausse. Si vous êtes en Empire, développez 1 carte. Archivez <i>Égyptiens</i> dans votre Histoire.",
  effetsCode: [
    {
      type: "conditionStatut",
      statut: "Barbare",
      effets: [
        {
          type: "piocherDepuisDeckNationVersDefausse",
          quantite: 1
        }
      ]
    },
    {
      type: "conditionStatut",
      statut: "Empire",
      effets: [
       {
  type: "developperCarte",
  quantite: 1,
  nePasEpuiserPileEtoile: true
}
      ]
    },
    {
      type: "archiverSourceDepuisMain"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Vassal",
  styleBandeau: "Vassal",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: "Variable",
  conditionVictoire: "1 PV par Civilisé"
},
  {
    nom: "Qin", //---CHECK---//
    pin: "Persistante",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Passif: augmentez de 1 la taille de votre main.",
    coutDeveloppement: "Aucun",
    categorie: "Vassal",
    styleBandeau: "Vassal",
    nation: "Aucun",
    localisationDepart: "Aucun",
    pointsVictoire: "Variable",
    conditionVictoire: "1 PV par 3 cartes Persistante en jeu sauf Région"
  },

  {
    nom: "Hittites",  //---CHECK---//
    pin: "Aucun",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Innovez en Région",
    effetsCode: [
  { type: "innover", categorie: "Région" }
],
    coutDeveloppement: "Aucun",
    categorie: "Vassal",
    styleBandeau: "Vassal",
    nation: "Aucun",
    localisationDepart: "Aucun",
    pointsVictoire: 3,
    conditionVictoire: "Aucun"
  },

 {
  nom: "Minoens", //---CHECK---//
  pin: "Aucun",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Action gratuite. Placez 1 carte de votre main au-dessus de votre deck et gagnez 2 Progrès.",
  effetsCode: [
    {
      type: "placerCarteMainAuDessusDeck"
    },
    {
      type: "gagner",
      ressource: "progres",
      quantite: 2
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Vassal",
  styleBandeau: "Vassal",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: "Variable",
  conditionVictoire: "1 PV tous les 4 Progrès"
},

 {
  nom: "Glorieux",  //---CHECK---// 
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Action gratuite. Si vous êtes en Barbare, piochez jusqu’à 4 cartes. Si vous êtes en Empire, développez 1 carte sans payer son coût. Archivez <i>Glorieux</i> dans votre Histoire.",
  effetsCode: [
    {
      type: "conditionStatut",
      statut: "Barbare",
      effets: [
        {
          type: "piocherJusqua",
          quantite: 4
        }
      ]
    },
    {
      type: "conditionStatut",
      statut: "Empire",
      effets: [
        {
          type: "developperCarteSansPayer",
          quantite: 1,
          nePasEpuiserPileEtoile: true,
          continuerSiAucuneCarte: true
        }
      ]
    },
    {
      type: "archiverSourceDepuisMain"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Renommée",
  styleBandeau: "Renommée",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: 6,
  conditionVictoire: "Aucun"
},

  {
  nom: "Infamie", //---CHECK---//
  pin: "Épée",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Action gratuite. Volez 1 Progrès à chaque autre joueur. Les joueurs qui ne peuvent pas payer récupèrent une Instabilité.",
  effetsCode: [
    {
      type: "volerProgresAChaqueAutreJoueur",
      quantite: 1
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Renommée",
  styleBandeau: "Renommée",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: "Variable",
  conditionVictoire: "1 PV par Instabilité marquée par les autres joueurs."
},

 {
  nom: "Triomphe",  //---CHECK---//
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Cette carte ne peut pas être jouée, ni être réservée.",
  jouable: false,
  reserveInterdite: true,
  coutDeveloppement: "Aucun",
  categorie: "Renommée",
  styleBandeau: "Renommée",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: 11,
  conditionVictoire: "Aucun"
},

  {
  nom: "Triomphe",  //---CHECK---//
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Cette carte ne peut pas être jouée, ni être réservée.",
  jouable: false,
  reserveInterdite: true,
  coutDeveloppement: "Aucun",
  categorie: "Renommée",
  styleBandeau: "Renommée",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: 11,
  conditionVictoire: "Aucun"
},

  {
  nom: "Magnificence",  //---CHECK---//
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Action gratuite. Piochez 1 carte si possible et Choisir: défaussez-la OU placez-la au-dessus de votre deck OU archivez-la dans votre Histoire.",
  effetsCode: [
    {
      type: "piocherUnePuisChoisirSortDeLaCartePiochee"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Renommée",
  styleBandeau: "Renommée",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: 9,
  conditionVictoire: "Aucun"
},

  {
  nom: "Grandeur",  //---CHECK---// 
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Action gratuite. Gagnez 1 action. Vous POUVEZ archiver Grandeur dans votre Histoire.",
  effetsCode: [
    {
      type: "gagnerAction",
      quantite: 1
    },
    {
      type: "optionnel",
      message: "Voulez-vous archiver Grandeur dans votre Histoire ?",
      effetSiOui: [
        {
          type: "archiverSourceDepuisMain"
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Renommée",
  styleBandeau: "Renommée",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: "Conditionnel",
  conditionVictoire: "2 PV ou 6 PV si dans votre Histoire."
},

  {
    nom: "Grandiose", //---CHECK---//
    pin: "Persistante",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Passif: augmentez de 1 la taille de votre main.",
    coutDeveloppement: "Aucun",
    categorie: "Renommée",
    styleBandeau: "Renommée",
    nation: "Aucun",
    localisationDepart: "Aucun",
    pointsVictoire: 7,
    conditionVictoire: "Aucun"
  },

  {
  nom: "Éloges",  //---CHECK---// 
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: archivez <i>Éloges</i> dans votre Histoire OU innovez en Tradition/Civilisé/Région/Vassal.",
  effetsCode: [
    {
      type: "choisir",
      options: [
        {
          label: "Archiver Éloges dans votre Histoire",
          effets: [
            {
              type: "archiverSourceDepuisMain"
            }
          ]
        },
        {
          label: "Innover en Tradition / Civilisé / Région / Vassal",
          effets: [
            {
              type: "innoverParmiCategories",
              categories: ["Tradition", "Civilisé", "Région", "Vassal"]
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Renommée",
  styleBandeau: "Renommée",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: "Conditionnel",
  conditionVictoire: "3 PV ou 7 PV si dans votre Histoire"
},

  {
  nom: "Instabilité",
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: payez 1 Population OU défaussez 2 cartes OU payez 3 Matériaux. Si vous le faites, renvoyez cette carte dans la pile Instabilité.",
   effetsCode: [
    {
      type: "resoudreInstabiliteStandard"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Instabilité",
  styleBandeau: "Instabilité",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: -2,
  conditionVictoire: "Aucun"
},

 {
  nom: "Instabilité",
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: payez 1 Population OU défaussez 2 cartes OU payez 3 Matériaux. Si vous le faites, renvoyez cette carte dans la pile Instabilité.",
   effetsCode: [
    {
      type: "resoudreInstabiliteStandard"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Instabilité",
  styleBandeau: "Instabilité",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: -2,
  conditionVictoire: "Aucun"
},

  {
  nom: "Instabilité",
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: payez 1 Population OU défaussez 2 cartes OU payez 3 Matériaux. Si vous le faites, renvoyez cette carte dans la pile Instabilité.",
   effetsCode: [
    {
      type: "resoudreInstabiliteStandard"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Instabilité",
  styleBandeau: "Instabilité",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: -2,
  conditionVictoire: "Aucun"
},

  {
  nom: "Instabilité",
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: payez 1 Population OU défaussez 2 cartes OU payez 3 Matériaux. Si vous le faites, renvoyez cette carte dans la pile Instabilité.",
   effetsCode: [
    {
      type: "resoudreInstabiliteStandard"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Instabilité",
  styleBandeau: "Instabilité",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: -2,
  conditionVictoire: "Aucun"
},

 {
  nom: "Instabilité",
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: payez 1 Population OU défaussez 2 cartes OU payez 3 Matériaux. Si vous le faites, renvoyez cette carte dans la pile Instabilité.",
   effetsCode: [
    {
      type: "resoudreInstabiliteStandard"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Instabilité",
  styleBandeau: "Instabilité",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: -2,
  conditionVictoire: "Aucun"
},

  {
  nom: "Instabilité",
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
    effet: "Choisir: payez 1 Population OU défaussez 2 cartes OU payez 3 Matériaux. Si vous le faites, renvoyez cette carte dans la pile Instabilité.",
   effetsCode: [
    {
      type: "resoudreInstabiliteStandard"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Instabilité",
  styleBandeau: "Instabilité",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: -2,
  conditionVictoire: "Aucun"
},

  {
  nom: "Instabilité",
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: payez 1 Population OU défaussez 2 cartes OU payez 3 Matériaux. Si vous le faites, renvoyez cette carte dans la pile Instabilité.",
   effetsCode: [
    {
      type: "resoudreInstabiliteStandard"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Instabilité",
  styleBandeau: "Instabilité",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: -2,
  conditionVictoire: "Aucun"
},

  {
  nom: "Instabilité",
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: payez 1 Population OU défaussez 2 cartes OU payez 3 Matériaux. Si vous le faites, renvoyez cette carte dans la pile Instabilité.",
   effetsCode: [
    {
      type: "resoudreInstabiliteStandard"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Instabilité",
  styleBandeau: "Instabilité",
  nation: "Aucun",
  localisationDepart: "Aucun",
  pointsVictoire: -2,
  conditionVictoire: "Aucun"
},

];

/* =========================================================
   1B) DONNÉES DES CARTES NATION
   ========================================================= */

const cartesNations = [

   //---CARTES ROMAINS---//
  {

  nom: "Romains",
  styleBandeau: "Aucun",
  bandeau: "Noir",
  pin: "A",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Passif: à chaque fois que vous regardez n’importe quel nombre de carte du deck Renommée, regardez 1 carte supplémentaire puis gagnez 1 Progrès.",
  coutDeveloppement: "Aucun",
  categorie: "Puissance",
  nation: "Romains",
  localisationDepart: "Puissance",
  pointsVictoire: "Variable",
  conditionVictoire: "1 PV par 4 Population"
},

{
  nom: "Jules César", //---CHECK---//
  bandeau: "Gris",
  pin: "Aucun",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Action gratuite. Choisir: piochez 2 cartes OU vous POUVEZ acquérir Région/Vassal. Archivez <i>Jules César</i> dans votre Histoire",
  effetsCode: [
    {
      type: "choisir",
      options: [
        {
          label: "Piocher 2 cartes",
          effets: [
            { type: "piocher", quantite: 2 }
          ]
        },
        {
          label: "Acquérir Région ou Vassal",
          effets: [
            {
              type: "acquerirParmiCategories",
              categories: ["Région", "Vassal"]
            }
          ]
        }
      ]
    },
    { type: "archiverSourceDepuisMain" }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  nation: "Romains",
  localisationDepart: "Pleine",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

  {
    nom: "Empereur Trajan", //---CHECK---//
    bandeau: "Gris",
    pin: "Aucun",
    statut: "Empire",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Acquérez Tradition/Civilisé/Région/Vassal. Archivez <i>Empereur Trajan</i> dans votre Histoire",
    effetsCode: [
  {
    type: "acquerirParmiCategories",
    categories: ["Tradition", "Civilisé", "Région", "Vassal"]
  },
  {
    type: "archiverSourceDepuisMain"
  }
],
    coutDeveloppement: "2 Matériaux, 1 Population",
    categorie: "Aucun",
    nation: "Romains",
    localisationDepart: "Étoile",
    pointsVictoire: "Variable",
    conditionVictoire: "1 PV par 3 Population"
  },

  {
    nom: "Rome, la cité éternelle", //---CHECK---//
    bandeau: "Gris",
    pin: "Persistante",
    statut: "Empire",
    typeCarte: "Duplex",
    typeRegion: [],
    effet: "Ne peut être joué que si Cité de Rome est en jeu. Archivez <i>Cité de Rome</i> dans votre Histoire. Solstice: Choisir: gagnez 1 Matériaux OU gagnez 1 Population OU piochez 1 carte.",
     conditionJeu: {
    nomCarteDansTableau: "Cité de Rome"
  },
  effetsCode: [
    {
      type: "archiverCarteTableauParNom",
      nomCarte: "Cité de Rome"
    }
  ],
  solsticeCode: [
    {
      type: "choisir",
      options: [
        {
          label: "Gagner 1 Matériaux",
          effets: [
            { type: "gagner", ressource: "materiaux", quantite: 1 }
          ]
        },
        {
          label: "Gagner 1 Population",
          effets: [
            { type: "gagner", ressource: "population", quantite: 1 }
          ]
        },
        {
          label: "Piocher 1 carte",
          effets: [
            { type: "piocher", quantite: 1 }
          ]
        }
      ]
    }
  ],
    coutDeveloppement: "3 Matériaux, 3 Population",
    categorie: "Aucun",
    nation: "Romains",
    localisationDepart: "Étoile",
    pointsVictoire: 4,
    conditionVictoire: "Aucun"
  },

  {
    nom: "Génie Militaire", //---CHECK---//
    bandeau: "Gris",
    pin: "Épée",
    statut: "Empire",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Chaque autre joueur défausse 2 cartes. Vous POUVEZ innover en Civilisé.",
      effetsCode: [
    {
      type: "autresJoueursDefaussent",
      quantite: 2
    },
    {
      type: "optionnel",
      message: "Voulez-vous innover en Civilisé ?",
      effetSiOui: [
        {
          type: "innover",
          categorie: "Civilisé"
        }
      ]
    }
  ],
    coutDeveloppement: "4 Matériaux, 1 Population",
    categorie: "Aucun",
    nation: "Romains",
    localisationDepart: "Étoile",
    pointsVictoire: 3,
    conditionVictoire: "Aucun"
  },

  {
    nom: "Le Sénat",  //---CHECK---//
    bandeau: "Gris",
    pin: "Aucun",
    statut: "Empire",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Vous POUVEZ acquérir Civilisé. Vous POUVEZ archiver 1 carte de votre main dans votre Histoire.",
     effetsCode: [
    {
      type: "optionnel",
      message: "Voulez-vous acquérir une carte Civilisé ?",
      effetSiOui: [
        {
          type: "acquerirParmiCategories",
          categories: ["Civilisé"]
        }
      ]
    },
    {
      type: "optionnel",
      message: "Voulez-vous archiver 1 carte de votre main dans votre Histoire ?",
      effetSiOui: [
        {
          type: "archiverDepuisMain"
        }
      ]
    }
  ],
    coutDeveloppement: "4 Matériaux",
    categorie: "Aucun",
    nation: "Romains",
    localisationDepart: "Étoile",
    pointsVictoire: 3,
    conditionVictoire: "Aucun"
  },

  {
  nom: "Invasion romaine",  //---CHECK---//
  bandeau: "Gris",
  pin: "Épée",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Vous POUVEZ acquérir Région/Vassal. Chaque autre joueur abandonne une Région",
  effetsCode: [
    {
      type: "choisir",
      options: [
        {
          label: "Acquérir une carte Région ou Vassal",
          effets: [
            {
              type: "acquerirParmiCategories",
              categories: ["Région", "Vassal"]
            },
            {
              type: "autresJoueursAbandonnentCategorie",
              categorie: "Région",
              quantite: 1
            }
          ]
        },
        {
          label: "Ne rien acquérir",
          effets: [
            {
              type: "autresJoueursAbandonnentCategorie",
              categorie: "Région",
              quantite: 1
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "3 Population",
  categorie: "Aucun",
  nation: "Romains",
  localisationDepart: "Étoile",
  pointsVictoire: 2,
  conditionVictoire: "Aucun"
},

  {
    nom: "Légions", //---CHECK---//
    bandeau: "Gris",
    pin: "Persistante",
    statut: "Empire",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Passif: augmentez de 1 la taille de votre main. Vos cartes Conquête perdent l’icône Barbare.",
    coutDeveloppement: "3 Population",
    categorie: "Aucun",
    nation: "Romains",
    localisationDepart: "Étoile",
    pointsVictoire: 2,
    conditionVictoire: "Aucun"
  },

  {
    nom: "Rhétie",  //---CHECK---//
    styleBandeau: "Région",
    bandeau: "Jaune",
    pin: "Persistante",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: ["Sac", "Eau"],
    effet: "Gagnez 1 Matériaux. Vous POUVEZ réserver 1 carte.",
    effetsCode: [
    {
      type: "gagner",
      ressource: "materiaux",
      quantite: 1
    },
    {
      type: "optionnel",
      message: "Voulez-vous réserver 1 carte sous cette carte ?",
      effetSiOui: [
        {
          type: "reserverSousSource",
          quantite: 1
        }
      ]
    }
  ],
    coutDeveloppement: "Aucun",
    categorie: "Région",
    nation: "Romains",
    localisationDepart: "Croissant",
    pointsVictoire: "Aucun",
    conditionVictoire: "Aucun"
  },

  {
    nom: "Gaule aquitaine", //---CHECK---//
    styleBandeau:"Région",
    bandeau: "Jaune",
    pin: "Persistante",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: ["Sac", "Blé"],
    effet: "Vous POUVEZ réserver 1 carte.",
    effetsCode: [{
      type: "optionnel",
      message: "Voulez-vous réserver 1 carte sous cette carte ?",
      effetSiOui: [
        {
          type: "reserverSousSource",
          quantite: 1
        }
      ]
    }
  ],
    coutDeveloppement: "Aucun",
    categorie: "Région",
    nation: "Romains",
    localisationDepart: "Croissant",
    pointsVictoire: "Aucun",
    conditionVictoire: "Aucun"
  },

  {
    nom: "Du pain et des jeux", //---CHECK---//
    bandeau: "Gris",
    pin: "Persistante",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Solstice: défaussez 1 carte. Vous POUVEZ renvoyer une Instabilité. Vous POUVEZ renvoyer une Instabilité de votre défausse.",
   solsticeCode: [
  {
    type: "duPainEtDesJeuxSolstice"
  }
],
    coutDeveloppement: "Aucun",
    categorie: "Aucun",
    nation: "Romains",
    localisationDepart: "Croissant",
    pointsVictoire: "Aucun",
    conditionVictoire: "Aucun"
  },

  {
    nom: "Instabilité",
    styleBandeau: "Instabilité",
    pin: "Aucun",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Choisir: payez 1 Population OU défaussez 2 cartes OU payez 3 Matériaux. Si vous le faites, renvoyez cette carte dans la pile Instabilité.",
     effetsCode: [
    {
      type: "resoudreInstabiliteStandard"
    }
  ],
    coutDeveloppement: "Aucun",
    categorie: "Instabilité",
    nation: "Romains",
    localisationDepart: "Croissant",
    pointsVictoire: -2,
    conditionVictoire: "Aucun"
  },

  {
    nom: "Prospérité",  //---CHECK---//
    bandeau: "Gris",
    pin: "Aucun",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Tous les joueurs PEUVENT piocher 1 carte. Choisir: gagnez 1 Matériaux par Sac OU gagnez 1 Population par Région que vous avez en jeu.",
    effetsCode: [
    {
      type: "optionnel",
      message: "Voulez-vous piocher 1 carte ?",
      effetSiOui: [
        {
          type: "piocher",
          quantite: 1
        }
      ]
    },
    {
      type: "autresJoueursPeuventPiocher",
      quantite: 1
    },
    {
      type: "choisir",
      options: [
        {
          label: "Gagner 1 Matériaux par Sac",
          effets: [
            {
              type: "gagnerMateriauxParTagRegion",
              tagRegion: "Sac",
              quantiteParTag: 1
            }
          ]
        },
        {
          label: "Gagner 1 Population par Région en jeu",
          effets: [
            {
              type: "gagnerPopulationParRegionEnJeu",
              quantiteParRegion: 1
            }
          ]
        }
      ]
    }
  ],
    coutDeveloppement: "Aucun",
    categorie: "Aucun",
    nation: "Romains",
    localisationDepart: "Croissant",
    pointsVictoire: "Aucun",
    conditionVictoire: "Aucun"
  },

  {
    nom: "Dalmatie",  //---CHECK---//
    styleBandeau: "Région",
    bandeau: "Jaune",
    pin: "Persistante",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: ["Sac"],
    effet: "Gagnez 1 Population. Vous POUVEZ réserver 1 carte.",
     effetsCode: [
  { type: "gagner", ressource: "population", quantite: 1 },
  {
    type: "optionnel",
    message: "Voulez-vous réserver 1 carte sous cette carte ?",
    effetSiOui: [
      { type: "reserverSousSource", quantite: 1 }
    ]
  }
],
    coutDeveloppement: "Aucun",
    categorie: "Région",
    nation: "Romains",
    localisationDepart: "Base",
    pointsVictoire: "Aucun",
    conditionVictoire: "Aucun"
  },

  {
    nom: "Cité de Rome", //---CHECK---//  
    bandeau: "Gris",
    pin: "Persistante",
    statut: "Aucun",
    typeCarte: "Maison",
    typeRegion: [],
    effet: "Solstice: vous POUVEZ défausser 1 carte pour Choisir: gagnez 1 Population OU gagnez 1 Matériaux OU piochez 1 carte.",
    solsticeCode: [
    {
      type: "optionnel",
      message: "Défausser 1 carte pour activer le Solstice de Cité de Rome ?",
      effetSiOui: [
        { type: "defausserMain", quantite: 1 },
        {
          type: "choisir",
          options: [
            {
              label: "Gagner 1 Population",
              effets: [{ type: "gagner", ressource: "population", quantite: 1 }]
            },
            {
              label: "Gagner 1 Matériaux",
              effets: [{ type: "gagner", ressource: "materiaux", quantite: 1 }]
            },
            {
              label: "Piocher 1 carte",
              effets: [{ type: "piocher", quantite: 1 }]
            }
          ]
        }
      ]
    }
  ],
    coutDeveloppement: "Aucun",
    categorie: "Aucun",
    nation: "Romains",
    localisationDepart: "Base",
    pointsVictoire: "Aucun",
    conditionVictoire: "Aucun"
  },

    {
    nom: "Gloire",  //---CHECK---//
    bandeau: "Gris",
    pin: "Aucun",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Cette carte ne peut pas être réservée. Abandonnez 3 Région pour regarder jusqu’à 2 Renommée. Gardez une de ces cartes et remettez l’autre sur la pioche Renommée.",
    effetsCode: [
      { type: "abandonnerTableauCategorie", categorie: "Région", quantite: 3 },
      { type: "regarderRenommeeChoisirUne", quantite: 2 }
    ],
    coutDeveloppement: "Aucun",
    categorie: "Aucun",
    nation: "Romains",
    localisationDepart: "Base",
    pointsVictoire: "Aucun",
    conditionVictoire: "Aucun",
    reserveInterdite: true,
  },

  {
    nom: "Conquête",  //---CHECK---//
    bandeau: "Gris",
    pin: "Aucun",
    statut: "Barbare",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Choisir: payez 2 Population pour acquérir Région/Vassal OU payez 3 Population pour innover en Région/Vassal.",
    effetsCode: [
      {
        type: "choisir",
        options: [
          {
            label: "Payer 2 Population pour acquérir Région/Vassal",
            effets: [
              {
                type: "payerPuisAcquerirParmiCategories",
                ressource: "population",
                quantite: 2,
                categories: ["Région", "Vassal"]
              }
            ]
          },
          {
            label: "Payer 3 Population pour innover en Région/Vassal",
            effets: [
              {
                type: "payerPuisInnoverParmiCategories",
                ressource: "population",
                quantite: 3,
                categories: ["Région", "Vassal"]
              }
            ]
          }
        ]
      }
    ],
    coutDeveloppement: "Aucun",
    categorie: "Aucun",
    nation: "Romains",
    localisationDepart: "Base",
    pointsVictoire: "Aucun",
    conditionVictoire: "Aucun"
  },

  {
    nom: "Progrès", //---CHECK---//
    bandeau: "Gris",
    pin: "Aucun",
    statut: "Barbare",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Choisir: payez 3 Matériaux pour acquérir Tradition/Civilisé OU payez 5 Matériaux pour innover en Tradition/Civilisé.",
    effetsCode: [
      {
        type: "choisir",
        options: [
          {
            label: "Payer 3 Matériaux pour acquérir Tradition/Civilisé",
            effets: [
              {
                type: "payerPuisAcquerirParmiCategories",
                ressource: "materiaux",
                quantite: 3,
                categories: ["Tradition", "Civilisé"]
              }
            ]
          },
          {
            label: "Payer 5 Matériaux pour innover en Tradition/Civilisé",
            effets: [
              {
                type: "payerPuisInnoverParmiCategories",
                ressource: "materiaux",
                quantite: 5,
                categories: ["Tradition", "Civilisé"]
              }
            ]
          }
        ]
      }
    ],
    coutDeveloppement: "Aucun",
    categorie: "Aucun",
    nation: "Romains",
    localisationDepart: "Base",
    pointsVictoire: "Aucun",
    conditionVictoire: "Aucun"
  },

  {
    nom: "Instabilité",
    styleBandeau: "Instabilité",
    pin: "Aucun",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Choisir: payez 1 Population OU défaussez 2 cartes OU payez 3 Matériaux. Si vous le faites, renvoyez cette carte dans la pile Instabilité.",
     effetsCode: [
    {
      type: "resoudreInstabiliteStandard"
    }
  ],
    coutDeveloppement: "Aucun",
    categorie: "Instabilité",
    nation: "Romains",
    localisationDepart: "Base",
    pointsVictoire: -2,
    conditionVictoire: "Aucun"
  },

  {
    nom: "Triumvirat",  //---CHECK---//
    bandeau: "Gris",
    pin: "Aucun",
    statut: "Barbare",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Innovez en Tradition. Archivez <i>Triumvirat</i> dans votre Histoire.",
    effetsCode: [
      {
        type: "innover",
        categorie: "Tradition"
      },
      {
        type: "archiverSourceDepuisContexte"
      }
    ],
    coutDeveloppement: "Aucun",
    categorie: "Aucun",
    nation: "Romains",
    localisationDepart: "Base",
    pointsVictoire: "Aucun",
    conditionVictoire: "Aucun"
  },

  {
    nom: "Prospérité",  //---CHECK---//
    bandeau: "Gris",
    pin: "Aucun",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Tous les joueurs PEUVENT piocher 1 carte. Choisir: gagnez 1 Matériaux par Sac OU gagnez 1 Population par Région que vous avez en jeu.",
    effetsCode: [
      {
        type: "optionnel",
        message: "Voulez-vous piocher 1 carte ?",
        effetSiOui: [
          {
            type: "piocher",
            quantite: 1
          }
        ]
      },
      {
        type: "autresJoueursPeuventPiocher",
        quantite: 1
      },
      {
        type: "choisir",
        options: [
          {
            label: "Gagner 1 Matériaux par Sac",
            effets: [
              {
                type: "gagnerMateriauxParTagRegion",
                tagRegion: "Sac",
                quantiteParTag: 1
              }
            ]
          },
          {
            label: "Gagner 1 Population par Région en jeu",
            effets: [
              {
                type: "gagnerPopulationParRegionEnJeu",
                quantiteParRegion: 1
              }
            ]
          }
        ]
      }
    ],
    coutDeveloppement: "Aucun",
    categorie: "Aucun",
    nation: "Romains",
    localisationDepart: "Base",
    pointsVictoire: "Aucun",
    conditionVictoire: "Aucun"
  },

  {
    nom: "Expansion romaine", //---CHECK---//
    bandeau: "Gris",
    pin: "Épée",
    statut: "Barbare",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Acquérez Région. Vous POUVEZ à nouveau acquérir Région. Chaque autre joueur rappelle une Région. Archivez <i>Expansion romaine</i> dans votre Histoire.",
    effetsCode: [
      {
        type: "acquerirParmiCategories",
        categories: ["Région"]
      },
      {
        type: "optionnel",
        message: "Voulez-vous acquérir une autre carte Région ?",
        effetSiOui: [
          {
            type: "acquerirParmiCategories",
            categories: ["Région"]
          }
        ]
      },
      {
        type: "autresJoueursRappellentCategorie",
        categorie: "Région",
        quantite: 1
      },
      {
        type: "archiverSourceDepuisMain"
      }
    ],
    coutDeveloppement: "Aucun",
    categorie: "Aucun",
    nation: "Romains",
    localisationDepart: "Base",
    pointsVictoire: "Aucun",
    conditionVictoire: "Aucun"
  },

  {
    nom: "Instabilité",
    styleBandeau: "Instabilité",
    pin: "Aucun",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Choisir: payez 1 Population OU défaussez 2 cartes OU payez 3 Matériaux. Si vous le faites, renvoyez cette carte dans la pile Instabilité.",
     effetsCode: [
    {
      type: "resoudreInstabiliteStandard"
    }
  ],
    coutDeveloppement: "Aucun",
    categorie: "Instabilité",
    nation: "Romains",
    localisationDepart: "Base",
    pointsVictoire: -2,
    conditionVictoire: "Aucun"
  },

  //---CARTES CELTES---//

  {
    nom: "Celtes",
    styleBandeau: "Aucun",
    bandeau: "Noir",
    pin: "A",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Épuiser: quand vous acquérez Tradition ou que vous innovez en Tradition, épuisez Celtes, puis chaque autre joueur récupère une Instabilité.",
    coutDeveloppement: "Aucun",
    categorie: "Puissance",
    nation: "Celtes",
    localisationDepart: "Puissance",
    pointsVictoire: "Variable",
    conditionVictoire: "1 PV par Tradition"
  },

  {
    nom: "Or des celtes", //---CHECK---//
    bandeau: "Gris",
    pin: "Aucun",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Chaque autre joueur gagne 1 Matériaux. Gagnez 4 Matériaux par Blé dans votre zone de jeu.",
    effetsCode: [
      {
        type: "autresJoueursGagnentMateriaux",
        quantite: 1
      },
      {
        type: "gagnerMateriauxParTagRegion",
        tagRegion: "Blé",
        quantiteParTag: 4
      }
    ],
    coutDeveloppement: "Aucun",
    categorie: "Aucun",
    nation: "Celtes",
    localisationDepart: "Pleine",
    pointsVictoire: "Aucun",
    conditionVictoire: "Aucun"
  },

  {
  nom: "Vercingétorix", //---CHECK---// 
  bandeau: "Gris",
  pin: "Aucun",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Vous POUVEZ acquérir Tradition/Civilisé/Région/Vassal. Archivez <i>Vercingétorix</i> dans votre Histoire.",
  effetsCode: [
    {
      type: "acquerirParmiCategories",
      categories: ["Tradition", "Civilisé", "Région", "Vassal"]
    },
    {
      type: "archiverSourceDepuisMain"
    }
  ],
  coutDeveloppement: "4 Matériaux",
  categorie: "Aucun",
  nation: "Celtes",
  localisationDepart: "Étoile",
  pointsVictoire: "Variable",
  conditionVictoire: "1 PV par Tradition"
},

  {
    nom: "Chars", //---CHECK---//
    bandeau: "Gris",
    pin: "Persistante",
    statut: "Empire",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Passif: vous pouvez acquérir une Région exilée. Vos cartes Conquête et Épée perdent l’icône Barbare.",
    coutDeveloppement: "3 Population",
    categorie: "Aucun",
    nation: "Celtes",
    localisationDepart: "Étoile",
    pointsVictoire: 4,
    conditionVictoire: "Aucun"
  },

  {
    nom: "Innovation celtique", //---CHECK---//
    bandeau: "Gris",
    pin: "Épée",
    statut: "Empire",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Vous POUVEZ acquérir Tradition/Civilisé. Chaque autre joueur récupère une Instabilité.",
    effetsCode: [
      {
        type: "optionnel",
        message: "Voulez-vous acquérir une carte Tradition ou Civilisé ?",
        effetSiOui: [
          {
            type: "acquerirParmiCategories",
            categories: ["Tradition", "Civilisé"]
          }
        ]
      },
      {
        type: "autresJoueursRecuperentInstabilite",
        quantite: 1
      }
    ],
    coutDeveloppement: "2 Matériaux, 2 Population",
    categorie: "Aucun",
    nation: "Celtes",
    localisationDepart: "Étoile",
    pointsVictoire: 4,
    conditionVictoire: "Aucun"
  },

  {
  nom: "Écriture Oghamique",  //---CHECK---//
  pin: "Persistante",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Passif: augmentez de 1 la taille de votre main. Épuiser: vous POUVEZ archiver 1 carte de votre main dans votre Histoire. Vous POUVEZ archiver 1 carte de votre défausse dans votre Histoire.",
  effetsCode: [],
  epuiserCode: [
    {
      type: "optionnel",
      message: "Voulez-vous archiver une carte de votre main ?",
      effetSiOui: [
        { type: "archiverDepuisMain" }
      ]
    },
    {
      type: "optionnel",
      message: "Voulez-vous archiver une carte de votre défausse ?",
      effetSiOui: [
        { type: "archiverCarteDepuisDefausse" }
      ]
    }
  ],
  coutDeveloppement: "2 Matériaux, 2 Population",
  categorie: "Aucun",
  styleBandeau: "Gris",
  nation: "Celtes",
  localisationDepart: "Étoile",
  pointsVictoire: 4,
  conditionVictoire: "Aucun"
},

  {
    nom: "Instabilité",
    styleBandeau: "Instabilité",
    pin: "Aucun",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Choisir: payez 1 Population OU défaussez 2 cartes OU payez 3 Matériaux. Si vous le faites, renvoyez cette carte dans la pile Instabilité.",
     effetsCode: [
    {
      type: "resoudreInstabiliteStandard"
    }
  ],
    coutDeveloppement: "Aucun",
    categorie: "Instabilité",
    nation: "Celtes",
    localisationDepart: "Croissant",
    pointsVictoire: -2,
    conditionVictoire: "Aucun"
  },

  {
    nom: "Britannie", //---CHECK---//
    styleBandeau: "Région",
    bandeau: "Jaune",
    pin: "Persistante",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: ["Sac", "Blé"],
    effet: "Vous POUVEZ réserver 1 carte.",
    effetsCode: [
      {
        type: "optionnel",
        message: "Voulez-vous réserver 1 carte sous cette carte ?",
        effetSiOui: [
          {
            type: "reserverSousSource",
            quantite: 1
          }
        ]
      }
    ],
    coutDeveloppement: "Aucun",
    categorie: "Région",
    nation: "Celtes",
    localisationDepart: "Croissant",
    pointsVictoire: "Aucun",
    conditionVictoire: "Aucun"
  },

  {
    nom: "Armorique", //---CHECK---//
    styleBandeau: "Région",
    bandeau: "Jaune",
    pin: "Persistante",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: ["Sac", "Eau"],
    effet: "Vous POUVEZ réserver 1 carte.",
    effetsCode: [
      {
        type: "optionnel",
        message: "Voulez-vous réserver 1 carte sous cette carte ?",
        effetSiOui: [
          {
            type: "reserverSousSource",
            quantite: 1
          }
        ]
      }
    ],
    coutDeveloppement: "Aucun",
    categorie: "Région",
    nation: "Celtes",
    localisationDepart: "Croissant",
    pointsVictoire: "Aucun",
    conditionVictoire: "Aucun"
  },

  {
    nom: "Hibernie",  //---CHECK---// 
    styleBandeau: "Région",
    bandeau: "Jaune",
    pin: "Persistante",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: ["Blé"],
    effet: "Vous POUVEZ récupérer 1 carte de votre défausse. Vous POUVEZ réserver 1 carte.",
    effetsCode: [
      {
        type: "optionnel",
        condition: () => jeu.joueurZones.defausseJoueur.length > 0,
        message: "Voulez-vous récupérer 1 carte de votre défausse ?",
        effetSiOui: [
          {
            type: "recupererCarteDepuisDefausse"
          }
        ]
      },
      {
        type: "optionnel",
        message: "Voulez-vous réserver 1 carte sous cette carte ?",
        effetSiOui: [
          {
            type: "reserverSousSource",
            quantite: 1
          }
        ]
      }
    ],
    coutDeveloppement: "Aucun",
    categorie: "Région",
    nation: "Celtes",
    localisationDepart: "Croissant",
    pointsVictoire: "Aucun",
    conditionVictoire: "Aucun"
  },

  {
    nom: "Conquête",  //---CHECK---//
    bandeau: "Gris",
    pin: "Aucun",
    statut: "Barbare",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Choisir: payez 2 Population pour acquérir Région/Vassal OU payez 3 Population pour innover en Région/Vassal.",
    effetsCode: [
      {
        type: "choisir",
        options: [
          {
            label: "Payer 2 Population pour acquérir Région/Vassal",
            effets: [
              {
                type: "payerPuisAcquerirParmiCategories",
                ressource: "population",
                quantite: 2,
                categories: ["Région", "Vassal"]
              }
            ]
          },
          {
            label: "Payer 3 Population pour innover en Région/Vassal",
            effets: [
              {
                type: "payerPuisInnoverParmiCategories",
                ressource: "population",
                quantite: 3,
                categories: ["Région", "Vassal"]
              }
            ]
          }
        ]
      }
    ],
    coutDeveloppement: "Aucun",
    categorie: "Aucun",
    nation: "Celtes",
    localisationDepart: "Base",
    pointsVictoire: "Aucun",
    conditionVictoire: "Aucun"
  },

  {
    nom: "Gaule belge", //---CHECK---//
    styleBandeau: "Région",
    bandeau: "Jaune",
    pin: "Persistante",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: ["Eau"],
    effet: "Vous POUVEZ piocher 1 carte. Vous POUVEZ réserver 1 carte.",
    effetsCode: [
      {
        type: "optionnel",
        message: "Voulez-vous piocher 1 carte ?",
        effetSiOui: [
          {
            type: "piocher",
            quantite: 1
          }
        ]
      },
      {
        type: "optionnel",
        message: "Voulez-vous réserver 1 carte sous cette carte ?",
        effetSiOui: [
          {
            type: "reserverSousSource",
            quantite: 1
          }
        ]
      }
    ],
    coutDeveloppement: "Aucun",
    categorie: "Région",
    nation: "Celtes",
    localisationDepart: "Croissant",
    pointsVictoire: "Aucun",
    conditionVictoire: "Aucun"
  },

  {
    nom: "Instabilité",
    styleBandeau: "Instabilité",
    pin: "Aucun",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Choisir: payez 1 Population OU défaussez 2 cartes OU payez 3 Matériaux. Si vous le faites, renvoyez cette carte dans la pile Instabilité.",
     effetsCode: [
    {
      type: "resoudreInstabiliteStandard"
    }
  ],
    coutDeveloppement: "Aucun",
    categorie: "Instabilité",
    nation: "Celtes",
    localisationDepart: "Base",
    pointsVictoire: -2,
    conditionVictoire: "Aucun"
  },

  {
    nom: "Instabilité",
    styleBandeau: "Instabilité",
    pin: "Aucun",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Choisir: payez 1 Population OU défaussez 2 cartes OU payez 3 Matériaux. Si vous le faites, renvoyez cette carte dans la pile Instabilité.",
     effetsCode: [
    {
      type: "resoudreInstabiliteStandard"
    }
  ],
    coutDeveloppement: "Aucun",
    categorie: "Instabilité",
    nation: "Celtes",
    localisationDepart: "Base",
    pointsVictoire: -2,
    conditionVictoire: "Aucun"
  },

  {
    nom: "Vol de bétail", //---CHECK---// 
    bandeau: "Gris",
    pin: "Épée",
    statut: "Barbare",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Gagnez 2 Matériaux. Volez 1 Matériaux à chaque autre joueur ayant au moins une Région en jeu. Volez 1 Progrès à chaque joueur qui est en Empire.",
    effetsCode: [
      {
        type: "gagner",
        ressource: "materiaux",
        quantite: 2
      },
      {
        type: "volerMateriauxAuxAutresJoueursAvecRegion",
        quantite: 1
      },
      {
        type: "volerProgresAuxJoueursEmpire",
        quantite: 1
      }
    ],
    coutDeveloppement: "Aucun",
    categorie: "Aucun",
    nation: "Celtes",
    localisationDepart: "Base",
    pointsVictoire: "Aucun",
    conditionVictoire: "Aucun"
  },

  {
    nom: "Boadicée",  //---CHECK---//
    bandeau: "Gris",
    pin: "Épée",
    statut: "Barbare",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Gagnez 1 Progrès. Chaque autre joueur abandonne une Région. Archivez <i>Boadicée</i> dans votre Histoire.",
    effetsCode: [
      {
        type: "gagner",
        ressource: "progres",
        quantite: 1
      },
      {
        type: "autresJoueursAbandonnentCategorie",
        categorie: "Région",
        quantite: 1
      },
      {
        type: "archiverSourceDepuisMain"
      }
    ],
    coutDeveloppement: "Aucun",
    categorie: "Aucun",
    nation: "Celtes",
    localisationDepart: "Base",
    pointsVictoire: "Aucun",
    conditionVictoire: "Aucun"
  },

  {
    nom: "Gloire",  //---CHECK---//
    bandeau: "Gris",
    pin: "Aucun",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Cette carte ne peut pas être réservée. Abandonnez 3 Région pour regarder jusqu’à 2 Renommée. Gardez une de ces cartes et remettez l’autre sur la pioche Renommée.",
    effetsCode: [
      {
        type: "abandonnerTableauCategorie",
        categorie: "Région",
        quantite: 3
      },
      {
        type: "regarderRenommeeChoisirUne",
        quantite: 2
      }
    ],
    coutDeveloppement: "Aucun",
    categorie: "Aucun",
    nation: "Celtes",
    localisationDepart: "Base",
    pointsVictoire: "Aucun",
    conditionVictoire: "Aucun",
    reserveInterdite: true
  },

  {
    nom: "Conquête",  //---CHECK---//
    bandeau: "Gris",
    pin: "Aucun",
    statut: "Barbare",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Choisir: payez 2 Population pour acquérir Région/Vassal OU payez 3 Population pour innover en Région/Vassal.",
    effetsCode: [
      {
        type: "choisir",
        options: [
          {
            label: "Payer 2 Population pour acquérir Région/Vassal",
            effets: [
              {
                type: "payerPuisAcquerirParmiCategories",
                ressource: "population",
                quantite: 2,
                categories: ["Région", "Vassal"]
              }
            ]
          },
          {
            label: "Payer 3 Population pour innover en Région/Vassal",
            effets: [
              {
                type: "payerPuisInnoverParmiCategories",
                ressource: "population",
                quantite: 3,
                categories: ["Région", "Vassal"]
              }
            ]
          }
        ]
      }
    ],
    coutDeveloppement: "Aucun",
    categorie: "Aucun",
    nation: "Celtes",
    localisationDepart: "Croissant",
    pointsVictoire: "Aucun",
    conditionVictoire: "Aucun"
  },

  {
    nom: "Progrès", //---CHECK---//
    bandeau: "Gris",
    pin: "Aucun",
    statut: "Barbare",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Choisir: payez 3 Matériaux pour acquérir Tradition/Civilisé OU payez 5 Matériaux pour innover en Tradition/Civilisé.",
    effetsCode: [
      {
        type: "choisir",
        options: [
          {
            label: "Payer 3 Matériaux pour acquérir Tradition/Civilisé",
            effets: [
              {
                type: "payerPuisAcquerirParmiCategories",
                ressource: "materiaux",
                quantite: 3,
                categories: ["Tradition", "Civilisé"]
              }
            ]
          },
          {
            label: "Payer 5 Matériaux pour innover en Tradition/Civilisé",
            effets: [
              {
                type: "payerPuisInnoverParmiCategories",
                ressource: "materiaux",
                quantite: 5,
                categories: ["Tradition", "Civilisé"]
              }
            ]
          }
        ]
      }
    ],
    coutDeveloppement: "Aucun",
    categorie: "Aucun",
    nation: "Celtes",
    localisationDepart: "Base",
    pointsVictoire: "Aucun",
    conditionVictoire: "Aucun"
  },

  {
  nom: "Druides", //---CHECK---//
  bandeau: "Gris",
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: gagnez 1 Progrès OU payez 1 Population pour innover en Tradition OU renvoyez une Instabilité pour gagner 1 Population.",
  effetsCode: [
    {
      type: "choisir",
      options: [
        {
          label: "Gagner 1 Progrès",
          effets: [
            {
              type: "gagner",
              ressource: "progres",
              quantite: 1
            }
          ]
        },
        {
          label: "Payer 1 Population pour innover en Tradition",
          effets: [
            {
              type: "lancerPaiementPuisInnoverParmiCategories",
              ressource: "population",
              quantite: 1,
              categories: ["Tradition"]
            }
          ]
        },
        {
          label: "Renvoyer une Instabilité pour gagner 1 Population",
          effets: [
            {
              type: "renvoyerInstabiliteDepuisMain"
            },
            {
              type: "gagner",
              ressource: "population",
              quantite: 1
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  nation: "Celtes",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Progrès", //---CHECK---//
  bandeau: "Gris",
  pin: "Aucun",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: payez 3 Matériaux pour acquérir Tradition/Civilisé OU payez 5 Matériaux pour innover en Tradition/Civilisé.",
  effetsCode: [
    {
      type: "choisir",
      options: [
        {
          label: "Payer 3 Matériaux pour acquérir Tradition/Civilisé",
          effets: [
            {
              type: "payerPuisAcquerirParmiCategories",
              ressource: "materiaux",
              quantite: 3,
              categories: ["Tradition", "Civilisé"]
            }
          ]
        },
        {
          label: "Payer 5 Matériaux pour innover en Tradition/Civilisé",
          effets: [
            {
              type: "payerPuisInnoverParmiCategories",
              ressource: "materiaux",
              quantite: 5,
              categories: ["Tradition", "Civilisé"]
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  nation: "Celtes",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Chaudron de Cerridwen", //---CHECK---//
  bandeau: "Gris",
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Épuiser: payez 1 Progrès pour gagner 2 Population.",
  epuiserCode: [
    {
      type: "payer",
      ressource: "progres",
      quantite: 1
    },
    {
      type: "gagner",
      ressource: "population",
      quantite: 2
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  nation: "Celtes",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Celtica", //---CHECK---//
  styleBandeau: "Région",
  bandeau: "Jaune",
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: ["Sac"],
  effet: "Vous POUVEZ récupérer 1 carte de votre défausse et la placer au-dessus de votre deck. Vous POUVEZ réserver 1 carte.",
  effetsCode: [
    {
      type: "optionnel",
      condition: () => jeu.joueurZones.defausseJoueur.length > 0,
      message: "Voulez-vous récupérer 1 carte de votre défausse et la placer au-dessus de votre deck ?",
      effetSiOui: [
        {
          type: "recupererCarteDepuisDefausseVersDeck"
        }
      ]
    },
    {
      type: "optionnel",
      message: "Voulez-vous réserver 1 carte sous cette carte ?",
      effetSiOui: [
        {
          type: "reserverSousSource",
          quantite: 1
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Région",
  nation: "Celtes",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

/* =========================================================
   CARTES PERSES
   ========================================================= */

{
  nom: "Perses",
  styleBandeau: "Aucun",
  bandeau: "Noir",
  pin: "A",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Épuiser: dépensez 1 action, placez 2 cartes de votre main au-dessus de votre deck et payez 1 Population pour innover en Vassal.",
  conditionEpuiser: () =>
    (jeu.joueurZones.mainJoueur || []).length >= 2 &&
    peutPayerRessource("population", 1) &&
    (jeu.joueur.actions || 0) >= 1,
  messageConditionEpuiser:
    "Vous devez avoir au moins 2 cartes en main, 1 Population (ou 1 Progrès) et 1 action pour utiliser l'effet des Perses.",
  epuiserCode: [
  {
    type: "payerAction",
    quantite: 1
  },
  {
    type: "placerCartesMainAuDessusDeck",
    quantite: 2
  },
  {
    type: "payer",
    ressource: "population",
    quantite: 1
  },
  {
    type: "innoverVassalOuGagnerProgres",
    quantiteProgresSiEchec: 2
  }
],
  coutDeveloppement: "Aucun",
  categorie: "Puissance",
  nation: "Perses",
  localisationDepart: "Puissance",
  pointsVictoire: "Variable",
  conditionVictoire: "1 PV par 3 Vassal"
},

{
  nom: "Cité de Persépolis",
  bandeau: "Gris",
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Maison",
  typeRegion: [],
  effet: "Solstice: vous POUVEZ défausser 1 carte pour Choisir: gagnez 1 Population OU gagnez 1 Matériaux OU piochez 1 carte.",
  solsticeCode: [
    {
      type: "optionnel",
      message: "Défausser 1 carte pour activer le Solstice de Cité de Persépolis ?",
      effetSiOui: [
        { type: "defausserMain", quantite: 1 },
        {
          type: "choisir",
          options: [
            {
              label: "Gagner 1 Population",
              effets: [{ type: "gagner", ressource: "population", quantite: 1 }]
            },
            {
              label: "Gagner 1 Matériaux",
              effets: [{ type: "gagner", ressource: "materiaux", quantite: 1 }]
            },
            {
              label: "Piocher 1 carte",
              effets: [{ type: "piocher", quantite: 1 }]
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  styleBandeau: "Civilisé",
  nation: "Perses",
  localisationDepart: "Pleine",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Plaine de Nisaean",
  bandeau: "Jaune",
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: ["Blé", "Blé"],
  effet: "Vous POUVEZ réserver 1 carte.",
  effetsCode: [
    {
      type: "optionnel",
      message: "Voulez-vous réserver 1 carte sous cette carte ?",
      effetSiOui: [
        {
          type: "reserverSousSource",
          quantite: 1
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Région",
  styleBandeau: "Région",
  nation: "Perses",
  localisationDepart: "Croissant",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Arachosie",
  bandeau: "Jaune",
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: ["Sac", "Eau"],
  effet: "Vous POUVEZ archiver 1 carte de votre défausse dans votre Histoire. Vous POUVEZ réserver 1 carte.",
  effetsCode: [
    {
      type: "optionnel",
      condition: () => jeu.joueurZones.defausseJoueur.length > 0,
      message: "Archiver une carte de votre défausse dans votre Histoire ?",
      effetSiOui: [
        {
          type: "archiverCarteDepuisDefausse"
        }
      ]
    },
    {
      type: "optionnel",
      message: "Voulez-vous réserver 1 carte sous cette carte ?",
      effetSiOui: [
        {
          type: "reserverSousSource",
          quantite: 1
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Région",
  styleBandeau: "Région",
  nation: "Perses",
  localisationDepart: "Croissant",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Empire Mède",
  bandeau: "Bleu",
  pin: "Aucun",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Gagnez 4 Matériaux. Archivez <i>Empire Mède</i> dans votre Histoire.",
  effetsCode: [
    {
      type: "gagner",
      ressource: "materiaux",
      quantite: 4
    },
    {
      type: "archiverSourceDepuisMain"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  styleBandeau: "Vassal",
  nation: "Perses",
  localisationDepart: "Croissant",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Instabilité",
  bandeau: "Rouge",
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: payez 1 Population OU défaussez 2 cartes OU payez 3 Matériaux. Si vous le faites, renvoyez cette carte dans la pile Instabilité.",
   effetsCode: [
    {
      type: "resoudreInstabiliteStandard"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Instabilité",
  styleBandeau: "Instabilité",
  nation: "Perses",
  localisationDepart: "Croissant",
  pointsVictoire: -2,
  conditionVictoire: "Aucun"
},

{
  nom: "Or des Perses",
  bandeau: "Gris",
  pin: "Épée",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Tous les joueurs gagnent 2 Matériaux. Vous gagnez 1 Progrès. Chaque autre joueur récupère une Instabilité.",
  effetsCode: [
    {
      type: "gagner",
      ressource: "materiaux",
      quantite: 2
    },
    {
      type: "autresJoueursGagnentMateriaux",
      quantite: 2
    },
    {
      type: "gagner",
      ressource: "progres",
      quantite: 1
    },
    {
      type: "autresJoueursRecuperentInstabilite"
    }
  ],
  coutDeveloppement: "7 Matériaux",
  categorie: "Aucun",
  styleBandeau: "Civilisé",
  nation: "Perses",
  localisationDepart: "Étoile",
  pointsVictoire: 4,
  conditionVictoire: "Aucun"
},

{
  nom: "Satrape",
  bandeau: "Gris",
  pin: "Aucun",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Action gratuite. Payez 3 Matériaux pour gagner 1 action.",
  effetsCode: [
    {
      type: "payer",
      ressource: "materiaux",
      quantite: 3
    },
    {
      type: "gagnerAction",
      quantite: 1
    }
  ],
  coutDeveloppement: "4 Matériaux, 2 Population",
  categorie: "Aucun",
  styleBandeau: "Civilisé",
  nation: "Perses",
  localisationDepart: "Étoile",
  pointsVictoire: 3,
  conditionVictoire: "Aucun"
},

{
  nom: "Développement",
  bandeau: "Gris",
  pin: "Aucun",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: développez 1 carte OU payez 2 Matériaux pour acquérir Tradition/Civilisé.",
  effetsCode: [
    {
      type: "choisir",
      afficherMarcheAvantChoix: true,
      options: [
        {
          label: "Développer",
          effets: [
	              {
	                type: "developperCarte",
	                nePasEpuiserPileEtoile: true
	              }
          ]
        },
        {
          label: "Payer 2 Matériaux pour acquérir Tradition/Civilisé",
          effets: [
            { type: "payer", ressource: "materiaux", quantite: 2 },
            {
              type: "acquerirParmiCategories",
              categories: ["Tradition", "Civilisé"]
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "4 Matériaux, 2 Population",
  categorie: "Aucun",
  styleBandeau: "Civilisé",
  nation: "Perses",
  localisationDepart: "Étoile",
  pointsVictoire: 3,
  conditionVictoire: "Aucun"
},

{
  nom: "Darius I",
  bandeau: "Gris",
  pin: "Aucun",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Acquérez Tradition/Civilisé/Région/Vassal. Archivez <i>Darius I</i> dans votre Histoire.",
  effetsCode: [
    {
      type: "acquerirParmiCategories",
      categories: ["Tradition", "Civilisé", "Région", "Vassal"]
    },
    {
      type: "archiverSourceDepuisMain"
    }
  ],
  coutDeveloppement: "3 Matériaux, 2 Population",
  categorie: "Aucun",
  styleBandeau: "Civilisé",
  nation: "Perses",
  localisationDepart: "Étoile",
  pointsVictoire: "Variable",
  conditionVictoire: "1 PV par Vassal"
},

{
  nom: "Babyloniens",
  bandeau: "Bleu",
  pin: "Aucun",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Action gratuite. Acquérez Tradition/Civilisé/Région/Vassal. Archivez <i>Babyloniens</i> dans votre Histoire.",
  effetsCode: [
    {
      type: "acquerirParmiCategories",
      categories: ["Tradition", "Civilisé", "Région", "Vassal"]
    },
    {
      type: "archiverSourceDepuisMain"
    }
  ],
  coutDeveloppement: "5 Population",
  categorie: "Aucun",
  styleBandeau: "Vassal",
  nation: "Perses",
  localisationDepart: "Étoile",
  pointsVictoire: 4,
  conditionVictoire: "Aucun"
},

{
  nom: "Bélier",
  bandeau: "Gris",
  pin: "Épée",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Chaque autre joueur abandonne une Maison. Vous POUVEZ innover en Région/Vassal.",
  effetsCode: [
    {
      type: "autresJoueursAbandonnentCategorie",
      categorie: "Maison",
      quantite: 1
    },
    {
      type: "optionnel",
      message: "Voulez-vous innover en Région ou Vassal ?",
      effetSiOui: [
        {
          type: "choisir",
          options: [
            {
              label: "Innover en Région",
              effets: [
                {
                  type: "innover",
                  categorie: "Région"
                }
              ]
            },
            {
              label: "Innover en Vassal",
              effets: [
                {
                  type: "innover",
                  categorie: "Vassal"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "4 Population",
  categorie: "Aucun",
  styleBandeau: "Civilisé",
  nation: "Perses",
  localisationDepart: "Étoile",
  pointsVictoire: 2,
  conditionVictoire: "Aucun"
},

{
  nom: "Moulins à Vent",
  bandeau: "Gris",
  pin: "Persistante",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Action gratuite. Épuiser: pour le reste du tour, considérez 1 Blé comme 3 Sac.",
  epuiserCode: [
    {
      type: "activerAgriculture"
    }
  ],
  coutDeveloppement: "4 Matériaux",
  categorie: "Aucun",
  styleBandeau: "Civilisé",
  nation: "Perses",
  localisationDepart: "Étoile",
  pointsVictoire: 2,
  conditionVictoire: "Aucun"
},

{
  nom: "Zagros",
  bandeau: "Jaune",
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: ["Sac", "Eau"],
  effet: "Vous POUVEZ réserver 1 carte.",
  effetsCode: [
    {
      type: "optionnel",
      message: "Voulez-vous réserver 1 carte sous cette carte ?",
      effetSiOui: [
        {
          type: "reserverSousSource",
          quantite: 1
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Région",
  styleBandeau: "Région",
  nation: "Perses",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Gloire",
  bandeau: "Gris",
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Cette carte ne peut pas être réservée. Abandonnez 3 Région pour regarder jusqu’à 2 Renommée. Gardez une de ces cartes et remettez l’autre sur la pioche Renommée.",
  effetsCode: [
    {
      type: "abandonnerTableauCategorie",
      categorie: "Région",
      quantite: 3
    },
    {
      type: "regarderRenommeeChoisirUne",
      quantite: 2
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  styleBandeau: "Civilisé",
  nation: "Perses",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun",
  reserveInterdite: true
},

{
    nom: "Prospérité",  //---CHECK---//
    bandeau: "Gris",
    pin: "Aucun",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Tous les joueurs PEUVENT piocher 1 carte. Choisir: gagnez 1 Matériaux par Sac OU gagnez 1 Population par Région que vous avez en jeu.",
    effetsCode: [
      {
        type: "optionnel",
        message: "Voulez-vous piocher 1 carte ?",
        effetSiOui: [
          {
            type: "piocher",
            quantite: 1
          }
        ]
      },
      {
        type: "autresJoueursPeuventPiocher",
        quantite: 1
      },
      {
        type: "choisir",
        options: [
          {
            label: "Gagner 1 Matériaux par Sac",
            effets: [
              {
                type: "gagnerMateriauxParTagRegion",
                tagRegion: "Sac",
                quantiteParTag: 1
              }
            ]
          },
          {
            label: "Gagner 1 Population par Région en jeu",
            effets: [
              {
                type: "gagnerPopulationParRegionEnJeu",
                quantiteParRegion: 1
              }
            ]
          }
        ]
      }
    ],
    coutDeveloppement: "Aucun",
    categorie: "Aucun",
    nation: "Perses",
    localisationDepart: "Base",
    pointsVictoire: "Aucun",
    conditionVictoire: "Aucun"
  },

{
  nom: "Bactrie",
  bandeau: "Jaune",
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Gagnez 3 Matériaux. Vous POUVEZ réserver 1 carte.",
  effetsCode: [
    {
      type: "gagner",
      ressource: "materiaux",
      quantite: 3
    },
    {
      type: "optionnel",
      message: "Voulez-vous réserver 1 carte sous cette carte ?",
      effetSiOui: [
        {
          type: "reserverSousSource",
          quantite: 1
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Région",
  styleBandeau: "Région",
  nation: "Perses",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Conquête",
  bandeau: "Gris",
  pin: "Aucun",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: payez 2 Population pour acquérir Région/Vassal OU payez 3 Population pour innover en Région/Vassal.",
  effetsCode: [
    {
      type: "choisir",
      options: [
        {
          label: "Payer 2 Population pour acquérir Région/Vassal",
          effets: [
            {
              type: "payerPuisAcquerirParmiCategories",
              ressource: "population",
              quantite: 2,
              categories: ["Région", "Vassal"]
            }
          ]
        },
        {
          label: "Payer 3 Population pour innover en Région/Vassal",
          effets: [
            {
              type: "payerPuisInnoverParmiCategories",
              ressource: "population",
              quantite: 3,
              categories: ["Région", "Vassal"]
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  styleBandeau: "Civilisé",
  nation: "Perses",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Conquête",
  bandeau: "Gris",
  pin: "Aucun",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: payez 2 Population pour acquérir Région/Vassal OU payez 3 Population pour innover en Région/Vassal.",
  effetsCode: [
    {
      type: "choisir",
      options: [
        {
          label: "Payer 2 Population pour acquérir Région/Vassal",
          effets: [
            {
              type: "payerPuisAcquerirParmiCategories",
              ressource: "population",
              quantite: 2,
              categories: ["Région", "Vassal"]
            }
          ]
        },
        {
          label: "Payer 3 Population pour innover en Région/Vassal",
          effets: [
            {
              type: "payerPuisInnoverParmiCategories",
              ressource: "population",
              quantite: 3,
              categories: ["Région", "Vassal"]
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  styleBandeau: "Civilisé",
  nation: "Perses",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Progrès",
  bandeau: "Gris",
  pin: "Aucun",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: payez 3 Matériaux pour acquérir Tradition/Civilisé OU payez 5 Matériaux pour innover en Tradition/Civilisé.",
  effetsCode: [
    {
      type: "choisir",
      options: [
        {
          label: "Payer 3 Matériaux pour acquérir Tradition/Civilisé",
          effets: [
            {
              type: "payerPuisAcquerirParmiCategories",
              ressource: "materiaux",
              quantite: 3,
              categories: ["Tradition", "Civilisé"]
            }
          ]
        },
        {
          label: "Payer 5 Matériaux pour innover en Tradition/Civilisé",
          effets: [
            {
              type: "payerPuisInnoverParmiCategories",
              ressource: "materiaux",
              quantite: 5,
              categories: ["Tradition", "Civilisé"]
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  styleBandeau: "Civilisé",
  nation: "Perses",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Lydiens",
  bandeau: "Bleu",
  pin: "Aucun",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Gagnez 2 Population. Archivez <i>Lydiens</i> dans votre Histoire.",
  effetsCode: [
    {
      type: "gagner",
      ressource: "population",
      quantite: 2
    },
    {
      type: "archiverSourceDepuisMain"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  styleBandeau: "Vassal",
  nation: "Perses",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Instabilité",
  bandeau: "Rouge",
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: payez 1 Population OU défaussez 2 cartes OU payez 3 Matériaux. Si vous le faites, renvoyez cette carte dans la pile Instabilité.",
   effetsCode: [
    {
      type: "resoudreInstabiliteStandard"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Instabilité",
  styleBandeau: "Instabilité",
  nation: "Perses",
  localisationDepart: "Base",
  pointsVictoire: -2,
  conditionVictoire: "Aucun"
},

{
  nom: "Instabilité",
  bandeau: "Rouge",
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: payez 1 Population OU défaussez 2 cartes OU payez 3 Matériaux. Si vous le faites, renvoyez cette carte dans la pile Instabilité.",
   effetsCode: [
    {
      type: "resoudreInstabiliteStandard"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Instabilité",
  styleBandeau: "Instabilité",
  nation: "Perses",
  localisationDepart: "Base",
  pointsVictoire: -2,
  conditionVictoire: "Aucun"
},

///---CARTES MACÉDONIENS---///
  {
    nom: "Macédoniens", //---CHECK---//
    pin: "A",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Passif: quand vous jouez une Région de votre défausse, gagnez 2 Matériaux.",
    coutDeveloppement: "Aucun",
    categorie: "Puissance",
    styleBandeau: "Aucun",
    nation: "Macédoniens",
    localisationDepart: "Puissance",
    pointsVictoire: "Variable",
    conditionVictoire: "1 PV par 2 Région"
  },

  {
    nom: "Instabilité", //---CHECK---//
    pin: "Aucun",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Choisir: payez 1 Population OU défaussez 2 cartes OU payez 3 Matériaux. Si vous le faites, renvoyez cette carte dans la pile Instabilité.",
     effetsCode: [
    {
      type: "resoudreInstabiliteStandard"
    }
  ],
    coutDeveloppement: "Aucun",
    categorie: "Instabilité",
    styleBandeau: "Instabilité",
    nation: "Macédoniens",
    localisationDepart: "Base",
    pointsVictoire: -2,
    conditionVictoire: "Aucun"
  },

  {
    nom: "Instabilité", //---CHECK---//
    pin: "Aucun",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Choisir: payez 1 Population OU défaussez 2 cartes OU payez 3 Matériaux. Si vous le faites, renvoyez cette carte dans la pile Instabilité.",
     effetsCode: [
    {
      type: "resoudreInstabiliteStandard"
    }
  ],
    coutDeveloppement: "Aucun",
    categorie: "Instabilité",
    styleBandeau: "Instabilité",
    nation: "Macédoniens",
    localisationDepart: "Base",
    pointsVictoire: -2,
    conditionVictoire: "Aucun"
  },

  {
    nom: "Instabilité", //---CHECK---//
    pin: "Aucun",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Choisir: payez 1 Population OU défaussez 2 cartes OU payez 3 Matériaux. Si vous le faites, renvoyez cette carte dans la pile Instabilité.",
     effetsCode: [
    {
      type: "resoudreInstabiliteStandard"
    }
  ],
    coutDeveloppement: "Aucun",
    categorie: "Instabilité",
    styleBandeau: "Instabilité",
    nation: "Macédoniens",
    localisationDepart: "Base",
    pointsVictoire: -2,
    conditionVictoire: "Aucun"
  },

  {
    nom: "Philippe II", //---CHECK---//
    pin: "Aucun",
    statut: "Barbare",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Acquérez Tradition/Civilisé/Région/Vassal, puis archivez <i>Philippe II</i> dans votre Histoire.",
    effetsCode: [
      {
        type: "acquerirParmiCategories",
        categories: ["Tradition", "Civilisé", "Région", "Vassal"]
      },
      {
        type: "archiverSourceDepuisMain"
      }
    ],
    coutDeveloppement: "Aucun",
    categorie: "Aucun",
    styleBandeau: "Aucun",
    nation: "Macédoniens",
    localisationDepart: "Base",
    pointsVictoire: 0,
    conditionVictoire: "Aucun"
  },

  {
    nom: "Progrès", //---CHECK---//
    pin: "Aucun",
    statut: "Barbare",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Choisir: payez 3 Matériaux pour acquérir Tradition/Civilisé OU payez 5 Matériaux pour innover en Tradition/Civilisé.",
  effetsCode: [
    {
      type: "choisir",
      options: [
        {
          label: "Payer 3 Matériaux pour acquérir Tradition/Civilisé",
          effets: [
            {
              type: "payerPuisAcquerirParmiCategories",
              ressource: "materiaux",
              quantite: 3,
              categories: ["Tradition", "Civilisé"]
            }
          ]
        },
        {
          label: "Payer 5 Matériaux pour innover en Tradition/Civilisé",
          effets: [
            {
              type: "payerPuisInnoverParmiCategories",
              ressource: "materiaux",
              quantite: 5,
              categories: ["Tradition", "Civilisé"]
            }
          ]
        }
      ]
    }
  ],
    coutDeveloppement: "Aucun",
    categorie: "Aucun",
    styleBandeau: "Aucun",
    nation: "Macédoniens",
    localisationDepart: "Base",
    pointsVictoire: 0,
    conditionVictoire: "Aucun"
  },

  {
    nom: "Conquête",  //---CHECK---//
    pin: "Aucun",
    statut: "Barbare",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Choisir: payez 2 Population pour acquérir Région/Vassal OU payez 3 Population pour innover en Région/Vassal.",
    effetsCode: [
      {
        type: "choisir",
        options: [
          {
            label: "Payer 2 Population pour acquérir Région/Vassal",
            effets: [
              {
                type: "payerPuisAcquerirParmiCategories",
                ressource: "population",
                quantite: 2,
                categories: ["Région", "Vassal"]
              }
            ]
          },
          {
            label: "Payer 3 Population pour innover en Région/Vassal",
            effets: [
              {
                type: "payerPuisInnoverParmiCategories",
                ressource: "population",
                quantite: 3,
                categories: ["Région", "Vassal"]
              }
            ]
          }
        ]
      }
    ],
    coutDeveloppement: "Aucun",
    categorie: "Aucun",
    styleBandeau: "Aucun",
    nation: "Macédoniens",
    localisationDepart: "Base",
    pointsVictoire: 0,
    conditionVictoire: "Aucun"
  },

 {
  nom: "Phalange",  //---CHECK---//
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Épuiser: dépensez 1 action pour jouer une Région de votre défausse.",
  epuiserCode: [
    {
      type: "payerAction",
      quantite: 1
    },
    {
      type: "jouerRegionDepuisDefausse"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  styleBandeau: "Aucun",
  nation: "Macédoniens",
  localisationDepart: "Base",
  pointsVictoire: 0,
  conditionVictoire: "Aucun"
},

  {
    nom: "Pélagonie", //---CHECK---//
    pin: "Persistante",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: ["Blé"],
    effet: "Gagnez 1 Population. Vous POUVEZ réserver 1 carte.",
    effetsCode: [
      {
        type: "gagner",
        ressource: "population",
        quantite: 1
      },
      {
        type: "optionnel",
        message: "Voulez-vous réserver 1 carte sous cette carte ?",
        effetSiOui: [
          {
            type: "reserverSousSource",
            quantite: 1
          }
        ]
      }
    ],
    coutDeveloppement: "Aucun",
    categorie: "Région",
    styleBandeau: "Région",
    nation: "Macédoniens",
    localisationDepart: "Base",
    pointsVictoire: 0,
    conditionVictoire: "Aucun"
  },

  {
    nom: "Orestide",  //---CHECK---//
    pin: "Persistante",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Gagnez 2 Matériaux. Vous POUVEZ réserver 1 carte.",
    effetsCode: [
      {
        type: "gagner",
        ressource: "materiaux",
        quantite: 2
      },
      {
        type: "optionnel",
        message: "Voulez-vous réserver 1 carte sous cette carte ?",
        effetSiOui: [
          {
            type: "reserverSousSource",
            quantite: 1
          }
        ]
      }
    ],
    coutDeveloppement: "Aucun",
    categorie: "Région",
    styleBandeau: "Région",
    nation: "Macédoniens",
    localisationDepart: "Base",
    pointsVictoire: 0,
    conditionVictoire: "Aucun"
  },

  {
    nom: "Conquête",  //---CHECK---//
    pin: "Aucun",
    statut: "Barbare",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Choisir: payez 2 Population pour acquérir Région/Vassal OU payez 3 Population pour innover en Région/Vassal.",
    effetsCode: [
      {
        type: "choisir",
        options: [
          {
            label: "Payer 2 Population pour acquérir Région/Vassal",
            effets: [
              {
                type: "payerPuisAcquerirParmiCategories",
                ressource: "population",
                quantite: 2,
                categories: ["Région", "Vassal"]
              }
            ]
          },
          {
            label: "Payer 3 Population pour innover en Région/Vassal",
            effets: [
              {
                type: "payerPuisInnoverParmiCategories",
                ressource: "population",
                quantite: 3,
                categories: ["Région", "Vassal"]
              }
            ]
          }
        ]
      }
    ],
    coutDeveloppement: "Aucun",
    categorie: "Aucun",
    styleBandeau: "Aucun",
    nation: "Macédoniens",
    localisationDepart: "Base",
    pointsVictoire: 0,
    conditionVictoire: "Aucun"
  },

  {
    nom: "Vallée de l’Aliakmon",  //---CHECK---//
    pin: "Persistante",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: ["Blé", "Eau"],
    effet: "Gagnez 1 Population. Vous POUVEZ réserver 1 carte.",
    effetsCode: [
      {
        type: "gagner",
        ressource: "population",
        quantite: 1
      },
      {
        type: "optionnel",
        message: "Voulez-vous réserver 1 carte sous cette carte ?",
        effetSiOui: [
          {
            type: "reserverSousSource",
            quantite: 1
          }
        ]
      }
    ],
    coutDeveloppement: "Aucun",
    categorie: "Région",
    styleBandeau: "Région",
    nation: "Macédoniens",
    localisationDepart: "Base",
    pointsVictoire: 0,
    conditionVictoire: "Aucun"
  },

  {
    nom: "Prospérité",  //---CHECK---//
    pin: "Aucun",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Tous les joueurs PEUVENT piocher 1 carte. Choisir: gagnez 1 Matériaux par Sac OU gagnez 1 Population par Région que vous avez en jeu.",
    effetsCode: [
      {
        type: "optionnel",
        message: "Voulez-vous piocher 1 carte ?",
        effetSiOui: [
          {
            type: "piocher",
            quantite: 1
          }
        ]
      },
      {
        type: "autresJoueursPeuventPiocher",
        quantite: 1
      },
      {
        type: "choisir",
        options: [
          {
            label: "Gagner 1 Matériaux par Sac",
            effets: [
              {
                type: "gagnerMateriauxParTagRegion",
                tagRegion: "Sac",
                quantiteParTag: 1
              }
            ]
          },
          {
            label: "Gagner 1 Population par Région en jeu",
            effets: [
              {
                type: "gagnerPopulationParRegionEnJeu",
                quantiteParRegion: 1
              }
            ]
          }
        ]
      }
    ],
    coutDeveloppement: "Aucun",
    categorie: "Aucun",
    styleBandeau: "Aucun",
    nation: "Macédoniens",
    localisationDepart: "Croissant",
    pointsVictoire: 0,
    conditionVictoire: "Aucun"
  },

  {
  nom: "Ouxiens", //---CHECK---// 
  pin: "Épée",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Volez 2 Matériaux à chaque autre joueur. Vous POUVEZ renvoyer 1 Épuisement utilisé.",
  effetsCode: [
    {
      type: "volerMateriauxAChaqueAutreJoueur",
      quantite: 2
    },
    {
      type: "optionnel",
      message: "Voulez-vous renvoyer 1 Épuisement utilisé ?",
      effetSiOui: [
        {
          type: "renvoyerEpuisementUtilise",
          quantite: 1
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Vassal",
  styleBandeau: "Vassal",
  nation: "Macédoniens",
  localisationDepart: "Croissant",
  pointsVictoire: 0,
  conditionVictoire: "Aucun"
},

  {
    nom: "Gloire",  //---CHECK---//
    pin: "Aucun",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Cette carte ne peut pas être réservée. Abandonnez 3 Région pour regarder jusqu’à 2 Renommée. Gardez une de ces cartes et remettez l’autre sur la pioche Renommée.",
    effetsCode: [
      {
        type: "abandonnerTableauCategorie",
        categorie: "Région",
        quantite: 3
      },
      {
        type: "regarderRenommeeChoisirUne",
        quantite: 2
      }
    ],
    coutDeveloppement: "Aucun",
    categorie: "Aucun",
    styleBandeau: "Aucun",
    nation: "Macédoniens",
    localisationDepart: "Croissant",
    pointsVictoire: 0,
    conditionVictoire: "Aucun",
    reserveInterdite: true
  },

  {
    nom: "Alexandre", //---CHECK---//
    pin: "Aucun",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Piochez 1 carte. Vous POUVEZ innover en Région/Vassal. Archivez <i>Alexandre</i> dans votre Histoire.",
    effetsCode: [
      {
        type: "piocher",
        quantite: 1
      },
      {
        type: "optionnel",
        message: "Voulez-vous innover en Région ou Vassal ?",
        effetSiOui: [
          {
            type: "innoverParmiCategories",
            categories: ["Région", "Vassal"]
          }
        ]
      },
      {
        type: "archiverSourceDepuisMain"
      }
    ],
    coutDeveloppement: "Aucun",
    categorie: "Aucun",
    styleBandeau: "Aucun",
    nation: "Macédoniens",
    localisationDepart: "Pleine",
    pointsVictoire: 0,
    conditionVictoire: "Aucun"
  },

  {
    nom: "Alexandrie en Égypte",  //---CHECK---//
    pin: "Persistante",
    statut: "Empire",
    typeCarte: "Duplex",
    typeRegion: [],
    effet: "Solstice: Choisir: gagnez 1 Population OU gagnez 1 Matériaux OU piochez 1 carte.",
    solsticeCode: [
      {
        type: "choisir",
        options: [
          {
            label: "Gagner 1 Population",
            effets: [{ type: "gagner", ressource: "population", quantite: 1 }]
          },
          {
            label: "Gagner 1 Matériaux",
            effets: [{ type: "gagner", ressource: "materiaux", quantite: 1 }]
          },
          {
            label: "Piocher 1 carte",
            effets: [{ type: "piocher", quantite: 1 }]
          }
        ]
      }
    ],
    coutDeveloppement: "4 Matériaux, 1 Population",
    categorie: "Aucun",
    styleBandeau: "Civilisé",
    nation: "Macédoniens",
    localisationDepart: "Étoile",
    pointsVictoire: 2,
    conditionVictoire: "Aucun"
  },

  {
    nom: "Alexandrie en Ariana",  //---CHECK---//
    pin: "Persistante",
    statut: "Empire",
    typeCarte: "Maison",
    typeRegion: [],
    effet: "Solstice: vous POUVEZ défausser 1 carte pour Choisir: gagnez 1 Population OU gagnez 1 Matériaux OU piochez 1 carte.",
    solsticeCode: [
      {
        type: "optionnel",
        message: "Défausser 1 carte pour activer le Solstice d’Alexandrie en Ariana ?",
        effetSiOui: [
          { type: "defausserMain", quantite: 1 },
          {
            type: "choisir",
            options: [
              {
                label: "Gagner 1 Population",
                effets: [{ type: "gagner", ressource: "population", quantite: 1 }]
              },
              {
                label: "Gagner 1 Matériaux",
                effets: [{ type: "gagner", ressource: "materiaux", quantite: 1 }]
              },
              {
                label: "Piocher 1 carte",
                effets: [{ type: "piocher", quantite: 1 }]
              }
            ]
          }
        ]
      }
    ],
    coutDeveloppement: "4 Matériaux, 2 Population",
    categorie: "Aucun",
    styleBandeau: "Civilisé",
    nation: "Macédoniens",
    localisationDepart: "Étoile",
    pointsVictoire: "Variable",
    conditionVictoire: "1 PV par 2 Région"
  },

  {
    nom: "Mosaïques", //---CHECK---//
    pin: "Persistante",
    statut: "Empire",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Épuiser: payez 1 Matériaux pour récupérer 1 carte de votre défausse.",
    epuiserCode: [
      {
        type: "payer",
        ressource: "materiaux",
        quantite: 1
      },
      {
        type: "recupererCarteDepuisDefausse"
      }
    ],
    coutDeveloppement: "4 Matériaux, 1 Population",
    categorie: "Aucun",
    styleBandeau: "Civilisé",
    nation: "Macédoniens",
    localisationDepart: "Étoile",
    pointsVictoire: 3,
    conditionVictoire: "Aucun"
  },

  {
    nom: "Développement", //---CHECK---//
    pin: "Aucun",
    statut: "Empire",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Choisir: développez OU payez 2 Matériaux pour acquérir Tradition/Civilisé.",
    effetsCode: [
      {
        type: "choisir",
        afficherMarcheAvantChoix: true,
        options: [
          {
            label: "Développer",
            effets: [
	              {
	                type: "developperCarte",
	                nePasEpuiserPileEtoile: true
	              }
            ]
          },
          {
            label: "Payer 2 Matériaux pour acquérir Tradition/Civilisé",
            effets: [
              { type: "payer", ressource: "materiaux", quantite: 2 },
              {
                type: "acquerirParmiCategories",
                categories: ["Tradition", "Civilisé"]
              }
            ]
          }
        ]
      }
    ],
    coutDeveloppement: "4 Matériaux, 1 Population",
    categorie: "Aucun",
    styleBandeau: "Civilisé",
    nation: "Macédoniens",
    localisationDepart: "Étoile",
    pointsVictoire: 3,
    conditionVictoire: "Aucun"
  },

  {
  nom: "Cavalerie des compagnons",  //---CHECK---//
  pin: "Persistante",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Passif: vos cartes Conquête perdent l’icône Barbare. Épuiser: quand vous jouez une Région, épuisez cette carte pour piocher 1 carte.",
  epuiserCode: [
    {
      type: "activerCavalerieDesCompagnons"
    }
  ],
  coutDeveloppement: "3 Population",
  categorie: "Aucun",
  styleBandeau: "Civilisé",
  nation: "Macédoniens",
  localisationDepart: "Étoile",
  pointsVictoire: 3,
  conditionVictoire: "Aucun"
},

  {
  nom: "Alexandre le grand",  //---CHECK---//
  pin: "Aucun",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Ne peut pas être jouée si la carte Alexandre n’est pas archivée dans votre Histoire. Action gratuite. Vous POUVEZ acquérir Région deux fois, y compris parmi les cartes exilées. Archivez <i>Alexandre le grand</i> dans votre Histoire.",
  conditionJeu: {
    nomCarteDansHistoire: "Alexandre"
  },
  effetsCode: [
    {
      type: "optionnel",
      message: "Voulez-vous acquérir une Région une première fois ?",
      effetSiOui: [
        {
          type: "acquerirRegionAvecExile",
          inclureExil: true
        }
      ]
    },
    {
      type: "optionnel",
      message: "Voulez-vous acquérir une Région une deuxième fois ?",
      effetSiOui: [
        {
          type: "acquerirRegionAvecExile",
          inclureExil: true
        }
      ]
    },
    {
      type: "archiverSourceDepuisMain"
    }
  ],
  coutDeveloppement: "4 Matériaux, 2 Population",
  categorie: "Aucun",
  styleBandeau: "Civilisé",
  nation: "Macédoniens",
  localisationDepart: "Étoile",
  pointsVictoire: 4,
  conditionVictoire: "Aucun"
},

  {
  nom: "Parménion", //---CHECK---//
  pin: "Aucun",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Vous POUVEZ acquérir Région/Vassal et la jouer en Action gratuite. Archivez <i>Parménion</i> dans votre Histoire.",
  effetsCode: [
    {
      type: "optionnel",
      message: "Voulez-vous acquérir une carte Région ou Vassal et la jouer immédiatement ?",
      effetSiOui: [
        {
          type: "acquerirParmiCategoriesPuisJouerGratuitement",
          categories: ["Région", "Vassal"]
        }
      ]
    },
    {
      type: "archiverSourceDepuisMain"
    }
  ],
  coutDeveloppement: "2 Matériaux, 2 Population",
  categorie: "Aucun",
  styleBandeau: "Civilisé",
  nation: "Macédoniens",
  localisationDepart: "Étoile",
  pointsVictoire: 2,
  conditionVictoire: "Aucun"
},

///----CARTES GRECS----///

{
  nom: "Grecs",
  styleBandeau: "Aucun",
  bandeau: "Noir",
  pin: "A",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Épuiser: dépensez 2 actions pour innover en Tradition/Civilisé.",
  conditionEpuiser: () =>
    (jeu.joueur.actions || 0) >= 2,
  messageConditionEpuiser:
    "Vous devez avoir au moins 2 actions pour utiliser l'effet des Grecs.",
  epuiserCode: [
    {
      type: "payerAction",
      quantite: 2
    },
    {
      type: "choisir",
      options: [
        {
          label: "Innover en Tradition",
          effets: [
            {
              type: "innover",
              categorie: "Tradition"
            }
          ]
        },
        {
          label: "Innover en Civilisé",
          effets: [
            {
              type: "innover",
              categorie: "Civilisé"
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Puissance",
  nation: "Grecs",
  localisationDepart: "Puissance",
  pointsVictoire: "Variable",
  conditionVictoire: "1 PV par 7 cartes"
},

{
  nom: "Jeux olympiques",
  bandeau: "Gris",
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Piochez 2 cartes. Archivez 1 carte de votre main dans votre Histoire.",
  effetsCode: [
    {
      type: "piocher",
      quantite: 2
    },
    {
      type: "archiverDepuisMain"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  styleBandeau: "Civilisé",
  nation: "Grecs",
  localisationDepart: "Pleine",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Prospérité grecque",
  bandeau: "Gris",
  pin: "Aucun",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: gagnez 1 Matériaux par Sac en jeu OU gagnez 1 Population par Région en jeu OU piochez 1 carte par Maison et Duplex en jeu.",
  effetsCode: [
    {
      type: "choisir",
      options: [
        {
          label: "Gagner 1 Matériaux par Sac en jeu",
          effets: [
            {
              type: "gagnerMateriauxParTagRegion",
              tagRegion: "Sac",
              quantiteParTag: 1
            }
          ]
        },
        {
          label: "Gagner 1 Population par Région en jeu",
          effets: [
            {
              type: "gagnerPopulationParRegionEnJeu",
              quantiteParRegion: 1
            }
          ]
        },
        {
          label: "Piocher 1 carte par Maison et Duplex en jeu",
          effets: [
            {
              type: "piocherParTypeCarte",
              typesCartes: ["Maison", "Duplex"],
              quantiteParCarte: 1
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "2 Matériaux, 2 Population",
  categorie: "Aucun",
  styleBandeau: "Civilisé",
  nation: "Grecs",
  localisationDepart: "Étoile",
  pointsVictoire: 2,
  conditionVictoire: "Aucun"
},

{
  nom: "Innovation grecque",
  bandeau: "Gris",
  pin: "Épée",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Placez 2 cartes de votre main au-dessus de votre deck pour acquérir Tradition/Civilisé/Région/Vassal. Chaque autre joueur rappelle une Persistante.",
  effetsCode: [
    {
      type: "innovationGrecque"
    }
  ],
  coutDeveloppement: "3 Matériaux, 2 Population",
  categorie: "Aucun",
  styleBandeau: "Civilisé",
  nation: "Grecs",
  localisationDepart: "Étoile",
  pointsVictoire: 3,
  conditionVictoire: "Aucun"
},

{
  nom: "Périclès",
  bandeau: "Gris",
  pin: "Aucun",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Action gratuite. Acquérez Tradition/Civilisé/Région/Vassal. Archivez <i>Périclès</i> dans votre Histoire.",
  effetsCode: [
    {
      type: "acquerirParmiCategories",
      categories: ["Tradition", "Civilisé", "Région", "Vassal"]
    },
    {
      type: "archiverSourceDepuisMain"
    }
  ],
  coutDeveloppement: "3 Matériaux, 2 Population",
  categorie: "Aucun",
  styleBandeau: "Civilisé",
  nation: "Grecs",
  localisationDepart: "Étoile",
  pointsVictoire: 3,
  conditionVictoire: "Aucun"
},

{
  nom: "Cité de Corinthe",
  bandeau: "Gris",
  pin: "Persistante",
  statut: "Empire",
  typeCarte: "Maison",
  typeRegion: [],
  effet: "Solstice: vous POUVEZ défausser 1 carte pour Choisir: gagnez 1 Population OU gagnez 1 Matériaux OU piochez 1 carte.",
  solsticeCode: [
    {
      type: "optionnel",
      message: "Défausser 1 carte pour activer le Solstice de Cité de Corinthe ?",
      effetSiOui: [
        { type: "defausserMain", quantite: 1 },
        {
          type: "choisir",
          options: [
            {
              label: "Gagner 1 Population",
              effets: [{ type: "gagner", ressource: "population", quantite: 1 }]
            },
            {
              label: "Gagner 1 Matériaux",
              effets: [{ type: "gagner", ressource: "materiaux", quantite: 1 }]
            },
            {
              label: "Piocher 1 carte",
              effets: [{ type: "piocher", quantite: 1 }]
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "3 Matériaux, 2 Population",
  categorie: "Aucun",
  styleBandeau: "Civilisé",
  nation: "Grecs",
  localisationDepart: "Étoile",
  pointsVictoire: 3,
  conditionVictoire: "Aucun"
},

{
  nom: "Plaines de Thessalie",
  bandeau: "Jaune",
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: ["Sac"],
  effet: "Gagnez 1 Matériaux. Vous POUVEZ réserver 1 carte.",
  effetsCode: [
    {
      type: "gagner",
      ressource: "materiaux",
      quantite: 1
    },
    {
      type: "optionnel",
      message: "Voulez-vous réserver 1 carte sous cette carte ?",
      effetSiOui: [
        { type: "reserverSousSource", quantite: 1 }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Région",
  styleBandeau: "Région",
  nation: "Grecs",
  localisationDepart: "Croissant",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Cité d’Athènes",
  bandeau: "Gris",
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Maison",
  typeRegion: [],
  effet: "Solstice: vous POUVEZ défausser 1 carte pour Choisir: gagnez 1 Population OU gagnez 1 Matériaux OU piochez 1 carte.",
  solsticeCode: [
    {
      type: "optionnel",
      message: "Défausser 1 carte pour activer le Solstice de Cité d’Athènes ?",
      effetSiOui: [
        { type: "defausserMain", quantite: 1 },
        {
          type: "choisir",
          options: [
            {
              label: "Gagner 1 Population",
              effets: [{ type: "gagner", ressource: "population", quantite: 1 }]
            },
            {
              label: "Gagner 1 Matériaux",
              effets: [{ type: "gagner", ressource: "materiaux", quantite: 1 }]
            },
            {
              label: "Piocher 1 carte",
              effets: [{ type: "piocher", quantite: 1 }]
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  styleBandeau: "Civilisé",
  nation: "Grecs",
  localisationDepart: "Croissant",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Instabilité",
  bandeau: "Rouge",
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: payez 1 Population OU défaussez 2 cartes OU payez 3 Matériaux. Si vous le faites, renvoyez cette carte dans la pile Instabilités.",
   effetsCode: [
    {
      type: "resoudreInstabiliteStandard"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Instabilité",
  styleBandeau: "Instabilité",
  nation: "Grecs",
  localisationDepart: "Croissant",
  pointsVictoire: -2,
  conditionVictoire: "Aucun"
},

{
  nom: "Forêt de Pholos",
  bandeau: "Jaune",
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: ["Sac"],
  effet: "Vous POUVEZ réserver 1 carte.",
  effetsCode: [
    {
      type: "optionnel",
      message: "Voulez-vous réserver 1 carte sous cette carte ?",
      effetSiOui: [
        { type: "reserverSousSource", quantite: 1 }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Région",
  styleBandeau: "Région",
  nation: "Grecs",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Péloponnèse",
  bandeau: "Jaune",
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: ["Sac", "Eau"],
  effet: "Gagnez 1 Population. Vous POUVEZ réserver 1 carte.",
  effetsCode: [
    {
      type: "gagner",
      ressource: "population",
      quantite: 1
    },
    {
      type: "optionnel",
      message: "Voulez-vous réserver 1 carte sous cette carte ?",
      effetSiOui: [
        { type: "reserverSousSource", quantite: 1 }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Région",
  styleBandeau: "Région",
  nation: "Grecs",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Progrès",
  bandeau: "Gris",
  pin: "Aucun",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: payez 3 Matériaux pour acquérir Tradition/Civilisé OU payez 5 Matériaux pour innover en Tradition/Civilisé.",
  effetsCode: [
    {
      type: "choisir",
      options: [
        {
          label: "Payer 3 Matériaux pour acquérir Tradition/Civilisé",
          effets: [
            {
              type: "payerPuisAcquerirParmiCategories",
              ressource: "materiaux",
              quantite: 3,
              categories: ["Tradition", "Civilisé"]
            }
          ]
        },
        {
          label: "Payer 5 Matériaux pour innover en Tradition/Civilisé",
          effets: [
            {
              type: "lancerPaiementPuisInnoverParmiCategories",
              ressource: "materiaux",
              quantite: 5,
              categories: ["Tradition", "Civilisé"]
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  styleBandeau: "Civilisé",
  nation: "Grecs",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Colons",
  bandeau: "Gris",
  pin: "Aucun",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: payez 1 Population pour acquérir Région OU gagnez 1 Progrès OU renvoyez une Instabilité.",
  effetsCode: [
    {
      type: "choisir",
      options: [
        {
          label: "Payer 1 Population pour acquérir Région",
          effets: [
            {
              type: "payerPuisAcquerirParmiCategories",
              ressource: "population",
              quantite: 1,
              categories: ["Région"]
            }
          ]
        },
        {
          label: "Gagner 1 Progrès",
          effets: [
            {
              type: "gagner",
              ressource: "progres",
              quantite: 1
            }
          ]
        },
        {
          label: "Renvoyer une Instabilité",
          effets: [
            {
              type: "renvoyerInstabiliteDepuisMain"
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  styleBandeau: "Civilisé",
  nation: "Grecs",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Conquête",
  bandeau: "Gris",
  pin: "Aucun",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: payez 2 Population pour acquérir Région/Vassal OU payez 3 Population pour innover en Région/Vassal.",
  effetsCode: [
    {
      type: "choisir",
      options: [
        {
          label: "Payer 2 Population pour acquérir Région/Vassal",
          effets: [
            {
              type: "payerPuisAcquerirParmiCategories",
              ressource: "population",
              quantite: 2,
              categories: ["Région", "Vassal"]
            }
          ]
        },
        {
          label: "Payer 3 Population pour innover en Région/Vassal",
          effets: [
            {
              type: "lancerPaiementPuisInnoverParmiCategories",
              ressource: "population",
              quantite: 3,
              categories: ["Région", "Vassal"]
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  styleBandeau: "Civilisé",
  nation: "Grecs",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Cité de Sparte",
  bandeau: "Gris",
  pin: "Persistante",
  statut: "Barbare",
  typeCarte: "Maison",
  typeRegion: [],
  effet: "Solstice: vous POUVEZ défausser 1 carte pour Choisir: gagnez 1 Population OU gagnez 1 Matériaux OU piochez 1 carte.",
  solsticeCode: [
    {
      type: "optionnel",
      message: "Défausser 1 carte pour activer le Solstice de Cité de Sparte ?",
      effetSiOui: [
        { type: "defausserMain", quantite: 1 },
        {
          type: "choisir",
          options: [
            {
              label: "Gagner 1 Population",
              effets: [{ type: "gagner", ressource: "population", quantite: 1 }]
            },
            {
              label: "Gagner 1 Matériaux",
              effets: [{ type: "gagner", ressource: "materiaux", quantite: 1 }]
            },
            {
              label: "Piocher 1 carte",
              effets: [{ type: "piocher", quantite: 1 }]
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  styleBandeau: "Civilisé",
  nation: "Grecs",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Mercenaires grecs",
  bandeau: "Gris",
  pin: "Épée",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Gagnez 1 Progrès. Piochez 1 carte. Volez 2 Matériaux à chaque autre joueur. Chaque autre joueur gagne 1 Population.",
  effetsCode: [
    {
      type: "gagner",
      ressource: "progres",
      quantite: 1
    },
    {
      type: "piocher",
      quantite: 1
    },
    {
      type: "volerMateriauxAChaqueAutreJoueur",
      quantite: 2
    },
    {
      type: "autresJoueursGagnentPopulation",
      quantite: 1
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  styleBandeau: "Civilisé",
  nation: "Grecs",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Gloire",
  bandeau: "Gris",
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Cette carte ne peut pas être réservée. Abandonnez 3 Région pour regarder jusqu’à 2 cartes Renommée. Gardez une de ces cartes et remettez l’autre sur la pioche Renommée.",
  effetsCode: [
    {
      type: "abandonnerTableauCategorie",
      categorie: "Région",
      quantite: 3
    },
    {
      type: "regarderRenommeeChoisirUne",
      quantite: 2
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  styleBandeau: "Civilisé",
  nation: "Grecs",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun",
  reserveInterdite: true
},

{
  nom: "Instabilité",
  bandeau: "Rouge",
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: payez 1 Population OU défaussez 2 cartes OU payez 3 Matériaux. Si vous le faites, renvoyez cette carte dans la pile Instabilités.",
   effetsCode: [
    {
      type: "resoudreInstabiliteStandard"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Instabilité",
  styleBandeau: "Instabilité",
  nation: "Grecs",
  localisationDepart: "Base",
  pointsVictoire: -2,
  conditionVictoire: "Aucun"
},

{
  nom: "Instabilité",
  bandeau: "Rouge",
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: payez 1 Population OU défaussez 2 cartes OU payez 3 Matériaux. Si vous le faites, renvoyez cette carte dans la pile Instabilités.",
   effetsCode: [
    {
      type: "resoudreInstabiliteStandard"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Instabilité",
  styleBandeau: "Instabilité",
  nation: "Grecs",
  localisationDepart: "Base",
  pointsVictoire: -2,
  conditionVictoire: "Aucun"
},

{
  nom: "Démocratie directe",
  bandeau: "Gris",
  pin: "Persistante",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Passif: jouer vos Instabilité vous coûtent 1 Matériaux ou 1 carte à défausser de moins (minimum 1). Épuiser: jouez une Instabilité en Action gratuite.",
  epuiserCode: [
    {
      type: "jouerInstabiliteGratuiteDepuisMain"
    }
  ],
  coutDeveloppement: "3 Matériaux, 2 Population",
  categorie: "Aucun",
  styleBandeau: "Civilisé",
  nation: "Grecs",
  localisationDepart: "Étoile",
  pointsVictoire: 3,
  conditionVictoire: "Aucun"
},

{
  nom: "Science",
  bandeau: "Gris",
  pin: "Persistante",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Passif: augmentez la taille de votre main de 1. Vos cartes Progrès perdent l’icône Barbare.",
  coutDeveloppement: "3 Matériaux, 2 Population",
  categorie: "Aucun",
  styleBandeau: "Civilisé",
  nation: "Grecs",
  localisationDepart: "Étoile",
  pointsVictoire: 3,
  conditionVictoire: "Aucun"
},

{
  nom: "Philosophie",
  bandeau: "Gris",
  pin: "Aucun",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Abandonnez une Persistante (qui ne soit pas une Région) pour innover en Tradition/Civilisé.",
  effetsCode: [
    {
      type: "abandonnerPersistanteNonRegionPuisInnover"
    }
  ],
  coutDeveloppement: "6 Matériaux",
  categorie: "Aucun",
  styleBandeau: "Civilisé",
  nation: "Grecs",
  localisationDepart: "Étoile",
  pointsVictoire: "Variable",
  conditionVictoire: "1 PV par 5 cartes"
},

{
  nom: "Phare",
  bandeau: "Gris",
  pin: "Persistante",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Épuiser: Choisir: récupérez une Épée de votre défausse et placez-la au-dessus de votre deck OU échangez 1 carte exilée avec 1 carte du marché.",
  epuiserCode: [
    {
      type: "choisir",
      options: [
        {
          label: "Récupérer une Épée de votre défausse et la placer au-dessus de votre deck",
          effets: [
            {
              type: "recupererEpeeDepuisDefausseVersDeck"
            }
          ]
        },
        {
          label: "Échanger une carte exilée avec une carte du marché",
          effets: [
            {
              type: "echangerCarteExileeAvecCarteDuMarche"
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "5 Matériaux",
  categorie: "Aucun",
  styleBandeau: "Civilisé",
  nation: "Grecs",
  localisationDepart: "Étoile",
  pointsVictoire: 3,
  conditionVictoire: "Aucun"
},















{
  nom: "Vikings",
  bandeau: "Gris",
  pin: "A",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Passif: les cartes qui doivent être archivées dans votre Histoire sont défaussées. Quand vous récupérez une Instabilité, regardez la première carte de votre deck Nation. Vous POUVEZ la placer au fond de votre deck Nation. Épuiser: quand vous renvoyez une Instabilité, vous POUVEZ épuiser Vikings pour piocher 2 cartes.",
  epuiserCode: [],
  coutDeveloppement: "Aucun",
  categorie: "Puissance",
  styleBandeau: "Aucun",
  nation: "Vikings",
  localisationDepart: "Puissance",
  pointsVictoire: "Variable",
  conditionVictoire: "1 PV par carte Variable"
},

{
  nom: "Harald Hardrada",
  bandeau: "Gris",
  pin: "Aucun",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "PLACER CETTE CARTE DANS LA DÉFAUSSE DÉCLENCHE LE DÉCOMPTE. Piochez 1 Renommée. Vous POUVEZ innover en Région.",
  effetsCode: [
    {
      type: "piocherRenommee"
    },
    {
      type: "optionnel",
      message: "Voulez-vous innover en Région ?",
      effetSiOui: [
        {
          type: "innover",
          categorie: "Région"
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  nation: "Vikings",
  localisationDepart: "Pleine",
  pointsVictoire: "Variable",
  conditionVictoire: "2 PV par carte Variable"
},

{
  nom: "Rollon le Marcheur",  //---CHECK---//
  bandeau: "Aucun",
  pin: "Aucun",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Piochez une Renommée. Exilez <i>Rollon le Marcheur</i>.",
  effetsCode: [
    {
      type: "piocherRenommee"
    },
    {
      type: "exilerSourceDepuisContexte"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  nation: "Vikings",
  localisationDepart: "Croissant",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Instabilité",
  bandeau: "Rouge",
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: payez 1 Population OU défaussez 2 cartes OU payez 3 Matériaux. Si vous le faites, renvoyez cette carte dans la pile Instabilité.",
  effetsCode: [
    {
      type: "resoudreInstabiliteStandard"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Instabilité",
  styleBandeau: "Instabilité",
  nation: "Vikings",
  localisationDepart: "Croissant",
  pointsVictoire: -2,
  conditionVictoire: "Aucun"
},

{
  nom: "Instabilité",
  bandeau: "Rouge",
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: payez 1 Population OU défaussez 2 cartes OU payez 3 Matériaux. Si vous le faites, renvoyez cette carte dans la pile Instabilité.",
  effetsCode: [
    {
      type: "resoudreInstabiliteStandard"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Instabilité",
  styleBandeau: "Instabilité",
  nation: "Vikings",
  localisationDepart: "Croissant",
  pointsVictoire: -2,
  conditionVictoire: "Aucun"
},

{
  nom: "Skis",  //---CHECK---//
  bandeau: "Aucun",
  pin: "Persistante",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Épuiser: quand vous jouez une Région, épuisez Skis pour Choisir: piocher 1 carte OU gagnez 2 Matériaux.",
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  nation: "Vikings",
  localisationDepart: "Croissant",
  pointsVictoire: 2,
  conditionVictoire: "Aucun"
},

{
  nom: "Îles Féroé",  //---CHECK---//
  styleBandeau: "Région",
  bandeau: "Jaune",
  pin: "Persistante",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Vous POUVEZ réserver 1 carte. Choisir: exilez 1 carte du Marché OU gagnez 1 Population.",
  effetsCode: [
    {
      type: "optionnel",
      message: "Voulez-vous réserver 1 carte sous cette carte ?",
      effetSiOui: [
        {
          type: "reserverSousSource",
          quantite: 1
        }
      ]
    },
    {
      type: "choisir",
      options: [
        {
          label: "Exiler 1 carte du Marché",
          effets: [
            {
              type: "exilerCarteVisibleDuMarche"
            }
          ]
        },
        {
          label: "Gagner 1 Population",
          effets: [
            {
              type: "gagner",
              ressource: "population",
              quantite: 1
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Région",
  nation: "Vikings",
  localisationDepart: "Croissant",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Islande", //---CHECK---//
  styleBandeau: "Région",
  bandeau: "Jaune",
  pin: "Persistante",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: ["Sac"],
  effet: "Vous POUVEZ réserver 1 carte. Choisir: gagnez 2 Matériaux OU regardez la première carte de votre deck Nation, puis vous POUVEZ mélanger le deck Nation.",
  effetsCode: [
    {
      type: "optionnel",
      message: "Voulez-vous réserver 1 carte sous cette carte ?",
      effetSiOui: [
        {
          type: "reserverSousSource",
          quantite: 1
        }
      ]
    },
    {
      type: "choisir",
      options: [
        {
          label: "Gagner 2 Matériaux",
          effets: [
            {
              type: "gagner",
              ressource: "materiaux",
              quantite: 2
            }
          ]
        },
        {
          label: "Regarder la première carte du deck Nation puis mélanger optionnellement",
          effets: [
            {
              type: "regarderPremiereCarteDeckNationPuisMelangeOptionnel"
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Région",
  nation: "Vikings",
  localisationDepart: "Croissant",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Raid Viking", //---CHECK---// 
  bandeau: "Aucun",
  pin: "Épée",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Action gratuite. Volez 2 Matériaux à chaque autre joueur. Les joueurs qui ne peuvent pas payer récupèrent une Instabilité.",
  effetsCode: [
    {
      type: "volerMateriauxAChaqueAutreJoueur",
      quantite: 2
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  nation: "Vikings",
  localisationDepart: "Croissant",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Sagas", //---CHECK---//
  bandeau: "Aucun",
  pin: "Persistante",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Solstice: Vous POUVEZ réserver 1 carte.",
  solsticeCode: [
    {
      type: "optionnel",
      message: "Voulez-vous réserver 1 carte sous Sagas ?",
      effetSiOui: [
        {
          type: "reserverSousSource",
          quantite: 1
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  nation: "Vikings",
  localisationDepart: "Croissant",
  pointsVictoire: "Variable",
  conditionVictoire: "1 PV par carte réservée ici."
},

{
  nom: "Peignes", //---CHECK---//
  bandeau: "Aucun",
  pin: "Persistante",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Épuiser: ignorez l’icône Empire sur la prochaine carte que vous jouez au cours de ce tour.",
  epuiserCode: [
    {
      type: "activerPeignes"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  nation: "Vikings",
  localisationDepart: "Croissant",
  pointsVictoire: "Variable",
  conditionVictoire: "1 PV par 3 Population"
},

{
  nom: "Vinland", //---CHECK---//
  styleBandeau: "Région",
  bandeau: "Jaune",
  pin: "Persistante",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: ["Sac", "Eau", "Blé"],
  effet: "Cette carte ne peut être jouée que si Drakkars ET Groenland sont en jeu. Choisir: renvoyez une Instabilité OU vous POUVEZ réserver 1 carte.",
  conditionJeu: {
    nomsCartesDansTableau: ["Drakkars", "Groenland"]
  },
  effetsCode: [
    {
      type: "choisir",
      options: [
        {
          label: "Renvoyer une Instabilité",
          effets: [
            {
              type: "renvoyerInstabiliteDepuisMain"
            }
          ]
        },
        {
          label: "Réserver 1 carte",
          effets: [
            {
              type: "optionnel",
              message: "Voulez-vous réserver 1 carte sous Vinland ?",
              effetSiOui: [
                {
                  type: "reserverSousSource",
                  quantite: 1
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Région",
  nation: "Vikings",
  localisationDepart: "Croissant",
  pointsVictoire: "Conditionnel",
  conditionVictoire: "6 PV si en jeu"
},

{
  nom: "Cité de Dubh Linn", //---CHECK---//
  bandeau: "Aucun",
  pin: "Persistante",
  statut: "Barbare",
  typeCarte: "Maison",
  typeRegion: [],
  effet: "Solstice: vous POUVEZ défausser 1 carte pour Choisir: gagnez 1 Population OU gagnez 1 Matériaux OU piochez 1 carte.",
  solsticeCode: [
    {
      type: "optionnel",
      message: "Défausser 1 carte pour activer le Solstice de Cité de Dubh Linn ?",
      effetSiOui: [
        {
          type: "defausserMain",
          quantite: 1
        },
        {
          type: "choisir",
          options: [
            {
              label: "Gagner 1 Population",
              effets: [
                {
                  type: "gagner",
                  ressource: "population",
                  quantite: 1
                }
              ]
            },
            {
              label: "Gagner 1 Matériaux",
              effets: [
                {
                  type: "gagner",
                  ressource: "materiaux",
                  quantite: 1
                }
              ]
            },
            {
              label: "Piocher 1 carte",
              effets: [
                {
                  type: "piocher",
                  quantite: 1
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  nation: "Vikings",
  localisationDepart: "Croissant",
  pointsVictoire: "Variable",
  conditionVictoire: "1 PV par 8 Matériaux"
},

{
  nom: "Drakkars",  //---CHECK---// 
  bandeau: "Aucun",
  pin: "Persistante",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Passif: vous POUVEZ acquérir des cartes Région exilées. Quand vous le faites, gagnez 1 Population. Épuiser: quand vous jouez une Épée, épuisez Drakkars pour gagner 2 Matériaux.",
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  nation: "Vikings",
  localisationDepart: "Croissant",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Groenland", //---CHECK---//
  styleBandeau: "Région",
  bandeau: "Jaune",
  pin: "Persistante",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Vous POUVEZ réserver 1 carte. Choisir: gagnez 1 Population OU regardez la première carte de votre deck Nation, puis vous POUVEZ mélanger le deck Nation.",
  effetsCode: [
    {
      type: "optionnel",
      message: "Voulez-vous réserver 1 carte sous cette carte ?",
      effetSiOui: [
        {
          type: "reserverSousSource",
          quantite: 1
        }
      ]
    },
    {
      type: "choisir",
      options: [
        {
          label: "Gagner 1 Population",
          effets: [
            {
              type: "gagner",
              ressource: "population",
              quantite: 1
            }
          ]
        },
        {
          label: "Regarder la première carte du deck Nation puis mélanger optionnellement",
          effets: [
            {
              type: "regarderPremiereCarteDeckNationPuisMelangeOptionnel"
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Région",
  nation: "Vikings",
  localisationDepart: "Croissant",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Erik le Rouge", //---CHECK---//
  bandeau: "Aucun",
  pin: "Aucun",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Abandonnez la <i>Scandinavie</i> et payez 1 Population pour trouver une Région que vous ajoutez à votre main. Exilez <i>Erik le Rouge</i>.",
  effetsCode: [
    {
      type: "erikLeRouge"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  nation: "Vikings",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

 {
    nom: "Progrès", //---CHECK---//
    bandeau: "Gris",
    pin: "Aucun",
    statut: "Barbare",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Choisir: payez 3 Matériaux pour acquérir Tradition/Civilisé OU payez 5 Matériaux pour innover en Tradition/Civilisé.",
    effetsCode: [
      {
        type: "choisir",
        options: [
          {
            label: "Payer 3 Matériaux pour acquérir Tradition/Civilisé",
            effets: [
              {
                type: "payerPuisAcquerirParmiCategories",
                ressource: "materiaux",
                quantite: 3,
                categories: ["Tradition", "Civilisé"]
              }
            ]
          },
          {
            label: "Payer 5 Matériaux pour innover en Tradition/Civilisé",
            effets: [
              {
                type: "payerPuisInnoverParmiCategories",
                ressource: "materiaux",
                quantite: 5,
                categories: ["Tradition", "Civilisé"]
              }
            ]
          }
        ]
      }
    ],
    coutDeveloppement: "Aucun",
    categorie: "Aucun",
    nation: "Vikings",
    localisationDepart: "Base",
    pointsVictoire: "Aucun",
    conditionVictoire: "Aucun"
  },

  {
    nom: "Prospérité",  //---CHECK---//
    pin: "Aucun",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Tous les joueurs PEUVENT piocher 1 carte. Choisir: gagnez 1 Matériaux par Sac OU gagnez 1 Population par Région que vous avez en jeu.",
    effetsCode: [
      {
        type: "optionnel",
        message: "Voulez-vous piocher 1 carte ?",
        effetSiOui: [
          {
            type: "piocher",
            quantite: 1
          }
        ]
      },
      {
        type: "autresJoueursPeuventPiocher",
        quantite: 1
      },
      {
        type: "choisir",
        options: [
          {
            label: "Gagner 1 Matériaux par Sac",
            effets: [
              {
                type: "gagnerMateriauxParTagRegion",
                tagRegion: "Sac",
                quantiteParTag: 1
              }
            ]
          },
          {
            label: "Gagner 1 Population par Région en jeu",
            effets: [
              {
                type: "gagnerPopulationParRegionEnJeu",
                quantiteParRegion: 1
              }
            ]
          }
        ]
      }
    ],
    coutDeveloppement: "Aucun",
    categorie: "Aucun",
    styleBandeau: "Aucun",
    nation: "Vikings",
    localisationDepart: "Base",
    pointsVictoire: 0,
    conditionVictoire: "Aucun"
  },

  {
  nom: "Jomsviking",  //---CHECK---// 
  bandeau: "Aucun",
  pin: "Épée",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Payez 1 Population et 2 Matériaux pour acquérir Région/Vassal. Chaque autre joueur défausse 1 carte.",
  effetsCode: [
    {
      type: "payer",
      ressource: "population",
      quantite: 1
    },
    {
      type: "payer",
      ressource: "materiaux",
      quantite: 2
    },
    {
      type: "acquerirParmiCategories",
      categories: ["Région", "Vassal"]
    },
    {
      type: "autresJoueursDefaussent",
      quantite: 1
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  nation: "Vikings",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Scandinavie", //---CHECK---//
  styleBandeau: "Région",
  bandeau: "Jaune",
  pin: "Persistante",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: ["Sac"],
  effet: "Vous POUVEZ réserver 1 carte.",
  effetsCode: [
    {
      type: "optionnel",
      message: "Voulez-vous réserver 1 carte sous cette carte ?",
      effetSiOui: [
        {
          type: "reserverSousSource",
          quantite: 1
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Région",
  nation: "Vikings",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
    nom: "Gloire",  //---CHECK---//
    pin: "Aucun",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Cette carte ne peut pas être réservée. Abandonnez 3 Région pour regarder jusqu’à 2 Renommée. Gardez une de ces cartes et remettez l’autre sur la pioche Renommée.",
    effetsCode: [
      {
        type: "abandonnerTableauCategorie",
        categorie: "Région",
        quantite: 3
      },
      {
        type: "regarderRenommeeChoisirUne",
        quantite: 2
      }
    ],
    coutDeveloppement: "Aucun",
    categorie: "Aucun",
    styleBandeau: "Aucun",
    nation: "Vikings",
    localisationDepart: "Base",
    pointsVictoire: 0,
    conditionVictoire: "Aucun",
    reserveInterdite: true
  },

  {
  nom: "Instabilité",
  bandeau: "Rouge",
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: payez 1 Population OU défaussez 2 cartes OU payez 3 Matériaux. Si vous le faites, renvoyez cette carte dans la pile Instabilité.",
  effetsCode: [
    {
      type: "resoudreInstabiliteStandard"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Instabilité",
  styleBandeau: "Instabilité",
  nation: "Vikings",
  localisationDepart: "Base",
  pointsVictoire: -2,
  conditionVictoire: "Aucun"
},

{
  nom: "Gothja",  //---CHECK---// 
  bandeau: "Aucun",
  pin: "Aucun",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Regardez la première carte de votre deck Nation. Vous POUVEZ mélanger le deck Nation. Choisir: renvoyez une Instabilité et gagnez 1 Population OU piochez 2 cartes.",
  effetsCode: [
    {
      type: "regarderPremiereCarteDeckNationPuisMelangeOptionnel"
    },
    
    {
      type: "choisir",
      options: [
        {
          label: "Renvoyer une Instabilité et gagner 1 Population",
          effets: [
            {
  type: "renvoyerJusquaNInstabilitesDepuisMain",
  quantiteMax: 1
},
            {
              type: "gagner",
              ressource: "population",
              quantite: 1
            }
          ]
        },
        {
          label: "Piocher 2 cartes",
          effets: [
            {
              type: "piocher",
              quantite: 2
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  nation: "Vikings",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Althing", //---CHECK---//
  bandeau: "Aucun",
  pin: "Épée",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Volez 1 Matériaux à chaque autre joueur. Choisir: gagnez 1 Progrès OU renvoyez une Instabilité.",
  effetsCode: [
    {
      type: "volerMateriauxSansInstabilite",
      quantite: 1
    },
    {
      type: "choisir",
      options: [
        {
          label: "Gagner 1 Progrès",
          effets: [
            {
              type: "gagner",
              ressource: "progres",
              quantite: 1
            }
          ]
        },
        {
          label: "Renvoyer une Instabilité",
          effets: [
            {
            
  type: "renvoyerJusquaNInstabilitesDepuisMain",
  quantiteMax: 1
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  nation: "Vikings",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},










































/* =========================
   CARTHAGINOIS — BLOC SIMPLE
   ========================= */

   {
  nom: "Carthaginois",
  bandeau: "Aucun",
  pin: "A",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Passif: quand vous devez placer 1 Progrès sur une carte du Marché, au lieu de cela, placez-y 1 Matériaux. Épuiser: quand vous récupérez une carte du Marché avec au moins 1 Matériaux dessus, doublez les Matériaux gagnés.",
  epuiserCode: [
    {
      type: "activerDoubleMateriauxCarthaginois"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Puissance",
  nation: "Carthaginois",
  localisationDepart: "Puissance",
  pointsVictoire: "Variable",
  conditionVictoire: "1 PV par 6 Matériaux"
},

{
  nom: "Marchands carthaginois",
  bandeau: "Gris",
  pin: "Aucun",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Action gratuite. Ajoutez 1 Matériaux sur une carte du Marché. Vous POUVEZ archiver 1 carte de votre main ou de votre défausse dans votre Histoire.",
  effetsCode: [
    {
      type: "ajouterMateriauxSurCarteVisibleDuMarche",
      quantite: 1
    },
    {
      type: "optionnel",
      condition: () =>
        (jeu.joueurZones.mainJoueur || []).length > 0 ||
        (jeu.joueurZones.defausseJoueur || []).length > 0,
      message: "Voulez-vous archiver 1 carte de votre main ou de votre défausse dans votre Histoire ?",
      effetSiOui: [
        {
          type: "archiverDepuisMainOuDefausse"
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  nation: "Carthaginois",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Instabilité",
  styleBandeau: "Instabilité",
  bandeau: "Rouge",
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: payez 1 Population OU défaussez 2 cartes OU payez 3 Matériaux. Si vous le faites, renvoyez cette carte dans la pile Instabilité.",
  effetsCode: [
    {
      type: "resoudreInstabiliteStandard"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Instabilité",
  nation: "Carthaginois",
  localisationDepart: "Base",
  pointsVictoire: -2,
  conditionVictoire: "Aucun"
},

{
  nom: "Instabilité",
  styleBandeau: "Instabilité",
  bandeau: "Rouge",
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: payez 1 Population OU défaussez 2 cartes OU payez 3 Matériaux. Si vous le faites, renvoyez cette carte dans la pile Instabilité.",
  effetsCode: [
    {
      type: "resoudreInstabiliteStandard"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Instabilité",
  nation: "Carthaginois",
  localisationDepart: "Base",
  pointsVictoire: -2,
  conditionVictoire: "Aucun"
},

{
  nom: "Prospérité",
  bandeau: "Gris",
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Tous les joueurs PEUVENT piocher 1 carte. Choisir: gagnez 1 Matériaux par Sac OU gagnez 1 Population par Région que vous avez en jeu.",
  effetsCode: [
    {
      type: "optionnel",
      message: "Voulez-vous piocher 1 carte ?",
      effetSiOui: [
        {
          type: "piocher",
          quantite: 1
        }
      ]
    },
    {
      type: "autresJoueursPeuventPiocher",
      quantite: 1
    },
    {
      type: "choisir",
      options: [
        {
          label: "Gagner 1 Matériaux par Sac",
          effets: [
            {
              type: "gagnerMateriauxParTagRegion",
              tagRegion: "Sac",
                quantiteParTag: 1
            }
          ]
        },
        {
          label: "Gagner 1 Population par Région en jeu",
          effets: [
            {
              type: "gagnerPopulationParRegionEnJeu",
              quantiteParRegion: 1
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  nation: "Carthaginois",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Progrès",
  bandeau: "Gris",
  pin: "Aucun",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: Payez 3 Matériaux pour acquérir Tradition/Civilisé OU payez 5 Matériaux pour innover en Tradition/Civilisé",
  effetsCode: [
    {
      type: "choisir",
      options: [
        {
          label: "Payer 3 Matériaux pour acquérir Tradition/Civilisé",
          effets: [
            {
              type: "payer",
              ressource: "materiaux",
              quantite: 3
            },
            {
              type: "acquerirParmiCategories",
              categories: ["Tradition", "Civilisé"]
            }
          ]
        },
        {
          label: "Payer 5 Matériaux pour innover en Tradition/Civilisé",
          effets: [
            {
              type: "payer",
              ressource: "materiaux",
              quantite: 5
            },
            {
              type: "innoverParmiCategories",
              categories: ["Tradition", "Civilisé"]
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  nation: "Carthaginois",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
    nom: "Gloire",  //---CHECK---//
    bandeau: "Gris",
    pin: "Aucun",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Cette carte ne peut pas être réservée. Abandonnez 3 Région pour regarder jusqu’à 2 Renommée. Gardez une de ces cartes et remettez l’autre sur la pioche Renommée.",
    effetsCode: [
      { type: "abandonnerTableauCategorie", categorie: "Région", quantite: 3 },
      { type: "regarderRenommeeChoisirUne", quantite: 2 }
    ],
    coutDeveloppement: "Aucun",
    categorie: "Aucun",
    nation: "Carthaginois",
    localisationDepart: "Base",
    pointsVictoire: "Aucun",
    conditionVictoire: "Aucun",
    reserveInterdite: true,
  },

{
  nom: "Conquête",
  bandeau: "Gris",
  pin: "Aucun",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: Payez 2 Population pour acquérir Région/Vassal OU payez 3 Population pour innover en Région/Vassal.",
  effetsCode: [
    {
      type: "choisir",
      options: [
        {
          label: "Payer 2 Population pour acquérir Région/Vassal",
          effets: [
            {
              type: "payer",
              ressource: "population",
              quantite: 2
            },
            {
              type: "acquerirParmiCategories",
              categories: ["Région", "Vassal"]
            }
          ]
        },
        {
          label: "Payer 3 Population pour innover en Région/Vassal",
          effets: [
            {
              type: "payer",
              ressource: "population",
              quantite: 3
            },
            {
              type: "innoverParmiCategories",
              categories: ["Région", "Vassal"]
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  nation: "Carthaginois",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Îles Baléares",
  styleBandeau: "Région",
  bandeau: "Jaune",
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: ["Sac", "Sac", "Eau"],
  effet: "Vous POUVEZ réserver 1 carte.",
  effetsCode: [
    {
      type: "optionnel",
      message: "Voulez-vous réserver 1 carte sous cette carte ?",
      effetSiOui: [
        {
          type: "reserverSousSource",
          quantite: 1
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Région",
  nation: "Carthaginois",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Maurétanie",
  styleBandeau:"Région",
  bandeau: "Jaune",
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: ["Sac"],
  effet: "Gagnez 2 Matériaux. Vous POUVEZ réserver 1 carte.",
  effetsCode: [
    {
      type: "gagner",
      ressource: "materiaux",
      quantite: 2
    },
    {
      type: "optionnel",
      message: "Voulez-vous réserver 1 carte sous cette carte ?",
      effetSiOui: [
        {
          type: "reserverSousSource",
          quantite: 1
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Région",
  nation: "Carthaginois",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Ibérie",
  styleBandeau:"Région",
  bandeau: "Jaune",
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: ["Sac", "Blé"],
  effet: "Vous POUVEZ réserver 1 carte.",
  effetsCode: [
    {
      type: "optionnel",
      message: "Voulez-vous réserver 1 carte sous cette carte ?",
      effetSiOui: [
        {
          type: "reserverSousSource",
          quantite: 1
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Région",
  nation: "Carthaginois",
  localisationDepart: "Croissant",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Progrès",
  bandeau: "Gris",
  pin: "Aucun",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: Payez 3 Matériaux pour acquérir Tradition/Civilisé OU payez 5 Matériaux pour innover en Tradition/Civilisé",
  effetsCode: [
    {
      type: "choisir",
      options: [
        {
          label: "Payer 3 Matériaux pour acquérir Tradition/Civilisé",
          effets: [
            {
              type: "payer",
              ressource: "materiaux",
              quantite: 3
            },
            {
              type: "acquerirParmiCategories",
              categories: ["Tradition", "Civilisé"]
            }
          ]
        },
        {
          label: "Payer 5 Matériaux pour innover en Tradition/Civilisé",
          effets: [
            {
              type: "payer",
              ressource: "materiaux",
              quantite: 5
            },
            {
              type: "innoverParmiCategories",
              categories: ["Tradition", "Civilisé"]
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  nation: "Carthaginois",
  localisationDepart: "Croissant",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Berbères",
  styleBandeau: "Vassal",
  bandeau: "Bleu",
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Gagnez 2 Population",
  effetsCode: [
    {
      type: "gagner",
      ressource: "population",
      quantite: 2
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Vassal",
  nation: "Carthaginois",
  localisationDepart: "Croissant",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Prospérité",
  bandeau: "Gris",
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Tous les joueurs PEUVENT piocher 1 carte. Choisir: gagnez 1 Matériaux par Sac OU gagnez 1 Population par Région que vous avez en jeu.",
  effetsCode: [
    {
      type: "optionnel",
      message: "Voulez-vous piocher 1 carte ?",
      effetSiOui: [
        {
          type: "piocher",
          quantite: 1
        }
      ]
    },
    {
      type: "autresJoueursPeuventPiocher",
      quantite: 1
    },
    {
      type: "choisir",
      options: [
        {
          label: "Gagner 1 Matériaux par Sac",
          effets: [
            {
              type: "gagnerMateriauxParTagRegion",
              tagRegion: "Sac",
                quantiteParTag: 1
            }
          ]
        },
        {
          label: "Gagner 1 Population par Région en jeu",
          effets: [
            {
              type: "gagnerPopulationParRegionEnJeu",
              quantiteParRegion: 1
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  nation: "Carthaginois",
  localisationDepart: "Croissant",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Cité de Carthage",
  bandeau: "Gris",
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Maison",
  typeRegion: [],
  effet: "Solstice: vous POUVEZ défausser 1 carte pour Choisir: gagnez 1 Matériaux OU gagnez 1 Population OU gagnez 1 Progrès OU piochez 1 carte.",
  solsticeCode: [
    {
      type: "optionnel",
      message: "Défausser 1 carte pour activer le Solstice de Cité de Carthage ?",
      effetSiOui: [
        {
          type: "defausserMain",
          quantite: 1
        },
        {
          type: "choisir",
          options: [
            {
              label: "Gagner 1 Matériaux",
              effets: [
                {
                  type: "gagner",
                  ressource: "materiaux",
                  quantite: 1
                }
              ]
            },
            {
              label: "Gagner 1 Population",
              effets: [
                {
                  type: "gagner",
                  ressource: "population",
                  quantite: 1
                }
              ]
            },
            {
              label: "Gagner 1 Progrès",
              effets: [
                {
                  type: "gagner",
                  ressource: "progres",
                  quantite: 1
                }
              ]
            },
            {
              label: "Piocher 1 carte",
              effets: [
                {
                  type: "piocher",
                  quantite: 1
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  nation: "Carthaginois",
  localisationDepart: "Pleine",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Hégémonie",
  bandeau: "Gris",
  pin: "Aucun",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Payez 2 Matériaux pour acquérir Tradition/Civilisé/Région/Vassal",
  effetsCode: [
    {
      type: "payer",
      ressource: "materiaux",
      quantite: 2
    },
    {
      type: "acquerirParmiCategories",
      categories: ["Tradition", "Civilisé", "Région", "Vassal"]
    }
  ],
  coutDeveloppement: "3 Matériaux, 1 Population",
  categorie: "Aucun",
  nation: "Carthaginois",
  localisationDepart: "Étoile",
  pointsVictoire: 2,
  conditionVictoire: "Aucun"
},

{
  nom: "Monopole",
  bandeau: "Gris",
  pin: "Épée",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Gagnez 2 Matériaux et piochez 1 carte. Donnez à chaque autre joueur 1 carte de votre main ou de votre défausse",
  effetsCode: [
    {
      type: "gagner",
      ressource: "materiaux",
      quantite: 2
    },
    {
      type: "piocher",
      quantite: 1
    },
    {
      type: "donnerUneCarteAChaqueAutreJoueurDepuisMainOuDefausse"
    }
  ],
  coutDeveloppement: "7 Matériaux",
  categorie: "Aucun",
  nation: "Carthaginois",
  localisationDepart: "Étoile",
  pointsVictoire: "Variable",
  conditionVictoire: "1 PV par 5 Matériaux"
},

{
  nom: "Éléphants",
  bandeau: "Gris",
  pin: "Épée",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Chaque autre joueur abandonne une Région. Vous POUVEZ innover en Région/Vassal. Archivez cette carte dans votre Histoire.",
  effetsCode: [
    {
      type: "autresJoueursAbandonnentCategorie",
      categorie: "Région",
      quantite: 1
    },
    {
      type: "optionnel",
      message: "Voulez-vous innover en Région ou Vassal ?",
      effetSiOui: [
        {
          type: "innoverParmiCategories",
          categories: ["Région", "Vassal"]
        }
      ]
    },
    {
      type: "archiverSourceDepuisMain"
    }
  ],
  coutDeveloppement: "3 Population",
  categorie: "Aucun",
  nation: "Carthaginois",
  localisationDepart: "Étoile",
  pointsVictoire: 2,
  conditionVictoire: "Aucun"
},

{
  nom: "Éléphants",
  bandeau: "Gris",
  pin: "Épée",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Chaque autre joueur abandonne une Région. Vous POUVEZ innover en Région/Vassal. Archivez cette carte dans votre Histoire.",
  effetsCode: [
    {
      type: "autresJoueursAbandonnentCategorie",
      categorie: "Région",
      quantite: 1
    },
    {
      type: "optionnel",
      message: "Voulez-vous innover en Région ou Vassal ?",
      effetSiOui: [
        {
          type: "innoverParmiCategories",
          categories: ["Région", "Vassal"]
        }
      ]
    },
    {
      type: "archiverSourceDepuisMain"
    }
  ],
  coutDeveloppement: "3 Population",
  categorie: "Aucun",
  nation: "Carthaginois",
  localisationDepart: "Étoile",
  pointsVictoire: 2,
  conditionVictoire: "Aucun"
},

{
  nom: "Didon, reine de Carthage",
  bandeau: "Gris",
  pin: "Aucun",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Gagnez 1 Population. Vous POUVEZ acquérir une Région et la jouer en Action gratuite. Archivez <i>Didon, reine de Carthage</i> dans votre Histoire.",
  effetsCode: [
    {
      type: "gagner",
      ressource: "population",
      quantite: 1
    },
    {
      type: "optionnel",
      message: "Voulez-vous acquérir une Région et la jouer gratuitement ?",
      effetSiOui: [
        {
          type: "acquerirParmiCategoriesPuisJouerGratuitement",
          categories: ["Région"]
        }
      ]
    },
    {
      type: "archiverSourceDepuisMain"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  nation: "Carthaginois",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Caravanes",
  bandeau: "Gris",
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Épuiser: payez 3 Matériaux et défaussez 1 carte pour acquérir 1 carte du Marché sur laquelle se trouvent au moins 1 Matériaux.",
  epuiserCode: [
    {
      type: "acquerirCarteMarcheAvecMateriaux",
      coutMateriaux: 3,
      cartesADefausser: 1,
      minimumMateriauxSurCarte: 1
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  nation: "Carthaginois",
  localisationDepart: "Croissant",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Hannibal",
  bandeau: "Gris",
  pin: "Aucun",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Vous POUVEZ acquérir Tradition/Civilisé/Région/Vassal. Vous POUVEZ piocher 1 carte. Vous POUVEZ récupérer 1 carte de votre Histoire. Archivez <i>Hannibal</i> dans votre Histoire.",
  effetsCode: [
    {
      type: "optionnel",
      message: "Voulez-vous acquérir une carte Tradition, Civilisé, Région ou Vassal ?",
      effetSiOui: [
        {
          type: "acquerirParmiCategories",
          categories: ["Tradition", "Civilisé", "Région", "Vassal"]
        }
      ]
    },
    {
      type: "optionnel",
      message: "Voulez-vous piocher 1 carte ?",
      effetSiOui: [
        {
          type: "piocher",
          quantite: 1
        }
      ]
    },
    {
      type: "optionnel",
      condition: () => (jeu.joueurZones.histoireJoueur || []).length > 0,
      message: "Voulez-vous récupérer 1 carte de votre Histoire ?",
      effetSiOui: [
        {
          type: "recupererCarteDepuisHistoire"
        }
      ]
    },
    {
      type: "archiverSourceDepuisMain"
    }
  ],
  coutDeveloppement: "4 Population",
  categorie: "Aucun",
  styleBandeau: "Gris",
  nation: "Carthaginois",
  localisationDepart: "Étoile",
  pointsVictoire: 4,
  conditionVictoire: "Aucun"
},

{
  nom: "Navires Marchands",
  bandeau: "Gris",
  pin: "Persistante",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Épuiser: vous POUVEZ rappeler une Eau ou une Blé pour acquérir 1 carte du Marché sur laquelle se trouve au moins 1 Matériaux.",
  epuiserCode: [
    {
      type: "optionnel",
      message: "Voulez-vous rappeler une Eau ou une Blé pour acquérir une carte du Marché avec au moins 1 Matériaux ?",
      effetSiOui: [
        {
          type: "rappelerEauOuBlePuisAcquerirCarteMarcheAvecMateriaux",
          minimumMateriauxSurCarte: 1
        }
      ]
    }
  ],
  coutDeveloppement: "4 Matériaux, 1 Population",
  categorie: "Aucun",
  nation: "Carthaginois",
  localisationDepart: "Étoile",
  pointsVictoire: 4,
  conditionVictoire: "Aucun"
},

// =========================
// SCYTHES - PUISSANCE
// =========================

{
  nom: "Scythes",
  bandeau: "Gris",
  pin: "A",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Épuiser: dépensez 1 action et récupérez une Instabilité pour innover en Région.",
  epuiserCode: [
    {
      type: "payerAction",
      quantite: 1
    },
    {
      type: "recupererInstabilite"
    },
    {
      type: "innover",
      categorie: "Région"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Puissance",
  styleBandeau: "Aucun",
  nation: "Scythes",
  localisationDepart: "Puissance",
  pointsVictoire: "Variable",
  conditionVictoire: "1 PV par 6 Matériaux"
},

// =========================
// SCYTHES - PLEINE
// =========================

{
  nom: "Gloire",
  bandeau: "Gris",
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Cette carte ne peut pas être réservée. Abandonnez 3 Région pour regarder jusqu’à 2 Renommée. Gardez une de ces cartes et remettez l’autre sur la pioche Renommée.",
  effetsCode: [
    {
      type: "abandonnerTableauCategorie",
      categorie: "Région",
      quantite: 3
    },
    {
      type: "regarderRenommeeChoisirUne",
      quantite: 2
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  styleBandeau: "Aucun",
  nation: "Scythes",
  localisationDepart: "Pleine",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun",
  reserveInterdite: true
},

// =========================
// SCYTHES - ÉTOILE
// =========================

{
  nom: "Ateas", //---CHECK---// 
  bandeau: "Gris",
  pin: "Aucun",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Vous POUVEZ acquérir Région. Vous POUVEZ renvoyer une Instabilité. Archivez <i>Ateas</i> dans votre Histoire.",
  effetsCode: [
    {
      type: "optionnel",
      message: "Voulez-vous acquérir une carte Région ?",
      effetSiOui: [
        {
          type: "acquerirParmiCategories",
          categories: ["Région"]
        }
      ]
    },
    {
      type: "optionnel",
      message: "Voulez-vous renvoyer 1 Instabilité ?",
      effetSiOui: [
        {
          type: "renvoyerJusquaNInstabilitesDepuisMain",
          quantiteMax: 1
        }
      ]
    },
    {
      type: "archiverSourceDepuisMain"
    }
  ],
  coutDeveloppement: "4 Population",
  categorie: "Aucun",
  styleBandeau: "Aucun",
  nation: "Scythes",
  localisationDepart: "Étoile",
  pointsVictoire: 3,
  conditionVictoire: "Aucun"
},

{
  nom: "Cité de Gélonos", //---CHECK---// 
  bandeau: "Gris",
  pin: "Persistante",
  statut: "Empire",
  typeCarte: "Maison",
  typeRegion: [],
  effet: "Solstice: vous POUVEZ défausser 1 carte pour Choisir: gagnez 1 Population OU gagnez 1 Matériaux OU piochez 1 carte.",
  solsticeCode: [
    {
      type: "optionnel",
      message: "Défausser 1 carte pour activer le Solstice de Cité de Gélonos ?",
      effetSiOui: [
        {
          type: "defausserMain",
          quantite: 1
        },
        {
          type: "choisir",
          options: [
            {
              label: "Gagner 1 Population",
              effets: [
                { type: "gagner", ressource: "population", quantite: 1 }
              ]
            },
            {
              label: "Gagner 1 Matériaux",
              effets: [
                { type: "gagner", ressource: "materiaux", quantite: 1 }
              ]
            },
            {
              label: "Piocher 1 carte",
              effets: [
                { type: "piocher", quantite: 1 }
              ]
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "3 Population",
  categorie: "Aucun",
  styleBandeau: "Aucun",
  nation: "Scythes",
  localisationDepart: "Étoile",
  pointsVictoire: 2,
  conditionVictoire: "Aucun"
},

{
  nom: "Joaillerie",  //---CHECK---// 
  bandeau: "Gris",
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Cette carte ne peut pas être jouée, ni être réservée.",
  jouable: false,
  reserveInterdite: true,
  coutDeveloppement: "7 Matériaux",
  categorie: "Aucun",
  styleBandeau: "Aucun",
  nation: "Scythes",
  localisationDepart: "Étoile",
  pointsVictoire: 7,
  conditionVictoire: "Aucun"
},

{
  nom: "Kourganes", //---CHECK---// 
  bandeau: "Gris",
  pin: "Persistante",
  statut: "Empire",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Passif: augmentez de 1 la taille de votre main. Épuiser: archivez 1 carte de votre défausse dans votre Histoire.",
  epuiserCode: [
    {
      type: "archiverCarteDepuisDefausse"
    }
  ],
  coutDeveloppement: "3 Population",
  categorie: "Aucun",
  styleBandeau: "Aucun",
  nation: "Scythes",
  localisationDepart: "Étoile",
  pointsVictoire: 2,
  conditionVictoire: "Aucun"
},

// =========================
// SCYTHES - CROISSANT
// =========================

{
  nom: "Instabilité",
  bandeau: "Rouge",
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: payez 1 Population OU défaussez 2 cartes OU payez 3 Matériaux. Si vous le faites, renvoyez cette carte dans la pile Instabilité.",
  effetsCode: [
    {
      type: "resoudreInstabiliteStandard"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Instabilité",
  styleBandeau: "Instabilité",
  nation: "Scythes",
  localisationDepart: "Croissant",
  pointsVictoire: -2,
  conditionVictoire: "Aucun"
},

{
  nom: "Tamga", //---CHECK---//
  bandeau: "Aucun",
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Épuiser: défaussez 1 carte pour piocher 2 cartes.",
  epuiserCode: [
    {
      type: "defausserMain",
      quantite: 1
    },
    {
      type: "piocher",
      quantite: 2
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  styleBandeau: "Aucun",
  nation: "Scythes",
  localisationDepart: "Croissant",
  pointsVictoire: "Variable",
  conditionVictoire: "1 PV par 2 Région"
},

{
  nom: "Steppe Pontique", //---CHECK---//
  bandeau: "Jaune",
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: ["Sac", "Blé"],
  effet: "Gagnez 1 Population. Vous POUVEZ réserver 1 carte.",
  effetsCode: [
    {
      type: "gagner",
      ressource: "population",
      quantite: 1
    },
    {
      type: "optionnel",
      message: "Voulez-vous réserver 1 carte sous cette carte ?",
      effetSiOui: [
        {
          type: "reserverSousSource",
          quantite: 1
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Région",
  styleBandeau: "Région",
  nation: "Scythes",
  localisationDepart: "Croissant",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Instabilité",
  bandeau: "Rouge",
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: payez 1 Population OU défaussez 2 cartes OU payez 3 Matériaux. Si vous le faites, renvoyez cette carte dans la pile Instabilité.",
  effetsCode: [
    {
      type: "resoudreInstabiliteStandard"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Instabilité",
  styleBandeau: "Instabilité",
  nation: "Scythes",
  localisationDepart: "Croissant",
  pointsVictoire: -2,
  conditionVictoire: "Aucun"
},

{
  nom: "Pillards",
  bandeau: "Aucun",
  pin: "Épée",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Action gratuite. Piochez 2 cartes. Tous les autres joueurs rappellent une Région. Volez 1 Population à chaque autre joueur qui est en Empire.",
  effetsCode: [
    {
      type: "piocher",
      quantite: 2
    },
    {
      type: "autresJoueursRappellentCategorie",
      categorie: "Région",
      quantite: 1
    },
    {
      type: "volerPopulationAuBotSiEmpire",
      quantite: 1
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  styleBandeau: "Aucun",
  nation: "Scythes",
  localisationDepart: "Croissant",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Caucase", //---CHECK---//
  bandeau: "Jaune",
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: ["Sac"],
  effet: "Gagnez 1 Population. Vous POUVEZ réserver 1 carte.",
  effetsCode: [
    {
      type: "gagner",
      ressource: "population",
      quantite: 1
    },
    {
      type: "optionnel",
      message: "Voulez-vous réserver 1 carte sous cette carte ?",
      effetSiOui: [
        {
          type: "reserverSousSource",
          quantite: 1
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Région",
  styleBandeau: "Région",
  nation: "Scythes",
  localisationDepart: "Croissant",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Bassin du Tarim", //---CHECK---// 
  bandeau: "Jaune",
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: ["Sac", "Eau"],
  effet: "Vous POUVEZ piocher 1 carte. Vous POUVEZ réserver 1 carte.",
  effetsCode: [
    {
      type: "optionnel",
      message: "Voulez-vous piocher 1 carte ?",
      effetSiOui: [
        {
          type: "piocher",
          quantite: 1
        }
      ]
    },
    {
      type: "optionnel",
      message: "Voulez-vous réserver 1 carte sous cette carte ?",
      effetSiOui: [
        {
          type: "reserverSousSource",
          quantite: 1
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Région",
  styleBandeau: "Région",
  nation: "Scythes",
  localisationDepart: "Croissant",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

// =========================
// SCYTHES - BASE
// =========================

{
  nom: "Nomades", //---CHECK---//
  bandeau: "Aucun",
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Tous les joueurs PEUVENT piocher 1 carte. Gagnez 1 Matériaux par Sac que vous avez en jeu.",
  effetsCode: [
    {
      type: "optionnel",
      message: "Voulez-vous piocher 1 carte ?",
      effetSiOui: [
        {
          type: "piocher",
          quantite: 1
        }
      ]
    },
    {
      type: "autresJoueursPeuventPiocher",
      quantite: 1
    },
    {
      type: "gagnerMateriauxParTagRegion",
      tagRegion: "Sac",
      quantiteParTag: 1
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  styleBandeau: "Aucun",
  nation: "Scythes",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Nomades", //---CHECK---//
  bandeau: "Aucun",
  pin: "Aucun",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Tous les joueurs PEUVENT piocher 1 carte. Gagnez 1 Matériaux par Sac que vous avez en jeu.",
  effetsCode: [
    {
      type: "optionnel",
      message: "Voulez-vous piocher 1 carte ?",
      effetSiOui: [
        {
          type: "piocher",
          quantite: 1
        }
      ]
    },
    {
      type: "autresJoueursPeuventPiocher",
      quantite: 1
    },
    {
      type: "gagnerMateriauxParTagRegion",
      tagRegion: "Sac",
      quantiteParTag: 1
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  styleBandeau: "Aucun",
  nation: "Scythes",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Tian Shan", //---CHECK---//
  bandeau: "Jaune",
  styleBandeau: "Région",
  pin: "Persistante",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Gagnez 1 Population. Vous POUVEZ réserver 1 carte.",
  effetsCode: [
    {
      type: "gagner",
      ressource: "population",
      quantite: 1
    },
    {
      type: "optionnel",
      message: "Voulez-vous réserver 1 carte sous cette carte ?",
      effetSiOui: [
        {
          type: "reserverSousSource",
          quantite: 1
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Région",
  styleBandeau: "Région",
  nation: "Scythes",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Tentes",  //---CHECK---//
  bandeau: "Aucun",
  pin: "Persistante",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Épuiser: quand vous jouez une Région, épuisez cette carte pour gagner 1 Population. Solstice: vous POUVEZ rappeler une Région.",
  solsticeCode: [
  {
    type: "optionnel",
    condition: () => obtenirRegionsDansTableauJoueur().length > 0,
    message: "Voulez-vous rappeler une Région ?",
    effetSiOui: [
      {
        type: "rappelerUneRegionDepuisTableau"
      }
    ]
  }
],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  styleBandeau: "Aucun",
  nation: "Scythes",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Archers Montés",  //---CHECK---// 
  bandeau: "Aucun",
  pin: "Persistante",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Épuiser: vous POUVEZ épuiser cette carte pour éviter les effets d’une épée jouée par un autre joueur (même au cours de son tour). Solstice: vous POUVEZ payer 1 Matériaux pour gagner 1 Population.",
  solsticeCode: [
    {
      type: "optionnel",
      condition: () => (jeu.joueur.materiaux || 0) >= 1,
      message: "Payer 1 Matériaux pour gagner 1 Population ?",
      effetSiOui: [
        {
          type: "payer",
          ressource: "materiaux",
          quantite: 1
        },
        {
          type: "gagner",
          ressource: "population",
          quantite: 1
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  styleBandeau: "Aucun",
  nation: "Scythes",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Carpates",  //---CHECK---//
  styleBandeau: "Région",
  bandeau: "Jaune",
  pin: "Persistante",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Gagnez 1 Population. Vous POUVEZ réserver 1 carte.",
  effetsCode: [
    {
      type: "gagner",
      ressource: "population",
      quantite: 1
    },
    {
      type: "optionnel",
      message: "Voulez-vous réserver 1 carte sous cette carte ?",
      effetSiOui: [
        {
          type: "reserverSousSource",
          quantite: 1
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Région",
  styleBandeau: "Région",
  nation: "Scythes",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Conquête",  //---CHECK---//
  bandeau: "Gris",
  pin: "Aucun",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: payez 2 Population pour acquérir Région/Vassal OU payez 3 Population pour innover en Région/Vassal.",
  effetsCode: [
    {
      type: "choisir",
      options: [
        {
          label: "Payer 2 Population pour acquérir Région/Vassal",
          effets: [
            {
              type: "payerPuisAcquerirParmiCategories",
              ressource: "population",
              quantite: 2,
              categories: ["Région", "Vassal"]
            }
          ]
        },
        {
          label: "Payer 3 Population pour innover en Région/Vassal",
          effets: [
            {
              type: "payerPuisInnoverParmiCategories",
              ressource: "population",
              quantite: 3,
              categories: ["Région", "Vassal"]
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  styleBandeau: "Aucun",
  nation: "Scythes",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Progrès", //---CHECK---// 
  bandeau: "Gris",
  pin: "Aucun",
  statut: "Barbare",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: payez 3 Matériaux pour acquérir Tradition/Civilisé OU payez 5 Matériaux pour innover en Tradition/Civilisé.",
  effetsCode: [
    {
      type: "choisir",
      options: [
        {
          label: "Payer 3 Matériaux pour acquérir Tradition/Civilisé",
          effets: [
            {
              type: "payerPuisAcquerirParmiCategories",
              ressource: "materiaux",
              quantite: 3,
              categories: ["Tradition", "Civilisé"]
            }
          ]
        },
        {
          label: "Payer 5 Matériaux pour innover en Tradition/Civilisé",
          effets: [
            {
              type: "payerPuisInnoverParmiCategories",
              ressource: "materiaux",
              quantite: 5,
              categories: ["Tradition", "Civilisé"]
            }
          ]
        }
      ]
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Aucun",
  styleBandeau: "Aucun",
  nation: "Scythes",
  localisationDepart: "Base",
  pointsVictoire: "Aucun",
  conditionVictoire: "Aucun"
},

{
  nom: "Instabilité", //---CHECK---// 
  bandeau: "Rouge",
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: payez 1 Population OU défaussez 2 cartes OU payez 3 Matériaux. Si vous le faites, renvoyez cette carte dans la pile Instabilité.",
  effetsCode: [
    {
      type: "resoudreInstabiliteStandard"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Instabilité",
  styleBandeau: "Instabilité",
  nation: "Scythes",
  localisationDepart: "Base",
  pointsVictoire: -2,
  conditionVictoire: "Aucun"
},

{
  nom: "Instabilité", 
  bandeau: "Rouge",
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: payez 1 Population OU défaussez 2 cartes OU payez 3 Matériaux. Si vous le faites, renvoyez cette carte dans la pile Instabilité.",
  effetsCode: [
    {
      type: "resoudreInstabiliteStandard"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Instabilité",
  styleBandeau: "Instabilité",
  nation: "Scythes",
  localisationDepart: "Base",
  pointsVictoire: -2,
  conditionVictoire: "Aucun"
},

{
  nom: "Instabilité",
  bandeau: "Rouge",
  pin: "Aucun",
  statut: "Aucun",
  typeCarte: "Aucun",
  typeRegion: [],
  effet: "Choisir: payez 1 Population OU défaussez 2 cartes OU payez 3 Matériaux. Si vous le faites, renvoyez cette carte dans la pile Instabilité.",
  effetsCode: [
    {
      type: "resoudreInstabiliteStandard"
    }
  ],
  coutDeveloppement: "Aucun",
  categorie: "Instabilité",
  styleBandeau: "Instabilité",
  nation: "Scythes",
  localisationDepart: "Base",
  pointsVictoire: -2,
  conditionVictoire: "Aucun"
}
























































];


/* =========================================================
   1C) DONNÉES DES CARTES SPÉCIALES
   ========================================================= */

const carteRoiDesRois = {
  faceA: {
    nom: "Roi des rois",
    bandeau: "Mauve",
    pin: "A",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Si vous devez piocher ou regarder au moins 1 carte Renommée et qu’il n’y en a plus, résolvez Roi des rois à la place, puis retournez-la sur sa face B. Cela déclenche le Décompte. Si vous êtes en Barbare, gagnez 6 Progrès. Si vous êtes en Empire, gagnez 3 Progrès et développez 1 carte sans payer son coût.",
    coutDeveloppement: "Aucun",
    categorie: "Renommée",
    styleBandeau: "Renommée",
    nation: "Aucun",
    localisationDepart: "Aucun",
    pointsVictoire: "Aucun",
    conditionVictoire: "Aucun"
  },

  faceB: {
    nom: "Roi des rois",
    bandeau: "Mauve",
    pin: "B",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Si vous devez piocher ou regarder des Renommée, résolvez Roi des rois et laissez-la en place. Plusieurs joueurs peuvent résoudre cette carte. Si vous êtes en Barbare, gagnez 4 Progrès. Si vous êtes en Empire, développez 1 carte sans payer son coût.",
    coutDeveloppement: "Aucun",
    categorie: "Renommée",
    styleBandeau: "Renommée",
    nation: "Aucun",
    localisationDepart: "Aucun",
    pointsVictoire: "Aucun",
    conditionVictoire: "Aucun"
  }
};

const carteStatutJoueur = {
  faceA: {
    nom: "Barbare",
    statut: "Barbare",
    couleur: "rouge",
    iconeCentrale: "hache"
  },
  faceB: {
    nom: "Empire",
    statut: "Empire",
    couleur: "bleu",
    iconeCentrale: "couronne"
  }
};

function normaliserSegmentTemplateId(valeur = "") {
  return String(valeur || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    || "x";
}

function construireTemplateIdCarte(prefixe, carte, index) {
  const nom = normaliserSegmentTemplateId(carte?.nom || "carte");
  const nation = normaliserSegmentTemplateId(carte?.nation || "aucun");
  const localisation = normaliserSegmentTemplateId(carte?.localisationDepart || "aucun");
  return `${prefixe}:${nation}:${nom}:${localisation}:${index + 1}`;
}

function attribuerTemplateIdsSurListe(listeCartes, prefixe) {
  if (!Array.isArray(listeCartes)) {
    return;
  }

  listeCartes.forEach((carte, index) => {
    if (!carte || typeof carte !== "object") {
      return;
    }

    if (!carte.templateId) {
      carte.templateId = construireTemplateIdCarte(prefixe, carte, index);
    }
  });
}

function validerTemplateIdsCartes() {
  const ids = new Map();
  const erreurs = [];

  obtenirTemplatesCartesSauvegarde().forEach(carte => {
    const id = carte?.templateId;
    const nom = carte?.nom || "(sans nom)";

    if (typeof id !== "string" || id.trim() === "") {
      erreurs.push(`templateId manquant: ${nom}`);
      return;
    }

    if (ids.has(id)) {
      erreurs.push(`templateId duplique: ${id} (${ids.get(id)} / ${nom})`);
      return;
    }

    ids.set(id, nom);
  });

  if (erreurs.length > 0) {
    throw new Error(`Validation templateId impossible:\n${erreurs.join("\n")}`);
  }
}

function initialiserTemplateIdsCartes() {
  attribuerTemplateIdsSurListe(cartesCommunes, "commune");
  attribuerTemplateIdsSurListe(cartesNations, "nation");

  carteRoiDesRois.faceA.templateId = carteRoiDesRois.faceA.templateId || "special:roi-des-rois:face-a";
  carteRoiDesRois.faceB.templateId = carteRoiDesRois.faceB.templateId || "special:roi-des-rois:face-b";
  carteStatutJoueur.faceA.templateId = carteStatutJoueur.faceA.templateId || "special:statut-joueur:face-a";
  carteStatutJoueur.faceB.templateId = carteStatutJoueur.faceB.templateId || "special:statut-joueur:face-b";

  validerTemplateIdsCartes();
}

initialiserTemplateIdsCartes();


/* =========================================================
   2) CONFIGURATION / CONSTANTES
   ========================================================= */


const CATEGORIES = Object.freeze({
  TRADITION: "Tradition",
  CIVILISE: "Civilisé",
  REGION: "Région",
  VASSAL: "Vassal",
  RENOMMEE: "Renommée",
  INSTABILITE: "Instabilité",
  PUISSANCE: "Puissance"
});

const STATUTS = Object.freeze({
  BARBARE: "Barbare",
  EMPIRE: "Empire",
  AUCUN: "Aucun"
});

const PINS = Object.freeze({
  PERSISTANTE: "Persistante",
  EPEE: "Épée",
  A: "A",
  B: "B",
  AUCUN: "Aucun"
});

const PHASES = Object.freeze({
  TOUR: "tour",
  NETTOYAGE_CHOIX_PROGRES: "nettoyage-choix-progres",
  NETTOYAGE_DEFAUSSE: "nettoyage-defausse",
  SOLSTICE: "solstice"
});

const DIFFICULTES_BOT = Object.freeze({
  CHEF_DE_CLAN: "chef_de_clan",
  SEIGNEUR_DE_GUERRE: "seigneur_de_guerre",
  IMPERATOR: "imperator",
  SOUVERAIN: "souverain",
  SUZERAIN: "suzerain"
});

const DIFFICULTE_BOT_PAR_DEFAUT = DIFFICULTES_BOT.IMPERATOR;
const DIFFICULTES_BOT_VALIDES = new Set(Object.values(DIFFICULTES_BOT));

function normaliserDifficulteBot(valeur) {
  const slug = String(valeur || "").trim().toLowerCase();
  return DIFFICULTES_BOT_VALIDES.has(slug) ? slug : DIFFICULTE_BOT_PAR_DEFAUT;
}

function difficulteBotActive() {
  return normaliserDifficulteBot(configurationPartie?.difficulteBot);
}

function botDoitAfficherJetonEpuisementEmplacement5() {
  const difficulte = difficulteBotActive();
  return (
    difficulte === DIFFICULTES_BOT.CHEF_DE_CLAN ||
    difficulte === DIFFICULTES_BOT.SEIGNEUR_DE_GUERRE
  );
}

function botDoitPlacerCarteSupplementaireEnDefausse() {
  return difficulteBotActive() === DIFFICULTES_BOT.SEIGNEUR_DE_GUERRE;
}

function botUtiliseScoreRessourcesCombinees() {
  const difficulte = difficulteBotActive();
  return (
    difficulte === DIFFICULTES_BOT.SOUVERAIN ||
    difficulte === DIFFICULTES_BOT.SUZERAIN
  );
}

function botNombreEmplacementsActifs() {
  const difficulte = difficulteBotActive();

  if (difficulte === DIFFICULTES_BOT.SUZERAIN) {
    return 6;
  }

  if (
    difficulte === DIFFICULTES_BOT.CHEF_DE_CLAN ||
    difficulte === DIFFICULTES_BOT.SEIGNEUR_DE_GUERRE
  ) {
    return 4;
  }

  return 5;
}

function botNombreEmplacementsSelonDe() {
  return difficulteBotActive() === DIFFICULTES_BOT.SUZERAIN ? 6 : 5;
}

function botIndicesEmplacementsExistants() {
  return [1, 2, 3, 4, 5, 6];
}

function botIndicesEmplacementsActifs() {
  return botIndicesEmplacementsExistants().slice(0, botNombreEmplacementsActifs());
}

function botIndicesEmplacementsSelonDe() {
  return botIndicesEmplacementsExistants().slice(0, botNombreEmplacementsSelonDe());
}

function botEmplacementsActifsComplets() {
  return botIndicesEmplacementsActifs().every(i => !!etatBot.emplacements?.[String(i)]);
}

function botBonusRessourcesDepartSelonDifficulte() {
  if (!botUtiliseScoreRessourcesCombinees()) {
    return {
      materiaux: 0,
      population: 0,
      progres: 0
    };
  }

  return {
    materiaux: 3,
    population: 2,
    progres: 1
  };
}

const UI = Object.freeze({
  LARGEUR_CARTE_MAIN: 260,
  LARGEUR_ZONE_MAIN: 1420,
  TAILLE_TABLEAU_JOUEUR: 20,
  SCALE_JOUEUR: 1,
   SCALE_MAIN: 1
});

/* =========================================================
   BOT - CONFIG / ÉTAT / ANIMATION VISUELLE
   ========================================================= */

   function construirePiocheDynastieBotDepuisCartes(cartesNation) {
  const etoilesParPV = {};
  const croissants = [];
  let cartePleine = null;

  for (const carte of cartesNation || []) {
    if (!carte) continue;

    const localisation = carte.localisationDepart;

    if (localisation === "Étoile" || localisation === "Etoile") {
  const pv = botPointsVictoireCarte(carte);

  if (!etoilesParPV[pv]) {
    etoilesParPV[pv] = [];
  }

  etoilesParPV[pv].push(carte);
  continue;
}

    if (localisation === "Pleine") {
      cartePleine = carte;
      continue;
    }

    if (localisation === "Croissant") {
      croissants.push(carte);
    }
  }

  debugLog("=== BOT DYNASTIE | CARTES SOURCE ===");
Object.keys(etoilesParPV)
  .sort((a, b) => Number(b) - Number(a))
  .forEach(pv => {
    debugLog(
      `Étoiles ${pv} PV (avant mélange) :`,
      etoilesParPV[pv].map(c => c.nom)
    );
  });

debugLog(
  "Pleine :",
  cartePleine ? `${cartePleine.nom} [PV:${cartePleine.pointsVictoire}]` : "aucune"
);

debugLog(
  "Croissants (avant mélange) :",
  croissants.map(c => `${c.nom} [PV:${c.pointsVictoire}]`)
);

const etoilesTrieesEtMelangeesParEgalite = [];

Object.keys(etoilesParPV)
  .sort((a, b) => Number(b) - Number(a))
  .forEach(pv => {
    const groupe = [...etoilesParPV[pv]];
    melanger(groupe);

    debugLog(
      `Étoiles ${pv} PV (après mélange) :`,
      groupe.map(c => c.nom)
    );

    etoilesTrieesEtMelangeesParEgalite.push(...groupe);
  });

const croissantsMelanges = [...croissants];
melanger(croissantsMelanges);

debugLog(
  "Croissants (après mélange) :",
  croissantsMelanges.map(c => `${c.nom} [PV:${c.pointsVictoire}]`)
);

const piocheFinale = [
  ...croissantsMelanges,
  cartePleine,
  ...etoilesTrieesEtMelangeesParEgalite
].filter(Boolean);

debugLog("=== BOT DYNASTIE | ORDRE FINAL DE LA PILE ===");
piocheFinale.forEach((carte, index) => {
  debugLog(
    `${index + 1}. ${carte.nom} | localisation=${carte.localisationDepart} | PV=${carte.pointsVictoire}`
  );
});

return piocheFinale;
}

   function afficherSlotStatutBot() {
  const zone = getElement("bot-carte-statut");

  if (!zone) {
    return;
  }

  const carte = obtenirCarteStatutBot();

  if (!carte) {
    zone.innerHTML = "";
    return;
  }

  zone.innerHTML = creerCarteStatutHTML(carte);
}

const CONFIG_BOT = {
  delaiEtapeMs: 2500
};

const etatBot = {
  nation: "celtes",
  statut: "Barbare", // "Barbare" ou "Empire"

  population: 0,
  materiaux: 0,
  progres: 0,

  deckCiv: [],
  defausse: [],
  piocheDynastie: [],
  histoire: [],
  tableau: [],
  cartePuissance: null,

  carteMiseDeCote: null,

  emplacements: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null
  }
};

const botUI = {
  fileEtapes: [],
  animationEnCours: false,
  cartesSurlignees: [],
  resoudreEtapeSuivante: null,
  emplacementsReveles: {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false
  }
};

function attendre(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function ajouterEtapeBot({
  message = "",
  cartes = [],
  duree = CONFIG_BOT.delaiEtapeMs,
  callback = null
} = {}) {
  botUI.fileEtapes.push({
    message,
    cartes,
    duree,
    callback
  });
}

async function jouerEtapesBot() {
  if (botUI.animationEnCours) {
    return;
  }

  botUI.animationEnCours = true;

  while (botUI.fileEtapes.length > 0) {
    const etape = botUI.fileEtapes.shift();

    afficherPanneauBot(etape.message);
    surlignerCartesBot(etape.cartes);

    if (typeof etape.callback === "function") {
      await etape.callback();
    }

    await attendreClicSuivantBot();
  }

  if (typeof fermerZoomTemporaire === "function") {
    fermerZoomTemporaire();
  }

  retirerSurlignageCartesBot();
  masquerBoutonSuivantBot();
  masquerPanneauBot();
  botUI.animationEnCours = false;
}

function afficherPanneauBot(message) {
  const panneau = getElement("panneau-bot");
  const messageDiv = getElement("panneau-bot-message");

  if (!panneau || !messageDiv) {
    return;
  }

  messageDiv.textContent = message || "";
  panneau.classList.remove("panneau-ui-cache");
  panneau.classList.add("panneau-ui-ouvert");
}

function masquerPanneauBot() {
  const panneau = getElement("panneau-bot");

  if (!panneau) {
    return;
  }

  panneau.classList.remove("panneau-ui-ouvert");
  panneau.classList.add("panneau-ui-cache");
}

function surlignerCartesBot(cartes = []) {
  botUI.cartesSurlignees = Array.isArray(cartes) ? cartes.filter(Boolean) : [];
  afficherZoneBot?.();
  afficherZoneJoueur?.();
  afficherBasMarche?.();
  afficherHautMarche?.();
  afficherPileExil?.();
}

function retirerSurlignageCartesBot() {
  botUI.cartesSurlignees = [];
  afficherZoneBot?.();
  afficherZoneJoueur?.();
  afficherBasMarche?.();
  afficherHautMarche?.();
  afficherPileExil?.();
}

function carteEstSurligneeParBot(carte) {
  return botUI.cartesSurlignees.includes(carte);
}


/* =========================================================
   BOT - TABLEAUX D'ACTIONS CELTES
   ========================================================= */

const TABLEAUX_ACTIONS_BOT = {

    romains: {
    barbare: [
      {
        priorite: 1,
        match: { pin: PINS.EPEE },
        action: { type: "pinEpeeRomainsBarbare" }
      },
      {
        priorite: 2,
        match: { categorie: CATEGORIES.RENOMMEE },
        action: { type: "renommeeRomainsBarbare" }
      },
      {
        priorite: 3,
        match: { nom: "Gloire" },
        action: { type: "gloireRomainsBarbare" }
      },
      {
        priorite: 4,
        match: { categorie: CATEGORIES.REGION },
        action: { type: "regionRomainsBarbare" }
      },
      {
        priorite: 5,
        match: { pin: PINS.PERSISTANTE },
        action: { type: "persistanteRomainsBarbare" }
      },
      {
        priorite: 6,
        match: { nom: "Progrès" },
        action: { type: "progresRomainsBarbare" }
      },
      {
        priorite: 7,
        match: { nom: "Prospérité" },
        action: { type: "prosperiteRomainsBarbare" }
      },
      {
        priorite: 8,
        match: { statut: STATUTS.BARBARE },
        action: { type: "barbareRomainsBarbare" }
      },
      {
        priorite: 9,
        match: { categorie: CATEGORIES.VASSAL },
        action: { type: "vassalRomainsBarbare" }
      },
      {
        priorite: 10,
        match: { fallback: true },
        action: { type: "autreRomainsBarbare" }
      }
    ],

    empire: [
      {
        priorite: 1,
        match: { statut: STATUTS.BARBARE },
        action: { type: "barbareRomainsEmpire" }
      },
      {
        priorite: 2,
        match: { categorie: CATEGORIES.RENOMMEE },
        action: { type: "renommeeRomainsEmpire" }
      },
      {
        priorite: 3,
        match: { pin: PINS.EPEE },
        action: { type: "pinEpeeRomainsEmpire" }
      },
      {
        priorite: 4,
        match: { nom: "Gloire" },
        action: { type: "gloireRomainsEmpire" }
      },
      {
        priorite: 5,
        match: { nom: "Prospérité" },
        action: { type: "prosperiteRomainsEmpire" }
      },
      {
        priorite: 6,
        match: { categorie: CATEGORIES.REGION },
        action: { type: "regionRomainsEmpire" }
      },
      {
        priorite: 7,
        match: { pin: PINS.PERSISTANTE },
        action: { type: "persistanteRomainsEmpire" }
      },
      {
        priorite: 8,
        match: { categorie: CATEGORIES.VASSAL },
        action: { type: "vassalRomainsEmpire" }
      },
      {
        priorite: 9,
        match: { statut: STATUTS.EMPIRE },
        action: { type: "empireRomainsEmpire" }
      },
      {
        priorite: 10,
        match: { fallback: true },
        action: { type: "autreRomainsEmpire" }
      }
    ]
  },

  perses: {
  barbare: [
    {
      priorite: 1,
      match: { categorie: CATEGORIES.RENOMMEE },
      action: { type: "renommeePersesBarbare" }
    },
    {
      priorite: 2,
      match: { nom: "Gloire" },
      action: { type: "gloirePersesBarbare" }
    },
    {
      priorite: 3,
      match: { categorie: CATEGORIES.VASSAL },
      action: { type: "vassalPersesBarbare" }
    },
    {
      priorite: 4,
      match: { statut: STATUTS.BARBARE },
      action: { type: "barbarePersesBarbare" }
    },
    {
      priorite: 5,
      match: { categorie: CATEGORIES.REGION },
      action: { type: "regionPersesBarbare" }
    },
    {
      priorite: 6,
      match: { pin: PINS.PERSISTANTE },
      action: { type: "persistantePersesBarbare" }
    },
    {
      priorite: 7,
      match: { nom: "Prospérité" },
      action: { type: "prosperitePersesBarbare" }
    },
    {
      priorite: 8,
      match: { fallback: true },
      action: { type: "autrePersesBarbare" }
    }
  ],

  empire: [
    {
      priorite: 1,
      match: { categorie: CATEGORIES.RENOMMEE },
      action: { type: "renommeePersesEmpire" }
    },
    {
      priorite: 2,
      match: { nom: "Gloire" },
      action: { type: "gloirePersesEmpire" }
    },
    {
      priorite: 3,
      match: { statut: STATUTS.BARBARE },
      action: { type: "barbarePersesEmpire" }
    },
    {
      priorite: 4,
      match: { categorie: CATEGORIES.VASSAL },
      action: { type: "vassalPersesEmpire" }
    },
    {
      priorite: 5,
      match: { pin: PINS.EPEE },
      action: { type: "epeePersesEmpire" }
    },
    {
      priorite: 6,
      match: { categorie: CATEGORIES.REGION },
      action: { type: "regionPersesEmpire" }
    },
    {
      priorite: 7,
      match: { pin: PINS.PERSISTANTE },
      action: { type: "persistantePersesEmpire" }
    },
    {
      priorite: 8,
      match: { statut: STATUTS.EMPIRE },
      action: { type: "empirePersesEmpire" }
    },
    {
      priorite: 9,
      match: { fallback: true },
      action: { type: "autrePersesEmpire" }
    }
  ]
},

vikings: {
  barbare: [
    {
      priorite: 1,
      match: { pin: PINS.EPEE },
      action: { type: "pinEpeeVikingsBarbare" }
    },
    {
      priorite: 2,
      match: { categorie: CATEGORIES.RENOMMEE },
      action: { type: "renommeeVikingsBarbare" }
    },
    {
      priorite: 3,
      match: { nom: "Gloire" },
      action: { type: "gloireVikingsBarbare" }
    },
    {
      priorite: 4,
      match: { categorie: CATEGORIES.REGION },
      action: { type: "regionVikingsBarbare" }
    },
    {
      priorite: 5,
      match: { categorie: CATEGORIES.TRADITION },
      action: { type: "traditionVikingsBarbare" }
    },
    {
  priorite: 6,
  match: { statut: STATUTS.BARBARE },
  action: { type: "barbareVikingsBarbare" }
    },
    {
      priorite: 7,
      match: { pin: PINS.PERSISTANTE },
      action: { type: "persistanteVikingsBarbare" }
    },
    {
      priorite: 8,
      match: {},
      action: { type: "autreVikingsBarbare" }
    }
  ]
},

carthaginois: {
  barbare: [
    {
      priorite: 1,
      match: { categorie: CATEGORIES.RENOMMEE },
      action: { type: "renommeeCarthaginoisBarbare" }
    },
    {
      priorite: 2,
      match: { nom: "Gloire" },
      action: { type: "gloireCarthaginoisBarbare" }
    },
    {
      priorite: 3,
      match: { statut: STATUTS.BARBARE },
      action: { type: "barbareCarthaginoisBarbare" }
    },
    {
      priorite: 4,
      match: { categorie: CATEGORIES.REGION },
      action: { type: "regionCarthaginoisBarbare" }
    },
    {
      priorite: 5,
      match: { pin: PINS.PERSISTANTE },
      action: { type: "persistanteCarthaginoisBarbare" }
    },
    {
      priorite: 6,
      match: { nom: "Prospérité" },
      action: { type: "prosperiteCarthaginoisBarbare" }
    },
    {
      priorite: 7,
      match: { categorie: CATEGORIES.VASSAL },
      action: { type: "vassalCarthaginoisBarbare" }
    },
    {
      priorite: 8,
      match: { fallback: true },
      action: { type: "autreCarthaginoisBarbare" }
    }
  ],

  empire: [
    {
      priorite: 1,
      match: { statut: STATUTS.BARBARE },
      action: { type: "barbareCarthaginoisEmpire" }
    },
    {
      priorite: 2,
      match: { categorie: CATEGORIES.RENOMMEE },
      action: { type: "renommeeCarthaginoisEmpire" }
    },
    {
      priorite: 3,
      match: { pin: PINS.EPEE },
      action: { type: "epeeCarthaginoisEmpire" }
    },
    {
      priorite: 4,
      match: { nom: "Gloire" },
      action: { type: "gloireCarthaginoisEmpire" }
    },
    {
      priorite: 5,
      match: { statut: STATUTS.EMPIRE },
      action: { type: "empireCarthaginoisEmpire" }
    },
    {
      priorite: 6,
      match: { categorie: CATEGORIES.REGION },
      action: { type: "regionCarthaginoisEmpire" }
    },
    {
      priorite: 7,
      match: { pin: PINS.PERSISTANTE },
      action: { type: "persistanteCarthaginoisEmpire" }
    },
    {
      priorite: 8,
      match: { fallback: true },
      action: { type: "autreCarthaginoisEmpire" }
    }
  ]
},

scythes: {
  barbare: [
    {
      priorite: 1,
      match: { pin: PINS.EPEE },
      action: { type: "epeeScythesBarbare" }
    },
    {
      priorite: 2,
      match: { nom: "Conquête" },
      action: { type: "conqueteScythesBarbare" }
    },
    {
      priorite: 3,
      match: { nom: "Progrès" },
      action: { type: "progresScythesBarbare" }
    },
    {
      priorite: 4,
      match: { categorie: CATEGORIES.REGION },
      action: { type: "regionScythesBarbare" }
    },
    {
      priorite: 5,
      match: { pin: PINS.PERSISTANTE },
      action: { type: "persistanteScythesBarbare" }
    },
    {
      priorite: 6,
      match: { statut: STATUTS.BARBARE },
      action: { type: "barbareScythesBarbare" }
    },
    {
      priorite: 7,
      match: { categorie: CATEGORIES.VASSAL },
      action: { type: "vassalScythesBarbare" }
    },
    {
      priorite: 8,
      match: { fallback: true },
      action: { type: "autreScythesBarbare" }
    }
  ],

  empire: [
    {
      priorite: 1,
      match: { categorie: CATEGORIES.RENOMMEE },
      action: { type: "renommeeScythesEmpire" }
    },
    {
      priorite: 2,
      match: { nom: "Gloire" },
      action: { type: "gloireScythesEmpire" }
    },
    {
      priorite: 3,
      match: { statut: STATUTS.BARBARE },
      action: { type: "barbareScythesEmpire" }
    },
    {
      priorite: 4,
      match: { categorie: CATEGORIES.REGION },
      action: { type: "regionScythesEmpire" }
    },
    {
      priorite: 5,
      match: { pin: PINS.PERSISTANTE },
      action: { type: "persistanteScythesEmpire" }
    },
    {
      priorite: 6,
      match: { pin: PINS.EPEE },
      action: { type: "epeeScythesEmpire" }
    },
    {
      priorite: 7,
      match: { statut: STATUTS.EMPIRE },
      action: { type: "empireScythesEmpire" }
    },
    {
      priorite: 8,
      match: { fallback: true },
      action: { type: "autreScythesEmpire" }
    }
  ]
},

      macedoniens: {
  barbare: [
    {
      priorite: 1,
      match: { categorie: CATEGORIES.RENOMMEE },
      action: { type: "renommeeMacedoniensBarbare" }
    },
    {
      priorite: 2,
      match: { nom: "Gloire" },
      action: { type: "gloireMacedoniensBarbare" }
    },
    {
      priorite: 3,
      match: { statut: STATUTS.BARBARE },
      action: { type: "barbareMacedoniensBarbare" }
    },
    {
      priorite: 4,
      match: { categorie: CATEGORIES.REGION },
      action: { type: "regionMacedoniensBarbare" }
    },
    {
      priorite: 5,
      match: { pin: PINS.PERSISTANTE },
      action: { type: "persistanteMacedoniensBarbare" }
    },
    {
      priorite: 6,
      match: { nom: "Prospérité" },
      action: { type: "prosperiteMacedoniensBarbare" }
    },
    {
      priorite: 7,
      match: { pin: PINS.EPEE },
      action: { type: "epeeMacedoniensBarbare" }
    },
    {
      priorite: 8,
      match: { fallback: true },
      action: { type: "autreMacedoniensBarbare" }
    }
  ],

  empire: [
    {
      priorite: 1,
      match: { categorie: CATEGORIES.RENOMMEE },
      action: { type: "renommeeMacedoniensEmpire" }
    },
    {
      priorite: 2,
      match: { nom: "Gloire" },
      action: { type: "gloireMacedoniensEmpire" }
    },
    {
      priorite: 3,
      match: { statut: STATUTS.BARBARE },
      action: { type: "barbareMacedoniensEmpire" }
    },
    {
      priorite: 4,
      match: { categorie: CATEGORIES.REGION },
      action: { type: "regionMacedoniensEmpire" }
    },
    {
      priorite: 5,
      match: { pin: PINS.PERSISTANTE },
      action: { type: "persistanteMacedoniensEmpire" }
    },
    {
      priorite: 6,
      match: { statut: STATUTS.EMPIRE },
      action: { type: "empireMacedoniensEmpire" }
    },
    {
      priorite: 7,
      match: { fallback: true },
      action: { type: "autreMacedoniensEmpire" }
    }
  ]
},

grecs: {
  barbare: [
    {
      priorite: 1,
      match: { pin: PINS.EPEE },
      action: { type: "epeeGrecsBarbare" }
    },
    {
      priorite: 2,
      match: { categorie: CATEGORIES.RENOMMEE },
      action: { type: "renommeeGrecsBarbare" }
    },
    {
      priorite: 3,
      match: { nom: "Gloire" },
      action: { type: "gloireGrecsBarbare" }
    },
    {
      priorite: 4,
      match: { nom: "Progrès" },
      action: { type: "progresGrecsBarbare" }
    },
    {
      priorite: 5,
      match: { statut: STATUTS.BARBARE },
      action: { type: "barbareGrecsBarbare" }
    },
    {
      priorite: 6,
      match: { categorie: CATEGORIES.REGION },
      action: { type: "regionGrecsBarbare" }
    },
    {
      priorite: 7,
      match: { pin: PINS.PERSISTANTE },
      action: { type: "persistanteGrecsBarbare" }
    },
    {
      priorite: 8,
      match: { fallback: true },
      action: { type: "autreGrecsBarbare" }
    }
  ],

  empire: [
    {
      priorite: 1,
      match: { pin: PINS.EPEE },
      action: { type: "epeeGrecsEmpire" }
    },
    {
      priorite: 2,
      match: { categorie: CATEGORIES.RENOMMEE },
      action: { type: "renommeeGrecsEmpire" }
    },
    {
      priorite: 3,
      match: { nom: "Gloire" },
      action: { type: "gloireGrecsEmpire" }
    },
    {
      priorite: 4,
      match: { statut: STATUTS.BARBARE },
      action: { type: "barbareGrecsEmpire" }
    },
    {
      priorite: 5,
      match: { categorie: CATEGORIES.REGION },
      action: { type: "regionGrecsEmpire" }
    },
    {
      priorite: 6,
      match: { pin: PINS.PERSISTANTE },
      action: { type: "persistanteGrecsEmpire" }
    },
    {
      priorite: 7,
      match: { statut: STATUTS.EMPIRE },
      action: { type: "empireGrecsEmpire" }
    },
    {
      priorite: 8,
      match: { fallback: true },
      action: { type: "autreGrecsEmpire" }
    }
  ]
},

  celtes: {
    barbare: [
      {
        priorite: 1,
        match: { pin: PINS.EPEE },
        action: { type: "volerMateriauxEtProgres" }
      },
      {
        priorite: 2,
        match: { categorie: CATEGORIES.RENOMMEE },
        action: { type: "depenseMateriauxPourProgresPuisHistoire" }
      },
      {
        priorite: 3,
        match: { nom: "Gloire" },
        action: { type: "gloireCeltesBarbare" }
      },
      {
        priorite: 4,
        match: { nom: "Conquête" },
        action: { type: "conqueteCeltesBarbare" }
      },
      {
        priorite: 5,
        match: { categorie: CATEGORIES.TRADITION },
        action: { type: "traditionCeltesBarbare" }
      },
      {
        priorite: 6,
        match: { statut: STATUTS.BARBARE },
        action: { type: "barbareCeltesBarbare" }
      },
      {
        priorite: 7,
        match: { categorie: CATEGORIES.REGION },
        action: { type: "regionCeltesBarbare" }
      },
      {
        priorite: 8,
        match: { pin: PINS.PERSISTANTE },
        action: { type: "persistanteCeltesBarbare" }
      },
      {
        priorite: 9,
        match: { categorie: CATEGORIES.VASSAL },
        action: { type: "vassalCeltesBarbare" }
      },
      {
        priorite: 10,
        match: { fallback: true },
        action: { type: "autreCeltesBarbare" }
      }
    ],

    empire: [
      {
        priorite: 1,
        match: { statut: STATUTS.BARBARE },
        action: { type: "barbareCeltesEmpire" }
      },
      {
        priorite: 2,
        match: { categorie: CATEGORIES.RENOMMEE },
        action: { type: "renommeeCeltesEmpire" }
      },
      {
        priorite: 3,
        match: { nom: "Gloire" },
        action: { type: "gloireCeltesEmpire" }
      },
      {
        priorite: 4,
        match: { categorie: CATEGORIES.TRADITION },
        action: { type: "traditionCeltesEmpire" }
      },
      {
        priorite: 5,
        match: { categorie: CATEGORIES.REGION },
        action: { type: "regionCeltesEmpire" }
      },
      {
        priorite: 6,
        match: { pin: PINS.PERSISTANTE },
        action: { type: "persistanteCeltesEmpire" }
      },
      {
        priorite: 7,
        match: { pin: PINS.EPEE },
        action: { type: "epeeCeltesEmpire" }
      },
      {
        priorite: 8,
        match: { statut: STATUTS.EMPIRE },
        action: { type: "empireCeltesEmpire" }
      },
      {
        priorite: 9,
        match: { categorie: CATEGORIES.VASSAL },
        action: { type: "vassalCeltesEmpire" }
      },
      {
        priorite: 10,
        match: { fallback: true },
        action: { type: "autreCeltesEmpire" }
      }
    ]
  }
};


/* =========================================================
   BOT - MATCHING DES RÈGLES
   ========================================================= */

function normaliserStatutBot(statut) {
  if (statut === STATUTS.EMPIRE || statut === "Empire") {
    return "empire";
  }

  return "barbare";
}

function carteCorrespondRegleBot(carte, regle) {
  if (!carte || !regle || !regle.match) {
    return false;
  }

  const match = regle.match;

  if (match.fallback) {
    return true;
  }

  if (match.nom && carte.nom === match.nom) {
    return true;
  }

  if (match.categorie && inclutCategorie(carte, match.categorie)) {
    return true;
  }

  if (match.pin && carte.pin === match.pin) {
    return true;
  }

  if (match.statut && carte.statut === match.statut) {
    return true;
  }

  return false;
}

function trouverRegleBotPourCarte(carte, nation = etatBot.nation, statutBot = etatBot.statut) {
  const nationCle = String(nation || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const statutCle = normaliserStatutBot(statutBot);
  const tableau = TABLEAUX_ACTIONS_BOT[nationCle]?.[statutCle];

  if (!Array.isArray(tableau)) {
    return null;
  }

  let regleAutre = null;

  for (const regle of tableau) {
    const match = regle?.match || {};

    // On garde la règle vide comme fallback, mais on ne la teste pas tout de suite
    if (Object.keys(match).length === 0) {
      regleAutre = regle;
      continue;
    }

    if (carteCorrespondRegleBot(carte, regle)) {
      return regle;
    }
  }

  return regleAutre;
}


/* =========================================================
   BOT - HELPERS GÉNÉRAUX
   ========================================================= */



   function obtenirCarteStatutBot() {
  if (etatBot.statut === "Empire") {
    return { ...carteStatutJoueur.faceB };
  }

  return { ...carteStatutJoueur.faceA };
}

function botPeutAcquerirCategorie(categorie) {
  const zonesEligibles = obtenirZonesMarcheAcquerablesPourCategorie(categorie);
  return Array.isArray(zonesEligibles) && zonesEligibles.length > 0;
}

function botPeutAcquerirParmiCategories(categories = []) {
  return categories.some(categorie => botPeutAcquerirCategorie(categorie));
}

function botPeutInnoverCategorie(categorie) {
  const zonesEligibles = obtenirZonesMarcheInnovablesPourCategorie(categorie);
  return Array.isArray(zonesEligibles) && zonesEligibles.length > 0;
}

function botGagnePopulation(quantite = 1) {
  etatBot.population += quantite;
}

function botGagneMateriaux(quantite = 1) {
  etatBot.materiaux += quantite;
}

function botGagneProgres(quantite = 1) {
  etatBot.progres += quantite;
}

function botDepensePopulation(quantite = 1) {
  const payable = Math.min(etatBot.population, quantite);
  etatBot.population -= payable;
  return payable === quantite;
}

function botDepenseMateriaux(quantite = 1) {
  const payable = Math.min(etatBot.materiaux, quantite);
  etatBot.materiaux -= payable;
  return payable === quantite;
}

function archiverCarteBot(carte) {
  if (!carte) {
    return false;
  }

  retirerCarteDeToutesZonesBot(carte);
  etatBot.histoire.push(carte);
  afficherZoneBot?.();
  return true;
}

function defausserCarteBot(carte) {
  if (!carte) {
    return false;
  }

  retirerCarteDeToutesZonesBot(carte);
  etatBot.defausse.push(carte);
  afficherZoneBot?.();
  return true;
}

function jouerRegionDansTableauBot(carte) {
  if (!carte) {
    return false;
  }

  retirerCarteDeToutesZonesBot(carte);
  etatBot.tableau.push(carte);
  afficherZoneBot?.();
  return true;
}

function retirerCarteDeToutesZonesBot(carte) {
  if (!carte) {
    return;
  }

  const retirerDansTableau = tableau => {
    const index = tableau.indexOf(carte);
    if (index >= 0) {
      tableau.splice(index, 1);
    }
  };

  retirerDansTableau(etatBot.deckCiv);
  retirerDansTableau(etatBot.defausse);
  retirerDansTableau(etatBot.piocheDynastie);
  retirerDansTableau(etatBot.histoire);
  retirerDansTableau(etatBot.tableau);

  for (const cle of Object.keys(etatBot.emplacements)) {
    if (etatBot.emplacements[cle] === carte) {
      etatBot.emplacements[cle] = null;
    }
  }
}

function faireGagnerInstabiliteAuJoueur(quantite = 1) {
  if (verifierEffondrement()) {
    return;
  }

  for (let i = 0; i < quantite; i += 1) {
    const carte = jeu.piles.piocheMarcheInstabilite?.pop?.();

    if (!carte) {
      verifierEffondrement();
      break;
    }

    jeu.joueurZones.mainJoueur.push(carte);

    if (verifierEffondrement()) {
      break;
    }
  }

  afficherZoneJoueur?.();
  afficherBasMarche?.();
}

function volerAuJoueur(typeRessource, quantite = 1) {
  if (!jeu?.joueur) {
    return 0;
  }

  const disponible = Math.max(0, jeu.joueur[typeRessource] || 0);
  const vole = Math.min(disponible, quantite);

  jeu.joueur[typeRessource] -= vole;

  if (typeRessource === "materiaux") {
    etatBot.materiaux += vole;
  } else if (typeRessource === "progres") {
    etatBot.progres += vole;
  } else if (typeRessource === "population") {
    etatBot.population += vole;
  }

  afficherZoneJoueur?.();
  afficherZoneBot?.();
  return vole;
}

function botExilerUneCarteDuMarche() {
  if (typeof exilerCarteSelonReglesBot === "function") {
    return exilerCarteSelonReglesBot();
  }

  return false;
}

function botAbandonnerRegions(quantite = 1) {
  if (typeof abandonnerRegionsBotSelonRegles === "function") {
    return abandonnerRegionsBotSelonRegles(quantite);
  }

  console.warn("abandonnerRegionsBotSelonRegles(quantite) n'est pas encore implémentée.");
  return false;
}

function botPiocherRenommee() {
  if (typeof piocherCarteRenommeePourBot === "function") {
    return piocherCarteRenommeePourBot();
  }

  console.warn("piocherCarteRenommeePourBot() n'est pas encore implémentée.");
  return false;
}

function botDefausserDepuisDeckCiv(quantite = 1) {
  for (let i = 0; i < quantite; i += 1) {
    const carte = etatBot.deckCiv.shift();
    if (!carte) {
      break;
    }
    etatBot.defausse.push(carte);
  }

  afficherZoneBot?.();
  return true;
}


/* =========================================================
   BOT - ACTIONS CELTES 
   ========================================================= */

const ACTIONS_BOT = {
  async regionCeltesBarbare({ carte }) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot gagne 1 Population et 1 Matériaux.`,
      cartes: [carte],
      callback: async () => {
        botGagnePopulation(1);
        botGagneMateriaux(1);
        afficherZoneBot?.();
      }
    });

    ajouterEtapeBot({
      message: `${carte.nom} : la Région est jouée dans le tableau du Bot.`,
      cartes: [carte],
      callback: async () => {
        jouerRegionDansTableauBot(carte);
      }
    });

    ajouterEtapeBot({
      message: `${carte.nom} : le Bot exile 1 carte du marché.`,
      cartes: [carte],
      callback: async () => {
        botExilerUneCarteDuMarche();
        afficherBasMarche?.();
        afficherHautMarche?.();
        afficherPileExil?.();
      }
    });

    await jouerEtapesBot();
    return true;
  },

  async traditionCeltesBarbare({ carte }) {
    if (botPeutAcquerirCategorie(CATEGORIES.TRADITION)) {
      ajouterEtapeBot({
        message: `${carte.nom} : le Bot acquiert une carte Tradition.`,
        cartes: [carte],
        callback: async () => {
          botAcquerirCarteSelonPriorite([CATEGORIES.TRADITION]);
          afficherZoneBot?.();
          afficherBasMarche?.();
          afficherHautMarche?.();
        }
      });

      ajouterEtapeBot({
        message: `${carte.nom} est défaussée.`,
        cartes: [carte],
        callback: async () => {
          defausserCarteBot(carte);
        }
      });
    } else {
      ajouterEtapeBot({
        message: `${carte.nom} : aucune Tradition disponible. Le Bot gagne 1 Population, archive cette carte et le joueur récupère 1 Instabilité.`,
        cartes: [carte],
        callback: async () => {
          botGagnePopulation(1);
          archiverCarteBot(carte);
          faireGagnerInstabiliteAuJoueur(1);
          afficherZoneBot?.();
          afficherZoneJoueur?.();
        }
      });
    }

    await jouerEtapesBot();
    return true;
  },

  async epeeCeltesEmpire({ carte }) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot tente d’acquérir en Tradition ou Civilisé.`,
      cartes: [carte],
      callback: async () => {
        botAcquerirCarteSelonPriorite([CATEGORIES.TRADITION, CATEGORIES.CIVILISE]);
        afficherZoneBot?.();
        afficherBasMarche?.();
        afficherHautMarche?.();
      }
    });

    ajouterEtapeBot({
      message: `${carte.nom} : le joueur récupère 1 Instabilité.`,
      cartes: [carte],
      callback: async () => {
        faireGagnerInstabiliteAuJoueur(1);
      }
    });

    ajouterEtapeBot({
      message: `${carte.nom} est défaussée.`,
      cartes: [carte],
      callback: async () => {
        defausserCarteBot(carte);
      }
    });

    await jouerEtapesBot();
    return true;
  },

  async volerMateriauxEtProgres({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot tente de voler 1 Matériaux et 1 Progrès au joueur.`,
    cartes: [carte],
    callback: async () => {
      const bloque = await proposerBlocageAvecCap(
        `${carte.nom} ferait perdre 1 Matériaux et 1 Progrès au joueur.`
      );

      debugLog("CAP TEST | bloque =", bloque);

      if (bloque) {
        journal(`Le joueur rappelle Cap pour éviter l'effet de ${carte.nom}.`);
        return;
      }

      volerAuJoueur("materiaux", 1);
      volerAuJoueur("progres", 1);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      defausserCarteBot(carte);
    }
  });

  await jouerEtapesBot();
  return true;
},

  async depenseMateriauxPourProgresPuisHistoire({ carte }) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot dépense tous ses Matériaux pour gagner autant de Progrès.`,
      cartes: [carte],
      callback: async () => {
        const quantite = etatBot.materiaux;
        etatBot.materiaux = 0;
        etatBot.progres += quantite;
        afficherZoneBot?.();
      }
    });

    ajouterEtapeBot({
      message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
      cartes: [carte],
      callback: async () => {
        archiverCarteBot(carte);
      }
    });

    await jouerEtapesBot();
    return true;
  },

  async barbareCeltesBarbare({ carte }) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot innove en Tradition.`,
      cartes: [carte],
      callback: async () => {
        botInnoverCarteSelonPriorite([CATEGORIES.TRADITION]);
        afficherZoneBot?.();
        afficherBasMarche?.();
        afficherHautMarche?.();
      }
    });

    ajouterEtapeBot({
      message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
      cartes: [carte],
      callback: async () => {
        archiverCarteBot(carte);
      }
    });

    await jouerEtapesBot();
    return true;
  }
};

/* =========================================================
   BOT - ACTIONS SCYTHES BARBARE
   ========================================================= */

ACTIONS_BOT.epeeScythesBarbare = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : les 2 premières cartes du deck C.I.V. vont dans la défausse du Bot.`,
    cartes: [carte],
    callback: async () => {
      botDefausserDepuisDeckCiv(2);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} : le joueur rappelle 1 Région.`,
    cartes: [carte],
    callback: async () => {
      await forcerJoueurARappelerUneRegion(
        `${carte.nom} : choisissez 1 Région à rappeler dans votre main.`
      );
    }
  });

  if (jeu.joueurZones?.carteStatutVisible?.nom === STATUTS.EMPIRE) {
    ajouterEtapeBot({
      message: `${carte.nom} : le joueur est en Empire, le Bot vole 1 Population.`,
      cartes: [carte],
      callback: async () => {
        volerAuJoueur("population", 1);
      }
    });
  }

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      defausserCarteBot(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.conqueteScythesBarbare = async function({ carte }) {
  if (botPeutPayerPopulation(4)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot dépense 4 Population pour innover en Vassal.`,
      cartes: [carte],
      callback: async () => {
        botDepensePopulation(4);
        botInnoverCarteSelonPriorite([CATEGORIES.VASSAL]);
      }
    });
  } else if (botPeutAcquerirCategorie(CATEGORIES.REGION)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot acquiert une Région.`,
      cartes: [carte],
      callback: async () => {
        botAcquerirCarteSelonPriorite([CATEGORIES.REGION]);
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot gagne 1 Population.`,
      cartes: [carte],
      callback: async () => {
        botGagnePopulation(1);
        afficherZoneBot?.();
      }
    });
  }

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      defausserCarteBot(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.progresScythesBarbare = async function({ carte }) {
  if (botPeutPayerMateriaux(4)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot dépense 4 Matériaux pour innover en Civilisé.`,
      cartes: [carte],
      callback: async () => {
        botDepenseMateriaux(4);
        botInnoverCarteSelonPriorite([CATEGORIES.CIVILISE]);
      }
    });
  } else if (botPeutAcquerirCategorie(CATEGORIES.TRADITION)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot acquiert Tradition.`,
      cartes: [carte],
      callback: async () => {
        botAcquerirCarteSelonPriorite([CATEGORIES.TRADITION]);
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot gagne 1 Matériaux.`,
      cartes: [carte],
      callback: async () => {
        botGagneMateriaux(1);
        afficherZoneBot?.();
      }
    });
  }

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      defausserCarteBot(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.regionScythesBarbare = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot gagne 1 Population.`,
    cartes: [carte],
    callback: async () => {
      botGagnePopulation(1);
      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est jouée dans le tableau du Bot.`,
    cartes: [carte],
    callback: async () => {
      jouerRegionDansTableauBot(carte);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} : le Bot exile 1 carte du Marché.`,
    cartes: [carte],
    callback: async () => {
      exilerCarteSelonReglesBot();
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.persistanteScythesBarbare = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : les 2 premières cartes du deck C.I.V. vont dans la défausse du Bot, puis le Bot gagne 2 Matériaux.`,
    cartes: [carte],
    callback: async () => {
      botDefausserDepuisDeckCiv(2);
      botGagneMateriaux(2);
      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      archiverCarteBot(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.barbareScythesBarbare = async function({ carte }) {
  if (botAUneRegionEnJeu()) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot gagne 1 Matériaux par Région en jeu.`,
      cartes: [carte],
      callback: async () => {
        botGagneMateriauxParRegionEnJeu(1);
        afficherZoneBot?.();
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : aucune Région en jeu, le Bot innove en Région.`,
      cartes: [carte],
      callback: async () => {
        botInnoverCarteSelonPriorite([CATEGORIES.REGION]);
      }
    });
  }

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      defausserCarteBot(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.vassalScythesBarbare = async function({ carte }) {
  if (botRetirerUneInstabiliteDeLaDefausse()) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot renvoie 1 Instabilité de sa défausse.`,
      cartes: [carte],
      callback: async () => {
        botRetirerUneInstabiliteDeLaDefausse();
      }
    });

    ajouterEtapeBot({
      message: `${carte.nom} est défaussée.`,
      cartes: [carte],
      callback: async () => {
        defausserCarteBot(carte);
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : aucune Instabilité dans la défausse, le Bot innove en Région.`,
      cartes: [carte],
      callback: async () => {
        botInnoverCarteSelonPriorite([CATEGORIES.REGION]);
      }
    });

    ajouterEtapeBot({
      message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
      cartes: [carte],
      callback: async () => {
        archiverCarteBot(carte);
      }
    });
  }

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.autreScythesBarbare = async function({ carte }) {
  if (botRetirerUneInstabiliteDeLaDefausse()) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot renvoie 1 Instabilité de sa défausse.`,
      cartes: [carte],
      callback: async () => {
        botRetirerUneInstabiliteDeLaDefausse();
      }
    });

    ajouterEtapeBot({
      message: `${carte.nom} est défaussée.`,
      cartes: [carte],
      callback: async () => {
        defausserCarteBot(carte);
      }
    });
  } else if (botPeutAcquerirCategorie(CATEGORIES.TRADITION)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot acquiert Tradition.`,
      cartes: [carte],
      callback: async () => {
        botAcquerirCarteSelonPriorite([CATEGORIES.TRADITION]);
      }
    });

    ajouterEtapeBot({
      message: `${carte.nom} est défaussée.`,
      cartes: [carte],
      callback: async () => {
        defausserCarteBot(carte);
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
      cartes: [carte],
      callback: async () => {
        archiverCarteBot(carte);
      }
    });
  }

  await jouerEtapesBot();
  return true;
};


/* =========================================================
   BOT - ACTIONS SCYTHES EMPIRE
   ========================================================= */

ACTIONS_BOT.renommeeScythesEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot gagne 1 Progrès par Région en jeu.`,
    cartes: [carte],
    callback: async () => {
      const nbRegions = botCartesEnJeuParCategorie(CATEGORIES.REGION).length;
      if (nbRegions > 0) {
        botGagneProgres(nbRegions);
      }
      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      archiverCarteBot(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.gloireScythesEmpire = async function({ carte }) {
  if (botPeutAbandonnerRegions(3)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot abandonne 3 Régions puis pioche 1 Renommée.`,
      cartes: [carte],
      callback: async () => {
        abandonnerRegionsBotSelonRegles(3);
        piocherCarteRenommeePourBot();
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : la première carte du deck Dynastie va dans la défausse du Bot.`,
      cartes: [carte],
      callback: async () => {
        botCarteDynastieVersDefausseCiv();
      }
    });
  }

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      defausserCarteBot(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.barbareScythesEmpire = async function({ carte }) {
  if (botRetirerUneInstabiliteDeLaDefausse()) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot renvoie 1 Instabilité de sa défausse.`,
      cartes: [carte],
      callback: async () => {
        botRetirerUneInstabiliteDeLaDefausse();
      }
    });
  }

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      archiverCarteBot(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.regionScythesEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot gagne 1 Population.`,
    cartes: [carte],
    callback: async () => {
      botGagnePopulation(1);
      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est jouée dans le tableau du Bot.`,
    cartes: [carte],
    callback: async () => {
      jouerRegionDansTableauBot(carte);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} : le Bot exile 1 carte du Marché.`,
    cartes: [carte],
    callback: async () => {
      exilerCarteSelonReglesBot();
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.persistanteScythesEmpire = async function({ carte }) {
  if (botPeutPayerMateriaux(5)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot dépense 5 Matériaux pour innover en Civilisé.`,
      cartes: [carte],
      callback: async () => {
        botDepenseMateriaux(5);
        botInnoverCarteSelonPriorite([CATEGORIES.CIVILISE]);
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : la première carte du deck C.I.V. va dans la défausse du Bot.`,
      cartes: [carte],
      callback: async () => {
        botDefausserDepuisDeckCiv(1);
      }
    });
  }

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      archiverCarteBot(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.epeeScythesEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot gagne 2 Matériaux.`,
    cartes: [carte],
    callback: async () => {
      botGagneMateriaux(2);
      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} : le joueur défausse 1 carte.`,
    cartes: [carte],
    callback: async () => {
      await forcerJoueurADefausserCartes(
        1,
        `${carte.nom} : choisissez 1 carte à défausser.`
      );
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      defausserCarteBot(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.empireScythesEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot gagne 1 Progrès.`,
    cartes: [carte],
    callback: async () => {
      botGagneProgres(1);
      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      archiverCarteBot(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.autreScythesEmpire = async function({ carte }) {
  if (botPeutPayerPopulation(3)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot dépense 3 Population pour innover en Vassal.`,
      cartes: [carte],
      callback: async () => {
        botDepensePopulation(3);
        botInnoverCarteSelonPriorite([CATEGORIES.VASSAL]);
      }
    });

    ajouterEtapeBot({
      message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
      cartes: [carte],
      callback: async () => {
        archiverCarteBot(carte);
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot gagne 1 Population.`,
      cartes: [carte],
      callback: async () => {
        botGagnePopulation(1);
        afficherZoneBot?.();
      }
    });

    if (botPeutAcquerirCategorie(CATEGORIES.REGION)) {
      ajouterEtapeBot({
        message: `${carte.nom} : le Bot acquiert une Région.`,
        cartes: [carte],
        callback: async () => {
          botAcquerirCarteSelonPriorite([CATEGORIES.REGION]);
        }
      });
    }

    ajouterEtapeBot({
      message: `${carte.nom} est défaussée.`,
      cartes: [carte],
      callback: async () => {
        defausserCarteBot(carte);
      }
    });
  }

  await jouerEtapesBot();
  return true;
};

/* =========================================================
   BOT - ACTIONS GRECS BARBARE
   ========================================================= */

ACTIONS_BOT.epeeGrecsBarbare = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : les 2 premières cartes du deck C.I.V. vont dans la défausse du Bot.`,
    cartes: [carte],
    callback: async () => {
      botDefausserDepuisDeckCiv(2);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} : le Bot vole 2 Matériaux au joueur, puis le joueur gagne 1 Population.`,
    cartes: [carte],
    callback: async () => {
      volerAuJoueur("materiaux", 2);
      gagnerRessource?.("population", 1);
      afficherZoneBot?.();
      afficherZoneJoueur?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      defausserCarteBot(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.renommeeGrecsBarbare = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : les 3 premières cartes du deck C.I.V. vont dans la défausse du Bot.`,
    cartes: [carte],
    callback: async () => {
      botDefausserDepuisDeckCiv(3);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      archiverCarteBot(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.gloireGrecsBarbare = async function({ carte }) {
  if (botPeutAbandonnerRegions(3)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot abandonne 3 Région puis pioche 1 Renommée.`,
      cartes: [carte],
      callback: async () => {
        abandonnerRegionsBotSelonRegles(3);
        botPiocherRenommee();
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot innove en Civilisé.`,
      cartes: [carte],
      callback: async () => {
        botInnoverCarteSelonPriorite([CATEGORIES.CIVILISE]);
      }
    });
  }

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      defausserCarteBot(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.progresGrecsBarbare = async function({ carte }) {
  if ((etatBot.materiaux || 0) >= 1) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot dépense 1 Matériaux pour innover en Civilisé.`,
      cartes: [carte],
      callback: async () => {
        botDepenseMateriaux(1);
        botInnoverCarteSelonPriorite([CATEGORIES.CIVILISE]);
      }
    });
  } else if (botPeutAcquerirCategorie(CATEGORIES.TRADITION)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot acquiert une Tradition.`,
      cartes: [carte],
      callback: async () => {
        botAcquerirCarteSelonPriorite([CATEGORIES.TRADITION]);
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : aucune action possible.`,
      cartes: [carte]
    });
  }

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      defausserCarteBot(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.barbareGrecsBarbare = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : la première carte du deck C.I.V. va dans la défausse du Bot.`,
    cartes: [carte],
    callback: async () => {
      botDefausserDepuisDeckCiv(1);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      archiverCarteBot(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.regionGrecsBarbare = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot gagne 1 Matériaux.`,
    cartes: [carte],
    callback: async () => {
      botGagneMateriaux(1);
      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} : la Région est jouée dans le tableau du Bot.`,
    cartes: [carte],
    callback: async () => {
      jouerRegionDansTableauBot(carte);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} : le Bot exile 1 carte du marché.`,
    cartes: [carte],
    callback: async () => {
      botExilerUneCarteDuMarche();
      afficherBasMarche?.();
      afficherHautMarche?.();
      afficherPileExil?.();
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.persistanteGrecsBarbare = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot gagne 1 Matériaux et 1 Population.`,
    cartes: [carte],
    callback: async () => {
      botGagneMateriaux(1);
      botGagnePopulation(1);
      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      archiverCarteBot(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.autreGrecsBarbare = async function({ carte }) {
  if ((etatBot.population || 0) >= 2) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot dépense 2 Population pour innover en Région.`,
      cartes: [carte],
      callback: async () => {
        botDepensePopulation(2);
        botInnoverCarteSelonPriorite([CATEGORIES.REGION]);
      }
    });

    ajouterEtapeBot({
      message: `${carte.nom} est défaussée.`,
      cartes: [carte],
      callback: async () => {
        defausserCarteBot(carte);
      }
    });
  } else if ((etatBot.materiaux || 0) >= 2) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot dépense 2 Matériaux pour innover en Tradition.`,
      cartes: [carte],
      callback: async () => {
        botDepenseMateriaux(2);
        botInnoverCarteSelonPriorite([CATEGORIES.TRADITION]);
      }
    });

    ajouterEtapeBot({
      message: `${carte.nom} est défaussée.`,
      cartes: [carte],
      callback: async () => {
        defausserCarteBot(carte);
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : les 2 premières cartes du deck C.I.V. vont dans la défausse du Bot.`,
      cartes: [carte],
      callback: async () => {
        botDefausserDepuisDeckCiv(2);
      }
    });

    ajouterEtapeBot({
      message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
      cartes: [carte],
      callback: async () => {
        archiverCarteBot(carte);
      }
    });
  }

  await jouerEtapesBot();
  return true;
};


/* =========================================================
   BOT - ACTIONS GRECS EMPIRE
   ========================================================= */

ACTIONS_BOT.epeeGrecsEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot acquiert Tradition/Civilisé/Région/Vassal.`,
    cartes: [carte],
    callback: async () => {
      botAcquerirCarteSelonPriorite([
        CATEGORIES.TRADITION,
        CATEGORIES.CIVILISE,
        CATEGORIES.REGION,
        CATEGORIES.VASSAL
      ]);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} : le joueur rappelle 1 carte Persistante.`,
    cartes: [carte],
    callback: async () => {
      await forcerJoueurARappelerUneCarteCategorie(
        "Persistante",
        `${carte.nom} : choisissez une carte Persistante à rappeler dans votre main.`
      );
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      defausserCarteBot(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.renommeeGrecsEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : les 2 premières cartes du deck C.I.V. vont dans la défausse du Bot, puis le Bot gagne 2 Progrès.`,
    cartes: [carte],
    callback: async () => {
      botDefausserDepuisDeckCiv(2);
      botGagneProgres(2);
      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      archiverCarteBot(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.gloireGrecsEmpire = async function({ carte }) {
  if (botPeutAbandonnerRegions(3)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot abandonne 3 Région puis pioche 1 Renommée.`,
      cartes: [carte],
      callback: async () => {
        abandonnerRegionsBotSelonRegles(3);
        botPiocherRenommee();
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot gagne 2 Progrès.`,
      cartes: [carte],
      callback: async () => {
        botGagneProgres(2);
        afficherZoneBot?.();
      }
    });
  }

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      defausserCarteBot(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.barbareGrecsEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : la première carte du deck C.I.V. va dans la défausse du Bot.`,
    cartes: [carte],
    callback: async () => {
      botDefausserDepuisDeckCiv(1);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      archiverCarteBot(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.vassalGrecsEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot gagne 2 Progrès.`,
    cartes: [carte],
    callback: async () => {
      botGagneProgres(2);
      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      archiverCarteBot(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.regionGrecsEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : la première carte du deck C.I.V. va dans la défausse du Bot.`,
    cartes: [carte],
    callback: async () => {
      botDefausserDepuisDeckCiv(1);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} : la Région est jouée dans le tableau du Bot.`,
    cartes: [carte],
    callback: async () => {
      jouerRegionDansTableauBot(carte);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} : le Bot exile 1 carte du marché.`,
    cartes: [carte],
    callback: async () => {
      botExilerUneCarteDuMarche();
      afficherBasMarche?.();
      afficherHautMarche?.();
      afficherPileExil?.();
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.persistanteGrecsEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      archiverCarteBot(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.empireGrecsEmpire = async function({ carte }) {
  if (
    botPeutAcquerirCategorie(CATEGORIES.CIVILISE) ||
    botPeutAcquerirCategorie(CATEGORIES.TRADITION)
  ) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot acquiert Civilisé ou Tradition.`,
      cartes: [carte],
      callback: async () => {
        botAcquerirCarteSelonPriorite([CATEGORIES.CIVILISE, CATEGORIES.TRADITION]);
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : aucune carte Civilisé ou Tradition disponible.`,
      cartes: [carte]
    });
  }

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      archiverCarteBot(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.autreGrecsEmpire = async function({ carte }) {
  if ((etatBot.population || 0) >= 3 && botPeutAcquerirCategorie(CATEGORIES.VASSAL)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot dépense 3 Population pour acquérir un Vassal.`,
      cartes: [carte],
      callback: async () => {
        botDepensePopulation(3);
        botAcquerirCarteSelonPriorite([CATEGORIES.VASSAL]);
      }
    });

    ajouterEtapeBot({
      message: `${carte.nom} est défaussée.`,
      cartes: [carte],
      callback: async () => {
        defausserCarteBot(carte);
      }
    });
  } else if ((etatBot.materiaux || 0) >= 2 && botPeutAcquerirCategorie(CATEGORIES.CIVILISE)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot dépense 2 Matériaux pour acquérir un Civilisé.`,
      cartes: [carte],
      callback: async () => {
        botDepenseMateriaux(2);
        botAcquerirCarteSelonPriorite([CATEGORIES.CIVILISE]);
      }
    });

    ajouterEtapeBot({
      message: `${carte.nom} est défaussée.`,
      cartes: [carte],
      callback: async () => {
        defausserCarteBot(carte);
      }
    });
  } else if ((etatBot.defausse || []).some(c => categoriePrincipaleCarte(c) === CATEGORIES.INSTABILITE)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot renvoie une Instabilité de sa défausse.`,
      cartes: [carte],
      callback: async () => {
        botRenvoyerInstabiliteDepuisDefausse();
      }
    });

    ajouterEtapeBot({
      message: `${carte.nom} est défaussée.`,
      cartes: [carte],
      callback: async () => {
        defausserCarteBot(carte);
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot gagne 1 Progrès.`,
      cartes: [carte],
      callback: async () => {
        botGagneProgres(1);
        afficherZoneBot?.();
      }
    });

    ajouterEtapeBot({
      message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
      cartes: [carte],
      callback: async () => {
        archiverCarteBot(carte);
      }
    });
  }

  await jouerEtapesBot();
  return true;
};

/* =========================================================
   BOT - ACTIONS CARTHAGINOIS BARBARE
   ========================================================= */

ACTIONS_BOT.renommeeCarthaginoisBarbare = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot gagne 1 Population et 1 Matériaux.`,
    cartes: [carte],
    callback: async () => {
      botGagnePopulation(1);
      botGagneMateriaux(1);
      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      botArchiverCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.gloireCarthaginoisBarbare = async function({ carte }) {
  if (botPeutAbandonnerRegions(3)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot abandonne 3 Régions puis pioche 1 Renommée.`,
      cartes: [carte],
      callback: async () => {
        abandonnerRegionsBotSelonRegles(3);
        piocherCarteRenommeePourBot();
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot innove en Région.`,
      cartes: [carte],
      callback: async () => {
        botInnoverCarteSelonPriorite([CATEGORIES.REGION]);
      }
    });
  }

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      botDefausserCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.barbareCarthaginoisBarbare = async function({ carte }) {
  if (botPeutPayerPopulation?.(3)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot dépense 3 Population pour innover en Vassal.`,
      cartes: [carte],
      callback: async () => {
        botDepensePopulation(3);
        botInnoverCarteSelonPriorite([CATEGORIES.VASSAL]);
      }
    });
  } else if (botPeutPayerMateriaux?.(2) &&
             botPeutAcquerirParmiCategories([CATEGORIES.CIVILISE, CATEGORIES.TRADITION])) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot dépense 2 Matériaux pour acquérir Civilisé ou Tradition.`,
      cartes: [carte],
      callback: async () => {
        botDepenseMateriaux(2);
        botAcquerirCarteSelonPriorite([CATEGORIES.CIVILISE, CATEGORIES.TRADITION]);
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot gagne 1 Matériaux et 1 Population.`,
      cartes: [carte],
      callback: async () => {
        botGagneMateriaux(1);
        botGagnePopulation(1);
        afficherZoneBot?.();
      }
    });

    ajouterEtapeBot({
      message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
      cartes: [carte],
      callback: async () => {
        botArchiverCarteResolue(carte);
      }
    });

    await jouerEtapesBot();
    return true;
  }

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      botDefausserCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.regionCarthaginoisBarbare = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : la première carte du deck C.I.V. va dans la défausse du Bot.`,
    cartes: [carte],
    callback: async () => {
      botDefausserDepuisDeckCiv(1);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est jouée dans le tableau du Bot.`,
    cartes: [carte],
    callback: async () => {
      jouerRegionDansTableauBot(carte);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} : le Bot exile 1 carte du marché.`,
    cartes: [carte],
    callback: async () => {
      botExilerUneCarteDuMarche();
      afficherBasMarche?.();
      afficherHautMarche?.();
      afficherPileExil?.();
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.persistanteCarthaginoisBarbare = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot gagne 1 Population et 2 Matériaux.`,
    cartes: [carte],
    callback: async () => {
      botGagnePopulation(1);
      botGagneMateriaux(2);
      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      botArchiverCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.prosperiteCarthaginoisBarbare = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : la première carte du deck C.I.V. va dans la défausse du Bot.`,
    cartes: [carte],
    callback: async () => {
      botDefausserDepuisDeckCiv(1);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} : le Bot gagne 1 Population et 1 Matériaux par Région en jeu.`,
    cartes: [carte],
    callback: async () => {
      botGagneMateriauxParRegionEnJeu(1);
      botGagnePopulationParRegionEnJeu(1);
      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} : le joueur peut piocher 1 carte.`,
    cartes: [carte],
    callback: async () => {
      const ok = await confirmerActionOptionnelle?.("Voulez-vous piocher 1 carte ?");
      if (ok) {
        await piocherCartesJoueur?.(1);
        afficherZoneJoueur?.();
      }
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      botDefausserCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.vassalCarthaginoisBarbare = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : les 3 premières cartes du deck C.I.V. vont dans la défausse du Bot.`,
    cartes: [carte],
    callback: async () => {
      botDefausserDepuisDeckCiv(3);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      botArchiverCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.autreCarthaginoisBarbare = async function({ carte }) {
  if (botPeutPayerMateriaux?.(1)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot dépense tous ses Matériaux pour gagner autant de Progrès.`,
      cartes: [carte],
      callback: async () => {
        const total = etatBot.materiaux || 0;
        if (total > 0) {
          botDepenseMateriaux(total);
          botGagneProgres(total);
        }
        afficherZoneBot?.();
      }
    });
  } else if (botPeutAcquerirCategorie(CATEGORIES.REGION)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot acquiert une Région.`,
      cartes: [carte],
      callback: async () => {
        botAcquerirCarteSelonPriorite([CATEGORIES.REGION]);
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : les 2 premières cartes du deck C.I.V. vont dans la défausse du Bot.`,
      cartes: [carte],
      callback: async () => {
        botDefausserDepuisDeckCiv(2);
      }
    });
  }

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      botDefausserCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.barbareCarthaginoisEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot gagne 1 Matériaux et place la première carte du deck C.I.V. dans sa défausse.`,
    cartes: [carte],
    callback: async () => {
      botGagneMateriaux(1);
      botDefausserDepuisDeckCiv(1);
      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      botArchiverCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.renommeeCarthaginoisEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      botArchiverCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.epeeCarthaginoisEmpire = async function({ carte }) {
  const regionsJoueur = obtenirRegionsDansTableauJoueurPourBot();

  ajouterEtapeBot({
    message: `${carte.nom} : le Bot innove en Vassal.`,
    cartes: [carte],
    callback: async () => {
      botInnoverCarteSelonPriorite([CATEGORIES.VASSAL]);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      botArchiverCarteResolue(carte);
    }
  });

  if (regionsJoueur.length > 0) {
    ajouterEtapeBot({
      message: `${carte.nom} : le joueur doit abandonner 1 Région.`,
      cartes: [carte],
      callback: async () => {
        await forcerJoueurAAbandonnerUneRegion(
          `${carte.nom} : choisissez 1 Région à abandonner.`
        );
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : le joueur n’a aucune Région à abandonner.`,
      cartes: [carte]
    });
  }

  ajouterEtapeBot({
    message: `${carte.nom} : le joueur peut piocher 1 carte.`,
    cartes: [carte],
    callback: async () => {
      const ok = await confirmerActionOptionnelle?.("Voulez-vous piocher 1 carte ?");
      if (ok) {
        await piocherCartesJoueur?.(1);
        afficherZoneJoueur?.();
      }
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.gloireCarthaginoisEmpire = async function({ carte }) {
  if (botPeutAbandonnerRegions(3)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot abandonne 3 Régions puis pioche 1 Renommée.`,
      cartes: [carte],
      callback: async () => {
        abandonnerRegionsBotSelonRegles(3);
        piocherCarteRenommeePourBot();
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot innove en Région.`,
      cartes: [carte],
      callback: async () => {
        botInnoverCarteSelonPriorite([CATEGORIES.REGION]);
      }
    });

    const mainJoueur = jeu.joueurZones?.mainJoueur || [];
    if (mainJoueur.length > 0) {
      ajouterEtapeBot({
        message: `${carte.nom} : le joueur doit défausser 2 cartes.`,
        cartes: [carte],
        callback: async () => {
          await forcerJoueurADefausserCartes(
            2,
            `${carte.nom} : choisissez 2 cartes à défausser.`
          );
        }
      });
    } else {
      ajouterEtapeBot({
        message: `${carte.nom} : le joueur n’a aucune carte à défausser.`,
        cartes: [carte]
      });
    }
  }

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      botDefausserCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.empireCarthaginoisEmpire = async function({ carte }) {
  if (botPeutAcquerirParmiCategories([CATEGORIES.CIVILISE, CATEGORIES.TRADITION])) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot acquiert Civilisé ou Tradition.`,
      cartes: [carte],
      callback: async () => {
        botAcquerirCarteSelonPriorite([CATEGORIES.CIVILISE, CATEGORIES.TRADITION]);
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot gagne 1 Progrès et le joueur reçoit 1 Instabilité.`,
      cartes: [carte],
      callback: async () => {
        botGagneProgres(1);
        faireGagnerInstabiliteAuJoueur(1);
        afficherZoneBot?.();
      }
    });
  }

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      botDefausserCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.regionCarthaginoisEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot gagne 1 Matériaux.`,
    cartes: [carte],
    callback: async () => {
      botGagneMateriaux(1);
      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est jouée dans le tableau du Bot.`,
    cartes: [carte],
    callback: async () => {
      jouerRegionDansTableauBot(carte);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} : le Bot exile 1 carte du marché.`,
    cartes: [carte],
    callback: async () => {
      exilerCarteSelonReglesBot();
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.persistanteCarthaginoisEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot gagne 2 Matériaux.`,
    cartes: [carte],
    callback: async () => {
      botGagneMateriaux(2);
      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      botArchiverCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.autreCarthaginoisEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot. Si possible, il dépense 2 Matériaux, ou 2 Population, pour gagner 1 Progrès. Le joueur reçoit 1 Instabilité.`,
    cartes: [carte],
    callback: async () => {
      botArchiverCarteResolue(carte);

      if (botPeutPayerMateriaux?.(2)) {
        botDepenseMateriaux(2);
        botGagneProgres(1);
      } else if (botPeutPayerPopulation?.(2)) {
        botDepensePopulation(2);
        botGagneProgres(1);
      }

      faireGagnerInstabiliteAuJoueur(1);
      afficherZoneBot?.();
    }
  });

  await jouerEtapesBot();
  return true;
};

/* =========================================================
   BOT - ACTIONS VIKINGS BARBARE
   ========================================================= */

ACTIONS_BOT.pinEpeeVikingsBarbare = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : si possible, le Bot vole 2 Matériaux au joueur.`,
    cartes: [carte],
    callback: async () => {
      botVolerMateriauxAuJoueur(2);
      afficherZoneBot?.();
      afficherZoneJoueur?.();
    }
  });

  if (botPeutPayerPopulation(1)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot dépense 1 Population pour acquérir Vassal ou Région.`,
      cartes: [carte],
      callback: async () => {
        botDepensePopulation(1);
        botAcquerirCarteSelonPriorite([CATEGORIES.VASSAL, CATEGORIES.REGION]);
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot ne peut pas payer 1 Population pour acquérir Vassal ou Région.`,
      cartes: [carte]
    });
  }

  ajouterEtapeBot({
    message: `${carte.nom} : le joueur doit défausser 1 carte.`,
    cartes: [carte],
    callback: async () => {
      await forcerJoueurADefausserCartes?.(
        1,
        `${carte.nom} : choisissez 1 carte à défausser.`
      );
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      botDefausserCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.renommeeVikingsBarbare = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : si possible, le Bot renvoie 1 Instabilité depuis sa défausse.`,
    cartes: [carte],
    callback: async () => {
      botRetirerUneInstabiliteDeLaDefausse();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} : le Bot acquiert Tradition/Civilisé/Région/Vassal.`,
    cartes: [carte],
    callback: async () => {
      botAcquerirCarteSelonPriorite([
        CATEGORIES.TRADITION,
        CATEGORIES.CIVILISE,
        CATEGORIES.REGION,
        CATEGORIES.VASSAL
      ]);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      botArchiverCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.gloireVikingsBarbare = async function({ carte }) {
  if (botPeutAbandonnerRegions(3)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot abandonne 3 Région puis pioche 1 Renommée.`,
      cartes: [carte],
      callback: async () => {
        abandonnerRegionsBotSelonRegles(3);
        botPiocherRenommee();
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : la première carte du deck C.I.V. va dans la défausse du Bot, puis le Bot vole 2 Matériaux.`,
      cartes: [carte],
      callback: async () => {
        botDefausserDepuisDeckCiv(1);
        botVolerMateriauxAuJoueur(2);
        afficherZoneBot?.();
        afficherZoneJoueur?.();
      }
    });
  }

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      botDefausserCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.regionVikingsBarbare = async function({ carte }) {
  if (botPeutPayerMateriaux(3)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot dépense 3 Matériaux pour acquérir Tradition.`,
      cartes: [carte],
      callback: async () => {
        botDepenseMateriaux(3);
        botAcquerirCarteSelonPriorite([CATEGORIES.TRADITION]);
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot ne peut pas payer 3 Matériaux pour acquérir Tradition.`,
      cartes: [carte]
    });
  }

  ajouterEtapeBot({
    message: `${carte.nom} est jouée dans le tableau du Bot.`,
    cartes: [carte],
    callback: async () => {
      jouerRegionDansTableauBot(carte);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} : le Bot exile 1 carte du marché.`,
    cartes: [carte],
    callback: async () => {
      botExilerUneCarteDuMarche();
      afficherBasMarche?.();
      afficherHautMarche?.();
      afficherPileExil?.();
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.traditionVikingsBarbare = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : la première carte de la pioche Dynastie va dans la défausse du Bot.`,
    cartes: [carte],
    callback: async () => {
      const carteDynastie = botRetirerPremiereCartePiocheDynastie();
      if (carteDynastie) {
        etatBot.defausse.push(carteDynastie);
        afficherZoneBot?.();
      }
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} : si possible, le Bot met en jeu une Région de sa défausse.`,
    cartes: [carte],
    callback: async () => {
      const region = botRecupererRegionDefausseVersDessusDeck();
      if (region) {
        const vraieCarte = etatBot.deckCiv.shift();
        if (vraieCarte) {
          jouerRegionDansTableauBot(vraieCarte);
        }
      }
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      botArchiverCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.barbareVikingsBarbare = async function({ carte }) {
  if (botPeutPayerMateriaux(3)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot dépense 3 Matériaux pour acquérir Tradition.`,
      cartes: [carte],
      callback: async () => {
        botDepenseMateriaux(3);
        botAcquerirCarteSelonPriorite([CATEGORIES.TRADITION]);
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : les 2 premières cartes du deck C.I.V. vont dans la défausse du Bot, puis le Bot gagne 1 Matériaux et 1 Population.`,
      cartes: [carte],
      callback: async () => {
        botDefausserDepuisDeckCiv(2);
        botGagneMateriaux(1);
        botGagnePopulation(1);
        afficherZoneBot?.();
      }
    });
  }

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      botDefausserCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.persistanteVikingsBarbare = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot gagne 1 Population.`,
    cartes: [carte],
    callback: async () => {
      botGagnePopulation(1);
      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} : la première carte de la pioche Dynastie va dans la défausse du Bot.`,
    cartes: [carte],
    callback: async () => {
      const carteDynastie = botRetirerPremiereCartePiocheDynastie();
      if (carteDynastie) {
        etatBot.defausse.push(carteDynastie);
        afficherZoneBot?.();
      }
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      botArchiverCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.autreVikingsBarbare = async function({ carte }) {
  let archiverCarteResolue = false;

  if (botRetirerUneInstabiliteDeLaDefausse()) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot renvoie 1 Instabilité depuis sa défausse.`,
      cartes: [carte]
    });
  } else if (botPeutAcquerirRegionExilee()) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot acquiert 1 Région exilée.`,
      cartes: [carte],
      callback: async () => {
        botAcquerirRegionExilee();
      }
    });
  } else if (botPeutAbandonnerRegions(1)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot abandonne 1 Région puis place la première carte de la pioche Dynastie dans sa défausse.`,
      cartes: [carte],
      callback: async () => {
        abandonnerRegionsBotSelonRegles(1);
        const carteDynastie = botRetirerPremiereCartePiocheDynastie();
        if (carteDynastie) {
          etatBot.defausse.push(carteDynastie);
        }
        afficherZoneBot?.();
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot pioche 1 Renommée.`,
      cartes: [carte],
      callback: async () => {
        botPiocherRenommee();
      }
    });

    archiverCarteResolue = true;
  }

  if (archiverCarteResolue) {
    ajouterEtapeBot({
      message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
      cartes: [carte],
      callback: async () => {
        botArchiverCarteResolue(carte);
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} est défaussée.`,
      cartes: [carte],
      callback: async () => {
        botDefausserCarteResolue(carte);
      }
    });
  }

  await jouerEtapesBot();
  return true;
};

   /* =========================================================
   BOT - ACTIONS ROMAINS BARBARE
   ========================================================= */

ACTIONS_BOT.pinEpeeRomainsBarbare = async function({ carte }) {
  const regionsJoueur = obtenirRegionsDansTableauJoueurPourBot();

  if (regionsJoueur.length > 0) {
    ajouterEtapeBot({
      message: `${carte.nom} : le joueur doit rappeler 1 Région.`,
      cartes: [carte],
      callback: async () => {
        await forcerJoueurARappelerUneRegion(
          `${carte.nom} : choisissez une Région à rappeler dans votre main.`
        );
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : le joueur n’a aucune Région à rappeler.`,
      cartes: [carte]
    });
  }

  ajouterEtapeBot({
    message: `${carte.nom} : le joueur reçoit 1 Instabilité.`,
    cartes: [carte],
    callback: async () => {
      faireGagnerInstabiliteAuJoueur(1);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      botDefausserCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.renommeeRomainsBarbare = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot dépense toute sa Population et gagne autant de Progrès.`,
    cartes: [carte],
    callback: async () => {
      const total = etatBot.population || 0;
      if (total > 0) {
        botDepensePopulation(total);
        botGagneProgres(total);
      }
      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      botArchiverCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.gloireRomainsBarbare = async function({ carte }) {
  if (botPeutAbandonnerRegions(3)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot abandonne 3 Régions puis pioche 1 Renommée.`,
      cartes: [carte],
      callback: async () => {
        abandonnerRegionsBotSelonRegles(3);
        piocherCarteRenommeePourBot();
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot gagne 1 Progrès.`,
      cartes: [carte],
      callback: async () => {
        botGagneProgres(1);
        afficherZoneBot?.();
      }
    });
  }

  const regionsJoueur = obtenirRegionsDansTableauJoueurPourBot();

  if (regionsJoueur.length > 0) {
    ajouterEtapeBot({
      message: `${carte.nom} : le joueur doit rappeler 1 Région.`,
      cartes: [carte],
      callback: async () => {
        await forcerJoueurARappelerUneRegion(
          `${carte.nom} : choisissez une Région à rappeler dans votre main.`
        );
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : le joueur n’a aucune Région à rappeler.`,
      cartes: [carte]
    });
  }

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      botDefausserCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.regionRomainsBarbare = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : la première carte du deck C.I.V. va dans la défausse du Bot.`,
    cartes: [carte],
    callback: async () => {
      botDefausserDepuisDeckCiv(1);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est jouée dans le tableau`,
    cartes: [carte],
    callback: async () => {
      jouerRegionDansTableauBot(carte);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} : le Bot exile 1 carte du marché.`,
    cartes: [carte],
    callback: async () => {
      botExilerUneCarteDuMarche();
        afficherBasMarche?.();
        afficherHautMarche?.();
        afficherPileExil?.();
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.persistanteRomainsBarbare = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot gagne 1 Population.`,
    cartes: [carte],
    callback: async () => {
      botGagnePopulation(1);
      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      botArchiverCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.progresRomainsBarbare = async function({ carte }) {
  if (botPeutPayerMateriaux?.(5)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot dépense 5 Matériaux pour innover en Civilisé.`,
      cartes: [carte],
      callback: async () => {
        botDepenseMateriaux(5);
        botInnoverCarteSelonPriorite([CATEGORIES.CIVILISE]);
      }
    });
  } else if (botPeutAcquerirCategorie(CATEGORIES.TRADITION)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot acquiert une Tradition.`,
      cartes: [carte],
      callback: async () => {
        botAcquerirCarteSelonPriorite([CATEGORIES.TRADITION]);
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot gagne 1 Population.`,
      cartes: [carte],
      callback: async () => {
        botGagnePopulation(1);
        afficherZoneBot?.();
      }
    });
  }

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      botDefausserCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.prosperiteRomainsBarbare = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : la première carte du deck C.I.V. va dans la défausse du Bot.`,
    cartes: [carte],
    callback: async () => {
      botDefausserDepuisDeckCiv(1);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} : le Bot gagne 1 Matériaux et 1 Population par Région en jeu.`,
    cartes: [carte],
    callback: async () => {
      botGagneMateriauxParRegionEnJeu(1);
      botGagnePopulationParRegionEnJeu(1);
      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} : le joueur peut piocher 1 carte.`,
    cartes: [carte],
    callback: async () => {
      const ok = await confirmerActionOptionnelle?.(
        "Voulez-vous piocher 1 carte ?"
      );
      if (ok) {
        await piocherCartesJoueur?.(1);
        afficherZoneJoueur?.();
      }
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      botDefausserCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.barbareRomainsBarbare = async function({ carte }) {
  if (botPeutPayerPopulation?.(3)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot dépense 3 Population pour innover en Vassal.`,
      cartes: [carte],
      callback: async () => {
        botDepensePopulation(3);
        botInnoverCarteSelonPriorite([CATEGORIES.VASSAL]);
      }
    });
  } else if (botPeutAcquerirCategorie(CATEGORIES.REGION)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot acquiert une Région.`,
      cartes: [carte],
      callback: async () => {
        botAcquerirCarteSelonPriorite([CATEGORIES.REGION]);
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot gagne 1 Population.`,
      cartes: [carte],
      callback: async () => {
        botGagnePopulation(1);
        afficherZoneBot?.();
      }
    });
  }

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      botDefausserCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.vassalRomainsBarbare = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : les 2 premières cartes du deck C.I.V. vont dans la défausse du Bot.`,
    cartes: [carte],
    callback: async () => {
      botDefausserDepuisDeckCiv(2);
      botGagneProgres(1);
      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      botArchiverCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.autreRomainsBarbare = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot gagne 2 Matériaux.`,
    cartes: [carte],
    callback: async () => {
      botGagneMateriaux(2);
      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      botDefausserCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

/* =========================================================
   BOT - ACTIONS ROMAINS EMPIRE
   ========================================================= */

ACTIONS_BOT.barbareRomainsEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      botArchiverCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.renommeeRomainsEmpire = ACTIONS_BOT.renommeeRomainsBarbare;

ACTIONS_BOT.pinEpeeRomainsEmpire = async function({ carte }) {
  const mainJoueur = jeu.joueurZones?.mainJoueur || [];
  const regionsJoueur = obtenirRegionsDansTableauJoueurPourBot();

  if (mainJoueur.length > 0) {
    ajouterEtapeBot({
      message: `${carte.nom} : le joueur doit défausser 1 carte.`,
      cartes: [carte],
      callback: async () => {
        await forcerJoueurADefausserCartes(
          1,
          `${carte.nom} : choisissez 1 carte à défausser.`
        );
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : le joueur n’a aucune carte à défausser.`,
      cartes: [carte]
    });
  }

  if (regionsJoueur.length > 0) {
    ajouterEtapeBot({
      message: `${carte.nom} : le joueur doit abandonner 1 Région.`,
      cartes: [carte],
      callback: async () => {
        await forcerJoueurAAbandonnerUneRegion(
          `${carte.nom} : choisissez 1 Région à abandonner.`
        );
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : le joueur n’a aucune Région à abandonner.`,
      cartes: [carte]
    });
  }

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      botDefausserCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.gloireRomainsEmpire = async function({ carte }) {
  if (botPeutAbandonnerRegions(3)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot abandonne 3 Régions puis pioche 1 Renommée.`,
      cartes: [carte],
      callback: async () => {
        abandonnerRegionsBotSelonRegles(3);
        piocherCarteRenommeePourBot();
      }
    });
  } else {
    const mainJoueur = jeu.joueurZones?.mainJoueur || [];
    const nbADefausser = Math.min(2, mainJoueur.length);

    if (nbADefausser > 0) {
      ajouterEtapeBot({
        message:
          nbADefausser === 1
            ? `${carte.nom} : le joueur doit défausser 1 carte.`
            : `${carte.nom} : le joueur doit défausser 2 cartes.`,
        cartes: [carte],
        callback: async () => {
          await forcerJoueurADefausserCartes(
            nbADefausser,
            nbADefausser === 1
              ? `${carte.nom} : choisissez 1 carte à défausser.`
              : `${carte.nom} : choisissez 2 cartes à défausser.`
          );
        }
      });
    } else {
      ajouterEtapeBot({
        message: `${carte.nom} : le joueur n’a aucune carte à défausser.`,
        cartes: [carte]
      });
    }
  }

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      botDefausserCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.prosperiteRomainsEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot gagne 1 Matériaux et 1 Population par Région en jeu.`,
    cartes: [carte],
    callback: async () => {
      botGagneMateriauxParRegionEnJeu(1);
      botGagnePopulationParRegionEnJeu(1);
      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} : le joueur peut piocher 1 carte.`,
    cartes: [carte],
    callback: async () => {
      const ok = await confirmerActionOptionnelle?.(
        "Voulez-vous piocher 1 carte ?"
      );
      if (ok) {
        await piocherCartesJoueur?.(1);
        afficherZoneJoueur?.();
      }
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      botDefausserCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.regionRomainsEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot gagne 1 Population.`,
    cartes: [carte],
    callback: async () => {
      botGagnePopulation(1);
      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est jouée dans le tableau.`,
    cartes: [carte],
    callback: async () => {
      jouerRegionDansTableauBot(carte);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} : le Bot exile 1 carte du marché.`,
    cartes: [carte],
    callback: async () => {
      botExilerUneCarteDuMarche();
        afficherBasMarche?.();
        afficherHautMarche?.();
        afficherPileExil?.();
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.persistanteRomainsEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : la première carte du deck C.I.V. va dans la défausse du Bot.`,
    cartes: [carte],
    callback: async () => {
      botDefausserDepuisDeckCiv(1);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      botArchiverCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.vassalRomainsEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : les 2 premières cartes du deck C.I.V. vont dans la défausse du Bot.`,
    cartes: [carte],
    callback: async () => {
      botDefausserDepuisDeckCiv(2);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      botArchiverCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.empireRomainsEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot innove en Civilisé.`,
    cartes: [carte],
    callback: async () => {
      botInnoverCarteSelonPriorite([CATEGORIES.CIVILISE]);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      botArchiverCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.autreRomainsEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : si possible, le Bot dépense 3 Matériaux pour gagner 1 Progrès. Puis il gagne 1 Population.`,
    cartes: [carte],
    callback: async () => {
      if (botPeutPayerMateriaux?.(3)) {
        botDepenseMateriaux(3);
        botGagneProgres(1);
      }
      botGagnePopulation(1);
      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      botArchiverCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

///--- ACTIONS MACÉDONIENS ---///

ACTIONS_BOT.renommeeMacedoniensBarbare = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      botArchiverCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.gloireMacedoniensBarbare = async function({ carte }) {
  if (botPeutAbandonnerRegions(3)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot abandonne 3 Région et pioche 1 Renommée.`,
      cartes: [carte],
      callback: async () => {
        botAbandonnerCategorie(CATEGORIES.REGION, 3);
        botPiocherRenommee();
        afficherZoneBot?.();
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot innove en Région.`,
      cartes: [carte],
      callback: async () => {
        botInnoverCarteSelonPriorite([CATEGORIES.REGION]);
      }
    });
  }

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      botDefausserCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.barbareMacedoniensBarbare = async function({ carte }) {
  if ((etatBot.population || 0) >= 3) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot dépense 3 Population pour innover en Vassal.`,
      cartes: [carte],
      callback: async () => {
        botDepensePopulation(3);
        botInnoverCarteSelonPriorite([CATEGORIES.VASSAL]);
      }
    });

    ajouterEtapeBot({
      message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
      cartes: [carte],
      callback: async () => {
        botArchiverCarteResolue(carte);
      }
    });
  } else if ((etatBot.materiaux || 0) >= 3) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot dépense 3 Matériaux pour acquérir Civilisé ou Tradition.`,
      cartes: [carte],
      callback: async () => {
        botDepenseMateriaux(3);
        botAcquerirCarteSelonPriorite([CATEGORIES.CIVILISE, CATEGORIES.TRADITION]);
      }
    });

    ajouterEtapeBot({
      message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
      cartes: [carte],
      callback: async () => {
        botArchiverCarteResolue(carte);
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot innove en Région.`,
      cartes: [carte],
      callback: async () => {
        botInnoverCarteSelonPriorite([CATEGORIES.REGION]);
      }
    });

    ajouterEtapeBot({
      message: `${carte.nom} est défaussée.`,
      cartes: [carte],
      callback: async () => {
        botDefausserCarteResolue(carte);
      }
    });
  }

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.regionMacedoniensBarbare = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot gagne 1 Matériaux.`,
    cartes: [carte],
    callback: async () => {
      botGagneMateriaux(1);
      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} : le Bot joue cette Région et exile 1 carte du Marché.`,
    cartes: [carte],
    callback: async () => {
      jouerRegionDansTableauBot(carte);
      exilerCarteSelonReglesBot();
      afficherZoneBot?.();
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.persistanteMacedoniensBarbare = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot gagne 1 Population.`,
    cartes: [carte],
    callback: async () => {
      botGagnePopulation(1);
      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      botDefausserCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.prosperiteMacedoniensBarbare = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : la première carte du deck C.I.V. va dans la défausse du Bot.`,
    cartes: [carte],
    callback: async () => {
      botDefausserDepuisDeckCiv(1);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} : le Bot gagne 1 Matériaux et 1 Population par Région en jeu. Le joueur peut piocher 1 carte.`,
    cartes: [carte],
    callback: async () => {
      const nbRegions = botCartesEnJeuParCategorie(CATEGORIES.REGION).length;

      if (nbRegions > 0) {
        botGagneMateriaux(nbRegions);
        botGagnePopulation(nbRegions);
      }

      const ok = await confirmerActionOptionnelle?.(
        "Voulez-vous piocher 1 carte ?"
      );

      if (ok) {
        await piocherCartesJoueur?.(1);
        afficherZoneJoueur?.();
      }

      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      botDefausserCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};  

ACTIONS_BOT.epeeMacedoniensBarbare = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot vole 2 Matériaux au joueur. Puis la première carte du deck C.I.V. va dans la défausse du Bot.`,
    cartes: [carte],
    callback: async () => {
      botVolerMateriauxAuJoueur(2);
      botDefausserDepuisDeckCiv(1);
      afficherZoneBot?.();
      afficherZoneJoueur?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      botDefausserCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.autreMacedoniensBarbare = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot gagne 1 Matériaux et 1 Population par Région en jeu. Puis la première carte du deck C.I.V. va dans la défausse du Bot.`,
    cartes: [carte],
    callback: async () => {
      const nbRegions = botCartesEnJeuParCategorie(CATEGORIES.REGION).length;

      if (nbRegions > 0) {
        botGagneMateriaux(nbRegions);
        botGagnePopulation(nbRegions);
      }

      botDefausserDepuisDeckCiv(1);
      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      botArchiverCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.renommeeMacedoniensEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot gagne 1 Progrès par Région en jeu.`,
    cartes: [carte],
    callback: async () => {
      const nbRegions = botCartesEnJeuParCategorie(CATEGORIES.REGION).length;

      if (nbRegions > 0) {
        botGagneProgres(nbRegions);
      }

      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      botArchiverCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.gloireMacedoniensEmpire = async function({ carte }) {
  if (botPeutAbandonnerRegions(3)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot abandonne 3 Région et pioche 1 Renommée.`,
      cartes: [carte],
      callback: async () => {
        botAbandonnerCategorie(CATEGORIES.REGION, 3);
        botPiocherRenommee();
        afficherZoneBot?.();
      }
    });
  } else if (botPeutAcquerirRegionExilee()) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot acquiert une Région exilée.`,
      cartes: [carte],
      callback: async () => {
        botAcquerirRegionExilee();
        afficherZoneBot?.();
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot gagne 1 Population.`,
      cartes: [carte],
      callback: async () => {
        botGagnePopulation(1);
        afficherZoneBot?.();
      }
    });
  }

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      botDefausserCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.barbareMacedoniensEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      botArchiverCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.regionMacedoniensEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot joue cette Région et exile 1 carte du Marché.`,
    cartes: [carte],
    callback: async () => {
      jouerRegionDansTableauBot(carte);
      exilerCarteSelonReglesBot();
      afficherZoneBot?.();
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.persistanteMacedoniensEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : si possible, le Bot récupère une Région de la défausse et la place au-dessus du deck C.I.V..`,
    cartes: [carte],
    callback: async () => {
      botRecupererRegionDefausseVersDessusDeck();
      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      botArchiverCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.empireMacedoniensEmpire = async function({ carte }) {
  if ((etatBot.materiaux || 0) >= 2) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot dépense 2 Matériaux pour acquérir Civilisé / Tradition / Région / Vassal.`,
      cartes: [carte],
      callback: async () => {
        botDepenseMateriaux(2);
        botAcquerirCarteSelonPriorite([
          CATEGORIES.CIVILISE,
          CATEGORIES.TRADITION,
          CATEGORIES.REGION,
          CATEGORIES.VASSAL
        ]);
      }
    });

    ajouterEtapeBot({
      message: `${carte.nom} est défaussée.`,
      cartes: [carte],
      callback: async () => {
        botDefausserCarteResolue(carte);
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : la première carte de la pioche Dynastie va dans la défausse du Bot.`,
      cartes: [carte],
      callback: async () => {
        botCarteDynastieVersDefausseCiv();
        afficherZoneBot?.();
      }
    });

    ajouterEtapeBot({
      message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
      cartes: [carte],
      callback: async () => {
        botArchiverCarteResolue(carte);
      }
    });
  }

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.autreMacedoniensEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot gagne 1 Progrès par Région en jeu.`,
    cartes: [carte],
    callback: async () => {
      const nbRegions = botCartesEnJeuParCategorie(CATEGORIES.REGION).length;

      if (nbRegions > 0) {
        botGagneProgres(nbRegions);
      }

      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      botArchiverCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

///--- ACTIONS PERSES ---///

/* =========================================================
   BOT - ACTIONS PERSES BARBARE
   ========================================================= */

ACTIONS_BOT.renommeePersesBarbare = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : les 3 premières cartes du deck C.I.V. vont dans la défausse du Bot.`,
    cartes: [carte],
    callback: async () => {
      botDefausserDepuisDeckCiv(3);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      archiverCarteBot(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.gloirePersesBarbare = async function({ carte }) {
  if (botPeutAbandonnerRegions(3)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot abandonne 3 Région puis pioche 1 Renommée.`,
      cartes: [carte],
      callback: async () => {
        abandonnerRegionsBotSelonRegles(3);
        botPiocherRenommee();
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot innove en Région.`,
      cartes: [carte],
      callback: async () => {
        botInnoverCarteSelonPriorite([CATEGORIES.REGION]);
      }
    });
  }

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      defausserCarteBot(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.vassalPersesBarbare = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot gagne 2 Population et 2 Matériaux.`,
    cartes: [carte],
    callback: async () => {
      botGagnePopulation(2);
      botGagneMateriaux(2);
      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} : la première carte du deck C.I.V. va dans la défausse du Bot.`,
    cartes: [carte],
    callback: async () => {
      botDefausserDepuisDeckCiv(1);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      archiverCarteBot(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.barbarePersesBarbare = async function({ carte }) {
  if ((etatBot.population || 0) >= 3) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot dépense 3 Population pour innover en Vassal.`,
      cartes: [carte],
      callback: async () => {
        botDepensePopulation(3);
        botInnoverCarteSelonPriorite([CATEGORIES.VASSAL]);
      }
    });

    ajouterEtapeBot({
      message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
      cartes: [carte],
      callback: async () => {
        archiverCarteBot(carte);
      }
    });
  } else if ((etatBot.materiaux || 0) >= 2) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot dépense 2 Matériaux pour acquérir Civilisé ou Tradition.`,
      cartes: [carte],
      callback: async () => {
        botDepenseMateriaux(2);
        botAcquerirCarteSelonPriorite([CATEGORIES.CIVILISE, CATEGORIES.TRADITION]);
      }
    });

    ajouterEtapeBot({
      message: `${carte.nom} est défaussée.`,
      cartes: [carte],
      callback: async () => {
        defausserCarteBot(carte);
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot gagne 1 Matériaux et 1 Population puis place cette carte au-dessus du deck C.I.V..`,
      cartes: [carte],
      callback: async () => {
        botGagneMateriaux(1);
        botGagnePopulation(1);
        retirerCarteDeToutesZonesBot(carte);
        etatBot.deckCiv.unshift(carte);
        afficherZoneBot?.();
      }
    });
  }

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.regionPersesBarbare = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot gagne 1 Population.`,
    cartes: [carte],
    callback: async () => {
      botGagnePopulation(1);
      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} : la Région est jouée dans le tableau du Bot.`,
    cartes: [carte],
    callback: async () => {
      jouerRegionDansTableauBot(carte);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} : le Bot exile 1 carte du marché.`,
    cartes: [carte],
    callback: async () => {
      botExilerUneCarteDuMarche();
      afficherBasMarche?.();
      afficherHautMarche?.();
      afficherPileExil?.();
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.persistantePersesBarbare = async function({ carte }) {
  if (botPeutAcquerirCategorie(CATEGORIES.REGION)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot acquiert une Région.`,
      cartes: [carte],
      callback: async () => {
        botAcquerirCarteSelonPriorite([CATEGORIES.REGION]);
        afficherZoneBot?.();
        afficherBasMarche?.();
        afficherHautMarche?.();
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : aucune Région disponible à acquérir.`,
      cartes: [carte]
    });
  }

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      archiverCarteBot(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.prosperitePersesBarbare = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : la première carte du deck C.I.V. va dans la défausse du Bot.`,
    cartes: [carte],
    callback: async () => {
      botDefausserDepuisDeckCiv(1);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} : le Bot gagne 1 Population et 1 Matériaux par Région en jeu. Le joueur peut piocher 1 carte.`,
    cartes: [carte],
    callback: async () => {
      const nbRegions = botCartesEnJeuParCategorie(CATEGORIES.REGION).length;

      if (nbRegions > 0) {
        botGagnePopulation(nbRegions);
        botGagneMateriaux(nbRegions);
      }

      const ok = await confirmerActionOptionnelle?.(
        "Voulez-vous piocher 1 carte ?"
      );

      if (ok) {
        await piocherCartesJoueur?.(1);
        afficherZoneJoueur?.();
      }

      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      defausserCarteBot(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.autrePersesBarbare = async function({ carte }) {
  if (botPeutAcquerirCategorie(CATEGORIES.VASSAL)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot acquiert un Vassal.`,
      cartes: [carte],
      callback: async () => {
        botAcquerirCarteSelonPriorite([CATEGORIES.VASSAL]);
      }
    });
  } else if (botPeutAcquerirCategorie(CATEGORIES.TRADITION)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot acquiert une Tradition.`,
      cartes: [carte],
      callback: async () => {
        botAcquerirCarteSelonPriorite([CATEGORIES.TRADITION]);
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
      cartes: [carte],
      callback: async () => {
        archiverCarteBot(carte);
      }
    });
  }

  if (botPeutAcquerirCategorie(CATEGORIES.VASSAL) || botPeutAcquerirCategorie(CATEGORIES.TRADITION)) {
    ajouterEtapeBot({
      message: `${carte.nom} est défaussée.`,
      cartes: [carte],
      callback: async () => {
        defausserCarteBot(carte);
      }
    });
  }

  await jouerEtapesBot();
  return true;
};


/* =========================================================
   BOT - ACTIONS PERSES EMPIRE
   ========================================================= */

ACTIONS_BOT.renommeePersesEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot dépense 3 Population pour gagner 1 Progrès autant de fois que possible.`,
    cartes: [carte],
    callback: async () => {
      while ((etatBot.population || 0) >= 3) {
        botDepensePopulation(3);
        botGagneProgres(1);
      }
      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      archiverCarteBot(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.gloirePersesEmpire = async function({ carte }) {
  if (botPeutAbandonnerRegions(3)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot abandonne 3 Région puis pioche 1 Renommée.`,
      cartes: [carte],
      callback: async () => {
        abandonnerRegionsBotSelonRegles(3);
        botPiocherRenommee();
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : la première carte de la pioche Dynastie va dans la défausse du Bot.`,
      cartes: [carte],
      callback: async () => {
        botCarteDynastieVersDefausseCiv();
      }
    });
  }

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      defausserCarteBot(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.barbarePersesEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      archiverCarteBot(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.vassalPersesEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot gagne 2 Progrès.`,
    cartes: [carte],
    callback: async () => {
      botGagneProgres(2);
      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      archiverCarteBot(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.epeePersesEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot innove en Vassal.`,
    cartes: [carte],
    callback: async () => {
      botInnoverCarteSelonPriorite([CATEGORIES.VASSAL]);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} : le joueur gagne 2 Matériaux puis récupère 1 Instabilité.`,
    cartes: [carte],
    callback: async () => {
      gagnerRessource?.("materiaux", 2);
      faireGagnerInstabiliteAuJoueur(1);
      afficherZoneJoueur?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      defausserCarteBot(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.regionPersesEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : la Région est jouée dans le tableau du Bot.`,
    cartes: [carte],
    callback: async () => {
      jouerRegionDansTableauBot(carte);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} : le Bot exile 1 carte du marché.`,
    cartes: [carte],
    callback: async () => {
      botExilerUneCarteDuMarche();
      afficherBasMarche?.();
      afficherHautMarche?.();
      afficherPileExil?.();
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.persistantePersesEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      archiverCarteBot(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.empirePersesEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot acquiert Tradition / Civilisé / Région / Vassal.`,
    cartes: [carte],
    callback: async () => {
      botAcquerirCarteSelonPriorite([
        CATEGORIES.TRADITION,
        CATEGORIES.CIVILISE,
        CATEGORIES.REGION,
        CATEGORIES.VASSAL
      ]);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      archiverCarteBot(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.autrePersesEmpire = async function({ carte }) {
  if (botPeutAcquerirCategorie(CATEGORIES.REGION)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot acquiert une Région.`,
      cartes: [carte],
      callback: async () => {
        botAcquerirCarteSelonPriorite([CATEGORIES.REGION]);
      }
    });

    ajouterEtapeBot({
      message: `${carte.nom} est défaussée.`,
      cartes: [carte],
      callback: async () => {
        defausserCarteBot(carte);
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot gagne 1 Progrès.`,
      cartes: [carte],
      callback: async () => {
        botGagneProgres(1);
        afficherZoneBot?.();
      }
    });

    ajouterEtapeBot({
      message: `${carte.nom} est défaussée.`,
      cartes: [carte],
      callback: async () => {
        defausserCarteBot(carte);
      }
    });
  }

  await jouerEtapesBot();
  return true;
};

/* =========================================================
   BOT - HELPERS BOT
   ========================================================= */

   

function botArchiverPremiereRenommeeDansHistoire() {
  const carte = jeu.piles?.piocheSecondaireRenommee?.shift?.() || null;

  if (!carte) {
    return false;
  }

  etatBot.histoire.push(carte);
  afficherZoneBot?.();
  afficherBasMarche?.();
  afficherHautMarche?.();
  return carte;
}

   async function forcerJoueurARappelerUneCarteCategorie(categorie, message = "Le joueur doit rappeler une carte.") {
  nettoyerSelectionCarteBotJoueur();

  const tableau = jeu.joueurZones.tableauJoueur || [];
  const eligibles = tableau.filter(carte =>
    carte &&
    (
      (categorie === "Persistante" && carte.pin === PINS.PERSISTANTE) ||
      inclutCategorie(carte, categorie)
    )
  );

  if (eligibles.length === 0) {
    journal("Aucune carte valide à rappeler pour le joueur.");
    afficherZoneJoueur?.();
    return false;
  }

  if (typeof afficherVue === "function") {
    afficherVue("vue-joueur");
  }

  return new Promise(resolve => {
    jeu.ui.selectionCarteActive = true;
    jeu.ui.selectionCarteSource = "tableau";
    jeu.ui.selectionCarteMessage = message;
    jeu.ui.selectionCartePredicate = carte =>
      tableau.includes(carte) &&
      (
        (categorie === "Persistante" && carte.pin === PINS.PERSISTANTE) ||
        inclutCategorie(carte, categorie)
      );

    jeu.ui.selectionCarteOnChoose = carte => {
      const index = tableau.indexOf(carte);

      if (index < 0) {
        nettoyerSelectionCarteBotJoueur();
        afficherZoneJoueur?.();
        resolve(false);
        return;
      }

      const carteRetiree = tableau.splice(index, 1)[0];

      deplacerCarteEtReserveesVersZone(carteRetiree, jeu.joueurZones.mainJoueur, "debut");
      journal(`Le joueur rappelle ${carteRetiree.nom}.`);

      nettoyerSelectionCarteBotJoueur();
      afficherZoneJoueur?.();
      resolve(true);
    };

    jeu.ui.selectionCarteOnCancel = () => {
      nettoyerSelectionCarteBotJoueur();
      afficherZoneJoueur?.();
      resolve(false);
    };

    jeu.ui.selectionCarteObligatoire = true;
    afficherZoneJoueur?.();
  });
}

function botRenvoyerInstabiliteDepuisDefausse() {
  const defausse = etatBot.defausse || [];
  const index = defausse.findIndex(carte =>
    carte && categoriePrincipaleCarte(carte) === CATEGORIES.INSTABILITE
  );

  if (index === -1) {
    return false;
  }

  const carte = defausse.splice(index, 1)[0];
  jeu.piles.piocheMarcheInstabilite.push(carte);
  melanger?.(jeu.piles.piocheMarcheInstabilite);

  afficherZoneBot?.();
  afficherBasMarche?.();
  return true;
}

   function botGagnerJetonsCarte(carte) {
  if (!carte) {
    return false;
  }

  if (!carte.jetons) {
    return false;
  }

  etatBot.population += Number(carte.jetons.population || 0);
  etatBot.materiaux += Number(carte.jetons.materiaux || 0);
  etatBot.progres += Number(carte.jetons.progres || 0);

  carte.jetons.population = 0;
  carte.jetons.materiaux = 0;
  carte.jetons.progres = 0;

  afficherZoneBot?.();
  return true;
}

function botVolerMateriauxAuJoueur(quantite = 1) {
  const vole = Math.min(jeu.joueur.materiaux || 0, quantite);

  if (vole > 0) {
    jeu.joueur.materiaux -= vole;
    etatBot.materiaux += vole;
  }

  afficherZoneJoueur?.();
  afficherZoneBot?.();
  return vole;
}

function botRecupererRegionDefausseVersDessusDeck() {
  const defausse = etatBot.defausse || [];
  const index = defausse.findIndex(carte =>
    carte && inclutCategorie(carte, CATEGORIES.REGION)
  );

  if (index === -1) {
    return false;
  }

  const carte = defausse.splice(index, 1)[0];
  etatBot.deckCiv.unshift(carte);

  afficherZoneBot?.();
  return carte;
}

function botAcquerirRegionExilee() {
  const pileExil = jeu.piles.exil || [];
  const index = pileExil.findIndex(carte => carte && inclutCategorie(carte, CATEGORIES.REGION));

  if (index === -1) {
    return false;
  }

  const carte = pileExil.splice(index, 1)[0];
  etatBot.defausse.push(carte);

  afficherPileExil?.();
  afficherZoneBot?.();
  return carte;
}

function botPeutAcquerirRegionExilee() {
  return (jeu.piles.exil || []).some(carte =>
    carte && inclutCategorie(carte, CATEGORIES.REGION)
  );
}

function obtenirRegionsDansTableauJoueurPourBot() {
  return (jeu.joueurZones?.tableauJoueur || []).filter(carte =>
    inclutCategorie(carte, CATEGORIES.REGION)
  );
}

async function forcerJoueurAAbandonnerUneRegion(message = "Le joueur doit abandonner 1 Région.") {
  // sécurité : on nettoie tout ancien état de sélection
  nettoyerSelectionCarteBotJoueur();

  const regions = obtenirRegionsDansTableauJoueurPourBot();

  if (regions.length === 0) {
    journal("Aucune Région à abandonner pour le joueur.");
    afficherZoneJoueur?.();
    return false;
  }

  const bloque = await proposerBlocageAvecCap?.(message);
  if (bloque) {
    journal("Le joueur rappelle Cap pour éviter l'effet d'épée.");
    nettoyerSelectionCarteBotJoueur();
    afficherZoneJoueur?.();
    return false;
  }

  if (typeof afficherVue === "function") {
    afficherVue("vue-joueur");
  }

  return new Promise(resolve => {
    jeu.ui.selectionCarteActive = true;
    jeu.ui.selectionCarteSource = "tableau";
    jeu.ui.selectionCarteMessage = message;
    jeu.ui.selectionCartePredicate = carte =>
      inclutCategorie(carte, CATEGORIES.REGION) &&
      (jeu.joueurZones.tableauJoueur || []).includes(carte);

    jeu.ui.selectionCarteOnChoose = carte => {
      const tableau = jeu.joueurZones.tableauJoueur || [];
      const defausse = jeu.joueurZones.defausseJoueur || [];
      const index = tableau.indexOf(carte);

      if (index < 0) {
        nettoyerSelectionCarteBotJoueur();
        afficherZoneJoueur?.();
        resolve(false);
        return;
      }

      const carteRetiree = tableau.splice(index, 1)[0];

if (Array.isArray(carteRetiree.reservees) && carteRetiree.reservees.length > 0) {
  defausse.push(...carteRetiree.reservees);
  carteRetiree.reservees = [];
}

defausse.push(carteRetiree);

journal(`Le joueur abandonne ${carteRetiree.nom}.`);

      nettoyerSelectionCarteBotJoueur();
      afficherZoneJoueur?.();
      resolve(true);
    };

    jeu.ui.selectionCarteOnCancel = () => {
      nettoyerSelectionCarteBotJoueur();
      afficherZoneJoueur?.();
      resolve(false);
    };

    jeu.ui.selectionCarteObligatoire = true;
    afficherZoneJoueur?.();
  });
}

async function forcerJoueurARappelerUneRegion(message = "Le joueur doit rappeler 1 Région.") {
  const regions = obtenirRegionsDansTableauJoueurPourBot();

  // sécurité absolue : on nettoie toute ancienne sélection résiduelle
  nettoyerSelectionCarteBotJoueur();

  if (regions.length === 0) {
    journal("Aucune Région à rappeler pour le joueur.");
    afficherZoneJoueur?.();
    return false;
  }

  const bloque = await proposerBlocageAvecCap?.(message);
  if (bloque) {
    journal("Le joueur rappelle Cap pour éviter l'effet d'épée.");
    nettoyerSelectionCarteBotJoueur();
    afficherZoneJoueur?.();
    return false;
  }

  if (typeof afficherVue === "function") {
    afficherVue("vue-joueur");
  }

  return new Promise(resolve => {
    jeu.ui.selectionCarteActive = true;
    jeu.ui.selectionCarteSource = "tableau";
    jeu.ui.selectionCarteMessage = message;
    jeu.ui.selectionCartePredicate = carte =>
      inclutCategorie(carte, CATEGORIES.REGION) &&
      (jeu.joueurZones.tableauJoueur || []).includes(carte);

    jeu.ui.selectionCarteOnChoose = carte => {
      const tableau = jeu.joueurZones.tableauJoueur || [];
      const index = tableau.indexOf(carte);

      if (index < 0) {
        nettoyerSelectionCarteBotJoueur();
        afficherZoneJoueur?.();
        resolve(false);
        return;
      }

      const carteRetiree = tableau.splice(index, 1)[0];

deplacerCarteEtReserveesVersZone(carteRetiree, jeu.joueurZones.mainJoueur, "debut");
journal(`Le joueur rappelle ${carteRetiree.nom}.`);

      nettoyerSelectionCarteBotJoueur();
      afficherZoneJoueur?.();
      resolve(true);
    };

    jeu.ui.selectionCarteOnCancel = () => {
      nettoyerSelectionCarteBotJoueur();
      afficherZoneJoueur?.();
      resolve(false);
    };

   jeu.ui.selectionCarteObligatoire = true;
  afficherZoneJoueur?.();
  });
}

async function forcerJoueurADefausserCartes(
  quantite = 1,
  message = null
) {
  // sécurité : on nettoie tout ancien état de sélection
  nettoyerSelectionCarteBotJoueur();

  const mainInitiale = jeu.joueurZones?.mainJoueur || [];
  const nb = Math.min(quantite, mainInitiale.length);

  if (nb <= 0) {
    journal("Aucune carte à défausser pour le joueur.");
    afficherZoneJoueur?.();
    return false;
  }

  const texteMessage = message || `Le joueur doit défausser ${nb} carte(s).`;

  const bloque = await proposerBlocageAvecCap?.(texteMessage);
  if (bloque) {
    journal("Le joueur rappelle Cap pour éviter l'effet d'épée.");
    nettoyerSelectionCarteBotJoueur();
    afficherZoneJoueur?.();
    return false;
  }

  if (typeof afficherVue === "function") {
    afficherVue("vue-joueur");
  }

  let nbDefaussees = 0;

  for (let i = 0; i < nb; i += 1) {
    const mainRestante = jeu.joueurZones?.mainJoueur || [];

    if (mainRestante.length === 0) {
      break;
    }

    const succes = await new Promise(resolve => {
      jeu.ui.selectionCarteActive = true;
      jeu.ui.selectionCarteSource = "main";
      jeu.ui.selectionCarteMessage =
        nb === 1
          ? texteMessage
          : `${texteMessage} (${i + 1}/${nb})`;

      jeu.ui.selectionCartePredicate = carte =>
        (jeu.joueurZones.mainJoueur || []).includes(carte);

      jeu.ui.selectionCarteOnChoose = carte => {
        const mainJoueur = jeu.joueurZones.mainJoueur || [];
        const defausseJoueur = jeu.joueurZones.defausseJoueur || [];
        const index = mainJoueur.indexOf(carte);

        if (index < 0) {
          nettoyerSelectionCarteBotJoueur();
          afficherZoneJoueur?.();
          resolve(false);
          return;
        }

        const carteRetiree = mainJoueur.splice(index, 1)[0];
        defausseJoueur.push(carteRetiree);

        journal(`Le joueur défausse ${carteRetiree.nom}.`);

        nettoyerSelectionCarteBotJoueur();
        afficherZoneJoueur?.();
        resolve(true);
      };

      jeu.ui.selectionCarteOnCancel = () => {
        nettoyerSelectionCarteBotJoueur();
        afficherZoneJoueur?.();
        resolve(false);
      };

      jeu.ui.selectionCarteObligatoire = true;
      afficherZoneJoueur?.();
      
    });

    if (!succes) {
      break;
    }

    nbDefaussees += 1;
  }

  nettoyerSelectionCarteBotJoueur();
  afficherZoneJoueur?.();

  return nbDefaussees > 0;
}

function nettoyerSelectionCarteBotJoueur() {
  jeu.ui.selectionCarteActive = false;
  jeu.ui.selectionCarteSource = null;
  jeu.ui.selectionCarteMessage = "";
  jeu.ui.selectionCartePredicate = null;
  jeu.ui.selectionCarteOnChoose = null;
  jeu.ui.selectionCarteOnCancel = null;
  jeu.ui.selectionCarteObligatoire = false;
  if (!panneauDecompteEstVisible()) {
    fermerPanneauUI?.();
  }
}

function botPeutAbandonnerRegions(quantite = 1) {
  return obtenirRegionsTableauBot().length >= quantite;
}

function botGagnePopulationParRegionEnJeu(quantiteParRegion = 1) {
  const nbRegions = botCartesEnJeuParCategorie(CATEGORIES.REGION).length;
  if (nbRegions > 0) {
    botGagnePopulation(nbRegions * quantiteParRegion);
  }
  return nbRegions;
}

function botGagneMateriauxParRegionEnJeu(quantiteParRegion = 1) {
  const nbRegions = botCartesEnJeuParCategorie(CATEGORIES.REGION).length;
  if (nbRegions > 0) {
    botGagneMateriaux(nbRegions * quantiteParRegion);
  }
  return nbRegions;
}


/* =========================================================
   BOT - RÉSOLUTION D'UNE CARTE
   ========================================================= */

async function resoudreCarteBotSelonTableau(carte) {
  if (!carte) {
    return false;
  }

  const regle = trouverRegleBotPourCarte(carte, etatBot.nation, etatBot.statut);

  if (!regle || !regle.action || !regle.action.type) {
    console.warn("Aucune règle Bot trouvée pour la carte :", carte);
    return false;
  }

  const action = ACTIONS_BOT[regle.action.type];

  if (typeof action !== "function") {
    console.warn("Action Bot non implémentée :", regle.action.type, carte);
    return false;
  }

  return await action({
    carte,
    regle
  });
}

/* =========================================================
   BOT - TOUR COMPLET / DÉ / EMPLACEMENTS / NETTOYAGE
   ========================================================= */

function lancerDeBot() {
  return Math.floor(Math.random() * 6) + 1;
}

function obtenirCleEmplacementBotDepuisDe(resultatDe) {
  if (resultatDe >= 1 && resultatDe <= botNombreEmplacementsSelonDe()) {
    return String(resultatDe);
  }

  return null;
}

function botAEmpacementOccupe(cle) {
  return !!etatBot.emplacements[String(cle)];
}

function retirerCarteEmplacementBot(cle) {
  const cleTexte = String(cle);
  const carte = etatBot.emplacements[cleTexte] || null;
  etatBot.emplacements[cleTexte] = null;
  afficherZoneBot?.();
  return carte;
}

function placerCarteDansEmplacementBot(cle, carte) {
  const cleTexte = String(cle);
  const cleNumerique = Number(cleTexte);

  if (!carte) {
    return false;
  }

  if (!Number.isInteger(cleNumerique)) {
    return false;
  }

  if (cleNumerique < 1 || cleNumerique > botNombreEmplacementsSelonDe()) {
    return false;
  }

  if (cleNumerique === 5 && botDoitAfficherJetonEpuisementEmplacement5()) {
    return false;
  }

  etatBot.emplacements[cleTexte] = carte;

  if (!botUI.emplacementsReveles) {
    botUI.emplacementsReveles = {};
  }

  botUI.emplacementsReveles[Number(cleTexte)] = false;

  afficherZoneBot?.();
  return true;
}

function obtenirPremierEmplacementVideBot() {
  for (const i of botIndicesEmplacementsActifs()) {
    if (!etatBot.emplacements[String(i)]) {
      return String(i);
    }
  }

  return null;
}

function botToutesLesCartesEmplacements() {
  return botIndicesEmplacementsActifs().map(i => etatBot.emplacements[String(i)]).filter(Boolean);
}

function carteBotEstInstabilite(carte) {
  return !!carte && inclutCategorie(carte, CATEGORIES.INSTABILITE);
}

function renvoyerInstabiliteReveleeBot(carte) {
  if (!carte) {
    return false;
  }

  retirerCarteDeToutesZonesBot(carte);
  jeu.piles.piocheMarcheInstabilite.push(carte);
  melanger?.(jeu.piles.piocheMarcheInstabilite);
  afficherZoneBot?.();
  afficherBasMarche?.();
  return true;
}

function botCarteDynastieVersDefausseCiv() {
  debugLog(
    "DYNASTIE AVANT =",
    (etatBot.piocheDynastie || []).map(c => `${c.nom} [${c.localisationDepart}]`)
  );

  const carte = botRetirerPremiereCartePiocheDynastie();

  debugLog(
    "CARTE RETIRÉE =",
    carte ? `${carte.nom} [${carte.localisationDepart}]` : null
  );

  if (!carte) {
    return null;
  }

  etatBot.defausse.push(carte);

  debugLog("STATUT BOT APRÈS RETRAIT =", etatBot.statut);

  afficherZoneBot?.();
  return carte;
}

function botRetirerPremiereCartePiocheDynastie() {
  const carte = etatBot.piocheDynastie.shift() || null;

  if (!carte) {
    return null;
  }

  if (String(carte.localisationDepart || "").trim() === "Pleine") {
    const nationBot = String(etatBot.nation || "").trim().toLowerCase();

    if (nationBot === "vikings") {
      // Règle spéciale Vikings : la sortie de "Pleine" déclenche le Décompte
      // mais ne fait pas passer le bot en Empire.
      declencherDecompte();
    } else {
      etatBot.statut = STATUTS.EMPIRE;
      debugLog("BOT -> passage en Empire :", carte.nom);
    }
  }

  if ((etatBot.piocheDynastie || []).length === 0) {
    declencherDecompte();
  }

  return carte;
}

function botMelangerDefausseDansDeckCiv() {
  if (!Array.isArray(etatBot.defausse) || etatBot.defausse.length === 0) {
    return false;
  }

  melanger?.(etatBot.defausse);
  etatBot.deckCiv = etatBot.defausse.splice(0);
  afficherZoneBot?.();
  return true;
}

function botAssurerDeckCivDisponible() {
  if (Array.isArray(etatBot.deckCiv) && etatBot.deckCiv.length > 0) {
    return true;
  }

  const carteDynastie = botCarteDynastieVersDefausseCiv();

  if (!carteDynastie) {
    return false;
  }

  return botMelangerDefausseDansDeckCiv();
}

function botPiocherDepuisDeckCiv() {
  const disponible = botAssurerDeckCivDisponible();

  if (!disponible) {
    return null;
  }

  const carte = etatBot.deckCiv.shift() || null;
  afficherZoneBot?.();
  return carte;
}

function botAppliquerContraintesEmplacementsSelonDifficulte() {
  const deplacementVersDefausse = cle => {
    const cleTexte = String(cle);
    const carte = etatBot.emplacements?.[cleTexte] || null;

    if (!carte) {
      return false;
    }

    etatBot.emplacements[cleTexte] = null;
    etatBot.defausse.push(carte);
    return true;
  };

  let aDeplace = false;

  if (botDoitAfficherJetonEpuisementEmplacement5()) {
    aDeplace = deplacementVersDefausse(5) || aDeplace;
  }

  if (botNombreEmplacementsSelonDe() < 6) {
    aDeplace = deplacementVersDefausse(6) || aDeplace;
  }

  if (!botUI.emplacementsReveles) {
    botUI.emplacementsReveles = {};
  }

  botUI.emplacementsReveles[5] = false;
  botUI.emplacementsReveles[6] = false;

  return aDeplace;
}

function botAjouterCarteSupplementaireEnDefausseSiNecessaire() {
  if (!botDoitPlacerCarteSupplementaireEnDefausse()) {
    return null;
  }

  if (!botEmplacementsActifsComplets()) {
    return null;
  }

  const carte = botPiocherDepuisDeckCiv();

  if (!carte) {
    return null;
  }

  etatBot.defausse.push(carte);
  return carte;
}

function botRemplirEmplacementsVides() {
  const cartesPiochees = [];

  if (!botUI.emplacementsReveles) {
    botUI.emplacementsReveles = {};
  }

  botAppliquerContraintesEmplacementsSelonDifficulte();

  for (const i of botIndicesEmplacementsActifs()) {
    const cle = String(i);

    if (etatBot.emplacements[cle]) {
      continue;
    }

    const carte = botPiocherDepuisDeckCiv();

    if (!carte) {
      break;
    }

    etatBot.emplacements[cle] = carte;
    botUI.emplacementsReveles[i] = false;

    cartesPiochees.push({ cle, carte });
  }

  const carteDefaussee = botAjouterCarteSupplementaireEnDefausseSiNecessaire();
  if (carteDefaussee) {
    cartesPiochees.push({
      cle: "defausse",
      carte: carteDefaussee
    });
  }

  botAppliquerContraintesEmplacementsSelonDifficulte();
  afficherZoneBot?.();
  return cartesPiochees;
}

function obtenirCarteVisibleMarcheSelonDe(resultatDe) {
  if (resultatDe < 1 || resultatDe > 5) {
    return null;
  }

  const cle = `zone${resultatDe}`;
  const zone = jeu.zonesMarche?.[cle] || null;

  return Array.isArray(zone) ? (zone[0] || null) : zone;
}



/* =========================================================
   BOT - RÉSOLUTION D'UN EMPLACEMENT
   ========================================================= */

async function resoudreEmplacementBot(cle) {
  const carte = etatBot.emplacements[String(cle)];

  if (!carte) {
    return false;
  }

  reveleerEmplacementBot(Number(cle));

  ajouterEtapeBot({
    message: `Bot : révélation de l’emplacement ${cle} — ${carte.nom}.`,
    cartes: [carte]
  });

  if (carteBotEstInstabilite(carte)) {
    ajouterEtapeBot({
      message: `${carte.nom} est renvoyée dans la pile Instabilité.`,
      cartes: [carte],
      callback: async () => {
        renvoyerInstabiliteReveleeBot(carte);
      }
    });

    await jouerEtapesBot();
    return true;
  }

  const regle = trouverRegleBotPourCarte(carte, etatBot.nation, etatBot.statut);

  if (!regle) {
    ajouterEtapeBot({
      message: `Aucune règle trouvée pour ${carte.nom}. La carte est défaussée.`,
      cartes: [carte],
      callback: async () => {
        defausserCarteBot(carte);
      }
    });

    await jouerEtapesBot();
    return false;
  }

  ajouterEtapeBot({
    message: `${carte.nom} correspond à la priorité ${regle.priorite} du tableau ${etatBot.nation} ${normaliserStatutBot(etatBot.statut)}.`,
    cartes: [carte]
  });

  await jouerEtapesBot();
  return await resoudreCarteBotSelonTableau(carte);
}

async function resoudreEmplacementsBot(cleIgnoree = null) {
  for (const i of botIndicesEmplacementsActifs()) {
    const cle = String(i);

    if (cle === String(cleIgnoree)) {
      continue;
    }

    await resoudreEmplacementBot(cle);
  }

  return true;
}


/* =========================================================
   BOT - MISE DE CÔTÉ SELON LE DÉ
   ========================================================= */

function retirerCarteEmplacementSelonDe(resultatDe) {
  const cle = obtenirCleEmplacementBotDepuisDe(resultatDe);

  if (!cle) {
    etatBot.carteMiseDeCote = null;
    return null;
  }

  if (!botAEmpacementOccupe(cle)) {
    etatBot.carteMiseDeCote = null;
    return null;
  }

  const carte = retirerCarteEmplacementBot(cle);
  etatBot.carteMiseDeCote = carte;
  return carte;
}


/* =========================================================
   BOT - NETTOYAGE
   ========================================================= */

async function nettoyerBot(resultatDe, carteMiseDeCote = null) {
  ajouterEtapeBot({
    message: `Nettoyage du Bot : ajout de 1 Progrès sur la carte visible ${resultatDe} du marché.`,
    callback: async () => {
      botAjouterProgresAuMarcheSelonDe(resultatDe);
    }
  });

  if (carteMiseDeCote) {
    ajouterEtapeBot({
      message: `La carte mise de côté retourne dans l’emplacement 1.`,
      cartes: [carteMiseDeCote],
      callback: async () => {
        etatBot.emplacements["1"] = carteMiseDeCote;
        etatBot.carteMiseDeCote = null;

        if (!botUI.emplacementsReveles) {
          botUI.emplacementsReveles = {};
        }
        botUI.emplacementsReveles[1] = false;

        afficherZoneBot?.();
      }
    });
  }

  ajouterEtapeBot({
    message: `Le Bot remplit les emplacements vides avec le deck C.I.V.`,
    callback: async () => {
      const remplies = botRemplirEmplacementsVides();

      if (!botUI.emplacementsReveles) {
        botUI.emplacementsReveles = {};
      }

      for (const i of botIndicesEmplacementsSelonDe()) {
        if (etatBot.emplacements[String(i)]) {
          botUI.emplacementsReveles[i] = false;
        }
      }

      if (!remplies || remplies.length === 0) {
        afficherZoneBot?.();
        return;
      }

      afficherZoneBot?.();
    }
  });

  await jouerEtapesBot();
  return true;
}


/* =========================================================
   BOT - TOUR COMPLET
   ========================================================= */

async function jouerTourBot() {
  const resultatDe = lancerDeBot();
  let cleIgnoree = null;
  let carteMiseDeCote = null;

  ajouterEtapeBot({
    message: `Le Bot lance le dé : ${resultatDe}.`
  });

  const cleCandidate = obtenirCleEmplacementBotDepuisDe(resultatDe);

  if (cleCandidate && etatBot.emplacements[cleCandidate]) {
    const carte = etatBot.emplacements[cleCandidate];

    ajouterEtapeBot({
      message: `L’emplacement ${cleCandidate} est occupé. La carte est mise de côté pour ce tour.`,
      cartes: [carte],
      callback: async () => {
        carteMiseDeCote = retirerCarteEmplacementSelonDe(resultatDe);
        cleIgnoree = cleCandidate;
      }
    });
  } else {
    ajouterEtapeBot({
      message: `Aucune carte n’est mise de côté pour ce tour.`
    });
  }

  await jouerEtapesBot();

  await resoudreEmplacementsBot(cleIgnoree);
  await nettoyerBot(resultatDe, carteMiseDeCote);

  ajouterEtapeBot({
    message: `Le tour du Bot est terminé.`
  });

  await jouerEtapesBot();
  return true;
}


/* =========================================================
   BOT - INITIALISATION DES EMPLACEMENTS
   ========================================================= */

function remplirTousLesEmplacementsBotAuDepart() {
  botAppliquerContraintesEmplacementsSelonDifficulte();

  for (const i of botIndicesEmplacementsActifs()) {
    if (!etatBot.emplacements[String(i)]) {
      const carte = botPiocherDepuisDeckCiv();
      if (!carte) {
        break;
      }
      etatBot.emplacements[String(i)] = carte;
    }
  }

  botAjouterCarteSupplementaireEnDefausseSiNecessaire();
  botAppliquerContraintesEmplacementsSelonDifficulte();
  recacherEmplacementsBot();
  afficherZoneBot?.();
}


/* =========================================================
   BOT - SÉLECTION DE CARTES / PRIORITÉS
   ========================================================= */

function botNumeroCarte(carte) {
  if (!carte) {
    return Number.POSITIVE_INFINITY;
  }

  if (typeof carte.numeroBot === "number") {
    return carte.numeroBot;
  }

  if (typeof carte.numero === "number") {
    return carte.numero;
  }

  if (typeof carte.idBot === "number") {
    return carte.idBot;
  }

  return Number.POSITIVE_INFINITY;
}

function botValeurJetonsCarte(carte) {
  if (!carte || !carte.jetons) {
    return 0;
  }

  return (
    (carte.jetons.population || 0) +
    (carte.jetons.materiaux || 0) +
    (carte.jetons.progres || 0)
  );
}

function botPointsVictoireCarte(carte) {
  if (!carte) {
    return 0;
  }

  const points = carte.pointsVictoire;
  const condition = String(carte.conditionVictoire || "");

  if (typeof points === "number") {
    return points;
  }

  const texte = String(points || "").trim();

  const valeurNumerique = Number(texte);
  if (Number.isFinite(valeurNumerique)) {
    return valeurNumerique;
  }

  if (texte === "Variable" || texte === "PV Variable") {
    return 5;
  }

  if (texte === "Conditionnel" || texte === "PV Conditionnel") {
    const chiffres = condition.match(/\d+/g) || [];
    if (chiffres.length === 0) {
      return 0;
    }

    return Math.max(...chiffres.map(Number));
  }

  const matchXPv = texte.match(/(\d+)\s*PV/i);
  if (matchXPv) {
    return Number(matchXPv[1]);
  }

  return 0;
}

function comparerCartesPourBot(carteA, carteB) {
  const pvA = botPointsVictoireCarte(carteA);
  const pvB = botPointsVictoireCarte(carteB);
  const progresA = Number(carteA?.jetons?.progres || 0);
  const progresB = Number(carteB?.jetons?.progres || 0);

  const scorePrincipalA = pvA + progresA;
  const scorePrincipalB = pvB + progresB;

  if (scorePrincipalA !== scorePrincipalB) {
    return scorePrincipalB - scorePrincipalA;
  }

  const materiauxA = Number(carteA?.jetons?.materiaux || 0);
  const materiauxB = Number(carteB?.jetons?.materiaux || 0);
  const scoreSecondaireA = progresA + materiauxA;
  const scoreSecondaireB = progresB + materiauxB;

  if (scoreSecondaireA !== scoreSecondaireB) {
    return scoreSecondaireB - scoreSecondaireA;
  }

  const numeroA = botNumeroCarte(carteA);
  const numeroB = botNumeroCarte(carteB);

  return numeroA - numeroB;
}

function comparerCartesPourExilBot(carteA, carteB) {
  const numeroA = botNumeroCarte(carteA);
  const numeroB = botNumeroCarte(carteB);

  return numeroA - numeroB;
}


/* =========================================================
   BOT - MARCHÉ HAUT (PIOCHES)
   ========================================================= */

function obtenirCarteSommetPiocheMarche(clePioche) {
  switch (clePioche) {
    case "principale-gauche":
      return jeu.piles?.piochePrincipale?.[0] || null;

    case "principale-droite":
      return jeu.piles?.piochePrincipale?.[1] || null;

    case "civilise":
      return jeu.piles?.piocheCivilise?.[0] || null;

    case "tradition":
      return jeu.piles?.piocheTradition?.[0] || null;

    case "region":
      return jeu.piles?.piocheRegion?.[0] || null;

    default:
      return null;
  }
}

function retirerCarteSommetPiocheMarche(clePioche) {
  switch (clePioche) {
    case "principale-gauche": {
      const carte = jeu.piles?.piochePrincipale?.shift?.() || null;

      if (carte) {
        verifierDeclenchementDecompteParPiochePrincipale();
      }

      return carte;
    }

    case "principale-droite": {
      const pioche = jeu.piles?.piochePrincipale;
      if (!Array.isArray(pioche) || pioche.length < 2) {
        return null;
      }

      const carte = pioche.splice(1, 1)[0] || null;

      if (carte) {
        verifierDeclenchementDecompteParPiochePrincipale();
      }

      return carte;
    }

    case "civilise":
      return jeu.piles?.piocheCivilise?.shift?.() || null;

    case "tradition":
      return jeu.piles?.piocheTradition?.shift?.() || null;

    case "region":
      return jeu.piles?.piocheRegion?.shift?.() || null;

    default:
      return null;
  }
}

function obtenirToutesCartesHautMarchePourBot() {
  return [
    { cle: "principale-gauche", carte: obtenirCarteSommetPiocheMarche("principale-gauche") },
    { cle: "principale-droite", carte: obtenirCarteSommetPiocheMarche("principale-droite") },
    { cle: "civilise", carte: obtenirCarteSommetPiocheMarche("civilise") },
    { cle: "tradition", carte: obtenirCarteSommetPiocheMarche("tradition") },
    { cle: "region", carte: obtenirCarteSommetPiocheMarche("region") }
  ].filter(obj => !!obj.carte);
}

function obtenirCartesAcquerablesBot(categories = []) {
  const categoriesNormales = Array.isArray(categories) ? categories : [categories];

  const cartes = obtenirToutesCartesBasMarchePourBot().filter(obj =>
    categoriesNormales.some(categorie => inclutCategorie(obj.carte, categorie))
  );

  cartes.sort((a, b) => comparerCartesPourBot(a.carte, b.carte));

  debugLog(
    "BOT ACQUÉRIR candidats =",
    cartes.map(obj => `${obj.cle}:${obj.carte.nom}`)
  );

  return cartes;
}

function obtenirCartesInnovablesBot(categories = []) {
  const categoriesNormales = Array.isArray(categories) ? categories : [categories];

  const cartesBas = obtenirToutesCartesBasMarchePourBot().filter(obj =>
    categoriesNormales.some(categorie => inclutCategorie(obj.carte, categorie))
  );

  cartesBas.sort((a, b) => comparerCartesPourBot(a.carte, b.carte));

  if (cartesBas.length > 0) {
    debugLog(
      "BOT INNOVER candidats bas =",
      cartesBas.map(obj => `${obj.cle}:${obj.carte.nom}`)
    );
    return cartesBas;
  }

  const cartesHaut = obtenirToutesCartesHautMarchePourBot().filter(obj =>
    categoriesNormales.some(categorie => inclutCategorie(obj.carte, categorie))
  );

  cartesHaut.sort((a, b) => comparerCartesPourBot(a.carte, b.carte));

  debugLog(
    "BOT INNOVER candidats haut =",
    cartesHaut.map(obj => `${obj.cle}:${obj.carte.nom}`)
  );

  return cartesHaut;
}

function obtenirCartesExilablesBot() {
  const cartes = ["zone1", "zone2", "zone3", "zone4", "zone5"]
    .map(cle => {
      const zone = jeu.zonesMarche?.[cle] || null;
      const carte = Array.isArray(zone) ? (zone[0] || null) : null;
      return { cle, carte };
    })
    .filter(obj => !!obj.carte)
    .filter(obj => botValeurJetonsCarte(obj.carte) === 0);

  debugLog(
    "BOT EXIL candidats =",
    cartes.map(obj => `${obj.cle}:${obj.carte.nom}`)
  );

  return cartes;
}

/* =========================================================
   BOT - ACQUISITION / INNOVATION / EXIL
   ========================================================= */

function ajouterCarteAuDeckCivBot(carte) {
  if (!carte) {
    return false;
  }

  botGagnerJetonsCarte(carte);
  etatBot.deckCiv.unshift(carte);

  if (carte.nom === "Pleine") {
    etatBot.statut = STATUTS.EMPIRE;
  }

  afficherZoneBot?.();
  return true;
}

function botChoisirMeilleureCarteAcquisition(categories = []) {
  const candidates = obtenirCartesAcquerablesBot(categories);
  return candidates.length > 0 ? candidates[0] : null;
}

function botChoisirMeilleureCarteInnovation(categories = []) {
  const categoriesNormales = Array.isArray(categories) ? categories : [categories];

  const cartesBas = obtenirToutesCartesBasMarchePourBot().filter(obj =>
    categoriesNormales.some(categorie => inclutCategorie(obj.carte, categorie))
  );

  cartesBas.sort((a, b) => comparerCartesPourBot(a.carte, b.carte));

  debugLog(
    "BOT INNOVER candidats bas =",
    cartesBas.map(obj => `${obj.cle}:${obj.carte.nom}`)
  );

  if (cartesBas.length > 0) {
    return cartesBas[0];
  }

  const cartesHaut = obtenirToutesCartesHautMarchePourBot().filter(obj =>
    categoriesNormales.some(categorie => inclutCategorie(obj.carte, categorie))
  );

  cartesHaut.sort((a, b) => comparerCartesPourBot(a.carte, b.carte));

  debugLog(
    "BOT INNOVER candidats haut =",
    cartesHaut.map(obj => `${obj.cle}:${obj.carte.nom}`)
  );

  return cartesHaut.length > 0 ? cartesHaut[0] : null;
}

function botChoisirMeilleureCarteExil() {
  const candidates = obtenirCartesExilablesBot();
  return candidates.length > 0 ? candidates[0] : null;
}

function acquerirCarteBotSelonPriorite(categories = []) {
  const choix = botChoisirMeilleureCarteAcquisition(categories);

  if (!choix || !choix.cle || !choix.carte) {
    return false;
  }

  const carte = retirerCarteZoneMarcheEtRecharger(choix.cle);

  if (!carte) {
    return false;
  }

  ajouterCarteAuDeckCivBot(carte);
  afficherBasMarche?.();
  afficherHautMarche?.();
  afficherZoneBot?.();
  return carte;
}

function innoverCarteBotSelonPriorite(categories = []) {
  const choix = botChoisirMeilleureCarteInnovation(categories);

  if (!choix || !choix.cle || !choix.carte) {
    return false;
  }

  const carte = retirerCarteSommetPiocheMarche(choix.cle);

  if (!carte) {
    return false;
  }

  ajouterCarteAuDeckCivBot(carte);
  afficherBasMarche?.();
  afficherHautMarche?.();
  afficherZoneBot?.();
  return carte;
}

function exilerCarteSelonReglesBot() {
  const choix = botChoisirMeilleureCarteExil();

  debugLog("CHOIX EXIL BOT =", choix?.cle, choix?.carte?.nom);

  if (!choix || !choix.cle || !choix.carte) {
    return false;
  }

  const carte = retirerCarteZoneMarcheEtRecharger(choix.cle);

  if (!carte) {
    return false;
  }

  jeu.piles.exil.push(carte);
  afficherBasMarche?.();
  afficherHautMarche?.();
  afficherPileExil?.();
  return carte;
}


/* =========================================================
   BOT - RÉGIONS / HISTOIRE / RAPPEL
   ========================================================= */

function obtenirRegionsTableauBot() {
  return etatBot.tableau.filter(carte => inclutCategorie(carte, CATEGORIES.REGION));
}

function obtenirDerniereRegionJoueeBot() {
  const regions = obtenirRegionsTableauBot();
  return regions.length > 0 ? regions[regions.length - 1] : null;
}

function abandonnerRegionsBotSelonRegles(quantite = 1) {
  let succes = 0;

  for (let i = 0; i < quantite; i += 1) {
    const region = obtenirDerniereRegionJoueeBot();

    if (!region) {
      break;
    }

    const index = etatBot.tableau.lastIndexOf(region);

    if (index >= 0) {
      const carte = etatBot.tableau.splice(index, 1)[0];

      if (!carte) {
        continue;
      }

      deplacerCarteEtReserveesVersZone(carte, etatBot.defausse, "fin");
      succes += 1;
    }
  }

  afficherZoneBot?.();
  return succes;
}

function rappelerDerniereRegionJoueeBotAuDessusDuDeck() {
  const region = obtenirDerniereRegionJoueeBot();

  if (!region) {
    return false;
  }

  const index = etatBot.tableau.lastIndexOf(region);

  if (index < 0) {
    return false;
  }

  const carte = etatBot.tableau.splice(index, 1)[0];

  if (!carte) {
    return false;
  }

  deplacerCarteEtReserveesVersZone(carte, etatBot.deckCiv, "debut");
  afficherZoneBot?.();
  return true;
}

function piocherCarteRenommeePourBot() {
  const carte = jeu.piles?.piocheSecondaireRenommee?.shift?.() || null;

  if (!carte) {
    return false;
  }

  etatBot.deckCiv.unshift(carte);
  afficherZoneBot?.();
  afficherBasMarche?.();
  afficherHautMarche?.();
  return carte;
}


/* =========================================================
   BOT - AIDES DE DEBUG
   ========================================================= */

function debugBotVoirChoixAcquerir(categories = []) {
  return botChoisirMeilleureCarteAcquisition(categories);
}

function debugBotVoirChoixInnover(categories = []) {
  return botChoisirMeilleureCarteInnovation(categories);
}

function debugBotVoirChoixExil() {
  return botChoisirMeilleureCarteExil();
}

/* =========================================================
   BOT - BLOC 4
   ACTIONS CELTES RESTANTES + CORRECTIONS DE FLUX
   ========================================================= */


/* =========================================================
   BOT - HELPERS SPÉCIAUX
   ========================================================= */

   function botPiocherVersDefausse(quantite = 1) {
  let total = 0;

  for (let i = 0; i < quantite; i += 1) {
    const carte = botPiocherDepuisDeckCiv?.();

    if (!carte) {
      break;
    }

    etatBot.defausse.push(carte);
    total += 1;
  }

  afficherZoneBot?.();
  return total;
}

   function botStatutEstEmpire() {
  return String(etatBot?.statut || "").trim() === STATUTS.EMPIRE;
}

function botToutesLesCartesTableau() {
  return Array.isArray(etatBot?.tableau) ? etatBot.tableau.filter(Boolean) : [];
}

function botToutesLesCartesEnJeuPourEffets() {
  return [
    ...botToutesLesCartesTableau(),
    ...(typeof botToutesLesCartesEmplacements === "function"
      ? botToutesLesCartesEmplacements()
      : [])
  ].filter(Boolean);
}

function botCartesEnJeuParCategorie(categorie) {
  return botToutesLesCartesEnJeuPourEffets().filter(carte =>
    inclutCategorie(carte, categorie)
  );
}

function botCartesTableauParCategorie(categorie) {
  return botToutesLesCartesTableau().filter(carte =>
    inclutCategorie(carte, categorie)
  );
}

function botAUneRegionEnJeu() {
  return botToutesLesCartesEnJeuPourEffets().some(carte =>
    inclutCategorie(carte, CATEGORIES.REGION)
  );
}

function botPerdreRessource(ressource, quantite = 1) {
  const q = Math.max(0, Number(quantite) || 0);

  if (q <= 0) {
    return 0;
  }

  const disponible = Math.max(0, Number(etatBot?.[ressource]) || 0);
  const perdu = Math.min(disponible, q);

  etatBot[ressource] = disponible - perdu;
  return perdu;
}

function botGagnerRessource(ressource, quantite = 1) {
  const q = Math.max(0, Number(quantite) || 0);

  if (q <= 0) {
    return 0;
  }

  etatBot[ressource] = (Number(etatBot?.[ressource]) || 0) + q;
  return q;
}

function botChoisirCarteMoinsValuable(cartes = []) {
  const liste = Array.isArray(cartes) ? cartes.filter(Boolean) : [];

  if (liste.length === 0) {
    return null;
  }

  if (typeof comparerCartesPourBot === "function") {
    return [...liste].sort((a, b) => comparerCartesPourBot(b, a))[0] || null;
  }

  return liste[0] || null;
}

function botAbandonnerCarteObjet(carte) {
  if (!carte) {
    return false;
  }

  const index = etatBot.tableau.indexOf(carte);

  if (index === -1) {
    return false;
  }

  etatBot.tableau.splice(index, 1);
  etatBot.defausse.push(carte);

  if (Array.isArray(carte.reservees) && carte.reservees.length > 0) {
    etatBot.defausse.push(...carte.reservees);
    carte.reservees = [];
  }

  afficherZoneBot?.();
  return true;
}

function botAbandonnerCategorie(categorie, quantite = 1) {
  let total = 0;

  for (let i = 0; i < quantite; i += 1) {
    const eligibles = botCartesTableauParCategorie(categorie);

    if (eligibles.length === 0) {
      break;
    }

    const carte = botChoisirCarteMoinsValuable(eligibles);

    if (!carte) {
      break;
    }

    if (botAbandonnerCarteObjet(carte)) {
      total += 1;
    }
  }

  return total;
}

function botRappelerCarteObjetVersDeckCiv(carte) {
  if (!carte) {
    return false;
  }

  const index = etatBot.tableau.indexOf(carte);

  if (index === -1) {
    return false;
  }

  const carteRetiree = etatBot.tableau.splice(index, 1)[0];

  if (!carteRetiree) {
    return false;
  }

  deplacerCarteEtReserveesVersZone(carteRetiree, etatBot.deckCiv, "debut");

  afficherZoneBot?.();
  return true;
}

function botRappelerCategorie(categorie, quantite = 1) {
  let total = 0;

  for (let i = 0; i < quantite; i += 1) {
    const eligibles = botCartesTableauParCategorie(categorie);

    if (eligibles.length === 0) {
      break;
    }

    const carte = botChoisirCarteMoinsValuable(eligibles);

    if (!carte) {
      break;
    }

    if (botRappelerCarteObjetVersDeckCiv(carte)) {
      total += 1;
    }
  }

  return total;
}

function botRecevoirInstabilite(quantite = 1) {
  if (verifierEffondrement()) {
    return 0;
  }

  let gagnees = 0;

  for (let i = 0; i < quantite; i++) {
    const carteInstabilite = jeu.piles.piocheMarcheInstabilite.pop();

    if (!carteInstabilite) {
      verifierEffondrement();
      break;
    }

    // 👉 CHANGEMENT ICI
    etatBot.deckCiv.unshift(carteInstabilite);

    gagnees += 1;

    if (verifierEffondrement()) {
      break;
    }
  }

  return gagnees;
}

function botDefausserDepuisEmplacements(quantite = 1) {
  let total = 0;

  for (let i = 0; i < quantite; i += 1) {
    const cartes = typeof botToutesLesCartesEmplacements === "function"
      ? botToutesLesCartesEmplacements()
      : [];

    if (!Array.isArray(cartes) || cartes.length === 0) {
      break;
    }

    const carte = botChoisirCarteMoinsValuable(cartes);

    if (!carte) {
      break;
    }

    retirerCarteDeToutesZonesBot(carte);
    etatBot.defausse.push(carte);
    total += 1;
  }

  afficherZoneBot?.();
  return total;
}

function botPiocherVersEmplacements(quantite = 1) {
  let total = 0;

  for (let i = 0; i < quantite; i += 1) {
    const emplacement = obtenirPremierEmplacementVideBot?.();

    if (!emplacement) {
      break;
    }

    const carte = botPiocherDepuisDeckCiv?.();

    if (!carte) {
      break;
    }

    etatBot.emplacements[String(emplacement)] = carte;
    total += 1;
  }

  afficherZoneBot?.();
  return total;
}

   function retirerCarteZoneMarcheEtRecharger(cleZone) {
  const zone = jeu.zonesMarche?.[cleZone];

  if (!Array.isArray(zone) || zone.length === 0) {
    return null;
  }

  const carte = zone.shift() || null;

  const carteDessous = zone[0] || null;

  if (carteDessous && inclutCategorie(carteDessous, CATEGORIES.INSTABILITE)) {
    const instabilite = zone.shift();

    if (instabilite) {
      jeu.piles.piocheMarcheInstabilite.push(instabilite);
      melanger(jeu.piles.piocheMarcheInstabilite);
    }
  }

  alimenterZoneMarche(zone);

  afficherBasMarche?.();
  afficherHautMarche?.();

  return carte;
}

function retirerCarteInnovationZoneMarcheEtRecharger(cleZone) {
  const zone = jeu.zonesMarche?.[cleZone];

  if (!Array.isArray(zone) || zone.length === 0) {
    return null;
  }

  const cartePrincipale = zone.shift() || null;

  if (!cartePrincipale) {
    return null;
  }

  const carteDessous = zone[0] || null;

  if (carteDessous && categoriePrincipaleCarte(carteDessous) === CATEGORIES.INSTABILITE) {
    const instabilite = zone.shift();

    if (instabilite) {
      jeu.piles.piocheMarcheInstabilite.push(instabilite);
      melanger(jeu.piles.piocheMarcheInstabilite);
    }
  }

  alimenterZoneMarche(zone);

  afficherBasMarche?.();
  afficherHautMarche?.();

  return cartePrincipale;
}

function retirerCartesAcquisitionZoneMarcheEtRecharger(cleZone) {
  const zone = jeu.zonesMarche?.[cleZone];

  if (!Array.isArray(zone) || zone.length === 0) {
    return [];
  }

  const cartesRecuperees = [];

  const carteVisible = zone.shift() || null;
  if (carteVisible) {
    cartesRecuperees.push(carteVisible);
  }

  const carteDessous = zone[0] || null;

  if (carteDessous && inclutCategorie(carteDessous, CATEGORIES.INSTABILITE)) {
    cartesRecuperees.push(zone.shift());
  }

  alimenterZoneMarche(zone);

  afficherBasMarche?.();
  afficherHautMarche?.();

  return cartesRecuperees;
}

function repeuplerZoneMarcheBot(cleZone) {
  const zone = jeu.zonesMarche?.[cleZone];

  if (!Array.isArray(zone)) {
    return false;
  }

  const { categorieZone, piocheSecondaire } = getZoneConfig(zone);
  let nouvelleCarte = null;

  if (categorieZone === "Principale") {
    nouvelleCarte = piger(jeu.piles.piochePrincipale);
    verifierDeclenchementDecompteParPiochePrincipale();
  } else if (piocheSecondaire) {
    nouvelleCarte = piger(piocheSecondaire);

    if (!nouvelleCarte) {
      nouvelleCarte = piocherDepuisPrincipaleJusquaCategorie(categorieZone);
      verifierDeclenchementDecompteParPiochePrincipale();
    }
  }

  if (!nouvelleCarte) {
    return false;
  }

  zone.length = 0;
  zone.push(nouvelleCarte);
  ajouterInstabiliteSiNecessaire(zone, nouvelleCarte);

  afficherBasMarche?.();
  afficherHautMarche?.();

  return true;
}

function botCarteDansTableau(carte) {
  return etatBot.tableau.includes(carte);
}

function botRetirerUneInstabiliteDeLaDefausse() {
  const index = etatBot.defausse.findIndex(carte =>
    inclutCategorie(carte, CATEGORIES.INSTABILITE)
  );

  if (index < 0) {
    return false;
  }

  const carte = etatBot.defausse.splice(index, 1)[0];
  jeu.piles.piocheMarcheInstabilite.push(carte);
  melanger?.(jeu.piles.piocheMarcheInstabilite);
  afficherZoneBot?.();
  afficherBasMarche?.();
  return true;
}

function botPeutAbandonnerRegions(quantite = 1) {
  return obtenirRegionsTableauBot().length >= quantite;
}

function botPeutPayerPopulation(quantite = 1) {
  return (etatBot.population || 0) >= quantite;
}

function botPeutPayerMateriaux(quantite = 1) {
  return (etatBot.materiaux || 0) >= quantite;
}

function botDefausserCarteResolue(carte) {
  if (!carte) {
    return false;
  }

  if (botCarteDansTableau(carte)) {
    return false;
  }

  return defausserCarteBot(carte);
}

function botArchiverCarteResolue(carte) {
  if (!carte) {
    return false;
  }

  if (botCarteDansTableau(carte)) {
    return false;
  }

  return archiverCarteBot(carte);
}

function botGagnerMateriauxJoueur(quantite = 1) {
  if (!jeu?.joueur) {
    return false;
  }

  jeu.joueur.materiaux = (jeu.joueur.materiaux || 0) + quantite;
  afficherZoneJoueur?.();
  return true;
}

function botChoisirMeilleureCarteParmiZonesVisibles(categories = []) {
  const zones = Object.entries(jeu.zonesMarche || {})
    .map(([cle, zone]) => ({
      cle,
      carte: Array.isArray(zone) ? zone[0] : null
    }))
    .filter(obj => !!obj.carte)
    .filter(obj => categories.some(categorie => inclutCategorie(obj.carte, categorie)))
    .sort((a, b) => comparerCartesPourBot(a.carte, b.carte));

  return zones.length > 0 ? zones[0] : null;
}


/* =========================================================
   BOT - ACQUISITION / INNOVATION AFFICHÉES
   ========================================================= */

function botAcquerirCarteSelonPriorite(categories = []) {
  const choix = botChoisirMeilleureCarteAcquisition(categories);

  debugLog("BOT ACQUÉRIR choix =", choix?.cle, choix?.carte?.nom);

  if (!choix || !choix.cle || !choix.carte) {
    return false;
  }

  let cartesRecuperees = [];

  if (String(choix.cle).startsWith("zone")) {
    cartesRecuperees = retirerCartesAcquisitionZoneMarcheEtRecharger(choix.cle);
  } else {
    const carte = retirerCarteSommetPiocheMarche(choix.cle);
    if (carte) {
      cartesRecuperees = [carte];
    }
  }

  if (!Array.isArray(cartesRecuperees) || cartesRecuperees.length === 0) {
    return false;
  }

  cartesRecuperees.forEach(carte => {
    ajouterCarteAuDeckCivBot(carte);
  });

  afficherBasMarche?.();
  afficherHautMarche?.();
  afficherZoneBot?.();
  return cartesRecuperees;
}

function botInnoverCarteSelonPriorite(categories = []) {
  const choix = botChoisirMeilleureCarteInnovation(categories);

  debugLog("RAW CHOIX INNOVER =", choix);
  debugLog("BOT INNOVER choix =", choix?.cle, choix?.carte?.nom);

  if (!choix || !choix.cle || !choix.carte) {
    botGagneProgres(2);
    debugLog("BOT INNOVER impossible -> +2 Progrès");
    afficherZoneBot?.();
    return "progres";
  }

  let carte = null;

  if (String(choix.cle).startsWith("zone")) {
    carte = retirerCarteInnovationZoneMarcheEtRecharger(choix.cle);
  } else {
    carte = retirerCarteSommetPiocheMarche(choix.cle);
  }

  if (!carte) {
    botGagneProgres(2);
    debugLog("BOT INNOVER retrait impossible -> +2 Progrès");
    afficherBasMarche?.();
    afficherHautMarche?.();
    afficherZoneBot?.();
    return "progres";
  }

  ajouterCarteAuDeckCivBot(carte);

  debugLog("BOT INNOVER carte ajoutée au deck C.I.V. =", carte.nom);

  afficherBasMarche?.();
  afficherHautMarche?.();
  afficherZoneBot?.();
  return carte;
}

/* =========================================================
   BOT - ACTIONS CELTES RESTANTES (BARBARE)
   ========================================================= */

ACTIONS_BOT.gloireCeltesBarbare = async function({ carte }) {
  if (botPeutAbandonnerRegions(3)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot abandonne 3 Régions pour piocher une Renommée.`,
      cartes: [carte],
      callback: async () => {
        abandonnerRegionsBotSelonRegles(3);
        piocherCarteRenommeePourBot();
        faireGagnerInstabiliteAuJoueur(1);
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : impossible d’abandonner 3 Régions. La première carte Dynastie va dans la défausse du Bot, puis le joueur reçoit 1 Instabilité.`,
      cartes: [carte],
      callback: async () => {
        botCarteDynastieVersDefausseCiv();
        faireGagnerInstabiliteAuJoueur(1);
      }
    });
  }

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      botDefausserCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.volerMateriauxEtProgres = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot tente de voler jusqu’à 1 Matériaux et 1 Progrès au joueur.`,
    cartes: [carte],
    callback: async () => {
      const bloque = await proposerBlocageAvecCap(
        `${carte.nom} ferait perdre jusqu’à 1 Matériaux et 1 Progrès au joueur.`
      );

      if (bloque) {
        journal(`Le joueur rappelle Cap pour éviter l'effet de ${carte.nom}.`);
        return;
      }

      volerAuJoueur("materiaux", 1);
      volerAuJoueur("progres", 1);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      botDefausserCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.conqueteCeltesBarbare = async function({ carte }) {
  if (botPeutPayerPopulation(3)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot dépense 3 Population pour innover en Vassal.`,
      cartes: [carte],
      callback: async () => {
        botDepensePopulation(3);
        botInnoverCarteSelonPriorite([CATEGORIES.VASSAL]);
      }
    });
  } else if (botPeutAcquerirCategorie(CATEGORIES.REGION)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot acquiert une Région.`,
      cartes: [carte],
      callback: async () => {
        botAcquerirCarteSelonPriorite([CATEGORIES.REGION]);
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : aucune option possible. Le joueur reçoit 1 Instabilité.`,
      cartes: [carte],
      callback: async () => {
        faireGagnerInstabiliteAuJoueur(1);
      }
    });
  }

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      botDefausserCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.persistanteCeltesBarbare = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot. Le joueur reçoit 1 Instabilité.`,
    cartes: [carte],
    callback: async () => {
      botArchiverCarteResolue(carte);
      faireGagnerInstabiliteAuJoueur(1);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.vassalCeltesBarbare = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : les 4 premières cartes du deck C.I.V. vont dans la défausse du Bot.`,
    cartes: [carte],
    callback: async () => {
      botDefausserDepuisDeckCiv(4);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      botArchiverCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.autreCeltesBarbare = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : si possible, le Bot renvoie 1 Instabilité depuis sa défausse. Puis il gagne 1 Progrès et place la première carte du deck C.I.V. dans sa défausse.`,
    cartes: [carte],
    callback: async () => {
      botRetirerUneInstabiliteDeLaDefausse();
      botGagneProgres(1);
      botDefausserDepuisDeckCiv(1);
      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      botDefausserCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};


/* =========================================================
   BOT - ACTIONS CELTES RESTANTES (EMPIRE)
   ========================================================= */

ACTIONS_BOT.barbareCeltesEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot. Le joueur reçoit 1 Instabilité.`,
    cartes: [carte],
    callback: async () => {
      botArchiverCarteResolue(carte);
      faireGagnerInstabiliteAuJoueur(1);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.renommeeCeltesEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot dépense toute sa Population pour gagner autant de Progrès.`,
    cartes: [carte],
    callback: async () => {
      const quantite = etatBot.population || 0;
      etatBot.population = 0;
      etatBot.progres += quantite;
      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} : les 2 premières cartes du deck C.I.V. vont dans la défausse du Bot.`,
    cartes: [carte],
    callback: async () => {
      botDefausserDepuisDeckCiv(2);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      botArchiverCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.gloireCeltesEmpire = async function({ carte }) {
  if (botPeutAbandonnerRegions(3)) {
    ajouterEtapeBot({
      message: `${carte.nom} : le Bot abandonne 3 Régions pour piocher une Renommée.`,
      cartes: [carte],
      callback: async () => {
        abandonnerRegionsBotSelonRegles(3);
        piocherCarteRenommeePourBot();
      }
    });
  } else {
    ajouterEtapeBot({
      message: `${carte.nom} : impossible d’abandonner 3 Régions. Le Bot gagne 2 Progrès.`,
      cartes: [carte],
      callback: async () => {
        botGagneProgres(2);
        afficherZoneBot?.();
      }
    });
  }

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      botDefausserCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.traditionCeltesEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : la première carte du deck C.I.V. va dans la défausse du Bot.`,
    cartes: [carte],
    callback: async () => {
      botDefausserDepuisDeckCiv(1);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      botArchiverCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.regionCeltesEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : la Région est jouée dans le tableau du Bot.`,
    cartes: [carte],
    callback: async () => {
      jouerRegionDansTableauBot(carte);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} : le Bot exile 1 carte du marché.`,
    cartes: [carte],
    callback: async () => {
      exilerCarteSelonReglesBot();
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.persistanteCeltesEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : la première carte du deck C.I.V. va dans la défausse du Bot.`,
    cartes: [carte],
    callback: async () => {
      botDefausserDepuisDeckCiv(1);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      botArchiverCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.empireCeltesEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot acquiert en Tradition, Civilisé, Région ou Vassal.`,
    cartes: [carte],
    callback: async () => {
      botAcquerirCarteSelonPriorite([
        CATEGORIES.TRADITION,
        CATEGORIES.CIVILISE,
        CATEGORIES.REGION,
        CATEGORIES.VASSAL
      ]);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} : le joueur gagne 2 Matériaux.`,
    cartes: [carte],
    callback: async () => {
      botGagnerMateriauxJoueur(2);
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est défaussée.`,
    cartes: [carte],
    callback: async () => {
      botDefausserCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.vassalCeltesEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} : le Bot gagne 2 Progrès.`,
    cartes: [carte],
    callback: async () => {
      botGagneProgres(2);
      afficherZoneBot?.();
    }
  });

  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot.`,
    cartes: [carte],
    callback: async () => {
      botArchiverCarteResolue(carte);
    }
  });

  await jouerEtapesBot();
  return true;
};

ACTIONS_BOT.autreCeltesEmpire = async function({ carte }) {
  ajouterEtapeBot({
    message: `${carte.nom} est archivée dans l’Histoire du Bot. Le joueur reçoit 1 Instabilité.`,
    cartes: [carte],
    callback: async () => {
      botArchiverCarteResolue(carte);
      faireGagnerInstabiliteAuJoueur(1);
    }
  });

  await jouerEtapesBot();
  return true;
};


/* =========================================================
   BOT - CORRECTIONS DU TOUR 
   ========================================================= */

function obtenirCarteVisibleMarcheSelonDe(resultatDe) {
  if (resultatDe < 1 || resultatDe > 5) {
    return null;
  }

  const cle = `zone${resultatDe}`;
  const zone = jeu.zonesMarche?.[cle] || null;

  if (!Array.isArray(zone) || zone.length === 0) {
    return null;
  }

  return zone[0] || null;
}

function botAjouterProgresAuMarcheSelonDe(resultatDe) {
  const carte = obtenirCarteVisibleMarcheSelonDe(resultatDe);

  if (!carte) {
    return false;
  }

  if (String(etatBot.nation || "").toLowerCase() === "carthaginois") {
    ajouterMateriauxSurCarteMarche(carte, 2);
    afficherBasMarche?.();
    return true;
  }

  initialiserJetonsCarte?.(carte);

  if (!carte.jetons) {
    carte.jetons = {
      population: 0,
      materiaux: 0,
      progres: 0
    };
  }

  carte.jetons.progres = (carte.jetons.progres || 0) + 1;

  afficherBasMarche?.();
  return true;
}

function obtenirToutesCartesBasMarchePourBot() {
  return ["zone1", "zone2", "zone3", "zone4", "zone5"]
    .map(cle => {
      const zone = jeu.zonesMarche?.[cle] || null;
      const carte = Array.isArray(zone) ? (zone[0] || null) : null;
      return { cle, carte };
    })
    .filter(obj => !!obj.carte);
}

/* =========================================================
   BOT - TESTS RAPIDES
   ========================================================= */

async function testCarteBot(carte) {
  return await resoudreCarteBotSelonTableau(carte);
}

async function testTourBotComplet() {
  return await jouerTourBot();
}

/* =========================================================
   BOT - AFFICHAGE VISUEL
   ========================================================= */

   function afficherBoutonSuivantBot() {
  const bouton = getElement("btn-bot-suivant");
  if (!bouton) {
    return;
  }

  bouton.style.display = "inline-block";
  bouton.disabled = false;
}

function masquerBoutonSuivantBot() {
  const bouton = getElement("btn-bot-suivant");
  if (!bouton) {
    return;
  }

  bouton.style.display = "none";
  bouton.disabled = true;
}

function attendreClicSuivantBot() {
  return new Promise(resolve => {
    botUI.resoudreEtapeSuivante = resolve;
    afficherBoutonSuivantBot();
  });
}

function passerEtapeBotSuivante() {
  if (typeof botUI.resoudreEtapeSuivante === "function") {
    const resolve = botUI.resoudreEtapeSuivante;
    botUI.resoudreEtapeSuivante = null;
    masquerBoutonSuivantBot();
    resolve();
  }
}

function initialiserBoutonSuivantBot() {
  const bouton = getElement("btn-bot-suivant");
  if (!bouton) {
    return;
  }

  masquerBoutonSuivantBot();

  bouton.onclick = () => {
    passerEtapeBotSuivante();
  };
}

   function brancherClicHistoireBot() {
  const zonePuissance = getElement("bot-carte-puissance");
  if (!zonePuissance) {
    return;
  }

  zonePuissance.style.cursor = "pointer";
  zonePuissance.onclick = ouvrirPanneauHistoireBot;
}

   function ouvrirPanneauHistoireBot() {
  const panneau = getElement("panneau-histoire");
  const contenu = getElement("contenu-histoire");

  if (!panneau || !contenu) return;

  contenu.innerHTML = "";

  const histoire = Array.isArray(etatBot.histoire) ? etatBot.histoire : [];

  if (histoire.length === 0) {
    contenu.innerHTML = `<div class="message-defausse-vide">L'Histoire du bot est vide.</div>`;
  } else {
    histoire.forEach(carte => {
      const div = document.createElement("div");
      div.className = "carte carte-histoire-mini";
      div.innerHTML = creerCarteHTML(carte);

      div.addEventListener("mouseenter", () => {
        jeu.ui.blocageZoomJusquaMouseleave = false;
        afficherZoomCarteDepuisHTML(div.innerHTML);
      });

      div.addEventListener("mouseleave", () => {
  jeu.ui.blocageZoomJusquaMouseleave = false;
  if (jeu.ui.modeInteraction) {
    return;
  }
  if (!jeu.ui.zoomVerrouille && !jeu.ui.regardRenommeeActif) {
    fermerZoomTemporaire();
  }
});

      div.addEventListener("click", () => {
        ouvrirZoomVerrouillePourCarte(carte);
      });

      contenu.appendChild(div);
    });
  }

  panneau.style.display = "flex";
}


function getEtatBotCarteStatut() {
  return {
    nom: etatBot.statut || "Barbare",
    pin: "Aucun",
    statut: "Aucun",
    typeCarte: "Aucun",
    typeRegion: [],
    effet: "Statut actuel du Bot",
    coutDeveloppement: "Aucun",
    categorie: "Aucun",
    styleBandeau: "Gris",
    nation: etatBot.nation || "Aucun",
    localisationDepart: "Aucun",
    pointsVictoire: 0,
    conditionVictoire: "Aucun"
  };
}

function creerCarteBotHTML(carte) {
  if (!carte) {
    return "";
  }

  if (typeof creerCarteHTML === "function") {
    return creerCarteHTML(carte);
  }

  return `<div class="carte-bot-fallback">${carte.nom || "Carte"}</div>`;
}

function remplirSlotCarteBot(idElement, carte, options = {}) {
  const zone = getElement(idElement);
  if (!zone) return;

  const faceCachee = options.faceCachee === true;
  const zoomHTML = options.zoomHTML || null;

  zone.innerHTML = "";

  if (!carte) {
    zone.classList.add("vide");
    return;
  }

  zone.classList.remove("vide");

  const wrapper = document.createElement("div");
  wrapper.className = "carte-wrapper";

  if (typeof carteEstSurligneeParBot === "function" && carteEstSurligneeParBot(carte)) {
    wrapper.classList.add("carte-bot-surlignee");
  }

  if (faceCachee) {
    wrapper.innerHTML = `<div class="dos-carte-verticale" style="width:100%;height:100%;"></div>`;
  } else {
    wrapper.innerHTML = `
      <div class="carte">
        ${creerCarteBotHTML(carte)}
      </div>
    `;
  }

  wrapper.addEventListener("mouseenter", () => {
    if (typeof afficherZoomCarteDepuisHTML !== "function") return;

    if (faceCachee) {
      afficherZoomCarteDepuisHTML(`<div class="dos-carte-verticale" style="width:260px;height:420px;"></div>`);
      return;
    }

    afficherZoomCarteDepuisHTML(zoomHTML || wrapper.innerHTML);
  });

  wrapper.addEventListener("mouseleave", () => {
    if (typeof fermerZoomTemporaire === "function") {
      fermerZoomTemporaire();
    }
  });

  zone.appendChild(wrapper);
}

function remplirPileBot(idElement, idCompteur, pile) {
  const zone = getElement(idElement);
  const compteur = getElement(idCompteur);

  if (compteur) {
    compteur.textContent = Array.isArray(pile) ? pile.length : 0;
  }

  if (!zone) {
    return;
  }

  zone.innerHTML = "";

  if (!Array.isArray(pile) || pile.length === 0) {
    zone.style.opacity = "0.45";
    return;
  }

  zone.style.opacity = "1";

  if (idElement === "bot-defausse") {
    const carteSommet = pile[pile.length - 1] || null;

    if (carteSommet) {
      const wrapper = document.createElement("div");
      wrapper.className = "carte-wrapper";
      wrapper.innerHTML = `
        <div class="carte">
          ${creerCarteBotHTML(carteSommet)}
        </div>
      `;

      wrapper.addEventListener("mouseenter", () => {
        if (typeof afficherZoomCarteDepuisHTML === "function") {
          afficherZoomCarteDepuisHTML(wrapper.innerHTML);
        }
      });

      wrapper.addEventListener("mouseleave", () => {
        if (typeof fermerZoomTemporaire === "function") {
          fermerZoomTemporaire();
        }
      });

      zone.appendChild(wrapper);
      return;
    }
  }

  const dos = document.createElement("div");
  dos.className = "dos-carte-verticale";
  dos.style.width = "100%";
  dos.style.height = "100%";
  dos.style.transform = "none";

  zone.appendChild(dos);
}

function afficherTableauBot() {
  const zone = getElement("bot-tableau");

  if (!zone) {
    return;
  }

  zone.innerHTML = "";

  const tableau = Array.isArray(etatBot.tableau) ? etatBot.tableau : [];
  const nombreCases = 24; // 4 colonnes x 6 rangées

  for (let i = 0; i < nombreCases; i++) {
    const caseDiv = document.createElement("div");
    caseDiv.className = "case-tableau-bot";

    const carte = tableau[i];

    if (carte) {
      const wrapper = document.createElement("div");
      wrapper.className = "carte-wrapper";

      if (typeof carteEstSurligneeParBot === "function" && carteEstSurligneeParBot(carte)) {
        wrapper.classList.add("carte-bot-surlignee");
      }

      wrapper.innerHTML = `
        <div class="carte">
          ${creerCarteBotHTML(carte)}
        </div>
      `;

      wrapper.addEventListener("mouseenter", () => {
        if (typeof afficherZoomCarteDepuisHTML === "function") {
          afficherZoomCarteDepuisHTML(wrapper.innerHTML);
        }
      });

      wrapper.addEventListener("mouseleave", () => {
        if (typeof fermerZoomTemporaire === "function") {
          fermerZoomTemporaire();
        }
      });

      caseDiv.appendChild(wrapper);
    }

    zone.appendChild(caseDiv);
  }
}

function afficherZoneBot() {
  const population = getElement("bot-population");
  const materiaux = getElement("bot-materiaux");
  const progres = getElement("bot-progres");
  const statut = getElement("bot-statut");
  const zonePuissance = getElement("bot-carte-puissance");
  const botScale = getElement("bot-scale");
  const blocEmplacements = getElement("bloc-emplacements-bot");
  const grilleEmplacements = getElement("grille-emplacements-bot");
  const colonneEmplacement6 = getElement("bot-colonne-emplacement-6");

if (zonePuissance) {
  zonePuissance.style.cursor = "pointer";
  zonePuissance.onclick = ouvrirPanneauHistoireBot;
}

  if (population) {
    population.textContent = etatBot.population ?? 0;
  }

  if (materiaux) {
    materiaux.textContent = etatBot.materiaux ?? 0;
  }

  if (progres) {
    progres.textContent = etatBot.progres ?? 0;
  }

  if (statut) {
    statut.textContent = etatBot.statut ?? "Barbare";
  }

  afficherSlotStatutBot();
  remplirSlotCarteBot("bot-carte-puissance", etatBot.cartePuissance);

  const afficherEmplacement6 = botNombreEmplacementsSelonDe() >= 6;

  if (grilleEmplacements) {
    grilleEmplacements.classList.toggle("bot-grille-6", afficherEmplacement6);
  }

  if (colonneEmplacement6) {
    colonneEmplacement6.classList.toggle("ui-cachee", !afficherEmplacement6);
  }

  if (botScale) {
    botScale.classList.toggle("bot-scale-suzerain", afficherEmplacement6);
  }

  if (blocEmplacements) {
    blocEmplacements.classList.toggle("bloc-emplacements-bot-suzerain", afficherEmplacement6);
  }

  const mettreAJourAffichageSpecialEmplacement = (index, carte) => {
    const zone = getElement(`bot-emplacement-${index}`);
    if (!zone) {
      return;
    }

    const afficherJetonEpuisement =
      index === 5 &&
      botDoitAfficherJetonEpuisementEmplacement5() &&
      !carte;

    zone.classList.toggle("slot-bot-jeton-epuisement", afficherJetonEpuisement);
  };

  for (const i of botIndicesEmplacementsSelonDe()) {
    const carte = etatBot.emplacements?.[String(i)] || null;
    const revelee = botUI.emplacementsReveles?.[i] === true;

    remplirSlotCarteBot(`bot-emplacement-${i}`, carte, {
      faceCachee: carte ? !revelee : false
    });
    mettreAJourAffichageSpecialEmplacement(i, carte);
  }

  if (!afficherEmplacement6) {
    remplirSlotCarteBot("bot-emplacement-6", null);
    mettreAJourAffichageSpecialEmplacement(6, null);
  }

  remplirPileBot("bot-deck-civ", "bot-deck-civ-compteur", etatBot.deckCiv);
  remplirPileBot("bot-defausse", "bot-defausse-compteur", etatBot.defausse);
  remplirPileBot("bot-pioche-dynastie", "bot-pioche-dynastie-compteur", etatBot.piocheDynastie);

  afficherTableauBot();

  brancherClicHistoireBot();
}

function reveleerEmplacementBot(index) {
  if (!botUI.emplacementsReveles) return;
  botUI.emplacementsReveles[index] = true;
  afficherZoneBot();
}

function recacherEmplacementsBot() {
  if (!botUI.emplacementsReveles) {
    botUI.emplacementsReveles = {};
  }

  for (const i of botIndicesEmplacementsExistants()) {
    botUI.emplacementsReveles[i] = false;
  }
}

/* =========================================================
   BOT - INITIALISATION DE PARTIE
   ========================================================= */

function reinitialiserEtatBot() {
  etatBot.nation = "celtes";
  etatBot.statut = STATUTS.BARBARE;

  etatBot.population = 0;
  etatBot.materiaux = 0;
  etatBot.progres = 0;

  etatBot.deckCiv = [];
  etatBot.defausse = [];
  etatBot.piocheDynastie = [];
  etatBot.histoire = [];
  etatBot.tableau = [];
  etatBot.cartePuissance = null;
  etatBot.carteMiseDeCote = null;

  etatBot.emplacements = {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null
  };
}

function clonerCartePourBot(carte) {
  if (!carte) {
    return null;
  }

  const copie = JSON.parse(JSON.stringify(carte));

  if (!copie.jetons) {
    copie.jetons = {
      population: 0,
      materiaux: 0,
      progres: 0
    };
  }

  if (copie.epuisee === undefined) {
    copie.epuisee = false;
  }

  return copie;
}

function creerDeckBotDepuisNation(nomNation = "Celtes") {
  const toutesLesCartes = [
    ...(Array.isArray(cartesCommunes) ? cartesCommunes : []),
    ...(Array.isArray(cartesNations) ? cartesNations : [])
  ];

  return toutesLesCartes
    .filter(carte =>
      carte &&
      typeof carte.nation === "string" &&
      carte.nation.trim().toLowerCase() === nomNation.trim().toLowerCase()
    )
    .map(clonerCartePourBot);
}

function separerCartesBotInitiales(deckNation) {
  const toutes = Array.isArray(deckNation) ? deckNation.slice() : [];

  const etoiles = [];
  const croissants = [];
  const deckCiv = [];
  let cartePleine = null;
  let cartePuissance = null;

  for (const carte of toutes) {
    if (!carte) {
      continue;
    }

    if (carte.localisationDepart === "Étoile") {
      etoiles.push(carte);
      continue;
    }

    if (carte.localisationDepart === "Pleine") {
      cartePleine = carte;
      continue;
    }

    if (carte.localisationDepart === "Croissant") {
      croissants.push(carte);
      continue;
    }

    if (carte.typeCarte === "Puissance" || carte.categorie === CATEGORIES.PUISSANCE) {
      cartePuissance = carte;
      continue;
    }

    deckCiv.push(carte);
  }

  return {
    etoiles,
    cartePleine,
    croissants,
    deckCiv,
    cartePuissance
  };
}

function melangerTableauBot(tableau) {
  if (typeof melanger === "function") {
    melanger(tableau);
    return tableau;
  }

  for (let i = tableau.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [tableau[i], tableau[j]] = [tableau[j], tableau[i]];
  }

  return tableau;
}

function initialiserBot() {
  reinitialiserEtatBot();

  const nationBot = configurationPartie.nationBot || "Celtes";
  etatBot.nation = nationBot;

  const bonusDepart = botBonusRessourcesDepartSelonDifficulte();
  etatBot.materiaux = Number(bonusDepart.materiaux || 0);
  etatBot.population = Number(bonusDepart.population || 0);
  etatBot.progres = Number(bonusDepart.progres || 0);

  const deckNation = creerDeckBotDepuisNation(nationBot);
  const separation = separerCartesBotInitiales(deckNation);

  etatBot.piocheDynastie = construirePiocheDynastieBotDepuisCartes(deckNation);
  etatBot.deckCiv = separation.deckCiv || [];
  etatBot.cartePuissance = separation.cartePuissance || null;

  melangerTableauBot(etatBot.deckCiv);
  botAppliquerContraintesEmplacementsSelonDifficulte();

  remplirTousLesEmplacementsBotAuDepart();
  afficherZoneBot();
}

/* =========================================================
   BOT - CONTRÔLES DE FLUX DE TOUR
   ========================================================= */

let tourBotEnCours = false;

async function lancerTourBotSiPossible() {
  if (tourBotEnCours || jeu.finPartie.terminee) {
    return false;
  }

  tourBotEnCours = true;

  try {
    await jouerTourBot();

    if (jeu.finPartie.terminee) {
      return false;
    }

    afficherZoneBot();
    return true;
  } finally {
    tourBotEnCours = false;
  }
}

async function commencerTourBotDepuisInterface() {
  definirEtatBoutonTourBot(false);

  await lancerTourBotSiPossible();

  if (jeu.finPartie.terminee) {
    return false;
  }

  jeu.manche.phase = PHASES.SOLSTICE;
  commencerPhaseSolsticeInteractive();
  mettreAJourBoutonsPhaseJoueur();
  afficherVue("vue-joueur");
  miniTutorielMarquerBotLance();

  avertir("Tour du Bot terminé. Le Solstice peut maintenant commencer.");
  return true;
}

function definirEtatBoutonTourBot(actif) {
  const bouton = getElement("btn-commencer-tour-bot");
  if (!bouton) {
    return;
  }

  bouton.disabled = !actif;
}

async function terminerTourJoueurEtJouerBot() {
  if (tourBotEnCours || jeu.finPartie.terminee) {
    return false;
  }

  if (typeof nettoyerFinDeTourJoueur === "function") {
    await nettoyerFinDeTourJoueur();
  }

  if (jeu.finPartie.terminee) {
    return false;
  }

  await lancerTourBotSiPossible();

  if (jeu.finPartie.terminee) {
    return false;
  }

  if (typeof afficherVue === "function") {
    afficherVue("vue-joueur");
  }

  return true;
}


/* =========================================================
   BOT - AIDES DE TEST
   ========================================================= */

function botEstInitialise() {
  return (
    Array.isArray(etatBot.deckCiv) &&
    Array.isArray(etatBot.piocheDynastie)
  );
}

function debugRemplirBotAvecExemples() {
  const cartesSource = [
    ...(Array.isArray(cartesCommunes) ? cartesCommunes : []),
    ...(Array.isArray(cartesNations) ? cartesNations : [])
  ];

  etatBot.emplacements["1"] = clonerCartePourBot(cartesSource.find(c => c.nom === "Conquête") || cartesSource[0]);
  etatBot.emplacements["2"] = clonerCartePourBot(cartesSource.find(c => c.nom === "Gloire") || cartesSource[1]);
  etatBot.emplacements["3"] = clonerCartePourBot(cartesSource.find(c => inclutCategorie(c, CATEGORIES.TRADITION)) || cartesSource[2]);
  etatBot.emplacements["4"] = clonerCartePourBot(cartesSource.find(c => inclutCategorie(c, CATEGORIES.REGION)) || cartesSource[3]);
  etatBot.emplacements["5"] = clonerCartePourBot(cartesSource.find(c => c.pin === PINS.EPEE) || cartesSource[4]);
  etatBot.emplacements["6"] = clonerCartePourBot(cartesSource[5] || cartesSource[0]);

  botAppliquerContraintesEmplacementsSelonDifficulte();
  afficherZoneBot();
}


/* =========================================================
   BOT - BRANCHEMENT SIMPLE AU BOUTON FIN DE TOUR
   ========================================================= */

function brancherBoutonFinTourAvecBot() {
  const bouton = getElement("btn-fin-tour");

  if (!bouton) {
    return;
  }

  bouton.onclick = async () => {
    await terminerTourJoueurEtJouerBot();
  };
}
/* =========================================================
   3) HELPERS CARTES
   ========================================================= */

   async function declencherTentesSiRegionJouee(carteJouee) {
  if (!carteJouee || !inclutCategorie(carteJouee, CATEGORIES.REGION)) {
    return;
  }

  const tentes = trouverCarteDansTableauParNom("Tentes");

  if (!tentes || tentes.epuisee) {
    return;
  }

  const confirmer = await confirmerActionOptionnelle(
    "Voulez-vous épuiser Tentes pour gagner 1 Population ?"
  );

  if (!confirmer) {
    return;
  }

  const succesEpuisement = await epuiserCarte(tentes);

  if (!succesEpuisement) {
    return;
  }

  gagnerRessource("population", 1);
  afficherZoneJoueur?.();
}

   async function rappelerEauOuBlePuisAcquerirCarteMarcheAvecMateriaux(minimumMateriauxSurCarte = 1) {
  if (!existeCarteMarcheAvecMateriaux(minimumMateriauxSurCarte)) {
    ouvrirPanneauUI("Aucune carte du Marché avec des Matériaux n'est disponible.", [
      { label: "OK" }
    ]);
    return false;
  }

  const regionsEligibles = obtenirRegionsRappelablesAvecTagParmi(["Eau", "Blé"]);

  if (!Array.isArray(regionsEligibles) || regionsEligibles.length === 0) {
    ouvrirPanneauUI("Vous n'avez aucune région Eau ou Blé à rappeler.", [
      { label: "OK" }
    ]);
    return false;
  }

  const carteChoisie = await new Promise(resolve => {
    demarrerSelectionCarte({
      source: "tableau",
      message: "Choisissez une région Eau ou Blé à rappeler.",
      obligatoire: true,
      predicate: carte =>
        Array.isArray(carte?.typeRegion) &&
        (carte.typeRegion.includes("Eau") || carte.typeRegion.includes("Blé")),
      onChoose: carte => resolve(carte),
      onCancel: () => resolve(null)
    });
  });

  terminerSelectionCarte();

  if (!carteChoisie) {
    return false;
  }

  const succesRappel = rappelerCarteObjetDepuisTableau(carteChoisie);
  if (!succesRappel) {
    return false;
  }

  afficherZoneJoueur();

  const succesAcquisition = await acquerirCarteMarcheAvecMateriauxChoisie(minimumMateriauxSurCarte);
  return !!succesAcquisition;
}

   function obtenirRegionsRappelablesAvecTagParmi(tags = []) {
  const tagsNormaux = Array.isArray(tags) ? tags : [tags];

  return obtenirRegionsDansTableauJoueur().filter(carte =>
    tagsNormaux.some(tag => Array.isArray(carte.typeRegion) && carte.typeRegion.includes(tag))
  );
}

function existeRegionRappelableEauOuBle() {
  return obtenirRegionsRappelablesAvecTagParmi(["Eau", "Blé"]).length > 0;
}

   function demanderCarteDepuisHistoire(predicateCarte = null) {
  return new Promise(resolve => {
    ouvrirVueHistoire(true, resolve, predicateCarte);
  });
}

   async function proposerEpuisementPuissanceCarthaginoisSiCarteMarcheAvecMateriaux(carteMarche) {
  const cartePuissance = cartePuissanceCarthaginois();

  if (!cartePuissance || cartePuissance.epuisee) {
    return false;
  }

  const materiauxSurCarte = obtenirMateriauxSurCarteMarche(carteMarche);

  if (materiauxSurCarte <= 0) {
    return false;
  }

  const ok = await confirmerActionOptionnelle(
    `Épuiser Carthaginois pour doubler les Matériaux gagnés sur ${carteMarche.nom} ?`
  );

  if (!ok) {
    return false;
  }

  cartePuissance.epuisee = true;

  if (!jeu.manche) {
    jeu.manche = {};
  }

  if (!jeu.manche.modificateursTour) {
    jeu.manche.modificateursTour = {};
  }

  jeu.manche.modificateursTour.doubleMateriauxCarthaginoisActif = true;

  afficherSlotPuissance?.();
  afficherZoneJoueur?.();

  return true;
}

   function obtenirZonesMarcheAvecMateriaux(minimum = 1) {
  return obtenirClesZonesMarche().filter(cleZone => {
    const zone = jeu.zonesMarche[cleZone];
    const carte = zone?.[0];

    if (!carte) {
      return false;
    }

    return obtenirMateriauxSurCarteMarche(carte) >= minimum;
  });
}

function existeCarteMarcheAvecMateriaux(minimum = 1) {
  return obtenirZonesMarcheAvecMateriaux(minimum).length > 0;
}

async function acquerirCarteMarcheAvecMateriauxChoisie(minimum = 1) {
  afficherVue("vue-marche");

  const zonesEligibles = obtenirZonesMarcheAvecMateriaux(minimum);

  if (!Array.isArray(zonesEligibles) || zonesEligibles.length === 0) {
    ouvrirPanneauUI("Aucune carte du Marché avec des Matériaux n'est disponible.", [
      { label: "OK" }
    ]);
    afficherVue("vue-joueur");
    return false;
  }

  return await new Promise(resolve => {
    demarrerSelectionMarche({
      message: "Choisissez une carte du Marché ayant au moins 1 Matériaux.",
      obligatoire: true,

      predicate: cleZone => zonesEligibles.includes(cleZone),

      onChoose: async cleZone => {
        const succes = await acquerirCarteDansZone(jeu.zonesMarche[cleZone]);

        terminerSelectionMarche();
        afficherVue("vue-joueur");
        resolve(!!succes);
      },

      onCancel: () => {
        terminerSelectionMarche();
        afficherVue("vue-joueur");
        resolve(false);
      }
    });
  });
}

   function attribuerMateriauxCarteMarcheRecuperee(carte) {
  if (!carte) {
    return 0;
  }

  const materiauxDeBase = retirerMateriauxSurCarteMarche(carte);

  if (materiauxDeBase <= 0) {
    return 0;
  }

  let quantiteGagnee = materiauxDeBase;

  if (doubleMateriauxCarthaginoisActif()) {
    quantiteGagnee = materiauxDeBase * 2;

    if (jeu.manche?.modificateursTour) {
      jeu.manche.modificateursTour.doubleMateriauxCarthaginoisActif = false;
    }
  }

  gagnerRessource("materiaux", quantiteGagnee);
  return quantiteGagnee;
}

   function carthaginoisActif() {
  const cartePuissance = jeu.joueurZones?.cartePuissanceVisible || null;
  return !!(cartePuissance && cartePuissance.nom === "Carthaginois");
}

function cartePuissanceCarthaginois() {
  const cartePuissance = jeu.joueurZones?.cartePuissanceVisible || null;

  if (cartePuissance && cartePuissance.nom === "Carthaginois") {
    return cartePuissance;
  }

  return null;
}

function doubleMateriauxCarthaginoisActif() {
  return Boolean(jeu.manche?.modificateursTour?.doubleMateriauxCarthaginoisActif);
}


function initialiserMateriauxCarte(carte) {
  if (!carte) {
    return;
  }

  if (!Number.isFinite(carte.materiauxSurCarte)) {
    carte.materiauxSurCarte = 0;
  }
}

function ajouterMateriauxSurCarteMarche(carte, quantite = 1) {
  if (!carte || quantite <= 0) {
    return false;
  }

  initialiserMateriauxCarte(carte);
  carte.materiauxSurCarte += quantite;
  return true;
}

function obtenirMateriauxSurCarteMarche(carte) {
  if (!carte) {
    return 0;
  }

  return Number(carte.materiauxSurCarte || 0);
}


function retirerMateriauxSurCarteMarche(carte) {
  if (!carte) {
    return 0;
  }

  const quantite = Number(carte.materiauxSurCarte || 0);
  carte.materiauxSurCarte = 0;
  return quantite;
}

   

   async function proposerVikingsPlacerCarteDeckNationAuFond() {
  const carte = obtenirPremiereCarteDeckNation();

  if (!carte) {
    return false;
  }

  jeu.ui.modeInteraction = "deckNation";

  return await new Promise(resolve => {
    ouvrirZoomDeckNationAvecChoix(
      carte,
      "Voulez-vous placer cette carte au fond du deck Nation ?",
      async () => {
        const deckNation = obtenirDeckNationJoueur();

        if (Array.isArray(deckNation) && deckNation.length > 0) {
          const carteDessus = deckNation.shift();
          deckNation.push(carteDessus);
          afficherZoneJoueur?.();
        }

        fermerZoomDeckNationAvecChoix();
        jeu.ui.modeInteraction = null;

        requestAnimationFrame(() => {
          resolve(true);
        });
      },
      async () => {
        fermerZoomDeckNationAvecChoix();
        jeu.ui.modeInteraction = null;

        requestAnimationFrame(() => {
          resolve(true);
        });
      }
    );
  });
}

   async function chercherRegionDansDefaussePourErik() {
  debugLog("DEBUG ERIK | entrée chercherRegionDansDefaussePourErik");

  fermerZoomVerrouille?.();
  fermerZoomTemporaire?.();

  const defausse = jeu.joueurZones.defausseJoueur || [];
  const regions = defausse.filter(carte =>
    carte && inclutCategorie(carte, CATEGORIES.REGION)
  );

  debugLog("DEBUG ERIK | régions défausse =", regions.map(c => c.nom));

  if (regions.length === 0) {
    debugLog("DEBUG ERIK | aucune région dans défausse");
    return null;
  }

  const carteChoisie = await new Promise(resolve => {
    debugLog("DEBUG ERIK | ouverture vue défausse");
    ouvrirVueDefausse(
      true,
      valeur => {
        debugLog("DEBUG ERIK | Promise défausse résolue avec =", valeur?.nom || null);
        resolve(valeur);
      },
      carte => carte && inclutCategorie(carte, CATEGORIES.REGION)
    );
  });

  debugLog("DEBUG ERIK | sortie await défausse avec =", carteChoisie?.nom || null);

  fermerZoomVerrouille?.();
  fermerZoomTemporaire?.();

  if (!carteChoisie) {
    debugLog("DEBUG ERIK | aucune carte choisie dans défausse");
    return null;
  }

  const index = defausse.indexOf(carteChoisie);

  if (index === -1) {
    debugLog("DEBUG ERIK | carte choisie introuvable dans défausse");
    return null;
  }

  debugLog("DEBUG ERIK | carte retirée de la défausse =", carteChoisie.nom);
  return defausse.splice(index, 1)[0];
}

async function chercherRegionDansDeckJoueurPourErik() {
  debugLog("DEBUG ERIK | entrée chercherRegionDansDeckJoueurPourErik");

  fermerZoomVerrouille?.();
  fermerZoomTemporaire?.();

  const deck = jeu.joueurZones.deckJoueur || [];
  const regions = deck.filter(carte =>
    carte && inclutCategorie(carte, CATEGORIES.REGION)
  );

  debugLog("DEBUG ERIK | régions deck joueur =", regions.map(c => c.nom));

  if (regions.length === 0) {
    debugLog("DEBUG ERIK | aucune région dans deck joueur");
    return null;
  }

  const carteChoisie = await demanderCarteDepuisDeckJoueur(
    carte => carte && inclutCategorie(carte, CATEGORIES.REGION)
  );

  debugLog("DEBUG ERIK | retour demanderCarteDepuisDeckJoueur =", carteChoisie?.nom || null);

  if (!carteChoisie) {
    return null;
  }

  const index = deck.indexOf(carteChoisie);

  if (index === -1) {
    debugLog("DEBUG ERIK | carte choisie introuvable dans deck joueur");
    return null;
  }

  return deck.splice(index, 1)[0];
}

async function chercherRegionDansDeckNationPourErik() {
  debugLog("DEBUG ERIK | entrée chercherRegionDansDeckNationPourErik");

  fermerZoomVerrouille?.();
  fermerZoomTemporaire?.();

  const deck = obtenirDeckNationJoueur() || [];
  debugLog("DEBUG ERIK | deck nation brut =", deck.map(c => c?.nom || null));

  const regions = deck.filter(carte =>
    carte && inclutCategorie(carte, CATEGORIES.REGION)
  );

  debugLog("DEBUG ERIK | régions deck nation =", regions.map(c => c.nom));

  if (regions.length === 0) {
    debugLog("DEBUG ERIK | aucune région dans deck nation");
    return null;
  }

  const carteChoisie = await demanderCarteDepuisDeckNation(
    carte => carte && inclutCategorie(carte, CATEGORIES.REGION)
  );

  debugLog("DEBUG ERIK | retour demanderCarteDepuisDeckNation =", carteChoisie?.nom || null);

  fermerZoomVerrouille?.();
  fermerZoomTemporaire?.();

  if (!carteChoisie) {
    debugLog("DEBUG ERIK | aucune carte choisie dans deck nation");
    return null;
  }

  const index = deck.indexOf(carteChoisie);

  if (index === -1) {
    debugLog("DEBUG ERIK | carte choisie introuvable dans deck nation");
    return null;
  }

  debugLog("DEBUG ERIK | carte retirée du deck nation =", carteChoisie.nom);
  return deck.splice(index, 1)[0];
}

async function trouverRegionPourErikLeRouge() {
  debugLog("DEBUG ERIK | début trouverRegionPourErikLeRouge");

  fermerZoomVerrouille?.();
  fermerZoomTemporaire?.();

  const regionDefausse = await chercherRegionDansDefaussePourErik();
  debugLog("DEBUG ERIK | après défausse =", regionDefausse?.nom || null);

  if (regionDefausse) {
    return regionDefausse;
  }

  debugLog("DEBUG ERIK | passe à deck joueur");
  melangerDeckJoueur();
  afficherZoneJoueur?.();
  await new Promise(resolve => requestAnimationFrame(resolve));

  const regionDeckJoueur = await chercherRegionDansDeckJoueurPourErik();
  debugLog("DEBUG ERIK | après deck joueur =", regionDeckJoueur?.nom || null);

  if (regionDeckJoueur) {
    return regionDeckJoueur;
  }

  debugLog("DEBUG ERIK | passe à deck nation");
  melangerDeckNationJoueur();
  afficherZoneJoueur?.();
  await new Promise(resolve => requestAnimationFrame(resolve));

  const regionDeckNation = await chercherRegionDansDeckNationPourErik();
  debugLog("DEBUG ERIK | après deck nation =", regionDeckNation?.nom || null);

  if (regionDeckNation) {
    return regionDeckNation;
  }

  debugLog("DEBUG ERIK | aucune région trouvée");
  return null;
}

   async function declencherDrakkarsSiEpeeJouee(carteJouee) {
  if (!carteJouee || carteJouee.pin !== PINS.EPEE) {
    return;
  }

  const drakkars = trouverCarteDansTableauParNom("Drakkars");

  if (!drakkars || drakkars.epuisee) {
    return;
  }

  const confirmer = await confirmerActionOptionnelle(
    "Voulez-vous épuiser Drakkars pour gagner 2 Matériaux ?"
  );

  if (!confirmer) {
    return;
  }

  const succesEpuisement = await epuiserCarte(drakkars);

  if (!succesEpuisement) {
    return;
  }

  gagnerRessource("materiaux", 2);
  afficherZoneJoueur?.();
}

   function drakkarsActif() {
  return passifActifDansTableau("Drakkars");
}

   function peignesActif() {
  return Boolean(jeu.manche?.modificateursTour?.peignesActif);
}

   async function declencherSkisSiRegionJouee(carteJouee) {
  if (!carteJouee || !inclutCategorie(carteJouee, CATEGORIES.REGION)) {
    return;
  }

  const skis = trouverCarteDansTableauParNom("Skis");

  if (!skis || skis.epuisee) {
    return;
  }

  const confirmer = await confirmerActionOptionnelle(
    "Voulez-vous épuiser Skis pour piocher 1 carte ou gagner 2 Matériaux ?"
  );

  if (!confirmer) {
    return;
  }

  const succesEpuisement = await epuiserCarte(skis);

  if (!succesEpuisement) {
    return;
  }

  await executerEffetsCarte({
    effetsCode: [
      {
        type: "choisir",
        options: [
          {
            label: "Piocher 1 carte",
            effets: [
              {
                type: "piocher",
                quantite: 1
              }
            ]
          },
          {
            label: "Gagner 2 Matériaux",
            effets: [
              {
                type: "gagner",
                ressource: "materiaux",
                quantite: 2
              }
            ]
          }
        ]
      }
    ]
  });
}

   

   function melangerDeckJoueur() {
  const deckJoueur = obtenirDeckJoueur();

  if (!Array.isArray(deckJoueur) || deckJoueur.length === 0) {
    return false;
  }

  melanger(deckJoueur);
  afficherZoneJoueur?.();
  return true;
}

   function regarderPremiereCarteDeckJoueur() {
  const deckJoueur = obtenirDeckJoueur();

  if (!Array.isArray(deckJoueur) || deckJoueur.length === 0) {
    ouvrirPanneauUI("Le deck Joueur est vide.", [
      { label: "OK" }
    ]);
    return null;
  }

  return deckJoueur[0];
}

   async function demanderCarteDepuisDeckJoueur(predicateCarte = null) {
  const deckJoueur = obtenirDeckJoueur();

  if (!Array.isArray(deckJoueur) || deckJoueur.length === 0) {
    ouvrirPanneauUI("Aucune carte dans le deck Joueur.", [
      { label: "OK" }
    ]);
    return null;
  }

  return await new Promise(resolve => {
    ouvrirVueDeckJoueur(true, resolve, predicateCarte);
  });
}

   function ouvrirVueDeckJoueur(modeSelection = false, callbackSelection = null, predicateCarte = null) {
  const panneau = getElement("panneau-deck-joueur");
  const contenu = getElement("contenu-deck-joueur");
  debugLog("DEBUG ERIK | ouvrirVueDeckJoueur appelé", {
  modeSelection,
  nbCartesDeck: (obtenirDeckJoueur() || []).length
});

  if (!panneau || !contenu) {
    if (modeSelection && callbackSelection) {
      callbackSelection(null);
    }
    return;
  }

  jeu.ui.deckJoueurOuvert = true;
  jeu.ui.selectionDansDeckJoueurActive = modeSelection;
  jeu.ui.callbackSelectionDansDeckJoueur = modeSelection ? callbackSelection : null;

  contenu.innerHTML = "";

  const cartes = (obtenirDeckJoueur() || []).filter(carte =>
    typeof predicateCarte === "function" ? predicateCarte(carte) : true
  );

  if (cartes.length === 0) {
    contenu.innerHTML = `<div class="message-defausse-vide">Deck Joueur vide.</div>`;
  } else {
    cartes.forEach((carte, index) => {
      const div = document.createElement("div");
      div.className = "carte carte-defausse-mini";
      div.dataset.indexDeckJoueur = String(index);
      div.innerHTML = creerCarteHTML(carte);

      div.addEventListener("mouseenter", () => {
  if (jeu.ui.modeInteraction) {
    return;
  }
  afficherZoomCarteDepuisHTML(div.innerHTML);
});

      div.addEventListener("mouseleave", () => {
  jeu.ui.blocageZoomJusquaMouseleave = false;
  if (jeu.ui.modeInteraction) {
    return;
  }
  if (!jeu.ui.zoomVerrouille && !jeu.ui.regardRenommeeActif) {
    fermerZoomTemporaire();
  }
});

      div.addEventListener("click", () => {
  if (modeSelection) {
    const callback = jeu.ui.callbackSelectionDansDeckJoueur;
    fermerVueDeckJoueur(false);
    if (callback) {
      callback(carte);
    }
    return;
  }

  ouvrirZoomVerrouillePourCarte(carte);
});

      contenu.appendChild(div);
    });
  }
  debugLog("DEBUG ERIK | ouverture visuelle panneau deck joueur");

  panneau.style.display = "flex";
panneau.style.visibility = "visible";
panneau.style.opacity = "1";
panneau.style.zIndex = "9999";
}

function fermerVueDeckJoueur(confirmerAnnulationSelection = true) {
  const panneau = getElement("panneau-deck-joueur");
  const contenu = getElement("contenu-deck-joueur");

  if (!panneau || !contenu) {
    return;
  }

  const etaitEnModeSelection = jeu.ui.selectionDansDeckJoueurActive;
  const callback = jeu.ui.callbackSelectionDansDeckJoueur;

  panneau.style.display = "none";
  contenu.innerHTML = "";

  jeu.ui.deckJoueurOuvert = false;
  jeu.ui.selectionDansDeckJoueurActive = false;
  jeu.ui.callbackSelectionDansDeckJoueur = null;

  if (
    confirmerAnnulationSelection &&
    etaitEnModeSelection &&
    typeof callback === "function"
  ) {
    callback(null);
  }
}

   function obtenirDeckJoueur() {
  return jeu.joueurZones.deckJoueur || [];
}

   async function regarderPremiereCarteDeckNationPuisMelangeOptionnel() {
  debugLog("DEBUG GOTHJA | entrée regarderPremiereCarteDeckNationPuisMelangeOptionnel");

  const carte = obtenirPremiereCarteDeckNation();

  if (!carte) {
    debugLog("DEBUG GOTHJA | aucune carte de deck nation");
    return false;
  }

  return await new Promise(resolve => {
    ouvrirZoomDeckNationAvecChoix(
      carte,
      "Voulez-vous mélanger le deck Nation ?",
      async () => {
        debugLog("DEBUG GOTHJA | clic OUI deck nation");
        melangerDeckNationJoueur();
        afficherZoneJoueur?.();
        fermerZoomDeckNationAvecChoix();
        resolve(true);
      },
      async () => {
        debugLog("DEBUG GOTHJA | clic NON deck nation");
        fermerZoomDeckNationAvecChoix();
        resolve(true);
      }
    );
  });
}

   function melangerDeckNationJoueur() {
  const deckNation = obtenirDeckNationJoueur();

  if (!Array.isArray(deckNation) || deckNation.length === 0) {
    return false;
  }

  melanger(deckNation);
  afficherZoneJoueur?.();
  return true;
}

   function placerPremiereCarteDeckNationAuFond() {
  const deckNation = obtenirDeckNationJoueur();

  if (!Array.isArray(deckNation) || deckNation.length === 0) {
    return false;
  }

  const carte = deckNation.shift();
  deckNation.push(carte);

  afficherZoneJoueur?.();
  return true;
}

   function obtenirPremiereCarteDeckNation() {
  const deckNation = obtenirDeckNationJoueur();

  if (!Array.isArray(deckNation) || deckNation.length === 0) {
    ouvrirPanneauUI("Le deck Nation est vide.", [
      { label: "OK" }
    ]);
    return null;
  }

  return deckNation[0];
}

   async function demanderCarteDepuisDeckNation(predicateCarte = null) {
  const deckNation = obtenirDeckNationJoueur();

  debugLog("DEBUG ERIK | demanderCarteDepuisDeckNation appelé", {
    nbCartesDeckNation: Array.isArray(deckNation) ? deckNation.length : null
  });

  if (!Array.isArray(deckNation) || deckNation.length === 0) {
    debugLog("DEBUG ERIK | demanderCarteDepuisDeckNation -> deck vide");
    ouvrirPanneauUI("Aucune carte dans le deck Nation.", [
      { label: "OK" }
    ]);
    return null;
  }

  return await new Promise(resolve => {
    debugLog("DEBUG ERIK | ouverture vue deck nation");
    ouvrirVueDeckNation(true, valeur => {
      debugLog("DEBUG ERIK | Promise deck nation résolue avec =", valeur?.nom || null);
      resolve(valeur);
    }, predicateCarte);
  });
}

   function ouvrirVueDeckNation(modeSelection = false, callbackSelection = null, predicateCarte = null) {
  const panneau = getElement("panneau-deck-nation");
  const contenu = getElement("contenu-deck-nation");

  if (!panneau || !contenu) {
    if (modeSelection && callbackSelection) {
      callbackSelection(null);
    }
    return;
  }

  fermerZoomVerrouille?.();
  fermerZoomTemporaire?.();

  jeu.ui.deckNationOuvert = true;
  jeu.ui.selectionDansDeckNationActive = modeSelection;
  jeu.ui.callbackSelectionDansDeckNation = modeSelection ? callbackSelection : null;

  contenu.innerHTML = "";

  const cartes = (obtenirDeckNationJoueur() || []).filter(carte =>
    typeof predicateCarte === "function" ? predicateCarte(carte) : true
  );

  if (cartes.length === 0) {
    contenu.innerHTML = `<div class="message-defausse-vide">Deck Nation vide.</div>`;
  } else {
    cartes.forEach((carte, index) => {
      const div = document.createElement("div");
      div.className = "carte carte-defausse-mini";
      div.dataset.indexDeckNation = String(index);
      div.innerHTML = creerCarteHTML(carte);

      div.addEventListener("mouseenter", () => {
  if (jeu.ui.modeInteraction) {
    return;
  }
  afficherZoomCarteDepuisHTML(div.innerHTML);
});

      div.addEventListener("mouseleave", () => {
  jeu.ui.blocageZoomJusquaMouseleave = false;
  if (jeu.ui.modeInteraction) {
    return;
  }
  if (!jeu.ui.zoomVerrouille && !jeu.ui.regardRenommeeActif) {
    fermerZoomTemporaire();
  }
});

      div.addEventListener("click", () => {
        if (modeSelection) {
          const callback = jeu.ui.callbackSelectionDansDeckNation;
          fermerVueDeckNation(false);
          if (callback) {
            callback(carte);
          }
          return;
        }

        ouvrirZoomVerrouillePourCarte(carte);
      });

      contenu.appendChild(div);
    });
  }

 panneau.style.display = "flex";
panneau.style.visibility = "visible";
panneau.style.opacity = "1";
panneau.style.zIndex = "9999";
}

function fermerVueDeckNation(confirmerAnnulationSelection = true) {
  const panneau = getElement("panneau-deck-nation");
  const contenu = getElement("contenu-deck-nation");

  if (!panneau || !contenu) {
    return;
  }

  const etaitEnModeSelection = jeu.ui.selectionDansDeckNationActive;
  const callback = jeu.ui.callbackSelectionDansDeckNation;

  panneau.style.display = "none";
  panneau.style.visibility = "";
  panneau.style.opacity = "";
  panneau.style.pointerEvents = "";
  panneau.style.zIndex = "";
  contenu.innerHTML = "";

  jeu.ui.deckNationOuvert = false;
  jeu.ui.selectionDansDeckNationActive = false;
  jeu.ui.callbackSelectionDansDeckNation = null;

  if (
    confirmerAnnulationSelection &&
    etaitEnModeSelection &&
    typeof callback === "function"
  ) {
    callback(null);
  }
}

   function obtenirZoneArchivageJoueur() {
  return joueurEstVikings()
    ? jeu.joueurZones.defausseJoueur
    : jeu.joueurZones.histoireJoueur;
} 

  function joueurEstVikings() {
  return configurationPartie?.nationJoueur === "Vikings";
}

   function puissanceVikingsActive() {
  return jeu.joueurZones.cartePuissanceVisible?.nom === "Vikings";
}

function obtenirDeckNationVikings() {
  return jeu.joueurZones.pileCroissantJoueur || [];
}

function obtenirDeckNationJoueur() {
  return jeu.joueurZones.pileCroissantJoueur || [];
}

async function declencherVikingsApresRenvoiInstabilite() {
  const cartePuissance = jeu.joueurZones.cartePuissanceVisible;

  if (!cartePuissance || cartePuissance.nom !== "Vikings") {
    return;
  }

  if (cartePuissance.epuisee) {
    return;
  }

  const confirmer = await confirmerActionOptionnelle(
    "Voulez-vous épuiser Vikings pour piocher 2 cartes ?"
  );

  if (!confirmer) {
    return;
  }

  const succesEpuisement = await epuiserCarte(cartePuissance);

  if (!succesEpuisement) {
    return;
  }

  await executerEffetsCarte({
    effetsCode: [
      {
        type: "piocher",
        quantite: 2
      }
    ]
  });
}

async function declencherVikingsApresRecuperationInstabilite() {
  if (!joueurEstVikings()) {
    return;
  }

  await proposerVikingsPlacerCarteDeckNationAuFond();
}

async function declencherVikingsApresRenvoiInstabilite() {
  const cartePuissance = jeu.joueurZones.cartePuissanceVisible;

  if (!cartePuissance || cartePuissance.nom !== "Vikings") {
    return;
  }

  if (cartePuissance.epuisee) {
    return;
  }

  const confirmer = await confirmerActionOptionnelle(
    "Voulez-vous épuiser Vikings pour piocher 2 cartes ?"
  );

  if (!confirmer) {
    return;
  }

  const succesEpuisement = await epuiserCarte(cartePuissance);

  if (!succesEpuisement) {
    return;
  }

  await executerEffetsCarte({
    effetsCode: [
      {
        type: "piocher",
        quantite: 2
      }
    ]
  });
}

   async function demanderCarteDepuisExil(predicateCarte = null) {
  const pileExil = jeu.piles.exil || [];

  if (!Array.isArray(pileExil) || pileExil.length === 0) {
    ouvrirPanneauUI("Aucune carte en exil.", [
      { label: "OK" }
    ]);
    return null;
  }

  return await new Promise(resolve => {
    ouvrirVueExil(true, resolve, predicateCarte);
  });
}

   function retirerCarteDuTableauJoueurVersDefausse(carte) {
  const tableau = jeu.joueurZones.tableauJoueur || [];
  const defausse = jeu.joueurZones.defausseJoueur || [];
  const index = tableau.indexOf(carte);

  if (index === -1) {
    return false;
  }

  const carteRetiree = tableau.splice(index, 1)[0];

  if (Array.isArray(carteRetiree.reservees) && carteRetiree.reservees.length > 0) {
    defausse.push(...carteRetiree.reservees);
    carteRetiree.reservees = [];
  }

  defausse.push(carteRetiree);
  afficherZoneJoueur?.();
  return true;
}

   function carteEstProgres(carte) {
  return carte && carte.nom === "Progrès";
}

   function progresIgnoreStatutBarbare() {
  return passifActifDansTableau("Science");
}

   function carteExileePeutRemplacerZoneMarche(carteExilee, cleZone) {
  if (!carteExilee || !cleZone) {
    return false;
  }

  const estZonePrincipale = cleZone === "zone1" || cleZone === "zone2";

  if (estZonePrincipale) {
    return true;
  }

  const estRegion = inclutCategorie(carteExilee, CATEGORIES.REGION);
  const estTradition = inclutCategorie(carteExilee, CATEGORIES.TRADITION);
  const estCivilise = inclutCategorie(carteExilee, CATEGORIES.CIVILISE);
  const estVassal = inclutCategorie(carteExilee, CATEGORIES.VASSAL);

  // Région -> zone Région
  if (estRegion && cleZone === "zone5") {
    return true;
  }

  // Tradition pure OU hybride Tradition/Civilisé -> zone Tradition
  if (estTradition && cleZone === "zone4") {
    return true;
  }

  // Civilisé pur seulement -> zone Civilisé
  if (
    estCivilise &&
    !estTradition &&
    !estRegion &&
    !estVassal &&
    cleZone === "zone3"
  ) {
    return true;
  }

  return false;
}

   function obtenirCoutsInstabilite() {
  if (!democratieDirecteActive()) {
    return {
      population: 1,
      cartesADefausser: 2,
      materiaux: 3
    };
  }

  return {
    population: 1,          // minimum 1
    cartesADefausser: 1,    // 2 -> 1
    materiaux: 2            // 3 -> 2
  };
}

   function democratieDirecteActive() {
  return passifActifDansTableau("Démocratie directe");
}

   function carteVisiblePeutEtreExilee(carte) {
  if (!carte) {
    return false;
  }

  if (inclutCategorie(carte, "Instabilité")) {
    return false;
  }

  initialiserJetonsCarte(carte);

  const totalJetons =
    (carte.jetons.population || 0) +
    (carte.jetons.materiaux || 0) +
    (carte.jetons.progres || 0);

  const materiauxSurCarte = obtenirMateriauxSurCarteMarche(carte);

  return totalJetons === 0 && materiauxSurCarte === 0;
}

   async function proposerCavalerieDesCompagnonsSiPossible(carteJouee) {
  if (!carteJouee || !inclutCategorie(carteJouee, "Région")) {
    return true;
  }

  const cavalerie = trouverCarteDansTableauParNom("Cavalerie des compagnons");

  if (!cavalerie) {
    return true;
  }

  if (cavalerie.epuisee) {
    return true;
  }

  if (!Array.isArray(cavalerie.epuiserCode) || cavalerie.epuiserCode.length === 0) {
    return true;
  }

  const confirmer = await confirmerActionOptionnelle(
    "Épuiser Cavalerie des compagnons pour piocher 1 carte ?"
  );

  if (!confirmer) {
    return true;
  }

  cavalerie.epuisee = true;
  await piocherCartesJoueur(1);
  afficherZoneJoueur();
  return true;
}

  async function demanderRegionDepuisDefausse() {
  return await demanderCarteDepuisDefausse(carte =>
    !!carte &&
    (
      inclutCategorie(carte, "Région") ||
      carte.categorie === "Région" ||
      categoriePrincipaleCarte(carte) === "Région"
    )
  );
}

   async function jouerCarteAcquiseGratuitement(carte) {
  if (!carte) {
    return false;
  }

  const indexCarte = jeu.joueurZones.mainJoueur.indexOf(carte);

  if (indexCarte === -1) {
    return false;
  }

  return await jouerCarteDepuisMain(indexCarte, { gratuite: true });
}

   async function declencherPassifsMacedoniensEtCavalerieApresRegionDepuisDefausse() {
  if (jeu.joueurZones.cartePuissanceVisible?.nom === "Macédoniens") {
    gagnerRessource("materiaux", 2);
  }

  const cavalerie = trouverCarteDansTableauParNom("Cavalerie des compagnons");
  if (cavalerie && !cavalerie.epuisee) {
    const confirmer = await confirmerActionOptionnelle(
      "Épuiser Cavalerie des compagnons pour piocher 1 carte ?"
    );

    if (confirmer) {
      cavalerie.epuisee = true;
      await piocherCartesJoueur(1);
    }
  }
}

   function joueurPossedeSumeriens() {
  const toutesLesCartes = toutesLesCartesJoueurPourScore();
  return toutesLesCartes.some(carte => carte && carte.nom === "Sumériens");
}

function retirerJusquaDeuxInstabilitesAvecSumeriens() {
  if (jeu.finPartie?.sumeriensResolu) {
    return 0;
  }

  if (!joueurPossedeSumeriens()) {
    jeu.finPartie.sumeriensResolu = true;
    return 0;
  }

  let retirees = 0;

  const retirerDepuisZone = zone => {
    if (!Array.isArray(zone)) {
      return;
    }

    for (let i = zone.length - 1; i >= 0 && retirees < 2; i -= 1) {
      const carte = zone[i];

      if (carte && inclutCategorie(carte, CATEGORIES.INSTABILITE)) {
        const carteRetiree = zone.splice(i, 1)[0];
        jeu.piles.piocheMarcheInstabilite.push(carteRetiree);
        retirees += 1;
      }
    }
  };

  retirerDepuisZone(jeu.joueurZones.mainJoueur);
  retirerDepuisZone(jeu.joueurZones.tableauJoueur);
  retirerDepuisZone(jeu.joueurZones.deckJoueur);
  retirerDepuisZone(jeu.joueurZones.defausseJoueur);
  retirerDepuisZone(jeu.joueurZones.histoireJoueur);
  retirerDepuisZone(jeu.joueurZones.pileEtoileJoueur);
  retirerDepuisZone(jeu.joueurZones.pileCroissantJoueur);

  if (
    retirees < 2 &&
    jeu.joueurZones.cartePleineVisible &&
    inclutCategorie(jeu.joueurZones.cartePleineVisible, CATEGORIES.INSTABILITE)
  ) {
    jeu.piles.piocheMarcheInstabilite.push(jeu.joueurZones.cartePleineVisible);
    jeu.joueurZones.cartePleineVisible = null;
    retirees += 1;
  }

  if (
    retirees < 2 &&
    jeu.joueurZones.cartePuissanceVisible &&
    inclutCategorie(jeu.joueurZones.cartePuissanceVisible, CATEGORIES.INSTABILITE)
  ) {
    jeu.piles.piocheMarcheInstabilite.push(jeu.joueurZones.cartePuissanceVisible);
    jeu.joueurZones.cartePuissanceVisible = null;
    retirees += 1;
  }

  if (
    retirees < 2 &&
    jeu.joueurZones.carteStatutVisible &&
    inclutCategorie(jeu.joueurZones.carteStatutVisible, CATEGORIES.INSTABILITE)
  ) {
    jeu.piles.piocheMarcheInstabilite.push(jeu.joueurZones.carteStatutVisible);
    jeu.joueurZones.carteStatutVisible = null;
    retirees += 1;
  }

  if (retirees > 0) {
    melanger(jeu.piles.piocheMarcheInstabilite);
    afficherZoneJoueur?.();
    afficherBasMarche?.();
    journal(`Sumériens renvoie ${retirees} carte(s) Instabilité avant le décompte final.`);
  }

  jeu.finPartie.sumeriensResolu = true;
  return retirees;
}

   function celtesActif() {
  return (
    jeu.joueurZones.cartePuissanceVisible &&
    jeu.joueurZones.cartePuissanceVisible.nom === "Celtes"
  );
}

async function proposerEpuisementPuissanceCeltesSiTradition(categorie) {
  if (categorie !== "Tradition") {
    return false;
  }

  const carte = jeu.joueurZones?.cartePuissanceVisible;

  if (!celtesActif() || !carte || carte.epuisee) {
    return false;
  }

  const ok = await confirmerActionOptionnelle(
    "Épuiser Celtes ? Si vous le faites, chaque autre joueur récupère 1 Instabilité."
  );

  if (!ok) {
    return false;
  }

  carte.epuisee = true;
  afficherSlotPuissance?.();
  afficherZoneJoueur?.();

  const gagnees = botRecevoirInstabilite(1);
  journal(`Le Bot récupère ${gagnees} carte(s) Instabilité.`);

  afficherZoneBot?.();
  return true;
}

function deplacerCarteEtReserveesVersZone(carte, zoneDestination, position = "fin") {
  if (!carte || !Array.isArray(zoneDestination)) {
    return false;
  }

  const reservees = Array.isArray(carte.reservees) ? [...carte.reservees] : [];
  carte.reservees = [];

  if (position === "debut") {
    zoneDestination.unshift(carte, ...reservees);
  } else {
    zoneDestination.push(carte, ...reservees);
  }

  return true;
}

function rappelerCarteObjetDepuisTableau(carte) {
  if (!carte) {
    return false;
  }

  const tableau = jeu.joueurZones.tableauJoueur || [];
  const indexCarte = tableau.indexOf(carte);

  if (indexCarte === -1) {
    return false;
  }

  const carteRetiree = tableau.splice(indexCarte, 1)[0];

  if (!carteRetiree) {
    return false;
  }

  // 👉 rappel = retour dans la main
  deplacerCarteEtReserveesVersZone(carteRetiree, jeu.joueurZones.mainJoueur, "fin");

  afficherZoneJoueur();
  return true;
}

  function trouverCapDansTableauJoueur() {
  return (jeu.joueurZones.tableauJoueur || []).find(carte => carte?.nom === "Cap");
}

function trouverArchersMontesDansTableauJoueur() {
  return (jeu.joueurZones.tableauJoueur || []).find(
    carte => carte?.nom === "Archers Montés"
  );
}

async function proposerBlocageAvecCap(messageAttaque = "Éviter cette attaque ?") {
  const cap = trouverCapDansTableauJoueur();
  const archersMontes = trouverArchersMontesDansTableauJoueur();

  if (cap) {
    const confirmerCap = await confirmerActionOptionnelle(
      `Rappeler Cap pour éviter cette attaque ? ${messageAttaque}`
    );

    if (confirmerCap) {
      const succesRappel = await rappelerCarteObjetDepuisTableau(cap);

      if (succesRappel) {
        afficherZoneJoueur();
        return true;
      }
    }
  }

  if (archersMontes && !archersMontes.epuisee) {
    const confirmerArchers = await confirmerActionOptionnelle(
      `Épuiser Archers Montés pour éviter cette attaque ? ${messageAttaque}`
    );

    if (confirmerArchers) {
      const succesEpuisement = await epuiserCarte(archersMontes);

      if (succesEpuisement) {
        afficherZoneJoueur();
        return true;
      }
    }
  }

  return false;
}


function fermerZoomCarte(source = "inconnue") {
  debugLog("DEBUG ZOOM | fermerZoomCarte appelé depuis :", source);

  const zoomCarte = getElement("zoom-carte");

  if (!zoomCarte) {
    return;
  }

  zoomCarte.innerHTML = "";
  zoomCarte.style.display = "none";
}

  

   function demanderChoixRegardRenommee(cartes) {
    fermerZoomCarte();
  return new Promise(resolve => {
    jeu.ui.resolveChoixRegardRenommee = resolve;
    ouvrirChoixRegardRenommee(cartes);
  });
}

   function obtenirRegionsExilees() {
  return (jeu.piles.exil || []).filter(carte =>
    carte && inclutCategorie(carte, "Région")
  );
}

   async function acquerirCarteVisibleOuRegionExileeChoisie(categorieChoisie) {
  return await new Promise(resolve => {
    demarrerSelectionMarche({
      message: `Choisissez la carte ${categorieChoisie} à acquérir.`,
      obligatoire: true,
      autoriserExil: true,

      predicate: cleZone => {
        const zonesEligibles = obtenirZonesMarcheAcquerablesPourCategorie(categorieChoisie);
        return Array.isArray(zonesEligibles) && zonesEligibles.includes(cleZone);
      },

      onChoose: async cleZone => {
        const succes = acquerirCarteDansZone(jeu.zonesMarche[cleZone]);

        if (succes) {
          await declencherCeltesSiPossible(categorieChoisie);
        }

        terminerSelectionMarche();
        afficherVue("vue-joueur");
        resolve(!!succes);
      },

      onChooseExil: async () => {
        const succes = await acquerirRegionDepuisExil();

        if (!succes) {
          return;
        }

        terminerSelectionMarche();
        afficherVue("vue-joueur");
        resolve(true);
      },

      onCancel: () => {
        terminerSelectionMarche();
        afficherVue("vue-joueur");
        resolve(false);
      }
    });
  });
}

async function acquerirCarteVisibleOuRegionExileeChoisieAvecRetour(categorieChoisie) {
  return await new Promise(resolve => {
    demarrerSelectionMarche({
      message: `Choisissez la carte ${categorieChoisie} à acquérir.`,
      obligatoire: true,
      autoriserExil: true,

      predicate: cleZone => {
        const zonesEligibles = obtenirZonesMarcheAcquerablesPourCategorie(categorieChoisie);
        return Array.isArray(zonesEligibles) && zonesEligibles.includes(cleZone);
      },

      onChoose: async cleZone => {
        const carteAcquise = acquerirCarteDansZoneAvecRetour(jeu.zonesMarche[cleZone]);

        if (carteAcquise) {
          await declencherCeltesSiPossible(categorieChoisie);
        }

        terminerSelectionMarche();
        afficherVue("vue-joueur");
        resolve(carteAcquise || false);
      },

      onChooseExil: async () => {
        const carteAcquise = await acquerirRegionDepuisExilAvecRetour();

        if (!carteAcquise) {
          return;
        }

        terminerSelectionMarche();
        afficherVue("vue-joueur");
        resolve(carteAcquise);
      },

      onCancel: () => {
        terminerSelectionMarche();
        afficherVue("vue-joueur");
        resolve(false);
      }
    });
  });
}

   function nettoyerSelectionPileExil() {
  const pileExil = getElement("pile-exil");

  if (!pileExil) {
    return;
  }

  pileExil.classList.remove("carte-selectionnable");
  pileExil.onclick = null;
}

   function rendrePileExilSelectionnablePourAcquerirRegion(callbackSucces, callbackAnnuler) {
  const pileExil = getElement("pile-exil");

  if (!pileExil) {
    return;
  }

  pileExil.classList.add("carte-selectionnable");

  pileExil.onclick = async event => {
    event.preventDefault();
    event.stopPropagation();

    const carteChoisie = await new Promise(resolve => {
      ouvrirVueExil(
        true,
        resolve,
        carte => carte && inclutCategorie(carte, "Région")
      );
    });

    if (!carteChoisie) {
      if (callbackAnnuler) {
        callbackAnnuler();
      }
      return;
    }

    const index = (jeu.piles.exil || []).indexOf(carteChoisie);

    if (index === -1) {
      if (callbackAnnuler) {
        callbackAnnuler();
      }
      return;
    }

    const carte = jeu.piles.exil.splice(index, 1)[0];
    jeu.joueurZones.mainJoueur.push(carte);

    afficherPileExil();
    afficherZoneJoueur();

    if (callbackSucces) {
      callbackSucces(carte);
    }
  };
}

   async function acquerirRegionDepuisMarcheOuExilAvecChars() {
  const exilContientRegion = (jeu.piles.exil || []).some(carte =>
    carte && inclutCategorie(carte, "Région")
  );

  const marcheContientRegion = existeCarteAccessiblePourAcquerir(["Région"]);
  const accesExilActif = charsActif() || drakkarsActif();

  if (!marcheContientRegion && !(accesExilActif && exilContientRegion)) {
    ouvrirPanneauUI("Aucune carte Région disponible à acquérir.", [
      { label: "OK" }
    ]);
    return false;
  }

  afficherVue("vue-marche");

  if (marcheContientRegion && !(accesExilActif && exilContientRegion)) {
    const succes = await choisirAcquerirOuInnoverDansCategories("acquerir", ["Région"]);
    afficherVue("vue-joueur");
    return succes;
  }

  if (!marcheContientRegion && accesExilActif && exilContientRegion) {
    const succes = await acquerirRegionDepuisExil();
    afficherVue("vue-joueur");
    return succes;
  }

  const choix = await new Promise(resolve => {
    ouvrirPanneauUI(
      "Choisissez où acquérir la carte Région :",
      [
        {
          label: "Marché",
          callback: () => resolve("marche")
        },
        {
          label: "Exil",
          callback: () => resolve("exil")
        },
        {
          label: "Annuler",
          callback: () => resolve("annuler")
        }
      ]
    );
  });

  if (choix === "annuler" || !choix) {
    afficherVue("vue-joueur");
    return false;
  }

  if (choix === "marche") {
    const succes = await choisirAcquerirOuInnoverDansCategories("acquerir", ["Région"]);
    afficherVue("vue-joueur");
    return succes;
  }

  if (choix === "exil") {
    const succes = await acquerirRegionDepuisExil();
    afficherVue("vue-joueur");
    return succes;
  }

  afficherVue("vue-joueur");
  return false;
}

   async function piocherJusquaAvecChoixEtRafraichissement(maximum, message = null) {
  const quantiteVoulu = await demanderCombienPiocher(
    maximum,
    message || `Combien de cartes voulez-vous piocher ? (0 à ${maximum})`
  );

  if (quantiteVoulu <= 0) {
    return true;
  }

  const cartesPiochees = await piocherCartesJoueur(quantiteVoulu);
  return Array.isArray(cartesPiochees);
}

   async function demanderCombienPiocher(maximum, message = null) {
  const max = Math.max(0, Number(maximum) || 0);

  if (max <= 0) {
    return 0;
  }

  const options = [];

  for (let i = 0; i <= max; i += 1) {
    options.push({
      label: i === 0 ? "0 (ne rien piocher)" : `${i}`
    });
  }

  const indexChoisi = await demanderChoixTexte(
    message || `Combien de cartes voulez-vous piocher ? (0 à ${max})`,
    options
  );

  if (indexChoisi === null) {
    return 0;
  }

  if (indexChoisi < 0 || indexChoisi > max) {
    return 0;
  }

  return indexChoisi;
}

   async function developperCarteDepuisEtoilesAvecSelectionVisuelle(quantite = 1) {
  const cartesEtoiles = obtenirCartesDeveloppablesDepuisDeckNation();

  if (!Array.isArray(cartesEtoiles) || cartesEtoiles.length === 0) {
    ouvrirPanneauUI("Aucune carte Étoile disponible à développer.", [
      { label: "OK" }
    ]);
    return false;
  }

  const cartesAbordables = cartesEtoiles.filter(carte =>
    carte && peutDevelopperCarte(carte)
  );

  if (cartesAbordables.length === 0) {
    ouvrirPanneauUI("Aucune carte Étoile ne peut être développée actuellement.", [
      { label: "OK" }
    ]);
    return false;
  }

  const carteChoisie = await new Promise(resolve => {
    ouvrirVueEtoile(
      true,
      carte => resolve(carte),
      carte => carte && peutDevelopperCarte(carte)
    );
  });

  if (!carteChoisie) {
    return false;
  }

  return await developperCarteObjet(carteChoisie);
}

   function romainsActif() {
  return (
    jeu.joueurZones.cartePuissanceVisible &&
    jeu.joueurZones.cartePuissanceVisible.nom === "Romains"
  );
}

   function trouverCarteCeltesDisponible() {
  return jeu.joueurZones.tableauJoueur.find(carte => {
    initialiserEtatCarte(carte);
    return carte.nom === "Celtes" && carte.epuisee === false;
  }) || null;
}

async function declencherCeltesSiPossible(categorie) {
  if (categorie !== CATEGORIES.TRADITION) {
    return false;
  }

  const carteCeltes = trouverCarteCeltesDisponible();

  if (!carteCeltes) {
    return false;
  }

  const confirmer = await confirmerActionOptionnelle(
    "Épuiser Celtes pour que chaque autre joueur récupère 1 Instabilité ?"
  );

  if (!confirmer) {
    return false;
  }

  carteCeltes.epuisee = true;
  executeursEffets.autresJoueursRecuperentInstabilite({ quantite: 1 });
  afficherZoneJoueur();
  return true;
}

   function declencherCotteDeMaillesSiPossible(carteJouee) {
  if (!carteJouee) {
    return false;
  }

  if (!cotteDeMaillesActive()) {
    return false;
  }

  if (carteJouee.pin !== PINS.EPEE) {
    return false;
  }

  gagnerRessource("progres", 1);
  afficherZoneJoueur();
  return true;
}

   function cotteDeMaillesActive() {
  return passifActifDansTableau("Cotte de mailles");
}

  function demanderRegionDepuisExil() {
  return new Promise(resolve => {
    ouvrirVueExil(
      true,
      resolve,
      carte => inclutCategorie(carte, "Région")
    );
  });
}

 async function acquerirRegionDepuisExil() {
  const carteChoisie = await demanderRegionDepuisExil();

  if (!carteChoisie) {
    return false;
  }

  const pileExil = jeu.piles.exil || [];
  const index = pileExil.indexOf(carteChoisie);

  if (index === -1) {
    return false;
  }

  const carte = pileExil.splice(index, 1)[0];
  jeu.joueurZones.mainJoueur.push(carte);

  if (drakkarsActif()) {
    gagnerRessource("population", 1);
  }

  afficherZoneJoueur();
  afficherBasMarche();
  afficherPileExil();
  return true;
}

async function acquerirRegionDepuisExilAvecRetour() {
  const carteChoisie = await demanderRegionDepuisExil();

  if (!carteChoisie) {
    return false;
  }

  const pileExil = jeu.piles.exil || [];
  const index = pileExil.indexOf(carteChoisie);

  if (index === -1) {
    return false;
  }

  const carte = pileExil.splice(index, 1)[0];
  jeu.joueurZones.mainJoueur.push(carte);

  if (drakkarsActif()) {
    gagnerRessource("population", 1);
  }

  afficherZoneJoueur();
  afficherBasMarche();
  afficherPileExil();
  return carte;
}

function decrireBonusRoiDesRoisSelonFaceEtStatut(carteRoi, statutActuel) {
  const pin = String(carteRoi?.pin || "").trim().toUpperCase();
  const statut = String(statutActuel || "").trim();

  if (pin === "A") {
    if (statut === "Barbare") {
      return "6 Progrès";
    }

    if (statut === "Empire") {
      return "3 Progrès puis développez 1 carte sans payer son coût";
    }
  }

  if (pin === "B") {
    if (statut === "Barbare") {
      return "4 Progrès";
    }

    if (statut === "Empire") {
      return "développez 1 carte sans payer son coût";
    }
  }

  return "aucun bonus spécifique";
}

function construireMessageRoiDesRois(carteRoi, statutActuel) {
  const pin = String(carteRoi?.pin || "").trim().toUpperCase() || "?";
  const bonus = decrireBonusRoiDesRoisSelonFaceEtStatut(carteRoi, statutActuel);
  const messageBase = `Aucune carte Renommée restante. Vous obtenez : ${bonus}.`;

  if (pin === "A") {
    return `${messageBase} Le Décompte est déclenché.`;
  }

  return messageBase;
}

function afficherZoomRoiDesRoisAvecConfirmation(carteRoi, message) {
  return new Promise(resolve => {
    const zoomCarte = getElement("zoom-carte");

    if (!zoomCarte || !carteRoi) {
      resolve(false);
      return;
    }

    jeu.ui.zoomVerrouille = true;
    jeu.ui.sourceZoomVerrouille = "roi-des-rois";
    jeu.ui.timestampOuvertureZoom = Date.now();

    zoomCarte.innerHTML = "";
    zoomCarte.style.display = "block";
    zoomCarte.style.zIndex = "130000";
    zoomCarte.style.pointerEvents = "auto";
    zoomCarte.classList.add("zoom-force-visible");

    const wrapper = document.createElement("div");
    wrapper.className = "zoom-roi-des-rois";

    const messageDiv = document.createElement("div");
    messageDiv.className = "zoom-roi-des-rois-message";
    messageDiv.textContent = message || "Aucune carte Renommée restante.";

    const carteDiv = document.createElement("div");
    carteDiv.className = "carte";
    carteDiv.innerHTML = creerCarteHTML(carteRoi);

    const actionsDiv = document.createElement("div");
    actionsDiv.className = "zoom-roi-des-rois-actions";

    const boutonOk = document.createElement("button");
    boutonOk.type = "button";
    boutonOk.textContent = "OK";
    boutonOk.onclick = event => {
      event.preventDefault();
      event.stopPropagation();

      fermerZoomTemporaireSpecial();
      resolve(true);
    };

    actionsDiv.appendChild(boutonOk);

    wrapper.appendChild(messageDiv);
    wrapper.appendChild(carteDiv);
    wrapper.appendChild(actionsDiv);

    wrapper.addEventListener("click", event => {
      event.stopPropagation();
    });

    zoomCarte.appendChild(wrapper);

    setTimeout(() => {
      boutonOk.focus?.();
    }, 0);
  });
}

   async function piocherOuRegarderRenommeeOuRoiDesRois(quantite = 1, mode = "piocher") {
  if (quantite <= 0) {
    return null;
  }

  const cartesDisponibles = jeu.piles.piocheSecondaireRenommee.length;

  if (cartesDisponibles === 0) {
    await resoudreRoiDesRois();
    return "roi-des-rois";
  }

  if (mode === "piocher" || mode === "regarder") {
    return piger(jeu.piles.piocheSecondaireRenommee);
  }

  return null;
}


   async function resoudreRoiDesRois() {
  const carte = jeu.zonesMarche.roiDesRois;

  if (!carte) {
    return false;
  }

  const statutActuel = jeu.joueurZones.carteStatutVisible?.nom;
  const messageRoi = construireMessageRoiDesRois(carte, statutActuel);
  await afficherZoomRoiDesRoisAvecConfirmation(carte, messageRoi);

  if (carte.pin === "A") {
    if (statutActuel === "Barbare") {
      gagnerRessource("progres", 6);
    } else if (statutActuel === "Empire") {
      gagnerRessource("progres", 3);
      await executeursEffets.developperCarteSansPayer({ quantite: 1 });
    }

    jeu.zonesMarche.roiDesRois = { ...carteRoiDesRois.faceB };

    afficherZoneJoueur();
    afficherHautMarche();

    declencherDecompte();
    return true;
  }

  if (carte.pin === "B") {
    if (statutActuel === "Barbare") {
      gagnerRessource("progres", 4);
    } else if (statutActuel === "Empire") {
      await executeursEffets.developperCarteSansPayer({ quantite: 1 });
    }

    afficherZoneJoueur();
    afficherHautMarche();
    return true;
  }

  return false;
}

  async function resoudreMagnificencePiochee() {
  const cartesPiochees = piocherCartesJoueurSansRafraichir(1);

  afficherZoneJoueur();

  if (!Array.isArray(cartesPiochees) || cartesPiochees.length === 0) {
    ouvrirPanneauUI("Aucune carte à piocher.", [
      { label: "OK" }
    ]);
    return false;
  }

  const cartePiochee = cartesPiochees[0];
  const indexMain = jeu.joueurZones.mainJoueur.indexOf(cartePiochee);

  if (indexMain === -1) {
    return false;
  }

  const indexChoisi = await demanderChoixSurCarteEnZoom(
    cartePiochee,
    `Choisissez quoi faire avec ${cartePiochee.nom} :`,
    [
      { label: "La défausser" },
      { label: "La placer au-dessus du deck" },
      { label: "L'archiver dans votre Histoire" }
    ]
  );

  if (indexChoisi === null) {
    return false;
  }

  const indexMainActuel = jeu.joueurZones.mainJoueur.indexOf(cartePiochee);

  if (indexMainActuel === -1) {
    return false;
  }

  const carte = jeu.joueurZones.mainJoueur.splice(indexMainActuel, 1)[0];

  if (!carte) {
    return false;
  }

  if (indexChoisi === 0) {
    jeu.joueurZones.defausseJoueur.push(carte);
  } else if (indexChoisi === 1) {
    jeu.joueurZones.deckJoueur.unshift(carte);
  } else if (indexChoisi === 2) {
    archiverCarteObjet(carte);
  } else {
    return false;
  }

  afficherZoneJoueur();
  return true;
}

   

   async function demanderCarteInstabiliteDepuisDefausse() {
  const cartesInstabilite = jeu.joueurZones.defausseJoueur.filter(carte =>
    inclutCategorie(carte, CATEGORIES.INSTABILITE)
  );

  if (cartesInstabilite.length === 0) {
    return null;
  }

  return new Promise(resolve => {
    ouvrirVueDefausse(
      true,
      resolve,
      carte => inclutCategorie(carte, CATEGORIES.INSTABILITE)
    );
  });
}

   async function choisirInstabiliteDepuisMainOuDefausse() {
  const main = jeu.joueurZones.mainJoueur;
  const defausse = jeu.joueurZones.defausseJoueur;

  const instabilitesMain = Array.isArray(main)
    ? main.filter(carte => carte && categoriePrincipaleCarte(carte) === CATEGORIES.INSTABILITE)
    : [];

  const instabilitesDefausse = Array.isArray(defausse)
    ? defausse.filter(carte => carte && categoriePrincipaleCarte(carte) === CATEGORIES.INSTABILITE)
    : [];

  const peutChoisirMain = instabilitesMain.length > 0;
  const peutChoisirDefausse = instabilitesDefausse.length > 0;

  if (!peutChoisirMain && !peutChoisirDefausse) {
    return null;
  }

  let zoneChoisie = null;

  if (peutChoisirMain && peutChoisirDefausse) {
    const indexZone = await demanderChoixTexte(
      "Choisissez d'où renvoyer l'Instabilité :",
      [
        { label: "Main" },
        { label: "Défausse" }
      ]
    );

    if (indexZone === null) {
      return null;
    }

    zoneChoisie = indexZone === 0 ? "main" : "defausse";
  } else if (peutChoisirMain) {
    zoneChoisie = "main";
  } else {
    zoneChoisie = "defausse";
  }

  if (zoneChoisie === "main") {
    const carteChoisie = await new Promise(resolve => {
      demarrerSelectionCarte({
        source: "main",
        message: "Choisissez une Instabilité de votre main à renvoyer.",
        obligatoire: true,
        predicate: carte =>
          carte && categoriePrincipaleCarte(carte) === CATEGORIES.INSTABILITE,

        onChoose: async carte => {
          resolve(carte);
        },

        onCancel: () => {
          resolve(null);
        }
      });
    });

    if (!carteChoisie) {
      return null;
    }

    const indexMain = main.indexOf(carteChoisie);

    if (indexMain === -1) {
      return null;
    }

    return {
      zone: "main",
      index: indexMain
    };
  }

  if (zoneChoisie === "defausse") {
    const carteChoisie = await new Promise(resolve => {
      ouvrirVueDefausse(
        true,
        carte => resolve(carte),
        carte => carte && categoriePrincipaleCarte(carte) === CATEGORIES.INSTABILITE
      );
    });

    if (!carteChoisie) {
      return null;
    }

    const indexDefausse = defausse.indexOf(carteChoisie);

    if (indexDefausse === -1) {
      return null;
    }

    return {
      zone: "defausse",
      index: indexDefausse
    };
  }

  return null;
}

   async function choisirCarteDepuisMainOuDefaussePourDon() {
  const main = jeu.joueurZones.mainJoueur;
  const defausse = jeu.joueurZones.defausseJoueur;

  const aCarteEnMain = Array.isArray(main) && main.length > 0;
  const aCarteEnDefausse = Array.isArray(defausse) && defausse.length > 0;

  if (!aCarteEnMain && !aCarteEnDefausse) {
    ouvrirPanneauUI("Vous n'avez aucune carte à donner.", [
      { label: "OK" }
    ]);
    return null;
  }

  let zoneChoisie = null;

  if (aCarteEnMain && aCarteEnDefausse) {
    const indexZone = await demanderChoixTexte(
      "Choisissez d'où donner la carte :",
      [
        { label: "Main" },
        { label: "Défausse" }
      ]
    );

    if (indexZone === null) {
      return null;
    }

    zoneChoisie = indexZone === 0 ? "main" : "defausse";
  } else if (aCarteEnMain) {
    zoneChoisie = "main";
  } else {
    zoneChoisie = "defausse";
  }

  if (zoneChoisie === "main") {
    const carteChoisie = await new Promise(resolve => {
      demarrerSelectionCarte({
        source: "main",
        message: "Choisissez une carte de votre main à donner.",
        obligatoire: true,
        predicate: carte => !!carte,

        onChoose: async carte => {
          resolve(carte);
        },

        onCancel: () => {
          resolve(null);
        }
      });
    });

    if (!carteChoisie) {
      return null;
    }

    const indexMain = main.indexOf(carteChoisie);

    if (indexMain === -1) {
      return null;
    }

    return {
      zone: "main",
      index: indexMain
    };
  }

  if (zoneChoisie === "defausse") {
    const carteChoisie = await new Promise(resolve => {
      ouvrirVueDefausse(
        true,
        carte => resolve(carte),
        carte => !!carte
      );
    });

    if (!carteChoisie) {
      return null;
    }

    const indexDefausse = defausse.indexOf(carteChoisie);

    if (indexDefausse === -1) {
      return null;
    }

    return {
      zone: "defausse",
      index: indexDefausse
    };
  }

  return null;
}

   function compterCartesTableauParTypes(typesCartes = []) {
  if (!Array.isArray(typesCartes) || typesCartes.length === 0) {
    return 0;
  }

  return jeu.joueurZones.tableauJoueur.filter(carte =>
    typesCartes.includes(carte.typeCarte)
  ).length;
}

   function obtenirRegionsDansTableauJoueur() {
  return jeu.joueurZones.tableauJoueur.filter(carte =>
    inclutCategorie(carte, CATEGORIES.REGION)
  );
}

async function reserverSourceSousRegionPuisDeclencherEffetJeu(carteSource, contexte = null) {
  const regionsEligibles = jeu.joueurZones.tableauJoueur.filter(carte =>
    carte && inclutCategorie(carte, "Région")
  );

  if (regionsEligibles.length === 0) {
    ouvrirPanneauUI("Aucune Région dans votre tableau.", [
      { label: "OK" }
    ]);
    return false;
  }

  const regionChoisie = await new Promise(resolve => {
    demarrerSelectionCarte({
      source: "tableau",
      message: "Choisissez une Région sous laquelle réserver Cataphractaire.",
      obligatoire: true,
      predicate: carte =>
        carte && inclutCategorie(carte, "Région"),

      onChoose: async carte => {
        resolve(carte);
      },

      onCancel: () => {
        resolve(null);
      }
    });
  });

  if (!regionChoisie || !carteSource) {
    return false;
  }

  const indexMain = jeu.joueurZones.mainJoueur.indexOf(carteSource);

  if (indexMain !== -1) {
    jeu.joueurZones.mainJoueur.splice(indexMain, 1);
  }

  if (!regionChoisie.reservees) {
    regionChoisie.reservees = [];
  }

  regionChoisie.reservees.push(carteSource);

  if (contexte) {
    contexte.carteSourceDejaDeplacee = true;
  }

  await executerEffetsCarte(regionChoisie);

  afficherZoneJoueur();
  return true;
}

   

   function trouverCapDisponible() {
  return jeu.joueurZones.tableauJoueur.find(carte => {
    initialiserEtatCarte(carte);
    return carte.nom === "Cap";
  }) || null;
}

async function proposerAnnulationEffetEpee() {
  const cap = trouverCapDisponible();

  if (!cap) {
    return false;
  }

  const confirmer = await confirmerActionOptionnelle(
    "Rappeler Cap pour éviter les effets d’une épée ?"
  );

  if (!confirmer) {
    return false;
  }

  const succes = abandonnerCarteObjet(cap);

  if (!succes) {
    return false;
  }

  return true;
}

  async function archiverCarteDepuisDefausse() {
  const defausse = jeu.joueurZones.defausseJoueur;

  if (!Array.isArray(defausse) || defausse.length === 0) {
    ouvrirPanneauUI("Aucune carte dans votre défausse.", [
      { label: "OK" }
    ]);
    return false;
  }

  const carteChoisie = await demanderCarteDepuisDefausse();

  if (!carteChoisie) {
    return false;
  }

  const index = defausse.indexOf(carteChoisie);

  if (index === -1) {
    return false;
  }

  const carte = defausse.splice(index, 1)[0];
  const zoneArchivage = obtenirZoneArchivageJoueur();

  zoneArchivage.push(carte);

  afficherZoneJoueur();
  return true;
}

   async function regarderPremiereCarteDeckNation() {
  const carteDessus = voirDessus(jeu.joueurZones.pileCroissantJoueur);

  if (!carteDessus) {
    ouvrirPanneauUI("Votre deck Nation est vide.", [
      { label: "OK" }
    ]);
    return false;
  }

  await revelerCarteAuCentre(carteDessus, 3600);
  return true;
}

async function abandonnerSourcePuisEchangerPremiereCarteDeckNationAvecMain(carteSource) {
  if (!carteSource) {
    return false;
  }

  const deckNation = jeu.joueurZones.pileCroissantJoueur;
  const main = jeu.joueurZones.mainJoueur;

  if (!Array.isArray(deckNation) || deckNation.length === 0) {
    ouvrirPanneauUI("Votre deck Nation est vide.", [
      { label: "OK" }
    ]);
    return false;
  }

  if (!Array.isArray(main) || main.length === 0) {
    ouvrirPanneauUI("Vous n'avez aucune carte en main à échanger.", [
      { label: "OK" }
    ]);
    return false;
  }

  const carteDessus = voirDessus(deckNation);

  if (!carteDessus) {
    ouvrirPanneauUI("Votre deck Nation est vide.", [
      { label: "OK" }
    ]);
    return false;
  }

  await revelerCarteAuCentre(carteDessus, 3600);

  return await new Promise(resolve => {
    demarrerSelectionCarte({
      source: "main",
      message: `Choisissez une carte de votre main à échanger avec ${carteDessus.nom}.`,
      obligatoire: false,
      predicate: () => true,

      onChoose: async carteChoisie => {
        const succesAbandon = abandonnerCarteObjet(carteSource);

        if (!succesAbandon) {
          resolve(false);
          return;
        }

        const indexMain = jeu.joueurZones.mainJoueur.indexOf(carteChoisie);

        if (indexMain === -1) {
          resolve(false);
          return;
        }

        const carteMain = jeu.joueurZones.mainJoueur.splice(indexMain, 1)[0];
        const carteNation = deckNation.shift();

        if (!carteNation) {
          jeu.joueurZones.mainJoueur.splice(indexMain, 0, carteMain);
          resolve(false);
          return;
        }

        jeu.joueurZones.mainJoueur.push(carteNation);
        deckNation.unshift(carteMain);

        afficherZoneJoueur();
        resolve(true);
      },

      onCancel: () => {
        resolve(false);
      }
    });
  });
}

async function recupererCarteDepuisDefausseVersDeck() {
  const defausse = jeu.joueurZones.defausseJoueur;

  if (!Array.isArray(defausse) || defausse.length === 0) {
    return false;
  }

  const carteChoisie = await demanderCarteDepuisDefausse();

  if (!carteChoisie) {
    return false;
  }

  const index = defausse.indexOf(carteChoisie);

  if (index === -1) {
    return false;
  }

  const carte = defausse.splice(index, 1)[0];
  jeu.joueurZones.deckJoueur.unshift(carte);

  afficherZoneJoueur();
  return true;
}
   async function choisirCarteVisibleDuMarcheAExiler() {
  const zonesDisponibles = getZonesMarche().filter(zone => {
    const carte = zone?.[0];
    return carteVisiblePeutEtreExilee(carte);
  });

  if (zonesDisponibles.length === 0) {
    return null;
  }

  const indexChoisi = await demanderChoixTexte(
    "Choisissez une carte du Marché à exiler :",
    zonesDisponibles.map(zone => ({ label: zone[0].nom }))
  );

  if (indexChoisi === null) {
    return null;
  }

  if (indexChoisi < 0 || indexChoisi >= zonesDisponibles.length) {
    ouvrirPanneauUI("Choix invalide.", [
      { label: "OK" }
    ]);
    return null;
  }

  return zonesDisponibles[indexChoisi];
}

  async function resoudreOraclePiocherDeuxPuisDefausserUne() {
  fermerZoomVerrouille();
  fermerZoomTemporaire();

  const cartesPiochees = await piocherCartesJoueur(2);
  afficherZoneJoueur();

  if (!Array.isArray(cartesPiochees) || cartesPiochees.length === 0) {
    return true;
  }

  if (cartesPiochees.length === 1) {
    const carteUnique = cartesPiochees[0];
    const indexMainUnique = jeu.joueurZones.mainJoueur.indexOf(carteUnique);

    if (indexMainUnique === -1) {
      return false;
    }

    const carteRetiree = jeu.joueurZones.mainJoueur.splice(indexMainUnique, 1)[0];
    jeu.joueurZones.defausseJoueur.push(carteRetiree);

    afficherZoneJoueur();
    return true;
  }

  await new Promise(resolve => requestAnimationFrame(resolve));

  const indexChoisi = await demanderChoixParmiCartesEnZoom(
    cartesPiochees,
    "Choisissez laquelle des cartes piochées défausser :"
  );

  if (indexChoisi === null) {
    return false;
  }

  if (indexChoisi < 0 || indexChoisi >= cartesPiochees.length) {
    ouvrirPanneauUI("Choix invalide.", [{ label: "OK" }]);
    return false;
  }

  const carteADefausser = cartesPiochees[indexChoisi];
  const indexMain = jeu.joueurZones.mainJoueur.indexOf(carteADefausser);

  if (indexMain === -1) {
    return false;
  }

  const carteRetiree = jeu.joueurZones.mainJoueur.splice(indexMain, 1)[0];
  jeu.joueurZones.defausseJoueur.push(carteRetiree);

  afficherZoneJoueur();
  return true;
}

async function recupererUneInstabilite() {
  if (verifierEffondrement()) {
    return false;
  }

  const carteInstabilite = piger(jeu.piles.piocheMarcheInstabilite);

  if (!carteInstabilite) {
    verifierEffondrement();
    ouvrirPanneauUI("Aucune carte Instabilité disponible.", [
      { label: "OK" }
    ]);
    return false;
  }

  jeu.joueurZones.mainJoueur.push(carteInstabilite);
  afficherZoneJoueur();
  afficherBasMarche();
  await declencherVikingsApresRecuperationInstabilite();

  if (verifierEffondrement()) {
    return false;
  }

  return true;
}
  async function recupererCarteChoisieDepuisDefausse() {
  const defausse = jeu.joueurZones.defausseJoueur;

  if (!Array.isArray(defausse) || defausse.length === 0) {
    ouvrirPanneauUI("Aucune carte dans votre défausse.", [
      { label: "OK" }
    ]);
    return false;
  }

  const carteChoisie = await demanderCarteDepuisDefausse();

  if (!carteChoisie) {
    return false;
  }

  const indexDefausse = jeu.joueurZones.defausseJoueur.indexOf(carteChoisie);

  if (indexDefausse === -1) {
    return false;
  }

  const carte = jeu.joueurZones.defausseJoueur.splice(indexDefausse, 1)[0];
  jeu.joueurZones.mainJoueur.push(carte);

  afficherZoneJoueur();
  return true;
}

   function existeInstabiliteDansDefausse() {
  return jeu.joueurZones.defausseJoueur.some(
    carte => categoriePrincipaleCarte(carte) === CATEGORIES.INSTABILITE
  );
}

   async function gagnerMateriauxDepuisEau(quantite = 1) {
  if (quantite <= 0) {
    return;
  }

  gagnerRessource("materiaux", quantite);
  afficherZoneJoueur();

  for (let i = 0; i < quantite; i += 1) {
    const chadoufDisponible = trouverChadoufDisponible();

    if (!chadoufDisponible) {
      break;
    }

    await proposerDeclenchementChadouf();
  }
}
   function declencherChadoufSiPossible() {
  const chadouf = trouverChadoufDisponible();

  if (!chadouf) {
    return false;
  }

  chadouf.epuisee = true;
  gagnerRessource("progres", 1);
  afficherZoneJoueur();
  return true;
}

function compterEauxDansTableauJoueur() {
  return compterTagsRegionDansTableauJoueur("Eau");
}

async function proposerDeclenchementChadouf() {
  const chadouf = trouverChadoufDisponible();

  if (!chadouf) {
    return false;
  }

  const confirmer = await confirmerActionOptionnelle(
    "Épuiser Chadouf pour gagner 1 Progrès ?"
  );

  if (!confirmer) {
    return false;
  }

  chadouf.epuisee = true;
  gagnerRessource("progres", 1);
  afficherZoneJoueur();
  return true;
}

function trouverChadoufDisponible() {
  return jeu.joueurZones.tableauJoueur.find(carte => {
    initialiserEtatCarte(carte);
    return carte.nom === "Chadouf" && carte.epuisee === false;
  }) || null;
}
   function agricultureEstActive() {
  return Boolean(jeu.manche?.modificateursTour?.agricultureActive);
}

function compterSacsEffectifsDansTableauJoueur() {
  let total = 0;
  let bonusBleAgricultureAccorde = false;

  jeu.joueurZones.tableauJoueur.forEach(carte => {
    if (!Array.isArray(carte.typeRegion)) {
      return;
    }

    carte.typeRegion.forEach(tag => {
      if (tag === "Sac") {
        total += 1;
      }

      if (
        tag === "Blé" &&
        agricultureEstActive() &&
        !bonusBleAgricultureAccorde
      ) {
        total += 3;
        bonusBleAgricultureAccorde = true;
      }
    });
  });

  return total;
}

function compterTagsRegionDansTableauJoueur(tagRecherche) {
  if (!tagRecherche) {
    return 0;
  }

  let total = 0;
  let bonusBleAgricultureAccorde = false;

  jeu.joueurZones.tableauJoueur.forEach(carte => {
    if (!Array.isArray(carte.typeRegion)) {
      return;
    }

    carte.typeRegion.forEach(tag => {
      if (tag === tagRecherche) {
        total += 1;
      }

      if (
        tagRecherche === "Sac" &&
        tag === "Blé" &&
        agricultureEstActive() &&
        !bonusBleAgricultureAccorde
      ) {
        total += 3;
        bonusBleAgricultureAccorde = true;
      }
    });
  });

  return total;
}

function carteEstDansPileInstabilite(carte) {
  if (!carte) {
    return false;
  }

  return jeu.piles.piocheMarcheInstabilite.includes(carte);
}

async function renvoyerInstabiliteDepuisMain(options = {}) {
  const afficherMessageNonBloquant = options?.afficherMessageNonBloquant === true;
  const messageNonBloquant = options?.messageNonBloquant || "Choisissez une Instabilité à renvoyer.";
  let panneauNonBloquantOuvert = false;

  const main = jeu.joueurZones.mainJoueur;

  if (!Array.isArray(main) || main.length === 0) {
    ouvrirPanneauUI("Aucune carte dans votre main.", [
      { label: "OK" }
    ]);
    return false;
  }

  const presenceInstabilite = main.some(
    carte => categoriePrincipaleCarte(carte) === CATEGORIES.INSTABILITE
  );

  if (!presenceInstabilite) {
    ouvrirPanneauUI("Aucune carte Instabilité dans votre main.", [
      { label: "OK" }
    ]);
    return false;
  }

  if (afficherMessageNonBloquant) {
    ouvrirPanneauChoixMarcheSelection(messageNonBloquant, true, {
      afficherBouton: false
    });
    panneauNonBloquantOuvert = true;
  }

  const carteChoisie = await new Promise(resolve => {
    demarrerSelectionCarte({
      source: "main",
      message: "Choisissez une Instabilité à renvoyer depuis votre main :",
      obligatoire: true,
      afficherPanneau: !afficherMessageNonBloquant,
      predicate: carte =>
        categoriePrincipaleCarte(carte) === CATEGORIES.INSTABILITE,
      onChoose: async carte => {
        resolve(carte);
      },
      onCancel: () => {
        resolve(null);
      }
    });
  });

  if (panneauNonBloquantOuvert) {
    fermerPanneauChoixMarcheSelection();
  }

  if (!carteChoisie) {
    return false;
  }

  const indexChoisi = main.indexOf(carteChoisie);

  if (indexChoisi === -1) {
    return false;
  }

  const carte = main.splice(indexChoisi, 1)[0];

  jeu.piles.piocheMarcheInstabilite.push(carte);
  melanger(jeu.piles.piocheMarcheInstabilite);

  afficherZoneJoueur();
  afficherBasMarche();

  await declencherVikingsApresRenvoiInstabilite();
  return true;
}

async function renvoyerInstabiliteDepuisDefausse() {
  const defausse = jeu.joueurZones.defausseJoueur;

  const cartesInstabilite = defausse.filter(carte =>
    carte && categoriePrincipaleCarte(carte) === CATEGORIES.INSTABILITE
  );

  if (cartesInstabilite.length === 0) {
    ouvrirPanneauUI("Aucune carte Instabilité dans votre défausse.", [
      { label: "OK" }
    ]);
    return false;
  }

  const carteChoisie = await new Promise(resolve => {
    ouvrirVueDefausse(
      true,
      carte => resolve(carte),
      carte => carte && categoriePrincipaleCarte(carte) === CATEGORIES.INSTABILITE
    );
  });

  if (!carteChoisie) {
    return false;
  }

  const indexCarte = defausse.indexOf(carteChoisie);

  if (indexCarte === -1) {
    return false;
  }

  const carte = defausse.splice(indexCarte, 1)[0];

  jeu.piles.piocheMarcheInstabilite.push(carte);
  melanger(jeu.piles.piocheMarcheInstabilite);

  afficherZoneJoueur();
  afficherBasMarche();
  
  await declencherVikingsApresRenvoiInstabilite();
  return true;
}

async function demanderChoixCarteDansDefausse(message, predicate = null) {
  const defausse = jeu.joueurZones.defausseJoueur;

  if (!Array.isArray(defausse) || defausse.length === 0) {
    ouvrirPanneauUI("Votre défausse est vide.", [
      { label: "OK" }
    ]);
    return null;
  }

  return await new Promise(resolve => {
    const panneau = getElement("panneau-defausse");
    const titre = panneau ? panneau.querySelector(".titre-defausse") : null;
    const contenu = getElement("contenu-defausse");

    if (!panneau || !contenu) {
      resolve(null);
      return;
    }

    if (titre) {
      titre.textContent = message || "Choisissez une carte dans votre défausse.";
    }

    contenu.innerHTML = "";
    panneau.style.display = "flex";

    const cartesCliquables = [];

    function nettoyerEtResoudre(valeur) {
      cartesCliquables.forEach(({ element, handler }) => {
        element.removeEventListener("click", handler);
      });

      panneau.style.display = "none";
      contenu.innerHTML = "";
      resolve(valeur);
    }

    defausse.forEach((carte, index) => {
      if (!carte) {
        return;
      }

     const divCarte = document.createElement("div");

if (typeof creerCarteHTML === "function") {
  divCarte.innerHTML = creerCarteHTML(carte);
}

const vraieCarte = divCarte.querySelector(".carte");
if (vraieCarte) {
  vraieCarte.classList.add("carte-defausse-mini");
}

      const estValide = typeof predicate === "function" ? predicate(carte) : true;

      if (!estValide) {
        divCarte.style.opacity = "0.35";
        divCarte.style.pointerEvents = "none";
      } else {
        const handler = event => {
          event.preventDefault();
          event.stopPropagation();
          nettoyerEtResoudre(index);
        };

        divCarte.addEventListener("click", handler);
        cartesCliquables.push({ element: divCarte, handler });
      }

      contenu.appendChild(divCarte);
    });

    const btnFermer = panneau.querySelector(".btn-fermer-defausse");

    if (btnFermer) {
      btnFermer.onclick = () => {
        nettoyerEtResoudre(null);
      };
    }
  });
}
   

   function carteEstConquete(carte) {
  if (!carte) {
    return false;
  }

  return carte.nom === "Conquête";
}

function inclutCategorie(carte, categorie) {
  return Boolean(carte?.categorie?.includes(categorie));
}

function estCategorieExacte(carte, categorie) {
  return Boolean(carte?.categorie === categorie);
}

function creerJetonsVides() {
  return {
    population: 0,
    materiaux: 0,
    progres: 0
  };
}

function normaliserCarte(carte) {
  return {
    ...carte,
    jetons: carte.jetons || creerJetonsVides(),
    reservees: Array.isArray(carte.reservees) ? carte.reservees : []
  };
}

function clonerListeCartes(cartes = []) {
  return cartes.map(normaliserCarte);
}

/* =========================================================
   4) HELPERS DECK / PIOCHE
   ========================================================= */

function melanger(deck = []) {
  for (let i = deck.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  return deck;
}

function piger(deck) {
  if (!Array.isArray(deck) || deck.length === 0) {
    return null;
  }

  return deck.shift() ?? null;
}

function voirDessus(deck) {
  if (!Array.isArray(deck) || deck.length === 0) {
    return null;
  }

  return deck[0] ?? null;
}

function ajouterPlusieursCartes(source, destination, quantite) {
  for (let i = 0; i < quantite; i += 1) {
    const carte = piger(source);

    if (!carte) {
      break;
    }

    destination.push(carte);
  }
}

/* =========================================================
   5) HELPERS DOM / UI
   ========================================================= */

function getElement(id) {
  return document.getElementById(id);
}

function setHTML(id, html) {
  const element = getElement(id);

  if (!element) {
    return null;
  }

  element.innerHTML = html;
  return element;
}

function avertir(message) {
  ouvrirPanneauUI(message, [
    { label: "OK" }
  ]);
}

/* =========================================================
   6) HELPERS DEBUG
   ========================================================= */

   function debugAfficherPiocheDynastieBot() {
  debugLog("=== PIOCHE DYNASTIE BOT ===");
  (etatBot.piocheDynastie || []).forEach((carte, index) => {
    debugLog(
      index,
      carte.nom,
      "| localisation =", carte.localisationDepart,
      "| PV =", carte.pointsVictoire
    );
  });
}

  function debugPasserEnBarbare() {
  jeu.joueurZones.carteStatutVisible = { ...carteStatutJoueur.faceA };

  afficherZoneJoueur();
  afficherHautMarche();
  afficherBasMarche();

  ouvrirPanneauUI("DEBUG : joueur passé en Barbare.", [
    { label: "OK" }
  ]);
}

   function debugPasserEnEmpire() {
  passerJoueurEnEmpire();

  // Sécurité : réinitialiser certains états de tour
  jeu.joueurZones.pileRafraichissementNationEpuisee = false;

  afficherZoneJoueur();
  afficherHautMarche();
  afficherBasMarche();

  avertir("DEBUG : joueur passé en Empire.");
}

   function appliquerBoostDebugJoueur() {
  jeu.joueur.population += 5;
  jeu.joueur.materiaux += 5;
  jeu.joueur.progres += 5;
  jeu.joueur.actions += 5;

  reinitialiserEpuisementJoueur();

  afficherZoneJoueur();
}

   let debugCarteSelectionnee = null;

function obtenirToutesLesCartesDebug() {
  const groupes = [
    cartesCommunes,
    cartesNations
  ];

  const toutes = [];

  groupes.forEach(groupe => {
    if (Array.isArray(groupe)) {
      groupe.forEach(carte => {
        toutes.push(carte);
      });
    }
  });

  return toutes;
}

function clonerCartePourJeu(carte) {
  return normaliserCarte(JSON.parse(JSON.stringify(carte)));
}

function rechercherCartesDebug(texte) {
  const recherche = (texte || "").trim().toLowerCase();

  if (!recherche) {
    return [];
  }

  return obtenirToutesLesCartesDebug().filter(carte =>
    (carte.nom || "").toLowerCase().includes(recherche)
  );
}

function afficherResultatsDebugCartes(resultats) {
  const conteneur = getElement("debug-resultats-cartes");

  if (!conteneur) {
    return;
  }

  conteneur.innerHTML = "";
  debugCarteSelectionnee = null;

  if (!Array.isArray(resultats) || resultats.length === 0) {
    conteneur.innerHTML = `<div>Aucune carte trouvée.</div>`;
    return;
  }

  resultats.forEach(carte => {
    const div = document.createElement("div");
    div.className = "debug-carte-resultat";
    div.innerHTML = `
      <strong>${carte.nom}</strong><br>
      <span>${carte.categorie || "Aucune"} | ${carte.nation || "Aucune"} | ${carte.localisationDepart || "Aucune"}</span>
    `;

    div.addEventListener("click", () => {
      [...conteneur.querySelectorAll(".debug-carte-resultat")].forEach(el => {
        el.classList.remove("debug-selectionnee");
      });

      div.classList.add("debug-selectionnee");
      debugCarteSelectionnee = carte;
    });

    conteneur.appendChild(div);
  });
}

function ajouterCarteDebugALaMain() {
  if (!debugCarteSelectionnee) {
    ouvrirPanneauUI("Aucune carte sélectionnée.", [
      { label: "OK" }
    ]);
    return;
  }

  const copie = clonerCartePourJeu(debugCarteSelectionnee);
  jeu.joueurZones.mainJoueur.push(copie);
  afficherZoneJoueur();
}

function initialiserDebugCartes() {
  const input = getElement("debug-recherche-carte");
  const btnRecherche = getElement("debug-btn-rechercher");
  const btnAjouter = getElement("debug-btn-ajouter-main");
  const btnBoost = getElement("debug-btn-boost");
  const btnEmpire = getElement("debug-btn-empire");
  const btnBarbare = getElement("debug-btn-barbare");

if (btnEmpire) {
  btnEmpire.addEventListener("click", () => {
    debugPasserEnEmpire();
  });
}

if (btnBarbare) {
  btnBarbare.addEventListener("click", () => {
    debugPasserEnBarbare();
  });
}

  if (!input || !btnRecherche || !btnAjouter) {
    return;
  }

  btnRecherche.addEventListener("click", () => {
    const resultats = rechercherCartesDebug(input.value);
    afficherResultatsDebugCartes(resultats);
  });

  input.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      const resultats = rechercherCartesDebug(input.value);
      afficherResultatsDebugCartes(resultats);
    }
  });

  btnAjouter.addEventListener("click", () => {
    ajouterCarteDebugALaMain();
  });

  if (btnBoost) {
    btnBoost.addEventListener("click", () => {
      appliquerBoostDebugJoueur();
    });
  }
}

function journal(...args) {
  debugLog(...args);
}

const DEBUG_LOGS = false;

function debugLog(...args) {
  if (!DEBUG_LOGS) {
    return;
  }

  console.log(...args);
}

/* =========================================================
   7) ÉTAT CENTRAL DU JEU
   ========================================================= */

const jeu = {
  manche: {
    phase: PHASES.TOUR,
    numero: 1,
    tailleMain: 5,
     modificateursTour: {
      agricultureActive: false
    }
  },

  finPartie: {
  terminee: false,
  raison: "",
  resultat: "",
   decompteDeclenche: false,
  mancheDeclenchementDecompte: null,
  annonceDecompteAccusee: false
  
},

  joueur: {
    actions: 3,
    epuisement: 5,
    population: 2,
    materiaux: 3,
    progres: 1
  },

  piles: {
    tradition: [],
    civilise: [],
    region: [],
    vassal: [],
    renommee: [],
    instabilite: [],
    exil: [],

    nationBase: [],
    nationCroissant: [],
    nationPleine: [],
    nationEtoile: [],

    piochePrincipale: [],
    piocheSecondaireCivilise: [],
    piocheSecondaireTradition: [],
    piocheSecondaireRegion: [],
    piocheSecondaireRenommee: [],
    piocheMarcheInstabilite: []
  },

  zonesMarche: {
    zone1: [],
    zone2: [],
    zone3: [],
    zone4: [],
    zone5: [],
    roiDesRois: null
  },

  joueurZones: {
    carteStatutVisible: null,
    cartePuissanceVisible: null,
    cartePleineVisible: null,

    pileEtoileJoueur: [],
    pileCroissantJoueur: [],
    deckJoueur: [],

    tableauJoueur: [],
    mainJoueur: [],
    defausseJoueur: [],
    histoireJoueur: [],

    pileRafraichissementNationEpuisee: false,
    pileEtoileEpuisee: false,
  },

  ui: {
    selectionRedressementActive: false,
    cartesEligiblesRedressement: [],
    callbackSelectionRedressement: null,
    optionSpecialeDebutTourDisponible: true,
    optionSpecialeDebutTourChoisie: false,
    choixProgresMarcheActif: false,
    resolveChoixRegardRenommee: null,
    

    regardRenommeeActif: false,
    cartesRegardRenommee: [],

    zoomVerrouille: false,
    sourceZoomVerrouille: null,
    

    actionMarcheEnAttente: null,

  selectionDansDefausseActive: false,
  callbackSelectionDansDefausse: null,
    defausseOuverte: false,
    callbackPanneauEtoile: null,
    menuEchapOuvert: false,
    panneauUIOuvert: false,
    blocageZoomJusquaMouseleave: false,
    ignorerProchainClicFermetureZoom: false,
    timestampOuvertureZoom: 0,
    delaiBlocageFermetureZoom: 250,

    selectionCarteActive: false,
  selectionCarteSource: null,
  selectionCarteMessage: "",
  selectionCartePredicate: null,
  selectionCarteOnChoose: null,
  selectionCarteOnCancel: null,
  selectionCarteObligatoire: false,

  selectionMarcheActive: false,
  selectionMarcheMessage: "",
  selectionMarchePredicate: null,
  selectionMarcheOnChoose: null,
  selectionMarcheOnCancel: null,
  selectionMarcheObligatoire: false,

  solsticeActif: false,
  solsticeCartesTraitees: [],
  modeInteraction: null,

  histoireOuverte: false,
selectionDansHistoireActive: false,
callbackSelectionDansHistoire: null,

  miniTutorielActif: false,
  miniTutorielTermine: false,
  miniTutorielMasque: false,
  miniTutorielToursTermines: 0,
  miniTutorielCarteJoueeTour: false,
  miniTutorielBotLanceTour: false,
  miniTutorielDerniereManche: 1,
  miniTutorielIntroTermine: false,
  miniTutorielEtapeScript: 0,
  
  }
  
};

/* =========================================================
   8) ACCÈS RAPIDE AUX ZONES DU MARCHÉ
   ========================================================= */

const CLE_SAUVEGARDE_PARTIE = "imperium-save-v2";
const VERSION_SAUVEGARDE_PARTIE = 2;
const CLES_CARTE_CODE_RESTAUREES = new Set([
  "effetsCode",
  "epuiserCode",
  "solsticeCode",
  "conditionEpuiser"
]);

let cacheTemplatesSauvegardeCartes = null;

function copierStructureAvecFonctions(valeur) {
  if (Array.isArray(valeur)) {
    return valeur.map(item => copierStructureAvecFonctions(item));
  }

  if (!valeur || typeof valeur !== "object") {
    return valeur;
  }

  const copie = {};
  Object.keys(valeur).forEach(cle => {
    copie[cle] = copierStructureAvecFonctions(valeur[cle]);
  });
  return copie;
}

function obtenirTemplatesCartesSauvegarde() {
  return [
    ...(Array.isArray(cartesCommunes) ? cartesCommunes : []),
    ...(Array.isArray(cartesNations) ? cartesNations : []),
    carteRoiDesRois?.faceA,
    carteRoiDesRois?.faceB,
    carteStatutJoueur?.faceA,
    carteStatutJoueur?.faceB
  ].filter(Boolean);
}

function obtenirIndexTemplatesCartesSauvegarde() {
  if (cacheTemplatesSauvegardeCartes) {
    return cacheTemplatesSauvegardeCartes;
  }

  const index = new Map();
  const templates = obtenirTemplatesCartesSauvegarde();

  templates.forEach(carte => {
    const templateId = carte?.templateId;
    if (typeof templateId !== "string" || templateId.trim() === "") {
      return;
    }

    if (!index.has(templateId)) {
      index.set(templateId, carte);
    }
  });

  cacheTemplatesSauvegardeCartes = index;
  return index;
}

function trouverTemplateCarteSauvegarde(carteSauvegardee) {
  if (!carteSauvegardee || typeof carteSauvegardee !== "object") {
    return null;
  }

  const templateId = carteSauvegardee.templateId;
  if (typeof templateId !== "string" || templateId.trim() === "") {
    return null;
  }

  return obtenirIndexTemplatesCartesSauvegarde().get(templateId) || null;
}

function rehydraterListeCartesSauvegardees(cartes = []) {
  if (!Array.isArray(cartes)) {
    return [];
  }

  return cartes
    .map(carte => rehydraterCarteSauvegardee(carte))
    .filter(Boolean);
}

function rehydraterCarteSauvegardee(carteSauvegardee) {
  if (!carteSauvegardee || typeof carteSauvegardee !== "object") {
    return null;
  }

  const template = trouverTemplateCarteSauvegarde(carteSauvegardee);
  if (!template) {
    const nomCarte = carteSauvegardee.nom || "(sans nom)";
    const templateId = carteSauvegardee.templateId || "(absent)";
    throw new Error(`Template introuvable pour "${nomCarte}" (templateId: ${templateId}).`);
  }

  const baseTemplate = copierStructureAvecFonctions(template);
  const copieSauvegardee = copierStructureAvecFonctions(carteSauvegardee);

  CLES_CARTE_CODE_RESTAUREES.forEach(cle => {
    if (cle in copieSauvegardee) {
      delete copieSauvegardee[cle];
    }
  });

  const reserveesSource = Array.isArray(carteSauvegardee.reservees)
    ? carteSauvegardee.reservees
    : [];

  delete copieSauvegardee.reservees;

  const carteRehydratee = normaliserCarte({
    ...baseTemplate,
    ...copieSauvegardee
  });

  carteRehydratee.reservees = rehydraterListeCartesSauvegardees(reserveesSource);
  carteRehydratee.jetons = {
    population: Number(carteRehydratee.jetons?.population || 0),
    materiaux: Number(carteRehydratee.jetons?.materiaux || 0),
    progres: Number(carteRehydratee.jetons?.progres || 0)
  };

  if (typeof carteSauvegardee.epuisee === "boolean") {
    carteRehydratee.epuisee = carteSauvegardee.epuisee;
  }

  return carteRehydratee;
}

function estObjetCartePourSauvegarde(valeur) {
  if (!valeur || typeof valeur !== "object") {
    return false;
  }

  return (
    "templateId" in valeur ||
    "nom" in valeur ||
    "categorie" in valeur ||
    "jetons" in valeur ||
    "reservees" in valeur
  );
}

function validerCarteAvantSauvegarde(carte, chemin, indexTemplates, erreurs) {
  const nom = carte?.nom || "(sans nom)";
  const templateId = carte?.templateId;

  if (typeof templateId !== "string" || templateId.trim() === "") {
    erreurs.push(`${chemin}: templateId manquant (${nom})`);
    return;
  }

  if (!indexTemplates.has(templateId)) {
    erreurs.push(`${chemin}: templateId inconnu "${templateId}" (${nom})`);
  }
}

function parcourirStructureCartesPourSauvegarde(valeur, chemin, indexTemplates, erreurs, visites) {
  if (valeur == null) {
    return;
  }

  if (Array.isArray(valeur)) {
    valeur.forEach((item, index) => {
      parcourirStructureCartesPourSauvegarde(item, `${chemin}[${index}]`, indexTemplates, erreurs, visites);
    });
    return;
  }

  if (typeof valeur !== "object") {
    return;
  }

  if (visites.has(valeur)) {
    return;
  }
  visites.add(valeur);

  if (estObjetCartePourSauvegarde(valeur)) {
    validerCarteAvantSauvegarde(valeur, chemin, indexTemplates, erreurs);

    if (Array.isArray(valeur.reservees)) {
      valeur.reservees.forEach((carteReservee, index) => {
        parcourirStructureCartesPourSauvegarde(
          carteReservee,
          `${chemin}.reservees[${index}]`,
          indexTemplates,
          erreurs,
          visites
        );
      });
    }
    return;
  }

  Object.keys(valeur).forEach(cle => {
    parcourirStructureCartesPourSauvegarde(
      valeur[cle],
      `${chemin}.${cle}`,
      indexTemplates,
      erreurs,
      visites
    );
  });
}

function validerIntegriteCartesAvantSauvegarde() {
  const indexTemplates = obtenirIndexTemplatesCartesSauvegarde();
  const erreurs = [];
  const visites = new Set();

  const racines = [
    { chemin: "jeu.piles", valeur: jeu.piles },
    { chemin: "jeu.zonesMarche", valeur: jeu.zonesMarche },
    { chemin: "jeu.joueurZones", valeur: jeu.joueurZones },
    { chemin: "etatBot", valeur: etatBot }
  ];

  racines.forEach(({ chemin, valeur }) => {
    parcourirStructureCartesPourSauvegarde(valeur, chemin, indexTemplates, erreurs, visites);
  });

  if (erreurs.length > 0) {
    const maxErreursAffichees = 8;
    const erreursAffichees = erreurs.slice(0, maxErreursAffichees);
    const reste = erreurs.length - erreursAffichees.length;
    const suffixe = reste > 0 ? `\n... ${reste} autre(s) erreur(s)` : "";
    throw new Error(`Validation cartes avant sauvegarde échouée:\n${erreursAffichees.join("\n")}${suffixe}`);
  }
}

function lireSauvegardeLocalePartie() {
  try {
    const brut = localStorage.getItem(CLE_SAUVEGARDE_PARTIE);
    if (!brut) {
      return null;
    }

    return JSON.parse(brut);
  } catch (erreur) {
    console.error("Erreur lecture sauvegarde :", erreur);
    return null;
  }
}

function sauvegardePartieDisponible() {
  return !!lireSauvegardeLocalePartie();
}

function mettreAJourDisponibiliteBoutonsSauvegarde() {
  const disponible = sauvegardePartieDisponible();

  const boutonCharger = getElement("btn-charger-partie");
  if (boutonCharger) {
    boutonCharger.disabled = !disponible;
    boutonCharger.classList.toggle("bouton-inactif", !disponible);
  }

  const boutonReprendre = getElement("btn-reprendre-sauvegarde");
  if (boutonReprendre) {
    boutonReprendre.disabled = !disponible;
    boutonReprendre.classList.toggle("bouton-inactif", !disponible);
  }
}

function creerSnapshotSauvegardePartie() {
  return {
    version: VERSION_SAUVEGARDE_PARTIE,
    dateSauvegarde: new Date().toISOString(),
    configurationPartie: JSON.parse(JSON.stringify(configurationPartie || {})),
    jeu: JSON.parse(JSON.stringify({
      manche: jeu.manche,
      finPartie: jeu.finPartie,
      joueur: jeu.joueur,
      piles: jeu.piles,
      zonesMarche: jeu.zonesMarche,
      joueurZones: jeu.joueurZones,
      ui: {
        optionSpecialeDebutTourDisponible: jeu.ui.optionSpecialeDebutTourDisponible,
        optionSpecialeDebutTourChoisie: jeu.ui.optionSpecialeDebutTourChoisie,
        choixProgresMarcheActif: jeu.ui.choixProgresMarcheActif,
        miniTutorielActif: !!jeu.ui.miniTutorielActif,
        miniTutorielTermine: !!jeu.ui.miniTutorielTermine,
        miniTutorielMasque: !!jeu.ui.miniTutorielMasque,
        miniTutorielToursTermines: Number(jeu.ui.miniTutorielToursTermines || 0),
        miniTutorielCarteJoueeTour: !!jeu.ui.miniTutorielCarteJoueeTour,
        miniTutorielBotLanceTour: !!jeu.ui.miniTutorielBotLanceTour,
        miniTutorielDerniereManche: Number(jeu.ui.miniTutorielDerniereManche || 1),
        miniTutorielIntroTermine: !!jeu.ui.miniTutorielIntroTermine,
        miniTutorielEtapeScript: Number(jeu.ui.miniTutorielEtapeScript || 0)
      }
    })),
    etatBot: JSON.parse(JSON.stringify(etatBot))
  };
}

function appliquerConfigurationPartieSauvegardee(configurationSauvee = {}) {
  if (!configurationSauvee || typeof configurationSauvee !== "object") {
    return;
  }

  configurationPartie = {
    ...configurationPartie,
    ...configurationSauvee
  };
  configurationPartie.difficulteBot = normaliserDifficulteBot(configurationPartie.difficulteBot);

  const selectNationJoueur = getElement("choix-nation-joueur");
  const selectNationBot = getElement("choix-nation-bot");
  const selectDifficulteBot = getElement("choix-difficulte-bot");
  const optionMiniTutoriel = getElement("option-mini-tutoriel");

  if (selectNationJoueur && configurationPartie.nationJoueur) {
    selectNationJoueur.value = configurationPartie.nationJoueur;
  }

  if (selectNationBot && configurationPartie.nationBot) {
    selectNationBot.value = configurationPartie.nationBot;
  }

  if (selectDifficulteBot) {
    selectDifficulteBot.value = configurationPartie.difficulteBot;
    if (typeof selectDifficulteBot.onchange === "function") {
      selectDifficulteBot.onchange();
    }
  }

  if (optionMiniTutoriel) {
    optionMiniTutoriel.checked = !!configurationPartie.miniTutoriel;
    if (typeof optionMiniTutoriel.onchange === "function") {
      optionMiniTutoriel.onchange();
    }
  }

}

function reinitialiserEtatUIApresChargement(uiSauve = {}) {
  jeu.ui.selectionRedressementActive = false;
  jeu.ui.cartesEligiblesRedressement = [];
  jeu.ui.callbackSelectionRedressement = null;

  jeu.ui.optionSpecialeDebutTourDisponible =
    uiSauve.optionSpecialeDebutTourDisponible !== false;
  jeu.ui.optionSpecialeDebutTourChoisie =
    !!uiSauve.optionSpecialeDebutTourChoisie;

  jeu.ui.choixProgresMarcheActif =
    jeu.manche.phase === PHASES.NETTOYAGE_CHOIX_PROGRES ||
    !!uiSauve.choixProgresMarcheActif;

  jeu.ui.resolveChoixRegardRenommee = null;
  jeu.ui.regardRenommeeActif = false;
  jeu.ui.cartesRegardRenommee = [];

  jeu.ui.zoomVerrouille = false;
  jeu.ui.sourceZoomVerrouille = null;
  jeu.ui.actionMarcheEnAttente = null;

  jeu.ui.selectionDansDefausseActive = false;
  jeu.ui.callbackSelectionDansDefausse = null;
  jeu.ui.defausseOuverte = false;
  jeu.ui.callbackPanneauEtoile = null;
  jeu.ui.menuEchapOuvert = false;
  jeu.ui.panneauUIOuvert = false;
  jeu.ui.blocageZoomJusquaMouseleave = false;
  jeu.ui.ignorerProchainClicFermetureZoom = false;
  jeu.ui.timestampOuvertureZoom = 0;

  jeu.ui.selectionCarteActive = false;
  jeu.ui.selectionCarteSource = null;
  jeu.ui.selectionCarteMessage = "";
  jeu.ui.selectionCartePredicate = null;
  jeu.ui.selectionCarteOnChoose = null;
  jeu.ui.selectionCarteOnCancel = null;
  jeu.ui.selectionCarteObligatoire = false;

  jeu.ui.selectionMarcheActive = false;
  jeu.ui.selectionMarcheMessage = "";
  jeu.ui.selectionMarchePredicate = null;
  jeu.ui.selectionMarcheOnChoose = null;
  jeu.ui.selectionMarcheOnCancel = null;
  jeu.ui.selectionMarcheObligatoire = false;
  jeu.ui.selectionMarcheAutoriserExil = false;
  jeu.ui.selectionMarcheOnChooseExil = null;

  jeu.ui.solsticeActif = jeu.manche.phase === PHASES.SOLSTICE;
  jeu.ui.solsticeCartesTraitees = [];
  jeu.ui.modeInteraction = null;

  jeu.ui.histoireOuverte = false;
  jeu.ui.selectionDansHistoireActive = false;
  jeu.ui.callbackSelectionDansHistoire = null;

  jeu.ui.miniTutorielActif = !!uiSauve.miniTutorielActif;
  jeu.ui.miniTutorielTermine = !!uiSauve.miniTutorielTermine;
  jeu.ui.miniTutorielMasque = !!uiSauve.miniTutorielMasque;
  jeu.ui.miniTutorielToursTermines = Number(uiSauve.miniTutorielToursTermines || 0);
  jeu.ui.miniTutorielCarteJoueeTour = !!uiSauve.miniTutorielCarteJoueeTour;
  jeu.ui.miniTutorielBotLanceTour = !!uiSauve.miniTutorielBotLanceTour;
  jeu.ui.miniTutorielDerniereManche = Number(
    uiSauve.miniTutorielDerniereManche || jeu.manche.numero || 1
  );
  jeu.ui.miniTutorielIntroTermine = !!uiSauve.miniTutorielIntroTermine;
  jeu.ui.miniTutorielEtapeScript = Number(uiSauve.miniTutorielEtapeScript || 0);
  miniTutorielDerniereEtapeScriptRendue = -1;
}

function appliquerSauvegardePartie(snapshot) {
  const jeuSauve = snapshot?.jeu || {};
  const pilesSauvees = jeuSauve.piles || {};
  const zonesSauvees = jeuSauve.zonesMarche || {};
  const zonesJoueurSauvees = jeuSauve.joueurZones || {};
  const botSauve = snapshot?.etatBot || {};

  appliquerConfigurationPartieSauvegardee(snapshot?.configurationPartie || {});

  jeu.manche = {
    ...jeu.manche,
    ...(jeuSauve.manche || {})
  };

  jeu.finPartie = {
    ...jeu.finPartie,
    ...(jeuSauve.finPartie || {})
  };

  jeu.joueur = {
    ...jeu.joueur,
    ...(jeuSauve.joueur || {})
  };

  const clesPiles = [
    "tradition",
    "civilise",
    "region",
    "vassal",
    "renommee",
    "instabilite",
    "exil",
    "nationBase",
    "nationCroissant",
    "nationPleine",
    "nationEtoile",
    "piochePrincipale",
    "piocheSecondaireCivilise",
    "piocheSecondaireTradition",
    "piocheSecondaireRegion",
    "piocheSecondaireRenommee",
    "piocheMarcheInstabilite"
  ];

  clesPiles.forEach(cle => {
    jeu.piles[cle] = rehydraterListeCartesSauvegardees(pilesSauvees[cle]);
  });

  jeu.zonesMarche.zone1 = rehydraterListeCartesSauvegardees(zonesSauvees.zone1);
  jeu.zonesMarche.zone2 = rehydraterListeCartesSauvegardees(zonesSauvees.zone2);
  jeu.zonesMarche.zone3 = rehydraterListeCartesSauvegardees(zonesSauvees.zone3);
  jeu.zonesMarche.zone4 = rehydraterListeCartesSauvegardees(zonesSauvees.zone4);
  jeu.zonesMarche.zone5 = rehydraterListeCartesSauvegardees(zonesSauvees.zone5);
  jeu.zonesMarche.roiDesRois = rehydraterCarteSauvegardee(zonesSauvees.roiDesRois);

  jeu.joueurZones.carteStatutVisible = rehydraterCarteSauvegardee(zonesJoueurSauvees.carteStatutVisible);
  jeu.joueurZones.cartePuissanceVisible = rehydraterCarteSauvegardee(zonesJoueurSauvees.cartePuissanceVisible);
  jeu.joueurZones.cartePleineVisible = rehydraterCarteSauvegardee(zonesJoueurSauvees.cartePleineVisible);
  jeu.joueurZones.pileEtoileJoueur = rehydraterListeCartesSauvegardees(zonesJoueurSauvees.pileEtoileJoueur);
  jeu.joueurZones.pileCroissantJoueur = rehydraterListeCartesSauvegardees(zonesJoueurSauvees.pileCroissantJoueur);
  jeu.joueurZones.deckJoueur = rehydraterListeCartesSauvegardees(zonesJoueurSauvees.deckJoueur);
  jeu.joueurZones.tableauJoueur = rehydraterListeCartesSauvegardees(zonesJoueurSauvees.tableauJoueur);
  jeu.joueurZones.mainJoueur = rehydraterListeCartesSauvegardees(zonesJoueurSauvees.mainJoueur);
  jeu.joueurZones.defausseJoueur = rehydraterListeCartesSauvegardees(zonesJoueurSauvees.defausseJoueur);
  jeu.joueurZones.histoireJoueur = rehydraterListeCartesSauvegardees(zonesJoueurSauvees.histoireJoueur);
  jeu.joueurZones.pileRafraichissementNationEpuisee = !!zonesJoueurSauvees.pileRafraichissementNationEpuisee;
  jeu.joueurZones.pileEtoileEpuisee = !!zonesJoueurSauvees.pileEtoileEpuisee;

  etatBot.nation = botSauve.nation || etatBot.nation;
  etatBot.statut = botSauve.statut || etatBot.statut;
  etatBot.population = Number(botSauve.population || 0);
  etatBot.materiaux = Number(botSauve.materiaux || 0);
  etatBot.progres = Number(botSauve.progres || 0);
  etatBot.deckCiv = rehydraterListeCartesSauvegardees(botSauve.deckCiv);
  etatBot.defausse = rehydraterListeCartesSauvegardees(botSauve.defausse);
  etatBot.piocheDynastie = rehydraterListeCartesSauvegardees(botSauve.piocheDynastie);
  etatBot.histoire = rehydraterListeCartesSauvegardees(botSauve.histoire);
  etatBot.tableau = rehydraterListeCartesSauvegardees(botSauve.tableau);
  etatBot.cartePuissance = rehydraterCarteSauvegardee(botSauve.cartePuissance);
  etatBot.carteMiseDeCote = rehydraterCarteSauvegardee(botSauve.carteMiseDeCote);
  etatBot.emplacements = {
    1: rehydraterCarteSauvegardee(botSauve.emplacements?.["1"] ?? botSauve.emplacements?.[1]),
    2: rehydraterCarteSauvegardee(botSauve.emplacements?.["2"] ?? botSauve.emplacements?.[2]),
    3: rehydraterCarteSauvegardee(botSauve.emplacements?.["3"] ?? botSauve.emplacements?.[3]),
    4: rehydraterCarteSauvegardee(botSauve.emplacements?.["4"] ?? botSauve.emplacements?.[4]),
    5: rehydraterCarteSauvegardee(botSauve.emplacements?.["5"] ?? botSauve.emplacements?.[5]),
    6: rehydraterCarteSauvegardee(botSauve.emplacements?.["6"] ?? botSauve.emplacements?.[6])
  };

  reinitialiserEtatUIApresChargement(jeuSauve.ui || {});

  botUI.fileEtapes = [];
  botUI.animationEnCours = false;
  botUI.cartesSurlignees = [];
  botUI.resoudreEtapeSuivante = null;
  botUI.emplacementsReveles = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false
  };

  botAppliquerContraintesEmplacementsSelonDifficulte();

  tourBotEnCours = false;
}

function determinerVueApresChargement() {
  if (jeu.finPartie?.terminee) {
    return "vue-joueur";
  }

  if (jeu.manche.phase === "attente-tour-bot") {
    return "vue-bot";
  }

  if (jeu.ui.choixProgresMarcheActif || jeu.manche.phase === PHASES.NETTOYAGE_CHOIX_PROGRES) {
    return "vue-marche";
  }

  return "vue-joueur";
}

function sauvegarderPartie({ silencieux = false, origine = "manuel" } = {}) {
  try {
    validerIntegriteCartesAvantSauvegarde();

    const snapshot = creerSnapshotSauvegardePartie();
    localStorage.setItem(CLE_SAUVEGARDE_PARTIE, JSON.stringify(snapshot));
    mettreAJourDisponibiliteBoutonsSauvegarde();

    if (!silencieux) {
      ouvrirPanneauUI("Partie sauvegardée.", [{ label: "OK" }]);
    } else {
      journal(`Sauvegarde automatique (${origine}) effectuee.`);
    }

    return true;
  } catch (erreur) {
    console.error("Erreur sauvegarde :", erreur);

    if (!silencieux) {
      ouvrirPanneauUI("Impossible de sauvegarder la partie.", [{ label: "OK" }]);
    }

    return false;
  }
}

function chargerPartieSauvegardee({ silencieux = false } = {}) {
  const snapshot = lireSauvegardeLocalePartie();

  if (!snapshot) {
    if (!silencieux) {
      ouvrirPanneauUI("Aucune sauvegarde trouvee.", [{ label: "OK" }]);
    }
    return false;
  }

  if (snapshot.version !== VERSION_SAUVEGARDE_PARTIE) {
    if (!silencieux) {
      ouvrirPanneauUI("Cette sauvegarde est incompatible avec la version actuelle.", [{ label: "OK" }]);
    }
    return false;
  }

  try {
    appliquerSauvegardePartie(snapshot);
    reinitialiserFeedbackCompteursJoueur();

    afficherUIPartie();
    document.getElementById("barre-navigation-vues")?.classList.remove("ui-cachee");

    afficherHautMarche();
    afficherBarreIndicateurs();
    afficherBasMarche();
    afficherZoneJoueur();
    afficherPileExil();
    afficherZoneBot?.();

    const phase = jeu?.manche?.phase;
    definirEtatBoutonTourBot(phase === "attente-tour-bot");
    mettreAJourBoutonsPhaseJoueur();

    if (jeu.finPartie?.terminee) {
      if (jeu.finPartie.resultat === "score") {
        afficherEcranScoreFinal();
      } else {
        afficherEcranFinDePartie();
      }
    } else {
      afficherVue(determinerVueApresChargement());
    }

    mettreAJourDisponibiliteBoutonsSauvegarde();
    miniTutorielSynchroniser();

    if (!silencieux) {
      ouvrirPanneauUI("Partie chargée.", [{ label: "OK" }]);
    }

    return true;
  } catch (erreur) {
    console.error("Erreur chargement sauvegarde :", erreur);

    if (!silencieux) {
      ouvrirPanneauUI("Impossible de charger la sauvegarde.", [{ label: "OK" }]);
    }

    return false;
  }
}

function reprendrePartieSauvegardee() {
  return chargerPartieSauvegardee();
}

function getZonesMarche() {
  return [
    jeu.zonesMarche.zone1,
    jeu.zonesMarche.zone2,
    jeu.zonesMarche.zone3,
    jeu.zonesMarche.zone4,
    jeu.zonesMarche.zone5
  ];
}

function getZoneParNom(nom) {
  return jeu.zonesMarche[nom] ?? null;
}

const CONFIG_ZONES_MARCHE = {
  zone1: {
    categorieZone: "Principale",
    piocheSecondaire: null
  },

  zone2: {
    categorieZone: "Principale",
    piocheSecondaire: null
  },

  zone3: {
    categorieZone: CATEGORIES.CIVILISE,
    piocheSecondaire: () => jeu.piles.piocheSecondaireCivilise
  },

  zone4: {
    categorieZone: CATEGORIES.TRADITION,
    piocheSecondaire: () => jeu.piles.piocheSecondaireTradition
  },

  zone5: {
    categorieZone: CATEGORIES.REGION,
    piocheSecondaire: () => jeu.piles.piocheSecondaireRegion
  }
};

function getZoneConfig(zone) {
  const nomZone = Object.keys(jeu.zonesMarche).find(
    key => jeu.zonesMarche[key] === zone
  );

  if (!nomZone) {
    return { categorieZone: "", piocheSecondaire: null };
  }

  const config = CONFIG_ZONES_MARCHE[nomZone];

  return {
    categorieZone: config.categorieZone,
    piocheSecondaire: typeof config.piocheSecondaire === "function"
      ? config.piocheSecondaire()
      : config.piocheSecondaire
  };
}

/* =========================================================
   9) INITIALISATION DES DONNÉES
   ========================================================= */

function initialiserPilesCommunes() {
  jeu.piles.tradition = melanger(
    clonerListeCartes(
      cartesCommunes.filter(carte => inclutCategorie(carte, CATEGORIES.TRADITION))
    )
  );

  jeu.piles.civilise = melanger(
    clonerListeCartes(
      cartesCommunes.filter(carte => estCategorieExacte(carte, CATEGORIES.CIVILISE))
    )
  );

  jeu.piles.region = melanger(
    clonerListeCartes(
      cartesCommunes.filter(carte => inclutCategorie(carte, CATEGORIES.REGION))
    )
  );

  jeu.piles.vassal = melanger(
    clonerListeCartes(
      cartesCommunes.filter(carte => inclutCategorie(carte, CATEGORIES.VASSAL))
    )
  );

  jeu.piles.renommee = melanger(
    clonerListeCartes(
      cartesCommunes.filter(carte => inclutCategorie(carte, CATEGORIES.RENOMMEE))
    )
  );

  jeu.piles.instabilite = clonerListeCartes(
    cartesCommunes.filter(carte => inclutCategorie(carte, CATEGORIES.INSTABILITE))
  );
}

function viderPilesNation() {
  jeu.piles.nationBase = [];
  jeu.piles.nationCroissant = [];
  jeu.piles.nationPleine = [];
  jeu.piles.nationEtoile = [];
  jeu.piles.nationPuissance = null;
}

function construirePilesNation() {
  viderPilesNation();

  const nomNationJoueur = configurationPartie.nationJoueur;

  clonerListeCartes(cartesNations).forEach(carte => {
    if (!carte) {
      return;
    }

    if (carte.nation !== nomNationJoueur) {
      return;
    }

    switch (carte.localisationDepart) {
      case "Base":
        jeu.piles.nationBase.push(carte);
        break;

      case "Croissant":
        jeu.piles.nationCroissant.push(carte);
        break;

      case "Pleine":
        jeu.piles.nationPleine.push(carte);
        break;

      case "Étoile":
      case "Etoile":
        jeu.piles.nationEtoile.push(carte);
        break;

      case "Puissance":
        jeu.piles.nationPuissance = carte;
        break;
    }
  });

  melanger(jeu.piles.nationBase);
  melanger(jeu.piles.nationCroissant);
  melanger(jeu.piles.nationEtoile);
}

function viderPiochesMarche() {
  jeu.piles.piochePrincipale = [];
  jeu.piles.piocheSecondaireCivilise = [];
  jeu.piles.piocheSecondaireTradition = [];
  jeu.piles.piocheSecondaireRegion = [];
  jeu.piles.piocheSecondaireRenommee = [];
}

function construireHautMarche() {
  viderPiochesMarche();

  ajouterPlusieursCartes(jeu.piles.vassal, jeu.piles.piochePrincipale, 8);
  ajouterPlusieursCartes(jeu.piles.civilise, jeu.piles.piochePrincipale, 6);
  ajouterPlusieursCartes(jeu.piles.tradition, jeu.piles.piochePrincipale, 12);
  ajouterPlusieursCartes(jeu.piles.region, jeu.piles.piochePrincipale, 7);

  melanger(jeu.piles.piochePrincipale);

  ajouterPlusieursCartes(jeu.piles.civilise, jeu.piles.piocheSecondaireCivilise, 6);
  ajouterPlusieursCartes(jeu.piles.tradition, jeu.piles.piocheSecondaireTradition, 6);
  ajouterPlusieursCartes(jeu.piles.region, jeu.piles.piocheSecondaireRegion, 6);
  ajouterPlusieursCartes(jeu.piles.renommee, jeu.piles.piocheSecondaireRenommee, 6);

  jeu.zonesMarche.roiDesRois = { ...carteRoiDesRois.faceA };
}

function construireBasMarche() {
  // Initialise la pile Instabilité active du marché à partir du stock de départ.
  jeu.piles.piocheMarcheInstabilite = [];
  ajouterPlusieursCartes(jeu.piles.instabilite, jeu.piles.piocheMarcheInstabilite, 8);
}

function viderZonesBasMarche() {
  getZonesMarche().forEach(zone => {
    zone.length = 0;
  });
}

function reinitialiserZonesJoueur() {
  jeu.joueurZones.mainJoueur = [];
  jeu.joueurZones.defausseJoueur = [];
  jeu.joueurZones.tableauJoueur = [];
  jeu.joueurZones.histoireJoueur = [];
  jeu.joueurZones.pileRafraichissementNationEpuisee = false;
  jeu.joueurZones.pileEtoileEpuisee = false;
}

function construireZoneJoueurNation() {
  jeu.joueurZones.carteStatutVisible = { ...carteStatutJoueur.faceA };
  jeu.joueurZones.cartePuissanceVisible = jeu.piles.nationPuissance
    ? normaliserCarte(jeu.piles.nationPuissance)
    : null;

  jeu.joueurZones.pileEtoileJoueur = [...jeu.piles.nationEtoile];
  jeu.joueurZones.pileCroissantJoueur = [...jeu.piles.nationCroissant];
  jeu.joueurZones.deckJoueur = [...jeu.piles.nationBase];
  jeu.joueurZones.cartePleineVisible = jeu.piles.nationPleine[0] || null;

  reinitialiserZonesJoueur();

  for (let i = 0; i < jeu.manche.tailleMain; i += 1) {
    const cartePiochee = piger(jeu.joueurZones.deckJoueur);

    if (!cartePiochee) {
      break;
    }

    jeu.joueurZones.mainJoueur.push(cartePiochee);
  }
}

function aBesoinInstabilite(carte) {
  if (!carte) {
    return false;
  }

  return (
    !inclutCategorie(carte, CATEGORIES.REGION) &&
    !inclutCategorie(carte, CATEGORIES.INSTABILITE)
  );
}

function ajouterInstabiliteSiNecessaire(zone, cartePrincipale) {
  if (!zone || !cartePrincipale || !aBesoinInstabilite(cartePrincipale)) {
    return;
  }

  const carteInstabilite = piger(jeu.piles.piocheMarcheInstabilite);

  if (carteInstabilite) {
    zone.push(carteInstabilite);
  }

    verifierEffondrement();
  
}

function peuplerBasMarche() {
  viderZonesBasMarche();

  const tirages = [
    { zone: jeu.zonesMarche.zone1, carte: piger(jeu.piles.piochePrincipale) },
    { zone: jeu.zonesMarche.zone2, carte: piger(jeu.piles.piochePrincipale) },
    { zone: jeu.zonesMarche.zone3, carte: piger(jeu.piles.piocheSecondaireCivilise) },
    { zone: jeu.zonesMarche.zone4, carte: piger(jeu.piles.piocheSecondaireTradition) },
    { zone: jeu.zonesMarche.zone5, carte: piger(jeu.piles.piocheSecondaireRegion) }
  ];

  tirages.forEach(({ zone, carte }) => {
    if (carte) {
      zone.push(carte);

      if (!carte.jetons) {
        carte.jetons = {
          population: 0,
          materiaux: 0,
          progres: 0
        };
      }

      const categorie = String(carte.categorie || "");
      if (categorie.includes("Civilisé") && !categorie.includes("Tradition")) {
        carte.jetons.progres = 1;
      }
    }

    ajouterInstabiliteSiNecessaire(zone, carte);
  });
}

/* =========================================================
   10) HELPERS CARTES / ÉTAT DES CARTES
   ========================================================= */

   function restaurerCarteDansMainDepuisDefausse(carte) {
  if (!carte) {
    return false;
  }

  const defausse = jeu.joueurZones.defausseJoueur || [];
  const indexCarte = defausse.lastIndexOf(carte);

  if (indexCarte === -1) {
    return false;
  }

  defausse.splice(indexCarte, 1);
  jeu.joueurZones.mainJoueur.push(carte);
  afficherZoneJoueur();
  return true;
}

   function existeInstabiliteDansMain() {
  return (jeu.joueurZones.mainJoueur || []).some(
    carte => carte && categoriePrincipaleCarte(carte) === CATEGORIES.INSTABILITE
  );
}

   function passifActifDansTableau(nomCarte) {
  if (!nomCarte) {
    return false;
  }

  return jeu.joueurZones.tableauJoueur.some(carte => carte.nom === nomCarte);
}

function initialiserJetonsCarte(carte) {
  if (!carte) {
    return;
  }

  if (!carte.jetons) {
    carte.jetons = creerJetonsVides();
  }
}

function initialiserReserveCarte(carte) {
  if (!carte) {
    return;
  }

  if (!Array.isArray(carte.reservees)) {
    carte.reservees = [];
  }
}

function carteEstPersistante(carte) {
  return carte?.pin === PINS.PERSISTANTE;
}

function estActionGratuite(carte) {
  if (!carte?.effet) {
    return false;
  }

  const effet = String(carte.effet).toLowerCase().trim();
  return effet.startsWith("action gratuite");
}

function categoriePrincipaleCarte(carte) {
  if (!carte?.categorie) {
    return "";
  }

  const ordrePrioritaire = [
    CATEGORIES.TRADITION,
    CATEGORIES.CIVILISE,
    CATEGORIES.REGION,
    CATEGORIES.VASSAL,
    CATEGORIES.RENOMMEE,
    CATEGORIES.INSTABILITE
  ];

  return ordrePrioritaire.find(categorie => inclutCategorie(carte, categorie)) || "";
}

/* =========================================================
   11) HELPERS RESSOURCES / JETONS
   ========================================================= */

   function ajouterJetonProgresInitialSiCivilise(carte) {
  if (!carte) {
    return;
  }

  const categorie = String(carte.categorie || "");

  if (!categorie.includes("Civilisé") || categorie.includes("Tradition")) {
    return;
  }

  if (!carte.jetons) {
    carte.jetons = {
      population: 0,
      materiaux: 0,
      progres: 0
    };
  }

  carte.jetons.progres = 1;
}

function ajouterJetonSurCarte(carte, typeJeton, quantite = 1) {
  if (!carte) {
    return;
  }

  initialiserJetonsCarte(carte);

  if (!(typeJeton in carte.jetons)) {
    return;
  }

  carte.jetons[typeJeton] += quantite;
}

function gagnerJetonsCarte(carte) {
  if (!carte) {
    return;
  }

  initialiserJetonsCarte(carte);

  jeu.joueur.population += carte.jetons.population;
  jeu.joueur.materiaux += carte.jetons.materiaux;
  jeu.joueur.progres += carte.jetons.progres;

  carte.jetons.population = 0;
  carte.jetons.materiaux = 0;
  carte.jetons.progres = 0;
}

function gagnerRessource(typeRessource, quantite = 0) {
  if (!(typeRessource in jeu.joueur)) {
    return;
  }

  jeu.joueur[typeRessource] += quantite;
}

/* =========================================================
    HELPERS SCORE
   ========================================================= */

   function compterInstabilitesRestantesBotPourScore() {
  const toutesCartesBot = [
    ...(etatBot.deckCiv || []),
    ...(etatBot.defausse || []),
    ...(etatBot.piocheDynastie || []),
    ...(etatBot.histoire || []),
    ...(etatBot.tableau || []),
    ...Object.values(etatBot.emplacements || {}).filter(Boolean)
  ];

  return toutesCartesBot.filter(carte =>
    carte && inclutCategorie(carte, CATEGORIES.INSTABILITE)
  ).length;
}
    
function plafonnerPointsVariableJoueur(points) {
  return Math.min(10, Math.max(0, Number(points) || 0));
}
   function compterCartesParType(cartes = [], types = []) {
  return cartes.filter(carte => types.includes(carte?.typeCarte)).length;
}

function compterCartesAvecPin(cartes = [], pinRecherche = "") {
  return cartes.filter(carte => String(carte?.pin || "").trim() === pinRecherche).length;
}

function compterCartesPersistantesNonRegion(cartes = []) {
  return cartes.filter(carte =>
    String(carte?.pin || "").trim() === "Persistante" &&
    !inclutCategorie(carte, "Région")
  ).length;
}

function calculerPointsVictoireVariableJoueur(carte, toutesLesCartes = []) {
  if (!carte) {
    return 0;
  }

  const condition = String(carte.conditionVictoire || "").trim();
  if (!condition) {
    return 0;
  }

  const texte = normaliserTexteScore(condition);

  if (texte.includes("carte variable")) {
    const matchVariable = texte.match(/^(\d+)\s*pv\s*par\s*carte\s*variable$/);

    if (matchVariable) {
      const pvParCarte = Number(matchVariable[1] || 0);

      const nbCartesVariables = (toutesLesCartes || []).filter(c => {
        if (!c) {
          return false;
        }

        const points = String(c.pointsVictoire || "").trim();
        return points === "Variable" || points === "PV Variable";
      }).length;

      return plafonnerPointsVariableJoueur(nbCartesVariables * pvParCarte);
    }
  }

  if (texte.includes("carte reservee ici")) {
    const matchReserveesIci = texte.match(/^(\d+)\s*pv\s*par\s*carte\s*reservee\s*ici\.?$/);

    if (matchReserveesIci) {
      const pvParCarte = Number(matchReserveesIci[1] || 0);
      const nbReservees = Array.isArray(carte.reservees) ? carte.reservees.length : 0;

      return plafonnerPointsVariableJoueur(nbReservees * pvParCarte);
    }
  }

  // Cas spécial déjà existant dans ton système
  if (texte.includes("cartes persistante en jeu sauf region")) {
    const match = texte.match(/(\d+)\s*pv\s*par\s*(\d+)\s*cartes?\s*persistante/);
    if (!match) return 0;

    const pvParPalier = Number(match[1] || 0);
    const taillePalier = Number(match[2] || 1);
    const nb = compterCartesPersistantesNonRegion(jeu.joueurZones.tableauJoueur || []);

    return plafonnerPointsVariableJoueur(
      Math.floor(nb / taillePalier) * pvParPalier
    );
  }

  // Forme générale :
  // "2 PV par Blé"
  // "1 PV par 4 Population"
  // "2 PV par 5 Progrès"
  // "1 PV par Tradition"
  // "2 PV par Maison et par Duplex"
  const matchPar = texte.match(/^(\d+)\s*pv\s*par\s*(.+)$/);
  if (matchPar) {
    const pvParOccurrence = Number(matchPar[1] || 0);
    const partieDroite = matchPar[2].trim();

    // "4 population", "10 materiaux", etc.
    const matchQuantifie = partieDroite.match(/^(\d+)\s+(.+)$/);
    if (matchQuantifie) {
      const taillePalier = Number(matchQuantifie[1] || 1);
      const cible = matchQuantifie[2].trim();
      const nb = compterOccurrencesScore(cible, toutesLesCartes);

      return plafonnerPointsVariableJoueur(
        Math.floor(nb / taillePalier) * pvParOccurrence
      );
    }

    // "blé et eau", "maison et duplex", etc.
    if (partieDroite.includes(" et par ")) {
      const cibles = partieDroite.split(/\s+et\s+par\s+/).map(s => s.trim());
      const total = cibles.reduce(
        (somme, cible) => somme + compterOccurrencesScore(cible, toutesLesCartes),
        0
      );

      return plafonnerPointsVariableJoueur(total * pvParOccurrence);
    }

    if (partieDroite.includes(" et ")) {
      const cibles = partieDroite.split(/\s+et\s+/).map(s => s.trim());
      const total = cibles.reduce(
        (somme, cible) => somme + compterOccurrencesScore(cible, toutesLesCartes),
        0
      );

      return plafonnerPointsVariableJoueur(total * pvParOccurrence);
    }

    // "tradition", "ble", "eau", "renommee", etc.
    return plafonnerPointsVariableJoueur(
      compterOccurrencesScore(partieDroite, toutesLesCartes) * pvParOccurrence
    );
  }

  // "1 PV tous les 4 Progrès"
  const matchTousLes = texte.match(/^(\d+)\s*pv\s*tous\s*les\s*(\d+)\s+(.+)$/);
  if (matchTousLes) {
    const pvParPalier = Number(matchTousLes[1] || 0);
    const taillePalier = Number(matchTousLes[2] || 1);
    const cible = matchTousLes[3].trim();
    const nb = compterOccurrencesScore(cible, toutesLesCartes);

    return plafonnerPointsVariableJoueur(
      Math.floor(nb / taillePalier) * pvParPalier
    );
  }

  return 0;
}

function normaliserTexteScore(texte = "") {
  return String(texte)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function compterOccurrencesScore(cible, toutesLesCartes = []) {
  const t = normaliserTexteScore(cible);

  // Cas solo (ex: Infamie) : "Instabilité marquée par les autres joueurs"
  // => on compte les Instabilités présentes chez l'adversaire (le Bot).
  if (t.includes("instabilite") && t.includes("autres joueurs")) {
    return compterInstabilitesRestantesBotPourScore();
  }

  // Ressources joueur
  if (t === "population") return Number(jeu.joueur.population || 0);
  if (t === "materiaux" || t === "materiau") return Number(jeu.joueur.materiaux || 0);
  if (t === "progres" || t === "progress") return Number(jeu.joueur.progres || 0);

  // Nombre total de cartes
  if (t === "carte" || t === "cartes") return toutesLesCartes.length;

  // Catégories
  const categories = [
    "tradition",
    "civilise",
    "region",
    "vassal",
    "renommee",
    "instabilite"
  ];

  if (categories.includes(t)) {
    return compterCartesCategorie(
      toutesLesCartes,
      reconstituerLibelleCategorie(t)
    );
  }

  // Tags de région
  const tagsRegion = ["ble", "eau", "sac"];
  if (tagsRegion.includes(t)) {
    return compterTagsRegionDansCartes(
      toutesLesCartes,
      reconstituerLibelleTagRegion(t)
    );
  }

  // Types de carte fréquents / génériques
  return compterCartesParTypeNormalise(toutesLesCartes, t);
}

function compterCartesParTypeNormalise(cartes = [], typeRechercheNormalise = "") {
  return cartes.filter(carte =>
    normaliserTexteScore(carte?.typeCarte || "") === typeRechercheNormalise
  ).length;
}

function reconstituerLibelleCategorie(categorieNormalisee) {
  const map = {
    tradition: "Tradition",
    civilise: "Civilisé",
    region: "Région",
    vassal: "Vassal",
    renommee: "Renommée",
    instabilite: "Instabilité"
  };

  return map[categorieNormalisee] || categorieNormalisee;
}

function reconstituerLibelleTagRegion(tagNormalise) {
  const map = {
    ble: "Blé",
    eau: "Eau",
    sac: "Sac"
  };

  return map[tagNormalise] || tagNormalise;
}

function evaluerCarteJoueurPourScore(carte, zone, toutesLesCartes = []) {
  if (!carte) {
    return 0;
  }

  const points = carte.pointsVictoire;
  const condition = String(carte.conditionVictoire || "").trim();

  if (typeof points === "number") {
    return points;
  }

  const texte = String(points || "").trim();

  const valeurNumerique = Number(texte);
  if (Number.isFinite(valeurNumerique)) {
    return valeurNumerique;
  }

  if (texte === "Variable" || texte === "PV Variable") {
    return calculerPointsVictoireVariableJoueur(carte, toutesLesCartes);
  }

  if (texte === "Conditionnel" || texte === "PV Conditionnel") {
    const nombres = extraireTousLesNombres(condition);
    const contientAlternative = /\bou\b/i.test(condition);
    const valeurAlternative = nombres.length > 0 ? Math.min(...nombres) : 0;

    if (/si en jeu/i.test(condition)) {
      if (zone === "tableau") {
        return Math.max(...nombres, 0);
      }

      return contientAlternative && nombres.length > 1 ? valeurAlternative : 0;
    }

    if (/si dans votre histoire/i.test(condition)) {
      if (zone === "histoire") {
        return Math.max(...nombres, 0);
      }

      return contientAlternative && nombres.length > 1 ? valeurAlternative : 0;
    }

    if (nombres.length > 0) {
      return Math.max(...nombres);
    }

    return 0;
  }

  const matchXPv = texte.match(/(\d+)\s*PV/i);
  if (matchXPv) {
    return Number(matchXPv[1]);
  }

  return 0;
}

   function creerResultatScoreVide() {
  return {
    total: 0,
    details: {}
  };
}

function extraireTousLesNombres(texte) {
  return (String(texte || "").match(/\d+/g) || []).map(Number);
}

function compterTagsRegionDansCartes(cartes = [], tagRecherche = "") {
  const tag = String(tagRecherche || "").trim().toLowerCase();

  if (!tag) {
    return 0;
  }

  let total = 0;

  cartes.forEach(carte => {
    const tags = Array.isArray(carte?.typeRegion) ? carte.typeRegion : [];
    tags.forEach(type => {
      if (String(type || "").trim().toLowerCase() === tag) {
        total += 1;
      }
    });
  });

  return total;
}

function compterCartesCategorie(cartes = [], categorie = "") {
  return cartes.filter(carte => inclutCategorie(carte, categorie)).length;
}

function aplatirCartesAvecReservees(cartes = []) {
  const resultat = [];
  const vus = new Set();
  const source = Array.isArray(cartes) ? cartes : [];

  function parcourir(carte) {
    if (!carte || vus.has(carte)) {
      return;
    }

    vus.add(carte);
    resultat.push(carte);

    if (Array.isArray(carte.reservees) && carte.reservees.length > 0) {
      carte.reservees.forEach(parcourir);
    }
  }

  source.forEach(parcourir);
  return resultat;
}

function toutesLesCartesJoueurPourScore() {
  const cartesBase = [
    ...(jeu.joueurZones.mainJoueur || []),
    ...(jeu.joueurZones.tableauJoueur || []),
    ...(jeu.joueurZones.deckJoueur || []),
    ...(jeu.joueurZones.defausseJoueur || []),
    ...(jeu.joueurZones.histoireJoueur || []),
    ...(jeu.joueurZones.cartePuissanceVisible ? [jeu.joueurZones.cartePuissanceVisible] : [])
  ].filter(Boolean);

  return aplatirCartesAvecReservees(cartesBase);
}

function toutesLesCartesBotPourScoreSansDynastieNiPuissance() {
  return [
    ...(etatBot.deckCiv || []),
    ...(etatBot.defausse || []),
    ...(etatBot.histoire || []),
    ...(etatBot.tableau || []),
    ...Object.values(etatBot.emplacements || {})
  ].filter(Boolean);
}

function botScoreRessourcesFinPartie() {
  const progres = Number(etatBot.progres || 0);
  const materiaux = Number(etatBot.materiaux || 0);
  const population = Number(etatBot.population || 0);

  if (botUtiliseScoreRessourcesCombinees()) {
    const pvRessources = Math.floor((materiaux + population) / 5);
    return {
      progres,
      ressources: pvRessources,
      total: progres + pvRessources
    };
  }

  const dizainesMateriaux = Math.floor(materiaux / 10);
  const dizainesPopulation = Math.floor(population / 10);

  return {
    progres,
    ressources: dizainesMateriaux + dizainesPopulation,
    total: progres + dizainesMateriaux + dizainesPopulation
  };
}

function normaliserZoneScore(zone) {
  const z = String(zone || "").trim().toLowerCase();

  if (z === "main") return "main";
  if (z === "tableau") return "tableau";
  if (z === "deck") return "deck";
  if (z === "defausse") return "defausse";
  if (z === "histoire") return "histoire";
  if (z === "puissance") return "puissance";

  return z;
}

function calculerScoreBotFinal() {
  const ressources = botScoreRessourcesFinPartie();
  const cartes = toutesLesCartesBotPourScoreSansDynastieNiPuissance();

  let pvCartes = 0;
  cartes.forEach(carte => {
    pvCartes += botPointsVictoireCarte(carte);
  });

  return {
    progres: ressources.progres,
    ressources: ressources.ressources,
    cartes: pvCartes,
    total: ressources.total + pvCartes
  };
}

function calculerScoreBotDetailleFinal() {
  const cartes = toutesLesCartesBotPourScoreSansDynastieNiPuissance();

  const progres = Number(etatBot.progres || 0);
  const materiaux = Number(etatBot.materiaux || 0);
  const population = Number(etatBot.population || 0);
  const scoreRessourcesCombine = botUtiliseScoreRessourcesCombinees();
  const pvMateriaux = Math.floor(materiaux / 10);
  const pvPopulation = Math.floor(population / 10);
  const pvCombine = Math.floor((materiaux + population) / 5);

  const detailsCartes = cartes.map(carte => ({
    nom: carte.nom,
    pv: botPointsVictoireCarte(carte),
    pointsVictoire: carte.pointsVictoire || 0,
    conditionVictoire: carte.conditionVictoire || "Aucune"
  }));

  const totalCartes = detailsCartes.reduce((somme, detail) => somme + Number(detail.pv || 0), 0);

  const detailsRessources = scoreRessourcesCombine
    ? [
        {
          nom: "Matériaux + Population",
          pv: pvCombine,
          pointsVictoire: "1 PV par combinaison de 5",
          conditionVictoire: `${materiaux} Matériaux + ${population} Population`
        }
      ]
    : [
        {
          nom: "Matériaux",
          pv: pvMateriaux,
          pointsVictoire: "1 PV par dizaine",
          conditionVictoire: `${materiaux} Matériaux`
        },
        {
          nom: "Population",
          pv: pvPopulation,
          pointsVictoire: "1 PV par dizaine",
          conditionVictoire: `${population} Population`
        }
      ];

  const totalRessources = scoreRessourcesCombine
    ? pvCombine
    : pvMateriaux + pvPopulation;

  return {
    progres: {
      total: progres,
      cartes: [
        {
          nom: "Jetons Progrès",
          pv: progres,
          pointsVictoire: "1 PV par jeton",
          conditionVictoire: `${progres} jeton(s)`
        }
      ]
    },
    ressources: {
      total: totalRessources,
      cartes: detailsRessources
    },
    cartes: {
      total: totalCartes,
      cartes: detailsCartes
    },
    total: progres + totalRessources + totalCartes
  };
}

function calculerScoreZoneJoueur(cartes, zone, toutesLesCartes) {
  const cartesZone = aplatirCartesAvecReservees(cartes || []);
  const detailsCartes = [];
  let total = 0;

  cartesZone.forEach(carte => {
    const pv = evaluerCarteJoueurPourScore(carte, zone, toutesLesCartes);

    detailsCartes.push({
      nom: carte.nom,
      pv,
      pointsVictoire: carte.pointsVictoire || 0,
      conditionVictoire: carte.conditionVictoire || "Aucune",
      zone
    });

    total += pv;
  });

  return {
    total,
    cartes: detailsCartes
  };
}

function calculerScoreJoueurFinal() {
  const toutesLesCartes = toutesLesCartesJoueurPourScore();

  const progres = Number(jeu.joueur.progres || 0);

  const main = calculerScoreZoneJoueur(
    jeu.joueurZones.mainJoueur || [],
    "main",
    toutesLesCartes
  );

  const tableau = calculerScoreZoneJoueur(
    jeu.joueurZones.tableauJoueur || [],
    "tableau",
    toutesLesCartes
  );

  const deck = calculerScoreZoneJoueur(
    jeu.joueurZones.deckJoueur || [],
    "deck",
    toutesLesCartes
  );

  const defausse = calculerScoreZoneJoueur(
    jeu.joueurZones.defausseJoueur || [],
    "defausse",
    toutesLesCartes
  );

  const histoire = calculerScoreZoneJoueur(
    jeu.joueurZones.histoireJoueur || [],
    "histoire",
    toutesLesCartes
  );

  const puissance = calculerScoreZoneJoueur(
    jeu.joueurZones.cartePuissanceVisible ? [jeu.joueurZones.cartePuissanceVisible] : [],
    "puissance",
    toutesLesCartes
  );

  return {
    progres,
    main,
    tableau,
    deck,
    defausse,
    histoire,
    puissance,
    total:
      progres +
      main.total +
      tableau.total +
      deck.total +
      defausse.total +
      histoire.total +
      puissance.total
  };
}

function terminerPartieParScoreFinal() {
  if (jeu.finPartie.terminee) {
    return true;
  }

  jeu.finPartie.terminee = true;
  jeu.finPartie.resultat = "score";
  jeu.finPartie.raison = "Le Décompte est terminé.";

  tourBotEnCours = false;
  retirerJusquaDeuxInstabilitesAvecSumeriens();

  const scoreBot = calculerScoreBotFinal();
  const scoreJoueur = calculerScoreJoueurFinal();

  jeu.finPartie.scoreFinal = {
    bot: scoreBot,
    joueur: scoreJoueur
  };

  afficherEcranScoreFinal();

  return true;
}

function ligneDetailCarteScoreHTML(detail) {
  return `
    <div style="
      display:flex;
      justify-content:space-between;
      gap:16px;
      padding:8px 0;
      border-bottom:1px solid rgba(255,255,255,0.08);
    ">
      <div>
        <div style="font-weight:bold;">${detail.nom}</div>
        <div style="font-size:14px; opacity:0.8;">
          pointsVictoire : ${detail.pointsVictoire ?? 0}
          ${detail.conditionVictoire ? `| conditionVictoire : ${detail.conditionVictoire}` : ""}
          ${detail.zone ? `| zone : ${detail.zone}` : ""}
        </div>
      </div>
      <div style="font-weight:bold; white-space:nowrap;">
        ${Number(detail.pv || 0)} PV
      </div>
    </div>
  `;
}

function blocDetailsScoreZoneHTML(titre, bloc) {
  const lignes = Array.isArray(bloc?.cartes) ? bloc.cartes : [];

  const contenu = lignes.length > 0
    ? lignes.map(ligneDetailCarteScoreHTML).join("")
    : `<div style="opacity:0.7; padding:8px 0;">Aucune carte</div>`;

  return `
    <div style="
      background:rgba(255,255,255,0.05);
      border-radius:14px;
      padding:18px;
      margin-bottom:18px;
    ">
      <div style="
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-bottom:12px;
      ">
        <h3 style="margin:0;">${titre}</h3>
        <div style="font-size:22px; font-weight:bold;">${Number(bloc?.total || 0)} PV</div>
      </div>
      ${contenu}
    </div>
  `;
}

function afficherEcranScoreFinal() {
  const app = document.getElementById("app");
  if (!app) return;
  activerScrollPagesScore();

  const scoreBot = jeu.finPartie?.scoreFinal?.bot;
  const scoreJoueur = jeu.finPartie?.scoreFinal?.joueur;

  if (!scoreBot || !scoreJoueur) {
    app.innerHTML = `<div style="padding:40px;color:white;background:#222;">Erreur : score final introuvable.</div>`;
    return;
  }

  app.innerHTML = `
    <div id="ecran-score-final" style="
      min-height: 100vh;
      background: #1c1c1c;
      color: white;
      padding: 40px;
      box-sizing: border-box;
      font-family: Arial, sans-serif;
    ">
      <h1 style="font-size: 56px; margin-top: 0;">Score final</h1>
      <p style="font-size: 22px;">${jeu.finPartie.raison || ""}</p>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:32px;margin-top:32px;">
        <div style="background:rgba(255,255,255,0.06);padding:24px;border-radius:16px;">
          <h2>Joueur</h2>
          <p><strong>Progrès :</strong> ${scoreJoueur.progres} PV</p>
          <p><strong>Main :</strong> ${scoreJoueur.main.total} PV</p>
          <p><strong>Tableau :</strong> ${scoreJoueur.tableau.total} PV</p>
          <p><strong>Deck :</strong> ${scoreJoueur.deck.total} PV</p>
          <p><strong>Défausse :</strong> ${scoreJoueur.defausse.total} PV</p>
          <p><strong>Histoire :</strong> ${scoreJoueur.histoire.total} PV</p>
          <p><strong>Puissance :</strong> ${scoreJoueur.puissance.total} PV</p>
          <hr>
          <p style="font-size:28px;"><strong>Total joueur : ${scoreJoueur.total} PV</strong></p>
        </div>

        <div style="background:rgba(255,255,255,0.06);padding:24px;border-radius:16px;">
          <h2>Bot</h2>
          <p><strong>Progrès :</strong> ${scoreBot.progres} PV</p>
          <p><strong>Matériaux + Population :</strong> ${scoreBot.ressources} PV</p>
          <p><strong>Cartes :</strong> ${scoreBot.cartes} PV</p>
          <hr>
          <p style="font-size:28px;"><strong>Total bot : ${scoreBot.total} PV</strong></p>
        </div>
      </div>

      <div style="margin-top:32px;">
        <h2>Résultat</h2>
        <p style="font-size:30px;">
          <strong>
            ${
              scoreJoueur.total > scoreBot.total
                ? "Victoire du joueur"
                : scoreJoueur.total < scoreBot.total
                ? "Victoire du bot"
                : "Égalité"
            }
          </strong>
        </p>
      </div>

     <div style="margin-top:32px; display:flex; gap:12px; flex-wrap:wrap;">
  <button onclick="afficherEcranScoreAvance()" style="
    padding: 14px 28px;
    font-size: 20px;
    cursor: pointer;
  ">
    Voir le détail
  </button>

  <button onclick="location.reload()" style="
    padding: 14px 28px;
    font-size: 20px;
    cursor: pointer;
  ">
    Rejouer
  </button>
</div>
    </div>
  `;
}

function afficherEcranScoreAvance() {
  const app = document.getElementById("app");
  if (!app) return;
  activerScrollPagesScore();

  const scoreJoueur = jeu.finPartie?.scoreFinal?.joueur;
  const scoreBotSimple = jeu.finPartie?.scoreFinal?.bot;

  if (!scoreJoueur || !scoreBotSimple) {
    app.innerHTML = `<div style="padding:40px;color:white;background:#222;">Erreur : score avancé introuvable.</div>`;
    return;
  }

  const scoreBot = calculerScoreBotDetailleFinal();

  app.innerHTML = `
    <div id="ecran-score-avance" style="
      min-height:100vh;
      background:#1b1b1b;
      color:white;
      padding:32px;
      box-sizing:border-box;
      font-family:Arial, sans-serif;
    ">
      <div style="
        display:flex;
        justify-content:space-between;
        align-items:center;
        gap:16px;
        margin-bottom:24px;
        flex-wrap:wrap;
      ">
        <div>
          <h1 style="margin:0; font-size:52px;">Score avancé</h1>
          <p style="margin:8px 0 0 0; font-size:20px; opacity:0.85;">
            Détail complet carte par carte
          </p>
        </div>

        <div style="display:flex; gap:12px; flex-wrap:wrap;">
          <button onclick="afficherEcranScoreFinal()" style="
            padding:12px 22px;
            font-size:18px;
            cursor:pointer;
          ">
            Retour au score
          </button>

          <button onclick="location.reload()" style="
            padding:12px 22px;
            font-size:18px;
            cursor:pointer;
          ">
            Rejouer
          </button>
        </div>
      </div>

      <div style="
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:28px;
        align-items:start;
      ">
        <div>
          <h2 style="margin-top:0;">Joueur — ${scoreJoueur.total} PV</h2>

          ${blocDetailsScoreZoneHTML("Jetons Progrès", {
            total: scoreJoueur.progres,
            cartes: [{
              nom: "Jetons Progrès",
              pv: scoreJoueur.progres,
              pointsVictoire: "1 PV par jeton",
              conditionVictoire: `${scoreJoueur.progres} jeton(s)`
            }]
          })}

          ${blocDetailsScoreZoneHTML("Main", scoreJoueur.main)}
          ${blocDetailsScoreZoneHTML("Tableau", scoreJoueur.tableau)}
          ${blocDetailsScoreZoneHTML("Deck", scoreJoueur.deck)}
          ${blocDetailsScoreZoneHTML("Défausse", scoreJoueur.defausse)}
          ${blocDetailsScoreZoneHTML("Histoire", scoreJoueur.histoire)}
          ${blocDetailsScoreZoneHTML("Carte Puissance", scoreJoueur.puissance)}
        </div>

        <div>
          <h2 style="margin-top:0;">Bot — ${scoreBot.total} PV</h2>

          ${blocDetailsScoreZoneHTML("Jetons Progrès", scoreBot.progres)}
          ${blocDetailsScoreZoneHTML("Matériaux + Population", scoreBot.ressources)}
          ${blocDetailsScoreZoneHTML("Cartes scorées", scoreBot.cartes)}
        </div>
      </div>
    </div>
  `;
}

   
/* =========================================================
   12) HELPERS ÉTAT JOUEUR / MANCHE
   ========================================================= */



   function verifierDeclenchementDecompteDepuisPilePleine(carte) {
  if (!carte) {
    return;
  }

  if (carte.nom === "Harald Hardrada") {
    declencherDecompte();
  }
}


   const MESSAGE_DECOMPTE_DECLENCHE =
  "D\u00e9compte d\u00e9clench\u00e9 : terminez la manche actuelle, puis jouez une derni\u00e8re manche compl\u00e8te.";

function normaliserTexteDecompteUI(texte = "") {
  return String(texte)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function panneauDecompteEstVisible() {
  const panneau = getElement("panneau-ui");
  const messageDiv = getElement("panneau-ui-message");

  if (!panneau || !messageDiv) {
    return false;
  }

  if (!panneau.classList.contains("panneau-ui-ouvert")) {
    return false;
  }

  const messageNormalise = normaliserTexteDecompteUI(messageDiv.textContent || "");
  return messageNormalise.includes("decompte declenche");
}

function annonceDecompteDoitAttendreInteraction() {
  if (!jeu?.ui) {
    return false;
  }

  if (jeu.ui.selectionMarcheActive || jeu.ui.selectionCarteActive) {
    return true;
  }

  if (jeu.ui.modeInteraction) {
    return true;
  }

  if (jeu.ui.panneauUIOuvert && !panneauDecompteEstVisible()) {
    return true;
  }

  return false;
}

function ouvrirPanneauDecompteDeclenche() {
  jeu.finPartie.annonceDecompteAccusee = true;
  ouvrirPanneauUI(MESSAGE_DECOMPTE_DECLENCHE, [], {
    mode: "banniereSysteme",
    banniere: {
      duree: 7600
    }
  });
}

function verifierAnnonceDecompteSiMasquee() {
  if (
    !jeu.finPartie.decompteDeclenche ||
    jeu.finPartie.terminee ||
    jeu.finPartie.annonceDecompteAccusee
  ) {
    return;
  }

  if (annonceDecompteDoitAttendreInteraction()) {
    setTimeout(verifierAnnonceDecompteSiMasquee, 120);
    return;
  }

  if (!panneauDecompteEstVisible()) {
    ouvrirPanneauDecompteDeclenche();
  }
}

function verifierDeclenchementDecompteParPiochePrincipale() {
  if (jeu.finPartie.decompteDeclenche) {
    return false;
  }

  if (jeu.piles.piochePrincipale.length === 0) {
    declencherDecompte();
    return true;
  }

  return false;
}

function declencherDecompte() {
  if (jeu.finPartie.decompteDeclenche) {
    return;
  }

  jeu.finPartie.decompteDeclenche = true;
  jeu.finPartie.mancheDeclenchementDecompte = jeu.manche.numero;
  jeu.finPartie.annonceDecompteAccusee = false;

  // Ouvre l'annonce dès que l'interface n'est plus occupée par une autre interaction.
  verifierAnnonceDecompteSiMasquee();
  setTimeout(verifierAnnonceDecompteSiMasquee, 0);
  setTimeout(verifierAnnonceDecompteSiMasquee, 100);
}

function verifierFinParDecompte() {
  if (!jeu.finPartie.decompteDeclenche || jeu.finPartie.terminee) {
    return false;
  }

  const mancheDeclenchement = jeu.finPartie.mancheDeclenchementDecompte;

  if (mancheDeclenchement == null) {
    return false;
  }

  if (jeu.manche.numero >= mancheDeclenchement + 2) {
    terminerPartieParScoreFinal();
    return true;
  }

  return false;
}

   function verifierEffondrement() {
  if (jeu.finPartie.terminee) {
    return true;
  }

  if (jeu.piles.piocheMarcheInstabilite.length === 0) {
    terminerPartie(
      "defaite",
      "Effondrement : la pile Instabilité du marché est vide. Vous perdez la partie."
    );
    return true;
  }

  return false;
}

   function terminerPartie(resultat, raison) {
  if (jeu.finPartie.terminee) {
    return true;
  }

  jeu.finPartie.terminee = true;
  jeu.finPartie.resultat = resultat || "";
  jeu.finPartie.raison = raison || "";

  tourBotEnCours = false;

  if (jeu.ui) {
    jeu.ui.solsticeActif = false;
    jeu.ui.selectionCarteActive = false;
  }

  jouerMusiqueFinPartie(resultat);

  afficherZoneJoueur?.();
  afficherBasMarche?.();
  afficherHautMarche?.();
  afficherZoneBot?.();

  afficherEcranFinDePartie();

  return true;
}

function obtenirTailleMainJoueur() {
  let taille = jeu.manche.tailleMain;

  if (passifActifDansTableau("Légions")) {
    taille += 1;
  }

  if (passifActifDansTableau("Qin")) {
    taille += 1;
  }

  if (passifActifDansTableau("Grandiose")) {
    taille += 1;
  }

  if (passifActifDansTableau("Écriture Oghamique")) {
    taille += 1;
  }

  if (passifActifDansTableau("Science")) {
    taille += 1;
  }

  if (passifActifDansTableau("Kourganes")) {
    taille += 1;
  }

  return taille;
}

function reinitialiserActionsJoueur() {
  jeu.joueur.actions = 3;
}

function reinitialiserEpuisementJoueur() {
  jeu.joueur.epuisement = 5;
}

function reinitialiserModificateursTour() {
  if (!jeu.manche.modificateursTour) {
    return;
  }

  jeu.manche.modificateursTour.agricultureActive = false;
  jeu.manche.modificateursTour.doubleMateriauxCarthaginoisActif = false;
}
/* =========================================================
   13) STATUT JOUEUR / TRANSITION NATION
   ========================================================= */

function joueurEstEmpire() {
  return jeu.joueurZones.carteStatutVisible?.nom === STATUTS.EMPIRE;
}

function joueurEstBarbare() {
  return jeu.joueurZones.carteStatutVisible?.nom === STATUTS.BARBARE;
}

function passerJoueurEnEmpire() {
  jeu.joueurZones.carteStatutVisible = { ...carteStatutJoueur.faceB };
  afficherZoneJoueur();
}

function prendreCarteNationPourRafraichissement() {
  if (jeu.joueurZones.pileRafraichissementNationEpuisee) {
    return null;
  }

  if (jeu.joueurZones.pileCroissantJoueur.length > 0) {
    jeu.joueurZones.pileRafraichissementNationEpuisee = true;
    return piger(jeu.joueurZones.pileCroissantJoueur);
  }

  if (jeu.joueurZones.cartePleineVisible) {
    const cartePleine = jeu.joueurZones.cartePleineVisible;
    jeu.joueurZones.cartePleineVisible = null;
    jeu.joueurZones.pileRafraichissementNationEpuisee = true;

    if (configurationPartie.nationJoueur === "Vikings") {
      declencherDecompte();
    } else {
      passerJoueurEnEmpire();
    }

    return cartePleine;
  }

  return null;
}




/* =========================================================
   14) DÉVELOPPEMENT DES CARTES ÉTOILE
   ========================================================= */

function developperCarteEtoileObjet(carte, options = {}) {
  if (!carte) {
    return false;
  }

  const nePasEpuiserPileEtoile = options.nePasEpuiserPileEtoile === true;

  if (jeu.joueurZones.pileEtoileEpuisee && !nePasEpuiserPileEtoile) {
    avertir("La pile Étoile est épuisée jusqu'au nettoyage.");
    return false;
  }

  const indexCarte = jeu.joueurZones.pileEtoileJoueur.indexOf(carte);

  if (indexCarte === -1) {
    return false;
  }

  if (!peutPayerCout(carte.coutDeveloppement)) {
    avertir(`Vous ne pouvez pas payer le coût de développement de ${carte.nom}.`);
    return false;
  }

  const paiementReussi = payerCoutDeveloppement(carte.coutDeveloppement);

  if (!paiementReussi) {
    avertir(`Paiement impossible pour ${carte.nom}.`);
    return false;
  }

  jeu.joueurZones.pileEtoileJoueur.splice(indexCarte, 1);
  jeu.joueurZones.defausseJoueur.push(carte);

  if (!nePasEpuiserPileEtoile) {
    jeu.joueurZones.pileEtoileEpuisee = true;
  }

  if (jeu.joueurZones.pileEtoileJoueur.length === 0) {
    declencherDecompte();
  }

  afficherZoneJoueur();
  return true;
}

/* =========================================================
   15) PANNEAUX (UI)
   ========================================================= */

   function ouvrirVueExil(modeSelection = false, callbackSelection = null, predicateCarte = null) {
  const panneau = getElement("panneau-exil");
  const contenu = getElement("contenu-exil");

  if (!panneau || !contenu) {
    if (modeSelection && callbackSelection) {
      callbackSelection(null);
    }
    return;
  }

  jeu.ui.exilOuvert = true;
  jeu.ui.selectionDansExilActive = modeSelection;
  jeu.ui.callbackSelectionDansExil = modeSelection ? callbackSelection : null;

  contenu.innerHTML = "";

  const cartes = (jeu.piles.exil || []).filter(carte =>
    typeof predicateCarte === "function" ? predicateCarte(carte) : true
  );

  if (cartes.length === 0) {
    contenu.innerHTML = `<div class="message-defausse-vide">Exil vide.</div>`;
  } else {
    cartes.forEach(carte => {
      const div = document.createElement("div");
      div.className = "carte carte-exil-mini";
      div.innerHTML = creerCarteHTML(carte);

      div.addEventListener("mouseenter", () => {
  if (jeu.ui.modeInteraction) {
    return;
  }
  afficherZoomCarteDepuisHTML(div.innerHTML);
});

      div.addEventListener("mouseleave", () => {
  jeu.ui.blocageZoomJusquaMouseleave = false;
  if (jeu.ui.modeInteraction) {
    return;
  }
  if (!jeu.ui.zoomVerrouille && !jeu.ui.regardRenommeeActif) {
    fermerZoomTemporaire();
  }
});

      div.addEventListener("click", () => {
  if (modeSelection) {
    const callback = jeu.ui.callbackSelectionDansExil;
    fermerVueExil(false);
    if (callback) {
      callback(carte);
    }
    return;
  }

  ouvrirZoomVerrouillePourCarte(carte);
});

      contenu.appendChild(div);
    });
  }

  panneau.style.display = "flex";
}

function fermerVueExil(confirmerAnnulationSelection = true) {
  const panneau = getElement("panneau-exil");
  const contenu = getElement("contenu-exil");

  if (!panneau || !contenu) {
    return;
  }

  const etaitEnModeSelection = jeu.ui.selectionDansExilActive;
  const callback = jeu.ui.callbackSelectionDansExil;

  panneau.style.display = "none";
  contenu.innerHTML = "";

  jeu.ui.exilOuvert = false;
  jeu.ui.selectionDansExilActive = false;
  jeu.ui.callbackSelectionDansExil = null;

  if (
    confirmerAnnulationSelection &&
    etaitEnModeSelection &&
    typeof callback === "function"
  ) {
    callback(null);
  }
}

function initialiserPanneauExil() {
  const btnFermer = getElement("btn-fermer-exil");

  if (btnFermer) {
    btnFermer.onclick = fermerVueExil;
  }
} 

   function initialiserOuverturePileEtoile() {
  const slotEtoile = getElement("slot-etoile");

  if (!slotEtoile) {
    return;
  }

  slotEtoile.style.cursor = "pointer";

  slotEtoile.addEventListener("click", event => {
    event.preventDefault();
    event.stopPropagation();

    const pile = jeu.joueurZones.pileEtoileJoueur;

    if (!Array.isArray(pile) || pile.length === 0) {
      ouvrirPanneauUI("Aucune carte Étoile disponible.", [
        { label: "OK" }
      ]);
      return;
    }

    ouvrirVueEtoile(() => {});
  });
}  

function ouvrirPanneauChoixMarcheSelection(message, obligatoire = false, configuration = {}) {
  const panneau = getElement("panneau-choix-marche-selection");
  const messageDiv = getElement("panneau-choix-marche-selection-message");
  const btn = getElement("btn-fermer-choix-marche-selection");

  if (!panneau || !messageDiv || !btn) {
    return;
  }

  messageDiv.textContent = message || "Choisissez une carte du marché.";

  const boutonVisible = configuration.afficherBouton === true || !obligatoire;
  const libelleBouton = configuration.libelleBouton || "OK [Entrée]";
  const actionBouton = configuration.actionBouton || null;
  const boutonGrand = configuration.boutonGrand === true;

  btn.classList.remove("btn-panneau-marche-grand");
  if (boutonGrand) {
    btn.classList.add("btn-panneau-marche-grand");
  }

  if (!boutonVisible) {
    btn.style.display = "none";
    btn.onclick = null;
  } else {
    btn.style.display = "inline-block";
    btn.textContent = libelleBoutonAvecRaccourciEntree(libelleBouton);
    btn.onclick = () => {
      if (typeof actionBouton === "function") {
        actionBouton();
        return;
      }

      panneau.classList.remove("panneau-ui-ouvert");
      panneau.classList.add("panneau-ui-cache");
    };
  }

  panneau.classList.remove("panneau-ui-cache");
  panneau.classList.add("panneau-ui-ouvert");
}

function fermerPanneauChoixMarcheSelection() {
  const panneau = getElement("panneau-choix-marche-selection");
  const btn = getElement("btn-fermer-choix-marche-selection");

  if (!panneau) {
    return;
  }

  panneau.classList.remove("panneau-ui-ouvert");
  panneau.classList.add("panneau-ui-cache");

  if (btn) {
    btn.onclick = null;
  }
}

   function fermerPanneauArchiver() {
  const panneau = getElement("panneau-archiver");

  if (!panneau) {
    return;
  }

  panneau.style.display = "none";
}

function initialiserPanneauArchiver() {
  const btnFermer = getElement("btn-fermer-archiver");

  if (btnFermer) {
    btnFermer.onclick = fermerPanneauArchiver;
  }
}

function creerCarteArchivableElement(carte, zoneSource, indexSource, onChoisir) {
  const div = document.createElement("div");
  div.className = "carte carte-archiver-selection";
  div.innerHTML = creerCarteHTML(carte);

  div.addEventListener("mouseenter", () => {
    jeu.ui.blocageZoomJusquaMouseleave = false;
    afficherZoomCarteDepuisHTML(div.innerHTML);
  });

  div.addEventListener("mouseleave", () => {
  jeu.ui.blocageZoomJusquaMouseleave = false;
  if (jeu.ui.modeInteraction) {
    return;
  }
  if (!jeu.ui.zoomVerrouille && !jeu.ui.regardRenommeeActif) {
    fermerZoomTemporaire();
  }
});

  div.addEventListener("click", () => {
    fermerPanneauArchiver();
    onChoisir({ zone: zoneSource, index: indexSource, carte });
  });

  return div;
}

function ouvrirPanneauArchiverCartes(onChoisir) {
  const panneau = getElement("panneau-archiver");
  const contenuMain = getElement("contenu-archiver-main");
  const contenuDefausse = getElement("contenu-archiver-defausse");

  if (!panneau || !contenuMain || !contenuDefausse) {
    return false;
  }

  contenuMain.innerHTML = "";
  contenuDefausse.innerHTML = "";

  const main = jeu.joueurZones.mainJoueur || [];
  const defausse = jeu.joueurZones.defausseJoueur || [];

  if (main.length === 0) {
    contenuMain.innerHTML = `<div class="message-zone-archiver-vide">Aucune carte dans la main.</div>`;
  } else {
    main.forEach((carte, index) => {
      const div = creerCarteArchivableElement(carte, "main", index, onChoisir);
      contenuMain.appendChild(div);
    });
  }

  if (defausse.length === 0) {
    contenuDefausse.innerHTML = `<div class="message-zone-archiver-vide">Aucune carte dans la défausse.</div>`;
  } else {
    defausse.forEach((carte, index) => {
      const div = creerCarteArchivableElement(carte, "defausse", index, onChoisir);
      contenuDefausse.appendChild(div);
    });
  }

  panneau.style.display = "flex";
  return true;
}

function demanderCarteDepuisDefausse(predicateCarte = null) {
  return new Promise(resolve => {
    ouvrirVueDefausse(true, resolve, predicateCarte);
  });
}

function ouvrirVueHistoire(modeSelection = false, callbackSelection = null, predicateCarte = null) {
  if (joueurEstVikings()) {
    if (modeSelection && callbackSelection) {
      callbackSelection(null);
    }
    return;
  }

  const panneau = getElement("panneau-histoire");
  const contenu = getElement("contenu-histoire");

  if (!panneau || !contenu) {
    if (modeSelection && callbackSelection) {
      callbackSelection(null);
    }
    return;
  }

  jeu.ui.histoireOuverte = true;
  jeu.ui.selectionDansHistoireActive = modeSelection;
  jeu.ui.callbackSelectionDansHistoire = modeSelection ? callbackSelection : null;

  contenu.innerHTML = "";

  const cartes = (jeu.joueurZones.histoireJoueur || []).filter(carte =>
    typeof predicateCarte === "function" ? predicateCarte(carte) : true
  );

  if (!Array.isArray(cartes) || cartes.length === 0) {
    contenu.innerHTML = `<div class="message-defausse-vide">Aucune carte archivée.</div>`;
  } else {
    cartes.forEach(carte => {
      const div = document.createElement("div");
      div.className = "carte carte-histoire-mini";
      div.innerHTML = creerCarteHTML(carte);

      div.addEventListener("mouseenter", () => {
        jeu.ui.blocageZoomJusquaMouseleave = false;
        afficherZoomCarteDepuisHTML(div.innerHTML);
      });

      div.addEventListener("mouseleave", () => {
        jeu.ui.blocageZoomJusquaMouseleave = false;
        if (jeu.ui.modeInteraction) {
          return;
        }
        if (!jeu.ui.zoomVerrouille && !jeu.ui.regardRenommeeActif) {
          fermerZoomTemporaire();
        }
      });

      div.addEventListener("click", () => {
        if (modeSelection) {
          const callback = jeu.ui.callbackSelectionDansHistoire;
          fermerVueHistoire(false);
          if (callback) {
            callback(carte);
          }
          return;
        }

        ouvrirZoomVerrouillePourCarte(carte);
      });

      contenu.appendChild(div);
    });
  }

  panneau.style.display = "flex";
}

function fermerVueHistoire() {
  const panneau = getElement("panneau-histoire");
  const contenu = getElement("contenu-histoire");

  if (!panneau || !contenu) {
    return;
  }

  jeu.ui.histoireOuverte = false;
  jeu.ui.selectionDansHistoireActive = false;
  jeu.ui.callbackSelectionDansHistoire = null;

  panneau.style.display = "none";
  contenu.innerHTML = "";

  if (!jeu.ui.zoomVerrouille && !jeu.ui.regardRenommeeActif) {
    fermerZoomTemporaire();
  }
}

function initialiserPanneauHistoire() {
  const panneau = getElement("panneau-histoire");
  const btnFermer = getElement("btn-fermer-histoire");

  if (btnFermer) {
    btnFermer.onclick = fermerVueHistoire;
  }

  if (panneau) {
    panneau.addEventListener("click", function(event) {
      if (event.target === panneau) {
        fermerVueHistoire();
      }
    });
  }
}

function ouvrirVueEtoile(callbackSelection, predicateCarte = null) {
  const panneau = getElement("panneau-etoile");
  const contenu = getElement("contenu-etoile");

  if (!panneau || !contenu) {
    if (callbackSelection) {
      callbackSelection(null);
    }
    return;
  }

  contenu.innerHTML = "";

  const cartes = jeu.joueurZones.pileEtoileJoueur;

  if (!Array.isArray(cartes) || cartes.length === 0) {
    contenu.innerHTML = `<div class="message-defausse-vide">Aucune carte Étoile disponible.</div>`;
  } else {
    cartes.forEach((carte, index) => {
      const div = document.createElement("div");
      div.className = "carte carte-etoile-mini";
      div.style.zIndex = String(index);
      div.innerHTML = creerCarteHTML(carte);

      const estSelectionnable =
        typeof predicateCarte === "function" ? predicateCarte(carte) : true;

      div.addEventListener("mouseenter", () => {
        jeu.ui.blocageZoomJusquaMouseleave = false;
        afficherZoomCarteDepuisHTML(div.innerHTML);
      });

      div.addEventListener("mouseleave", () => {
  jeu.ui.blocageZoomJusquaMouseleave = false;
  if (jeu.ui.modeInteraction) {
    return;
  }
  if (!jeu.ui.zoomVerrouille && !jeu.ui.regardRenommeeActif) {
    fermerZoomTemporaire();
  }
});

      if (estSelectionnable) {
        div.classList.add("carte-selectionnable");

        div.addEventListener("click", () => {
          const callback = jeu.ui.callbackPanneauEtoile;
          fermerVueEtoile();
          if (typeof callback === "function") {
            callback(carte);
          }
        });
      } else {
        div.classList.add("carte-non-selectionnable-pendant-choix");
      }

      contenu.appendChild(div);
    });
  }

  jeu.ui.callbackPanneauEtoile = callbackSelection;
  panneau.style.display = "flex";
}

function fermerVueEtoile() {
  const panneau = getElement("panneau-etoile");
  const contenu = getElement("contenu-etoile");

  if (!panneau || !contenu) {
    return;
  }

  panneau.style.display = "none";
  contenu.innerHTML = "";
  jeu.ui.callbackPanneauEtoile = null;
  fermerZoomTemporaire();
}

function fermerVueEtoileAnnuler() {
  const callback = jeu.ui.callbackPanneauEtoile;
  fermerVueEtoile();

  if (typeof callback === "function") {
    callback(null);
  }
}

function initialiserPanneauEtoile() {
  const btnFermer = getElement("btn-fermer-etoile");
  const panneau = getElement("panneau-etoile");

  if (btnFermer) {
    btnFermer.addEventListener("click", () => {
      const callback = jeu.ui.callbackPanneauEtoile;
      fermerVueEtoile();

      if (callback) {
        callback(null);
      }
    });
  }

  if (panneau) {
    panneau.addEventListener("click", event => {
      if (event.target === panneau) {
        const callback = jeu.ui.callbackPanneauEtoile;
        fermerVueEtoile();

        if (callback) {
          callback(null);
        }
      }
    });
  }
}

function ouvrirPanneauChoixTexte(message, options, callback, autoriserAnnulation = true) {
  fermerZoomCarte();
  debugLog("ouvrirPanneauChoixTexte appelé avec :", message, options);

  const panneau = getElement("panneau-choix-texte");
  const messageDiv = getElement("panneau-choix-texte-message");
  const optionsDiv = getElement("panneau-choix-texte-options");
  const btnAnnuler = getElement("btn-annuler-choix-texte");

  if (!panneau || !messageDiv || !optionsDiv || !btnAnnuler) {
    console.error("Panneau de choix texte introuvable.");
    if (callback) {
      callback(null);
    }
    return;
  }

  messageDiv.textContent = message;
  optionsDiv.innerHTML = "";

  options.forEach((option, index) => {
    const bouton = document.createElement("button");
    bouton.type = "button";
    bouton.className = "btn-choix-texte";
    bouton.textContent = option.label;

    bouton.onclick = event => {
      event.preventDefault();
      event.stopPropagation();
      fermerPanneauChoixTexte();
      callback(index);
    };

    optionsDiv.appendChild(bouton);
  });

  if (autoriserAnnulation) {
    btnAnnuler.style.display = "inline-block";
    btnAnnuler.onclick = event => {
      event.preventDefault();
      event.stopPropagation();
      fermerPanneauChoixTexte();
      callback(null);
    };
  } else {
    btnAnnuler.style.display = "none";
    btnAnnuler.onclick = null;
  }

  panneau.classList.remove("panneau-ui-cache");
  panneau.classList.add("panneau-ui-ouvert");
}

function fermerPanneauChoixTexte() {
  const panneau = getElement("panneau-choix-texte");
  const messageDiv = getElement("panneau-choix-texte-message");
  const optionsDiv = getElement("panneau-choix-texte-options");

  if (!panneau || !messageDiv || !optionsDiv) {
    return;
  }

  panneau.classList.remove("panneau-ui-ouvert");
  panneau.classList.add("panneau-ui-cache");
  messageDiv.textContent = "";
  optionsDiv.innerHTML = "";
}

function demanderChoixTexte(message, options, autoriserAnnulation = true) {
  return new Promise(resolve => {
    ouvrirPanneauChoixTexte(message, options, resolve, autoriserAnnulation);
  });
}
/* =========================================================
   16) PIOCHE / RAFRAÎCHISSEMENT DU DECK
   ========================================================= */

   function piocherCartesJoueurSansRafraichir(quantite = 0) {
  const cartesPiochees = [];

  for (let i = 0; i < quantite; i += 1) {
    if (jeu.joueurZones.deckJoueur.length === 0) {
      break;
    }

    const cartePiochee = piger(jeu.joueurZones.deckJoueur);

    if (cartePiochee) {
      jeu.joueurZones.mainJoueur.push(cartePiochee);
      cartesPiochees.push(cartePiochee);
    }
  }

  return cartesPiochees;
}

function remelangerDefausseDansDeck() {
  if (jeu.joueurZones.defausseJoueur.length === 0) {
    return false;
  }

  jeu.joueurZones.deckJoueur = [...jeu.joueurZones.defausseJoueur];
  jeu.joueurZones.defausseJoueur = [];
  melanger(jeu.joueurZones.deckJoueur);

  return true;
}

function rafraichirDeckBarbare() {
  const carteNation = prendreCarteNationPourRafraichissement();

  if (carteNation) {
    jeu.joueurZones.defausseJoueur.push(carteNation);
  }

  const succes = remelangerDefausseDansDeck();

  if (!succes) {
    return false;
  }

  if (jeu.joueur.epuisement > 0) {
    jeu.joueur.epuisement -= 1;
  }

  afficherZoneJoueur();
  return true;
}

function rafraichirDeckEmpire(callbackFin) {
  const terminerSansDevelopper = () => {
    const succes = remelangerDefausseDansDeck();
    afficherZoneJoueur();

    if (callbackFin) {
      callbackFin(succes);
    }
  };

  const cartesPayables = (jeu.joueurZones.pileEtoileJoueur || []).filter(carte =>
    carte && peutPayerCout(carte.coutDeveloppement)
  );

  if (cartesPayables.length === 0) {
    terminerSansDevelopper();
    return;
  }

  confirmerActionOptionnelle(
    "Votre deck est vide. Voulez-vous développer une carte Étoile avant de remélanger votre défausse ?"
  ).then(veutDevelopper => {
    if (!veutDevelopper) {
      terminerSansDevelopper();
      return;
    }

    ouvrirVueEtoile(
      carteChoisie => {
        if (!carteChoisie) {
          terminerSansDevelopper();
          return;
        }

        const succes = developperCarteEtoileObjet(carteChoisie);

        if (!succes) {
          rafraichirDeckEmpire(callbackFin);
          return;
        }

        terminerSansDevelopper();
      },
      carte => carte && peutPayerCout(carte.coutDeveloppement)
    );
  });
}

function rafraichirDeckDepuisCroissant(callbackFin = null) {
  if (joueurEstEmpire()) {
    rafraichirDeckEmpire(callbackFin);
    return;
  }

  const succes = rafraichirDeckBarbare();

  if (callbackFin) {
    callbackFin(succes);
  }
}

async function piocherCartesJoueur(quantite = 0) {
  const cartesPiochees = [];

  for (let i = 0; i < quantite; i += 1) {
    if (jeu.joueurZones.deckJoueur.length === 0) {
      const succes = await new Promise(resolve => {
        rafraichirDeckDepuisCroissant(resolve);
      });

      if (!succes) {
        break;
      }
    }

    const cartePiochee = piger(jeu.joueurZones.deckJoueur);

    if (cartePiochee) {
      jeu.joueurZones.mainJoueur.push(cartePiochee);
      cartesPiochees.push(cartePiochee);
    }
  }

  return cartesPiochees;
}

function piocherJusquaLimiteMain(callbackFin = null, utiliserRafraichissementCroissant = true) {
  const limite = obtenirTailleMainJoueur();

  function bouclePioche() {
    if (jeu.joueurZones.mainJoueur.length >= limite) {
      if (callbackFin) {
        callbackFin();
      }
      return;
    }

    if (jeu.joueurZones.deckJoueur.length === 0) {
      if (!utiliserRafraichissementCroissant) {
        if (callbackFin) {
          callbackFin();
        }
        return;
      }

      rafraichirDeckDepuisCroissant(succes => {
        if (!succes) {
          if (callbackFin) {
            callbackFin();
          }
          return;
        }

        bouclePioche();
      });
      return;
    }

    const cartePiochee = piger(jeu.joueurZones.deckJoueur);

    if (!cartePiochee) {
      if (callbackFin) {
        callbackFin();
      }
      return;
    }

    jeu.joueurZones.mainJoueur.push(cartePiochee);
    bouclePioche();
  }

  bouclePioche();
}
/* =========================================================
   17) LOGIQUE DU MARCHÉ
   ========================================================= */

   function initialiserJetonsProgresDeDepart() {
  const zonesMarche = jeu.marche.zonesVisibles;

  if (!zonesMarche) {
    return;
  }

  Object.values(zonesMarche).forEach(zone => {
    if (!zone) {
      return;
    }

    const cartes = [];

    if (zone.carteDessus) {
      cartes.push(zone.carteDessus);
    }

    if (zone.carteDessous) {
      cartes.push(zone.carteDessous);
    }

    cartes.forEach(carte => {
      if (!carte) {
        return;
      }

      if (!carte.jetons) {
        carte.jetons = {
          population: 0,
          materiaux: 0,
          progres: 0
        };
      }

      if (carte.categorie === "Civilisé") {
        carte.jetons.progres = 1;
      }
    });
  });
}

   function obtenirClesZonesMarche() {
  return ["zone1", "zone2", "zone3", "zone4", "zone5"];
}

function obtenirZonesMarcheAcquerablesPourCategorie(categorie) {
  return obtenirClesZonesMarche().filter(cleZone => {
    const zone = jeu.zonesMarche[cleZone];
    const carte = zone?.[0];

    if (!carte) {
      return false;
    }

    return categoriePrincipaleCarte(carte) === categorie;
  });
}

function obtenirZonesMarcheInnovablesPourCategorie(categorie) {
  return obtenirClesZonesMarche().filter(cleZone => {
    const zone = jeu.zonesMarche[cleZone];
    const carte = zone?.[0];

    if (!carte) {
      return false;
    }

    return categoriePrincipaleCarte(carte) === categorie;
  });
}

function normaliserCategoriesSelectionMarche(categories = []) {
  if (!Array.isArray(categories) || categories.length === 0) {
    return [];
  }

  const categoriesUniques = [];

  categories.forEach(categorie => {
    if (typeof categorie !== "string" || !categorie) {
      return;
    }

    if (!categoriesUniques.includes(categorie)) {
      categoriesUniques.push(categorie);
    }
  });

  return categoriesUniques;
}

function obtenirZonesMarcheAcquerablesPourCategories(categories = []) {
  const categoriesNormalisees = normaliserCategoriesSelectionMarche(categories);

  if (categoriesNormalisees.length === 0) {
    return [];
  }

  return obtenirClesZonesMarche().filter(cleZone => {
    const carte = jeu.zonesMarche[cleZone]?.[0];

    if (!carte) {
      return false;
    }

    return categoriesNormalisees.includes(categoriePrincipaleCarte(carte));
  });
}

function obtenirZonesMarcheInnovablesPourCategories(categories = []) {
  const categoriesNormalisees = normaliserCategoriesSelectionMarche(categories);

  if (categoriesNormalisees.length === 0) {
    return [];
  }

  return obtenirClesZonesMarche().filter(cleZone => {
    const carte = jeu.zonesMarche[cleZone]?.[0];

    if (!carte) {
      return false;
    }

    return categoriesNormalisees.includes(categoriePrincipaleCarte(carte));
  });
}

function obtenirPiochesMarcheInnovablesPourCategories(categories = []) {
  const categoriesNormalisees = normaliserCategoriesSelectionMarche(categories);
  const categoriesAvecPioche = [
    CATEGORIES.TRADITION,
    CATEGORIES.CIVILISE,
    CATEGORIES.REGION,
    CATEGORIES.VASSAL
  ];

  return categoriesNormalisees.filter(categorie =>
    categoriesAvecPioche.includes(categorie)
  );
}

function obtenirClesZonesVisiblesParCategorie(categorie) {
  return obtenirClesZonesMarche().filter(cleZone => {
    const zone = jeu.zonesMarche[cleZone];
    const carteVisible = zone?.[0];

    return carteVisible && categoriePrincipaleCarte(carteVisible) === categorie;
  });
}

function obtenirCategoriesCarte(carte) {
  if (!carte?.categorie) {
    return [];
  }

  return carte.categorie
    .split(",")
    .map(categorie => categorie.trim())
    .filter(Boolean);
}

function obtenirCartesVisiblesMarche() {
  return getZonesMarche()
    .map(zone => zone[0] || null)
    .filter(Boolean);
}

function obtenirZonesVisiblesParCategorie(categorie) {
  return getZonesMarche().filter(zone => {
    const carteVisible = zone[0];
    return carteVisible && categoriePrincipaleCarte(carteVisible) === categorie;
  });
}

function obtenirPiocheSecondaireParCategorie(categorie) {
  if (categorie === CATEGORIES.TRADITION) {
    return jeu.piles.piocheSecondaireTradition;
  }

  if (categorie === CATEGORIES.CIVILISE) {
    return jeu.piles.piocheSecondaireCivilise;
  }

  if (categorie === CATEGORIES.REGION) {
    return jeu.piles.piocheSecondaireRegion;
  }

  if (categorie === CATEGORIES.VASSAL) {
    return jeu.piles.piochePrincipale;
  }

  return null;
}

function piocherDepuisPrincipaleJusquaCategorie(categorie) {
  const cartesRevelees = [];
  let carteTrouvee = null;

  while (jeu.piles.piochePrincipale.length > 0) {
    const carte = piger(jeu.piles.piochePrincipale);

    if (!carte) {
      break;
    }

    if (categoriePrincipaleCarte(carte) === categorie) {
      carteTrouvee = carte;
      break;
    }

    cartesRevelees.push(carte);
  }

  if (cartesRevelees.length > 0) {
    jeu.piles.piochePrincipale.push(...cartesRevelees);
    melanger(jeu.piles.piochePrincipale);
  }

  verifierDeclenchementDecompteParPiochePrincipale();
  return carteTrouvee;
}

function alimenterZoneMarche(zone) {
  if (!zone) {
    return;
  }

  zone.length = 0;

  const { categorieZone, piocheSecondaire } = getZoneConfig(zone);
  let nouvelleCarte = null;

  if (categorieZone === "Principale") {
    nouvelleCarte = piger(jeu.piles.piochePrincipale);
    verifierDeclenchementDecompteParPiochePrincipale();
  } else if (piocheSecondaire) {
    nouvelleCarte = piger(piocheSecondaire);

    if (!nouvelleCarte) {
      nouvelleCarte = piocherDepuisPrincipaleJusquaCategorie(categorieZone);
      verifierDeclenchementDecompteParPiochePrincipale();
    }
  }

  if (!nouvelleCarte) {
    return;
  }

  zone.push(nouvelleCarte);
  ajouterInstabiliteSiNecessaire(zone, nouvelleCarte);

  if (verifierEffondrement()) {
    return;
  }
}

function ajouterProgresSurCarteMarche(carte) {
  if (!carte) {
    return;
  }

  if (carthaginoisActif()) {
    ajouterMateriauxSurCarteMarche(carte, 1);
    return;
  }

  initialiserJetonsCarte(carte);
  carte.jetons.progres += 1;
}

async function transfererCarteMarcheVersMain(zone, options = {}) {
  if (!zone || zone.length === 0) {
    return false;
  }

  const {
    prendreInstabilite = true,
    renvoyerInstabiliteDansPile = false
  } = options;

  const cartePrincipale = zone[0];
  const carteDessous = zone[1];

  if (!cartePrincipale) {
    return false;
  }

  let instabiliteRecuperee = false;

 initialiserJetonsCarte(cartePrincipale);
gagnerJetonsCarte(cartePrincipale);

await proposerEpuisementPuissanceCarthaginoisSiCarteMarcheAvecMateriaux(cartePrincipale);
attribuerMateriauxCarteMarcheRecuperee(cartePrincipale);

jeu.joueurZones.mainJoueur.push(cartePrincipale);
  

  if (carteDessous && categoriePrincipaleCarte(carteDessous) === CATEGORIES.INSTABILITE) {
    if (prendreInstabilite) {
      jeu.joueurZones.mainJoueur.push(carteDessous);
      instabiliteRecuperee = true;
    }

    if (renvoyerInstabiliteDansPile) {
      jeu.piles.piocheMarcheInstabilite.push(carteDessous);
      melanger(jeu.piles.piocheMarcheInstabilite);
    }
  }

  alimenterZoneMarche(zone);
  rafraichirAffichagesPrincipaux();

  if (instabiliteRecuperee) {
    await declencherVikingsApresRecuperationInstabilite();
  }

  return true;
}

async function transfererCarteMarcheVersMainAvecRetour(zone, options = {}) {
  if (!zone || zone.length === 0) {
    return false;
  }

  const {
    prendreInstabilite = true,
    renvoyerInstabiliteDansPile = false
  } = options;

  const cartePrincipale = zone[0];
  const carteDessous = zone[1];

  if (!cartePrincipale) {
    return false;
  }

  initialiserJetonsCarte(cartePrincipale);
gagnerJetonsCarte(cartePrincipale);

await proposerEpuisementPuissanceCarthaginoisSiCarteMarcheAvecMateriaux(cartePrincipale);
attribuerMateriauxCarteMarcheRecuperee(cartePrincipale);

jeu.joueurZones.mainJoueur.push(cartePrincipale);

  if (carteDessous && categoriePrincipaleCarte(carteDessous) === CATEGORIES.INSTABILITE) {
    if (prendreInstabilite) {
      jeu.joueurZones.mainJoueur.push(carteDessous);
    }

    if (renvoyerInstabiliteDansPile) {
      jeu.piles.piocheMarcheInstabilite.push(carteDessous);
      melanger(jeu.piles.piocheMarcheInstabilite);
    }
  }

  alimenterZoneMarche(zone);
  rafraichirAffichagesPrincipaux();
  return cartePrincipale;
}

async function acquerirCarteDansZone(zone) {
  return await transfererCarteMarcheVersMain(zone, {
    prendreInstabilite: true,
    renvoyerInstabiliteDansPile: false
  });
}

function acquerirCarteDansZoneAvecRetour(zone) {
  return transfererCarteMarcheVersMainAvecRetour(zone, {
    prendreInstabilite: true,
    renvoyerInstabiliteDansPile: false
  });
}

function innoverCarteDansZone(zone) {
  return transfererCarteMarcheVersMain(zone, {
    prendreInstabilite: false,
    renvoyerInstabiliteDansPile: true
  });
}

function acquerirPremiereCarteVisible(categorie) {
  const zones = obtenirZonesVisiblesParCategorie(categorie);

  if (zones.length === 0) {
    return false;
  }

  return acquerirCarteDansZone(zones[0]);
}

async function choisirZoneVisibleParCategorie(categorie) {
  const zones = obtenirZonesVisiblesParCategorie(categorie);

  if (zones.length === 0) {
    ouvrirPanneauUI(`Aucune carte visible de catégorie ${categorie}.`, [
      { label: "OK" }
    ]);
    return null;
  }

  if (zones.length === 1) {
    return zones[0];
  }

  const indexChoisi = await demanderChoixTexte(
    `Choisissez une carte ${categorie} :`,
    zones.map(zone => ({ label: zone[0].nom }))
  );

  if (indexChoisi === null) {
    return null;
  }

  if (
    indexChoisi < 0 ||
    indexChoisi >= zones.length
  ) {
    ouvrirPanneauUI("Choix invalide.", [
      { label: "OK" }
    ]);
    return null;
  }

  return zones[indexChoisi];
}

async function acquerirCarteVisibleChoisieParmiCategories(
  categories,
  options = {}
) {
  const { avecRetour = false } = options;
  const categoriesNormalisees = normaliserCategoriesSelectionMarche(categories);

  if (categoriesNormalisees.length === 0) {
    return {
      succes: false,
      categorie: null,
      carte: false
    };
  }

  afficherVue("vue-marche");

  const zonesEligibles = obtenirZonesMarcheAcquerablesPourCategories(
    categoriesNormalisees
  );

  const autoriserExil =
    categoriesNormalisees.includes(CATEGORIES.REGION) &&
    (charsActif() || drakkarsActif()) &&
    obtenirRegionsExilees().length > 0;

  if (zonesEligibles.length === 0 && !autoriserExil) {
    return {
      succes: false,
      categorie: null,
      carte: false
    };
  }

  const texteCategories = categoriesNormalisees.join(" / ");
  const messageSelection =
    categoriesNormalisees.length === 1
      ? `Choisissez la carte ${texteCategories} a acquerir.`
      : `Choisissez une carte a acquerir (${texteCategories}).`;

  return await new Promise(resolve => {
    demarrerSelectionMarche({
      message: messageSelection,
      obligatoire: true,
      autoriserExil: autoriserExil,
      predicate: cleZone => zonesEligibles.includes(cleZone),

      onChoose: async cleZone => {
        const zone = jeu.zonesMarche[cleZone];
        const categorieChoisie = categoriePrincipaleCarte(zone?.[0]) || null;
        const resultatAcquisition = avecRetour
          ? await acquerirCarteDansZoneAvecRetour(zone)
          : await acquerirCarteDansZone(zone);

        if (resultatAcquisition) {
          await declencherCeltesSiPossible(categorieChoisie);
        }

        afficherVue("vue-joueur");
        resolve({
          succes: !!resultatAcquisition,
          categorie: categorieChoisie,
          carte: avecRetour ? (resultatAcquisition || false) : false
        });
      },

      onChooseExil: async () => {
        const carteAcquise = avecRetour
          ? await acquerirRegionDepuisExilAvecRetour()
          : await acquerirRegionDepuisExil();

        if (!carteAcquise) {
          return;
        }

        terminerSelectionMarche();
        afficherVue("vue-joueur");
        resolve({
          succes: true,
          categorie: CATEGORIES.REGION,
          carte: avecRetour ? carteAcquise : false
        });
      },

      onCancel: () => {
        afficherVue("vue-joueur");
        resolve({
          succes: false,
          categorie: null,
          carte: false
        });
      }
    });
  });
}

async function innoverCategorieChoisieParmiCategories(categories) {
  const categoriesNormalisees = normaliserCategoriesSelectionMarche(categories);

  if (categoriesNormalisees.length === 0) {
    return {
      succes: false,
      categorie: null,
      resultat: false
    };
  }

  afficherVue("vue-marche");

  const zonesEligibles = obtenirZonesMarcheInnovablesPourCategories(
    categoriesNormalisees
  );
  const piochesEligibles = obtenirPiochesMarcheInnovablesPourCategories(
    categoriesNormalisees
  );

  if (zonesEligibles.length === 0 && piochesEligibles.length === 0) {
    return {
      succes: false,
      categorie: null,
      resultat: false
    };
  }

  const texteCategories = categoriesNormalisees.join(" / ");
  const messageSelection =
    categoriesNormalisees.length === 1
      ? `Choisissez une carte visible ou la pioche ${texteCategories} a innover.`
      : `Choisissez une carte visible ou une pioche a innover (${texteCategories}).`;

  return await new Promise(resolve => {
    demarrerSelectionMarche({
      message: messageSelection,
      obligatoire: true,
      predicate: cle => {
        return zonesEligibles.includes(cle) || piochesEligibles.includes(cle);
      },

      onChoose: async cle => {
        let categorieChoisie = null;
        let resultatInnovation = false;

        if (zonesEligibles.includes(cle)) {
          const zone = jeu.zonesMarche[cle];
          categorieChoisie = categoriePrincipaleCarte(zone?.[0]) || null;
          resultatInnovation = await innoverCarteDansZone(zone);
        } else if (piochesEligibles.includes(cle)) {
          categorieChoisie = cle;
          resultatInnovation = innoverDepuisPiocheCategorie(cle);
        }

        const innovationReussie =
          !!resultatInnovation && resultatInnovation !== "progres";
        const actionValidee = innovationReussie || resultatInnovation === "progres";

        if (innovationReussie) {
          await declencherCeltesSiPossible(categorieChoisie);
        }

        afficherVue("vue-joueur");
        resolve({
          succes: actionValidee,
          categorie: categorieChoisie,
          resultat: resultatInnovation
        });
      },

      onCancel: () => {
        afficherVue("vue-joueur");
        resolve({
          succes: false,
          categorie: null,
          resultat: false
        });
      }
    });
  });
}

async function acquerirCarteVisibleChoisie(categorie) {
  const resultat = await acquerirCarteVisibleChoisieParmiCategories([categorie], {
    avecRetour: false
  });
  return !!resultat.succes;
}
async function acquerirCarteVisibleChoisieAvecRetour(categorie) {
  const resultat = await acquerirCarteVisibleChoisieParmiCategories([categorie], {
    avecRetour: true
  });
  return resultat.carte || false;
}
async function innoverCarteVisibleChoisie(categorie) {
  const resultat = await innoverCategorieChoisieParmiCategories([categorie]);
  return !!resultat.succes;
}
function innoverDepuisPiocheCategorie(categorie) {
  if (categorie === CATEGORIES.VASSAL) {
    const carteTrouvee = piocherDepuisPrincipaleJusquaCategorie(categorie);

    if (carteTrouvee) {
      jeu.joueurZones.mainJoueur.push(carteTrouvee);
      rafraichirAffichagesPrincipaux();
      return true;
    }

    jeu.joueur.progres += 2;
    afficherZoneJoueur();
    ouvrirPanneauUI(
      "Aucune carte Vassal n'est disponible. Vous gagnez 2 Progrès à la place.",
      [{ label: "OK" }],
      { mode: "toast" }
    );
    return "progres";
  }

  const piocheSecondaire = obtenirPiocheSecondaireParCategorie(categorie);

  if (piocheSecondaire) {
    const carte = piger(piocheSecondaire);

    if (carte) {
      jeu.joueurZones.mainJoueur.push(carte);
      rafraichirAffichagesPrincipaux();
      return true;
    }
  }

  const carteTrouvee = piocherDepuisPrincipaleJusquaCategorie(categorie);

  if (carteTrouvee) {
    jeu.joueurZones.mainJoueur.push(carteTrouvee);
    rafraichirAffichagesPrincipaux();
    return true;
  }

  jeu.joueur.progres += 2;
  afficherZoneJoueur();
  return "progres";
}

async function innoverCategorie(categorie) {
  const resultat = await innoverCategorieChoisieParmiCategories([categorie]);
  return !!resultat.succes;
}
/* =========================================================
   18) COÛTS / DÉVELOPPEMENT
   ========================================================= */

function coutEstGratuit(coutTexte) {
  return !coutTexte || coutTexte === "Aucun";
}

function analyserCoutDeveloppement(coutTexte) {
  if (coutEstGratuit(coutTexte)) {
    return {
      population: 0,
      materiaux: 0
    };
  }

  const matchPopulation = coutTexte.match(/(\d+)\s*Population/i);
  const matchMateriaux = coutTexte.match(/(\d+)\s*Matériaux/i);

  return {
    population: matchPopulation ? Number(matchPopulation[1]) : 0,
    materiaux: matchMateriaux ? Number(matchMateriaux[1]) : 0
  };
}

function calculerPaiementMateriauxOptimise(quantite, materiauxDisponibles, progresDisponibles) {
  const quantiteCible = Number(quantite || 0);
  const materiaux = Number(materiauxDisponibles || 0);
  const progres = Number(progresDisponibles || 0);

  if (quantiteCible <= 0) {
    return { materiaux: 0, progres: 0 };
  }

  const depenseMateriauxInitiale = Math.min(materiaux, quantiteCible);
  const resteInitial = quantiteCible - depenseMateriauxInitiale;
  const depenseProgres = Math.ceil(resteInitial / 2);

  if (depenseProgres > progres) {
    return null;
  }

  let depenseMateriaux = depenseMateriauxInitiale;

  // Si le manque est impair, on retire 1 matériau pour éviter de surpayer.
  if (resteInitial > 0 && (resteInitial % 2 === 1) && depenseMateriaux > 0) {
    depenseMateriaux -= 1;
  }

  return {
    materiaux: depenseMateriaux,
    progres: depenseProgres
  };
}

function peutPayerCout(coutTexte) {
  if (coutEstGratuit(coutTexte)) {
    return true;
  }

  const cout = analyserCoutDeveloppement(coutTexte);

  const manquePopulation = Math.max(0, cout.population - jeu.joueur.population);
  const manqueMateriaux = Math.max(0, cout.materiaux - jeu.joueur.materiaux);

  const progresPourPopulation = manquePopulation;
  const progresPourMateriaux = Math.ceil(manqueMateriaux / 2);

  return jeu.joueur.progres >= (progresPourPopulation + progresPourMateriaux);
}

function payerCoutDeveloppement(coutTexte) {
  if (coutEstGratuit(coutTexte)) {
    return true;
  }

  if (!peutPayerCout(coutTexte)) {
    return false;
  }

  const cout = analyserCoutDeveloppement(coutTexte);

  let restePopulation = cout.population;
  let resteMateriaux = cout.materiaux;

  if (restePopulation > 0) {
    const depensePopulation = Math.min(jeu.joueur.population, restePopulation);
    jeu.joueur.population -= depensePopulation;
    restePopulation -= depensePopulation;

    if (restePopulation > 0) {
      jeu.joueur.progres -= restePopulation;
    }
  }

  if (resteMateriaux > 0) {
    const paiementMateriaux = calculerPaiementMateriauxOptimise(
      resteMateriaux,
      jeu.joueur.materiaux,
      jeu.joueur.progres
    );

    if (!paiementMateriaux) {
      return false;
    }

    jeu.joueur.materiaux -= paiementMateriaux.materiaux;
    jeu.joueur.progres -= paiementMateriaux.progres;
  }

  jeu.joueur.population = Math.max(0, jeu.joueur.population);
  jeu.joueur.materiaux = Math.max(0, jeu.joueur.materiaux);
  jeu.joueur.progres = Math.max(0, jeu.joueur.progres);

  return true;
}

function developperCarteEtoile(indexCarte) {
  const pile = jeu.joueurZones.pileEtoileJoueur;

  if (indexCarte < 0 || indexCarte >= pile.length) {
    return false;
  }

  const carte = pile[indexCarte];

  if (!carte) {
    return false;
  }

  return developperCarteEtoileObjet(carte);
}
/* =========================================================
   19) ACTIONS JOUEUR / TABLEAU / HISTOIRE
   ========================================================= */

   function renvoyerCarteObjetDansPileInstabilite(carte) {
  if (!carte) {
    return false;
  }

  const indexMain = jeu.joueurZones.mainJoueur.indexOf(carte);
  if (indexMain !== -1) {
    jeu.joueurZones.mainJoueur.splice(indexMain, 1);
  }

  const indexDefausse = jeu.joueurZones.defausseJoueur.indexOf(carte);
  if (indexDefausse !== -1) {
    jeu.joueurZones.defausseJoueur.splice(indexDefausse, 1);
  }

  const indexTableau = jeu.joueurZones.tableauJoueur.indexOf(carte);
  if (indexTableau !== -1) {
    jeu.joueurZones.tableauJoueur.splice(indexTableau, 1);
  }

  jeu.piles.piocheMarcheInstabilite.push(carte);
  melanger(jeu.piles.piocheMarcheInstabilite);

  afficherZoneJoueur();
  afficherBasMarche();
  return true;
}

function carteEstEncoreDansUneZoneJouable(carte) {
  return (
    jeu.joueurZones.mainJoueur.includes(carte) ||
    jeu.joueurZones.tableauJoueur.includes(carte) ||
    jeu.joueurZones.defausseJoueur.includes(carte)
  );
}

function trouverIndexCarteDansTableau(carte) {
  return jeu.joueurZones.tableauJoueur.indexOf(carte);
}

function defausserCarteDepuisMain(indexCarte) {
  const main = jeu.joueurZones.mainJoueur;

  if (indexCarte < 0 || indexCarte >= main.length) {
    return;
  }

  const carte = main.splice(indexCarte, 1)[0];
  jeu.joueurZones.defausseJoueur.push(carte);
  afficherZoneJoueur();
}

function archiverCarteObjet(carte) {
  if (!carte) {
    return;
  }

  initialiserReserveCarte(carte);

  const zoneArchivage = obtenirZoneArchivageJoueur();
  zoneArchivage.push(carte);

  if (Array.isArray(carte.reservees) && carte.reservees.length > 0) {
    zoneArchivage.push(...carte.reservees);
    carte.reservees = [];
  }
}

function retirerCarteDeToutesLesZonesJouables(carte) {
  const zones = [
    jeu.joueurZones.mainJoueur,
    jeu.joueurZones.defausseJoueur,
    jeu.joueurZones.tableauJoueur
  ];

  zones.forEach(zone => {
    const index = zone.indexOf(carte);

    if (index !== -1) {
      zone.splice(index, 1);
    }
  });
}

function archiverCarteObjetDepuisNimporteOu(carte) {
  if (!carte) {
    return false;
  }

  retirerCarteDeToutesLesZonesJouables(carte);
  archiverCarteObjet(carte);
  afficherZoneJoueur();
  return true;
}

function archiverCarteObjetDepuisTableau(carte) {
  const indexCarte = trouverIndexCarteDansTableau(carte);

  if (indexCarte === -1) {
    return false;
  }

  jeu.joueurZones.tableauJoueur.splice(indexCarte, 1);
  archiverCarteObjet(carte);
  afficherZoneJoueur();
  return true;
}

function archiverCarteDepuisTableau(indexCarte) {
  const tableau = jeu.joueurZones.tableauJoueur;

  if (indexCarte < 0 || indexCarte >= tableau.length) {
    return;
  }

  const carte = tableau.splice(indexCarte, 1)[0];
  archiverCarteObjet(carte);
  afficherZoneJoueur();
}

function abandonnerCarteTableau(indexCarte) {
  const tableau = jeu.joueurZones.tableauJoueur;

  if (indexCarte < 0 || indexCarte >= tableau.length) {
    return false;
  }

  const carte = tableau[indexCarte];

  if (!carteEstPersistante(carte)) {
    return false;
  }

  initialiserReserveCarte(carte);

  tableau.splice(indexCarte, 1);
  jeu.joueurZones.defausseJoueur.push(carte);

  if (carte.reservees.length > 0) {
    jeu.joueurZones.defausseJoueur.push(...carte.reservees);
    carte.reservees = [];
  }

  afficherZoneJoueur();
  return true;
}

function abandonnerCarteObjet(carte) {
  const indexCarte = trouverIndexCarteDansTableau(carte);

  if (indexCarte === -1) {
    return false;
  }

  return abandonnerCarteTableau(indexCarte);
}

function cartePeutEtreReservee(carte) {
  if (!carte) {
    return false;
  }

  if (carte.reserveInterdite === true) {
    return false;
  }

  if (typeof carte.effet === "string" && carte.effet.includes("ne peut pas être réservée")) {
    return false;
  }

  return true;
}

async function reserverCarteChoisieDepuisMainSousCarte(carteSupport, quantite = 1) {
  if (!carteSupport) {
    return false;
  }

  initialiserReserveCarte(carteSupport);

  for (let i = 0; i < quantite; i += 1) {
    const cartesReservables = jeu.joueurZones.mainJoueur.filter(cartePeutEtreReservee);

    if (cartesReservables.length === 0) {
      ouvrirPanneauUI("Aucune carte de votre main ne peut être réservée.", [
        { label: "OK" }
      ]);
      return false;
    }

    const succes = await new Promise(resolve => {
      demarrerSelectionCarte({
        source: "main",
        message: `Choisissez une carte à réserver sous ${carteSupport.nom}.`,
        obligatoire: true,
        predicate: carte => cartePeutEtreReservee(carte),

        onChoose: async carte => {
          const indexMain = jeu.joueurZones.mainJoueur.indexOf(carte);

          if (indexMain === -1) {
            resolve(false);
            return;
          }

          const carteReservee = jeu.joueurZones.mainJoueur.splice(indexMain, 1)[0];

          if (!carteReservee) {
            resolve(false);
            return;
          }

          carteSupport.reservees.push(carteReservee);
          afficherZoneJoueur();
          resolve(true);
        },

        onCancel: () => {
          resolve(false);
        }
      });
    });

    if (!succes) {
      return false;
    }
  }

  afficherZoneJoueur();
  return true;
}
function obtenirCartesTableauParCategorie(categorie) {
  return jeu.joueurZones.tableauJoueur.filter(carte => inclutCategorie(carte, categorie));
}

async function choisirEtAbandonnerCartesTableauParCategorie(categorie, quantite, options = {}) {
  const obligatoireSelection = options.obligatoireSelection !== false;
  const cartesEligibles = obtenirCartesTableauParCategorie(categorie);

  if (cartesEligibles.length < quantite) {
    ouvrirPanneauUI(`Vous n'avez pas assez de cartes ${categorie} à abandonner.`, [
      { label: "OK" }
    ]);
    return false;
  }

  const cartesChoisies = [];

  for (let i = 0; i < quantite; i += 1) {
    const cartesRestantes = jeu.joueurZones.tableauJoueur.filter(carte =>
      inclutCategorie(carte, categorie) &&
      !cartesChoisies.includes(carte)
    );

    if (cartesRestantes.length === 0) {
      break;
    }

    const carteChoisie = await new Promise(resolve => {
      demarrerSelectionCarte({
        source: "tableau",
        message: `Choisissez une carte ${categorie} à abandonner (${i + 1}/${quantite}).`,
        obligatoire: obligatoireSelection,
        predicate: carte =>
          inclutCategorie(carte, categorie) &&
          !cartesChoisies.includes(carte),

        onChoose: async carte => {
          resolve(carte);
        },

        onCancel: () => {
          resolve(null);
        }
      });
    });

    if (!carteChoisie) {
      return false;
    }

    cartesChoisies.push(carteChoisie);
  }

  cartesChoisies.forEach(carte => {
    abandonnerCarteObjet(carte);
  });

  afficherZoneJoueur();
  return true;
}

async function archiverCarteChoisieDepuisMainOuDefausse() {
  const main = jeu.joueurZones.mainJoueur || [];
  const defausse = jeu.joueurZones.defausseJoueur || [];

  if (main.length === 0 && defausse.length === 0) {
    ouvrirPanneauUI("Aucune carte disponible à archiver depuis la main ou la défausse.", [
      { label: "OK" }
    ]);
    return false;
  }

  return await new Promise(resolve => {
    const succesOuverture = ouvrirPanneauArchiverCartes(({ zone, index }) => {
      let carte = null;

      if (zone === "main") {
        carte = jeu.joueurZones.mainJoueur.splice(index, 1)[0];
      } else if (zone === "defausse") {
        carte = jeu.joueurZones.defausseJoueur.splice(index, 1)[0];
      }

      if (!carte) {
        resolve(false);
        return;
      }

      archiverCarteObjet(carte);
      afficherZoneJoueur();
      resolve(true);
    });

    if (!succesOuverture) {
      resolve(false);
      return;
    }

    const btnFermer = getElement("btn-fermer-archiver");

    if (btnFermer) {
      btnFermer.onclick = () => {
        fermerPanneauArchiver();
        resolve(false);
      };
    }
  });
}

function trouverCarteDansTableauParNom(nomCarte) {
  if (!nomCarte) {
    return null;
  }

  return jeu.joueurZones.tableauJoueur.find(carte => carte.nom === nomCarte) || null;
}

function archiverCarteTableauParNom(nomCarte) {
  const carte = trouverCarteDansTableauParNom(nomCarte);

  if (!carte) {
    return false;
  }

  return archiverCarteObjetDepuisTableau(carte);
}

/* =========================================================
   20) EXIL
   ========================================================= */

function exilerCarte(carte) {
  if (!carte) {
    return false;
  }

  jeu.piles.exil.push(carte);
  afficherPileExil();
  return true;
}

function exilerCarteDansZone(zone) {
  if (!zone || zone.length === 0) {
    return false;
  }

  const cartePrincipale = zone[0];
  const carteDessous = zone[1];

  if (!cartePrincipale) {
    return false;
  }

  initialiserJetonsCarte(cartePrincipale);

  const totalJetons =
    (cartePrincipale.jetons.population || 0) +
    (cartePrincipale.jetons.materiaux || 0) +
    (cartePrincipale.jetons.progres || 0);

  if (totalJetons > 0) {
    ouvrirPanneauUI(`Vous ne pouvez pas exiler une carte sur laquelle se trouvent des jetons.`,[
      {label: "OK"}
    ]);
    return false;
  }

  exilerCarte(cartePrincipale);

  if (carteDessous && categoriePrincipaleCarte(carteDessous) === CATEGORIES.INSTABILITE) {
    jeu.piles.piocheMarcheInstabilite.push(carteDessous);
  }

  alimenterZoneMarche(zone);

  afficherBasMarche();
  afficherHautMarche();
  afficherPileExil();
  return true;
}

/* =========================================================
   21) DÉFAUSSE / PANNEAU DÉFAUSSE
   ========================================================= */

function afficherZoomCarteDepuisHTML(html) {
  if (jeu.ui.modeInteraction) {
    return;
  }

  const zoomCarte = getElement("zoom-carte");

  if (!zoomCarte) {
    return;
  }

  zoomCarte.innerHTML = `
    <div class="carte carte-zoom">
      ${html}
    </div>
  `;
  zoomCarte.style.display = "block";
}

function ouvrirVueDefausse(modeSelection = false, callbackSelection = null, predicateCarte = null) {
  const panneau = getElement("panneau-defausse");
  const contenu = getElement("contenu-defausse");

  debugLog("TEST ouvrirVueDefausse: appelée", { modeSelection, predicateCarte, panneau, contenu });
  debugLog("TEST defausse brute =", (jeu.joueurZones.defausseJoueur || []).map(c => ({
    nom: c.nom,
    categorie: c.categorie,
    typeCarte: c.typeCarte,
    typeRegion: c.typeRegion
  })));

  if (!panneau || !contenu) {
    if (modeSelection && callbackSelection) {
      callbackSelection(null);
    }
    return;
  }

  jeu.ui.defausseOuverte = true;
  jeu.ui.selectionDansDefausseActive = modeSelection;
  jeu.ui.callbackSelectionDansDefausse = modeSelection ? callbackSelection : null;

  contenu.innerHTML = "";

  const cartes = (jeu.joueurZones.defausseJoueur || []).filter(carte =>
    typeof predicateCarte === "function" ? predicateCarte(carte) : true
  );

  debugLog("TEST cartes filtrées =", cartes.map(c => ({
    nom: c.nom,
    categorie: c.categorie,
    typeCarte: c.typeCarte,
    typeRegion: c.typeRegion
  })));

  if (cartes.length === 0) {
    contenu.innerHTML = `<div class="message-defausse-vide">Défausse vide.</div>`;
  } else {
    cartes.forEach(carte => {
      const div = document.createElement("div");
      div.className = "carte carte-defausse-mini";
      div.innerHTML = creerCarteHTML(carte);

      div.addEventListener("mouseenter", () => {
  if (jeu.ui.modeInteraction) {
    return;
  }
  afficherZoomCarteDepuisHTML(div.innerHTML);
});

      div.addEventListener("mouseleave", () => {
  jeu.ui.blocageZoomJusquaMouseleave = false;
  if (jeu.ui.modeInteraction) {
    return;
  }
  if (!jeu.ui.zoomVerrouille && !jeu.ui.regardRenommeeActif) {
    fermerZoomTemporaire();
  }
});

      div.addEventListener("click", () => {
  if (modeSelection) {
    const callback = jeu.ui.callbackSelectionDansDefausse;
    fermerVueDefausse(false);
    if (callback) {
      callback(carte);
    }
    return;
  }

  ouvrirZoomVerrouillePourCarte(carte);
});
      contenu.appendChild(div);
    });
  }

  panneau.style.display = "flex";
  panneau.style.visibility = "visible";
  panneau.style.opacity = "1";
  panneau.style.zIndex = "9999";

  debugLog("TEST style panneau =", {
    display: panneau.style.display,
    visibility: panneau.style.visibility,
    opacity: panneau.style.opacity,
    zIndex: panneau.style.zIndex
  });
}

function fermerVueDefausse(confirmerAnnulationSelection = true) {
  const panneau = getElement("panneau-defausse");
  const contenu = getElement("contenu-defausse");

  if (!panneau || !contenu) {
    debugLog("DEBUG ERIK | fermerVueDefausse: panneau ou contenu introuvable");
    return;
  }

  const etaitEnModeSelection = jeu.ui.selectionDansDefausseActive;
  const callback = jeu.ui.callbackSelectionDansDefausse;

  debugLog("DEBUG ERIK | fermerVueDefausse AVANT reset", {
    confirmerAnnulationSelection,
    etaitEnModeSelection,
    callbackExiste: typeof callback === "function"
  });

  jeu.ui.defausseOuverte = false;
  jeu.ui.selectionDansDefausseActive = false;
  jeu.ui.callbackSelectionDansDefausse = null;

  panneau.style.display = "none";
  contenu.innerHTML = "";

  if (confirmerAnnulationSelection && etaitEnModeSelection && typeof callback === "function") {
    debugLog("DEBUG ERIK | fermerVueDefausse -> callback(null)");
    callback(null);
  } else {
    debugLog("DEBUG ERIK | fermerVueDefausse -> PAS de callback(null)");
  }
}

/* =========================================================
   22) PAIEMENT DE RESSOURCES
   ========================================================= */

function peutPayerRessource(typeRessource, quantite) {
  if (!typeRessource || quantite <= 0) {
    return true;
  }

  if (typeRessource === "population") {
    const manque = Math.max(0, quantite - jeu.joueur.population);
    return jeu.joueur.progres >= manque;
  }

  if (typeRessource === "materiaux") {
    const manque = Math.max(0, quantite - jeu.joueur.materiaux);
    return jeu.joueur.progres >= Math.ceil(manque / 2);
  }

  if (typeRessource === "progres") {
    return jeu.joueur.progres >= quantite;
  }

  if (typeRessource === "actions") {
    return jeu.joueur.actions >= quantite;
  }

  return false;
}

function payerRessource(typeRessource, quantite) {
  if (!peutPayerRessource(typeRessource, quantite)) {
    return false;
  }

  if (quantite <= 0) {
    return true;
  }

  if (typeRessource === "population") {
    const depensePopulation = Math.min(jeu.joueur.population, quantite);
    jeu.joueur.population -= depensePopulation;

    const reste = quantite - depensePopulation;
    if (reste > 0) {
      jeu.joueur.progres -= reste;
    }

    return true;
  }

  if (typeRessource === "materiaux") {
    const paiementMateriaux = calculerPaiementMateriauxOptimise(
      quantite,
      jeu.joueur.materiaux,
      jeu.joueur.progres
    );

    if (!paiementMateriaux) {
      return false;
    }

    jeu.joueur.materiaux -= paiementMateriaux.materiaux;
    jeu.joueur.progres -= paiementMateriaux.progres;

    return true;
  }

  if (typeRessource === "progres") {
    jeu.joueur.progres -= quantite;
    return true;
  }

  if (typeRessource === "actions") {
    jeu.joueur.actions -= quantite;
    return true;
  }

  return false;
}

function decrireCoutReelRessource(typeRessource, quantite) {
  const q = Number(quantite || 0);

  if (!typeRessource || q <= 0) {
    return "";
  }

  if (!peutPayerRessource(typeRessource, q)) {
    return "impossible actuellement";
  }

  if (typeRessource === "population") {
    const depensePopulation = Math.min(jeu.joueur.population, q);
    const depenseProgres = q - depensePopulation;
    const morceaux = [];

    if (depensePopulation > 0) {
      morceaux.push(`${depensePopulation} Population`);
    }

    if (depenseProgres > 0) {
      morceaux.push(`${depenseProgres} Progrès`);
    }

    return morceaux.join(" + ");
  }

  if (typeRessource === "materiaux") {
    const paiement = calculerPaiementMateriauxOptimise(
      q,
      jeu.joueur.materiaux,
      jeu.joueur.progres
    );

    if (!paiement) {
      return "impossible actuellement";
    }

    const morceaux = [];

    if (paiement.materiaux > 0) {
      morceaux.push(`${paiement.materiaux} Matériaux`);
    }

    if (paiement.progres > 0) {
      morceaux.push(`${paiement.progres} Progrès`);
    }

    return morceaux.join(" + ");
  }

  if (typeRessource === "progres") {
    return `${q} Progrès`;
  }

  if (typeRessource === "actions") {
    return `${q} action(s)`;
  }

  return "";
}

function extrairePaiementsPourLibelleDepuisEffets(effets = [], paiements = []) {
  if (!Array.isArray(effets)) {
    return paiements;
  }

  const typesPaiementCompose = new Set([
    "lancerPaiementPuisAcquerirParmiCategories",
    "lancerPaiementPuisInnoverParmiCategories",
    "payerPuisAcquerirParmiCategories",
    "payerPuisInnoverParmiCategories"
  ]);

  for (const effet of effets) {
    if (!effet || typeof effet !== "object") {
      continue;
    }

    if (effet.type === "payer") {
      paiements.push({
        ressource: effet.ressource,
        quantite: Number(effet.quantite || 0)
      });
    } else if (effet.type === "payerAction") {
      paiements.push({
        ressource: "actions",
        quantite: Number(effet.quantite || 0)
      });
    } else if (typesPaiementCompose.has(effet.type)) {
      paiements.push({
        ressource: effet.ressource,
        quantite: Number(effet.quantite || 0)
      });
    }

    if (Array.isArray(effet.effets)) {
      extrairePaiementsPourLibelleDepuisEffets(effet.effets, paiements);
    }

    if (Array.isArray(effet.effetSiOui)) {
      extrairePaiementsPourLibelleDepuisEffets(effet.effetSiOui, paiements);
    }
  }

  return paiements;
}

function enrichirLibelleOptionAvecCoutReel(label, effets = []) {
  const texte = String(label || "").trim();

  if (!texte || /\[\s*Coût réel\s*:/i.test(texte)) {
    return texte;
  }

  const paiements = extrairePaiementsPourLibelleDepuisEffets(effets);
  if (!Array.isArray(paiements) || paiements.length === 0) {
    return texte;
  }

  const morceaux = paiements
    .filter(item =>
      item &&
      typeof item.ressource === "string" &&
      Number(item.quantite || 0) > 0
    )
    .map(item => decrireCoutReelRessource(item.ressource, item.quantite))
    .filter(Boolean);

  if (morceaux.length === 0) {
    return texte;
  }

  return `${texte} [Coût réel: ${morceaux.join(" + ")}]`;
}

/* =========================================================
   23) CHOIX DE CATÉGORIES / ACTIONS LIÉES AU MARCHÉ
   ========================================================= */

async function choisirCategorie(categories) {
  if (!Array.isArray(categories) || categories.length === 0) {
    return null;
  }

  const indexChoisi = await demanderChoixTexte(
    "Choisissez une catégorie :",
    categories.map(categorie => ({ label: categorie }))
  );

  if (indexChoisi === null) {
    return null;
  }

  if (
    indexChoisi < 0 ||
    indexChoisi >= categories.length
  ) {
    ouvrirPanneauUI("Choix invalide.", [{ label: "OK" }]);
    return null;
  }

  return categories[indexChoisi];
}

async function choisirCategorieAuMarche(categories) {
  if (!Array.isArray(categories) || categories.length === 0) {
    return null;
  }

  afficherVue("vue-marche");
  return await choisirCategorie(categories);
}

async function payerPuisAcquerirParmiCategories(ressource, quantite, categories) {
  const categoriesNormalisees = normaliserCategoriesSelectionMarche(categories);

  if (categoriesNormalisees.length === 0) {
    return false;
  }

  if (!existeCarteAccessiblePourAcquerir(categoriesNormalisees)) {
    ouvrirPanneauUI("Aucune carte visible correspondante ne peut être acquise.", [
      { label: "OK" }
    ]);
    return false;
  }

  afficherVue("vue-marche");

  const succesPaiement = payerRessource(ressource, quantite);

  if (!succesPaiement) {
    ouvrirPanneauUI(`Impossible de payer ${quantite} ${ressource}.`, [
      { label: "OK" }
    ]);
    afficherZoneJoueur();
    return false;
  }

  afficherZoneJoueur();

  const resultatAcquisition = await acquerirCarteVisibleChoisieParmiCategories(
    categoriesNormalisees,
    { avecRetour: false }
  );
  const succesAcquisition = !!resultatAcquisition.succes;
  const categorieChoisie = resultatAcquisition.categorie;

  if (succesAcquisition && categorieChoisie) {
    await proposerEpuisementPuissanceCeltesSiTradition(categorieChoisie);
  }

  if (!succesAcquisition) {
    ouvrirPanneauUI("Aucune carte visible correspondante ne peut être acquise.", [
      { label: "OK" }
    ]);
    return false;
  }

  afficherVue("vue-joueur");
  afficherZoneJoueur();
  return true;
}

async function payerPuisInnoverParmiCategories(ressource, quantite, categories) {
  const categoriesNormalisees = normaliserCategoriesSelectionMarche(categories);

  if (categoriesNormalisees.length === 0) {
    return false;
  }

  afficherVue("vue-marche");

  const succesPaiement = payerRessource(ressource, quantite);

  if (!succesPaiement) {
    ouvrirPanneauUI(`Impossible de payer ${quantite} ${ressource}.`, [
      { label: "OK" }
    ]);
    afficherZoneJoueur();
    return false;
  }

  afficherZoneJoueur();

  const resultatInnovation = await innoverCategorieChoisieParmiCategories(
    categoriesNormalisees
  );
  const actionValidee = !!resultatInnovation.succes;
  const categorieChoisie = resultatInnovation.categorie;

  if (actionValidee && categorieChoisie) {
    await proposerEpuisementPuissanceCeltesSiTradition(categorieChoisie);
  }

  afficherVue("vue-joueur");
  afficherZoneJoueur();

  return actionValidee;
}

async function choisirAcquerirOuInnoverDansCategories(mode, categories) {
  const categoriesNormalisees = normaliserCategoriesSelectionMarche(categories);

  if (categoriesNormalisees.length === 0) {
    return false;
  }

  if (mode === "acquerir") {
    const resultatAcquisition = await acquerirCarteVisibleChoisieParmiCategories(
      categoriesNormalisees,
      { avecRetour: false }
    );

    if (!resultatAcquisition.succes) {
      ouvrirPanneauUI("Aucune carte visible correspondante ne peut être acquise.", [
        { label: "OK" }
      ]);
      return false;
    }

    if (resultatAcquisition.categorie) {
      await proposerEpuisementPuissanceCeltesSiTradition(
        resultatAcquisition.categorie
      );
    }

    return true;
  }

  if (mode === "innover") {
    const resultatInnovation = await innoverCategorieChoisieParmiCategories(
      categoriesNormalisees
    );

    if (!resultatInnovation.succes) {
      return false;
    }

    if (resultatInnovation.categorie) {
      await proposerEpuisementPuissanceCeltesSiTradition(
        resultatInnovation.categorie
      );
    }

    return true;
  }

  return false;
}
async function lancerPaiementPuisAcquisition(ressource, quantite, categories) {
  const categoriesNormalisees = normaliserCategoriesSelectionMarche(categories);

  if (categoriesNormalisees.length === 0) {
    return false;
  }

  if (!existeCarteAccessiblePourAcquerir(categoriesNormalisees)) {
    ouvrirPanneauUI("Aucune carte visible correspondante ne peut être acquise.", [
      { label: "OK" }
    ]);
    return false;
  }

  const succesPaiement = payerRessource(ressource, quantite);

  if (!succesPaiement) {
    ouvrirPanneauUI(`Impossible de payer ${quantite} ${ressource}.`, [
      { label: "OK" }
    ]);
    afficherZoneJoueur();
    return false;
  }

  afficherZoneJoueur();

  const resultatAcquisition = await acquerirCarteVisibleChoisieParmiCategories(
    categoriesNormalisees,
    { avecRetour: false }
  );

  if (!resultatAcquisition.succes) {
    ouvrirPanneauUI("Aucune carte visible correspondante ne peut être acquise.", [
      { label: "OK" }
    ]);
    return false;
  }

  if (resultatAcquisition.categorie) {
    await proposerEpuisementPuissanceCeltesSiTradition(
      resultatAcquisition.categorie
    );
  }

  afficherVue("vue-joueur");
  afficherZoneJoueur();
  return true;
}

async function lancerPaiementPuisInnovation(ressource, quantite, categories) {
  const categoriesNormalisees = normaliserCategoriesSelectionMarche(categories);

  if (categoriesNormalisees.length === 0) {
    return false;
  }

  if (!peutPayerRessource(ressource, quantite)) {
    ouvrirPanneauUI(`Impossible de payer ${quantite} ${ressource}.`, [
      { label: "OK" }
    ]);
    afficherZoneJoueur();
    return false;
  }

  const resultatInnovation = await innoverCategorieChoisieParmiCategories(
    categoriesNormalisees
  );

  if (!resultatInnovation.succes) {
    afficherVue("vue-joueur");
    afficherZoneJoueur();
    return false;
  }

  const payerSeulementSiInnovation =
    resultatInnovation.resultat !== "progres";

  if (payerSeulementSiInnovation) {
    const succesPaiement = payerRessource(ressource, quantite);

    if (!succesPaiement) {
      ouvrirPanneauUI(`Impossible de payer ${quantite} ${ressource}.`, [
        { label: "OK" }
      ]);
      afficherVue("vue-joueur");
      afficherZoneJoueur();
      return false;
    }
  }

  if (resultatInnovation.categorie) {
    await proposerEpuisementPuissanceCeltesSiTradition(
      resultatInnovation.categorie
    );
  }

  afficherVue("vue-joueur");
  afficherZoneJoueur();
  afficherBasMarche?.();
  afficherHautMarche?.();
  return true;
}
/* =========================================================
   24) VALIDATION DE JOUABILITÉ DES CARTES
   ========================================================= */

function cartePeutEtreJouee(carte, options = {}) {
  if (!carte) {
    return false;
  }

  if (carte.jouable === false) {
    ouvrirPanneauUI("Cette carte ne peut pas être jouée.", [
      { label: "OK" }
    ]);
    return false;
  }

  if (carte.conditionJeu?.nomCarteDansTableau) {
    const carteRequise = trouverCarteDansTableauParNom(carte.conditionJeu.nomCarteDansTableau);

    if (!carteRequise) {
      ouvrirPanneauUI(
        `Cette carte ne peut être jouée que si ${carte.conditionJeu.nomCarteDansTableau} est en jeu.`,
        [{ label: "OK" }]
      );
      return false;
    }
  }

  if (Array.isArray(carte.conditionJeu?.nomsCartesDansTableau)) {
    const cartesManquantes = carte.conditionJeu.nomsCartesDansTableau.filter(
      nomCarte => !trouverCarteDansTableauParNom(nomCarte)
    );

    if (cartesManquantes.length > 0) {
      const texteCartes = cartesManquantes.join(" et ");

      ouvrirPanneauUI(
        `Cette carte ne peut être jouée que si ${texteCartes} est en jeu.`,
        [{ label: "OK" }]
      );
      return false;
    }
  }

  if (carte.conditionJeu?.nomCarteDansHistoire) {
    const carteRequise = (jeu.joueurZones.histoireJoueur || []).find(
      c => c && c.nom === carte.conditionJeu.nomCarteDansHistoire
    );

    if (!carteRequise) {
      ouvrirPanneauUI(
        `Cette carte ne peut être jouée que si ${carte.conditionJeu.nomCarteDansHistoire} est dans votre Histoire.`,
        [{ label: "OK" }]
      );
      return false;
    }
  }

  const ignorerCoutAction = options?.ignorerCoutAction === true;

  if (!ignorerCoutAction && !estActionGratuite(carte) && jeu.joueur.actions <= 0) {
    avertir("Vous n'avez plus d'actions.");
    return false;
  }

  const statutVisible = jeu.joueurZones.carteStatutVisible;

  const carteCompteCommeBarbare =
    carte.statut === STATUTS.BARBARE &&
    !(
      (carteEstConquete(carte) && conqueteIgnoreStatutBarbare()) ||
      (carte.pin === PINS.EPEE && epeeIgnoreStatutBarbare()) ||
      (carteEstProgres(carte) && progresIgnoreStatutBarbare())
    );

  if (
    carteCompteCommeBarbare &&
    statutVisible &&
    statutVisible.nom !== STATUTS.BARBARE
  ) {
    avertir("Cette carte ne peut être jouée que si votre statut est Barbare.");
    return false;
  }

  if (
    carte.statut === STATUTS.EMPIRE &&
    statutVisible &&
    statutVisible.nom !== STATUTS.EMPIRE &&
    !peignesActif()
  ) {
    avertir("Cette carte ne peut être jouée que si votre statut est Empire.");
    return false;
  }

  return true;
}

function existeAcquisitionPourCategorie(categorie) {
  return obtenirZonesVisiblesParCategorie(categorie).length > 0;
}

function existeCarteAccessiblePourAcquerir(categories) {
  if (!Array.isArray(categories) || categories.length === 0) {
    return false;
  }

  return categories.some(categorie => {
    if (existeAcquisitionPourCategorie(categorie)) {
      return true;
    }

    if (
      categorie === CATEGORIES.REGION &&
      (charsActif() || drakkarsActif()) &&
      obtenirRegionsExilees().length > 0
    ) {
      return true;
    }

    return false;
  });
}

function existeCarteAccessiblePourInnover(categories) {
  if (!Array.isArray(categories) || categories.length === 0) {
    return false;
  }

  return categories.some(categorie => {
    if (obtenirZonesVisiblesParCategorie(categorie).length > 0) {
      return true;
    }

    const piocheSecondaire = obtenirPiocheSecondaireParCategorie(categorie);

    if (piocheSecondaire && piocheSecondaire.length > 0) {
      return true;
    }

    return jeu.piles.piochePrincipale.some(
      carte => categoriePrincipaleCarte(carte) === categorie
    );
  });
}

function charsActif() {
  return passifActifDansTableau("Chars");
  function charsActif() {
  const actif = passifActifDansTableau("Chars");
  return actif;
}
}

function carteIgnoreRestrictionBarbareAvecChars(carte) {
  if (!charsActif()) {
    return false;
  }

  if (!carte) {
    return false;
  }

  return carte.pin === "Épée" || carte.typeCarte === "Conquête";
}

function conqueteIgnoreStatutBarbare() {
  return (
    passifActifDansTableau("Légions") ||
    passifActifDansTableau("Cavalerie des compagnons") ||
    charsActif()
  );
}

function epeeIgnoreStatutBarbare() {
  return charsActif();
}

/* =========================================================
   25) CHOIX DE CATÉGORIE AU MARCHÉ (UI TEMPORAIRE)
   ========================================================= */

   function piocheMarcheEstSelectionnable(clePioche) {
  if (!jeu.ui.selectionMarcheActive) {
    return false;
  }

  if (typeof jeu.ui.selectionMarchePredicate !== "function") {
    return false;
  }

  return !!jeu.ui.selectionMarchePredicate(clePioche);
}

async function choisirPiocheViaSelectionMarche(clePioche) {
  if (!piocheMarcheEstSelectionnable(clePioche)) {
    return false;
  }

  const callback = jeu.ui.selectionMarcheOnChoose;
  terminerSelectionMarche();

  if (typeof callback === "function") {
    return await callback(clePioche);
  }

  return false;
}

 function appliquerEtatSelectionMarche() {
  const zones = document.querySelectorAll("[data-zone-marche]");

  // Sécurité anti-softlock : si l'étape "ajouter 1 Progrès" est active
  // mais qu'aucune carte du marché n'est visible, on passe directement
  // à l'étape suivante du nettoyage.
  if (jeu.ui.choixProgresMarcheActif && obtenirCartesVisiblesMarche().length === 0) {
    terminerChoixProgresMarcheEtPasserAuNettoyage(
      "Le marché est vide : ajout de Progrès ignoré. Vous pouvez maintenant défausser des cartes puis terminer le nettoyage."
    );
    return;
  }

  zones.forEach(elementZone => {
    const cleZone = elementZone.dataset.zoneMarche;
    const selectionnable = marcheEstSelectionnable(cleZone);

    const cibleClickable =
      elementZone.querySelector(".zone-cartes-marche") ||
      elementZone.querySelector(".pile-visible") ||
      elementZone;

    elementZone.classList.remove(
      "marche-selectionnable",
      "marche-non-selectionnable",
      "marche-choix-progres"
    );
    cibleClickable.classList.remove(
      "marche-selectionnable",
      "marche-non-selectionnable",
      "marche-choix-progres"
    );

    if (jeu.ui.choixProgresMarcheActif) {
      elementZone.classList.add("marche-choix-progres");
      cibleClickable.classList.add("marche-choix-progres");
      cibleClickable.style.cursor = "pointer";
    }

    if (jeu.ui.selectionMarcheActive) {
      if (selectionnable) {
        elementZone.classList.add("marche-selectionnable");
        cibleClickable.classList.add("marche-selectionnable");
        cibleClickable.style.cursor = "pointer";
      } else {
        elementZone.classList.add("marche-non-selectionnable");
        cibleClickable.classList.add("marche-non-selectionnable");
        cibleClickable.style.cursor = "default";
      }
    } else if (!jeu.ui.choixProgresMarcheActif) {
      cibleClickable.style.cursor = "pointer";
    }

    cibleClickable.onclick = async event => {
      event.preventDefault();
      event.stopPropagation();

      if (jeu.ui.selectionMarcheActive) {
        if (marcheEstSelectionnable(cleZone)) {
          await choisirZoneViaSelectionMarche(cleZone);
        }
        return;
      }

      if (jeu.ui.choixProgresMarcheActif) {
  const zone = jeu.zonesMarche[cleZone];
  const cartePrincipale = zone?.[0];

  if (!cartePrincipale) {
    return;
  }

  ajouterProgresSurCarteMarche(cartePrincipale);
  terminerChoixProgresMarcheEtPasserAuNettoyage();
  return;
}

      const zone = jeu.zonesMarche[cleZone];
      const cartePrincipale = zone?.[0];

      if (cartePrincipale) {
        ouvrirZoomVerrouillePourCarte(cartePrincipale);
      }
    };
  });

  const pioches = document.querySelectorAll("[data-pioche-marche]");

  pioches.forEach(elementPioche => {
    const clePioche = elementPioche.dataset.piocheMarche;
    const selectionnable = piocheMarcheEstSelectionnable(clePioche);

    elementPioche.classList.remove("marche-selectionnable", "marche-non-selectionnable");

    if (jeu.ui.selectionMarcheActive) {
      if (selectionnable) {
        elementPioche.classList.add("marche-selectionnable");
        elementPioche.style.cursor = "pointer";
      } else {
        elementPioche.classList.add("marche-non-selectionnable");
        elementPioche.style.cursor = "default";
      }
    } else {
      elementPioche.style.cursor = "default";
    }

    elementPioche.onclick = async event => {
      event.preventDefault();
      event.stopPropagation();

      if (jeu.ui.selectionMarcheActive && piocheMarcheEstSelectionnable(clePioche)) {
        await choisirPiocheViaSelectionMarche(clePioche);
      }
    };
  });
}

  const pioches = document.querySelectorAll("[data-pioche-marche]");

  pioches.forEach(elementPioche => {
    const clePioche = elementPioche.dataset.piocheMarche;
    const selectionnable = piocheMarcheEstSelectionnable(clePioche);

    elementPioche.classList.remove("marche-selectionnable", "marche-non-selectionnable");

    if (jeu.ui.selectionMarcheActive) {
      if (selectionnable) {
        elementPioche.classList.add("marche-selectionnable");
        elementPioche.style.cursor = "pointer";
      } else {
        elementPioche.classList.add("marche-non-selectionnable");
        elementPioche.style.cursor = "default";
      }
    } else {
      elementPioche.style.cursor = "default";
    }

    elementPioche.onclick = async event => {
      event.preventDefault();
      event.stopPropagation();

      if (jeu.ui.selectionMarcheActive && piocheMarcheEstSelectionnable(clePioche)) {
        await choisirPiocheViaSelectionMarche(clePioche);
      }
    };
  });


function demanderCategorieApresAffichageMarche(categories, callback) {
  if (!Array.isArray(categories) || categories.length === 0) {
    return false;
  }

  fermerInterfacesAvantChoixMarche();

  afficherVue("vue-marche");
  planifierAjustementEchelleInterface({ avecRelance: true });

  jeu.ui.actionMarcheEnAttente = {
    categories,
    callback
  };

  afficherChoixCategorieMarche(categories);
  return true;
}

function afficherChoixCategorieMarche(categories) {
  let panneau = getElement("panneau-choix-marche");

  if (!panneau) {
    panneau = document.createElement("div");
    panneau.id = "panneau-choix-marche";
    document.body.appendChild(panneau);
  }

  panneau.innerHTML = `
    <div class="contenu-panneau-choix-marche">
      <div class="titre-choix-marche">Choisissez une catégorie</div>
      <div class="boutons-choix-marche">
        ${categories.map(categorie => `
          <button class="btn-choix-marche" data-categorie="${categorie}">
            ${categorie}
          </button>
        `).join("")}
      </div>
    </div>
  `;

  panneau.style.display = "flex";

  panneau.querySelectorAll(".btn-choix-marche").forEach(bouton => {
    bouton.onclick = () => {
      validerChoixCategorieMarche(bouton.dataset.categorie);
    };
  });
}

function validerChoixCategorieMarche(categorieChoisie) {
  const action = jeu.ui.actionMarcheEnAttente;

  if (!action?.callback) {
    return;
  }

  fermerChoixCategorieMarche();

  const callback = action.callback;
  jeu.ui.actionMarcheEnAttente = null;

  callback(categorieChoisie);
}

function fermerChoixCategorieMarche() {
  const panneau = getElement("panneau-choix-marche");

  if (!panneau) {
    return;
  }

  panneau.style.display = "none";
  panneau.innerHTML = "";
}
/* =========================================================
   26) MOTEUR D’EFFETS
   ========================================================= */

const executeursEffets = {

  volerPopulationAuBotSiEmpire(effet) {
  if (!etatBot || etatBot.statut !== STATUTS.EMPIRE) {
    return true;
  }

  const quantite = effet.quantite || 1;
  const vole = botPerdreRessource("population", quantite);

  if (vole > 0) {
    gagnerRessource("population", vole);
    journal(`Le joueur vole ${vole} Population au Bot.`);
  } else {
    journal("Le Bot n'a aucune Population à voler.");
  }

  afficherZoneJoueur?.();
  afficherZoneBot?.();
  return true;
},

  async rappelerUneRegionDepuisTableau(effet, contexte) {
  const regions = obtenirRegionsDansTableauJoueur();

  if (!Array.isArray(regions) || regions.length === 0) {
    ouvrirPanneauUI("Aucune Région dans votre tableau.", [
      { label: "OK" }
    ]);
    return false;
  }

  const carteChoisie = await new Promise(resolve => {
    demarrerSelectionCarte({
      source: "tableau",
      message: "Choisissez une Région à rappeler.",
      obligatoire: true,
      predicate: carte =>
        carte &&
        inclutCategorie(carte, CATEGORIES.REGION) &&
        (jeu.joueurZones.tableauJoueur || []).includes(carte),
      onChoose: async carte => resolve(carte),
      onCancel: () => resolve(null)
    });
  });

  if (!carteChoisie) {
    return false;
  }

  return rappelerCarteObjetDepuisTableau(carteChoisie);
},

  async rappelerEauOuBlePuisAcquerirCarteMarcheAvecMateriaux(effet, contexte) {
  const minimumMateriauxSurCarte = effet.minimumMateriauxSurCarte || 1;

  return await rappelerEauOuBlePuisAcquerirCarteMarcheAvecMateriaux(minimumMateriauxSurCarte);
},

  async recupererCarteDepuisHistoire(effet, contexte) {
  const histoire = jeu.joueurZones.histoireJoueur || [];

  if (histoire.length === 0) {
    ouvrirPanneauUI("Votre Histoire est vide.", [
      { label: "OK" }
    ]);
    return false;
  }

  const carteChoisie = await demanderCarteDepuisHistoire(
    typeof effet.predicateCarte === "function" ? effet.predicateCarte : null
  );

  if (!carteChoisie) {
    return false;
  }

  const indexHistoire = jeu.joueurZones.histoireJoueur.indexOf(carteChoisie);

  if (indexHistoire === -1) {
    return false;
  }

  const carteRecuperee = jeu.joueurZones.histoireJoueur.splice(indexHistoire, 1)[0];
  jeu.joueurZones.mainJoueur.push(carteRecuperee);

  afficherZoneJoueur();
  fermerVueHistoire();
  return true;
},

  async acquerirCarteMarcheAvecMateriaux(effet, contexte) {
  const coutMateriaux = effet.coutMateriaux || 0;
  const cartesADefausser = effet.cartesADefausser || 1;
  const minimumMateriauxSurCarte = effet.minimumMateriauxSurCarte || 1;

  if (!existeCarteMarcheAvecMateriaux(minimumMateriauxSurCarte)) {
    ouvrirPanneauUI("Aucune carte du Marché avec des Matériaux n'est disponible.", [
      { label: "OK" }
    ]);
    return false;
  }

  if ((jeu.joueur.materiaux || 0) < coutMateriaux) {
    ouvrirPanneauUI(`Impossible de payer ${coutMateriaux} Matériaux.`, [
      { label: "OK" }
    ]);
    return false;
  }

  if ((jeu.joueurZones.mainJoueur || []).length < cartesADefausser) {
    ouvrirPanneauUI(`Vous devez défausser ${cartesADefausser} carte(s) de votre main.`, [
      { label: "OK" }
    ]);
    return false;
  }

  const succesPaiement = payerRessource("materiaux", coutMateriaux);
  if (!succesPaiement) {
    ouvrirPanneauUI(`Impossible de payer ${coutMateriaux} Matériaux.`, [
      { label: "OK" }
    ]);
    return false;
  }

  afficherZoneJoueur();

  const succesDefausse = await defausserCarteChoisieDepuisMain(cartesADefausser);
  if (!succesDefausse) {
    gagnerRessource("materiaux", coutMateriaux);
    afficherZoneJoueur();
    return false;
  }

  const succesAcquisition = await acquerirCarteMarcheAvecMateriauxChoisie(minimumMateriauxSurCarte);

  if (!succesAcquisition) {
    return false;
  }

  return true;
},

  async ajouterMateriauxSurCarteVisibleDuMarche(effet) {
  const quantite = effet.quantite || 1;

  afficherVue("vue-marche");
  afficherBasMarche?.();
    afficherHautMarche?.();

  const zonesEligibles = obtenirClesZonesMarche().filter(cleZone => {
    const zone = jeu.zonesMarche[cleZone];
    const carte = Array.isArray(zone) && zone.length > 0 ? zone[0] : null;
    return !!carte;
  });

  if (zonesEligibles.length === 0) {
    ouvrirPanneauUI("Aucune carte visible du Marché.", [
      { label: "OK" }
    ]);
    afficherVue("vue-joueur");
    return false;
  }

  return await new Promise(resolve => {
    demarrerSelectionMarche({
      message: "Choisissez une carte du Marché pour y ajouter 1 Matériaux.",
      obligatoire: true,

      predicate: cleZone => zonesEligibles.includes(cleZone),

      onChoose: async cleZone => {
        const zone = jeu.zonesMarche[cleZone];
        const carte = Array.isArray(zone) && zone.length > 0 ? zone[0] : null;

        if (!carte) {
          terminerSelectionMarche();
          afficherVue("vue-joueur");
          resolve(false);
          return;
        }

        ajouterMateriauxSurCarteMarche(carte, quantite);

        terminerSelectionMarche();
        afficherBasMarche?.();
        afficherHautMarche?.();
        afficherVue("vue-joueur");
        resolve(true);
      },

      onCancel: () => {
        terminerSelectionMarche();
        afficherVue("vue-joueur");
        resolve(false);
      }
    });
  });
},

  activerDoubleMateriauxCarthaginois() {
  jeu.manche.modificateursTour = jeu.manche.modificateursTour || {};
  jeu.manche.modificateursTour.doubleMateriauxCarthaginoisActif = true;
  afficherZoneJoueur?.();
  return true;
},

 async renvoyerJusquaNInstabilitesDepuisMain(effet) {
  const max = effet.quantiteMax || 1;
  let nbRenvoyees = 0;

  for (let i = 0; i < max; i++) {
    const main = jeu.joueurZones.mainJoueur || [];

    const instabilites = main.filter(carte =>
      carte && categoriePrincipaleCarte(carte) === CATEGORIES.INSTABILITE
    );

    if (instabilites.length === 0) {
      break;
    }

    const carteChoisie = await new Promise(resolve => {
      demarrerSelectionCarte({
        source: "main",
        message: "Choisissez une Instabilité à renvoyer.",
        obligatoire: true,
        predicate: carte =>
          carte && categoriePrincipaleCarte(carte) === CATEGORIES.INSTABILITE,

        onChoose: async carte => resolve(carte),
        onCancel: () => resolve(null)
      });
    });

    if (!carteChoisie) {
      break;
    }

    const indexChoisi = main.indexOf(carteChoisie);

    if (indexChoisi === -1) {
      break;
    }

    const carte = main.splice(indexChoisi, 1)[0];

    if (!carte) {
      break;
    }

    jeu.piles.piocheMarcheInstabilite.push(carte);
    melanger(jeu.piles.piocheMarcheInstabilite);

    nbRenvoyees += 1;
  }

  afficherZoneJoueur();
  afficherBasMarche?.();

  if (nbRenvoyees > 0) {
    await declencherVikingsApresRenvoiInstabilite();
  }

  return true;
},

  volerMateriauxSansInstabilite(effet) {
  const quantite = effet.quantite || 1;
  const vole = botPerdreRessource("materiaux", quantite);

  if (vole > 0) {
    gagnerRessource("materiaux", vole);
    journal(`Le joueur vole ${vole} Matériaux au Bot.`);
  } else {
    journal("Le Bot n'a aucun Matériaux à voler.");
  }

  afficherZoneJoueur?.();
  afficherZoneBot?.();
  return true;
},

  async erikLeRouge(effet, contexte) {
  const scandinavie = trouverCarteDansTableauParNom("Scandinavie");

  if (!scandinavie) {
    ouvrirPanneauUI("Scandinavie doit être en jeu pour utiliser Erik le Rouge.", [
      { label: "OK" }
    ]);
    return false;
  }

  if ((jeu.joueur.population || 0) < 1) {
    ouvrirPanneauUI("Impossible de payer 1 Population.", [
      { label: "OK" }
    ]);
    return false;
  }

  const succesAbandon = abandonnerCarteObjet(scandinavie);

  if (!succesAbandon) {
    return false;
  }

  const succesPaiement = payerRessource("population", 1);

  if (!succesPaiement) {
    return false;
  }

  const regionTrouvee = await trouverRegionPourErikLeRouge();

  if (regionTrouvee) {
    jeu.joueurZones.mainJoueur.push(regionTrouvee);
  }

  const succesExil = await executeursEffets.exilerSourceDepuisContexte(effet, contexte);

  afficherZoneJoueur?.();
  return succesExil;
},

  activerPeignes() {
  jeu.manche.modificateursTour = jeu.manche.modificateursTour || {};
  jeu.manche.modificateursTour.peignesActif = true;
  afficherZoneJoueur?.();
  return true;
},

 async regarderPremiereCarteDeckNationPuisMelangeOptionnel(effet, contexte) {
  return await regarderPremiereCarteDeckNationPuisMelangeOptionnel();
},

  async exilerSourceDepuisContexte(effet, contexte) {
  const carteSource = contexte?.carteSource || contexte?.carte || null;

  if (!carteSource) {
    return false;
  }

  retirerCarteDeToutesLesZonesJouables(carteSource);
  jeu.piles.exil.push(carteSource);

  if (contexte) {
    contexte.carteSourceDejaDeplacee = true;
  }

  afficherZoneJoueur?.();
  afficherPileExil?.();
  return true;
},

  async piocherRenommee() {
  const resultat = await piocherOuRegarderRenommeeOuRoiDesRois(1, "piocher");

  if (resultat === "roi-des-rois") {
    afficherZoneJoueur();
    afficherHautMarche?.();
    return true;
  }

  if (!resultat) {
    afficherZoneJoueur();
    afficherHautMarche?.();
    return false;
  }

  jeu.joueurZones.mainJoueur.push(resultat);

  afficherHautMarche?.();
  afficherZoneJoueur?.();
  return true;
},

  resoudreInstabiliteStandard(effet, contexte) {
  const couts = obtenirCoutsInstabilite();

  contexte = contexte || {};
  contexte.carteSource = contexte.carteSource || null;

  return executerListeEffets(
    [
      {
        type: "choisir",
        options: [
          {
            label: `Payer ${couts.population} Population`,
            effets: [
              {
                type: "payer",
                ressource: "population",
                quantite: couts.population
              },
              {
                type: "renvoyerSourceDansPileInstabilite"
              }
            ]
          },
          {
            label: `Défausser ${couts.cartesADefausser} carte${couts.cartesADefausser > 1 ? "s" : ""}`,
            effets: [
              {
                type: "defausserMain",
                quantite: couts.cartesADefausser
              },
              {
                type: "renvoyerSourceDansPileInstabilite"
              }
            ]
          },
          {
            label: `Payer ${couts.materiaux} Matériaux`,
            effets: [
              {
                type: "payer",
                ressource: "materiaux",
                quantite: couts.materiaux
              },
              {
                type: "renvoyerSourceDansPileInstabilite"
              }
            ]
          }
        ]
      }
    ],
    contexte
  );
},

jouerInstabiliteGratuiteDepuisMain(effet, contexte) {
  return jouerInstabiliteGratuiteDepuisMain();
},

  

  async innovationGrecque() {
  const main = jeu.joueurZones.mainJoueur || [];

  if (!Array.isArray(main) || main.length < 2) {
    ouvrirPanneauUI(
      "Vous devez avoir au moins 2 cartes en main pour jouer Innovation grecque.",
      [{ label: "OK" }]
    );
    return false;
  }

  const cartesPlacees = [];

  for (let i = 0; i < 2; i += 1) {
    const carteChoisie = await new Promise(resolve => {
      demarrerSelectionCarte({
        source: "main",
        message: `Choisissez la carte ${i + 1} sur 2 à placer au-dessus de votre deck.`,
        obligatoire: true,
        predicate: carte => !!carte && !cartesPlacees.includes(carte),

        onChoose: async carte => resolve(carte),
        onCancel: () => resolve(null)
      });
    });

    if (!carteChoisie) {
      while (cartesPlacees.length > 0) {
        const carteARemettre = cartesPlacees.pop();
        jeu.joueurZones.mainJoueur.unshift(carteARemettre);
      }

      afficherZoneJoueur();
      return false;
    }

    const index = jeu.joueurZones.mainJoueur.indexOf(carteChoisie);

    if (index === -1) {
      while (cartesPlacees.length > 0) {
        const carteARemettre = cartesPlacees.pop();
        jeu.joueurZones.mainJoueur.unshift(carteARemettre);
      }

      afficherZoneJoueur();
      return false;
    }

    const carteRetiree = jeu.joueurZones.mainJoueur.splice(index, 1)[0];
    cartesPlacees.push(carteRetiree);
    afficherZoneJoueur();
  }

  // placer sur le deck dans l’ordre choisi
  for (let i = cartesPlacees.length - 1; i >= 0; i -= 1) {
    jeu.joueurZones.deckJoueur.unshift(cartesPlacees[i]);
  }

  afficherZoneJoueur();

  const succesAcquisition = await executerEffetsCarte({
    effetsCode: [
      {
        type: "acquerirParmiCategories",
        categories: ["Tradition", "Civilisé", "Région", "Vassal"]
      }
    ]
  });

  if (!succesAcquisition) {
    const cartesARendre = [];

    for (let i = 0; i < 2; i += 1) {
      const carteDessus = jeu.joueurZones.deckJoueur.shift();
      if (carteDessus) {
        cartesARendre.push(carteDessus);
      }
    }

    while (cartesARendre.length > 0) {
      jeu.joueurZones.mainJoueur.unshift(cartesARendre.pop());
    }

    afficherZoneJoueur();
    afficherBasMarche?.();
    afficherHautMarche?.();
    return false;
  }

  const succesRappel = await executerEffetsCarte({
    effetsCode: [
      {
        type: "autresJoueursRappellentCategorie",
        categorie: "Persistante",
        quantite: 1
      }
    ]
  });

  return succesRappel;
},

  async echangerCarteExileeAvecCarteDuMarche() {
  const pileExil = jeu.piles.exil || [];

  if (!Array.isArray(pileExil) || pileExil.length === 0) {
    ouvrirPanneauUI("Aucune carte exilée disponible.", [
      { label: "OK" }
    ]);
    return false;
  }

  afficherVue("vue-marche");

  const carteExilee = await demanderCarteDepuisExil();

  if (!carteExilee) {
    afficherVue("vue-joueur");
    return false;
  }

  const indexExil = pileExil.indexOf(carteExilee);

  if (indexExil === -1) {
    afficherVue("vue-joueur");
    return false;
  }

  const zonesEligibles = obtenirClesZonesMarche().filter(cleZone =>
    carteExileePeutRemplacerZoneMarche(carteExilee, cleZone)
  );

  if (zonesEligibles.length === 0) {
    ouvrirPanneauUI("Aucune zone du marché ne peut recevoir cette carte exilée.", [
      { label: "OK" }
    ]);
    afficherVue("vue-joueur");
    return false;
  }

  const succes = await new Promise(resolve => {
    demarrerSelectionMarche({
      message: `Choisissez une carte du Marché à échanger avec ${carteExilee.nom}.`,
      obligatoire: true,

      predicate: cleZone => {
        if (!zonesEligibles.includes(cleZone)) {
          return false;
        }

        const zone = jeu.zonesMarche[cleZone];
        return Array.isArray(zone) && zone.length > 0 && !!zone[0];
      },

      onChoose: async cleZone => {
        const zone = jeu.zonesMarche[cleZone];
        const carteVisible = zone?.[0];
        const carteDessous = zone?.[1];

        if (!carteVisible) {
          resolve(false);
          return;
        }

        // Retire la carte exilée de l’exil
        pileExil.splice(indexExil, 1);

        // La carte visible du marché va en exil
        jeu.piles.exil.push(carteVisible);

        // Cas spécial : zone principale remplacée par une Région
        // si une Instabilité était dessous, elle retourne dans sa pile
        const estZonePrincipale = cleZone === "zone1" || cleZone === "zone2";

        if (
          estZonePrincipale &&
          inclutCategorie(carteExilee, CATEGORIES.REGION) &&
          carteDessous &&
          categoriePrincipaleCarte(carteDessous) === CATEGORIES.INSTABILITE
        ) {
          jeu.piles.piocheMarcheInstabilite.push(carteDessous);
          zone.length = 0;
          zone.push(carteExilee);
        } else {
          zone[0] = carteExilee;
        }

        afficherBasMarche?.();
        afficherHautMarche?.();
        afficherPileExil?.();
        afficherVue("vue-joueur");
        resolve(true);
      },

      onCancel: () => {
        afficherVue("vue-joueur");
        resolve(false);
      }
    });
  });

  return succes;
},

  async jouerInstabiliteGratuiteDepuisMain() {
  const main = jeu.joueurZones.mainJoueur || [];

  const instabilites = main.filter(
    carte => categoriePrincipaleCarte(carte) === CATEGORIES.INSTABILITE
  );

  if (instabilites.length === 0) {
    ouvrirPanneauUI("Aucune Instabilité dans votre main.", [
      { label: "OK" }
    ]);
    return false;
  }

  const carteChoisie = await new Promise(resolve => {
    demarrerSelectionCarte({
      source: "main",
      message: "Choisissez une Instabilité à jouer gratuitement :",
      obligatoire: true,
      predicate: carte =>
        categoriePrincipaleCarte(carte) === CATEGORIES.INSTABILITE,

      onChoose: async carte => resolve(carte),
      onCancel: () => resolve(null)
    });
  });

  if (!carteChoisie) {
    return false;
  }

  const index = jeu.joueurZones.mainJoueur.indexOf(carteChoisie);

  if (index === -1) {
    return false;
  }

  const succes = await jouerCarteDepuisMain(index, { gratuite: true });
  afficherZoneJoueur();
  return succes;
},

  async recupererEpeeDepuisDefausseVersDeck() {
  return await demanderCarteDepuisDefausse(carte =>
    carte.pin === PINS.EPEE
  ).then(carte => {
    if (!carte) return false;

    const index = jeu.joueurZones.defausseJoueur.indexOf(carte);
    if (index === -1) return false;

    const carteRetiree = jeu.joueurZones.defausseJoueur.splice(index, 1)[0];
    jeu.joueurZones.deckJoueur.unshift(carteRetiree);

    afficherZoneJoueur();
    return true;
  });
},

async echangerExilMarche() {
  const exil = jeu.piles.exil || [];

  if (exil.length === 0) {
    ouvrirPanneauUI("Aucune carte en exil.", [{ label: "OK" }]);
    return false;
  }

  const carteExil = exil[0]; // simple : première carte

  const choix = await choisirCarteMarche();

  if (!choix) return false;

  const carteMarche = retirerCarteZoneMarcheEtRecharger(choix.cle);

  if (!carteMarche) return false;

  exil.shift();
  exil.push(carteMarche);

  placerCarteDansZoneMarche(choix.cle, carteExil);

  afficherBasMarche?.();
  afficherHautMarche?.();
  afficherPileExil?.();

  return true;
},

  async abandonnerPersistanteNonRegionPuisInnover() {
  const tableau = jeu.joueurZones.tableauJoueur || [];

  const eligibles = tableau.filter(carte =>
    carte.pin === PINS.PERSISTANTE &&
    !inclutCategorie(carte, CATEGORIES.REGION)
  );

  if (eligibles.length === 0) {
    ouvrirPanneauUI("Aucune carte valide à abandonner.", [{ label: "OK" }]);
    return false;
  }

  const carteChoisie = await new Promise(resolve => {
    demarrerSelectionCarte({
      source: "tableau",
      message: "Choisissez une carte Persistante (non Région) à abandonner :",
      obligatoire: true,
      predicate: carte =>
        carte.pin === PINS.PERSISTANTE &&
        !inclutCategorie(carte, CATEGORIES.REGION),

      onChoose: async carte => resolve(carte),
      onCancel: () => resolve(null)
    });
  });

  if (!carteChoisie) return false;

  retirerCarteDuTableauJoueurVersDefausse(carteChoisie);

  return await executerEffetsCarte({
    effetsCode: [
      {
        type: "choisir",
        options: [
          {
            label: "Innover en Tradition",
            effets: [{ type: "innover", categorie: "Tradition" }]
          },
          {
            label: "Innover en Civilisé",
            effets: [{ type: "innover", categorie: "Civilisé" }]
          }
        ]
      }
    ]
  });
},

  async piocherParTypeCarte(effet) {
  const typesCartes = effet.typesCartes || [];
  const quantiteParCarte = effet.quantiteParCarte || 1;

  if (!Array.isArray(typesCartes) || typesCartes.length === 0) {
    return false;
  }

  const cartesEnJeu = jeu.joueurZones.tableauJoueur || [];

  const total = cartesEnJeu.filter(carte =>
    carte && typesCartes.includes(carte.typeCarte)
  ).length * quantiteParCarte;

  if (total <= 0) {
    afficherZoneJoueur?.();
    return true;
  }

  return await executerEffetsCarte({
    effetsCode: [
      {
        type: "piocher",
        quantite: total
      }
    ]
  });
},

autresJoueursGagnentPopulation(effet) {
  const q = effet.quantite || 0;

  botGagnerRessource("population", q);

  journal(`Le Bot gagne ${q} Population.`);
  afficherZoneBot?.();
  return true;
},

  async innoverVassalOuGagnerProgres(effet) {
  const succes = await executeursEffets.innover({
    categorie: "Vassal"
  });

  if (succes) {
    return true;
  }

  const quantite = effet.quantiteProgresSiEchec || 2;
  gagnerRessource("progres", quantite);
  afficherZoneJoueur();
  return true;
},

  async placerCartesMainAuDessusDeck(effet) {
  const quantite = effet.quantite || 1;
  const main = jeu.joueurZones.mainJoueur || [];

  if (!Array.isArray(main) || main.length < quantite) {
    ouvrirPanneauUI(
      `Vous devez avoir au moins ${quantite} carte(s) en main pour effectuer cette action.`,
      [{ label: "OK" }]
    );
    return false;
  }

  const cartesChoisies = [];

  for (let i = 0; i < quantite; i += 1) {
    const succes = await new Promise(resolve => {
      demarrerSelectionCarte({
        source: "main",
        message:
          quantite === 1
            ? "Choisissez une carte à placer au-dessus de votre deck."
            : `Choisissez la carte ${i + 1} sur ${quantite} à placer au-dessus de votre deck.`,
        obligatoire: true,
        predicate: carte => !!carte && !cartesChoisies.includes(carte),

        onChoose: async carte => {
          const index = jeu.joueurZones.mainJoueur.indexOf(carte);

          if (index === -1) {
            resolve(false);
            return;
          }

          const carteChoisie = jeu.joueurZones.mainJoueur.splice(index, 1)[0];
          cartesChoisies.push(carteChoisie);

          afficherZoneJoueur();
          resolve(true);
        },

        onCancel: () => {
          resolve(false);
        }
      });
    });

    if (!succes) {
      // rollback complet
      while (cartesChoisies.length > 0) {
        const carteARemettre = cartesChoisies.pop();
        jeu.joueurZones.mainJoueur.unshift(carteARemettre);
      }

      afficherZoneJoueur();
      return false;
    }
  }

  // on met les cartes sur le deck dans l’ordre choisi
  for (let i = cartesChoisies.length - 1; i >= 0; i -= 1) {
    jeu.joueurZones.deckJoueur.unshift(cartesChoisies[i]);
  }

  afficherZoneJoueur();
  return true;
},

  async jouerRegionDepuisDefausse(effet, contexte) {
  const defausse = jeu.joueurZones.defausseJoueur || [];

  const annulerActivationPhalange = () => {
    jeu.joueur.actions += 1;

    if (contexte?.carteSource) {
      contexte.carteSource.epuisee = false;
    }

    afficherZoneJoueur();
  };

  const regionsDisponibles = defausse.filter(carte =>
    carte && inclutCategorie(carte, "Région")
  );

  if (!Array.isArray(defausse) || defausse.length === 0 || regionsDisponibles.length === 0) {
    ouvrirPanneauUI("Aucune carte Région dans votre défausse.", [
      { label: "OK" }
    ]);
    annulerActivationPhalange();
    return false;
  }

  fermerZoomVerrouille();

  const carteChoisie = await demanderRegionDepuisDefausse();

  if (!carteChoisie) {
    annulerActivationPhalange();
    return false;
  }

  const indexCarte = defausse.indexOf(carteChoisie);

  if (indexCarte === -1) {
    annulerActivationPhalange();
    return false;
  }

  const carte = defausse.splice(indexCarte, 1)[0];

  const contexteEffetsRegion = {
    carteSource: carte,
    statutAuDebutCarte: jeu.joueurZones.carteStatutVisible?.nom || null
  };

  const succesEffets = await executerListeEffets(
    carte.effetsCode || [],
    contexteEffetsRegion
  );

  if (succesEffets === false) {
    defausse.splice(indexCarte, 0, carte);
    annulerActivationPhalange();
    return false;
  }

  verrouillerOptionsSpecialesDebutTour();
  declencherCotteDeMaillesSiPossible(carte);

  if (
    !jeu.joueurZones.histoireJoueur.includes(carte) &&
    !carteEstEncoreDansUneZoneJouable(carte) &&
    !carteEstDansPileInstabilite(carte) &&
    !contexteEffetsRegion.carteSourceDejaDeplacee
  ) {
    if (
      carteEstPersistante(carte) &&
      jeu.joueurZones.tableauJoueur.length < UI.TAILLE_TABLEAU_JOUEUR
    ) {
      jeu.joueurZones.tableauJoueur.push(carte);
    } else {
      jeu.joueurZones.defausseJoueur.push(carte);
    }
  }

  if (jeu.joueurZones.cartePuissanceVisible?.nom === "Macédoniens") {
    gagnerRessource("materiaux", 2);
  }

    await proposerCavalerieDesCompagnonsSiPossible(carte);

  afficherZoneJoueur();
  return true;
},

    payerAction(effet) {
  const quantite = effet.quantite || 1;

  if ((jeu.joueur.actions || 0) < quantite) {
    ouvrirPanneauUI(`Impossible de payer ${quantite} action(s).`, [
      { label: "OK" }
    ]);
    return false;
  }

  jeu.joueur.actions -= quantite;
  afficherZoneJoueur();
  return true;
},

  async volerMateriauxAChaqueAutreJoueur(effet, contexte) {
  const quantite = effet.quantite || 0;

  const materiauxBot = etatBot.materiaux || 0;

  if (materiauxBot >= quantite) {
    // Le bot peut payer normalement
    etatBot.materiaux -= quantite;
    jeu.joueur.materiaux += quantite;

    journal(`Le Bot perd ${quantite} Matériaux.`);
  } else {
    // Le bot ne peut pas payer le total
    const materiauxVoles = materiauxBot;

    if (materiauxVoles > 0) {
      etatBot.materiaux = 0;
      jeu.joueur.materiaux += materiauxVoles;

      journal(`Le Bot perd ${materiauxVoles} Matériaux.`);
    }

    // 🔴 RÈGLE CORRIGÉE
    botRecevoirInstabilite(1);
    journal(`Le Bot récupère 1 Instabilité.`);
  }

  afficherZoneJoueur?.();
  afficherZoneBot?.();
  return true;
},

 async renvoyerEpuisementUtilise(effet) {
  const quantite = effet.quantite || 1;

  debugLog("OUXIENS | renvoyerEpuisementUtilise démarré", { quantite });

  for (let i = 0; i < quantite; i++) {
    const cartesEligibles = [];

    const cartePuissance = jeu.joueurZones.cartePuissanceVisible;
    if (
      cartePuissance &&
      cartePuissance.epuisee === true &&
      Array.isArray(cartePuissance.epuiserCode) &&
      cartePuissance.epuiserCode.length > 0
    ) {
      cartesEligibles.push(cartePuissance);
    }

    (jeu.joueurZones.tableauJoueur || []).forEach(carte => {
      if (
        carte &&
        carte.epuisee === true &&
        Array.isArray(carte.epuiserCode) &&
        carte.epuiserCode.length > 0
      ) {
        cartesEligibles.push(carte);
      }
    });

    debugLog(
      "OUXIENS | cartes éligibles =",
      cartesEligibles.map(carte => ({
        nom: carte.nom,
        epuisee: carte.epuisee,
        epuiserCode: carte.epuiserCode
      }))
    );

    if (cartesEligibles.length === 0) {
      ouvrirPanneauUI("Aucune carte épuisée à redresser.", [
        { label: "OK" }
      ]);
      return true;
    }

    const carteChoisie = await demanderCarteAEpuisementUtilise(cartesEligibles);

    debugLog("OUXIENS | carte choisie =", carteChoisie?.nom || null);

    if (!carteChoisie) {
      debugLog("OUXIENS | annulation de sélection");
      return true;
    }

    carteChoisie.epuisee = false;
    jeu.joueur.epuisement = Math.min(
      5,
      (jeu.joueur.epuisement || 0) + 1
    );

    debugLog("OUXIENS | carte redressée =", carteChoisie.nom);
    debugLog("OUXIENS | épuisement joueur =", jeu.joueur.epuisement);

    afficherZoneJoueur();
  }

  debugLog("OUXIENS | fin OK");
  return true;
},

  async acquerirRegionAvecExile(effet) {
  const succes = await acquerirRegionDepuisMarcheOuExilAvecChars();
  return !!succes;
},

  async acquerirParmiCategoriesPuisJouerGratuitement(effet) {
  const categories = normaliserCategoriesSelectionMarche(effet.categories || []);

  if (categories.length === 0) {
    return false;
  }

  const resultatAcquisition = await acquerirCarteVisibleChoisieParmiCategories(
    categories,
    { avecRetour: true }
  );

  if (!resultatAcquisition.succes) {
    return true;
  }

  const carteAcquise = resultatAcquisition.carte;

  if (!carteAcquise || carteAcquise === true) {
    return false;
  }

  // Important : si la carte acquise n'est pas jouable,
  // elle reste dans la main, mais Parménion a quand même réussi.
  if (!cartePeutEtreJouee(carteAcquise, { ignorerCoutAction: true })) {
    return true;
  }

  const succesJeu = await jouerCarteAcquiseGratuitement(carteAcquise);

  // Même logique : si la tentative de jeu gratuit échoue,
  // la carte acquise reste en main, mais Parménion ne rollback pas.
  if (!succesJeu) {
    return true;
  }

  return true;
},

  async condition(effet, contexte) {
  const conditionOk =
    typeof effet.condition === "function"
      ? effet.condition(contexte)
      : Boolean(effet.condition);

  if (!conditionOk) {
    return true;
  }

  return await executerListeEffets(effet.effets || [], contexte);
},

  async duPainEtDesJeuxSolstice(effet, contexte) {
  const mainAvant = [...(jeu.joueurZones.mainJoueur || [])];
  const defausseAvant = [...(jeu.joueurZones.defausseJoueur || [])];

  const succesDefausse = await executerEffetUnique(
    { type: "defausserMain", quantite: 1 },
    contexte
  );

  if (!succesDefausse) {
    return false;
  }

  const mainApresDefausse = jeu.joueurZones.mainJoueur || [];
  const carteDefaussee = defausseAvant.length < jeu.joueurZones.defausseJoueur.length
    ? jeu.joueurZones.defausseJoueur[jeu.joueurZones.defausseJoueur.length - 1]
    : null;

  const veutRenvoyerMain = await confirmerActionOptionnelle(
    "Voulez-vous renvoyer une Instabilité depuis votre main ?"
  );

  if (veutRenvoyerMain) {
    const succesMain = await renvoyerInstabiliteDepuisMain({
      afficherMessageNonBloquant: true,
      messageNonBloquant: "Choissiez une Instabilité à renvoyer."
    });

    if (!succesMain) {
      ouvrirPanneauUI("Action annulée : la carte défaussée revient dans votre main.", [
        { label: "OK" }
      ]);

      restaurerCarteDansMainDepuisDefausse(carteDefaussee);
      return false;
    }
  }

  const veutRenvoyerDefausse = await confirmerActionOptionnelle(
    "Voulez-vous renvoyer une Instabilité depuis votre défausse ?"
  );

  if (veutRenvoyerDefausse) {
    const succesDefausseInstabilite = await renvoyerInstabiliteDepuisDefausse();

    if (!succesDefausseInstabilite) {
      ouvrirPanneauUI("Action annulée : la carte défaussée revient dans votre main.", [
        { label: "OK" }
      ]);

      restaurerCarteDansMainDepuisDefausse(carteDefaussee);
      return false;
    }
  }

  afficherZoneJoueur();
  return true;
},

  async archiverSourceDepuisContexte(effet, contexte) {
  const carteSource = contexte?.carteSource || contexte?.carte || null;

  if (!carteSource) {
    return false;
  }

  const zoneArchivage = obtenirZoneArchivageJoueur();

  if (!zoneArchivage.includes(carteSource)) {
    zoneArchivage.push(carteSource);
  }

  if (contexte) {
    contexte.carteSourceDejaDeplacee = true;
  }

  afficherZoneJoueur();
  return true;
},

    volerMateriauxAuxAutresJoueursAvecRegion(effet) {
    const quantite = effet.quantite || 1;

    if (!botAUneRegionEnJeu()) {
      journal("Le Bot n'a aucune Région en jeu : aucun Matériaux volé.");
      return true;
    }

    const vole = botPerdreRessource("materiaux", quantite);

    if (vole > 0) {
      gagnerRessource("materiaux", vole);
    }

    journal(`Le joueur vole ${vole} Matériaux au Bot (condition Région en jeu).`);

    afficherZoneJoueur?.();
    afficherZoneBot?.();
    return true;
  },

volerProgresAuxJoueursEmpire(effet) {
    const quantite = effet.quantite || 1;

    if (!botStatutEstEmpire()) {
      journal("Le Bot n'est pas en Empire : aucun Progrès volé.");
      return true;
    }

    const vole = botPerdreRessource("progres", quantite);

    if (vole > 0) {
      gagnerRessource("progres", vole);
    }

    journal(`Le joueur vole ${vole} Progrès au Bot (condition Empire).`);

    afficherZoneJoueur?.();
    afficherZoneBot?.();
    return true;
  },

  async activerVoieSacree(effet, contexte) {
  const carteSource = contexte?.carteSource;

  if (!carteSource) {
    return false;
  }

  const deckNation = jeu.joueurZones.pileCroissantJoueur;
  const main = jeu.joueurZones.mainJoueur;

  if (!Array.isArray(deckNation) || deckNation.length === 0) {
    ouvrirPanneauUI("Votre deck Nation est vide.", [
      { label: "OK" }
    ]);
    return true;
  }

  const carteDessus = voirDessus(deckNation);

  if (!carteDessus) {
    ouvrirPanneauUI("Votre deck Nation est vide.", [
      { label: "OK" }
    ]);
    return true;
  }

  ouvrirZoomVoieSacreeCarteSeule(carteDessus);

  await new Promise(resolve => setTimeout(resolve, 3600));

  if (!Array.isArray(main) || main.length === 0) {
    fermerZoomVoieSacree();
    ouvrirPanneauUI("Vous n'avez aucune carte en main à échanger.", [
      { label: "OK" }
    ]);
    return true;
  }

  return await new Promise(resolve => {
    ouvrirZoomVoieSacreeAvecChoix(
      carteDessus,
      `Abandonner Voie sacrée pour échanger ${carteDessus.nom} avec une carte de votre main ?`,

      async () => {
        mettreZoomVoieSacreeEnModeSelection(
          carteDessus,
        );

        demarrerSelectionCarte({
          source: "main",
          message: `Choisissez une carte de votre main à échanger avec ${carteDessus.nom}.`,
          obligatoire: false,
          afficherPanneau: false,
          predicate: () => true,

          onChoose: async carteChoisie => {
            const indexMain = jeu.joueurZones.mainJoueur.indexOf(carteChoisie);

            if (indexMain === -1) {
              fermerZoomVoieSacree();
              resolve(true);
              return;
            }

            const succesAbandon = abandonnerCarteObjet(carteSource);

            if (!succesAbandon) {
              fermerZoomVoieSacree();
              resolve(false);
              return;
            }

            const carteMain = jeu.joueurZones.mainJoueur.splice(indexMain, 1)[0];
            const carteNation = deckNation.shift();

            if (!carteNation) {
              jeu.joueurZones.mainJoueur.splice(indexMain, 0, carteMain);
              fermerZoomVoieSacree();
              resolve(false);
              return;
            }

            jeu.joueurZones.mainJoueur.push(carteNation);
            deckNation.unshift(carteMain);

            fermerZoomVoieSacree();
            afficherZoneJoueur();
            resolve(true);
          },

          onCancel: () => {
            fermerZoomVoieSacree();
            resolve(true);
          }
        });
      },

      async () => {
        fermerZoomVoieSacree();
        resolve(true);
      }
    );
  });
},

  async piocherUnePuisChoisirSortDeLaCartePiochee(effet, contexte) {
  return await resoudreMagnificencePiochee();
},

   volerProgresAChaqueAutreJoueur(effet) {
    const quantite = effet.quantite || 1;
    const vole = botPerdreRessource("progres", quantite);

    if (vole > 0) {
      gagnerRessource("progres", vole);
      journal(`Le joueur vole ${vole} Progrès au Bot.`);
    }

    const manque = Math.max(0, quantite - vole);

    if (manque > 0) {
      botRecevoirInstabilite(manque);
      journal(`Le Bot ne pouvait pas payer ${manque} Progrès : il récupère ${manque} Instabilité.`);
    }

    afficherZoneJoueur?.();
    afficherZoneBot?.();
    return true;
  },

  async developperCarteSansPayer(effet) {
  const quantite = effet.quantite || 1;
  const nePasEpuiserPileEtoile = effet.nePasEpuiserPileEtoile === true;
  const continuerSiAucuneCarte = effet.continuerSiAucuneCarte === true;

  if (quantite <= 0) {
    return true;
  }

  if (jeu.joueurZones.pileEtoileEpuisee && !nePasEpuiserPileEtoile) {
    ouvrirPanneauUI("La pile Étoile est épuisée jusqu'au nettoyage.", [
      { label: "OK" }
    ]);
    return false;
  }

  const cartesDisponibles = jeu.joueurZones.pileEtoileJoueur;

  if (!Array.isArray(cartesDisponibles) || cartesDisponibles.length === 0) {
    if (continuerSiAucuneCarte) {
      return true;
    }

    ouvrirPanneauUI("Aucune carte Étoile disponible à développer.", [
      { label: "OK" }
    ]);
    return false;
  }

  const carteChoisie = await new Promise(resolve => {
    ouvrirVueEtoile(
      carte => resolve(carte),
      carte => !!carte
    );
  });

  if (!carteChoisie) {
    return false;
  }

  const indexCarte = jeu.joueurZones.pileEtoileJoueur.indexOf(carteChoisie);

  if (indexCarte === -1) {
    return false;
  }

  jeu.joueurZones.pileEtoileJoueur.splice(indexCarte, 1);
  jeu.joueurZones.defausseJoueur.push(carteChoisie);

  if (!nePasEpuiserPileEtoile) {
    jeu.joueurZones.pileEtoileEpuisee = true;
  }

  if (jeu.joueurZones.pileEtoileJoueur.length === 0) {
    declencherDecompte();
  }

  afficherZoneJoueur();
  return true;
},

  async developperCarte(effet) {
  const quantite = effet.quantite || 1;
  const nePasEpuiserPileEtoile = effet.nePasEpuiserPileEtoile === true;

  if (quantite <= 0) {
    return true;
  }

  if (jeu.joueurZones.pileEtoileEpuisee && !nePasEpuiserPileEtoile) {
    ouvrirPanneauUI("La pile Étoile est épuisée jusqu'au nettoyage.", [
      { label: "OK" }
    ]);
    return false;
  }

  const pileEtoile = jeu.joueurZones.pileEtoileJoueur || [];

  if (!Array.isArray(pileEtoile) || pileEtoile.length === 0) {
    ouvrirPanneauUI("Aucune carte Étoile disponible.", [
      { label: "OK" }
    ]);
    return false;
  }

  const cartesPayables = pileEtoile.filter(carte =>
    carte && peutPayerCout(carte.coutDeveloppement)
  );

  if (cartesPayables.length === 0) {
    ouvrirPanneauUI("Aucune carte Étoile ne peut être développée.", [
      { label: "OK" }
    ]);
    return false;
  }

  const carteChoisie = await new Promise(resolve => {
    ouvrirVueEtoile(
      carte => resolve(carte),
      carte => carte && peutPayerCout(carte.coutDeveloppement)
    );
  });

  if (!carteChoisie) {
    return false;
  }

  const succes = await developperCarteEtoileObjet(
    carteChoisie,
    { nePasEpuiserPileEtoile }
  );

  return succes;
},

  piocherDepuisDeckNationVersDefausse(effet) {
  const quantite = effet.quantite || 1;

  for (let i = 0; i < quantite; i++) {
    let carte = null;

    if (jeu.joueurZones.pileCroissantJoueur.length > 0) {
      carte = jeu.joueurZones.pileCroissantJoueur.shift();
    } else if (jeu.joueurZones.cartePleineVisible) {
      carte = jeu.joueurZones.cartePleineVisible;
      jeu.joueurZones.cartePleineVisible = null;

      if (carte.nom === "Harald Hardrada") {
        declencherDecompte();
      }

      if (!joueurEstVikings()) {
        passerJoueurEnEmpire();
      }
    }

    if (!carte) {
      break;
    }

    jeu.joueurZones.defausseJoueur.push(carte);
  }

  afficherZoneJoueur();
  return true;
},

  async conditionStatut(effet, contexte) {
  if (!effet || !effet.statut || !Array.isArray(effet.effets)) {
    return true;
  }

  const statutReference =
    contexte?.statutAuDebutCarte ??
    jeu.joueurZones.carteStatutVisible?.nom;

  if (statutReference !== effet.statut) {
    return true;
  }

  return await executerListeEffets(effet.effets, contexte);
},

  async renvoyerJusquaNInstabilitesDepuisMainOuDefausse(effet) {
  const max = effet.quantiteMax || 1;
  let nbRenvoyees = 0;

  for (let i = 0; i < max; i++) {
    const choix = await choisirInstabiliteDepuisMainOuDefausse();

    if (!choix) {
      break;
    }

    let carte = null;

    if (choix.zone === "main") {
      carte = jeu.joueurZones.mainJoueur.splice(choix.index, 1)[0];
    } else if (choix.zone === "defausse") {
      carte = jeu.joueurZones.defausseJoueur.splice(choix.index, 1)[0];
    }

    if (!carte) {
      break;
    }

    jeu.piles.piocheMarcheInstabilite.push(carte);
    melanger(jeu.piles.piocheMarcheInstabilite);
    nbRenvoyees += 1;
  }

  afficherZoneJoueur();
  afficherBasMarche();

  if (nbRenvoyees > 0) {
    await declencherVikingsApresRenvoiInstabilite();
  }

  return true;
},

  async donnerUneCarteAChaqueAutreJoueurDepuisMainOuDefausse() {
  const optionChoisie = await choisirCarteDepuisMainOuDefaussePourDon();

  if (!optionChoisie) {
    return false;
  }

  let carteDonnee = null;

  if (optionChoisie.zone === "main") {
    carteDonnee = jeu.joueurZones.mainJoueur.splice(optionChoisie.index, 1)[0];
  } else if (optionChoisie.zone === "defausse") {
    carteDonnee = jeu.joueurZones.defausseJoueur.splice(optionChoisie.index, 1)[0];
  }

  if (!carteDonnee) {
    return false;
  }

  // Nouvelle règle : la carte donnée va au sommet du deck C.I.V. du Bot.
  etatBot.deckCiv.unshift(carteDonnee);

  journal(`Le joueur donne ${carteDonnee.nom} au Bot (sommet du deck C.I.V.).`);
  afficherZoneJoueur?.();
  afficherZoneBot?.();
  return true;
},

  gagnerMateriauxEtPopulationParTypeCarte(effet) {
  const typesCartes = effet.typesCartes || [];
  const quantiteMateriauxParCarte = effet.quantiteMateriauxParCarte || 0;
  const quantitePopulationParCarte = effet.quantitePopulationParCarte || 0;

  const totalCartes = compterCartesTableauParTypes(typesCartes);

  if (totalCartes <= 0) {
    return true;
  }

  const totalMateriaux = totalCartes * quantiteMateriauxParCarte;
  const totalPopulation = totalCartes * quantitePopulationParCarte;

  if (totalMateriaux > 0) {
    gagnerRessource("materiaux", totalMateriaux);
  }

  if (totalPopulation > 0) {
    gagnerRessource("population", totalPopulation);
  }

  afficherZoneJoueur();
  return true;
},

  gagnerMateriauxSelonVariable(effet, contexte) {
  const multiplicateur = effet.multiplicateur || 1;
  const variable = effet.variable;

  const valeur = contexte?.variables?.[variable] || 0;
  const total = valeur * multiplicateur;

  if (total > 0) {
    gagnerRessource("materiaux", total);
    afficherZoneJoueur();
  }

  return true;
},

   autresJoueursAbandonnentCategorieAvecRetour(effet, contexte) {
    const quantite = effet.quantite || 1;
    const categorie = effet.categorie;
    const totalAbandonnees = botAbandonnerCategorie(categorie, quantite);

    contexte.variables = contexte.variables || {};
    contexte.variables[effet.stockerDans] = totalAbandonnees;

    journal(`Le Bot abandonne ${totalAbandonnees} carte(s) ${categorie}.`);

    afficherZoneBot?.();
    return true;
  },

  async reserverSourceSousRegionPuisDeclencherEffetJeu(effet, contexte) {
  return await reserverSourceSousRegionPuisDeclencherEffetJeu(
    contexte?.carteSource || contexte?.carte || null,
    contexte
  );
},

  autresJoueursGagnentMateriaux(effet) {
    const q = effet.quantite || 0;

    botGagnerRessource("materiaux", q);

    journal(`Le Bot gagne ${q} Matériaux.`);
    afficherZoneBot?.();
    return true;
  },



  async archiverCarteDepuisDefausse() {
  return await archiverCarteDepuisDefausse();
},


async abandonnerSourcePuisEchangerPremiereCarteDeckNationAvecMain(effet, contexte) {
  if (!contexte?.carteSource) {
    return false;
  }

  return await abandonnerSourcePuisEchangerPremiereCarteDeckNationAvecMain(
    contexte.carteSource
  );
},

  async recupererCarteDepuisDefausseVersDeck() {
  return await recupererCarteDepuisDefausseVersDeck();
},

  async exilerCarteVisibleDuMarche() {
  afficherVue("vue-marche");

  const zonesEligibles = obtenirClesZonesMarche().filter(cleZone => {
    const zone = jeu.zonesMarche[cleZone];
    const carte = Array.isArray(zone) && zone.length > 0 ? zone[0] : null;

    return carteVisiblePeutEtreExilee(carte);
  });

  if (zonesEligibles.length === 0) {
    ouvrirPanneauUI("Aucune carte visible du Marché ne peut être exilée.", [
      { label: "OK" }
    ]);
    afficherVue("vue-joueur");
    return true;
  }

  return await new Promise(resolve => {
    demarrerSelectionMarche({
      message: "Choisissez une carte visible du Marché à exiler.",
      obligatoire: true,

      predicate: cleZone => zonesEligibles.includes(cleZone),

      onChoose: async cleZone => {
        const succes = exilerCarteDansZone(jeu.zonesMarche[cleZone]);

        if (!succes) {
          ouvrirPanneauUI("Impossible d'exiler cette carte du Marché.", [
            { label: "OK" }
          ]);
          afficherVue("vue-joueur");
          resolve(false);
          return;
        }

        afficherVue("vue-joueur");
        resolve(true);
      },

      onCancel: () => {
        afficherVue("vue-joueur");
        resolve(false);
      }
    });
  });
},

  async piocherDeuxPuisDefausserUnePiochee() {
  return await resoudreOraclePiocherDeuxPuisDefausserUne();
},

  recupererInstabilite() {
  return recupererUneInstabilite();
},

  autresJoueursGagnentProgres(effet) {
    const quantite = effet.quantite || 1;

    botGagnerRessource("progres", quantite);

    journal(`Le Bot gagne ${quantite} Progrès.`);
    afficherZoneBot?.();
    return true;
  },

  async recupererCarteDepuisDefausse() {
  return await recupererCarteChoisieDepuisDefausse();
},

  async gagnerMateriauxParEauEnJeu(effet) {
  const quantiteParEau = effet.quantiteParEau || 1;
  const nombreEaux = compterEauxDansTableauJoueur();
  const total = nombreEaux * quantiteParEau;

  if (total <= 0) {
    return true;
  }

  await gagnerMateriauxDepuisEau(total);
  return true;
},

  async rappelerRegionAvecTag(effet) {
  if (!effet.tagRegion) {
    return false;
  }

  return await rappelerRegionChoisieAvecTag(effet.tagRegion);
},

async gagnerMateriauxDepuisEau(effet) {
  await gagnerMateriauxDepuisEau(effet.quantite || 1);
  return true;
},

async piocherJusqua(effet) {
  const quantiteMax = effet.quantite || 1;
  const sansRafraichissement = effet.sansRafraichissement === true;

  if (quantiteMax <= 0) {
    return true;
  }

  const indexChoisi = await demanderChoixTexte(
    `Combien de cartes voulez-vous piocher ?`,
    Array.from({ length: quantiteMax + 1 }, (_, i) => ({
      label: i === 0 ? "0 (ne rien piocher)" : `${i}`
    }))
  );

  if (indexChoisi === null) {
    return true;
  }

  const quantiteChoisie = indexChoisi;

  if (quantiteChoisie <= 0) {
    return true;
  }

  if (sansRafraichissement) {
    for (let i = 0; i < quantiteChoisie; i += 1) {
      if (jeu.joueurZones.deckJoueur.length === 0) {
        break;
      }

      const cartePiochee = piger(jeu.joueurZones.deckJoueur);

      if (!cartePiochee) {
        break;
      }

      jeu.joueurZones.mainJoueur.push(cartePiochee);
    }

    afficherZoneJoueur();
    return true;
  }

  await piocherCartesJoueur(quantiteChoisie);
  afficherZoneJoueur();
  return true;
},

async placerCarteMainAuDessusDeck() {
  const main = jeu.joueurZones.mainJoueur;

  if (!Array.isArray(main) || main.length === 0) {
    return true;
  }

  return await new Promise(resolve => {
    demarrerSelectionCarte({
      source: "main",
      message: "Choisissez une carte à placer au-dessus de votre deck.",
      obligatoire: true,
      predicate: () => true,

      onChoose: async carte => {
        const index = jeu.joueurZones.mainJoueur.indexOf(carte);

        if (index === -1) {
          resolve(false);
          return;
        }

        const carteChoisie = jeu.joueurZones.mainJoueur.splice(index, 1)[0];
        jeu.joueurZones.deckJoueur.unshift(carteChoisie);

        afficherZoneJoueur();
        resolve(true);
      }
    });
  });
},

  activerAgriculture() {
  jeu.manche.modificateursTour.agricultureActive = true;
  afficherZoneJoueur();
  return true;
},

  autresJoueursRecuperentInstabilite(effet) {
    const quantite = effet.quantite || 1;
    const gagnees = botRecevoirInstabilite(quantite);

    journal(`Le Bot récupère ${gagnees} carte(s) Instabilité.`);
    return true;
  },

  gagnerMateriauxParTagRegion(effet) {
  const tag = effet.tagRegion;
  const quantiteParTag = effet.quantiteParTag || 1;

  let nombreTags = 0;

  if (tag === "Sac") {
    nombreTags = compterSacsEffectifsDansTableauJoueur();
  } else {
    nombreTags = compterTagsRegionDansTableauJoueur(tag);
  }

  const total = nombreTags * quantiteParTag;

  if (total > 0) {
    gagnerRessource("materiaux", total);
    afficherZoneJoueur();
  }

  return true;
},

gagnerPopulationParRegionEnJeu(effet) {
  const quantiteParRegion = effet.quantiteParRegion || 1;

  const nombreRegions = compterRegionsDansTableauJoueur();
  const total = nombreRegions * quantiteParRegion;

  if (total > 0) {
    gagnerRessource("population", total);
    afficherZoneJoueur();
  }

  return true;
},

  renvoyerSourceDansPileInstabilite(effet, contexte) {
  if (!contexte?.carteSource) {
    return false;
  }

  return renvoyerCarteObjetDansPileInstabilite(contexte.carteSource);
},

  async renvoyerInstabiliteDepuisMain(effet, contexte) {
  return await renvoyerInstabiliteDepuisMain();
},

async renvoyerInstabiliteDepuisDefausse() {
  return await renvoyerInstabiliteDepuisDefausse();
},

autresJoueursRappellentCategorie(effet) {
    const categorie = effet.categorie;
    const quantite = effet.quantite || 1;
    const rappelees = botRappelerCategorie(categorie, quantite);

    journal(`Le Bot rappelle ${rappelees} carte(s) de catégorie ${categorie}.`);
    return true;
  },

autresJoueursPeuventPiocher(effet) {
  const quantite = effet.quantite || 1;

  // Nouvelle règle solo : "piocher" pour le Bot = prendre du deck C.I.V. et mettre dans la défausse.
  const piochees = botPiocherVersDefausse(quantite);

  journal(`Le Bot pioche ${piochees} carte(s) de son deck C.I.V. vers sa défausse.`);
  return true;
},

  autresJoueursAbandonnentCategorie(effet) {
    const categorie = effet.categorie || "Aucun";
    const quantite = effet.quantite || 1;
    const total = botAbandonnerCategorie(categorie, quantite);

    journal(`Le Bot abandonne ${total} carte(s) de catégorie ${categorie}.`);
    return true;
  },

  autresJoueursDefaussent(effet) {
  const quantite = effet.quantite || 1;

  // Règle solo : le bot ignore les effets de défausse
  journal(`Le Bot ignore l'effet : défausser ${quantite} carte(s).`);

  return true;
},

  archiverCarteTableauParNom(effet) {
  if (!effet.nomCarte) {
    return false;
  }

  const succes = archiverCarteTableauParNom(effet.nomCarte);

  if (!succes) {
    ouvrirPanneauUI(`Impossible d'archiver ${effet.nomCarte}.`, [
      { label: "OK" }
    ]);
    return false;
  }

  return true;
},

  archiverSourceDepuisMain(effet, contexte) {
    if (!contexte?.carteSource) {
      return false;
    }

    const succes = archiverCarteObjetDepuisNimporteOu(contexte.carteSource);

    if (succes && contexte) {
      contexte.carteSourceDejaDeplacee = true;
    }

    return succes;
  },

  async annoncerCategorieEtRevelerPrincipale(effet) {
    const categories = effet.categories || [];
    const categorieAnnoncee = await choisirCategorie(categories);

    if (!categorieAnnoncee) {
      return false;
    }

    const carte = piger(jeu.piles.piochePrincipale);
    verifierDeclenchementDecompteParPiochePrincipale();

    if (!carte) {
      ouvrirPanneauUI(`La pioche principale est vide.`, [
        {label: "OK"}
      ]);
      return false;
    }

    await revelerCarteAuCentre(carte, 1200);

    const categoriesCarte = obtenirCategoriesCarte(carte);

    if (categoriesCarte.includes(categorieAnnoncee)) {
      jeu.joueurZones.mainJoueur.push(carte);
      ouvrirPanneauUI(`Bonne annonce ! La carte rejoint votre main.`, [
        {label: "OK"}
      ]);
    } else {
      exilerCarte(carte);
      ouvrirPanneauUI(`Mauvaise annonce. La carte est exilée.`, [
        {label: "OK"}
      ]);
    }

    rafraichirAffichagesPrincipaux();
    return true;
  },

  async archiverDepuisMainOuDefausse() {
    return await archiverCarteChoisieDepuisMainOuDefausse();
  },

  async archiverDepuisMain() {
  const main = jeu.joueurZones.mainJoueur;

  if (!Array.isArray(main) || main.length === 0) {
    ouvrirPanneauUI("Aucune carte dans votre main.", [
      { label: "OK" }
    ]);
    return false;
  }

  const carteChoisie = await new Promise(resolve => {
    demarrerSelectionCarte({
      source: "main",
      message: joueurEstVikings()
        ? "Choisissez une carte de votre main à défausser (à la place de l’archiver) :"
        : "Choisissez une carte de votre main à archiver :",
      obligatoire: true,
      predicate: carte => !!carte,

      onChoose: async carte => {
        resolve(carte);
      },

      onCancel: () => {
        resolve(null);
      }
    });
  });

  if (!carteChoisie) {
    return false;
  }

  const indexChoisi = main.indexOf(carteChoisie);

  if (indexChoisi === -1) {
    return false;
  }

  const carte = main.splice(indexChoisi, 1)[0];

  return archiverCarteObjetDepuisNimporteOu(carte);
},

  async lancerPaiementPuisAcquerirParmiCategories(effet) {
    return await lancerPaiementPuisAcquisition(
      effet.ressource,
      effet.quantite || 0,
      effet.categories || []
    );
  },

  async lancerPaiementPuisInnoverParmiCategories(effet) {
  return await lancerPaiementPuisInnovation(
    effet.ressource,
    effet.quantite || 0,
    effet.categories || []
  );
},

  async payerPuisAcquerirParmiCategories(effet) {
    return await payerPuisAcquerirParmiCategories(
      effet.ressource,
      effet.quantite || 0,
      effet.categories || []
    );
  },

  async payerPuisInnoverParmiCategories(effet) {
    return await payerPuisInnoverParmiCategories(
      effet.ressource,
      effet.quantite || 0,
      effet.categories || []
    );
  },

  payer(effet) {
    const succes = payerRessource(effet.ressource, effet.quantite || 0);

    if (!succes) {
      ouvrirPanneauUI(`Impossible de payer ${effet.quantite || 0} ${effet.ressource}.`, [
        {label: "OK"}
      ]);
      return false;
    }

    afficherZoneJoueur();
    return true;
  },

 async acquerirParmiCategories(effet) {
  const categories = normaliserCategoriesSelectionMarche(effet.categories || []);

  if (categories.length === 0) {
    return false;
  }

  if (!existeCarteAccessiblePourAcquerir(categories)) {
    ouvrirPanneauUI("Aucune carte visible correspondante ne peut être acquise.", [
      { label: "OK" }
    ]);
    return false;
  }

  afficherVue("vue-marche");

  const resultatAcquisition = await acquerirCarteVisibleChoisieParmiCategories(
    categories,
    { avecRetour: false }
  );
  const succes = !!resultatAcquisition.succes;

  if (succes && resultatAcquisition.categorie) {
    await proposerEpuisementPuissanceCeltesSiTradition(
      resultatAcquisition.categorie
    );
  }

  afficherVue("vue-joueur");
  return succes;
},

  async innoverParmiCategories(effet) {
  const categories = normaliserCategoriesSelectionMarche(effet.categories || []);

  if (categories.length === 0) {
    return false;
  }

  if (!existeCarteAccessiblePourInnover(categories)) {
    ouvrirPanneauUI(`Aucune innovation possible dans les catégories proposées.`, [
      {label: "OK"}
    ]);
    return false;
  }

  const succes = await choisirAcquerirOuInnoverDansCategories("innover", categories);
  afficherVue("vue-joueur");
  return succes;
},

  gagner(effet) {
    gagnerRessource(effet.ressource, effet.quantite || 0);
    return true;
  },

  async piocher(effet) {
    await piocherCartesJoueur(effet.quantite || 0);
    return true;
  },

  gagnerAction(effet) {
    gagnerRessource("actions", effet.quantite || 0);
    return true;
  },

 async acquerir(effet, contexte) {
  let categorie = effet.categorie;

  // 🔥 Si aucune catégorie → on demande
  if (!categorie) {
    const categories = effet.categories || Object.values(CATEGORIES);

    categorie = await choisirCategorieAuMarche(categories);

    if (!categorie) {
      return false;
    }
  }

  // 🔥 Sinon → on utilise directement celle fournie
  return await acquerirCarteVisibleChoisie(categorie);
},

  async innover(effet) {
  if (!effet.categorie) {
    return false;
  }

  const succes = await innoverCategorieOuGagner2Progres(effet.categorie);
  const actionValidee = succes !== false;

  afficherVue("vue-joueur");
  afficherZoneJoueur();
  afficherBasMarche?.();
  afficherHautMarche?.();

  return actionValidee;
},

  developper(effet) {
    if (typeof effet.indexCarte !== "number") {
      return false;
    }

    return developperCarteEtoile(effet.indexCarte);
  },

async optionnel(effet, contexte) {
  if (typeof effet.condition === "function") {
    if (!effet.condition(contexte)) {
      debugLog("OPTIONNEL: condition false");
      return true;
    }
  }

  const confirmer = await confirmerActionOptionnelle(
    effet.message || "Voulez-vous effectuer cette action ?"
  );

  debugLog("OPTIONNEL: confirmer =", confirmer, "message =", effet.message);

  if (!confirmer) {
    return true;
  }

  debugLog("OPTIONNEL: avant executerListeEffets", effet.effetSiOui);
  const succes = await executerListeEffets(effet.effetSiOui || [], contexte);
  debugLog("OPTIONNEL: après executerListeEffets, succes =", succes);

  return succes;
},

  async defausserMain(effet) {
    return await defausserCarteChoisieDepuisMain(effet.quantite || 1);
  },

 async choisir(effet, contexte) {
  jeu.ui.modeInteraction = "choix";

  fermerZoomTemporaire?.();
  fermerZoomVerrouille?.();

  const optionsPourChoix = (effet.options || []).map(option => ({
    label: enrichirLibelleOptionAvecCoutReel(option.label, option.effets || [])
  }));

  const indexChoisi = await demanderChoixTexte(
    "Choisissez une option :",
    optionsPourChoix
  );

  jeu.ui.modeInteraction = null;

  if (indexChoisi === null) {
    return false;
  }

  const optionChoisie = effet.options[indexChoisi];
  return await executerListeEffets(optionChoisie.effets || [], contexte);
},

  abandonnerSource(effet, contexte) {
    if (!contexte?.carteSource) {
      return false;
    }

    return abandonnerCarteObjet(contexte.carteSource);
  },

  archiverSource(effet, contexte) {
    if (!contexte?.carteSource) {
      return false;
    }

    return archiverCarteObjetDepuisTableau(contexte.carteSource);
  },

  async reserverSousSource(effet, contexte) {
    if (!contexte?.carteSource) {
      return false;
    }

    return await reserverCarteChoisieDepuisMainSousCarte(
      contexte.carteSource,
      effet.quantite || 1
    );
  },

  async abandonnerTableauCategorie(effet, contexte) {
    if (!effet.categorie) {
      return false;
    }

    const carteReference = contexte?.carteSource || null;
    const annulationAutorisee =
      effet.autoriserAnnulation === true ||
      carteReference?.nom === "Gloire";

    return await choisirEtAbandonnerCartesTableauParCategorie(
      effet.categorie,
      effet.quantite || 1,
      { obligatoireSelection: !annulationAutorisee }
    );
  },

  async regarderRenommeeChoisirUne(effet) {
  const cartes = await regarderJusquaRenommee(effet.quantite || 2);

  if (cartes.length === 0) {
    return true;
  }

  if (cartes.length === 1) {
    jeu.joueurZones.mainJoueur.push(cartes[0]);
    afficherHautMarche();
    afficherZoneJoueur();
    return true;
  }

  const succes = await demanderChoixRegardRenommee(cartes);
  return succes !== false;
},
};

async function executerEffetUnique(effet, contexte = {}) {
  if (!effet || !effet.type) {
    return true;
  }

  const executeur = executeursEffets[effet.type];

  if (!executeur) {
    console.warn("Type d'effet non géré :", effet.type, effet);
    return false;
  }

  return await executeur(effet, contexte);
}

async function executerListeEffets(listeEffets, contexte = {}) {
  if (!Array.isArray(listeEffets)) {
    return true;
  }

  for (const effet of listeEffets) {
    const succes = await executerEffetUnique(effet, contexte);

    if (succes === false) {
      return false;
    }
  }

  return true;
}

async function executerEffetsCarte(carte) {
  if (!carte || !Array.isArray(carte.effetsCode)) {
    return true;
  }

  return await executerListeEffets(carte.effetsCode, { carteSource: carte });
}

async function jouerCarteDepuisMain(indexCarte, options = {}) {
  const main = jeu.joueurZones.mainJoueur;

  if (jeu.finPartie.terminee) {
    return false;
  }

  if (indexCarte < 0 || indexCarte >= main.length) {
    return false;
  }

  const carte = main[indexCarte];

  if (!cartePeutEtreJouee(carte, { ignorerCoutAction: options.gratuite === true })) {
    return false;
  }

  const coutAction = !options.gratuite && !estActionGratuite(carte);

  if (coutAction) {
    jeu.joueur.actions -= 1;
  }

  main.splice(indexCarte, 1);

  const contexteEffets = {
    carteSource: carte,
    statutAuDebutCarte: jeu.joueurZones.carteStatutVisible?.nom || null
  };

  const succesEffets = await executerListeEffets(
    carte.effetsCode || [],
    contexteEffets
  );

  if (succesEffets === false) {
    main.splice(indexCarte, 0, carte);

    if (coutAction) {
      jeu.joueur.actions += 1;
    }

    afficherZoneJoueur();
    return false;
  }

    if (peignesActif()) {
    jeu.manche.modificateursTour.peignesActif = false;
  }

  verrouillerOptionsSpecialesDebutTour();
  miniTutorielMarquerCarteJouee();

  declencherCotteDeMaillesSiPossible(carte);

  if (jeu.joueurZones.histoireJoueur.includes(carte)) {
    afficherZoneJoueur();
    return true;
  }

  if (carteEstEncoreDansUneZoneJouable(carte)) {
    afficherZoneJoueur();
    return true;
  }

  if (carteEstDansPileInstabilite(carte)) {
    afficherZoneJoueur();
    return true;
  }

  if (contexteEffets.carteSourceDejaDeplacee) {
    afficherZoneJoueur();
    return true;
  }

  if (
    carteEstPersistante(carte) &&
    jeu.joueurZones.tableauJoueur.length < UI.TAILLE_TABLEAU_JOUEUR
  ) {
    jeu.joueurZones.tableauJoueur.push(carte);
  } else {
    jeu.joueurZones.defausseJoueur.push(carte);
  }

  await declencherDrakkarsSiEpeeJouee(carte);
await declencherSkisSiRegionJouee(carte);
await declencherTentesSiRegionJouee(carte);
await proposerCavalerieDesCompagnonsSiPossible(carte);

  afficherZoneJoueur();
  return true;
}
/* =========================================================
   27) TOUR / ÉTAT DES CARTES / FIN DE TOUR
   ========================================================= */


   function preparerDebutTourJoueur() {
  activerOptionsSpecialesDebutTour();
  mettreAJourBoutonsOptionsDebutTour();
}

function optionSpecialeDebutTourDisponible() {
  return (
    !jeu.finPartie.terminee &&
    jeu.manche.phase === PHASES.TOUR &&
    jeu.ui.optionSpecialeDebutTourDisponible === true &&
    jeu.ui.optionSpecialeDebutTourChoisie !== true
  );
}

function verrouillerOptionsSpecialesDebutTour() {
  jeu.ui.optionSpecialeDebutTourDisponible = false;
  jeu.ui.optionSpecialeDebutTourChoisie = true;
  mettreAJourBoutonsOptionsDebutTour();
}

function activerOptionsSpecialesDebutTour() {
  jeu.ui.optionSpecialeDebutTourDisponible = true;
  jeu.ui.optionSpecialeDebutTourChoisie = false;
  mettreAJourBoutonsOptionsDebutTour();
}

function mettreAJourBoutonsOptionsDebutTour() {
  const btnPacifier = getElement("btn-pacifier");
  const btnInnover = getElement("btn-innover-tour");
  const actif = optionSpecialeDebutTourDisponible();

  if (btnPacifier) {
    btnPacifier.disabled = !actif;
    btnPacifier.classList.toggle("bouton-inactif", !actif);
  }

  if (btnInnover) {
    btnInnover.disabled = !actif;
    btnInnover.classList.toggle("bouton-inactif", !actif);
  }
}

function brancherBoutonsNavigationVues() {
  const btnMarche = document.getElementById("btn-vue-marche");
  const btnJoueur = document.getElementById("btn-vue-joueur");
  const btnBot = document.getElementById("btn-vue-bot");

  if (btnMarche) {
    btnMarche.onclick = () => afficherVue("vue-marche");
  }

  if (btnJoueur) {
    btnJoueur.onclick = () => afficherVue("vue-joueur");
  }

  if (btnBot) {
    btnBot.onclick = () => afficherVue("vue-bot");
  }
}

function brancherBoutonsNavigationVues() {
  const btnMarche = document.getElementById("btn-vue-marche");
  const btnJoueur = document.getElementById("btn-vue-joueur");
  const btnBot = document.getElementById("btn-vue-bot");

  if (btnMarche) {
    btnMarche.onclick = () => afficherVue("vue-marche");
  }

  if (btnJoueur) {
    btnJoueur.onclick = () => afficherVue("vue-joueur");
  }

  if (btnBot) {
    btnBot.onclick = () => afficherVue("vue-bot");
  }
}

  function brancherBoutonsOptionsDebutTour() {
  const btnPacifier = getElement("btn-pacifier");
  const btnInnover = getElement("btn-innover-tour");

  if (btnPacifier) {
    btnPacifier.onclick = async () => {
      await pacifierDebutTour();
    };
  }

  if (btnInnover) {
    btnInnover.onclick = async () => {
      await innoverDebutTour();
    };
  }

  mettreAJourBoutonsOptionsDebutTour();
}

   async function innoverCategorieOuGagner2Progres(categorie) {
  if (!categorie) {
    return false;
  }

  if (existeCarteAccessiblePourInnover([categorie])) {
    const succes = await innoverCategorie(categorie);
    afficherVue("vue-joueur");
    afficherZoneJoueur();
    afficherBasMarche?.();
    afficherHautMarche?.();
    return succes;
  }

  gagnerRessource("progres", 2);

  ouvrirPanneauUI(
    `Aucune carte ${categorie} n'est disponible. Vous gagnez 2 Progrès à la place.`,
    [{ label: "OK" }]
  );

  afficherVue("vue-joueur");
  afficherZoneJoueur();
  afficherBasMarche?.();
  afficherHautMarche?.();
  return true;
}

async function innoverDebutTour() {
  if (!optionSpecialeDebutTourDisponible()) {
    return false;
  }

  verrouillerOptionsSpecialesDebutTour();
  defausserTouteLaMainJoueur();

  afficherVue("vue-marche");

  const categorie = await choisirCategorieAuMarche([
    CATEGORIES.TRADITION,
    CATEGORIES.CIVILISE,
    CATEGORIES.REGION,
    CATEGORIES.VASSAL
  ]);

  if (!categorie) {
    afficherVue("vue-joueur");
    afficherZoneJoueur();
    return false;
  }

  const succes = await innoverCategorieOuGagner2Progres(categorie);

  if (!succes) {
    afficherVue("vue-joueur");
    afficherZoneJoueur();
    return false;
  }

  terminerTourJoueur();
  return true;
}

   function renvoyerToutesLesInstabilitesDeLaMain() {
  const main = Array.isArray(jeu.joueurZones.mainJoueur)
    ? jeu.joueurZones.mainJoueur
    : [];

  const cartesGardees = [];
  let nbRenvoyees = 0;

  for (const carte of main) {
    if (carte && categoriePrincipaleCarte(carte) === CATEGORIES.INSTABILITE) {
      jeu.piles.piocheMarcheInstabilite.push(carte);
      nbRenvoyees += 1;
    } else {
      cartesGardees.push(carte);
    }
  }

  jeu.joueurZones.mainJoueur = cartesGardees;

  if (nbRenvoyees > 0) {
    melanger(jeu.piles.piocheMarcheInstabilite);
  }

  afficherZoneJoueur();
  afficherBasMarche?.();
  return nbRenvoyees;
}

async function pacifierDebutTour() {
  if (!optionSpecialeDebutTourDisponible()) {
    return false;
  }

  verrouillerOptionsSpecialesDebutTour();

  const nb = renvoyerToutesLesInstabilitesDeLaMain();

  ouvrirPanneauUI(
    nb > 0
      ? `Pacification : ${nb} carte(s) Instabilité renvoyée(s).`
      : `Pacification : aucune Instabilité dans votre main.`,
    [
      {
        label: "Continuer",
        callback: () => {
          terminerTourJoueur();
        }
      }
    ]
  );

  return true;
}

function defausserTouteLaMainJoueur() {
  const main = Array.isArray(jeu.joueurZones.mainJoueur)
    ? jeu.joueurZones.mainJoueur
    : [];

  const defausse = jeu.joueurZones.defausseJoueur;

  while (main.length > 0) {
    const carte = main.shift();
    if (carte) {
      defausse.push(carte);
    }
  }

  afficherZoneJoueur();
}

function terminerChoixProgresMarcheEtPasserAuNettoyage(
  message = "Vous pouvez maintenant défausser autant de cartes que vous voulez de votre main, puis terminer le nettoyage."
) {
  jeu.ui.choixProgresMarcheActif = false;
  fermerPanneauChoixMarcheSelection();
  jeu.manche.phase = PHASES.NETTOYAGE_DEFAUSSE;
  mettreAJourBoutonsPhaseJoueur();

  reinitialiserActionsJoueur();
  reinitialiserEpuisementJoueur();

  afficherBasMarche();
  afficherHautMarche?.();
  afficherZoneJoueur();
  afficherVue("vue-joueur");

  ouvrirPanneauChoixMarcheSelection(message, true, {
    afficherBouton: true,
    libelleBouton: "Terminer le nettoyage",
    boutonGrand: true,
    actionBouton: () => {
      terminerNettoyage();
    }
  });
}

function demarrerChoixProgresMarcheFinTour() {
  jeu.manche.phase = PHASES.NETTOYAGE_CHOIX_PROGRES;
  jeu.ui.choixProgresMarcheActif = true;
  mettreAJourBoutonsPhaseJoueur();

  afficherVue("vue-marche");
  afficherZoneJoueur();
  afficherBasMarche();

  if (obtenirCartesVisiblesMarche().length === 0) {
    terminerChoixProgresMarcheEtPasserAuNettoyage(
      "Fin du tour. Le marché est vide : ajout de Progrès ignoré. Vous pouvez maintenant défausser des cartes puis terminer le nettoyage."
    );
    return false;
  }
  ouvrirPanneauChoixMarcheSelection(
    "Fin du tour. Choisissez une carte du marché pour y ajouter 1 Progrès.",
    true
  );
  return true;
}

function passerAuNettoyageJoueur() {
  demarrerChoixProgresMarcheFinTour();
  journal("passerAuNettoyageJoueur ->", jeu.manche.phase);
}

async function choisirOptionPacifierDebutTour() {
  if (jeu.manche.phase !== PHASES.TOUR) {
    return false;
  }

  const nbRenvoyees = renvoyerToutesLesInstabilitesDeLaMain();

  avertir(
    nbRenvoyees > 0
      ? `Pacification : ${nbRenvoyees} carte(s) Instabilité renvoyée(s).`
      : "Pacification : aucune Instabilité dans la main."
  );

  passerAuNettoyageJoueur();
  return true;
}

async function choisirOptionInnoverDebutTour() {
  if (jeu.manche.phase !== PHASES.TOUR) {
    return false;
  }

  defausserTouteLaMainJoueur();

  const categorieChoisie = await choisirCategorieAuMarche([
    CATEGORIES.TRADITION,
    CATEGORIES.CIVILISE,
    CATEGORIES.REGION,
    CATEGORIES.VASSAL
  ]);

  if (!categorieChoisie) {
    afficherVue("vue-joueur");
    afficherZoneJoueur();
    return false;
  }

  afficherVue("vue-marche");

  const succesInnovation = await innoverCategorie(categorieChoisie);

  afficherVue("vue-joueur");
  afficherZoneJoueur();
  afficherBasMarche();
  afficherHautMarche?.();

  if (!succesInnovation) {
    ouvrirPanneauUI(
      `Aucune innovation possible en ${categorieChoisie}.`,
      [{ label: "OK" }]
    );
    return false;
  }

  passerAuNettoyageJoueur();
  return true;
}

function initialiserEtatCarte(carte) {
  if (!carte) {
    return;
  }

  if (typeof carte.epuisee !== "boolean") {
    carte.epuisee = false;
  }

  initialiserJetonsCarte(carte);
  initialiserReserveCarte(carte);
}

function cartePossedeEffetEpuiser(carte) {
  return (
    !!carte &&
    Array.isArray(carte.epuiserCode) &&
    carte.epuiserCode.length > 0
  );
}

function cartePeutEtreEpuisee(carte, options = {}) {
  const afficherMessageCondition = options.afficherMessageCondition !== false;

  if (!carte) {
    return false;
  }

  if (typeof carte.conditionEpuiser === "function" && !carte.conditionEpuiser()) {
    if (afficherMessageCondition) {
      ouvrirPanneauUI(
        carte.messageConditionEpuiser || "Cette carte ne peut pas être épuisée maintenant.",
        [{ label: "OK" }]
      );
    }
    return false;
  }

  initialiserEtatCarte(carte);

  return cartePossedeEffetEpuiser(carte) && carte.epuisee === false;
}

function carteEpuiserEstActivableMaintenant(carte) {
  if (!cartePeutEtreEpuisee(carte, { afficherMessageCondition: false })) {
    return false;
  }

  if (jeu?.finPartie?.terminee) {
    return false;
  }

  if (jeu?.ui?.solsticeActif) {
    return false;
  }

  if (jeu?.manche?.phase !== PHASES.TOUR) {
    return false;
  }

  return (jeu?.joueur?.epuisement || 0) > 0;
}

async function epuiserCarte(carte) {
  if (jeu.finPartie.terminee) {
    return false;
  }

  if (!carte) {
    return false;
  }

  initialiserEtatCarte(carte);

  if (carte.epuisee) {
    ouvrirPanneauUI("Cette carte est déjà épuisée.", [
      { label: "OK" }
    ]);
    return false;
  }

  if (jeu.joueur.epuisement <= 0) {
    ouvrirPanneauUI("Vous n'avez plus de jetons d'épuisement.", [
      { label: "OK" }
    ]);
    return false;
  }

  carte.epuisee = true;
  jeu.joueur.epuisement -= 1;

  const succes = await executerListeEffets(
    carte.epuiserCode || [],
    { carteSource: carte }
  );

  if (succes === false) {
    carte.epuisee = false;
    jeu.joueur.epuisement += 1;
    afficherZoneJoueur();
    return false;
  }

  // AJOUT ICI
  verrouillerOptionsSpecialesDebutTour();

  afficherZoneJoueur();
  return true;
}

function reinitialiserCartesEpuisees() {
  (jeu.joueurZones.tableauJoueur || []).forEach(carte => {
    if (!carte) {
      return;
    }

    initialiserEtatCarte(carte);
    carte.epuisee = false;
  });

  const cartePuissance = jeu.joueurZones.cartePuissanceVisible;

  if (cartePuissance) {
    initialiserEtatCarte(cartePuissance);
    cartePuissance.epuisee = false;
  }
}

async function resoudreSolsticeJoueur() {
  for (const carte of jeu.joueurZones.tableauJoueur) {
    if (Array.isArray(carte.solsticeCode) && carte.solsticeCode.length > 0) {
      journal("Résolution du Solstice :", carte.nom);
      await executerListeEffets(carte.solsticeCode, { carteSource: carte });
    }
  }

  afficherZoneJoueur();
}

function terminerTourJoueur() {
  if (jeu.finPartie.terminee) {
    return;
  }

  if (jeu.manche.phase !== PHASES.TOUR) {
    return;
  }

  // 🔥 Reset complet de l’épuisement
  reinitialiserCartesEpuisees();
  reinitialiserModificateursTour();

  jeu.joueurZones.pileRafraichissementNationEpuisee = false;
  jeu.joueurZones.pileEtoileEpuisee = false;

  // 🔽 Passage au nettoyage
  demarrerChoixProgresMarcheFinTour();
  miniTutorielSynchroniser();
  journal("terminerTourJoueur ->", jeu.manche.phase);
}

function cliquerCarteMarche(nomCarte) {
  if (!jeu.ui.choixProgresMarcheActif) {
    return;
  }

  const cartesVisibles = obtenirCartesVisiblesMarche();
  const carte = cartesVisibles.find(c => c.nom === nomCarte);

  if (!carte) {
    return;
  }

  ajouterProgresSurCarteMarche(carte);
  terminerChoixProgresMarcheEtPasserAuNettoyage();
  journal("cliquerCarteMarche ->", jeu.manche.phase);
  debugLog("PHASE =", jeu.manche.phase);
debugLog("PHASES.NETTOYAGE_DEFAUSSE =", PHASES.NETTOYAGE_DEFAUSSE);
debugLog("BTN FIN NETTOYAGE =", getElement("btn-fin-nettoyage"));
debugLog("BTN DISABLED =", getElement("btn-fin-nettoyage")?.disabled);
}

function terminerNettoyage() {
  if (jeu.finPartie.terminee) {
    return;
  }

  if (jeu.manche.phase !== PHASES.NETTOYAGE_DEFAUSSE) {
    return;
  }

  fermerPanneauChoixMarcheSelection();

  piocherJusquaLimiteMain(async () => {
    jeu.manche.phase = "attente-tour-bot";

    afficherZoneJoueur();
    afficherZoneBot?.();
    afficherVue("vue-bot");
    definirEtatBoutonTourBot(true);
    mettreAJourBoutonsPhaseJoueur();
    miniTutorielSynchroniser();

    avertir("Nettoyage terminé. Cliquez sur « Commencer tour Bot ».");
  });
}

async function finaliserFinDeMancheApresSolstice() {
  const mancheTerminee = Number(jeu.manche.numero || 0);
  reinitialiserModificateursTour();

  if (verifierEffondrement()) {
    return;
  }

  jeu.manche.phase = PHASES.TOUR;
  jeu.manche.numero += 1;
  mettreAJourBoutonsPhaseJoueur();
  preparerDebutTourJoueur();
  miniTutorielNotifierFinDeManche(mancheTerminee);

  if (verifierFinParDecompte()) {
    return;
  }

  sauvegarderPartie({ silencieux: true, origine: "auto-fin-solstice" });

  afficherZoneJoueur();

  avertir("Solstice terminé. Nouvelle manche.");
  journal("finaliserFinDeMancheApresSolstice ->", jeu.manche.phase);
}
/* =========================================================
   28) HELPERS TEMPORAIRES DE CHOIX / DÉFAUSSE
   ========================================================= */

   function compterRegionsDansTableauJoueur() {
  return (jeu.joueurZones.tableauJoueur || []).filter(carte =>
    inclutCategorie(carte, "Région")
  ).length;
}

   function affichageJetonEpuisementPile(active) {
  if (!active) {
    return "";
  }

  return `
    <div class="jeton-epuisement-carte">
      <img src="icons/jeton-epuisement.png" alt="Pile épuisée">
    </div>
  `;
}

   function confirmerActionOptionnelleSansFermerZoom(message) {
  return new Promise(resolve => {
    const panneau = getElement("panneau-ui");
    const messageDiv = getElement("panneau-ui-message");
    const boutonsDiv = getElement("panneau-ui-boutons");

    if (!panneau || !messageDiv || !boutonsDiv) {
      resolve(false);
      return;
    }

    jeu.ui.panneauUIOuvert = true;

    messageDiv.textContent = message;
    boutonsDiv.innerHTML = "";

    const boutonOui = document.createElement("button");
    boutonOui.textContent = "Oui";
    boutonOui.onclick = () => {
      panneau.classList.remove("panneau-ui-ouvert");
      panneau.classList.add("panneau-ui-cache");
      jeu.ui.panneauUIOuvert = false;
      resolve(true);
    };

    const boutonNon = document.createElement("button");
    boutonNon.textContent = "Non";
    boutonNon.onclick = () => {
      panneau.classList.remove("panneau-ui-ouvert");
      panneau.classList.add("panneau-ui-cache");
      jeu.ui.panneauUIOuvert = false;
      resolve(false);
    };

    boutonsDiv.appendChild(boutonOui);
    boutonsDiv.appendChild(boutonNon);

    panneau.classList.remove("panneau-ui-cache");
    panneau.classList.add("panneau-ui-ouvert");
  });
}

function confirmerActionOptionnelle(message) {
  return new Promise(resolve => {
    ouvrirPanneauUI(message, [
      {
        label: "Oui",
        callback: () => resolve(true)
      },
      {
        label: "Non",
        callback: () => resolve(false)
      }
    ]);
  });
}

async function defausserCarteChoisieDepuisMain(quantite = 1) {
  if (jeu.joueurZones.mainJoueur.length < quantite) {
    ouvrirPanneauUI("Vous n'avez pas assez de cartes en main à défausser.", [
      { label: "OK" }
    ]);
    return false;
  }

  for (let i = 0; i < quantite; i += 1) {
    const succes = await new Promise(resolve => {
      demarrerSelectionCarte({
        source: "main",
        message: `Choisissez une carte à défausser (${i + 1}/${quantite}).`,
        obligatoire: true,
        afficherPanneau: false,
        predicate: () => true,

        onChoose: async carte => {
          const indexMain = jeu.joueurZones.mainJoueur.indexOf(carte);

          if (indexMain === -1) {
            resolve(false);
            return;
          }

          const carteDefaussee = jeu.joueurZones.mainJoueur.splice(indexMain, 1)[0];
          jeu.joueurZones.defausseJoueur.push(carteDefaussee);

          afficherZoneJoueur();
          resolve(true);
        },

        onCancel: () => {
          resolve(false);
        }
      });
    });

    if (!succes) {
      return false;
    }
  }

  afficherZoneJoueur();
  return true;
}

async function choisirOption(options) {
  if (!Array.isArray(options) || options.length === 0) {
    return null;
  }

  const indexChoisi = await demanderChoixTexte(
    "Choisissez une option :",
    options.map(option => ({ label: option.label }))
  );

  if (indexChoisi === null) {
    return null;
  }

  if (
    indexChoisi < 0 ||
    indexChoisi >= options.length
  ) {
    ouvrirPanneauUI("Choix invalide.", [
      { label: "OK" }
    ]);
    return null;
  }

  return options[indexChoisi];
}
/* =========================================================
   29) REGISTRES VISUELS (ICÔNES / COULEURS)
   ========================================================= */

const iconesPin = {
  [PINS.PERSISTANTE]: `<img class="icone" src="icons/imperium-persistante.png" alt="Persistante">`,
  [PINS.EPEE]: `<img class="icone" src="icons/imperium-epee.png" alt="Épée">`,
  [PINS.A]: `<img class="icone" src="icons/pin-a.svg" alt="A">`,
  [PINS.B]: `<img class="icone" src="icons/pin-b.svg" alt="B">`
};

const iconesStatut = {
  [STATUTS.BARBARE]: `<img class="icone" src="icons/imperium-barbare.png" alt="Barbare">`,
  [STATUTS.EMPIRE]: `<img class="icone" src="icons/imperium-empire.png" alt="Empire">`
};

const iconesRegion = {
  Sac: `<img class="icone-centre" src="icons/imperium-sac.png" alt="Sac">`,
  "Blé": `<img class="icone-centre" src="icons/imperium-ble.png" alt="Blé">`,
  Eau: `<img class="icone-centre" src="icons/imperium-eau.png" alt="Eau">`
};

const iconesTypeCarte = {
  Maison: `<img class="icone-centre" src="icons/imperium-maison.png" alt="Maison">`,
  Duplex: `<img class="icone-centre" src="icons/imperium-duplex.png" alt="Duplex">`,
  Casque: `<img class="icone-centre" src="icons/imperium-casque.png" alt="Casque">`,
  Masque: `<img class="icone-centre" src="icons/imperium-masque.png" alt="Masque">`
};

const iconesCategorie = {
  [CATEGORIES.REGION]: `<img class="icone-categorie" src="icons/imperium-region.png" alt="Région">`,
  [CATEGORIES.CIVILISE]: `<img class="icone-categorie" src="icons/imperium-civilise.png" alt="Civilisé">`,
  [CATEGORIES.VASSAL]: `<img class="icone-categorie" src="icons/imperium-vassal.png" alt="Vassal">`,
  [CATEGORIES.TRADITION]: `<img class="icone-categorie" src="icons/imperium-tradition.png" alt="Tradition">`,
  [CATEGORIES.RENOMMEE]: `<img class="icone-categorie" src="icons/imperium-renommee.png" alt="Renommée">`,
  [CATEGORIES.INSTABILITE]: `<img class="icone-categorie" src="icons/imperium-instabilite.png" alt="Instabilité">`,
  [CATEGORIES.PUISSANCE]: `<img class="icone-categorie" src="icons/imperium-puissance.png" alt="Puissance">`
};

const iconesIndicateur = {
  T: `<img src="icons/imperium-tradition.png">`,
  V: `<img src="icons/imperium-vassal.png">`,
  R: `<img src="icons/imperium-region.png">`,
  C: `<img src="icons/imperium-civilise.png">`,
  Rn: `<img src="icons/imperium-renommee.png">`,
  I: `<img src="icons/imperium-instabilite.png">`
};

const couleursBandeau = {
  [CATEGORIES.REGION]: "#caa24a",
  [CATEGORIES.CIVILISE]: "#b7afa1",
  [CATEGORIES.TRADITION]: "#5d8b4a",
  [CATEGORIES.INSTABILITE]: "#c15345",
  [CATEGORIES.VASSAL]: "#4f6fa3",
  [CATEGORIES.RENOMMEE]: "#b56798",
  Aucun: "#8e8479",
  Noir: "#2a2622"
};

const remplacementsTexteCarte = [
  ["Population", `<img class="icone-ressource" src="icons/imperium-population.png" alt="Population">`],
  ["Matériaux", `<img class="icone-ressource" src="icons/imperium-materiaux.png" alt="Matériaux">`],
  ["Progrès", `<img class="icone-ressource" src="icons/imperium-progres.png" alt="Progrès">`],
  ["Renommée", `<img class="icone-ressource" src="icons/imperium-renommee.png">`],
  ["Blé", `<img class="icone-ressource" src="icons/imperium-ble.png">`],
  ["Eau", `<img class="icone-ressource" src="icons/imperium-eau.png">`],
  ["Sac", `<img class="icone-ressource" src="icons/imperium-sac.png">`],
  ["Tradition", `<img class="icone-ressource" src="icons/imperium-tradition.png">`],
  ["Civilisé", `<img class="icone-ressource" src="icons/imperium-civilise.png">`],
  ["Instabilité", `<img class="icone-ressource" src="icons/imperium-instabilite.png">`],
  ["Région", `<img class="icone-ressource" src="icons/imperium-region.png">`],
  ["Vassal", `<img class="icone-ressource" src="icons/imperium-vassal.png">`],
  ["Maison", `<img class="icone-ressource" src="icons/imperium-maison.png">`],
  ["Duplex", `<img class="icone-ressource" src="icons/imperium-duplex.png">`],
  ["Barbare", `<img class="icone-ressource" src="icons/imperium-barbare.png">`],
  ["Empire", `<img class="icone-ressource" src="icons/imperium-empire.png">`],
  ["persistante", `<img class="icone-ressource" src="icons/imperium-persistante.png">`]
];

/* =========================================================
   30) HELPERS D’ACCÈS VISUEL
   ========================================================= */

   

   

function iconePin(pin) {
  return iconesPin[pin] || "";
}

function iconeStatut(statut) {
  return iconesStatut[statut] || "";
}

function iconeRegion(type) {
  return iconesRegion[type] || "";
}

function iconeTypeCarte(type) {
  return iconesTypeCarte[type] || "";
}

function iconeCategorie(categorie = "") {
  return categorie
    .split(",")
    .map(valeur => valeur.trim())
    .filter(Boolean)
    .map(valeur => iconesCategorie[valeur] || "")
    .join(" ");
}

function iconeIndicateur(type) {
  return iconesIndicateur[type] || "";
}

function couleurBandeau(style) {
  return couleursBandeau[style] || "#999999";
}

function obtenirCouleurNation(nation) {

  const couleurs = {
    Romains: "#ff1e1e",
    Celtes: "#015020",
    "Macédoniens": "#970192",
    Perses: "#c426bf",
    Grecs: "#ffffff",
    Vikings: "#f0b12a",
    Carthaginois: "#1d33ade6",
    Scythes:"#b1dd66bb"
  };

  return couleurs[nation] || "#666666";
}

/* =========================================================
   31) HELPERS TEXTE / BLOCS HTML DE CARTE
   ========================================================= */

function normaliserTexteSansAccents(valeur = "") {
  return String(valeur || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

function motsSansIconePourCarte(carte = null) {
  const nomNormalise = normaliserTexteSansAccents(carte?.nom || "");
  const mots = new Set();

  if (nomNormalise === "science") {
    mots.add("Progrès");
  }

  if (nomNormalise === "empire mede") {
    mots.add("Empire");
  }

  return mots;
}

function remplacerRessources(texte = "", options = {}) {
  let resultat = texte;
  const motsExclus = new Set(options?.motsExclus || []);

  remplacementsTexteCarte.forEach(([source, remplacement]) => {
    if (motsExclus.has(source)) {
      return;
    }

    resultat = resultat.replaceAll(source, remplacement);
  });

  return resultat;
}

const MOTS_CLES_EFFET_GRAS_PAR_DEFAUT = [

  "Abandonne",
  "Abandonnée",
  "Abandonner",
  "Abandonnez",
  "Acquérez",
  "Acquérir",
  "Action gratuite",
  "Archivée",
  "Archivées",
  "Archiver",
  "Archivez",
  "Choisir",
  "Épuiser",
  "Exil",
  "Exilée",
  "Exiler",
  "Exilez",
  "Histoire",
  "Innover",
  "Innovez",
  "Passif",
  "Piocher",
  "Rappeler",
  "Rappelez",
  "Rappelle",
  "Récupère",
  "Récupérée",
  "Récupérer",
  "Récupérez",
  "Renvoyer",
  "Renvoyez",
  "Réservée",
  "Réserver",
  "Réservez",
  "Solstice",
  "Trouver"


  
];

let motsClesEffetEnGras = [...MOTS_CLES_EFFET_GRAS_PAR_DEFAUT];
let motifsMotsClesEffetEnGras = [];
let motifMotsClesEffetEnGrasGlobal = null;

function echapperExpressionReguliere(texte = "") {
  return String(texte || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function echapperAttributHTML(texte = "") {
  return String(texte || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function reconstruireMotifsMotsClesEffetEnGras() {
  motifsMotsClesEffetEnGras = [...new Set(
    (motsClesEffetEnGras || [])
      .map(mot => String(mot || "").trim())
      .filter(Boolean)
  )].sort((a, b) => b.length - a.length);

  if (motifsMotsClesEffetEnGras.length === 0) {
    motifMotsClesEffetEnGrasGlobal = null;
    return;
  }

  const alternanceMots = motifsMotsClesEffetEnGras
    .map(mot => echapperExpressionReguliere(mot))
    .join("|");

  motifMotsClesEffetEnGrasGlobal = new RegExp(
    `(^|[^\\p{L}\\p{N}_])(${alternanceMots})(?=[:\\s]|$|[^\\p{L}\\p{N}_])`,
    "giu"
  );
}

function definirMotsClesEffetEnGras(mots = []) {
  if (!Array.isArray(mots) || mots.length === 0) {
    motsClesEffetEnGras = [...MOTS_CLES_EFFET_GRAS_PAR_DEFAUT];
  } else {
    motsClesEffetEnGras = mots;
  }

  reconstruireMotifsMotsClesEffetEnGras();
}

function mettreMotsClesEffetEnGras(texte = "") {
  const texteSource = String(texte || "");

  if (!(motifMotsClesEffetEnGrasGlobal instanceof RegExp)) {
    return texteSource;
  }

  const segments = texteSource.split(/(<[^>]+>)/g);

  return segments
    .map(segment => {
      if (!segment || segment.startsWith("<")) {
        return segment;
      }

      return segment.replace(
        motifMotsClesEffetEnGrasGlobal,
        (correspondance, prefixe, motTrouve) => {
          const termeLexique = obtenirTermeLexiqueTooltipPourMotCle(motTrouve);

          if (!termeLexique) {
            return `${prefixe}<strong class="mot-cle-effet">${motTrouve}</strong>`;
          }

          return `${prefixe}<strong class="mot-cle-effet mot-cle-tooltip" data-terme-lexique="${echapperAttributHTML(termeLexique)}" tabindex="-1">${motTrouve}</strong>`;
        }
      );
    })
    .join("");
}

reconstruireMotifsMotsClesEffetEnGras();

function classeTexteEffet(texte = "") {
  const longueur = texte.length;

  if (longueur > 180) {
    return "effet tres-petit";
  }

  if (longueur > 110) {
    return "effet petit";
  }

  return "effet normal";
}

function affichageConditionVictoire(condition, options = {}) {
  if (!condition || condition === "Aucun") {
    return "";
  }

  return `<div class="condition-victoire">${remplacerRessources(condition, options)}</div>`;
}

function affichagePointsVictoire(points) {
  if (points === 0 || points === "Aucun" || points == null) {
    return "";
  }

  if (points === "Conditionnel") {
    return `
      <div class="points-victoire">
        <img class="icone-pv" src="icons/points-conditionnel.svg" alt="Points de victoire conditionnels">
      </div>
    `;
  }

  if (points === "Variable") {
    return `
      <div class="points-victoire">
        <img class="icone-pv" src="icons/points-variable.svg" alt="Points de victoire variables">
      </div>
    `;
  }

  return `<div class="points-victoire">${points}</div>`;
}

function affichageCoutDeveloppement(carte, options = {}) {
  if (!carte || !carte.coutDeveloppement || carte.coutDeveloppement === "Aucun") {
    return "";
  }

  if (carte.localisationDepart !== "Étoile") {
    return "";
  }

  return `
    <div class="cout-developpement">
      <strong>Coût de développement :</strong>
      ${remplacerRessources(carte.coutDeveloppement, options)}
    </div>
  `;
}

function affichageJetonEpuisement(carte) {
  if (!carte || carte.epuisee !== true) {
    return "";
  }

  return `
    <div class="jeton-epuisement-carte">
      <img src="icons/jeton-epuisement.png" alt="Épuisée">
    </div>
  `;
}

function affichageReserveesCarte(carte) {
  if (!carte || !Array.isArray(carte.reservees) || carte.reservees.length === 0) {
    return "";
  }

  return `
    <div class="indicateur-reservees-carte">
      <div class="reservee-ombre reservee-ombre-1"></div>
      <div class="reservee-ombre reservee-ombre-2"></div>
      <div class="compteur-reservees-carte">${carte.reservees.length}</div>
    </div>
  `;
}

function creerSymboleCentre(carte) {
  if (carte.typeCarte && carte.typeCarte !== "Aucun") {
    return `<div class="symbole-centre">${iconeTypeCarte(carte.typeCarte)}</div>`;
  }

  if (Array.isArray(carte.typeRegion) && carte.typeRegion.length > 0) {
    return `
      <div class="symbole-centre">
        ${carte.typeRegion.map(type => `<span class="icone-region">${iconeRegion(type)}</span>`).join(" ")}
      </div>
    `;
  }

  return "";
}

function obtenirIconeLocalisation(localisation) {
  if (localisation === "Croissant") {
    return `
      <svg viewBox="0 0 100 100" class="icone-localisation">
        <path d="M65 10
                 A35 35 0 1 0 65 90
                 A25 35 0 1 1 65 10Z"
              fill="white"/>
      </svg>
    `;
  }

  if (localisation === "Pleine") {
    return `
      <svg viewBox="0 0 100 100" class="icone-localisation">
        <circle cx="50" cy="50" r="28" fill="white"/>
      </svg>
    `;
  }

  if (localisation === "Puissance") {
    return `<span class="icone-puissance"></span>`;
  }

  if (localisation === "Étoile") {
    return `
      <svg viewBox="0 0 100 100" class="icone-localisation">
        <path d="M50 15
                 L60 40
                 L85 50
                 L60 60
                 L50 85
                 L40 60
                 L15 50
                 L40 40Z"
              fill="white"/>
      </svg>
    `;
  }

  return "";
}

let ajustementNomCartesPlanifie = false;

function ajusterTailleNomCarte(elementNom) {
  if (!(elementNom instanceof HTMLElement)) {
    return;
  }

  const texte = String(elementNom.textContent || "").trim();

  if (!texte) {
    return;
  }

  elementNom.style.fontSize = "";
  elementNom.style.letterSpacing = "";
  elementNom.style.transform = "";
  elementNom.style.transformOrigin = "";

  const largeurDisponible = elementNom.clientWidth;

  if (largeurDisponible <= 0) {
    return;
  }

  const styleCourant = window.getComputedStyle(elementNom);
  const tailleInitiale = parseFloat(styleCourant.fontSize) || 16;
  const espacementInitial = parseFloat(styleCourant.letterSpacing) || 0;
  const tailleMinimale = Math.max(9.8, tailleInitiale * 0.55);

  let taille = tailleInitiale;

  while (elementNom.scrollWidth > largeurDisponible + 0.5 && taille > tailleMinimale) {
    taille = Math.max(tailleMinimale, taille - 0.25);
    elementNom.style.fontSize = `${taille.toFixed(2)}px`;

    const reductionEspacement = (tailleInitiale - taille) * 0.06;
    const nouvelEspacement = Math.max(-0.15, espacementInitial - reductionEspacement);
    elementNom.style.letterSpacing = `${nouvelEspacement.toFixed(2)}px`;
  }

  if (elementNom.scrollWidth > largeurDisponible + 0.5) {
    const ratio = largeurDisponible / Math.max(1, elementNom.scrollWidth);
    const scaleX = Math.max(0.95, Math.min(1, ratio));
    elementNom.style.transformOrigin = "center center";
    elementNom.style.transform = `scaleX(${scaleX.toFixed(3)})`;
  }
}

function ajusterTailleNomsCartes(racine = document) {
  if (!racine || typeof racine.querySelectorAll !== "function") {
    return;
  }

  const noms = racine.querySelectorAll(".nom");

  noms.forEach(elementNom => {
    ajusterTailleNomCarte(elementNom);
  });
}

function planifierAjustementNomsCartes(racine = document) {
  if (ajustementNomCartesPlanifie) {
    return;
  }

  ajustementNomCartesPlanifie = true;

  requestAnimationFrame(() => {
    ajustementNomCartesPlanifie = false;
    ajusterTailleNomsCartes(racine);
  });
}

function initialiserAjustementNomsCartes() {
  if (typeof MutationObserver === "undefined") {
    return;
  }

  const observateur = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      if (mutation.addedNodes && mutation.addedNodes.length > 0) {
        planifierAjustementNomsCartes(document);
        return;
      }
    }
  });

  observateur.observe(document.body, {
    childList: true,
    subtree: true
  });

  planifierAjustementNomsCartes(document);

  window.addEventListener("resize", () => {
    planifierAjustementNomsCartes(document);
  });
}

/* =========================================================
   32) RENDU DES CARTES
   ========================================================= */

function creerCarteHTML(carte) {
  const statutHTML =
    carte.statut && carte.statut !== "Aucun"
      ? `<span class="statut">${iconeStatut(carte.statut)}</span>`
      : "";

  const motsExclus = motsSansIconePourCarte(carte);
  const symboleCentreHTML = creerSymboleCentre(carte);
  const pointsVictoireHTML = affichagePointsVictoire(carte.pointsVictoire);
  const conditionVictoireHTML = affichageConditionVictoire(carte.conditionVictoire, { motsExclus });
  const coutDeveloppementHTML = affichageCoutDeveloppement(carte, { motsExclus });
  const styleBandeau = carte.styleBandeau || carte.bandeau || "Aucun";
  const texteEffet = carte.effet || "";
  const texteEffetFormate = mettreMotsClesEffetEnGras(texteEffet);
  const jetonEpuisementHTML = affichageJetonEpuisement(carte);
  const reserveesHTML = affichageReserveesCarte(carte);

  const triangleNationHTML =
    carte.nation && carte.nation !== "Aucun"
      ? `
        <div class="coin-nation">
          <div class="triangle-nation" style="background:${obtenirCouleurNation(carte.nation)};">
            ${obtenirIconeLocalisation(carte.localisationDepart)}
          </div>
        </div>
      `
      : "";

  return `
    <div class="bandeau" style="background:${couleurBandeau(styleBandeau)}; color:black;">
      <span class="pin">${iconePin(carte.pin)}</span>
      <span class="nom">${carte.nom || ""}</span>
      <span class="pin">${iconePin(carte.pin)}</span>
    </div>

    <div class="zone-sous-bandeau">
      <div class="zone-gauche">${statutHTML}</div>
      <div class="zone-centre">${symboleCentreHTML}</div>
      <div class="zone-droite">${statutHTML}</div>
    </div>

    <div class="${classeTexteEffet(texteEffet)}">
      ${remplacerRessources(texteEffetFormate, { motsExclus })}
    </div>

    ${coutDeveloppementHTML}

    <div class="bas">
      <div class="categorie">${iconeCategorie(carte.categorie)}</div>
      <div class="zone-victoire">
        ${conditionVictoireHTML}
        ${pointsVictoireHTML}
      </div>
    </div>

    ${triangleNationHTML}
    ${jetonEpuisementHTML}
    ${reserveesHTML}
  `;
}

function creerCarteStatutHTML(face) {
  const estBarbare = face.couleur === "rouge";
  const couleur = estBarbare ? "#E32320" : "#4699D4";
  const classeCarte = estBarbare ? "carte-statut barbare" : "carte-statut empire";
  const iconeStatutHTML = `<span class="statut">${iconeStatut(face.statut)}</span>`;

  let iconeCentreHTML = "";

  if (face.iconeCentrale === "hache") {
    iconeCentreHTML = `<img src="icons/hache-barbare.png" class="illustration-statut" alt="Hache barbare">`;
  }

  if (face.iconeCentrale === "couronne") {
    iconeCentreHTML = `<img src="icons/Couronne-empire.png" class="illustration-statut" alt="Couronne empire">`;
  }

  return `
    <div class="${classeCarte}">
      <div class="bandeau-statut" style="background:${couleur};">
        ${face.nom}
      </div>

      <div class="zone-sous-bandeau-statut">
        <div class="zone-gauche">${iconeStatutHTML}</div>
        <div class="zone-centre"></div>
        <div class="zone-droite">${iconeStatutHTML}</div>
      </div>

      <div class="zone-illustration-statut">
        ${iconeCentreHTML}
      </div>

      <div class="bandeau-bas-statut" style="background:${couleur};"></div>
    </div>
  `;
}

function creerPileVisibleHTML(deck) {
  const carteDessus = voirDessus(deck);

  if (!carteDessus) {
    return "";
  }

  return `
    <div class="pile-visible">
      <div class="carte">
        ${creerCarteHTML(carteDessus)}
      </div>
      <div class="compteur-pile-mini">${deck.length}</div>
    </div>
  `;
}

function creerZoneMarcheHTML(zone) {
  if (!zone || zone.length === 0) {
    return "";
  }

  const cartePrincipale = zone[0];
  const carteDessous = zone[1];

  initialiserJetonsCarte(cartePrincipale);

  if (carteDessous) {
    initialiserJetonsCarte(carteDessous);
  }

  initialiserMateriauxCarte(cartePrincipale);

  const jetonsProgres = cartePrincipale.jetons.progres || 0;
  const materiauxSurCarte = obtenirMateriauxSurCarteMarche(cartePrincipale);

  if (!carteDessous) {
    return `
      <div class="zone-cartes-marche">
        <div class="carte carte-dessus">
          ${creerCarteHTML(cartePrincipale)}

          ${jetonsProgres > 0 ? `
            <div class="jeton-progres-marche">
              <span>+</span>
              <span>${jetonsProgres}</span>
              <img src="icons/imperium-progres.png" alt="Progrès">
            </div>
          ` : ""}

          ${materiauxSurCarte > 0 ? `
            <div class="badge-materiaux-marche">
            <span>+</span>
               <span>${materiauxSurCarte}</span>
              <img src="icons/imperium-materiaux.png" class="icone-ressource" alt="Matériaux">
            </div>
          ` : ""}
        </div>
      </div>
    `;
  }

  return `
    <div class="zone-cartes-marche">
      <div class="carte carte-dessous">
        ${creerCarteHTML(carteDessous)}
      </div>
      <div class="carte carte-dessus">
        ${creerCarteHTML(cartePrincipale)}

        ${jetonsProgres > 0 ? `
          <div class="jeton-progres-marche">
            <span>+</span>
            <span>${jetonsProgres}</span>
            <img src="icons/imperium-progres.png" alt="Progrès">
          </div>
        ` : ""}

        ${materiauxSurCarte > 0 ? `
          <div class="badge-materiaux-marche">
            <span>+</span>
            <span>${materiauxSurCarte}</span>
            <img src="icons/imperium-materiaux.png" class="icone-ressource" alt="Matériaux">
          </div>
        ` : ""}
      </div>
    </div>
  `;
}
/* =========================================================
   33) AFFICHAGE JOUEUR / COMPTEURS
   ========================================================= */

const RESSOURCES_FEEDBACK_COMPTEURS_JOUEUR = [
  "population",
  "materiaux",
  "progres"
];

const etatFeedbackCompteursJoueur = {
  initialise: false,
  population: 0,
  materiaux: 0,
  progres: 0
};

function reinitialiserFeedbackCompteursJoueur() {
  etatFeedbackCompteursJoueur.initialise = false;
}

function obtenirIdValeurCompteurJoueurPourRessource(typeRessource) {
  if (typeRessource === "population") {
    return "valeur-population";
  }

  if (typeRessource === "materiaux") {
    return "valeur-materiaux";
  }

  if (typeRessource === "progres") {
    return "valeur-progres";
  }

  return null;
}

function afficherFeedbackVariationRessourceJoueur(typeRessource, variation) {
  if (!Number.isFinite(variation) || variation === 0) {
    return;
  }

  const idValeurCompteur = obtenirIdValeurCompteurJoueurPourRessource(typeRessource);
  if (!idValeurCompteur) {
    return;
  }

  const elementValeurCompteur = getElement(idValeurCompteur);
  const conteneurCompteur = elementValeurCompteur?.closest?.(".compteur-joueur");
  if (!conteneurCompteur) {
    return;
  }

  const feedback = document.createElement("div");
  feedback.className = "feedback-ressource-joueur";
  feedback.classList.add(variation > 0 ? "feedback-gain" : "feedback-perte");
  feedback.textContent = `${variation > 0 ? "+" : ""}${variation}`;

  const nbFeedbacksActifs = conteneurCompteur.querySelectorAll(".feedback-ressource-joueur").length;
  feedback.style.setProperty("--feedback-offset-y", `${nbFeedbacksActifs * 16}px`);

  conteneurCompteur.appendChild(feedback);
  feedback.addEventListener("animationend", () => {
    feedback.remove();
  }, { once: true });
}

function mettreAJourFeedbackCompteursJoueur() {
  const valeursActuelles = {
    population: Number(jeu.joueur.population || 0),
    materiaux: Number(jeu.joueur.materiaux || 0),
    progres: Number(jeu.joueur.progres || 0)
  };

  if (!etatFeedbackCompteursJoueur.initialise) {
    etatFeedbackCompteursJoueur.population = valeursActuelles.population;
    etatFeedbackCompteursJoueur.materiaux = valeursActuelles.materiaux;
    etatFeedbackCompteursJoueur.progres = valeursActuelles.progres;
    etatFeedbackCompteursJoueur.initialise = true;
    return;
  }

  for (const typeRessource of RESSOURCES_FEEDBACK_COMPTEURS_JOUEUR) {
    const valeurPrecedente = Number(etatFeedbackCompteursJoueur[typeRessource] || 0);
    const valeurActuelle = Number(valeursActuelles[typeRessource] || 0);
    const variation = valeurActuelle - valeurPrecedente;

    if (variation !== 0) {
      afficherFeedbackVariationRessourceJoueur(typeRessource, variation);
    }

    etatFeedbackCompteursJoueur[typeRessource] = valeurActuelle;
  }
}

function afficherCompteursJoueur() {
  const valeurActions = getElement("valeur-actions");
  const valeurEpuisement = getElement("valeur-epuisement");
  const valeurPopulation = getElement("valeur-population");
  const valeurMateriaux = getElement("valeur-materiaux");
  const valeurProgres = getElement("valeur-progres");

  if (valeurActions) valeurActions.textContent = jeu.joueur.actions;
  if (valeurEpuisement) valeurEpuisement.textContent = jeu.joueur.epuisement;
  if (valeurPopulation) valeurPopulation.textContent = jeu.joueur.population;
  if (valeurMateriaux) valeurMateriaux.textContent = jeu.joueur.materiaux;
  if (valeurProgres) valeurProgres.textContent = jeu.joueur.progres;

  mettreAJourFeedbackCompteursJoueur();
}

/* =========================================================
   34) AFFICHAGE JOUEUR / TABLEAU ET MAIN
   ========================================================= */

const DUREE_TOAST_PAR_DEFAUT = 2800;
const DUREE_BANNIERE_SYSTEME_PAR_DEFAUT = 6200;
let toastActifTimeoutId = null;
let banniereSystemeTimeoutId = null;
const filePanneauUIModales = [];

function obtenirConteneurToastUI() {
  let conteneur = getElement("zone-toast-ui");

  if (!conteneur) {
    conteneur = document.createElement("div");
    conteneur.id = "zone-toast-ui";
    conteneur.setAttribute("aria-live", "polite");
    conteneur.setAttribute("aria-atomic", "true");
    document.body.appendChild(conteneur);
  }

  return conteneur;
}

function fermerToastUI() {
  const conteneur = getElement("zone-toast-ui");
  if (!conteneur) {
    return;
  }

  if (toastActifTimeoutId) {
    clearTimeout(toastActifTimeoutId);
    toastActifTimeoutId = null;
  }

  const toast = conteneur.querySelector(".toast-ui");
  if (!toast) {
    return;
  }

  toast.classList.remove("toast-ui-visible");
  toast.classList.add("toast-ui-cache");

  setTimeout(() => {
    toast.remove();
  }, 220);
}

function afficherToastUI(message, configuration = {}) {
  const conteneur = obtenirConteneurToastUI();
  if (!conteneur) {
    return;
  }

  const texte = String(message ?? "").trim();
  if (!texte) {
    return;
  }

  const toastExistant = conteneur.querySelector(".toast-ui");
  if (toastExistant) {
    toastExistant.remove();
  }

  if (toastActifTimeoutId) {
    clearTimeout(toastActifTimeoutId);
    toastActifTimeoutId = null;
  }

  const toast = document.createElement("div");
  toast.className = "toast-ui toast-ui-cache";
  toast.setAttribute("role", "status");
  toast.textContent = texte;
  conteneur.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove("toast-ui-cache");
    toast.classList.add("toast-ui-visible");
  });

  const duree = Number(configuration?.duree);
  const dureeFinale = Number.isFinite(duree) && duree > 0
    ? duree
    : DUREE_TOAST_PAR_DEFAUT;

  toastActifTimeoutId = setTimeout(() => {
    fermerToastUI();
  }, dureeFinale);
}

function obtenirConteneurBanniereSystemeUI() {
  let conteneur = getElement("zone-banniere-ui");

  if (!conteneur) {
    conteneur = document.createElement("div");
    conteneur.id = "zone-banniere-ui";
    conteneur.setAttribute("aria-live", "polite");
    conteneur.setAttribute("aria-atomic", "true");
    document.body.appendChild(conteneur);
  }

  return conteneur;
}

function fermerBanniereSystemeUI() {
  const conteneur = getElement("zone-banniere-ui");
  if (!conteneur) {
    return;
  }

  if (banniereSystemeTimeoutId) {
    clearTimeout(banniereSystemeTimeoutId);
    banniereSystemeTimeoutId = null;
  }

  const banniere = conteneur.querySelector(".banniere-systeme-ui");
  if (!banniere) {
    return;
  }

  banniere.classList.remove("banniere-systeme-ui-visible");
  banniere.classList.add("banniere-systeme-ui-cache");

  setTimeout(() => {
    banniere.remove();
  }, 220);
}

function afficherBanniereSystemeUI(message, configuration = {}) {
  const conteneur = obtenirConteneurBanniereSystemeUI();
  if (!conteneur) {
    return;
  }

  const texte = String(message ?? "").trim();
  if (!texte) {
    return;
  }

  const banniereExistante = conteneur.querySelector(".banniere-systeme-ui");
  if (banniereExistante) {
    banniereExistante.remove();
  }

  if (banniereSystemeTimeoutId) {
    clearTimeout(banniereSystemeTimeoutId);
    banniereSystemeTimeoutId = null;
  }

  const banniere = document.createElement("div");
  banniere.className = "banniere-systeme-ui banniere-systeme-ui-cache";
  banniere.setAttribute("role", "status");
  banniere.textContent = texte;
  conteneur.appendChild(banniere);

  requestAnimationFrame(() => {
    banniere.classList.remove("banniere-systeme-ui-cache");
    banniere.classList.add("banniere-systeme-ui-visible");
  });

  const duree = Number(configuration?.duree);
  const dureeFinale = Number.isFinite(duree) && duree > 0
    ? duree
    : DUREE_BANNIERE_SYSTEME_PAR_DEFAUT;

  banniereSystemeTimeoutId = setTimeout(() => {
    fermerBanniereSystemeUI();
  }, dureeFinale);
}

function normaliserLibelleBoutonPourRaccourci(label = "") {
  return String(label || "")
    .replace(/\[[^\]]*\]/g, "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function libelleBoutonEstOk(label = "") {
  return normaliserLibelleBoutonPourRaccourci(label) === "ok";
}

function libelleBoutonAvecRaccourciEntree(label = "") {
  if (libelleBoutonEstOk(label)) {
    return "OK [Entrée]";
  }

  return String(label || "");
}

function popupPeutDevenirToast(options = [], configuration = {}) {
  if (configuration?.forcerModal === true) {
    return false;
  }

  if (configuration?.mode === "toast") {
    return true;
  }

  if (!Array.isArray(options) || options.length !== 1) {
    return false;
  }

  const optionUnique = options[0] || {};
  const label = String(optionUnique.label || "").trim();
  const aCallback = typeof optionUnique.callback === "function";

  return libelleBoutonEstOk(label) && !aCallback;
}

function ouvrirPanneauUIModalInterne(message, options = [], configuration = {}) {
  fermerToastUI();

  const panneau = getElement("panneau-ui");
  const messageDiv = getElement("panneau-ui-message");
  const boutonsDiv = getElement("panneau-ui-boutons");

  if (!panneau || !messageDiv || !boutonsDiv) {
    console.error("Panneau UI introuvable");
    return;
  }

  if (configuration?.conserverZoom !== true) {
    fermerZoomTemporaire();
  }
  jeu.ui.panneauUIOuvert = true;
  definirBlocageHoverCartes(true);

  messageDiv.textContent = message;
  boutonsDiv.innerHTML = "";

  options.forEach(option => {
    const bouton = document.createElement("button");
    bouton.textContent = libelleBoutonAvecRaccourciEntree(option.label);

    bouton.onclick = () => {
      fermerPanneauUI({ afficherSuivant: false });

      try {
        if (option.callback) {
          option.callback();
        }
      } finally {
        ouvrirProchainPanneauUIEnFile();
      }
    };

    boutonsDiv.appendChild(bouton);
  });

  panneau.classList.remove("panneau-ui-cache");
  panneau.classList.add("panneau-ui-ouvert");
}

function ouvrirProchainPanneauUIEnFile() {
  if (jeu?.ui?.panneauUIOuvert) {
    return;
  }

  if (filePanneauUIModales.length === 0) {
    return;
  }

  const prochaineModale = filePanneauUIModales.shift();
  ouvrirPanneauUIModalInterne(
    prochaineModale.message,
    prochaineModale.options,
    prochaineModale.configuration
  );
}

  function ouvrirPanneauUI(message, options = [], configuration = {}) {
  if (configuration?.mode === "banniereSysteme") {
    afficherBanniereSystemeUI(message, configuration?.banniere);
    return;
  }

  if (popupPeutDevenirToast(options, configuration)) {
    afficherToastUI(message, configuration?.toast);
    return;
  }

  filePanneauUIModales.push({
    message,
    options: Array.isArray(options) ? options : [],
    configuration: configuration || {}
  });

  ouvrirProchainPanneauUIEnFile();
}

function fermerPanneauUI(configuration = {}) {
  const panneau = getElement("panneau-ui");
  const afficherSuivant = configuration?.afficherSuivant !== false;

  if (!panneau) {
    return;
  }

  panneau.classList.remove("panneau-ui-ouvert");
  panneau.classList.add("panneau-ui-cache");

  jeu.ui.panneauUIOuvert = false;
  definirBlocageHoverCartes(false);
  fermerZoomTemporaire();

  if (configuration?.viderFile === true) {
    filePanneauUIModales.length = 0;
  }

  if (afficherSuivant) {
    ouvrirProchainPanneauUIEnFile();
  }
}

function afficherTableauJoueur() {
  const zone = getElement("contenu-tableau-joueur");
  

  if (!zone) {
    return;
  }

  zone.innerHTML = "";

  for (let i = 0; i < UI.TAILLE_TABLEAU_JOUEUR; i += 1) {
    const caseTableau = document.createElement("div");
    caseTableau.className = "case-tableau-joueur";

    const carte = jeu.joueurZones.tableauJoueur[i];

    if (carte) {
      initialiserEtatCarte(carte);

      const carteDiv = document.createElement("div");
      carteDiv.className = "carte";
      carteDiv.dataset.indexTableau = String(i);
      carteDiv.innerHTML = creerCarteHTML(carte);

      const afficherPulseEpuiser = !jeu.ui.solsticeActif;

      if (
        afficherPulseEpuiser &&
        cartePossedeEffetEpuiser(carte) &&
        carte.epuisee !== true
      ) {
        carteDiv.classList.add("carte-tableau-epuiser");

        if (carteEpuiserEstActivableMaintenant(carte)) {
          carteDiv.classList.add("carte-tableau-epuiser-disponible");
        }
      }

      if (carte.epuisee) {
        carteDiv.classList.add("carte-epuisee");
        carteDiv.style.opacity = "0.7";
      }

      if (jeu.ui.selectionRedressementActive) {
  if (carteEstEligiblePourRedressement(carte)) {
    carteDiv.classList.add("carte-selection-active");
  } else {
    carteDiv.classList.add("carte-selection-desactivee");
  }
}

      if (carteEstSelectionnable(carte, "tableau")) {
        carteDiv.classList.add("carte-selectionnable");
      } else if (jeu.ui.selectionCarteActive && jeu.ui.selectionCarteSource === "tableau") {
        carteDiv.classList.add("carte-non-selectionnable-pendant-choix");
      }

      if (cartePeutEtreCliqueePourSolstice(carte)) {
        carteDiv.classList.add("carte-solstice-disponible");
      }

      if (
        jeu.ui.solsticeActif &&
        carteAPossiblementUnSolstice(carte) &&
        !cartePeutEtreCliqueePourSolstice(carte)
      ) {
        carteDiv.classList.add("carte-non-selectionnable-pendant-choix");
      }

      let timerClicSimple = null;

      carteDiv.addEventListener("click", event => {
  event.preventDefault();
  event.stopPropagation();

  debugLog("TABLEAU CLICK |", carte.nom, {
  selectionRedressementActive: jeu.ui.selectionRedressementActive,
  eligibleRedressement: carteEstEligiblePourRedressement(carte)
});

  if (jeu.ui.selectionRedressementActive) {
    if (carteEstEligiblePourRedressement(carte)) {
      const callback = jeu.ui.callbackSelectionRedressement;
      if (callback) {
        callback(carte);
      }
    }
    return;
  }

  if (carteEstSelectionnable(carte, "tableau")) {
    void choisirCarteViaSelection(carte, "tableau");
    return;
  }

  if (cartePeutEtreCliqueePourSolstice(carte)) {
    void resoudreSolsticeCarte(carte);
    return;
  }

  clearTimeout(timerClicSimple);

  timerClicSimple = setTimeout(() => {
    ouvrirZoomVerrouillePourCarte(carte);
    timerClicSimple = null;
  }, 220);
});

     carteDiv.addEventListener("dblclick", event => {
  event.preventDefault();
  event.stopPropagation();

  if (jeu.ui.selectionRedressementActive) {
    return;
  }

  clearTimeout(timerClicSimple);
  timerClicSimple = null;

  if (jeu.ui.solsticeActif) {
    return;
  }

  if (jeu.manche.phase !== PHASES.TOUR) {
    return;
  }

  if (cartePeutEtreEpuisee(carte)) {
    void epuiserCarte(carte);
  }
});

      caseTableau.appendChild(carteDiv);
    }

    zone.appendChild(caseTableau);
  }
}



/* =========================================================
   35) AFFICHAGE JOUEUR / SLOTS
   ========================================================= */

function afficherSlotStatut() {
  const zone = getElement("slot-statut");

  if (!zone) {
    return;
  }

  if (!jeu.joueurZones.carteStatutVisible) {
    zone.innerHTML = "";
    return;
  }

  zone.innerHTML = creerCarteStatutHTML(jeu.joueurZones.carteStatutVisible);
}

function afficherSlotEtoile() {
  const zone = getElement("slot-etoile");

  if (!zone) {
    return;
  }

  const pile = jeu.joueurZones.pileEtoileJoueur;

  if (!pile || pile.length === 0) {
    zone.innerHTML = "";
    return;
  }

  const carteDessus = pile[pile.length - 1];

  zone.innerHTML = `
    <div class="carte">
      ${creerCarteHTML(carteDessus)}
      ${affichageJetonEpuisementPile(jeu.joueurZones.pileEtoileEpuisee)}
    </div>
  `;
}

function afficherSlotPleine() {
  const zone = getElement("slot-pleine");

  if (!zone) {
    return;
  }

  if (!jeu.joueurZones.cartePleineVisible) {
    zone.innerHTML = "";
    return;
  }

  zone.innerHTML = `
    <div class="carte">
      ${creerCarteHTML(jeu.joueurZones.cartePleineVisible)}
      ${affichageJetonEpuisementPile(jeu.joueurZones.pileRafraichissementNationEpuisee)}
    </div>
  `;
}

function afficherSlotCroissant() {
  const zone = getElement("slot-croissant");

  if (!zone) {
    return;
  }

  const pile = jeu.joueurZones.pileCroissantJoueur;

  if (!pile || pile.length === 0) {
    zone.innerHTML = "";
    return;
  }

  zone.innerHTML = `
    <div class="pile-horizontale-cachee">
      <div class="dos-carte-horizontale"></div>
      <div class="compteur-pile-joueur">${pile.length}</div>
      ${affichageJetonEpuisementPile(jeu.joueurZones.pileRafraichissementNationEpuisee)}
    </div>
  `;
}

function afficherSlotPuissance() {
  const zone = getElement("slot-puissance");

  if (!zone) {
    return;
  }

  const carte = jeu.joueurZones.cartePuissanceVisible;

  if (!carte) {
    zone.innerHTML = `<div class="emplacement-puissance-vide">Puissance</div>`;
    return;
  }

  const aEffetEpuiser =
    Array.isArray(carte.epuiserCode) && carte.epuiserCode.length > 0;
  const afficherBoutonEpuiserPuissance =
    aEffetEpuiser && carte.nom !== "Carthaginois";

  zone.innerHTML = `
    <div class="slot-puissance-wrapper">
      <div class="carte carte-slot-puissance-cliquable">
        ${creerCarteHTML(carte)}
      </div>
      ${
        afficherBoutonEpuiserPuissance
          ? `<button class="bouton-epuiser-puissance" type="button">Épuiser</button>`
          : ""
      }
    </div>
  `;

  const cartePuissance = zone.querySelector(".carte-slot-puissance-cliquable");
  const boutonEpuiser = zone.querySelector(".bouton-epuiser-puissance");

  if (!cartePuissance) {
    return;
  }

  if (boutonEpuiser) {
    const conditionVictoire = cartePuissance.querySelector(".condition-victoire");
    if (conditionVictoire) {
      conditionVictoire.classList.add("condition-victoire-avec-bouton-epuiser");
      conditionVictoire.prepend(boutonEpuiser);
    }
  }

  if (carte.epuisee) {
    cartePuissance.classList.add("carte-epuisee");
    cartePuissance.style.opacity = "0.7";
  }

  if (jeu.ui.selectionRedressementActive) {
    if (carteEstEligiblePourRedressement(carte)) {
      cartePuissance.classList.add("carte-selection-active");
    } else {
      cartePuissance.classList.add("carte-selection-desactivee");
    }
  }

  cartePuissance.addEventListener("click", event => {
    event.preventDefault();
    event.stopPropagation();

    if (jeu.ui.selectionRedressementActive) {
      if (carteEstEligiblePourRedressement(carte)) {
        const callback = jeu.ui.callbackSelectionRedressement;
        if (callback) {
          callback(carte);
        }
      }
      return;
    }

    ouvrirVueHistoire();
  });

  if (boutonEpuiser) {
    boutonEpuiser.disabled = !!carte.epuisee;

    boutonEpuiser.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();

      if (jeu.ui.selectionRedressementActive) {
        return;
      }

      if (jeu.manche.phase !== PHASES.TOUR) {
        return;
      }

      if (cartePeutEtreEpuisee(carte)) {
        void epuiserCarte(carte);
      }
    });
  }
}

function afficherSlotMain() {
  const zone = getElement("slot-main");

  if (!zone) {
    return;
  }

  const main = jeu.joueurZones.mainJoueur;

  if (!main || main.length === 0) {
    zone.innerHTML = "";
    return;
  }

  zone.innerHTML = "";

  const nombreCartes = main.length;
  const espacement = Math.min(
    170,
    Math.max(90, (UI.LARGEUR_ZONE_MAIN - UI.LARGEUR_CARTE_MAIN) / Math.max(nombreCartes - 1, 1))
  );

  const largeurTotale = UI.LARGEUR_CARTE_MAIN + espacement * (nombreCartes - 1);
  const departX = (UI.LARGEUR_ZONE_MAIN - largeurTotale) / 2;

  main.forEach((carte, index) => {
    const div = document.createElement("div");
    div.className = "carte carte-main-joueur";

    const selectionnable = carteEstSelectionnable(carte, "main");

    if (jeu.ui.selectionCarteActive && jeu.ui.selectionCarteSource === "main") {
      if (selectionnable) {
        div.classList.add("carte-selectionnable");
      } else {
        div.classList.add("carte-non-selectionnable-pendant-choix");
      }
    }

    const offsetCentre = index - (nombreCartes - 1) / 2;
    const rotationBase = offsetCentre * 4;
    const topBase = Math.abs(offsetCentre) * 8;
    const leftBase = departX + index * espacement;

    div.style.left = `${leftBase}px`;
    div.style.top = `${topBase}px`;
    div.style.zIndex = `${index + 1}`;
    div.style.transform = `scale(${UI.SCALE_MAIN}) rotate(${rotationBase}deg)`;
    div.style.transformOrigin = "top left";

    div.innerHTML = creerCarteHTML(carte);

    div.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();

      if (carteEstSelectionnable(carte, "main")) {
        void choisirCarteViaSelection(carte, "main");
        return;
      }

      if (jeu.manche.phase === PHASES.TOUR) {
        void jouerCarteDepuisMain(index);
      } else if (jeu.manche.phase === PHASES.NETTOYAGE_DEFAUSSE) {
        defausserCarteDepuisMain(index);
      }
    });

    div.addEventListener("mouseenter", () => {
      const selectionMainActive =
        jeu.ui.selectionCarteActive &&
        jeu.ui.selectionCarteSource === "main";

      if (selectionMainActive) {
        jeu.ui.blocageZoomJusquaMouseleave = true;
      } else {
        jeu.ui.blocageZoomJusquaMouseleave = false;
      }

      div.style.top = `${topBase - 28}px`;
      div.style.zIndex = "100";
      div.style.transform = `scale(${UI.SCALE_MAIN * 1.05}) rotate(${rotationBase * 0.35}deg)`;
      div.style.boxShadow = "0 10px 24px rgba(0,0,0,0.28)";
    });

    div.addEventListener("mouseleave", () => {
      jeu.ui.blocageZoomJusquaMouseleave = false;
      div.style.top = `${topBase}px`;
      div.style.zIndex = `${index + 1}`;
      div.style.transform = `scale(${UI.SCALE_MAIN}) rotate(${rotationBase}deg)`;
      div.style.boxShadow = "";
    });

    zone.appendChild(div);
  });
}

function afficherSlotBase() {
  const zone = getElement("slot-base");

  if (!zone) {
    return;
  }

  const deck = jeu.joueurZones.deckJoueur;

  if (!deck || deck.length === 0) {
    zone.innerHTML = "";
    return;
  }

  zone.innerHTML = `
    <div class="pile-verticale-cachee">
      <div class="dos-carte-verticale"></div>
      <div class="compteur-pile-joueur">${deck.length}</div>
    </div>
  `;
}

function afficherSlotDefausse() {
  const zone = getElement("slot-defausse");

  if (!zone) {
    return;
  }

  const defausse = jeu.joueurZones.defausseJoueur;

  if (!defausse || defausse.length === 0) {
    zone.innerHTML = `
      <div class="pile-verticale-cachee">
        <div class="contour-defausse-vide"></div>
      </div>
    `;
    return;
  }

  const carteDessus = defausse[defausse.length - 1];

  zone.innerHTML = `
    <div class="carte carte-slot-defausse-cliquable">
      ${creerCarteHTML(carteDessus)}
    </div>
  `;

  const carteDefausse = zone.querySelector(".carte-slot-defausse-cliquable");

  if (carteDefausse) {
    carteDefausse.addEventListener("click", () => {
      ouvrirVueDefausse();
    });
  }
}

/* =========================================================
   SÉLECTION VISUELLE DE CARTES
   ========================================================= */

   function appliquerEtatSelectionMarcheHaut() {
  const pioches = document.querySelectorAll("[data-pioche-marche]");

  pioches.forEach(element => {
    const typePioche = element.dataset.piocheMarche;

    const selectionnable = marcheEstSelectionnable(typePioche);

    element.classList.toggle("selectionnable", selectionnable);
    element.classList.toggle("non-selectionnable", !selectionnable);

    element.onclick = async () => {
      if (!selectionnable) return;

      await choisirZoneViaSelectionMarche(typePioche);
    };
  });
}

   

   function marcheEstSelectionnable(cleZone) {
  if (!jeu.ui.selectionMarcheActive) {
    return false;
  }

  if (typeof jeu.ui.selectionMarchePredicate !== "function") {
    return false;
  }

  return !!jeu.ui.selectionMarchePredicate(cleZone);
}

async function choisirZoneViaSelectionMarche(cle) {
  const callback = jeu.ui.selectionMarcheOnChoose;
  terminerSelectionMarche();

  if (typeof callback === "function") {
    return await callback(cle);
  }

  return false;
}

function demarrerSelectionMarche({
  message,
  predicate,
  onChoose,
  onCancel = null,
  obligatoire = false,
  autoriserExil = false,
  onChooseExil = null
}) {
  jeu.ui.selectionMarcheActive = true;
  jeu.ui.selectionMarcheMessage = message || "";
  jeu.ui.selectionMarchePredicate = typeof predicate === "function" ? predicate : null;
  jeu.ui.selectionMarcheOnChoose = onChoose || null;
  jeu.ui.selectionMarcheOnCancel = onCancel || null;
  jeu.ui.selectionMarcheObligatoire = !!obligatoire;

  jeu.ui.selectionMarcheAutoriserExil = !!autoriserExil;
  jeu.ui.selectionMarcheOnChooseExil = onChooseExil || null;

  ouvrirPanneauChoixMarcheSelection(message, obligatoire);
  afficherBasMarche();
  afficherHautMarche();
  afficherPileExil();
}

function terminerSelectionMarche() {
  jeu.ui.selectionMarcheActive = false;
  jeu.ui.selectionMarcheMessage = "";
  jeu.ui.selectionMarchePredicate = null;
  jeu.ui.selectionMarcheOnChoose = null;
  jeu.ui.selectionMarcheOnCancel = null;
  jeu.ui.selectionMarcheObligatoire = false;

  jeu.ui.selectionMarcheAutoriserExil = false;
  jeu.ui.selectionMarcheOnChooseExil = null;

  fermerPanneauChoixMarcheSelection();

  afficherBasMarche();
  afficherHautMarche();
  afficherPileExil();
}

   async function tenterTerminerSolstice() {
  if (!jeu.ui.solsticeActif) {
    return false;
  }

  if (resteDesSolsticesObligatoires()) {
    ouvrirPanneauUI("Il reste encore des Solstices obligatoires à résoudre.", [
      { label: "OK" }
    ]);
    return false;
  }

  terminerPhaseSolsticeInteractive();
  await finaliserFinDeMancheApresSolstice();
  return true;
}

   async function resoudreSolsticeCarte(carte) {
  if (!cartePeutEtreCliqueePourSolstice(carte)) {
    return false;
  }

  const succes = await executerListeEffets(
    carte.solsticeCode || [],
    { carteSource: carte }
  );

  if (succes === false) {
    return false;
  }

  marquerSolsticeCarteTraitee(carte);
  afficherZoneJoueur();
  return true;
}

   function carteAPossiblementUnSolstice(carte) {
  return Array.isArray(carte?.solsticeCode) && carte.solsticeCode.length > 0;
}

function solsticeCarteDejaTraitee(carte) {
  return jeu.ui.solsticeCartesTraitees.includes(carte);
}

function marquerSolsticeCarteTraitee(carte) {
  if (!solsticeCarteDejaTraitee(carte)) {
    jeu.ui.solsticeCartesTraitees.push(carte);
  }
}

function solsticeCarteEstObligatoire(carte) {
  if (!Array.isArray(carte?.solsticeCode) || carte.solsticeCode.length === 0) {
    return false;
  }

  return carte.solsticeCode.some(effet => effet.type !== "optionnel");
}

function cartePeutEtreCliqueePourSolstice(carte) {
  if (!jeu.ui.solsticeActif) {
    return false;
  }

  if (!carteAPossiblementUnSolstice(carte)) {
    return false;
  }

  if (solsticeCarteDejaTraitee(carte)) {
    return false;
  }

  return true;
}

function resteDesSolsticesObligatoires() {
  return jeu.joueurZones.tableauJoueur.some(carte =>
    carteAPossiblementUnSolstice(carte) &&
    solsticeCarteEstObligatoire(carte) &&
    !solsticeCarteDejaTraitee(carte)
  );
}

function commencerPhaseSolsticeInteractive() {
  jeu.ui.solsticeActif = true;
  jeu.ui.solsticeCartesTraitees = [];
  afficherZoneJoueur();
}

function terminerPhaseSolsticeInteractive() {
  jeu.ui.solsticeActif = false;
  jeu.ui.solsticeCartesTraitees = [];
  afficherZoneJoueur();
}

function carteEstSelectionnable(carte, source) {
  if (!jeu.ui.selectionCarteActive) {
    return false;
  }

  if (jeu.ui.selectionCarteSource !== source) {
    return false;
  }

  if (typeof jeu.ui.selectionCartePredicate !== "function") {
    return false;
  }

  return !!jeu.ui.selectionCartePredicate(carte);
}

async function choisirCarteViaSelection(carte, source) {
  if (!carteEstSelectionnable(carte, source)) {
    return false;
  }

  const callback = jeu.ui.selectionCarteOnChoose;

  terminerSelectionCarte();

  if (typeof callback === "function") {
    return await callback(carte);
  }

  return false;
}

function demarrerSelectionCarte({
  source,
  message,
  predicate,
  onChoose,
  onCancel = null,
  obligatoire = false,
  afficherPanneau = true
}) {
  jeu.ui.selectionCarteActive = true;
  jeu.ui.selectionCarteSource = source || null;
  jeu.ui.selectionCarteMessage = message || "";
  jeu.ui.selectionCartePredicate = typeof predicate === "function" ? predicate : null;
  jeu.ui.selectionCarteOnChoose = onChoose || null;
  jeu.ui.selectionCarteOnCancel = onCancel || null;
  jeu.ui.selectionCarteObligatoire = !!obligatoire;

  if (afficherPanneau) {
    ouvrirPanneauChoixCarte(message, obligatoire);
  } else {
    fermerPanneauChoixCarte();
  }

  rafraichirAffichagesPrincipaux();
}

function terminerSelectionCarte() {
  jeu.ui.selectionCarteActive = false;
  jeu.ui.selectionCarteSource = null;
  jeu.ui.selectionCarteMessage = "";
  jeu.ui.selectionCartePredicate = null;
  jeu.ui.selectionCarteOnChoose = null;
  jeu.ui.selectionCarteOnCancel = null;
  jeu.ui.selectionCarteObligatoire = false;

  fermerPanneauChoixCarte();
  rafraichirAffichagesPrincipaux();
}

function ouvrirPanneauChoixCarte(message, obligatoire = false) {
  const panneau = getElement("panneau-choix-carte");
  const messageDiv = getElement("panneau-choix-carte-message");
  const btnAnnuler = getElement("btn-annuler-choix-carte");

  if (!panneau || !messageDiv || !btnAnnuler) {
    return;
  }

  messageDiv.textContent = message || "Choisissez une carte.";

  btnAnnuler.style.display = obligatoire ? "none" : "inline-block";

  btnAnnuler.onclick = () => {
    const callback = jeu.ui.selectionCarteOnCancel;
    terminerSelectionCarte();

    if (typeof callback === "function") {
      callback();
    }
  };

  panneau.classList.remove("panneau-ui-cache");
  panneau.classList.add("panneau-ui-ouvert");
}

function fermerPanneauChoixCarte() {
  const panneau = getElement("panneau-choix-carte");

  if (!panneau) {
    return;
  }

  panneau.classList.remove("panneau-ui-ouvert");
  panneau.classList.add("panneau-ui-cache");
}

/* =========================================================
   36) PANNEAU DÉFAUSSE / HELPERS UI JOUEUR
   ========================================================= */

   function ouvrirZoomDeckNationAvecChoix(carte, message, onOui, onNon) {
  const zoomCarte = getElement("zoom-carte");

  if (!zoomCarte || !carte) {
    if (typeof onNon === "function") {
      onNon();
    }
    return;
  }

  // 🔴 IMPORTANT : verrouiller le zoom pour empêcher le mouseout global de le fermer
  jeu.ui.zoomVerrouille = true;
  jeu.ui.sourceZoomVerrouille = "deck-nation-choix";
  jeu.ui.timestampOuvertureZoom = Date.now();

  zoomCarte.innerHTML = "";
  zoomCarte.style.display = "block";
  zoomCarte.style.pointerEvents = "auto";
  zoomCarte.style.zIndex = "130000";

  const wrapper = document.createElement("div");
  wrapper.className = "conteneur-choix-deck-nation";

  const titre = document.createElement("div");
  titre.className = "titre-choix-deck-nation";
  titre.textContent = message;
  wrapper.appendChild(titre);

  const carteDiv = document.createElement("div");
  carteDiv.className = "carte carte-deck-nation-centree";
  carteDiv.innerHTML = creerCarteHTML(carte);
  wrapper.appendChild(carteDiv);

  const boutons = document.createElement("div");
  boutons.className = "boutons-choix-deck-nation";

  const boutonOui = document.createElement("button");
  boutonOui.textContent = "Oui";
  boutonOui.onclick = async event => {
    event.preventDefault();
    event.stopPropagation();

    if (typeof onOui === "function") {
      await onOui();
    }
  };

  const boutonNon = document.createElement("button");
  boutonNon.textContent = "Non";
  boutonNon.onclick = async event => {
    event.preventDefault();
    event.stopPropagation();

    if (typeof onNon === "function") {
      await onNon();
    }
  };

  boutons.appendChild(boutonOui);
  boutons.appendChild(boutonNon);
  wrapper.appendChild(boutons);

  wrapper.addEventListener("click", event => {
    event.stopPropagation();
  });

  zoomCarte.appendChild(wrapper);
}

function fermerZoomDeckNationAvecChoix() {
  const zoomCarte = getElement("zoom-carte");

  if (!zoomCarte) {
    return;
  }

  zoomCarte.innerHTML = "";
  zoomCarte.style.display = "none";
  zoomCarte.style.pointerEvents = "";

  // 🔴 IMPORTANT : déverrouiller à la fermeture
  jeu.ui.zoomVerrouille = false;
  jeu.ui.sourceZoomVerrouille = null;
}

   function carteEstEligiblePourRedressement(carte) {
  const cartesEligibles = jeu.ui.cartesEligiblesRedressement || [];
  return cartesEligibles.includes(carte);
}

function demanderCarteAEpuisementUtilise(cartesEligibles) {
  return new Promise(resolve => {
    debugLog(
      "OUXIENS | demanderCarteAEpuisementUtilise",
      (cartesEligibles || []).map(c => c.nom)
    );

    jeu.ui.selectionRedressementActive = true;
    jeu.ui.cartesEligiblesRedressement = cartesEligibles || [];
    jeu.ui.callbackSelectionRedressement = carte => {
      debugLog("OUXIENS | callbackSelectionRedressement appelée avec", carte?.nom || null);

      jeu.ui.selectionRedressementActive = false;
      jeu.ui.cartesEligiblesRedressement = [];
      jeu.ui.callbackSelectionRedressement = null;

      afficherZoneJoueur();
      resolve(carte || null);
    };

    afficherZoneJoueur();
  });
}

  function demanderChoixParmiCartesEnZoom(cartes, message) {
  return new Promise(resolve => {
    if (!Array.isArray(cartes) || cartes.length === 0) {
      resolve(null);
      return;
    }

    const overlay = document.createElement("div");
    overlay.className = "overlay-choix-oracle";

    const boite = document.createElement("div");
    boite.className = "boite-choix-oracle";

    const messageDiv = document.createElement("div");
    messageDiv.className = "message-choix-oracle";
    messageDiv.textContent = message || "";

    const cartesDiv = document.createElement("div");
    cartesDiv.className = "liste-choix-oracle";

    function nettoyerEtResoudre(valeur) {
      overlay.remove();
      resolve(valeur);
    }

    cartes.forEach((carte, index) => {
      const divCarte = document.createElement("div");
      divCarte.className = "carte zoom-choix-carte-option";
      divCarte.innerHTML = creerCarteHTML(carte);

      divCarte.addEventListener("click", event => {
        event.preventDefault();
        event.stopPropagation();
        nettoyerEtResoudre(index);
      });

      cartesDiv.appendChild(divCarte);
    });

    boite.appendChild(messageDiv);
    boite.appendChild(cartesDiv);
    overlay.appendChild(boite);

    overlay.addEventListener("click", event => {
      if (event.target === overlay) {
        event.preventDefault();
        event.stopPropagation();
      }
    });

    document.body.appendChild(overlay);
  });
}
   function demanderChoixSurCarteEnZoom(carte, message, options) {
  return new Promise(resolve => {
    const zoomCarte = getElement("zoom-carte");

    if (!zoomCarte || !carte || !Array.isArray(options) || options.length === 0) {
      resolve(null);
      return;
    }

    requestAnimationFrame(() => {
      jeu.ui.zoomVerrouille = true;
      jeu.ui.sourceZoomVerrouille = carte;
      jeu.ui.timestampOuvertureZoom = Date.now();

      zoomCarte.innerHTML = "";
      zoomCarte.style.zIndex = "130000";
      zoomCarte.style.pointerEvents = "auto";

      const wrapper = document.createElement("div");
      wrapper.className = "zoom-choix-carte";

      const divCarte = document.createElement("div");
      divCarte.className = "carte";
      divCarte.innerHTML = creerCarteHTML(carte);

      const messageDiv = document.createElement("div");
      messageDiv.className = "zoom-choix-carte-message";
      messageDiv.textContent = message || "";

      const actionsDiv = document.createElement("div");
      actionsDiv.className = "zoom-choix-carte-actions";

      options.forEach((option, index) => {
        const bouton = document.createElement("button");
        bouton.textContent = option.label;

        bouton.onclick = event => {
          event.preventDefault();
          event.stopPropagation();

          zoomCarte.style.display = "none";
          zoomCarte.innerHTML = "";
          zoomCarte.style.zIndex = "13000";
          zoomCarte.style.pointerEvents = "none";

          jeu.ui.zoomVerrouille = false;
          jeu.ui.sourceZoomVerrouille = null;
          jeu.ui.timestampOuvertureZoom = 0;

          resolve(index);
        };

        actionsDiv.appendChild(bouton);
      });

      wrapper.appendChild(divCarte);
      wrapper.appendChild(messageDiv);
      wrapper.appendChild(actionsDiv);

      zoomCarte.appendChild(wrapper);
      zoomCarte.style.display = "block";
    });
  });
}

   function definirBlocageHoverCartes(actif) {
  document.body.classList.toggle("ui-bloque-hover-cartes", !!actif);
}

   function interfaceBloqueZoomCarte() {
  return !!(
    jeu.ui?.panneauUIOuvert ||
    jeu.ui?.menuEchapOuvert ||
    jeu.ui?.regardRenommeeActif ||
    jeu.ui?.defausseOuverte
  );
}

   function obtenirRegionsTableauAvecTag(tagRecherche) {
  return jeu.joueurZones.tableauJoueur.filter(carte =>
    inclutCategorie(carte, CATEGORIES.REGION) &&
    Array.isArray(carte.typeRegion) &&
    carte.typeRegion.includes(tagRecherche)
  );
}

async function rappelerRegionChoisieAvecTag(tag) {
  const cartesEligibles = jeu.joueurZones.tableauJoueur.filter(carte =>
    carte &&
    inclutCategorie(carte, "Région") &&
    Array.isArray(carte.typeRegion) &&
    carte.typeRegion.includes(tag)
  );

  if (cartesEligibles.length === 0) {
    ouvrirPanneauUI("Aucune carte valide à récupérer.", [
      { label: "OK" }
    ]);
    return false;
  }

  const carteChoisie = await new Promise(resolve => {
    demarrerSelectionCarte({
      source: "tableau",
      message: `Choisissez une carte ${tag} à récupérer.`,
      obligatoire: true,
      predicate: carte =>
        carte &&
        inclutCategorie(carte, "Région") &&
        Array.isArray(carte.typeRegion) &&
        carte.typeRegion.includes(tag),

      onChoose: async carte => {
        resolve(carte);
      },

      onCancel: () => {
        resolve(null);
      }
    });
  });

  if (!carteChoisie) {
    return false;
  }

  return rappelerCarteObjetDepuisTableau(carteChoisie);
}
function initialiserPanneauDefausse() {
  const btnFermer = getElement("btn-fermer-defausse");
  const panneau = getElement("panneau-defausse");

  if (btnFermer) {
    btnFermer.addEventListener("click", () => {
      fermerVueDefausse();
    });
  }

  if (panneau) {
    panneau.addEventListener("click", event => {
      if (event.target === panneau) {
        fermerVueDefausse();
      }
    });
  }

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && jeu.ui.defausseOuverte) {
      fermerVueDefausse();
    }
  });
}

function fermerZoomTemporaire() {
  if (jeu.ui.modeInteraction) {
    return;
  }

  const zoomCarte = getElement("zoom-carte");

  if (!zoomCarte) {
    return;
  }

  zoomCarte.innerHTML = "";
  zoomCarte.style.display = "none";
  zoomCarte.classList.remove("zoom-force-visible");
}

function fermerInterfacesAvantChoixMarche() {
  if (jeu.ui.regardRenommeeActif) {
    return;
  }

  fermerZoomTemporaire();
  fermerZoomVerrouille();

  if (!jeu.ui.regardRenommeeActif) {
    fermerChoixRegardRenommee();
  }
}

/* =========================================================
   37) RAFRAÎCHISSEMENT GLOBAL DE LA ZONE JOUEUR
   ========================================================= */

const NATIONS_THEME_FOND_JOUEUR = [
  "carthaginois",
  "celtes",
  "grecs",
  "macedoniens",
  "perses",
  "romains",
  "scythes",
  "vikings"
];

const CLASSES_THEME_FOND_JOUEUR = NATIONS_THEME_FOND_JOUEUR.map(
  nationSlug => `theme-zone-joueur-${nationSlug}`
);

function appliquerThemeFondJoueur() {
  const zoneJoueur = getElement("zone-joueur");

  if (!zoneJoueur) {
    return;
  }

  zoneJoueur.classList.remove(...CLASSES_THEME_FOND_JOUEUR);

  const nationSlug = slugNationPourFond(configurationPartie?.nationJoueur);

  if (NATIONS_THEME_FOND_JOUEUR.includes(nationSlug)) {
    zoneJoueur.classList.add(`theme-zone-joueur-${nationSlug}`);
  }
}

function afficherZoneJoueur() {
  appliquerThemeFondJoueur();
  afficherSlotStatut();
  afficherSlotEtoile();
  afficherSlotPleine();
  afficherSlotCroissant();
  afficherSlotPuissance();
  afficherSlotBase();
  afficherSlotDefausse();
  afficherSlotMain();
  afficherTableauJoueur();
  afficherCompteursJoueur();
}

/* =========================================================
   38) AFFICHAGE EXIL
   ========================================================= */

function afficherPileExil() {
  const zone = getElement("pile-exil");
  if (!zone) return;

  const pile = jeu.piles.exil || [];
  const exilContientRegion = (pile || []).some(carte =>
    carte && inclutCategorie(carte, "Région")
  );

  if (!pile || pile.length === 0) {
    zone.innerHTML = `
      <div class="pile-visible pile-exil-vide">
        <div class="dos-carte-verticale"></div>
      </div>
    `;
  } else {
    zone.innerHTML = `
      <div class="pile-visible">
        <div class="carte">
          ${creerCarteHTML(pile[pile.length - 1])}
        </div>
        <div class="compteur-pile-mini">${pile.length}</div>
      </div>
    `;
  }

  const pileDiv = zone.querySelector(".pile-visible");

  if (!pileDiv) {
    return;
  }

  pileDiv.style.cursor = "pointer";
  pileDiv.classList.remove("carte-selectionnable", "marche-selectionnable", "marche-non-selectionnable");

  pileDiv.onclick = null;

  if (
    jeu.ui.selectionMarcheActive &&
    jeu.ui.selectionMarcheAutoriserExil &&
    exilContientRegion
  ) {
    pileDiv.classList.add("carte-selectionnable");

    pileDiv.onclick = async event => {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      const callback = jeu.ui.selectionMarcheOnChooseExil;

      if (typeof callback === "function") {
        await callback();
      }
    };

    return;
  }

  pileDiv.onclick = event => {
    event.preventDefault();
    event.stopPropagation();
    ouvrirVueExil();
  };
} 
/* =========================================================
   39) AFFICHAGE MARCHÉ / BLOCS HTML
   ========================================================= */

function creerBlocPiocheHTML(nom, quantite, classeSupplementaire = "") {
  return `
    <div class="bloc-pioche ${classeSupplementaire}">
      <div class="dos-pioche">
        <div class="compteur-pioche">${quantite}</div>
      </div>
    </div>
  `;
}

function creerCasesIndicateur(types) {
  return `
    <div class="indicateur-groupe">
      ${types.map(type => `
        <div class="indicateur-case">${iconeIndicateur(type)}</div>
      `).join("")}
    </div>
  `;
}

/* =========================================================
   40) AFFICHAGE MARCHÉ / ZONES PRINCIPALES
   ========================================================= */

function afficherHautMarche() {
  const zone = getElement("haut-marche");

  if (!zone) {
    if (jeu?.finPartie?.terminee) {
      return;
    }
    console.error('Élément "haut-marche" introuvable dans le HTML.');
    return;
  }

  zone.innerHTML = `
    <div class="colonne-marche" data-pioche-marche="Vassal">
    ${creerBlocPiocheHTML("Pioche Principale", jeu.piles.piochePrincipale.length, "principale")}
    </div>

    <div class="colonne-marche" data-pioche-marche="Civilisé">
      ${creerBlocPiocheHTML("Civilisé", jeu.piles.piocheSecondaireCivilise.length)}
    </div>

    <div class="colonne-marche" data-pioche-marche="Tradition">
      ${creerBlocPiocheHTML("Tradition", jeu.piles.piocheSecondaireTradition.length)}
    </div>

    <div class="colonne-marche" data-pioche-marche="Région">
      ${creerBlocPiocheHTML("Région", jeu.piles.piocheSecondaireRegion.length)}
    </div>

    <div class="colonne-marche">
      <div class="pile-renommee-roi">
        ${
          jeu.zonesMarche.roiDesRois
            ? `
              <div class="carte-roi-des-rois-dessous">
                <div class="carte">
                  ${creerCarteHTML(jeu.zonesMarche.roiDesRois)}
                </div>
              </div>
            `
            : ""
        }

        <div class="bloc-renommee-dessus" data-pioche-marche="Renommée">
          ${creerBlocPiocheHTML("Renommée", jeu.piles.piocheSecondaireRenommee.length)}
        </div>
      </div>
    </div>
  `;

  appliquerEtatSelectionMarche();
}

function afficherBarreIndicateurs() {
  const zone = getElement("barre-indicateurs");

  if (!zone) {
    if (jeu?.finPartie?.terminee) {
      return;
    }
    console.error('Élément "barre-indicateurs" introuvable dans le HTML.');
    return;
  }

  zone.innerHTML = `
    <div class="colonne-indicateur">
      ${creerCasesIndicateur(["T", "V", "R", "C"])}
    </div>

    <div class="colonne-indicateur">
      ${creerCasesIndicateur(["C"])}
    </div>

    <div class="colonne-indicateur">
      ${creerCasesIndicateur(["T"])}
    </div>

    <div class="colonne-indicateur">
      ${creerCasesIndicateur(["R"])}
    </div>

    <div class="colonne-indicateur">
      ${creerCasesIndicateur(["Rn", "I"])}
    </div>
  `;
}

function afficherBasMarche() {
  const zone = getElement("bas-marche");

  if (!zone) {
    // L'écran de fin remplace #app et retire le marché du DOM.
    if (jeu?.finPartie?.terminee) {
      return;
    }
    console.error('Élément "bas-marche" introuvable dans le HTML.');
    return;
  }

  zone.innerHTML = `
    <div class="colonne-bas-marche colonne-bas-double">
      <div class="slot-zone" data-zone-marche="zone1">${creerZoneMarcheHTML(jeu.zonesMarche.zone1)}</div>
      <div class="slot-zone" data-zone-marche="zone2">${creerZoneMarcheHTML(jeu.zonesMarche.zone2)}</div>
    </div>

    <div class="colonne-bas-marche">
      <div class="slot-zone" data-zone-marche="zone3">
        ${creerZoneMarcheHTML(jeu.zonesMarche.zone3)}
      </div>
    </div>

    <div class="colonne-bas-marche">
      <div class="slot-zone" data-zone-marche="zone4">
        ${creerZoneMarcheHTML(jeu.zonesMarche.zone4)}
      </div>
    </div>

    <div class="colonne-bas-marche">
      <div class="slot-zone" data-zone-marche="zone5">
        ${creerZoneMarcheHTML(jeu.zonesMarche.zone5)}
      </div>
    </div>

    <div class="colonne-bas-marche">
      ${creerPileVisibleHTML(jeu.piles.piocheMarcheInstabilite)}
    </div>
  `;

  appliquerEtatSelectionMarche();
}

/* =========================================================
   41) HELPERS D’AFFICHAGE GÉNÉRIQUES
   ========================================================= */

function afficherCartes(cartes, idZone) {
  const zone = getElement(idZone);

  if (!zone) {
    console.error(`Élément "${idZone}" introuvable dans le HTML.`);
    return;
  }

  zone.innerHTML = "";

  cartes.forEach(carte => {
    const div = document.createElement("div");
    div.className = "carte";
    div.innerHTML = creerCarteHTML(carte);
    zone.appendChild(div);
  });
}

/* =========================================================
   42) RAFRAÎCHISSEMENT GLOBAL PRINCIPAL
   ========================================================= */

function rafraichirAffichagesPrincipaux() {
  afficherBasMarche();
  afficherHautMarche();
  afficherZoneJoueur();
  afficherPileExil();
}
/* =========================================================
   43) NAVIGATION / ÉCHELLE INTERFACE
   ========================================================= */

   function activerScrollPagesScore() {
  document.body.style.overflowY = "auto";
  document.body.style.overflowX = "hidden";

  const app = document.getElementById("app");
  if (app) {
    app.style.overflowY = "visible";
    app.style.overflowX = "hidden";
    app.style.height = "auto";
    app.style.maxHeight = "none";
  }
}

function desactiverScrollPagesScore() {
  document.body.style.overflow = "hidden";

  const app = document.getElementById("app");
  if (app) {
    app.style.overflow = "hidden";
    app.style.height = "";
    app.style.maxHeight = "";
  }
}

function mettreAJourEtatBoutonsVue(idVueActive) {
  const correspondances = [
    ["btn-vue-marche", "vue-marche"],
    ["btn-vue-joueur", "vue-joueur"],
    ["btn-vue-bot", "vue-bot"]
  ];

  correspondances.forEach(([idBouton, idVue]) => {
    const bouton = document.getElementById(idBouton);
    if (!bouton) {
      return;
    }

    const estActif = idVue === idVueActive;
    bouton.classList.toggle("est-actif-vue", estActif);
    bouton.setAttribute("aria-pressed", estActif ? "true" : "false");
  });
}

function afficherVue(idVueAAfficher) {
  const idsVues = [
    "vue-accueil",
    "vue-marche",
    "vue-joueur",
    "vue-bot"
  ];

  idsVues.forEach(id => {
    const vue = document.getElementById(id);
    if (!vue) return;

    vue.classList.remove("vue-active");
    vue.classList.add("vue-cachee");
  });

  const vueCible = document.getElementById(idVueAAfficher);

  if (!vueCible) {
    console.error("Vue introuvable :", idVueAAfficher);
    return;
  }

  vueCible.classList.remove("vue-cachee");
  vueCible.classList.add("vue-active");
  mettreAJourEtatBoutonsVue(idVueAAfficher);
  planifierAjustementNomsCartes(document);

  const blocMusique = getElement("bloc-musique");
  if (blocMusique) {
    if (idVueAAfficher === "vue-accueil") {
      blocMusique.classList.add("ui-cachee");
      fermerMenuEchap({ silencieux: true });
    } else {
      blocMusique.classList.remove("ui-cachee");
    }
  }

  requestAnimationFrame(() => {
    if (
      (
        idVueAAfficher === "vue-marche" ||
        idVueAAfficher === "vue-joueur" ||
        idVueAAfficher === "vue-bot"
      ) &&
      typeof recalculerEchelleAvecSecurite === "function"
    ) {
      recalculerEchelleAvecSecurite();
    }
  });

  miniTutorielSynchroniser();
}

const ETAT_ECHELLE_INTERFACE = {
  marche: { transform: "", hauteur: -1 },
  joueur: { transform: "", hauteur: -1 },
  bot: { transform: "", hauteur: -1 }
};

let ajustementEchelleRafId = null;
let ajustementEchelleTimeoutId = null;
let ajustementEchelleRelanceDemandee = false;

function normaliserValeurScale(valeur) {
  if (!Number.isFinite(valeur) || valeur <= 0) {
    return 1;
  }

  return Math.round(valeur * 1000) / 1000;
}

function appliquerEchelleSiNecessaire(elementScale, elementWrapper, scale, hauteurContenu, etat) {
  if (!elementScale || !elementWrapper || !etat) {
    return;
  }

  const scaleNormalise = normaliserValeurScale(scale);
  const transformCible = `translateX(-50%) scale(${scaleNormalise})`;
  const hauteurCible = Math.round(hauteurContenu * scaleNormalise);

  if (etat.transform !== transformCible) {
    elementScale.style.transform = transformCible;
    etat.transform = transformCible;
  }

  if (etat.hauteur !== hauteurCible) {
    elementWrapper.style.height = `${hauteurCible}px`;
    etat.hauteur = hauteurCible;
  }
}

function planifierAjustementEchelleInterface({ avecRelance = false } = {}) {
  if (avecRelance) {
    ajustementEchelleRelanceDemandee = true;
  }

  if (ajustementEchelleRafId !== null) {
    return;
  }

  ajustementEchelleRafId = requestAnimationFrame(() => {
    ajustementEchelleRafId = null;
    ajusterEchelleInterface();

    if (!ajustementEchelleRelanceDemandee) {
      return;
    }

    ajustementEchelleRelanceDemandee = false;
    clearTimeout(ajustementEchelleTimeoutId);
    ajustementEchelleTimeoutId = setTimeout(() => {
      ajusterEchelleInterface();
    }, 50);
  });
}

function recalculerEchelleAvecSecurite() {
  planifierAjustementEchelleInterface({ avecRelance: true });
}

function elementEstVisiblePourRaccourciClavier(element) {
  if (!element) {
    return false;
  }

  if (
    element.classList?.contains("ui-cachee") ||
    element.classList?.contains("panneau-ui-cache")
  ) {
    return false;
  }

  const style = window.getComputedStyle(element);
  return style.display !== "none" && style.visibility !== "hidden";
}

function tenterValidationParEntree() {
  const panneauUI = getElement("panneau-ui");
  if (elementEstVisiblePourRaccourciClavier(panneauUI)) {
    const boutons = Array.from(
      panneauUI.querySelectorAll("#panneau-ui-boutons button")
    ).filter(bouton =>
      bouton &&
      !bouton.disabled &&
      elementEstVisiblePourRaccourciClavier(bouton)
    );

    const boutonOk = boutons.find(bouton => libelleBoutonEstOk(bouton.textContent));
    if (boutonOk) {
      boutonOk.click();
      return true;
    }
  }

  const panneauChoixMarcheSelection = getElement("panneau-choix-marche-selection");
  const boutonChoixMarcheSelection = getElement("btn-fermer-choix-marche-selection");
  if (
    elementEstVisiblePourRaccourciClavier(panneauChoixMarcheSelection) &&
    boutonChoixMarcheSelection &&
    !boutonChoixMarcheSelection.disabled &&
    elementEstVisiblePourRaccourciClavier(boutonChoixMarcheSelection) &&
    libelleBoutonEstOk(boutonChoixMarcheSelection.textContent)
  ) {
    boutonChoixMarcheSelection.click();
    return true;
  }

  return false;
}

function initialiserRaccourcisClavier() {
  document.addEventListener("keydown", event => {
    if (event.altKey || event.ctrlKey || event.metaKey) {
      return;
    }

    const elementActif = document.activeElement;
    const tagActif = String(elementActif?.tagName || "").toLowerCase();
    if (tagActif === "input" || tagActif === "textarea" || tagActif === "select") {
      return;
    }

    if (jeu?.ui?.menuEchapOuvert) {
      return;
    }

    const raccourciNavigationVue =
      event.key === "1" || event.key === "2" || event.key === "3";
    if (raccourciNavigationVue && vueAccueilVisible()) {
      return;
    }

    if (event.key === "1") {
      event.preventDefault();
      afficherVue("vue-marche");
      return;
    }

    if (event.key === "2") {
      event.preventDefault();
      afficherVue("vue-joueur");
      return;
    }

    if (event.key === "3") {
      event.preventDefault();
      afficherVue("vue-bot");
      return;
    }

    if (event.key === "Enter") {
      if (tagActif === "button") {
        return;
      }

      if (tenterValidationParEntree()) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      event.preventDefault();
      passerEtapeBotSuivante();
    }
  });
}

function ajusterEchelleInterface() {
  const vueMarche = getElement("vue-marche");
  const vueJoueur = getElement("vue-joueur");
  const vueBot = getElement("vue-bot");

  const zoneMarche = getElement("zone-marche");
  const zoneJoueur = getElement("zone-joueur");
  const zoneBot = getElement("vue-bot");

  const marche = getElement("marche-scale");
  const marcheWrapper = getElement("marche-wrapper");

  const joueur = getElement("joueur-scale");
  const joueurWrapper = getElement("joueur-wrapper");

  const bot = getElement("bot-scale");
  const botWrapper = getElement("bot-wrapper");

  if (vueMarche && !vueMarche.classList.contains("vue-cachee") && marche && marcheWrapper && zoneMarche) {
    const largeurDisponible = zoneMarche.clientWidth - 20;
    const hauteurDisponible = zoneMarche.clientHeight - 40;

    const largeurContenu = marche.offsetWidth;
    const hauteurContenu = marche.offsetHeight;

    const scaleLargeur = largeurDisponible / largeurContenu;
    const scaleHauteur = hauteurDisponible / hauteurContenu;
    const scale = Math.min(scaleLargeur, scaleHauteur, 1) * 0.95;

    appliquerEchelleSiNecessaire(
      marche,
      marcheWrapper,
      scale,
      hauteurContenu,
      ETAT_ECHELLE_INTERFACE.marche
    );
  }

  if (vueJoueur && !vueJoueur.classList.contains("vue-cachee") && joueur && joueurWrapper && zoneJoueur) {
    const largeurDisponible = zoneJoueur.clientWidth - 20;
    const hauteurDisponible = zoneJoueur.clientHeight - 40;

    const largeurContenu = joueur.offsetWidth;
    const hauteurContenu = joueur.offsetHeight;

    const scaleLargeur = largeurDisponible / largeurContenu;
    const scaleHauteur = hauteurDisponible / hauteurContenu;
    const scale = Math.min(scaleLargeur, scaleHauteur, 1) * 0.95;

    appliquerEchelleSiNecessaire(
      joueur,
      joueurWrapper,
      scale,
      hauteurContenu,
      ETAT_ECHELLE_INTERFACE.joueur
    );
  }

  if (vueBot && !vueBot.classList.contains("vue-cachee") && bot && botWrapper && zoneBot) {
    const largeurDisponible = zoneBot.clientWidth - 20;
    const hauteurDisponible = zoneBot.clientHeight - 40;

    const largeurContenu = bot.offsetWidth;
    const hauteurContenu = bot.offsetHeight;

    const scaleLargeur = largeurDisponible / largeurContenu;
    const scaleHauteur = hauteurDisponible / hauteurContenu;
    const scale = Math.min(scaleLargeur, scaleHauteur, 1) * 0.95;

    appliquerEchelleSiNecessaire(
      bot,
      botWrapper,
      scale,
      hauteurContenu,
      ETAT_ECHELLE_INTERFACE.bot
    );
  }
}

/* =========================================================
   44) ZOOM TEMPORAIRE
   ========================================================= */

function revelerCarteAuCentre(carte, duree = 1000) {
  return new Promise(resolve => {
    const zoomCarte = getElement("zoom-carte");

    if (!zoomCarte) {
      resolve();
      return;
    }

    zoomCarte.innerHTML = "";

    const divCarte = document.createElement("div");
    divCarte.className = "carte";
    divCarte.innerHTML = creerCarteHTML(carte);

    zoomCarte.appendChild(divCarte);
    zoomCarte.style.display = "block";

    setTimeout(() => {
      zoomCarte.style.display = "none";
      zoomCarte.innerHTML = "";
      resolve();
    }, duree);
  });
}

function creerCloneCartePourZoom(carteElement) {
  const carteClonee = carteElement.cloneNode(true);

  carteClonee.classList.remove("carte-dessus");
  carteClonee.classList.remove("carte-dessous");
  carteClonee.style.position = "relative";
  carteClonee.style.top = "0";
  carteClonee.style.left = "0";
  carteClonee.style.margin = "0";
  carteClonee.style.transform = "none";
  carteClonee.style.transition = "none";

  return carteClonee;
}

function initialiserZoomCartes() {
  const zoomCarte = getElement("zoom-carte");

  if (!zoomCarte) {
    console.error('Élément "zoom-carte" introuvable dans le HTML.');
    return;
  }

  let timerZoom = null;

  document.addEventListener("mouseover", event => {
    if (
      jeu.ui.zoomVerrouille ||
      jeu.ui.regardRenommeeActif ||
      jeu.ui.defausseOuverte ||
      jeu.ui.panneauUIOuvert ||
      jeu.ui.menuEchapOuvert
    ) {
      return;
    }

    const carteMarche = event.target.closest(
      ".zone-cartes-marche .carte, .pile-visible .carte"
    );
    const carteJoueur = event.target.closest(
      "#bloc-zone-joueur .carte, #slot-main .carte, #contenu-tableau-joueur .carte"
    );

    clearTimeout(timerZoom);

    if (!carteMarche && !carteJoueur) {
      return;
    }

    timerZoom = setTimeout(() => {
      if (
        jeu.ui.zoomVerrouille ||
        jeu.ui.regardRenommeeActif ||
        jeu.ui.defausseOuverte ||
        jeu.ui.panneauUIOuvert ||
        jeu.ui.menuEchapOuvert
      ) {
        return;
      }

      zoomCarte.innerHTML = "";

      if (carteMarche) {
        const carteNeuve = document.createElement("div");
        carteNeuve.className = "carte";
        carteNeuve.innerHTML = carteMarche.innerHTML;
        zoomCarte.appendChild(carteNeuve);
      } else if (carteJoueur) {
        const indexTableau = carteJoueur.dataset.indexTableau;

        if (indexTableau !== undefined) {
          const carteSource = jeu.joueurZones.tableauJoueur[Number(indexTableau)];

          if (carteSource) {
            zoomCarte.appendChild(creerPileZoomCarteEtReservees(carteSource));
          } else {
            zoomCarte.appendChild(creerCloneCartePourZoom(carteJoueur));
          }
        } else {
          zoomCarte.appendChild(creerCloneCartePourZoom(carteJoueur));
        }
      }

      zoomCarte.style.display = "block";
    }, 120);
  });

  document.addEventListener("mouseout", event => {
    const carte = event.target.closest(
      ".zone-cartes-marche .carte, .pile-visible .carte, #bloc-zone-joueur .carte, #slot-main .carte, #contenu-tableau-joueur .carte"
    );

    if (!carte) {
      return;
    }

    clearTimeout(timerZoom);

    if (jeu.ui.regardRenommeeActif) {
      return;
    }

    if (
      jeu.ui.zoomVerrouille ||
      jeu.ui.defausseOuverte ||
      jeu.ui.panneauUIOuvert ||
      jeu.ui.menuEchapOuvert
    ) {
      return;
    }

    zoomCarte.style.display = "none";
    zoomCarte.innerHTML = "";
  });
}

/* =========================================================
   45) ZOOM VERROUILLÉ
   ========================================================= */

   function mettreZoomVoieSacreeEnModeSelection(carte) {
  const zoomCarte = getElement("zoom-carte");

  if (!zoomCarte || !carte) {
    return;
  }

  jeu.ui.zoomVerrouille = true;
  jeu.ui.sourceZoomVerrouille = carte;

  zoomCarte.innerHTML = "";
  zoomCarte.style.display = "block";
  zoomCarte.style.zIndex = "130000";
  zoomCarte.style.pointerEvents = "none";

  const wrapper = document.createElement("div");
  wrapper.className = "zoom-voie-sacree";

  const divCarte = document.createElement("div");
  divCarte.className = "carte";
  divCarte.innerHTML = creerCarteHTML(carte);

  wrapper.appendChild(divCarte);
  zoomCarte.appendChild(wrapper);
}

  function ouvrirZoomVoieSacreeAvecChoix(carte, message, onOui, onNon) {
  const zoomCarte = getElement("zoom-carte");

  if (!zoomCarte || !carte) {
    return;
  }

  jeu.ui.zoomVerrouille = true;
  jeu.ui.sourceZoomVerrouille = carte;

  zoomCarte.innerHTML = "";
  zoomCarte.style.display = "block";
  zoomCarte.style.zIndex = "130000";
  zoomCarte.style.pointerEvents = "auto";

  const wrapper = document.createElement("div");
  wrapper.className = "zoom-voie-sacree";

  const divCarte = document.createElement("div");
  divCarte.className = "carte";
  divCarte.innerHTML = creerCarteHTML(carte);

  const messageDiv = document.createElement("div");
  messageDiv.className = "zoom-voie-sacree-message";
  messageDiv.textContent = message || "";

  const actionsDiv = document.createElement("div");
  actionsDiv.className = "zoom-voie-sacree-actions";

  const btnOui = document.createElement("button");
  btnOui.textContent = "Oui";
  btnOui.onclick = async event => {
    event.preventDefault();
    event.stopPropagation();

    if (typeof onOui === "function") {
      await onOui();
    }
  };

  const btnNon = document.createElement("button");
  btnNon.textContent = "Non";
  btnNon.onclick = async event => {
    event.preventDefault();
    event.stopPropagation();

    if (typeof onNon === "function") {
      await onNon();
    }
  };

  actionsDiv.appendChild(btnOui);
  actionsDiv.appendChild(btnNon);

  wrapper.appendChild(divCarte);
  wrapper.appendChild(messageDiv);
  wrapper.appendChild(actionsDiv);

  zoomCarte.appendChild(wrapper);
}

function ouvrirZoomVoieSacreeCarteSeule(carte) {
  const zoomCarte = getElement("zoom-carte");

  if (!zoomCarte || !carte) {
    return;
  }

  jeu.ui.zoomVerrouille = true;
  jeu.ui.sourceZoomVerrouille = carte;

  zoomCarte.innerHTML = "";
  zoomCarte.style.display = "block";
  zoomCarte.style.zIndex = "130000";
  zoomCarte.style.pointerEvents = "none";

  const divCarte = document.createElement("div");
  divCarte.className = "carte";
  divCarte.innerHTML = creerCarteHTML(carte);

  zoomCarte.appendChild(divCarte);
}

function fermerZoomVoieSacree() {
  const zoomCarte = getElement("zoom-carte");

  if (!zoomCarte) {
    return;
  }

  zoomCarte.style.display = "none";
  zoomCarte.innerHTML = "";
  zoomCarte.style.zIndex = "13000";
  zoomCarte.style.pointerEvents = "none";
  zoomCarte.classList.remove("zoom-force-visible");

  jeu.ui.zoomVerrouille = false;
  jeu.ui.sourceZoomVerrouille = null;
}

   function ouvrirZoomTemporairePourCarteSimple(carte) {
  const zoomCarte = getElement("zoom-carte");

  if (!zoomCarte || !carte) {
    return;
  }

  jeu.ui.zoomVerrouille = true;
  jeu.ui.sourceZoomVerrouille = carte;

  zoomCarte.innerHTML = "";
  zoomCarte.style.zIndex = "130000";
  zoomCarte.style.pointerEvents = "none";

  const divCarte = document.createElement("div");
  divCarte.className = "carte";
  divCarte.innerHTML = creerCarteHTML(carte);

  zoomCarte.appendChild(divCarte);
  zoomCarte.style.display = "block";
}

function fermerZoomTemporaireSpecial() {
  const zoomCarte = getElement("zoom-carte");

  if (!zoomCarte) {
    return;
  }

  zoomCarte.style.display = "none";
  zoomCarte.innerHTML = "";
  zoomCarte.style.zIndex = "13000";
  zoomCarte.style.pointerEvents = "none";
  zoomCarte.classList.remove("zoom-force-visible");

  jeu.ui.zoomVerrouille = false;
  jeu.ui.sourceZoomVerrouille = null;
}

function creerPileZoomCarteEtReservees(carte) {
  const conteneur = document.createElement("div");
  conteneur.className = "zoom-pile-reservees";

  const cartesPile = [carte];

  if (Array.isArray(carte.reservees) && carte.reservees.length > 0) {
    cartesPile.push(...carte.reservees);
  }

  const totalCartes = cartesPile.length;

  cartesPile.forEach((carteCourante, index) => {
    const divCarte = document.createElement("div");

    divCarte.className =
      index === 0
        ? "carte zoom-carte-principale"
        : "carte zoom-carte-reservee";

    divCarte.innerHTML = creerCarteHTML(carteCourante);
    divCarte.style.position = "relative";
    divCarte.style.zIndex = String(totalCartes - index);

    conteneur.appendChild(divCarte);
  });

  return conteneur;
}

function ouvrirZoomVerrouillePourCarte(carte) {
  const zoomCarte = getElement("zoom-carte");

  if (!zoomCarte || !carte) {
    return;
  }

  jeu.ui.zoomVerrouille = true;
  jeu.ui.sourceZoomVerrouille = carte;

  zoomCarte.innerHTML = "";
  zoomCarte.appendChild(creerPileZoomCarteEtReservees(carte));
  zoomCarte.style.display = "block";

  initialiserSurvolCartesDansZoom();
}

function fermerZoomVerrouille() {
  const zoomCarte = getElement("zoom-carte");

  if (!zoomCarte) {
    return;
  }

  jeu.ui.zoomVerrouille = false;
  jeu.ui.sourceZoomVerrouille = null;
  zoomCarte.style.display = "none";
  zoomCarte.innerHTML = "";
  zoomCarte.classList.remove("zoom-force-visible");
}

function initialiserSurvolCartesDansZoom() {
  const zoomCarte = getElement("zoom-carte");

  if (!zoomCarte) {
    return;
  }

  const cartes = Array.from(
    zoomCarte.querySelectorAll(".zoom-pile-reservees .carte")
  );

  if (cartes.length === 0) {
    return;
  }

  function reappliquerOrdreDeBase() {
    const totalCartes = cartes.length;

    cartes.forEach((carte, index) => {
      carte.style.zIndex = String(totalCartes - index);
      carte.classList.remove("zoom-carte-au-devant");
    });
  }

  reappliquerOrdreDeBase();

  cartes.forEach(carte => {
    carte.addEventListener("mouseenter", () => {
      reappliquerOrdreDeBase();
      carte.style.zIndex = "9999";
      carte.classList.add("zoom-carte-au-devant");
    });

    carte.addEventListener("mouseleave", () => {
      reappliquerOrdreDeBase();
    });
  });
}

function initialiserFermetureZoomVerrouille() {
  const zoomVerrouilleDoitResterOuvert = () =>
    jeu.ui.sourceZoomVerrouille === "regard-renommee" ||
    jeu.ui.sourceZoomVerrouille === "roi-des-rois";

  document.addEventListener("click", event => {
    if (!jeu.ui.zoomVerrouille) {
      return;
    }

    if (zoomVerrouilleDoitResterOuvert()) {
      return;
    }

    const maintenant = Date.now();
    const tempsDepuisOuverture = maintenant - (jeu.ui.timestampOuvertureZoom || 0);

    if (tempsDepuisOuverture < (jeu.ui.delaiBlocageFermetureZoom || 250)) {
      return;
    }

    const clicDansZoom = event.target.closest("#zoom-carte");
    const clicSurCarteTableau = event.target.closest("#contenu-tableau-joueur .carte");
    const clicSurCarteMain = event.target.closest("#slot-main .carte");
    const clicSurCarteMarche = event.target.closest(".zone-cartes-marche .carte, .pile-visible .carte");
    const clicDansPanneauTutoriel = event.target.closest("#panneau-mini-tutoriel");

    const sourceZoom = String(jeu.ui.sourceZoomVerrouille || "");
    const zoomMiniTutorielActif = sourceZoom.startsWith("mini-tutoriel-");

    if (zoomMiniTutorielActif && clicDansPanneauTutoriel) {
      return;
    }

    if (clicDansZoom || clicSurCarteTableau || clicSurCarteMain || clicSurCarteMarche) {
      return;
    }

    fermerZoomVerrouille();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && jeu.ui.zoomVerrouille) {
      if (zoomVerrouilleDoitResterOuvert()) {
        return;
      }

      fermerZoomVerrouille();
    }
  });
}

/* =========================================================
   46) REGARD RENOMMÉE / CARTES RÉVÉLÉES
   ========================================================= */

function remettreCartesAuDessus(deck, cartes) {
  for (let i = cartes.length - 1; i >= 0; i -= 1) {
    deck.unshift(cartes[i]);
  }
}

async function regarderJusquaRenommee(quantiteMax = 2) {
  const cartes = [];
  let quantiteEffective = quantiteMax;

  if (romainsActif()) {
    quantiteEffective += 1;
    gagnerRessource("progres", 1);
  }

  for (let i = 0; i < quantiteEffective; i += 1) {
    const resultat = await piocherOuRegarderRenommeeOuRoiDesRois(1, "regarder");

    if (resultat === "roi-des-rois") {
      afficherZoneJoueur();
      return [];
    }

    if (!resultat) {
      break;
    }

    cartes.push(resultat);
  }

  afficherZoneJoueur();
  return cartes;
}

function ouvrirChoixRegardRenommee(cartes) {
  const zoomCarte = getElement("zoom-carte");

  if (!zoomCarte || !Array.isArray(cartes) || cartes.length === 0) {
    return;
  }

  requestAnimationFrame(() => {
    jeu.ui.regardRenommeeActif = true;
    jeu.ui.cartesRegardRenommee = cartes;

    jeu.ui.zoomVerrouille = false;
    jeu.ui.sourceZoomVerrouille = null;
    jeu.ui.timestampOuvertureZoom = Date.now();

    zoomCarte.innerHTML = "";
    zoomCarte.style.display = "block";
    zoomCarte.style.pointerEvents = "auto";
    zoomCarte.style.zIndex = "130000";

    const wrapper = document.createElement("div");
    wrapper.className = "conteneur-choix-regard-renommee";

    const titre = document.createElement("div");
    titre.className = "titre-choix-regard-renommee";
    titre.textContent = "Choisissez 1 carte Renommée à garder";
    wrapper.appendChild(titre);

    const conteneur = document.createElement("div");
    conteneur.className = "zoom-pile-reservees";

    cartes.forEach((carte, index) => {
      const div = document.createElement("div");
      div.className = "carte carte-regard-renommee";
      div.dataset.indexRegardRenommee = String(index);
      div.innerHTML = creerCarteHTML(carte);

      div.onclick = event => {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation?.();
        choisirCarteRegardRenommee(index);
      };

      div.addEventListener("mouseenter", () => {
        const toutes = conteneur.querySelectorAll(".carte");

        toutes.forEach((autreCarte, autreIndex) => {
          autreCarte.style.zIndex = String(autreIndex + 1);
          autreCarte.classList.remove("zoom-carte-au-devant");
        });

        div.style.zIndex = "9999";
        div.classList.add("zoom-carte-au-devant");
      });

      div.addEventListener("mouseleave", () => {
        div.classList.remove("zoom-carte-au-devant");
      });

      conteneur.appendChild(div);
    });

    wrapper.appendChild(conteneur);

    wrapper.addEventListener("click", event => {
      event.stopPropagation();
    });

    zoomCarte.appendChild(wrapper);
  });
}

function fermerChoixRegardRenommee() {
  const zoomCarte = getElement("zoom-carte");

  if (!zoomCarte) {
    return;
  }

  jeu.ui.regardRenommeeActif = false;
  jeu.ui.cartesRegardRenommee = [];
  jeu.ui.zoomVerrouille = false;
  jeu.ui.sourceZoomVerrouille = null;
  jeu.ui.timestampOuvertureZoom = 0;

  zoomCarte.style.display = "none";
  zoomCarte.innerHTML = "";
  zoomCarte.style.pointerEvents = "none";
  zoomCarte.style.zIndex = "13000";
}

function choisirCarteRegardRenommee(indexChoisi) {
  const cartes = jeu.ui.cartesRegardRenommee;

  if (!Array.isArray(cartes) || cartes.length === 0) {
    return;
  }

  if (indexChoisi < 0 || indexChoisi >= cartes.length) {
    return;
  }

  const carteGardee = cartes[indexChoisi];
  const cartesRestantes = cartes.filter((_, index) => index !== indexChoisi);

  jeu.joueurZones.mainJoueur.push(carteGardee);
  remettreCartesAuDessus(jeu.piles.piocheSecondaireRenommee, cartesRestantes);

  const resolve = jeu.ui.resolveChoixRegardRenommee;
  jeu.ui.resolveChoixRegardRenommee = null;

  fermerChoixRegardRenommee();
  afficherHautMarche();
  afficherZoneJoueur();

  if (typeof resolve === "function") {
    resolve(true);
  }
}


/* =========================================================
   PAGE ACCUEUIL 
   ========================================================= */

   let configurationPartie = {
  nationJoueur: null,
  nationBot: null,
  miniTutoriel: false,
  difficulteBot: DIFFICULTE_BOT_PAR_DEFAUT
};

function obtenirListeNationsDepuisCartes(listeCartes) {
  const nations = [];

  for (let i = 0; i < listeCartes.length; i++) {
    const carte = listeCartes[i];

    if (!carte || !carte.nation) {
      continue;
    }

    if (carte.nation === "Aucun") {
      continue;
    }

    if (!nations.includes(carte.nation)) {
      nations.push(carte.nation);
    }
  }

  return nations;
}

function initialiserChoixNations() {
  const selectJoueur = document.getElementById("choix-nation-joueur");
  const selectBot = document.getElementById("choix-nation-bot");
  const selectDifficulteBot = document.getElementById("choix-difficulte-bot");
  const optionMiniTutoriel = document.getElementById("option-mini-tutoriel");
  const NATION_TUTORIEL_JOUEUR = "Romains";
  const NATION_TUTORIEL_BOT = "Celtes";

  if (!selectJoueur || !selectBot) {
    console.error("Les menus de choix des nations sont introuvables.");
    return;
  }

  const toutesLesCartes = [
    ...cartesCommunes,
    ...cartesNations
  ];

  const nations = obtenirListeNationsDepuisCartes(toutesLesCartes).sort((a, b) =>
    a.localeCompare(b, "fr", { sensitivity: "base" })
  );

  selectJoueur.innerHTML = "";
  selectBot.innerHTML = "";

  for (let i = 0; i < nations.length; i++) {
    const nomNation = nations[i];

    const optionJoueur = document.createElement("option");
    optionJoueur.value = nomNation;
    optionJoueur.textContent = nomNation;

    const optionBot = document.createElement("option");
    optionBot.value = nomNation;
    optionBot.textContent = nomNation;

    selectJoueur.appendChild(optionJoueur);
    selectBot.appendChild(optionBot);
  }

  if (configurationPartie.nationJoueur && nations.includes(configurationPartie.nationJoueur)) {
    selectJoueur.value = configurationPartie.nationJoueur;
  }

  if (configurationPartie.nationBot && nations.includes(configurationPartie.nationBot)) {
    selectBot.value = configurationPartie.nationBot;
  }

  configurationPartie.difficulteBot = normaliserDifficulteBot(configurationPartie.difficulteBot);
  if (selectDifficulteBot) {
    selectDifficulteBot.value = configurationPartie.difficulteBot;
    selectDifficulteBot.onchange = () => {
      configurationPartie.difficulteBot = normaliserDifficulteBot(selectDifficulteBot.value);
      selectDifficulteBot.value = configurationPartie.difficulteBot;
    };
  }

  const romainsDisponibles = nations.includes(NATION_TUTORIEL_JOUEUR);
  const celtesDisponibles = nations.includes(NATION_TUTORIEL_BOT);

  const appliquerContraintesTutorielAccueil = () => {
    const tutorielCoche = !!optionMiniTutoriel?.checked;

    if (tutorielCoche && romainsDisponibles && celtesDisponibles) {
      selectJoueur.value = NATION_TUTORIEL_JOUEUR;
      selectBot.value = NATION_TUTORIEL_BOT;
      configurationPartie.nationJoueur = NATION_TUTORIEL_JOUEUR;
      configurationPartie.nationBot = NATION_TUTORIEL_BOT;
      configurationPartie.difficulteBot = DIFFICULTES_BOT.IMPERATOR;
      selectJoueur.disabled = true;
      selectBot.disabled = true;

      if (selectDifficulteBot) {
        selectDifficulteBot.value = DIFFICULTES_BOT.IMPERATOR;
        selectDifficulteBot.disabled = true;
      }

      return;
    }

    selectJoueur.disabled = false;
    selectBot.disabled = false;
    if (selectDifficulteBot) {
      selectDifficulteBot.disabled = false;
      selectDifficulteBot.value = normaliserDifficulteBot(configurationPartie.difficulteBot);
    }
  };

  if (optionMiniTutoriel) {
    optionMiniTutoriel.checked = !!configurationPartie.miniTutoriel;
    optionMiniTutoriel.onchange = () => {
      configurationPartie.miniTutoriel = !!optionMiniTutoriel.checked;
      appliquerContraintesTutorielAccueil();
    };
    appliquerContraintesTutorielAccueil();
  }
}

function obtenirCartesDuneNation(nomNation, listeCartes) {
  const resultat = [];

  for (let i = 0; i < listeCartes.length; i++) {
    const carte = listeCartes[i];

    if (carte.nation === nomNation) {
      resultat.push(carte);
    }
  }

  return resultat;
}

const MESSAGE_TOAST_RACCOURCIS_PARTIE =
  "Raccourcis: 1 Marché · 2 Joueur · 3 Bot · Esc Menu · Entrée OK";

function afficherRappelRaccourcisPartie() {
  afficherToastUI(MESSAGE_TOAST_RACCOURCIS_PARTIE, { duree: 6400 });
}

function commencerNouvellePartie() {
  const selectNationJoueur = document.getElementById("choix-nation-joueur");
  const selectNationBot = document.getElementById("choix-nation-bot");
  const selectDifficulteBot = document.getElementById("choix-difficulte-bot");
  const optionMiniTutoriel = document.getElementById("option-mini-tutoriel");
  const modeMiniTutoriel = !!optionMiniTutoriel?.checked;

  configurationPartie.miniTutoriel = modeMiniTutoriel;

  if (modeMiniTutoriel) {
    configurationPartie.nationJoueur = "Romains";
    configurationPartie.nationBot = "Celtes";
    configurationPartie.difficulteBot = DIFFICULTES_BOT.IMPERATOR;

    if (selectNationJoueur) {
      selectNationJoueur.value = "Romains";
    }

    if (selectNationBot) {
      selectNationBot.value = "Celtes";
    }

    if (selectDifficulteBot) {
      selectDifficulteBot.value = DIFFICULTES_BOT.IMPERATOR;
    }
  } else {
    configurationPartie.nationJoueur = selectNationJoueur.value;
    configurationPartie.nationBot = selectNationBot.value;
    configurationPartie.difficulteBot = normaliserDifficulteBot(
      selectDifficulteBot?.value || configurationPartie.difficulteBot
    );
  }

  initialiserJeu();
  initialiserBot();
  afficherUIPartie();

  document.getElementById("barre-navigation-vues")?.classList.remove("ui-cachee");

  afficherVue("vue-joueur");
  initialiserMiniTutorielPartie(!!configurationPartie.miniTutoriel);

  setTimeout(() => {
    afficherRappelRaccourcisPartie();
  }, 420);
}

function demarrerPartie() {

  afficherVue("vue-marche");
}
   
/* =========================================================
   47) BOUTONS / INITIALISATIONS UI
   ========================================================= */

function afficherUIPartie() {
  const blocCompteurs = document.getElementById("bloc-compteurs-global");
  const blocControlesTour = document.getElementById("bloc-controles-tour");

  if (blocCompteurs) {
    blocCompteurs.classList.remove("ui-cachee");
  }

  if (blocControlesTour) {
    blocControlesTour.classList.remove("ui-cachee");
  }
}

function masquerUIPartie() {
  const blocCompteurs = document.getElementById("bloc-compteurs-global");
  const blocControlesTour = document.getElementById("bloc-controles-tour");

  if (blocCompteurs) {
    blocCompteurs.classList.add("ui-cachee");
  }

  if (blocControlesTour) {
    blocControlesTour.classList.add("ui-cachee");
  }
}

function initialiserBoutonsTour() {
  const btnFinTour = getElement("btn-fin-tour");
  const btnFinNettoyage = getElement("btn-fin-nettoyage");
  const btnCommencerTourBot = getElement("btn-commencer-tour-bot");
  const btnFinSolstice = getElement("btn-fin-solstice");
  const btnSauvegarderPartie = getElement("btn-sauvegarder-partie");
  const btnChargerPartie = getElement("btn-charger-partie");

  if (btnFinTour) {
    btnFinTour.onclick = terminerTourJoueur;
  }

  if (btnFinNettoyage) {
    btnFinNettoyage.onclick = terminerNettoyage;
  }

  if (btnCommencerTourBot) {
    btnCommencerTourBot.onclick = () => {
      void commencerTourBotDepuisInterface();
    };
  }

  if (btnFinSolstice) {
    btnFinSolstice.onclick = () => {
      void tenterTerminerSolstice();
    };
  }

  if (btnSauvegarderPartie) {
    btnSauvegarderPartie.onclick = () => {
      fermerMenuEchap({ silencieux: true });
      sauvegarderPartie();
    };
  }

  if (btnChargerPartie) {
    btnChargerPartie.onclick = () => {
      fermerMenuEchap({ silencieux: true });
      chargerPartieSauvegardee();
    };
  }

  definirEtatBoutonTourBot(false);
  mettreAJourBoutonsPhaseJoueur();
  mettreAJourDisponibiliteBoutonsSauvegarde();
}

function mettreAJourBoutonsPhaseJoueur() {
  const btnFinTour = getElement("btn-fin-tour");
  const btnFinNettoyage = getElement("btn-fin-nettoyage");
  const btnFinSolstice = getElement("btn-fin-solstice");

  const finPartie = !!jeu?.finPartie?.terminee;
  const phase = jeu?.manche?.phase;

  const finTourActif =
    !finPartie &&
    phase === PHASES.TOUR;

  const finNettoyageActif =
    !finPartie &&
    phase === PHASES.NETTOYAGE_DEFAUSSE;

  const finSolsticeActif =
    !finPartie &&
    phase === PHASES.SOLSTICE;

  if (btnFinTour) {
    btnFinTour.disabled = !finTourActif;
    btnFinTour.classList.toggle("bouton-inactif", !finTourActif);
  }

  if (btnFinNettoyage) {
    btnFinNettoyage.disabled = !finNettoyageActif;
    btnFinNettoyage.classList.toggle("bouton-inactif", !finNettoyageActif);
  }

  if (btnFinSolstice) {
    btnFinSolstice.disabled = !finSolsticeActif;
    btnFinSolstice.classList.toggle("bouton-inactif", !finSolsticeActif);
  }
}

const MINI_TUTORIEL_TOURS = 3;
let miniTutorielElementsSurlignes = [];
let miniTutorielDerniereEtapeScriptRendue = -1;
let miniTutorielResizeListenerAttache = false;

function miniTutorielEstActif() {
  return !!jeu?.ui?.miniTutorielActif && !jeu?.ui?.miniTutorielTermine;
}

function miniTutorielEstEnIntroduction() {
  return miniTutorielEstActif() && !jeu?.ui?.miniTutorielIntroTermine;
}

function miniTutorielIconeStatut(src, alt) {
  return `<img class="icone-ressource" src="${src}" alt="${alt}">`;
}

function miniTutorielMasquerPanneau() {
  const panneau = getElement("panneau-mini-tutoriel");
  if (!panneau) {
    return;
  }

  panneau.classList.add("ui-cachee");
}

function miniTutorielAfficherPanneau() {
  const panneau = getElement("panneau-mini-tutoriel");
  if (!panneau) {
    return;
  }

  panneau.classList.remove("ui-cachee");
}

function miniTutorielMettreFiltreObscurActif(actif = false, elementsSurlignes = []) {
  document.body?.classList.remove("mini-tutoriel-focus-actif");

  const voile = getElement("mini-tutoriel-voile");
  const svg = getElement("mini-tutoriel-voile-svg");
  const path = getElement("mini-tutoriel-voile-path");

  if (!voile || !svg || !path) {
    return;
  }

  if (!actif) {
    path.setAttribute("d", "");
    voile.classList.add("ui-cachee");
    return;
  }

  const largeur = Math.max(0, Number(window.innerWidth || 0));
  const hauteur = Math.max(0, Number(window.innerHeight || 0));
  if (largeur <= 0 || hauteur <= 0) {
    path.setAttribute("d", "");
    voile.classList.add("ui-cachee");
    return;
  }

  svg.setAttribute("viewBox", `0 0 ${largeur} ${hauteur}`);
  path.setAttribute("fill-rule", "evenodd");

  const marge = 10;
  let chemin = `M0 0H${largeur}V${hauteur}H0Z`;
  let trous = 0;
  const rectanglesTrous = [];

  (elementsSurlignes || []).forEach(element => {
    if (!(element instanceof Element)) {
      return;
    }

    const rect = element.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) {
      return;
    }

    const gauche = Math.max(0, rect.left - marge);
    const haut = Math.max(0, rect.top - marge);
    const droite = Math.min(largeur, rect.right + marge);
    const bas = Math.min(hauteur, rect.bottom + marge);

    if (droite <= gauche || bas <= haut) {
      return;
    }

    rectanglesTrous.push({ gauche, haut, droite, bas });
  });

  const fusionTolerance = 6;
  const fusionnes = [];
  const seChevauchent = (a, b, tolerance = 0) => !(
    a.droite + tolerance < b.gauche ||
    b.droite + tolerance < a.gauche ||
    a.bas + tolerance < b.haut ||
    b.bas + tolerance < a.haut
  );

  rectanglesTrous.forEach(rectangleInitial => {
    let rectangleCourant = { ...rectangleInitial };
    let fusionEffectuee = true;

    while (fusionEffectuee) {
      fusionEffectuee = false;

      for (let i = 0; i < fusionnes.length; i += 1) {
        const candidate = fusionnes[i];
        if (!seChevauchent(rectangleCourant, candidate, fusionTolerance)) {
          continue;
        }

        rectangleCourant = {
          gauche: Math.min(rectangleCourant.gauche, candidate.gauche),
          haut: Math.min(rectangleCourant.haut, candidate.haut),
          droite: Math.max(rectangleCourant.droite, candidate.droite),
          bas: Math.max(rectangleCourant.bas, candidate.bas)
        };
        fusionnes.splice(i, 1);
        fusionEffectuee = true;
        break;
      }
    }

    fusionnes.push(rectangleCourant);
  });

  fusionnes.forEach(rectangle => {
    chemin += `M${rectangle.gauche} ${rectangle.haut}H${rectangle.droite}V${rectangle.bas}H${rectangle.gauche}Z`;
    trous += 1;
  });

  if (trous <= 0) {
    path.setAttribute("d", "");
    voile.classList.add("ui-cachee");
    return;
  }

  path.setAttribute("d", chemin);
  voile.classList.remove("ui-cachee");
}

function miniTutorielForcerVueJoueur() {
  afficherVue("vue-joueur");
  afficherZoneJoueur();
}

function miniTutorielForcerVueMarche() {
  afficherVue("vue-marche");
  afficherHautMarche();
  afficherBarreIndicateurs();
  afficherPileExil();
  afficherBasMarche();
}

function miniTutorielForcerVueBot() {
  afficherVue("vue-bot");
}

function miniTutorielPasserJoueurEnBarbare() {
  jeu.joueurZones.carteStatutVisible = { ...carteStatutJoueur.faceA };
  afficherZoneJoueur();
}

function miniTutorielCarteEstDalmatie(carte) {
  return !!(
    carte &&
    carte.nom === "Dalmatie" &&
    (carte.nation === "Romains" || !carte.nation || carte.nation === "Aucun")
  );
}

function miniTutorielTrouverTemplateDalmatie() {
  return (cartesNations || []).find(carte =>
    carte &&
    carte.nom === "Dalmatie" &&
    carte.nation === "Romains"
  ) || null;
}

function miniTutorielExtraireDalmatieDepuisListe(liste) {
  if (!Array.isArray(liste) || liste.length === 0) {
    return null;
  }

  const index = liste.findIndex(carte => miniTutorielCarteEstDalmatie(carte));
  if (index < 0) {
    return null;
  }

  return liste.splice(index, 1)[0] || null;
}

function miniTutorielAssurerCarteDalmatieEnMain() {
  const zones = jeu?.joueurZones || {};
  const main = zones.mainJoueur || [];

  const dejaEnMain = main.find(carte =>
    carte?.miniTutorielDalmatie === true || miniTutorielCarteEstDalmatie(carte)
  );

  if (dejaEnMain) {
    dejaEnMain.miniTutorielDalmatie = true;
    return dejaEnMain;
  }

  const ordreZones = [
    zones.deckJoueur,
    zones.defausseJoueur,
    zones.pileCroissantJoueur,
    zones.pileEtoileJoueur,
    zones.tableauJoueur,
    zones.histoireJoueur
  ];

  let carte = null;
  for (const zone of ordreZones) {
    carte = miniTutorielExtraireDalmatieDepuisListe(zone);
    if (carte) {
      break;
    }
  }

  if (!carte) {
    const template = miniTutorielTrouverTemplateDalmatie();
    if (!template) {
      return null;
    }
    carte = clonerCartePourJeu(template);
  }

  carte.miniTutorielDalmatie = true;
  main.unshift(carte);
  afficherZoneJoueur();
  return carte;
}

function miniTutorielJouerDalmatieDansTableau() {
  const zones = jeu?.joueurZones || {};
  const main = zones.mainJoueur || [];
  const tableau = zones.tableauJoueur || [];

  const indexMain = main.findIndex(carte =>
    carte?.miniTutorielDalmatie === true || miniTutorielCarteEstDalmatie(carte)
  );

  if (indexMain >= 0) {
    const carte = main.splice(indexMain, 1)[0];
    if (carte) {
      carte.miniTutorielDalmatie = true;
      tableau.push(carte);
    }
    afficherZoneJoueur();
    return;
  }

  const dejaDansTableau = tableau.some(carte =>
    carte?.miniTutorielDalmatie === true || miniTutorielCarteEstDalmatie(carte)
  );

  if (dejaDansTableau) {
    return;
  }

  const carte =
    miniTutorielExtraireDalmatieDepuisListe(zones.deckJoueur) ||
    miniTutorielExtraireDalmatieDepuisListe(zones.defausseJoueur) ||
    miniTutorielExtraireDalmatieDepuisListe(zones.pileCroissantJoueur) ||
    miniTutorielExtraireDalmatieDepuisListe(zones.pileEtoileJoueur) ||
    miniTutorielExtraireDalmatieDepuisListe(zones.histoireJoueur);

  if (!carte) {
    return;
  }

  carte.miniTutorielDalmatie = true;
  tableau.push(carte);
  afficherZoneJoueur();
}

function miniTutorielOuvrirZoomCarteCommeSurvol(carte, sourceZoom = "mini-tutoriel-zoom") {
  const zoomCarte = getElement("zoom-carte");

  if (!zoomCarte || !carte) {
    return;
  }

  jeu.ui.zoomVerrouille = true;
  jeu.ui.sourceZoomVerrouille = sourceZoom;
  jeu.ui.timestampOuvertureZoom = Date.now();

  zoomCarte.innerHTML = "";
  zoomCarte.style.display = "block";
  zoomCarte.style.zIndex = "130000";
  zoomCarte.style.pointerEvents = "none";
  zoomCarte.classList.add("zoom-force-visible");

  const divCarte = document.createElement("div");
  divCarte.className = "carte zoom-carte-principale";
  divCarte.innerHTML = creerCarteHTML(carte);

  zoomCarte.appendChild(divCarte);
}

function miniTutorielCarteEstLegions(carte) {
  return !!(
    carte &&
    (carte.nom === "Légions" || carte.nom === "Légion") &&
    (carte.nation === "Romains" || !carte.nation || carte.nation === "Aucun")
  );
}

function miniTutorielTrouverTemplateLegions() {
  return (cartesNations || []).find(carte =>
    carte &&
    (carte.nom === "Légions" || carte.nom === "Légion") &&
    carte.nation === "Romains"
  ) || null;
}

function miniTutorielObtenirCarteLegionsPourZoom() {
  const zones = jeu?.joueurZones || {};

  const zonesRecherche = [
    zones.mainJoueur,
    zones.tableauJoueur,
    zones.deckJoueur,
    zones.defausseJoueur,
    zones.pileEtoileJoueur,
    zones.pileCroissantJoueur,
    zones.histoireJoueur
  ];

  for (const zone of zonesRecherche) {
    if (!Array.isArray(zone) || zone.length === 0) {
      continue;
    }

    const carteTrouvee = zone.find(carte => miniTutorielCarteEstLegions(carte));
    if (carteTrouvee) {
      return carteTrouvee;
    }
  }

  const template = miniTutorielTrouverTemplateLegions();
  if (template) {
    return clonerCartePourJeu(template);
  }

  return null;
}

function miniTutorielTrouverTemplateEmpereurTrajan() {
  return (cartesNations || []).find(carte =>
    carte &&
    carte.nom === "Empereur Trajan" &&
    carte.nation === "Romains"
  ) || null;
}

function miniTutorielObtenirCarteEmpereurTrajanPourZoom() {
  const template = miniTutorielTrouverTemplateEmpereurTrajan();
  if (!template) {
    return null;
  }

  return clonerCartePourJeu(template);
}

function miniTutorielTrouverTemplateVilleConditionnelle() {
  return (cartesCommunes || []).find(carte =>
    carte &&
    carte.nom === "Ville" &&
    carte.pointsVictoire === "Conditionnel"
  ) || null;
}

function miniTutorielObtenirCarteVillePourZoom() {
  const template = miniTutorielTrouverTemplateVilleConditionnelle();
  if (!template) {
    return null;
  }

  return clonerCartePourJeu(template);
}

function miniTutorielCartePourZoomSelonCle(cleZoom = "") {
  if (cleZoom === "dalmatie") {
    return miniTutorielAssurerCarteDalmatieEnMain();
  }

  if (cleZoom === "legions") {
    return miniTutorielObtenirCarteLegionsPourZoom();
  }

  if (cleZoom === "trajan") {
    return miniTutorielObtenirCarteEmpereurTrajanPourZoom();
  }

  if (cleZoom === "ville") {
    return miniTutorielObtenirCarteVillePourZoom();
  }

  return null;
}

function miniTutorielSourceZoomSelonCle(cleZoom = "") {
  if (cleZoom === "dalmatie") {
    return "mini-tutoriel-dalmatie";
  }

  if (cleZoom === "legions") {
    return "mini-tutoriel-legions";
  }

  if (cleZoom === "trajan") {
    return "mini-tutoriel-trajan";
  }

  if (cleZoom === "ville") {
    return "mini-tutoriel-ville";
  }

  return "mini-tutoriel-zoom";
}

function miniTutorielAssurerZoomScriptVisible() {
  if (!miniTutorielEstEnIntroduction()) {
    return;
  }

  const index = Number(jeu?.ui?.miniTutorielEtapeScript || 0);
  const etape = MINI_TUTORIEL_ETAPES_SCRIPT[index];
  const cleZoom = String(etape?.zoomMaintenir || "").trim().toLowerCase();

  if (!cleZoom) {
    return;
  }

  const sourceAttendue = miniTutorielSourceZoomSelonCle(cleZoom);
  const zoomCarte = getElement("zoom-carte");
  const carteDejaVisible = !!zoomCarte?.querySelector(".zoom-carte-principale");
  const sourceActuelle = String(jeu.ui.sourceZoomVerrouille || "");

  if (carteDejaVisible && sourceActuelle === sourceAttendue) {
    return;
  }

  const carte = miniTutorielCartePourZoomSelonCle(cleZoom);
  if (!carte) {
    return;
  }

  miniTutorielOuvrirZoomCarteCommeSurvol(
    carte,
    sourceAttendue
  );
}

const MINI_TUTORIEL_ETAPES_SCRIPT = [
  {
    message: "Voici la zone joueur.",
    cibles: [],
    onEnter: () => {
      miniTutorielForcerVueJoueur();
    }
  },
  {
    message: "Voici ta carte Puissance. Tu peux y lire les effets passifs ou actifs propres à ta nation. Tu peux aussi cliquer sur la carte Puissance pour ouvrir ton Histoire.",
    cibles: ["#slot-puissance .carte-slot-puissance-cliquable", "#slot-puissance .carte"]
  },
  {
    message: `Voici ta carte Statut. Elle indique si tu te trouves présentement en état Barbare (${miniTutorielIconeStatut("icons/imperium-barbare.png", "Barbare")}).`,
    cibles: ["#slot-statut .carte-statut", "#slot-statut .carte"],
    onEnter: () => {
      miniTutorielPasserJoueurEnBarbare();
    }
  },
  {
    message: `Ou en état Empire (${miniTutorielIconeStatut("icons/imperium-empire.png", "Empire")}).`,
    cibles: ["#slot-statut .carte-statut", "#slot-statut .carte"],
    onEnter: () => {
      passerJoueurEnEmpire();
    }
  },
  {
    message: `Certaines cartes ne peuvent être jouées que lorsque ta nation est dans l’un ou l’autre de ces états. Ces cartes sont identifiables par leur icône Barbare ou Empire.`,
    cibles: [],
    onEnter: () => {
      miniTutorielPasserJoueurEnBarbare();
    }
  },
  {
    message: `Ce deck contient les cartes Nation que tu obtiendras au fil des rafraîchissements de ton deck principal. Les cartes obtenues par ce deck vont directement dans ta défausse. Une fois que tu auras obtenu toutes les cartes de ce deck, tu pourras obtenir la carte Avènement. En tant que Romains, ta carte Avènement est Jules César. Une fois cette carte dans ta défausse, ta nation passe au statut d’Empire.`,
    cibles: ["#slot-croissant .dos-carte-horizontale", "#slot-croissant .compteur-pile-joueur"]
  },
  {
    message: `Ce deck contient les cartes à développer de ta nation. Ces cartes sont obtenues de la même manière que les cartes Nation. Cependant, elles ont un coût de développement en Matériaux et en Population. Une fois une carte développée, elle va directement dans ta défausse. Contrairement à la pile de cartes Nation, tu peux choisir dans quel ordre obtenir tes cartes à développer.`,
    cibles: ["#slot-etoile .carte"]
  },
  {
    message: `Ce deck contient les cartes à piger qui iront directement dans ta main. Une fois le deck vide, il est rafraîchi depuis la défausse.`,
    cibles: ["#slot-base .dos-carte-verticale", "#slot-base .compteur-pile-joueur"]
  },
  {
    message: `Voici ta main. Tu peux jouer la plupart des cartes en cliquant dessus. Certaines cartes ne peuvent être jouées que si certains critères sont respectés. À chaque fin de tour, tu auras l’opportunité de défausser autant de cartes que tu veux, puis tu pourras reconstituer ta main de 5 cartes. Au courant d’un tour, il est possible d’avoir plus de 5 cartes, et il n’est pas nécessaire de défausser jusqu’au maximum de la main. Certaines cartes permettent d’augmenter ton maximum de cartes, permettant de reconstituer ta main de plus de 5 cartes.`,
    cibles: ["#slot-main .carte"],
    onEnter: () => {
      miniTutorielAssurerCarteDalmatieEnMain();
      miniTutorielForcerVueJoueur();
    }
  },
  {
    message: "Voici la carte Dalmatie.",
    cibles: ["#zoom-carte .zoom-carte-principale"],
    zoomMaintenir: "dalmatie",
    onEnter: () => {
      const dalmatie = miniTutorielAssurerCarteDalmatieEnMain();
      miniTutorielForcerVueJoueur();
      if (dalmatie) {
        miniTutorielOuvrirZoomCarteCommeSurvol(dalmatie, "mini-tutoriel-dalmatie");
      }
    }
  },
  {
    message: "Cet icône indique que la carte jouée ira dans ton tableau. Les cartes dans ton tableau peuvent avoir des effets activables durant ton tour, ou à la fin du tour du bot, durant le Solstice.",
    cibles: ["#zoom-carte .zoom-carte-principale .bandeau .pin img[src*='imperium-persistante']"],
    zoomMaintenir: "dalmatie"
  },
  {
    message: "Certaines cartes ont des icônes associés auxquels d’autres cartes peuvent se référer. Exemple: une carte pourrait te permettre de recevoir X ressource par icône Sac dans ton tableau.",
    cibles: ["#zoom-carte .zoom-carte-principale .zone-centre img[src*='imperium-sac']"],
    zoomMaintenir: "dalmatie"
  },
  {
    message: "C’est ici que tu peux lire les actions de la carte. Certaines actions de cartes sont obligatoires, d’autres optionnelles. Il n’est pas toujours nécessaire de répondre à toutes les conditions pour jouer une carte. Ex: Une carte qui permet de voler des matériaux au bot sera jouable même si le bot n’a pas de matériaux.",
    cibles: ["#zoom-carte .zoom-carte-principale .effet"],
    zoomMaintenir: "dalmatie"
  },
  {
    message: "La catégorie de la carte est indiquée au bas de celle-ci.",
    cibles: ["#zoom-carte .zoom-carte-principale .categorie"],
    zoomMaintenir: "dalmatie"
  },
  {
    message: "Si tu jouais la carte Dalmatie, elle serait placée ici dans le tableau.",
    cibles: ["#contenu-tableau-joueur"],
    positionPanneau: "gauche-haut",
    onEnter: () => {
      fermerZoomVerrouille();
      miniTutorielJouerDalmatieDansTableau();
      miniTutorielForcerVueJoueur();
    }
  },
  {
    message: "Voici la carte Légions.",
    cibles: ["#zoom-carte .zoom-carte-principale"],
    zoomMaintenir: "legions",
    onEnter: () => {
      const legions = miniTutorielObtenirCarteLegionsPourZoom();
      miniTutorielForcerVueJoueur();
      if (legions) {
        miniTutorielOuvrirZoomCarteCommeSurvol(legions, "mini-tutoriel-legions");
      }
    }
  },
  {
    message: "Le chiffre en bas à droite de la carte indique combien de points de victoire elle vaut. Les cartes de départ ne confèrent aucun point. Il est donc important d’obtenir des cartes du marché, ou de développer le plus de cartes possible pour maximiser ses points en fin de partie.",
    cibles: ["#zoom-carte .zoom-carte-principale .points-victoire, #zoom-carte .zoom-carte-principale .zone-victoire"],
    zoomMaintenir: "legions"
  },
  {
    message: "Voici la carte Empereur Trajan.",
    cibles: ["#zoom-carte .zoom-carte-principale"],
    zoomMaintenir: "trajan",
    onEnter: () => {
      const trajan = miniTutorielObtenirCarteEmpereurTrajanPourZoom();
      miniTutorielForcerVueJoueur();
      if (trajan) {
        miniTutorielOuvrirZoomCarteCommeSurvol(trajan, "mini-tutoriel-trajan");
      }
    }
  },
  {
    message: "Les cartes identifiées par un X offrent une quantité variable de points selon le critère indiqué.",
    cibles: ["#zoom-carte .zoom-carte-principale .points-victoire, #zoom-carte .zoom-carte-principale .zone-victoire"],
    zoomMaintenir: "trajan"
  },
  {
    message: "Voici la carte Ville.",
    cibles: ["#zoom-carte .zoom-carte-principale"],
    zoomMaintenir: "ville",
    onEnter: () => {
      const ville = miniTutorielObtenirCarteVillePourZoom();
      miniTutorielForcerVueJoueur();
      if (ville) {
        miniTutorielOuvrirZoomCarteCommeSurvol(ville, "mini-tutoriel-ville");
      }
    }
  },
  {
    message: "Les cartes identifiées par un ? offrent une quantité de points conditionnelle au critère indiqué.",
    cibles: ["#zoom-carte .zoom-carte-principale .points-victoire, #zoom-carte .zoom-carte-principale .zone-victoire"],
    zoomMaintenir: "ville"
  },
  {
    message: "De haut en bas: Jetons d’actions, Jetons d’épuisement, Population, Matériaux, Progrès.",
    cibles: ["#bloc-compteurs-global"],
    onEnter: () => {
      fermerZoomVerrouille();
      miniTutorielForcerVueJoueur();
    }
  },
  {
    message: "Les jetons d’actions indiquent combien d’actions il te reste à jouer. Les actions sont seulement utilisées pour jouer une carte de la main. À chaque nettoyage, à la fin du tour, les jetons sont réinitialisés à 3.",
    cibles: ["#bloc-compteurs-global"]
  },
  {
    message: "Les jetons d’épuisement permettent d’activer les effets d’épuisement des cartes. La carte Puissance et certaines cartes du tableau peuvent avoir ces effets d’épuisement, activés passivement ou parfois activement. Les jetons d’épuisement vont aussi se placer automatiquement sur les piles Nation et Développement lorsqu’une carte y est retirée lors du rafraîchissement du deck. Il est alors impossible pour le reste du tour d’obtenir une nouvelle carte d’une de ces piles par rafraîchissement de deck. À chaque nettoyage, à la fin du tour, les jetons sont réinitialisés à 5.",
    cibles: ["#bloc-compteurs-global"]
  },
  {
    message: "Les jetons de Population et Matériaux sont des ressources utilisables pour effectuer certaines actions de cartes.",
    cibles: ["#bloc-compteurs-global"]
  },
  {
    message: "Les jetons Progrès donnent 1 point de victoire par jeton. Ils peuvent aussi être utilisés pour remplacer 2 Matériaux ou 1 Population.",
    cibles: ["#bloc-compteurs-global"]
  },
  {
    message: "Voici le Marché. C’est ici que tu pourras obtenir de nouvelles cartes à ajouter à ton deck.",
    cibles: ["#zone-marche"],
    onEnter: () => {
      miniTutorielForcerVueMarche();
    }
  },
  {
    message: "Chaque catégorie de carte se retrouve dans l’une des piles suivantes. Lorsqu’une pile est vide, le bas du Marché est rafraîchi depuis la pile principale.",
    cibles: ["#haut-marche .bloc-pioche .dos-pioche"]
  },
  {
    message: "Seule l’action d’innover permet de piocher depuis l’une de ces piles.",
    cibles: ["#haut-marche .bloc-pioche .dos-pioche"]
  },
  {
    message: "Voici la pile de cartes Renommée. Ces cartes confèrent de puissants bonus. Pour la majorité des nations, seule la carte Gloire permet d’obtenir des cartes Renommée.",
    cibles: ["#haut-marche .bloc-renommee-dessus .bloc-pioche .dos-pioche"],
    positionPanneau: "gauche-haut"
  },
  {
    message: "Les cartes Instabilité représentent le chaos généré par les changements en cours dans ta nation. Ce sont des cartes parasites dont il ferait bien de se débarrasser, sans quoi tu seras pénalisé en fin de partie.",
    cibles: ["#bas-marche .colonne-bas-marche:last-child .pile-visible .carte", "#bas-marche .colonne-bas-marche:last-child .pile-visible .compteur-pile-mini"],
    positionPanneau: "gauche-haut"
  },
  {
    message: "Il est primordial de vérifier le compteur de cartes de la pile Instabilité. S’il ne reste plus de carte dans cette pile, le joueur perd automatiquement.",
    cibles: ["#bas-marche .colonne-bas-marche:last-child .pile-visible .carte", "#bas-marche .colonne-bas-marche:last-child .pile-visible .compteur-pile-mini"],
    positionPanneau: "gauche-haut"
  },
  {
    message: "C’est ici que tu pourras sélectionner des nouvelles cartes. Certaines cartes de ta main te permettront d’acquérir ou d’innover une carte, en respectant une ou plusieurs catégories.",
    cibles: ["#bas-marche .zone-cartes-marche .carte", "#bas-marche .pile-visible .carte"]
  },
  {
    message: "Il est important de te rappeler qu’acquérir une carte te force à prendre la carte Instabilité qui y est associée. Seules les cartes de catégorie Région n’ont pas d’Instabilité. Innover te permet également de choisir une carte dans le bas du Marché sans prendre de carte Instabilité.",
    cibles: ["#bas-marche .zone-cartes-marche .carte", "#bas-marche .colonne-bas-marche:last-child .pile-visible .carte"]
  },
  {
    message: "Tu auras parfois à exiler une carte du Marché. Tu auras à choisir une carte sur laquelle aucun jeton n’est posé pour la placer dans l’Exil. Ces cartes ne seront plus accessibles durant la partie.",
    cibles: ["#pile-exil .pile-visible .carte", "#pile-exil .pile-visible .dos-carte-verticale"],
    positionPanneau: "gauche-haut"
  },
  {
    message: "Le contrôle du marché par l’exil de cartes et le placement de jetons est un outil essentiel pour vaincre le bot.",
    cibles: ["#pile-exil .pile-visible .carte", "#pile-exil .pile-visible .dos-carte-verticale", "#bas-marche .zone-cartes-marche .carte", "#bas-marche .pile-visible .carte"],
    positionPanneau: "gauche-haut"
  },
  {
    message: "Si la pile principale du Marché ou la pile de cartes Renommée arrive à 0, le Décompte sera déclenché. Le décompte entame la fin de la partie après deux derniers Solstice.",
    cibles: ["#haut-marche .bloc-pioche.principale .dos-pioche", "#haut-marche .bloc-renommee-dessus .bloc-pioche .dos-pioche"],
    positionPanneau: "centre-bas"
  },
  {
    message: "Voici l’interface de l’automate.",
    cibles: [],
    positionPanneau: "centre-bas",
    onEnter: () => {
      miniTutorielForcerVueBot();
    }
  },
  {
    message: "Le bot ne joue pas comme le joueur. Il n’effectue aucun des effets indiqués sur les cartes. Il suit plutôt une logique fixe propre à chaque nation.",
    cibles: [],
    positionPanneau: "centre-bas"
  },
  {
    message: "Le bot peut nuire au joueur et interagir avec le marché.",
    cibles: [],
    positionPanneau: "centre-bas"
  },
  {
    message: "Le plus important à se rappeler face au bot est que les cartes avec des conditions de points de victoire X valent toujours 5 points, et les cartes avec des conditions de points de victoire ? valent toujours la valeur maximale. Un contrôle adéquat du marché est donc nécessaire pour ne pas permettre au bot d’obtenir trop de ces précieuses cartes.",
    cibles: [],
    positionPanneau: "centre-bas"
  },
  {
    message: "Pour plus d’informations sur le fonctionnement du bot et la logique propre à chaque nation, il est recommandé de se référer au manuel de jeu disponible en ligne. Simplement chercher Imperium Antique règles Solo.",
    cibles: [],
    positionPanneau: "centre-bas"
  },
  {
    message: "Passage à la zone joueur.",
    cibles: [],
    positionPanneau: "centre-ecran",
    onEnter: () => {
      miniTutorielForcerVueJoueur();
    }
  },
  {
    message: "Déroulement d’un tour complet:",
    cibles: [],
    positionPanneau: "centre-ecran"
  },
  {
    message: "Premièrement, le joueur choisit s’il veut jouer des cartes de sa main, ou effectuer une des deux actions spéciales de début de tour.",
    cibles: [],
    positionPanneau: "centre-ecran"
  },
  {
    message: "Pacifier permet de te débarrasser de toutes les cartes Instabilité de ta main. Cela met automatiquement fin au tour et enclenche le Nettoyage.",
    cibles: ["#btn-pacifier"],
    positionPanneau: "centre-ecran"
  },
  {
    message: "Innover force le joueur à défausser toutes ses cartes. Ensuite, le joueur peut aller chercher n’importe quelle carte disponible du marché, sauf les cartes Renommée. Le tour prend ensuite fin et le Nettoyage est enclenché.",
    cibles: ["#btn-innover-tour"],
    positionPanneau: "centre-ecran"
  },
  {
    message: "Si le joueur décide de jouer normalement les cartes de sa main, il pourra aussi activer les effets d’épuisement sur sa carte Puissance si disponible et sur ses cartes du tableau.",
    cibles: [],
    positionPanneau: "centre-ecran"
  },
  {
    message: "Une fois que le joueur a utilisé toutes ses actions, ou ne veut pas utiliser ses actions restantes, il peut cliquer sur Fin du tour.",
    cibles: ["#btn-fin-tour"],
    positionPanneau: "centre-ecran"
  },
  {
    message: "La fin du tour enclenche le Nettoyage. Premièrement, le joueur va placer un jeton Progrès sur une des cartes du Marché. Ce jeton ne provient pas de sa pile personnelle.",
    cibles: [],
    positionPanneau: "centre-ecran"
  },
  {
    message: "Ensuite, le joueur peut défausser autant de cartes qu’il le désire, et pige jusqu’à son maximum de main.",
    cibles: [],
    positionPanneau: "centre-ecran"
  },
  {
    message: "Ensuite, le bot joue son tour complet.",
    cibles: ["#btn-commencer-tour-bot"],
    positionPanneau: "centre-ecran"
  },
  {
    message: "Finalement, avant le début du prochain tour, le joueur a l’opportunité d’enclencher les effets Solstice de toutes ses cartes en jeu dans le tableau. Certains effets Solstice sont obligatoires.",
    cibles: [],
    positionPanneau: "centre-ecran"
  },
  {
    message: "Lorsque le joueur a au moins joué ses Solstice obligatoires, il peut cliquer sur Fin Solstice pour mettre fin au Solstice et débuter son prochain tour.",
    cibles: ["#btn-fin-solstice"],
    positionPanneau: "centre-ecran"
  },
  {
    message: "Les mots-clés les plus importants sont décrits dans la section Lexique du menu (Esc).",
    cibles: [],
    positionPanneau: "centre-ecran"
  },
  {
    message: "Conditions de fin de partie:",
    cibles: [],
    positionPanneau: "centre-ecran"
  },
  {
    message: "Quand le joueur ou le bot ont développé leur dernière carte, ou quand la pioche Renommée ou la pile principale du marché sont vides, un Décompte est déclenché.",
    cibles: [],
    positionPanneau: "centre-ecran"
  },
  {
    message: "Le décompte permet deux Solstices additionnels avant de terminer la partie.",
    cibles: [],
    positionPanneau: "centre-ecran"
  },
  {
    message: "Dès que la pile Instabilité est vide, le joueur perd par Effondrement de sa nation.",
    cibles: [],
    positionPanneau: "centre-ecran"
  },
  {
    message: "Décompte des points:",
    cibles: [],
    positionPanneau: "centre-ecran"
  },
  {
    message: "Chez le joueur, chaque jeton Progrès vaut 1 PV. Ensuite, chaque carte qui appartient au joueur, excluant ses cartes non développées, est comptabilisée.",
    cibles: [],
    positionPanneau: "centre-ecran"
  },
  {
    message: "Chez le bot, les jetons Progrès valent aussi 1 PV. De plus, chaque 10 ressources équivaut à 1 PV. Chaque carte, excluant ses cartes encore dans la pile Dynastie, est comptabilisée. Les cartes X valent toujours 5 points, et les cartes ? valent toujours leur valeur maximum.",
    cibles: [],
    positionPanneau: "centre-ecran"
  },
  {
    message: "Celui qui a le plus de points remporte la partie.",
    cibles: [],
    positionPanneau: "centre-ecran"
  },
  {
    message: "Pour plus de précisions sur les règles de jeu, il est recommandé de se référer au manuel disponible en ligne. Simplement chercher Imperium Antique livret règle.",
    cibles: [],
    positionPanneau: "centre-ecran"
  }
];

function miniTutorielResoudreElements(cibles = []) {
  const elements = [];

  (cibles || []).forEach(cible => {
    if (!cible) {
      return;
    }

    if (typeof cible === "string") {
      const selecteur = (
        cible.startsWith("#") ||
        cible.startsWith(".") ||
        cible.includes("[") ||
        cible.includes(" ")
      ) ? cible : `#${cible}`;

      document.querySelectorAll(selecteur).forEach(element => {
        if (element) {
          elements.push(element);
        }
      });
      return;
    }

    if (Array.isArray(cible)) {
      cible.forEach(element => {
        if (element) {
          elements.push(element);
        }
      });
      return;
    }

    if (cible instanceof Element) {
      elements.push(cible);
    }
  });

  return [...new Set(elements)];
}

function miniTutorielNettoyerSurbrillance() {
  miniTutorielElementsSurlignes.forEach(element => {
    element.classList.remove("tutoriel-cible", "tutoriel-cible-statique");
  });

  miniTutorielElementsSurlignes = [];
}

function miniTutorielAppliquerSurbrillance(cibles = []) {
  miniTutorielNettoyerSurbrillance();

  const elements = miniTutorielResoudreElements(cibles);
  elements.forEach(element => {
    element.classList.add("tutoriel-cible");
    if (window.getComputedStyle(element).position === "static") {
      element.classList.add("tutoriel-cible-statique");
    }
  });

  miniTutorielElementsSurlignes = elements;
  return elements;
}

function miniTutorielEtapeTourCourante() {
  const manche = Number(jeu?.manche?.numero || 1);
  return Math.max(1, Math.min(MINI_TUTORIEL_TOURS, manche));
}

function miniTutorielConstruireContexteTours() {
  const etape = miniTutorielEtapeTourCourante();
  const phase = jeu?.manche?.phase;
  const carteJouee = !!jeu?.ui?.miniTutorielCarteJoueeTour;
  const botLance = !!jeu?.ui?.miniTutorielBotLanceTour;
  const toursTermines = Number(jeu?.ui?.miniTutorielToursTermines || 0);
  const cocher = valeur => (valeur ? "✓" : "□");

  if (etape === 1) {
    return {
      etapeLabel: `Tour ${etape} / ${MINI_TUTORIEL_TOURS}`,
      objectifHtml: "Objectif court terme: jouez 1 carte depuis votre main, puis terminez votre tour.",
      progressionLignes: [
        `${cocher(carteJouee)} Jouer 1 carte depuis la main`,
        `${cocher(phase !== PHASES.TOUR)} Cliquer sur Fin du tour`
      ],
      ressourcesHtml: "Rappel ressources: Actions pour jouer des cartes. Population/Materiaux pour payer des coûts. Progres pour scorer et payer certains remplacements.",
      positionPanneau: "droite-haut",
      cibles:
        phase === PHASES.TOUR
          ? ["#btn-vue-joueur", "#btn-vue-marche", "#btn-fin-tour"]
          : phase === "attente-tour-bot"
            ? ["#btn-vue-bot", "#btn-commencer-tour-bot"]
            : phase === PHASES.SOLSTICE
              ? ["#btn-vue-joueur", "#btn-fin-solstice"]
              : ["#btn-fin-tour"],
      afficherSuivant: false
    };
  }

  if (etape === 2) {
    return {
      etapeLabel: `Tour ${etape} / ${MINI_TUTORIEL_TOURS}`,
      objectifHtml: "Objectif court terme: enchainez votre tour puis lancez le tour du Bot.",
      progressionLignes: [
        `${cocher(phase !== PHASES.TOUR)} Terminer votre tour`,
        `${cocher(botLance)} Lancer le tour du Bot`
      ],
      ressourcesHtml: "Rappel ressources: Progres = points de victoire. Epuisement = activations limitees pendant le tour.",
      positionPanneau: "droite-haut",
      cibles:
        phase === PHASES.TOUR
          ? ["#btn-fin-tour", "#btn-vue-marche"]
          : phase === "attente-tour-bot"
            ? ["#btn-vue-bot", "#btn-commencer-tour-bot"]
            : phase === PHASES.SOLSTICE
              ? ["#btn-vue-joueur", "#btn-fin-solstice"]
              : ["#btn-fin-tour"],
      afficherSuivant: false
    };
  }

  return {
    etapeLabel: `Tour ${etape} / ${MINI_TUTORIEL_TOURS}`,
    objectifHtml: "Objectif court terme: terminez le Solstice de cette manche pour conclure le mini tutoriel.",
    progressionLignes: [
      `${cocher(botLance || phase === PHASES.SOLSTICE)} Atteindre la phase Solstice`,
      `${cocher(toursTermines >= MINI_TUTORIEL_TOURS)} Finaliser la 3e manche guidee`
    ],
    ressourcesHtml: "Rappel ressources: les jetons Progres comptent directement au score final.",
    positionPanneau: "droite-haut",
    cibles:
      phase === PHASES.SOLSTICE
        ? ["#btn-vue-joueur", "#btn-fin-solstice"]
        : phase === "attente-tour-bot"
          ? ["#btn-vue-bot", "#btn-commencer-tour-bot"]
          : ["#btn-fin-tour", "#btn-vue-joueur"],
    afficherSuivant: false
  };
}

function miniTutorielConstruireContexteScript() {
  const index = Number(jeu?.ui?.miniTutorielEtapeScript || 0);
  const total = MINI_TUTORIEL_ETAPES_SCRIPT.length;
  const etape = MINI_TUTORIEL_ETAPES_SCRIPT[index] || MINI_TUTORIEL_ETAPES_SCRIPT[0];

  return {
    etapeLabel: `Introduction ${Math.min(index + 1, total)} / ${total}`,
    objectifHtml: etape?.message || "",
    progressionLignes: ["Cliquez sur Suivant pour passer à l’explication suivante."],
    ressourcesHtml: "",
    positionPanneau: etape?.positionPanneau || "droite-haut",
    cibles: etape?.cibles || [],
    afficherSuivant: true,
    afficherPrecedent: true,
    precedentActif: index > 0
  };
}

function miniTutorielExecuterEtapeScriptSiNecessaire() {
  if (!miniTutorielEstEnIntroduction()) {
    miniTutorielDerniereEtapeScriptRendue = -1;
    return;
  }

  const index = Number(jeu?.ui?.miniTutorielEtapeScript || 0);
  const etape = MINI_TUTORIEL_ETAPES_SCRIPT[index];

  if (!etape) {
    return;
  }

  if (miniTutorielDerniereEtapeScriptRendue === index) {
    return;
  }

  miniTutorielDerniereEtapeScriptRendue = index;

  if (typeof etape.onEnter === "function") {
    etape.onEnter();
  }
}

function miniTutorielPasserEtapeScriptSuivante() {
  if (!miniTutorielEstEnIntroduction()) {
    return;
  }

  const indexActuel = Number(jeu?.ui?.miniTutorielEtapeScript || 0);
  const prochainIndex = indexActuel + 1;

  if (prochainIndex >= MINI_TUTORIEL_ETAPES_SCRIPT.length) {
    miniTutorielTerminerEtRetourAccueil("Tutoriel termine. Retour au menu d’accueil.");
    return;
  }

  jeu.ui.miniTutorielEtapeScript = prochainIndex;
  miniTutorielSynchroniser();
}

function miniTutorielRevenirEtapeScriptPrecedente() {
  if (!miniTutorielEstEnIntroduction()) {
    return;
  }

  const indexActuel = Number(jeu?.ui?.miniTutorielEtapeScript || 0);
  const precedentIndex = indexActuel - 1;

  if (precedentIndex < 0) {
    return;
  }

  jeu.ui.miniTutorielEtapeScript = precedentIndex;
  miniTutorielDerniereEtapeScriptRendue = -1;
  miniTutorielSynchroniser();
}

function miniTutorielMettreAJourActionsPanneau(
  afficherSuivant = false,
  afficherPrecedent = false,
  precedentActif = true
) {
  const boutonPrecedent = getElement("btn-mini-tutoriel-precedent");
  const boutonSuivant = getElement("btn-mini-tutoriel-suivant");

  if (boutonPrecedent) {
    boutonPrecedent.style.display = afficherPrecedent ? "inline-block" : "none";
    boutonPrecedent.disabled = !precedentActif;
  }

  if (boutonSuivant) {
    boutonSuivant.style.display = afficherSuivant ? "inline-block" : "none";
  }
}

function miniTutorielMettreAJourPanneau(contexte) {
  const objectif = getElement("mini-tutoriel-objectif");
  const progression = getElement("mini-tutoriel-progression");
  const ressources = getElement("mini-tutoriel-ressources");

  if (!objectif || !progression || !ressources) {
    return;
  }

  objectif.innerHTML = contexte.objectifHtml || "";
  progression.innerHTML = (contexte.progressionLignes || [])
    .map(ligne => `<div>${ligne}</div>`)
    .join("");
  ressources.innerHTML = contexte.ressourcesHtml || "";
  ressources.style.display = (contexte.ressourcesHtml || "").trim() ? "block" : "none";

  miniTutorielMettreAJourActionsPanneau(
    !!contexte.afficherSuivant,
    !!contexte.afficherPrecedent,
    contexte.precedentActif !== false
  );
}

function miniTutorielAppliquerPositionPanneau(position = "droite-haut") {
  const panneau = getElement("panneau-mini-tutoriel");
  if (!panneau) {
    return;
  }

  panneau.classList.remove(
    "mini-tutoriel-position-gauche-haut",
    "mini-tutoriel-position-centre-bas",
    "mini-tutoriel-position-centre-ecran"
  );

  if (position === "gauche-haut") {
    panneau.classList.add("mini-tutoriel-position-gauche-haut");
    return;
  }

  if (position === "centre-bas") {
    panneau.classList.add("mini-tutoriel-position-centre-bas");
    return;
  }

  if (position === "centre-ecran") {
    panneau.classList.add("mini-tutoriel-position-centre-ecran");
  }
}

function miniTutorielReinitialiserSuiviTour() {
  jeu.ui.miniTutorielCarteJoueeTour = false;
  jeu.ui.miniTutorielBotLanceTour = false;
}

function miniTutorielSynchroniser() {
  if (!miniTutorielEstActif()) {
    miniTutorielMettreFiltreObscurActif(false);
    miniTutorielAppliquerPositionPanneau("droite-haut");
    miniTutorielNettoyerSurbrillance();
    miniTutorielMasquerPanneau();
    miniTutorielMettreAJourActionsPanneau(false, false, false);
    return;
  }

  if (vueAccueilVisible() || jeu?.finPartie?.terminee) {
    miniTutorielMettreFiltreObscurActif(false);
    miniTutorielAppliquerPositionPanneau("droite-haut");
    miniTutorielNettoyerSurbrillance();
    miniTutorielMasquerPanneau();
    miniTutorielMettreAJourActionsPanneau(false, false, false);
    return;
  }

  let contexte;

  if (miniTutorielEstEnIntroduction()) {
    if (Number(jeu?.ui?.miniTutorielEtapeScript || 0) >= MINI_TUTORIEL_ETAPES_SCRIPT.length) {
      jeu.ui.miniTutorielIntroTermine = true;
      miniTutorielDerniereEtapeScriptRendue = -1;
    }
  }

  if (miniTutorielEstEnIntroduction()) {
    miniTutorielExecuterEtapeScriptSiNecessaire();
    miniTutorielAssurerZoomScriptVisible();
    contexte = miniTutorielConstruireContexteScript();
  } else {
    const mancheCourante = Number(jeu?.manche?.numero || 1);
    if (mancheCourante !== Number(jeu?.ui?.miniTutorielDerniereManche || 1)) {
      jeu.ui.miniTutorielDerniereManche = mancheCourante;
      miniTutorielReinitialiserSuiviTour();
    }
    contexte = miniTutorielConstruireContexteTours();
  }

  const elementsSurlignes = miniTutorielAppliquerSurbrillance(contexte.cibles);
  miniTutorielMettreFiltreObscurActif(elementsSurlignes.length > 0, elementsSurlignes);

  miniTutorielAfficherPanneau();
  miniTutorielMettreAJourPanneau(contexte);
  miniTutorielAppliquerPositionPanneau(contexte.positionPanneau);
}

function miniTutorielTerminer(messageFin = "Mini tutoriel termine.") {
  jeu.ui.miniTutorielActif = false;
  jeu.ui.miniTutorielTermine = true;
  jeu.ui.miniTutorielMasque = false;
  jeu.ui.miniTutorielIntroTermine = true;
  miniTutorielDerniereEtapeScriptRendue = -1;
  fermerZoomVerrouille();
  miniTutorielSynchroniser();
  afficherToastUI(messageFin);
}

function miniTutorielTerminerEtRetourAccueil(messageFin = "Tutoriel termine. Retour au menu d’accueil.") {
  miniTutorielTerminer(messageFin);
  masquerUIPartie();
  fermerMenuEchap({ silencieux: true });
  afficherVue("vue-accueil");
}

function miniTutorielNotifierFinDeManche(mancheTerminee = 0) {
  if (!miniTutorielEstActif() || !jeu?.ui?.miniTutorielIntroTermine) {
    return;
  }

  const numero = Number(mancheTerminee || 0);
  if (numero > 0) {
    jeu.ui.miniTutorielToursTermines = Math.max(
      Number(jeu.ui.miniTutorielToursTermines || 0),
      numero
    );
  }

  if (numero >= MINI_TUTORIEL_TOURS) {
    miniTutorielTerminer("Mini tutoriel termine. Vous etes pret pour une partie complete.");
    return;
  }

  miniTutorielReinitialiserSuiviTour();
  miniTutorielSynchroniser();
}

function miniTutorielMarquerCarteJouee() {
  if (!miniTutorielEstActif() || !jeu?.ui?.miniTutorielIntroTermine) {
    return;
  }

  jeu.ui.miniTutorielCarteJoueeTour = true;
  miniTutorielSynchroniser();
}

function miniTutorielMarquerBotLance() {
  if (!miniTutorielEstActif() || !jeu?.ui?.miniTutorielIntroTermine) {
    return;
  }

  jeu.ui.miniTutorielBotLanceTour = true;
  miniTutorielSynchroniser();
}

function initialiserMiniTutorielPartie(actif = false) {
  jeu.ui.miniTutorielActif = !!actif;
  jeu.ui.miniTutorielTermine = false;
  jeu.ui.miniTutorielMasque = false;
  jeu.ui.miniTutorielToursTermines = 0;
  jeu.ui.miniTutorielCarteJoueeTour = false;
  jeu.ui.miniTutorielBotLanceTour = false;
  jeu.ui.miniTutorielDerniereManche = Number(jeu?.manche?.numero || 1);
  jeu.ui.miniTutorielIntroTermine = false;
  jeu.ui.miniTutorielEtapeScript = 0;
  miniTutorielDerniereEtapeScriptRendue = -1;

  miniTutorielSynchroniser();

  if (actif) {
    ouvrirPanneauUI(
      "Mini tutoriel active : parcours guide complet de l’interface et des bases de jeu.",
      [{ label: "OK" }],
      { forcerModal: true }
    );
  }
}

function initialiserMiniTutorielInterface() {
  const boutonPrecedent = getElement("btn-mini-tutoriel-precedent");
  const boutonSuivant = getElement("btn-mini-tutoriel-suivant");

  if (boutonPrecedent) {
    boutonPrecedent.onclick = () => {
      miniTutorielRevenirEtapeScriptPrecedente();
    };
  }

  if (boutonSuivant) {
    boutonSuivant.onclick = () => {
      miniTutorielPasserEtapeScriptSuivante();
    };
  }

  if (!miniTutorielResizeListenerAttache) {
    window.addEventListener("resize", () => {
      if (!miniTutorielEstActif()) {
        return;
      }
      miniTutorielMettreFiltreObscurActif(
        miniTutorielElementsSurlignes.length > 0,
        miniTutorielElementsSurlignes
      );
    });
    miniTutorielResizeListenerAttache = true;
  }

  miniTutorielSynchroniser();
}

/* =========================================================
   48) MENU ESC + LEXIQUE
   ========================================================= */

const lexiqueMenuEntrees = [];
const LEXIQUE_MENU_ENTREES_PAR_DEFAUT = [
  {
    terme: "Action gratuite",
    definition: "Effet que vous résolvez sans dépenser de jeton d’action."
  },
  {
    terme: "Passif",
    definition: "Effet permanent actif tant que la carte reste en jeu."
  },
  {
    terme: "Épuiser",
    definition: "Activer un effet d’épuisement. Chaque activation consomme un jeton d’épuisement."
  },
  {
    terme: "Acquérir",
    definition: "Prendre une carte du marché selon les catégories autorisées et la placer dans votre main. L’Instabilité associée est aussi prise ."
  },
  {
    terme: "Innover",
    definition: "Prendre une carte du marché selon les catégories autorisées et la placer dans votre main sans prendre l’Instabilité associée."
  },
  {
    terme: "Développer",
    definition: "Prendre une carte de votre pile Développement en payant son coût en Population/Matériaux."
  },
  {
    terme: "Archiver",
    definition: "Retirer une carte de vos zones jouables pour la placer dans votre Histoire."
  },
  {
    terme: "Histoire",
    definition: "Zone de cartes archivées. Ces cartes ne sont plus accessibles."
  },
  {
    terme: "Rappeler",
    definition: "Retirer une carte de votre tableau pour la remettre dans votre main."
  },
  {
    terme: "Réserver",
    definition: "Glisser une carte de votre main sous la carte cible. Une carte réservée n’est pas considérée comme étant dans votre zone de jeu, bien qu’elle vous rapporte des points à la fin de la partie. Vous ne pouvez pas activer ses effets. Si une carte réservée est située sous une carte qui est abandonnée, rappelée, exilée ou archivée, cet effet s’applique aussi à la carte réservée."
  },
  {
    terme: "Exiler",
    definition: "Retirer une carte du marché et la placer dans la pile Exil."
  },
  {
    terme: "Abandonner",
    definition: "Retirer une carte persistante de votre tableau et la placer dans votre défausse."
  },
  {
    terme: "Piocher X cartes",
    definition: "Prendre X cartes du dessus de votre deck pour les ajouter à votre main. Si le deck ne contient pas assez de carte, procéder à son rafraîchissement puis piocher les cartes restantes."
  },
  {
    terme: "Piocher X carte, si possible",
    definition: "Prendre X cartes du dessus de votre deck pour les ajouter à votre main. Si le deck ne contient pas assez de carte, ne procédez PAS au rafraîchissement du deck."
  },
  
  {
    terme: "Récupérer",
    definition: "Choisissez une carte dans la pile correspondante et ajoutez-la à votre main ou dans la zone de jeu indiquée. Si vous devez récupérer une carte de votre défausse ou de votre Histoire, choisissez la carte."
  },
  {
    terme: "Renvoyer",
    definition: "Remettre une carte dans sa pile d’origine (souvent Instabilité)."
  },
  {
    terme: "Instabilité",
    definition: "Carte parasite qui encombre votre deck et peut provoquer une défaite immédiate si la pile est vide."
  },
  {
    terme: "Pacifier",
    definition: "Action spéciale de début de tour qui renvoie les Instabilités de votre main puis lance le Nettoyage."
  },
];

const ALIAS_TERMES_LEXIQUE_MOT_CLE = Object.freeze({
  abandonne: "abandonner",
  abandonnee: "abandonner",
  abandonnez: "abandonner",
  acquerez: "acquerir",
  archivee: "archiver",
  archivees: "archiver",
  archivez: "archiver",
  exil: "exiler",
  exilee: "exiler",
  exilez: "exiler",
  innovez: "innover",
  piocher: "piocher x cartes",
  rappelle: "rappeler",
  rappelez: "rappeler",
  recupere: "recuperer",
  recuperee: "recuperer",
  recuperez: "recuperer",
  renvoyez: "renvoyer",
  reservee: "reserver",
  reservez: "reserver"
});

const ID_TOOLTIP_LEXIQUE_MOT_CLE = "tooltip-lexique-mot-cle";
const indexLexiqueTooltipsParTerme = new Map();
let tooltipLexiqueMotCleElement = null;
let tooltipLexiqueMotCleActif = null;
let tooltipsMotsClesEffetInitialises = false;

function normaliserTermeLexiqueTooltip(terme = "") {
  return normaliserTexteSansAccents(terme).replace(/\s+/g, " ").trim();
}

function obtenirEntreesLexiqueTooltip() {
  if (Array.isArray(lexiqueMenuEntrees) && lexiqueMenuEntrees.length > 0) {
    return lexiqueMenuEntrees;
  }

  if (Array.isArray(LEXIQUE_MENU_ENTREES_PAR_DEFAUT)) {
    return LEXIQUE_MENU_ENTREES_PAR_DEFAUT;
  }

  return [];
}

function reconstruireIndexLexiqueTooltips() {
  indexLexiqueTooltipsParTerme.clear();

  obtenirEntreesLexiqueTooltip().forEach(entree => {
    const cle = normaliserTermeLexiqueTooltip(entree?.terme || "");
    if (!cle || indexLexiqueTooltipsParTerme.has(cle)) {
      return;
    }

    indexLexiqueTooltipsParTerme.set(cle, entree);
  });
}

function obtenirEntreeLexiqueTooltipParTerme(terme = "") {
  const cle = normaliserTermeLexiqueTooltip(terme);
  if (!cle) {
    return null;
  }

  if (indexLexiqueTooltipsParTerme.size === 0) {
    reconstruireIndexLexiqueTooltips();
  }

  return indexLexiqueTooltipsParTerme.get(cle) || null;
}

function trouverEntreeLexiqueTooltipParApproximation(terme = "") {
  const termeNormalise = normaliserTermeLexiqueTooltip(terme);
  if (!termeNormalise) {
    return null;
  }

  const entrees = obtenirEntreesLexiqueTooltip();

  for (const entree of entrees) {
    const termeEntree = normaliserTermeLexiqueTooltip(entree?.terme || "");
    if (!termeEntree) {
      continue;
    }

    if (
      termeEntree.startsWith(`${termeNormalise} `) ||
      termeEntree.endsWith(` ${termeNormalise}`) ||
      termeEntree.includes(` ${termeNormalise} `)
    ) {
      return entree;
    }
  }

  return null;
}

function obtenirTermeLexiqueTooltipPourMotCle(motCle = "") {
  const motNormalise = normaliserTermeLexiqueTooltip(motCle);
  if (!motNormalise) {
    return "";
  }

  const alias = ALIAS_TERMES_LEXIQUE_MOT_CLE[motNormalise] || motNormalise;
  const entree =
    obtenirEntreeLexiqueTooltipParTerme(alias) ||
    (alias !== motNormalise
      ? obtenirEntreeLexiqueTooltipParTerme(motNormalise)
      : null) ||
    trouverEntreeLexiqueTooltipParApproximation(alias) ||
    (alias !== motNormalise
      ? trouverEntreeLexiqueTooltipParApproximation(motNormalise)
      : null);

  return entree?.terme || "";
}

function vueAccueilVisible() {
  const vueAccueil = getElement("vue-accueil");
  return !!(vueAccueil && !vueAccueil.classList.contains("vue-cachee"));
}

function menuEchapAutorise() {
  return !vueAccueilVisible();
}

function extraireElementMotCleTooltip(cible) {
  if (!(cible instanceof Element)) {
    return null;
  }

  return cible.closest(".mot-cle-tooltip[data-terme-lexique]");
}

function obtenirElementTooltipLexiqueMotCle() {
  if (tooltipLexiqueMotCleElement && document.body?.contains(tooltipLexiqueMotCleElement)) {
    return tooltipLexiqueMotCleElement;
  }

  const tooltip = document.createElement("div");
  tooltip.id = ID_TOOLTIP_LEXIQUE_MOT_CLE;
  tooltip.className = "tooltip-lexique-mot-cle";
  tooltip.setAttribute("role", "tooltip");
  tooltip.setAttribute("aria-hidden", "true");
  tooltip.dataset.position = "haut";

  const terme = document.createElement("div");
  terme.className = "tooltip-lexique-terme";

  const definition = document.createElement("div");
  definition.className = "tooltip-lexique-definition";

  tooltip.appendChild(terme);
  tooltip.appendChild(definition);
  document.body?.appendChild(tooltip);

  tooltipLexiqueMotCleElement = tooltip;
  return tooltip;
}

function mettreAJourContenuTooltipLexiqueMotCle(tooltip, entree) {
  if (!tooltip || !entree) {
    return;
  }

  const termeElement = tooltip.querySelector(".tooltip-lexique-terme");
  const definitionElement = tooltip.querySelector(".tooltip-lexique-definition");

  if (!termeElement || !definitionElement) {
    return;
  }

  termeElement.textContent = entree.terme;
  definitionElement.textContent = entree.definition;
}

function positionnerTooltipLexiqueMotCle(elementMotCle, tooltip) {
  if (!elementMotCle || !tooltip) {
    return;
  }

  const margeEcran = 10;
  const ecartVertical = 12;
  const rectMotCle = elementMotCle.getBoundingClientRect();
  const rectTooltip = tooltip.getBoundingClientRect();

  let gauche = rectMotCle.left + (rectMotCle.width - rectTooltip.width) / 2;
  gauche = Math.max(margeEcran, Math.min(gauche, window.innerWidth - rectTooltip.width - margeEcran));

  let haut = rectMotCle.top - rectTooltip.height - ecartVertical;
  let position = "haut";

  if (haut < margeEcran) {
    haut = rectMotCle.bottom + ecartVertical;
    position = "bas";
  }

  if (haut + rectTooltip.height > window.innerHeight - margeEcran) {
    haut = Math.max(margeEcran, window.innerHeight - rectTooltip.height - margeEcran);
  }

  tooltip.style.left = `${Math.round(gauche)}px`;
  tooltip.style.top = `${Math.round(haut)}px`;
  tooltip.dataset.position = position;
}

function afficherTooltipLexiqueMotCleDepuisElement(elementMotCle) {
  if (!elementMotCle || !document.body?.contains(elementMotCle)) {
    return;
  }

  const termeCible = elementMotCle.getAttribute("data-terme-lexique") || "";
  const entree =
    obtenirEntreeLexiqueTooltipParTerme(termeCible) ||
    trouverEntreeLexiqueTooltipParApproximation(termeCible);

  if (!entree) {
    masquerTooltipLexiqueMotCle();
    return;
  }

  const tooltip = obtenirElementTooltipLexiqueMotCle();

  if (tooltipLexiqueMotCleActif && tooltipLexiqueMotCleActif !== elementMotCle) {
    tooltipLexiqueMotCleActif.removeAttribute("aria-describedby");
  }

  tooltipLexiqueMotCleActif = elementMotCle;
  tooltipLexiqueMotCleActif.setAttribute("aria-describedby", ID_TOOLTIP_LEXIQUE_MOT_CLE);

  mettreAJourContenuTooltipLexiqueMotCle(tooltip, entree);
  tooltip.classList.add("est-visible");
  tooltip.setAttribute("aria-hidden", "false");
  positionnerTooltipLexiqueMotCle(elementMotCle, tooltip);
}

function masquerTooltipLexiqueMotCle({ conserverElementActif = false } = {}) {
  if (tooltipLexiqueMotCleElement) {
    tooltipLexiqueMotCleElement.classList.remove("est-visible");
    tooltipLexiqueMotCleElement.setAttribute("aria-hidden", "true");
  }

  if (!conserverElementActif && tooltipLexiqueMotCleActif) {
    tooltipLexiqueMotCleActif.removeAttribute("aria-describedby");
    tooltipLexiqueMotCleActif = null;
  }
}

function repositionnerTooltipLexiqueMotCleActif() {
  if (
    !tooltipLexiqueMotCleElement ||
    !tooltipLexiqueMotCleElement.classList.contains("est-visible") ||
    !tooltipLexiqueMotCleActif
  ) {
    return;
  }

  if (!document.body?.contains(tooltipLexiqueMotCleActif)) {
    masquerTooltipLexiqueMotCle();
    return;
  }

  positionnerTooltipLexiqueMotCle(tooltipLexiqueMotCleActif, tooltipLexiqueMotCleElement);
}

function gererSurvolMotCleTooltip(event) {
  const elementMotCle = extraireElementMotCleTooltip(event.target);
  if (!elementMotCle) {
    return;
  }

  afficherTooltipLexiqueMotCleDepuisElement(elementMotCle);
}

function gererSortieSurvolMotCleTooltip(event) {
  const elementSortant = extraireElementMotCleTooltip(event.target);
  if (!elementSortant) {
    return;
  }

  const elementEntrant = extraireElementMotCleTooltip(event.relatedTarget);

  if (elementEntrant) {
    if (elementEntrant !== elementSortant) {
      afficherTooltipLexiqueMotCleDepuisElement(elementEntrant);
    }
    return;
  }

  if (document.activeElement === elementSortant) {
    return;
  }

  masquerTooltipLexiqueMotCle();
}

function gererFocusMotCleTooltip(event) {
  const elementMotCle = extraireElementMotCleTooltip(event.target);
  if (!elementMotCle) {
    return;
  }

  afficherTooltipLexiqueMotCleDepuisElement(elementMotCle);
}

function gererPerteFocusMotCleTooltip(event) {
  const elementSortant = extraireElementMotCleTooltip(event.target);
  if (!elementSortant) {
    return;
  }

  const elementEntrant = extraireElementMotCleTooltip(event.relatedTarget);

  if (elementEntrant) {
    afficherTooltipLexiqueMotCleDepuisElement(elementEntrant);
    return;
  }

  masquerTooltipLexiqueMotCle();
}

function gererRaccourciFermetureTooltipMotCle(event) {
  if (event.key !== "Escape") {
    return;
  }

  const tooltipVisible = tooltipLexiqueMotCleElement?.classList.contains("est-visible");
  if (!tooltipVisible) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  masquerTooltipLexiqueMotCle();
}

function initialiserTooltipsMotsClesEffet() {
  if (tooltipsMotsClesEffetInitialises) {
    return;
  }

  tooltipsMotsClesEffetInitialises = true;
  document.addEventListener("mouseover", gererSurvolMotCleTooltip);
  document.addEventListener("mouseout", gererSortieSurvolMotCleTooltip);
  document.addEventListener("focusin", gererFocusMotCleTooltip);
  document.addEventListener("focusout", gererPerteFocusMotCleTooltip);
  document.addEventListener("keydown", gererRaccourciFermetureTooltipMotCle, true);
  window.addEventListener("resize", repositionnerTooltipLexiqueMotCleActif);
  window.addEventListener("scroll", repositionnerTooltipLexiqueMotCleActif, true);
}

function mettreAJourContenuLexiqueMenu() {
  const conteneur = getElement("menu-lexique-contenu");
  if (!conteneur) {
    return;
  }

  conteneur.innerHTML = "";

  if (!Array.isArray(lexiqueMenuEntrees) || lexiqueMenuEntrees.length === 0) {
    const message = document.createElement("p");
    message.className = "menu-lexique-vide";
    message.textContent = "Les definitions seront ajoutees ici.";
    conteneur.appendChild(message);
    return;
  }

  const liste = document.createElement("dl");
  liste.className = "menu-lexique-liste";

  lexiqueMenuEntrees.forEach(entree => {
    const terme = document.createElement("dt");
    terme.className = "menu-lexique-terme";
    terme.textContent = entree.terme;

    const definition = document.createElement("dd");
    definition.className = "menu-lexique-definition";
    definition.textContent = entree.definition;

    liste.appendChild(terme);
    liste.appendChild(definition);
  });

  conteneur.appendChild(liste);
}

function trierLexiqueMenuAlphabetique() {
  lexiqueMenuEntrees.sort((a, b) =>
    String(a?.terme || "").localeCompare(
      String(b?.terme || ""),
      "fr",
      { sensitivity: "base" }
    )
  );
}

function definirLexiqueMenu(entrees = []) {
  lexiqueMenuEntrees.length = 0;

  if (Array.isArray(entrees)) {
    entrees.forEach(entree => {
      if (!entree || typeof entree !== "object") {
        return;
      }

      const terme = String(entree.terme || "").trim();
      const definition = String(entree.definition || "").trim();

      if (!terme || !definition) {
        return;
      }

      lexiqueMenuEntrees.push({ terme, definition });
    });
  }

  trierLexiqueMenuAlphabetique();
  reconstruireIndexLexiqueTooltips();
  mettreAJourContenuLexiqueMenu();
}

function ajouterEntreeLexiqueMenu(terme, definition) {
  const termeNormalise = String(terme || "").trim();
  const definitionNormalisee = String(definition || "").trim();

  if (!termeNormalise || !definitionNormalisee) {
    return;
  }

  lexiqueMenuEntrees.push({
    terme: termeNormalise,
    definition: definitionNormalisee
  });

  trierLexiqueMenuAlphabetique();
  reconstruireIndexLexiqueTooltips();
  mettreAJourContenuLexiqueMenu();
}

function initialiserLexiqueMenuParDefaut() {
  if (Array.isArray(lexiqueMenuEntrees) && lexiqueMenuEntrees.length > 0) {
    return;
  }

  definirLexiqueMenu(LEXIQUE_MENU_ENTREES_PAR_DEFAUT);
}

function ouvrirMenuEchap() {
  if (!menuEchapAutorise()) {
    return;
  }

  const panneau = getElement("panneau-menu-echap");
  if (!panneau || jeu?.ui?.menuEchapOuvert) {
    return;
  }

  fermerZoomTemporaire();
  mettreAJourDisponibiliteBoutonsSauvegarde();
  mettreAJourContenuLexiqueMenu();
  mettreAJourAffichageMenuAudio();

  panneau.classList.remove("panneau-ui-cache");
  panneau.classList.add("panneau-ui-ouvert");
  panneau.setAttribute("aria-hidden", "false");

  if (jeu?.ui) {
    jeu.ui.menuEchapOuvert = true;
  }

  getElement("btn-fermer-menu-echap")?.focus();
}

function fermerMenuEchap({ silencieux = false } = {}) {
  const panneau = getElement("panneau-menu-echap");
  if (!panneau) {
    return;
  }

  panneau.classList.remove("panneau-ui-ouvert");
  panneau.classList.add("panneau-ui-cache");
  panneau.setAttribute("aria-hidden", "true");

  if (jeu?.ui) {
    jeu.ui.menuEchapOuvert = false;
  }

  if (!silencieux) {
    mettreAJourLibelleBoutonMusique();
  }
}

function basculerMenuEchap() {
  if (jeu?.ui?.menuEchapOuvert) {
    fermerMenuEchap();
    return;
  }

  ouvrirMenuEchap();
}

function initialiserMenuEchap() {
  const panneau = getElement("panneau-menu-echap");
  const btnFermer = getElement("btn-fermer-menu-echap");

  if (!panneau) {
    return;
  }

  if (btnFermer) {
    btnFermer.addEventListener("click", () => {
      fermerMenuEchap();
    });
  }

  panneau.addEventListener("click", event => {
    if (event.target === panneau) {
      fermerMenuEchap();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key !== "Escape") {
      return;
    }

    if (jeu?.ui?.menuEchapOuvert) {
      event.preventDefault();
      event.stopPropagation();
      fermerMenuEchap();
      return;
    }

    if (
      !menuEchapAutorise() ||
      jeu?.ui?.defausseOuverte ||
      jeu?.ui?.zoomVerrouille ||
      jeu?.ui?.regardRenommeeActif ||
      jeu?.ui?.panneauUIOuvert ||
      jeu?.ui?.modeInteraction ||
      jeu?.ui?.selectionCarteActive ||
      jeu?.ui?.selectionMarcheActive
    ) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    basculerMenuEchap();
  }, true);

  initialiserLexiqueMenuParDefaut();
  window.definirLexiqueMenu = definirLexiqueMenu;
  window.ajouterEntreeLexiqueMenu = ajouterEntreeLexiqueMenu;
  window.definirMotsClesEffetEnGras = definirMotsClesEffetEnGras;
  mettreAJourContenuLexiqueMenu();
}

/* =========================================================
   49) MUSIQUE
   ========================================================= */

const playlistMusique = [
  "assets/audio/theme-Romains.mp3",
  "assets/audio/theme-Vikings.mp3",
  "assets/audio/theme-Perses.mp3",
  "assets/audio/theme-Carthaginois.mp3",
  "assets/audio/theme-Macedoniens.mp3",
  "assets/audio/theme-Scythes.mp3",
  "assets/audio/Bronze Caravan.mp3",
  "assets/audio/Harbor of Cypresses.mp3",
  "assets/audio/Ali Khattab - Sueño Claro - Nuevos Medios (192k).mp3",
  "assets/audio/Ali Khattab - A...diós - Nuevos Medios (192k).mp3"
];

const VOLUME_MUSIQUE_PAR_DEFAUT = 0.4;

let indexMusiqueActuelle = -1;
let musiqueInitialisee = false;
let musiqueFinPartieActive = false;
let audioFinPartie = null;
let volumeMusique = VOLUME_MUSIQUE_PAR_DEFAUT;
let musiqueMuette = false;
let fileIndicesMusiqueSuivante = [];

function normaliserVolumeMusique(valeur) {
  const nombre = Number(valeur);
  if (!Number.isFinite(nombre)) {
    return VOLUME_MUSIQUE_PAR_DEFAUT;
  }

  if (nombre <= 0) {
    return 0;
  }

  if (nombre >= 1) {
    return 1;
  }

  return nombre;
}

function obtenirVolumeEffectifMusique() {
  if (musiqueMuette) {
    return 0;
  }

  return volumeMusique;
}

function appliquerPreferencesAudioMusique() {
  const audio = getElement("musique-fond");
  const volume = obtenirVolumeEffectifMusique();

  if (audio) {
    audio.volume = volume;
    audio.muted = musiqueMuette;
  }

  if (audioFinPartie) {
    audioFinPartie.volume = volume;
    audioFinPartie.muted = musiqueMuette;
  }
}

function mettreAJourAffichageMenuAudio() {
  const slider = getElement("menu-volume-musique");
  const valeur = getElement("menu-volume-musique-valeur");
  const caseMuet = getElement("menu-musique-muet");
  const pourcentage = Math.round(volumeMusique * 100);

  if (slider) {
    slider.value = String(pourcentage);
  }

  if (valeur) {
    valeur.textContent = `${pourcentage}%`;
  }

  if (caseMuet) {
    caseMuet.checked = musiqueMuette;
  }
}

function mettreAJourLibelleBoutonMusique() {
  const bouton = getElement("btn-musique");
  const audio = getElement("musique-fond");

  if (!bouton) {
    return;
  }

  if (musiqueMuette) {
    bouton.textContent = "🔇 Muet";
    return;
  }

  if (audio?.paused) {
    bouton.textContent = "▶️ Musique";
    return;
  }

  bouton.textContent = "🔊 Musique";
}

function definirVolumeMusiqueDepuisPourcentage(valeurPourcentage) {
  const nombre = Number(valeurPourcentage);
  if (!Number.isFinite(nombre)) {
    return;
  }

  const volumeNormalise = Math.min(100, Math.max(0, nombre)) / 100;
  volumeMusique = normaliserVolumeMusique(volumeNormalise);

  if (volumeMusique > 0 && musiqueMuette) {
    musiqueMuette = false;
  }

  appliquerPreferencesAudioMusique();
  mettreAJourAffichageMenuAudio();
  mettreAJourLibelleBoutonMusique();
}

function definirMuetMusique(estMuet) {
  musiqueMuette = !!estMuet;
  appliquerPreferencesAudioMusique();
  mettreAJourAffichageMenuAudio();
  mettreAJourLibelleBoutonMusique();
}

function arreterMusiquePrincipale() {
  const audio = getElement("musique-fond");

  if (!audio) {
    return;
  }

  audio.pause();
  audio.currentTime = 0;
  mettreAJourLibelleBoutonMusique();
}

function obtenirCheminMusiqueFinPartie(resultat) {
  if (resultat === "victoire") {
    return "assets/themes/victoire.mp3";
  }

  if (resultat === "defaite") {
    return "assets/themes/defaite.mp3";
  }

  return "";
}

function jouerMusiqueFinPartie(resultat) {
  const chemin = obtenirCheminMusiqueFinPartie(resultat);

  if (!chemin) {
    return;
  }

  musiqueFinPartieActive = true;
  arreterMusiquePrincipale();

  if (!audioFinPartie) {
    audioFinPartie = new Audio();
    audioFinPartie.loop = false;
  }

  if (audioFinPartie.src !== new URL(chemin, window.location.href).href) {
    audioFinPartie.src = chemin;
  }

  appliquerPreferencesAudioMusique();
  audioFinPartie.currentTime = 0;
  audioFinPartie.play().catch(() => {});
}

function arreterMusiqueFinPartie() {
  if (!audioFinPartie) {
    return;
  }

  audioFinPartie.pause();
  audioFinPartie.currentTime = 0;
  musiqueFinPartieActive = false;
}

function choisirIndexAleatoireDifferant(taille, indexExclu = -1) {
  if (taille <= 0) {
    return -1;
  }

  if (taille === 1) {
    return 0;
  }

  let index = indexExclu;

  while (index === indexExclu) {
    index = Math.floor(Math.random() * taille);
  }

  return index;
}

function melangerTableau(array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function reinitialiserFileMusiqueSuivante(indexExclu = -1) {
  if (!Array.isArray(playlistMusique) || playlistMusique.length === 0) {
    fileIndicesMusiqueSuivante = [];
    return;
  }

  const indices = [];

  for (let i = 0; i < playlistMusique.length; i += 1) {
    if (i !== indexExclu) {
      indices.push(i);
    }
  }

  melangerTableau(indices);
  fileIndicesMusiqueSuivante = indices;
}

function extraireProchainIndexMusiqueSuivante() {
  if (fileIndicesMusiqueSuivante.length === 0) {
    reinitialiserFileMusiqueSuivante(indexMusiqueActuelle);
  }

  while (fileIndicesMusiqueSuivante.length > 0) {
    const index = fileIndicesMusiqueSuivante.shift();
    if (index !== indexMusiqueActuelle) {
      return index;
    }
  }

  return -1;
}

function jouerMusiqueParIndex(index, options = {}) {
  const audio = getElement("musique-fond");

  if (musiqueFinPartieActive || jeu?.finPartie?.terminee) {
    return;
  }

  if (!audio || !Array.isArray(playlistMusique) || playlistMusique.length === 0) {
    return;
  }

  if (index < 0 || index >= playlistMusique.length) {
    return;
  }

  indexMusiqueActuelle = index;
  audio.src = playlistMusique[indexMusiqueActuelle];
  appliquerPreferencesAudioMusique();

  if (options.reinitialiserCycleSuivante !== false) {
    reinitialiserFileMusiqueSuivante(indexMusiqueActuelle);
  }

  audio.play().then(() => {
    mettreAJourLibelleBoutonMusique();
  }).catch(() => {});
}

function jouerMusiqueAleatoire() {
  const nouvelIndex = choisirIndexAleatoireDifferant(
    playlistMusique.length,
    indexMusiqueActuelle
  );

  if (nouvelIndex === -1) {
    return;
  }

  jouerMusiqueParIndex(nouvelIndex, { reinitialiserCycleSuivante: true });
}

function jouerMusiqueSuivanteSansRepetition() {
  if (!Array.isArray(playlistMusique) || playlistMusique.length === 0) {
    return;
  }

  if (playlistMusique.length === 1) {
    jouerMusiqueParIndex(0, { reinitialiserCycleSuivante: false });
    return;
  }

  let nouvelIndex = extraireProchainIndexMusiqueSuivante();

  if (nouvelIndex === -1) {
    reinitialiserFileMusiqueSuivante(indexMusiqueActuelle);
    nouvelIndex = extraireProchainIndexMusiqueSuivante();
  }

  if (nouvelIndex === -1) {
    return;
  }

  jouerMusiqueParIndex(nouvelIndex, { reinitialiserCycleSuivante: false });
}

function passerMusiqueSuivante() {
  jouerMusiqueSuivanteSansRepetition();
}

function initialiserMusique() {
  const audio = getElement("musique-fond");

  if (!audio) {
    return;
  }

  appliquerPreferencesAudioMusique();
  mettreAJourAffichageMenuAudio();
  mettreAJourLibelleBoutonMusique();

  audio.addEventListener("ended", () => {
    if (musiqueFinPartieActive || jeu?.finPartie?.terminee) {
      return;
    }

    jouerMusiqueSuivanteSansRepetition();
  });

  function lancerMusiqueUneFois() {
    if (musiqueInitialisee) {
      return;
    }

    musiqueInitialisee = true;
    jouerMusiqueAleatoire();

    document.removeEventListener("click", lancerMusiqueUneFois);
    document.removeEventListener("keydown", lancerMusiqueUneFois);
  }

  document.addEventListener("click", lancerMusiqueUneFois);
  document.addEventListener("keydown", lancerMusiqueUneFois);
}

function initialiserControleMusique() {
  const audio = getElement("musique-fond");
  const boutonToggle = getElement("btn-musique");
  const boutonSuivante = getElement("btn-musique-suivante");
  const sliderVolume = getElement("menu-volume-musique");
  const caseMuet = getElement("menu-musique-muet");

  if (musiqueFinPartieActive || jeu?.finPartie?.terminee) {
    return;
  }

  if (!audio) {
    return;
  }

  if (boutonToggle) {
    boutonToggle.addEventListener("click", () => {
      if (!musiqueInitialisee) {
        musiqueInitialisee = true;
        jouerMusiqueAleatoire();
        return;
      }

      if (musiqueFinPartieActive || jeu?.finPartie?.terminee) {
        return;
      }

      if (audio.paused) {
        audio.play().then(() => {
          mettreAJourLibelleBoutonMusique();
        }).catch(() => {});
      } else {
        audio.pause();
        mettreAJourLibelleBoutonMusique();
      }
    });
  }

  if (boutonSuivante) {
    boutonSuivante.addEventListener("click", () => {
      if (!musiqueInitialisee) {
        musiqueInitialisee = true;
      }

      passerMusiqueSuivante();
    });
  }

  if (sliderVolume) {
    sliderVolume.addEventListener("input", event => {
      definirVolumeMusiqueDepuisPourcentage(event.target.value);
    });
  }

  if (caseMuet) {
    caseMuet.addEventListener("change", event => {
      definirMuetMusique(event.target.checked);
    });
  }

  mettreAJourAffichageMenuAudio();
  mettreAJourLibelleBoutonMusique();
}


/* =========================================================
   50) INITIALISATION GLOBALE
   ========================================================= */

function initialiserAffichagesInitiaux() {
  afficherHautMarche();
  afficherBarreIndicateurs();
  afficherBasMarche();
  afficherZoneJoueur();
  afficherPileExil();
}

function initialiserInterfaces() {
  initialiserRaccourcisClavier();
  initialiserZoomCartes();
  initialiserAjustementNomsCartes();
  initialiserBoutonsTour();
  const btnReprendreSauvegarde = getElement("btn-reprendre-sauvegarde");
  if (btnReprendreSauvegarde) {
    btnReprendreSauvegarde.onclick = () => {
      reprendrePartieSauvegardee();
    };
  }
  mettreAJourDisponibiliteBoutonsSauvegarde();
  initialiserFermetureZoomVerrouille();
  initialiserPanneauDefausse();
  initialiserPanneauEtoile();
  initialiserPanneauHistoire();
  initialiserPanneauArchiver();
  initialiserPanneauExil();
  initialiserMusique();
  initialiserControleMusique();
  initialiserTooltipsMotsClesEffet();
  initialiserMenuEchap();
  initialiserMiniTutorielInterface();
   initialiserOuverturePileEtoile();
     brancherClicHistoireBot();
     initialiserBoutonSuivantBot();
     brancherBoutonsOptionsDebutTour();
     const btnFermerDefausse = getElement("btn-fermer-defausse");

if (btnFermerDefausse) {
  btnFermerDefausse.onclick = () => {
    debugLog("DEBUG ERIK | clic sur btn-fermer-defausse");
    fermerVueDefausse();
  };
}
const btnFermerDeckNation = getElement("btn-fermer-deck-nation");
if (btnFermerDeckNation) {
  btnFermerDeckNation.onclick = () => {
    fermerVueDeckNation();
  };
}

const btnFermerDeckJoueur = getElement("btn-fermer-deck-joueur");
if (btnFermerDeckJoueur) {
  btnFermerDeckJoueur.onclick = () => {
    fermerVueDeckJoueur();
  };
}

  
 
}

function initialiserDonneesJeu() {
  reinitialiserFeedbackCompteursJoueur();
  initialiserPilesCommunes();
  construirePilesNation();
  construireHautMarche();
  construireBasMarche();
  peuplerBasMarche();
  construireZoneJoueurNation();
  
}

function initialiserJeu() {
  desactiverScrollPagesScore();
  initialiserDonneesJeu();
  initialiserAffichagesInitiaux();
  planifierAjustementEchelleInterface({ avecRelance: true });
  initialiserDebugCartes();
  brancherBoutonsNavigationVues();
}

window.addEventListener("load", function () {
  initialiserChoixNations();
  afficherVue("vue-accueil");
  initialiserInterfaces();

  setTimeout(function () {
    planifierAjustementEchelleInterface({ avecRelance: true });
  }, 50);
});

window.addEventListener("resize", () => {
  planifierAjustementEchelleInterface();
});

function slugNationPourFond(nomNation) {
  return String(nomNation || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

function obtenirFondFinDePartie(resultat) {
  const nation = slugNationPourFond(configurationPartie?.nationJoueur);
  const nationsAvecFondDefaite = new Set([
    "carthaginois",
    "celtes",
    "grecs",
    "macedoniens",
    "perses",
    "romains",
    "scythes",
    "vikings"
  ]);
  const nationsAvecFondVictoire = new Set(["celtes", "romains"]);

  if (resultat === "defaite") {
    if (nationsAvecFondDefaite.has(nation)) {
      return `assets/backgrounds/fond-defaite-${nation}.png`;
    }
    return "assets/backgrounds/fond-accueil.jpg";
  }

  if (resultat === "victoire") {
    if (nationsAvecFondVictoire.has(nation)) {
      return `assets/backgrounds/fond-victoire-${nation}.png`;
    }
    return "assets/backgrounds/fond-accueil.jpg";
  }

  return "";
}

function afficherEcranFinDePartie() {
  const fond = obtenirFondFinDePartie(jeu.finPartie.resultat);
  const estDefaite = jeu.finPartie.resultat === "defaite";
  const titreHtml = estDefaite
    ? ""
    : `
        <h1 style="
          font-size: 72px;
          margin: 0 0 20px 0;
          text-transform: uppercase;
          letter-spacing: 2px;
        ">
          Victoire
        </h1>
      `;
  const margeHautRaison = estDefaite ? "120px" : "0";

  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = `
    <div id="ecran-fin-partie" style="
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: url('${fond}');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      position: relative;
    ">
      <div style="
        position:absolute;
        inset:0;
        background: rgba(0,0,0,0.35);
      "></div>

      <div style="
        position: relative;
        z-index: 1;
        text-align: center;
        color: white;
        padding: 40px;
        max-width: 900px;
      ">
        ${titreHtml}

        <p style="
          font-size: 24px;
          margin: ${margeHautRaison} 0 30px 0;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.7);
        ">
          ${jeu.finPartie.raison || ""}
        </p>

        <button onclick="location.reload()" style="
          padding: 14px 28px;
          font-size: 20px;
          cursor: pointer;
        ">
          Rejouer
        </button>
      </div>
    </div>
  `;
}

// =========================================================
//  FIN DU FICHIER
// =========================================================


