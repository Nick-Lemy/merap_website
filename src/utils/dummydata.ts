import { Project } from "@/app/(home)/_components/HomeSection3";
import Project1Cover from "@/assets/projects/project1-cover.png";
import Project1Other1 from "@/assets/projects/project1-other1.png";
import Project1Other2 from "@/assets/projects/project1-other2.png";
import Project1Other3 from "@/assets/projects/project1-other3.png";

import Project2Cover from "@/assets/projects/project2-cover.png";
import Project2Other1 from "@/assets/projects/project2-other1.png";
import Project2Other2 from "@/assets/projects/project2-other2.png";

import Project3Cover from "@/assets/projects/project3-cover.png";
import Project3Other1 from "@/assets/projects/project3-other1.png";
import Project3Other2 from "@/assets/projects/project3-other2.png";
import Project3Other3 from "@/assets/projects/project3-other3.png";

import Project4Cover from "@/assets/projects/project4-cover.png";
import Project4Other1 from "@/assets/projects/project4-other1.png";
import Project4Other2 from "@/assets/projects/project4-other2.png";
import Project4Other3 from "@/assets/projects/project4-other3.png";

import Project5Cover from "@/assets/projects/project5-cover.png";
import Project5Other1 from "@/assets/projects/project5-other1.png";
import Project5Other2 from "@/assets/projects/project5-other2.png";

import Project6Cover from "@/assets/projects/project6-cover.png";
import Project6Other1 from "@/assets/projects/project6-other1.png";

export const projects: Project[] = [
  {
    id: 6,
    titre: "Réalisation (gros œuvre) d'une villa triplex duplex",
    lieu: "Douala, japoma",
    catégorie: "Construction",
    description:
      "Réalisation (gros œuvre) d'une villa triplex duplex 6 pièces à Douala /japoma.",
    imageDeCouverture: Project6Cover,
    autresImages: [Project6Other1],
  },
  {
    id: 5,
    titre: "Construction d'une villa moderne",
    lieu: "Akwa, Douala",
    catégorie: "Construction",
    description:
      "Conception et realisation d'une villa triplex 08 pieces modele nuage d'elegance a Douala au lieu dit logpom",
    imageDeCouverture: Project5Cover,
    autresImages: [Project5Other1, Project5Other2],
  },
  {
    id: 3,
    titre: "Rénovation Bâtiment R+3",
    lieu: "Logbessou, Douala",
    catégorie: "Rénovation",
    description:
      "Travaux de rénovation pour un bâtiment résidentiel de 3 étages.",
    imageDeCouverture: Project3Cover,
    autresImages: [Project3Other1, Project3Other2, Project3Other3],
  },
  {
    id: 1,
    titre: "Travaux second œuvre - Bâtiment R+4",
    lieu: "Bonamoussadi/Denver, Douala",
    catégorie: "Second Œuvre",
    description:
      "Installations électriques et enduit au mortier de ciment pour un bâtiment de 4 étages.",
    imageDeCouverture: Project1Cover,
    autresImages: [Project1Other1, Project1Other2, Project1Other3],
  },
  {
    id: 2,
    titre: "Système d'alimentation avec nourrice pour douche",
    lieu: "Sawa, Douala",
    catégorie: "Plomberie",
    description:
      "Installation d'un système d'alimentation avec nourrice pour une douche.",
    imageDeCouverture: Project2Cover,
    autresImages: [Project2Other1, Project2Other2],
  },
  {
    id: 4,
    titre: "Pénétromètre en collaboration avec Geo Fondation",
    lieu: "Ambassade de France, Yaoundé",
    catégorie: "Tests Géotechniques",
    description:
      "Essais de pénétration réalisés en collaboration avec Geo Fondation à l'Ambassade de France.",
    imageDeCouverture: Project4Cover,
    autresImages: [Project4Other1, Project4Other2, Project4Other3],
  },
];
