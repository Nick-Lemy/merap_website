import { StaticImageData } from "next/image";
import RenovationImage from "@/assets/renovation.png";
import Etude from "@/assets/etude.jpg";

export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  detailedDescription: string;
  image: string | StaticImageData;
  keyFeatures: string[];
  process: {
    title: string;
    description: string;
    details?: string[];
  }[];
}

export const services: Service[] = [
  {
    id: "construction-batiments",
    title: "Construction de Bâtiments",
    description:
      "Gros œuvre et second œuvre pour bâtiments à usage d'habitation et commercial avec des matériaux de qualité.",
    shortDescription:
      "Construction complète de bâtiments résidentiels et commerciaux avec expertise technique et matériaux de qualité supérieure.",
    detailedDescription:
      "Merap BTP SARL se spécialise dans la construction de bâtiments, englobant le gros œuvre et le second œuvre. Nous nous engageons à utiliser des matériaux de qualité pour assurer la durabilité et la performance de nos réalisations, tant pour les bâtiments résidentiels que commerciaux.",
    image:
      "https://i.pinimg.com/1200x/42/28/24/42282462f38c8cae0035f69733a9ef7f.jpg",
    keyFeatures: [
      "Fondations profondes ou superficielles adaptées",
      "Structure en béton armé résistante",
      "Isolation thermique et acoustique",
      "Installations électriques conformes NFC 15-100",
      "Finitions esthétiques optimales",
    ],
    process: [
      {
        title: "Gros Œuvre",
        description:
          "Réalisation des fondations, structures et élévation des murs selon les spécificités du projet.",
        details: [
          "Fondations profondes ou superficielles adaptées aux spécificités du sol",
          "Élévation des murs avec blocs de béton, briques ou matériaux composites pour garantir l'isolation thermique et acoustique",
          "Structure en béton armé résistante, respectant les normes de sécurité et de performance sismique",
        ],
      },
      {
        title: "Second Œuvre",
        description:
          "Installation des équipements techniques et finitions pour un bâtiment prêt à l'usage.",
        details: [
          "Cloisons sèches et plafonds suspendus pour une distribution optimale des espaces",
          "Installations électriques conformes aux normes NFC 15-100, comprenant câblage, distribution et dispositifs de sécurité",
          "Réseaux d'eau potable et d'évacuation avec matériaux résistants à la corrosion",
          "Application de revêtements (peinture, carrelage) et installation de menuiseries pour un rendu esthétique optimal",
        ],
      },
    ],
  },
  {
    id: "etudes-gestion-projets",
    title: "Études et Gestion de Projets",
    description:
      "Conception, planification et gestion complète de vos projets de construction avec un suivi rigoureux du début jusqu'à la fin.",
    shortDescription:
      "Services complets de maîtrise d'œuvre et de gestion de projets pour assurer le succès de vos constructions.",
    detailedDescription:
      "Notre équipe d'ingénieurs et d'architectes offre des services complets d'études et de gestion de projets. Nous accompagnons nos clients depuis la conception initiale jusqu'à la livraison finale, en assurant un suivi rigoureux de chaque étape du projet.",
    image: Etude,
    keyFeatures: [
      "Études techniques approfondies",
      "Planification détaillée des travaux",
      "Gestion des équipes et sous-traitants",
      "Contrôle qualité permanent",
      "Respect des délais et budgets",
    ],
    process: [
      {
        title: "Analyse des Besoins",
        description:
          "Définition précise des objectifs et contraintes du projet avec le client.",
        details: [
          "Entretiens avec le maître d'ouvrage",
          "Analyse du programme fonctionnel",
          "Identification des contraintes techniques",
        ],
      },
      {
        title: "Conception Technique",
        description:
          "Élaboration des études techniques et des plans d'exécution détaillés.",
        details: [
          "Plans architecturaux et techniques",
          "Études de structure et fluides",
          "Devis quantitatifs détaillés",
        ],
      },
      {
        title: "Planification",
        description:
          "Établissement du planning d'exécution et organisation des ressources.",
        details: [
          "Planning de Gantt détaillé",
          "Allocation des ressources",
          "Coordination des intervenants",
        ],
      },
      {
        title: "Suivi d'Exécution",
        description:
          "Contrôle permanent de l'avancement et de la qualité des travaux.",
        details: [
          "Réunions de chantier hebdomadaires",
          "Contrôle qualité continu",
          "Gestion des aléas et modifications",
        ],
      },
    ],
  },
  {
    id: "renovations-rehabilitation",
    title: "Rénovations et Réhabilitation",
    description:
      "Travaux de rénovation, réhabilitation et aménagement intérieur (peinture, carrelage, Pierre de Pouma).",
    shortDescription:
      "Services complets de rénovation et de réhabilitation pour donner une nouvelle vie à vos espaces.",
    detailedDescription:
      "MERAP BTP excelle dans la rénovation et la réhabilitation de bâtiments existants. Nos équipes spécialisées interviennent pour moderniser, améliorer et transformer vos espaces selon vos besoins actuels, en respectant le caractère architectural existant.",
    image: RenovationImage,
    keyFeatures: [
      "Diagnostic technique préalable",
      "Rénovation complète ou partielle",
      "Spécialité Pierre de Pouma",
      "Aménagements intérieurs sur mesure",
      "Respect du patrimoine architectural",
    ],
    process: [
      {
        title: "Diagnostic Initial",
        description:
          "Évaluation complète de l'état existant et identification des travaux nécessaires.",
        details: [
          "Inspection technique approfondie",
          "Relevé architectural précis",
          "Évaluation des pathologies",
        ],
      },
      {
        title: "Conception Rénovation",
        description:
          "Élaboration du projet de rénovation adapté aux contraintes existantes.",
        details: [
          "Plans de réaménagement",
          "Choix des matériaux adaptés",
          "Phasage des travaux",
        ],
      },
      {
        title: "Travaux de Réhabilitation",
        description:
          "Exécution des travaux de rénovation selon les règles de l'art.",
        details: [
          "Démolitions sélectives",
          "Renforcement des structures",
          "Mise aux normes des réseaux",
        ],
      },
      {
        title: "Finitions",
        description:
          "Application des finitions pour un résultat esthétique optimal.",
        details: [
          "Peintures et revêtements",
          "Carrelage et faïence",
          "Pierre de Pouma traditionnelle",
        ],
      },
    ],
  },
  {
    id: "construction-routes",
    title: "Construction de Routes",
    description:
      "Terrassement et revêtement routier avec expertise technique pour des infrastructures durables.",
    shortDescription:
      "Construction d'infrastructures routières durables avec expertise en terrassement et revêtement.",
    detailedDescription:
      "Notre expertise en construction routière couvre tous les aspects du terrassement et du revêtement. Nous réalisons des infrastructures durables et conformes aux normes camerounaises, en utilisant des techniques modernes et des matériaux adaptés au climat tropical.",
    image:
      "https://img.freepik.com/photos-premium/pelle-niveleuse-se-tiennent-cote-cote-contre-ciel-bleu-engins-terrassement-construction-lourde-construction-routes-communications-souterraines-industrie-construction_331695-519.jpg",
    keyFeatures: [
      "Terrassement de précision",
      "Revêtement en béton ou enrobé",
      "Drainage et assainissement",
      "Signalisation routière",
      "Respect des normes MINTP",
    ],
    process: [
      {
        title: "Étude Topographique",
        description:
          "Relevé topographique précis et étude de tracé optimal de la route.",
        details: [
          "Levé topographique au GPS",
          "Étude géotechnique des sols",
          "Optimisation du tracé",
        ],
      },
      {
        title: "Terrassement",
        description:
          "Préparation de la plateforme routière selon les profils établis.",
        details: [
          "Déblais et remblais",
          "Compactage des couches",
          "Mise en forme de la plateforme",
        ],
      },
      {
        title: "Couches de Forme",
        description:
          "Mise en place des couches de fondation et de base de la chaussée.",
        details: [
          "Couche de fondation",
          "Couche de base granulaire",
          "Contrôle de compacité",
        ],
      },
      {
        title: "Revêtement",
        description:
          "Application du revêtement final selon les spécifications techniques.",
        details: [
          "Revêtement bitumineux ou béton",
          "Marquage et signalisation",
          "Finitions et réception",
        ],
      },
    ],
  },
  {
    id: "travaux-finitions",
    title: "Travaux de Finitions",
    description:
      "Finitions de haute qualité pour donner à vos projets l'aspect final souhaité.",
    shortDescription:
      "Services de finitions haut de gamme pour parfaire l'esthétique de vos constructions.",
    detailedDescription:
      "Nos équipes spécialisées en finitions apportent la touche finale à vos projets de construction. Nous maîtrisons toutes les techniques de finition moderne et traditionnelle pour créer des espaces à la fois beaux et fonctionnels.",
    image:
      "https://comparateurtravaux.fr/wp-content/uploads/2017/10/cr%C3%A9pis-8.jpg",
    keyFeatures: [
      "Peintures décoratives et de protection",
      "Revêtements muraux et de sols",
      "Finitions bois et métalliques",
      "Décorations traditionnelles",
      "Garantie qualité sur tous les travaux",
    ],
    process: [
      {
        title: "Préparation des Supports",
        description:
          "Préparation minutieuse des surfaces à finir selon leur nature.",
        details: [
          "Ragréage et lissage",
          "Traitement des fissures",
          "Application d'apprêts",
        ],
      },
      {
        title: "Application Primaire",
        description: "Mise en place des couches d'accroche et de préparation.",
        details: [
          "Sous-couches adaptées",
          "Impression des supports",
          "Masticage final",
        ],
      },
      {
        title: "Finitions Décoratives",
        description:
          "Application des finitions selon les choix esthétiques définis.",
        details: [
          "Peintures décoratives",
          "Enduits décoratifs",
          "Poses de revêtements",
        ],
      },
      {
        title: "Contrôle Qualité",
        description:
          "Vérification finale et retouches pour un résultat parfait.",
        details: [
          "Inspection détaillée",
          "Retouches nécessaires",
          "Nettoyage et protection",
        ],
      },
    ],
  },
  {
    id: "installation-sanitaire",
    title: "Installation Sanitaire",
    description:
      "Conception et installation de systèmes de plomberie conformes aux normes en vigueur.",
    shortDescription:
      "Installation complète de systèmes sanitaires et de plomberie selon les normes techniques.",
    detailedDescription:
      "MERAP BTP conçoit et installe des systèmes sanitaires complets, de l'alimentation en eau à l'évacuation des eaux usées. Nos installations respectent scrupuleusement les normes camerounaises et internationales pour garantir sécurité et durabilité.",
    image:
      "https://img.freepik.com/premium-photo/closeup-african-plumber-showing-one-dirty-one-clean-filters-changing-water-filters_404612-2338.jpg",
    keyFeatures: [
      "Réseaux d'alimentation en eau",
      "Évacuation des eaux usées et pluviales",
      "Installation d'équipements sanitaires",
      "Systèmes de traitement d'eau",
      "Maintenance préventive",
    ],
    process: [
      {
        title: "Étude des Besoins",
        description:
          "Analyse des besoins en eau et dimensionnement des installations.",
        details: [
          "Calcul des débits nécessaires",
          "Étude de la pression disponible",
          "Dimensionnement des réseaux",
        ],
      },
      {
        title: "Conception Technique",
        description:
          "Élaboration des plans de plomberie et choix des équipements.",
        details: [
          "Schémas de principe",
          "Plans d'exécution détaillés",
          "Cahier des charges matériaux",
        ],
      },
      {
        title: "Installation",
        description:
          "Pose des réseaux et installation des équipements sanitaires.",
        details: [
          "Pose des canalisations",
          "Installation des équipements",
          "Raccordements et finitions",
        ],
      },
      {
        title: "Tests et Mise en Service",
        description:
          "Vérification du bon fonctionnement et mise en service des installations.",
        details: [
          "Tests d'étanchéité",
          "Contrôle des débits",
          "Formation à l'utilisation",
        ],
      },
    ],
  },
  {
    id: "electricite",
    title: "Électricité",
    description:
      "Conception et installation électrique sécurisées et aux normes.",
    shortDescription:
      "Installations électriques sécurisées respectant les normes NF C 15-100 et réglementations locales.",
    detailedDescription:
      "Merap BTP propose des services de conception et d'installation d'installations électriques respectant les normes en vigueur. Notre approche technique garantit la sécurité et l'efficacité des systèmes électriques.",
    image:
      "https://i.pinimg.com/736x/20/f5/21/20f521248c2b9d07de1b59932871df30.jpg",
    keyFeatures: [
      "Utilisation de matériaux certifiés",
      "Respect des délais et budgets",
      "Formation des équipes aux dernières innovations techniques",
      "Maintenance préventive et corrective",
      "Conformité aux normes NF C 15-100",
    ],
    process: [
      {
        title: "Étude de Faisabilité",
        description:
          "Analyse des besoins spécifiques du projet et élaboration de schémas électriques conformes aux normes NF C 15-100.",
      },
      {
        title: "Conception Technique",
        description:
          "Création de plans détaillés incluant le dimensionnement des câbles, la sélection des dispositifs de protection (disjoncteurs, relais) et l'intégration de la mise à la terre.",
      },
      {
        title: "Installation",
        description: "Réalisation des travaux selon les règles de l'art.",
        details: [
          "Le tirage de câbles",
          "L'installation de tableaux électriques",
          "La mise en place de systèmes d'éclairage et de prises de courant",
        ],
      },
      {
        title: "Contrôle et Vérification",
        description:
          "Tests de conformité et mise en service des installations pour garantir leur bon fonctionnement et leur sécurité.",
      },
      {
        title: "Maintenance Préventive et Corrective",
        description:
          "Suivi régulier des installations et interventions rapides en cas de dysfonctionnement.",
      },
    ],
  },
];
