export const projects = [
  {
    id: "grimoire",
    title: "Mon Vieux Grimoire",
    shortDescription:
      "API REST sécurisée pour une plateforme de notation de livres.",
    description:
      "API back-end développée avec Node.js, Express et MongoDB pour une plateforme de référencement et de notation de livres.",
    context:
      "Une chaîne de librairies à Lille souhaite lancer Mon Vieux Grimoire, une plateforme permettant aux utilisateurs d’ajouter des livres et de leur attribuer une note publique. Le front-end ayant été développé en React, ma mission consistait à concevoir toute l’API back-end gérant les données et les interactions avec l’application.",
    objectives: [
      "Développer une API REST sécurisée",
      "Gérer les utilisateurs, livres et notations",
      "Implémenter les opérations CRUD pour les livres",
      "Respecter les bonnes pratiques de sécurité et de Green Code",
    ],
    stack: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Bcrypt",
      "Multer",
      "Sharp",
    ],
    results: [
      "API sécurisée avec authentification JWT",
      "Opérations CRUD complètes sur les livres",
      "Optimisation des images pour réduire le poids des fichiers",
      "Système de notation calculant automatiquement la moyenne des avis",
    ],
    improvements: [
      "Ajouter une pagination pour la liste des livres",
      "Mettre en place des tests automatisés",
    ],
    github: "https://github.com/sylvie-trl/vieuxGrimoire",
    demo: null,

    image: "/images/projects/grimoire.png",
  },
  {
    id: "kasa",
    title: "Kasa",
    shortDescription:
      "Application front-end développée avec React pour une plateforme de location d’appartements entre particuliers.",
    description:
      "Développement d’une interface permettant d’afficher des annonces immobilières et leurs détails à partir de maquettes fournies.",
    context:
      "Kasa est une plateforme de location d’appartements entre particuliers qui publie plusieurs centaines d’annonces chaque jour. Dans le cadre d’une refonte complète du site web, l’ancienne application développée en ASP.NET a été remplacée par une interface moderne en React basée sur de nouvelles maquettes fournies par un designer.",
    objectives: [
      "Développer une application front-end en React",
      "Structurer l’interface en composants réutilisables",
      "Implémenter la navigation entre les pages avec React Router",
      "Intégrer fidèlement les maquettes fournies par le designer",
    ],
    stack: ["React", "React Router", "JavaScript", "CSS", "HTML"],
    results: [
      "Application développée avec React et une architecture de composants",
      "Navigation fluide entre les pages grâce à React Router",
      "Interface responsive et fidèle aux maquettes",
      "Code plus maintenable et évolutif que l’ancienne application",
    ],
    improvements: [
      "Ajouter un système de recherche ou de filtrage",
      "Connecter l’application à une API réelle",
    ],
    github: "https://github.com/sylvie-trl/Kasa",
    demo: null,
    image: "/images/projects/kasa.png",
  },
  {
    id: "camputech",
    title: "Camputech",
    shortDescription:
      "Site vitrine pour une activité de dépannage informatique.",
    description:
      "Conception et développement d’un site web simple et clair pour présenter les services d’une activité locale de dépannage informatique.",
    context:
      "Camputech est une activité de dépannage informatique destinée aux particuliers. Le projet consistait à concevoir et développer un site web permettant de présenter clairement les services proposés et de faciliter la prise de contact avec les clients.",
    objectives: [
      "Créer un site vitrine clair et accessible",
      "Présenter les services de dépannage informatique",
      "Permettre aux utilisateurs de contacter facilement l’activité",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    results: [
      "Site simple et lisible",
      "Structure claire pour les utilisateurs",
      "Interface responsive et accessible sur différents appareils",
      "Création d’une présence en ligne pour l’activité",
      "Mise en place d’un suivi statistique du trafic du site",
    ],
    improvements: [
      "Mettre en place un système de prise de rendez-vous",
      "Améliorer le référencement SEO",
      "Ajouter un blog ou une section conseils informatiques pour générer du trafic",
    ],
    github: null,
    demo: "https://camputech.fr",
    image: "/images/projects/camputech.png",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    shortDescription:
      "Portfolio développé en React pour présenter mes projets et mon parcours.",
    description:
      "Conception et développement d’un portfolio personnel afin de présenter mes projets, mon parcours et mes compétences.",
    context:
      "Projet réalisé dans le cadre de la formation OpenClassrooms pour mettre en valeur les projets réalisés et structurer une présentation claire pour les recruteurs.",
    objectives: [
      "Créer une interface simple et lisible",
      "Mettre en valeur les projets réalisés",
      "Structurer les informations pour un recruteur",
    ],
    stack: ["React", "JavaScript", "CSS Modules"],
    results: [
      "Portfolio responsive",
      "Architecture de composants claire",
      "Présentation structurée des projets",
    ],
    improvements: [
      "Ajouter des animations légères",
      "Améliorer encore l’accessibilité",
    ],
    github: "https://github.com/sylvie-trl/portfolio",
    demo: null,
    image: "/images/projects/portfolio.png",
  },
];
