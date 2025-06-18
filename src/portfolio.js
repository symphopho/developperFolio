/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
// Achievement Section    


// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Saad Pasta",
  title: "Hi all, I'm Symphoria",
  subTitle: emoji(
    "Je suis passionnée par l'intelligence artificielle et par les technologies avancées",
  ),
  resumeLink:
    "https://drive.google.com/file/d/1NPUirQAN0YS1y0XigLuMcWxCKjZWw-T0/view?usp=drive_link",// Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/symphopho",
  linkedin: "https://www.linkedin.com/in/symphoria-ada-be-70123b2a8/",
  gmail: "symphoriada@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Ce que je fais",
  subTitle: "Etudiante en IA spécialisée en Data Science et management ",
  skills: [
    emoji(
      "⚡ Automatiser les processus avec Python, SQL",
    ),
    emoji("⚡ Créer des dashboards interactifs et visuels (Excel, Power BI, Tableau)"),
    emoji(
      "⚡ Construire des modèles IA pour la classification ou la prédiction (TensorFlow, Keras)"
    ),
    emoji("⚡ Concevoir et développer des chatbots intelligents avec spaCy, Flask et intégration base de données"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fas fa-r-project"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "OpenAI",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Tableau",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "spaCy",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Flask",
      fontAwesomeClassname: "fas fa-flask"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "RGB-D",
      fontAwesomeClassname: "fas fa-camera"
    }
  ]
};

// Education section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Lycée National Léon Mba",
      logo: require("./assets/images/leon mba.webp"),
      subHeader: "Baccalauréat Scientifique",
      duration: "2021 - 2022",
      desc: "Formation orientée mathématiques, physique et logique scientifique.",
      descBullets: [
        "Mention : Série scientifique (C)",
        "Approche rigoureuse des raisonnements mathématiques"
      ]
    },
    {
      schoolName: "IA School",
      logo: require("./assets/images/logo ia school.jpeg"),
      subHeader: "Bachelor 1 en Intelligence Artificielle et Management",
      duration: "2023 - 2024",
      desc: "Spécialisation dans la conception de solutions IA appliquées au business et à la gestion de projet.",
      descBullets: [
        "Projet : Conception d’un chatbot intelligent pour le service client",
        "Utilisation d’OpenAI pour générer du texte et du son à partir de l’IA",
        "Premiers pas avec Flask, spaCy, TensorFlow, SQL, PostgreSQL"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

// Vos 3 domaines de compétences techniques principaux

const techStack = {
  viewSkillBars: true, // Mettre true pour afficher la section de compétence
  experience: [
    {
      Stack: "Développement de Chatbots / IA Générative",
      progressPercentage: "85%"
    },
    {
      Stack: "Analyse de données / Python / R / SQL",
      progressPercentage: "80%"
    },
    {
      Stack: "Développement Web (HTML, CSS, JavaScript, Flask)",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Laisser à false sauf si tu veux afficher tes badges CodersRank
};


// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Assistante Data",
      company: "MRH evolution",
      companylogo: require("./assets/images/mrh evolution.png"), // Remplace ou commente si tu n'as pas encore l'image
      date: "9 août 2024 – 15 septembre 2024",
      desc: "Automatisation et gestion de la base de données prospects pour les activités de formation.",
      descBullets: [
        "Automatisation de la base de données prospects (segmentation, mise à jour, nettoyage)",
        "Organisation de webinaires et gestion des inscriptions",
        "Utilisation de Waalaxy pour la prospection et la récupération des coordonnées",
        "Création de diagrammes de Gantt pour la planification de projet",
        "Élaboration de rapports d’activité et de performance (reporting)"
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projets majeurs",
  subtitle: "Quelques startups et entreprises pour lesquelles j’ai contribué à développer leur technologie",
  projects: [
    {
      image: require("./assets/images/projet001.jpeg"),
      projectName: "Projet 001",
      projectDesc: "Nettoyage et structuration de base de données, suppression des doublons, création d’un dashboard interactif.",
      footerLink: [
        {
          name: "Google Drive - Dashboard",
          url: "https://docs.google.com/spreadsheets/d/1y2cyMeIXVc7jUsk1F7Mh29y5QTFRWyVF/edit?usp=drive_link&ouid=107668792184028619602&rtpof=true&sd=true"
        }
      ]
    },
    {
      image: require("./assets/images/gemalab.png"),
      projectName: "Gemalab",
      projectDesc: "Automatisation de la base de données prospects via Access pour la startup J&M.",
      footerLink: [
        {
          name: "Google Drive - Automatisation 1",
          url:"https://drive.google.com/file/d/1N6QSg3RakWmDywDYP7mWVwDprp9nvTjV/view?usp=drive_link"
        },
        {
          name: "Google Drive - Automatisation 2",
          url:"https://drive.google.com/file/d/1baZhN6IKrKFus5-hAfiUiGXFEvNFAuvK/view?usp=drive_link"
        }
      ]
    },
    {
  // mets ici l’image de ton chatbot (à créer si besoin)
      projectName: "Chatbot S&H Beauté",
      projectDesc: "Développement d’un chatbot interactif en Python avec Gradio pour répondre aux questions fréquentes sur les produits et services de S&H Beauté.",
      footerLink: [
        {
          name: "Code source sur GitHub",
          url: "https://github.com/symphopho/chatbot-S-M"  // adapte avec ton vrai lien GitHub
        }
      ]
    }
  ],
  image: require("./assets/images/opencvProjectImage.webp"),
    projectName: "Traitement d'image avec OpenCV",
    projectDesc: "Exploration des fonctionnalités d'OpenCV : affichage d’images, conversion en niveaux de gris, détection de contours, flou gaussien, dessin de formes et sauvegarde des résultats.",
    footerLink: [
      {
        name: "Code source sur GitHub",
        url: "https://github.com/symphopho/traitement-image-opencv"
      }
    ]
  }
;

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "J'aime partager mon parcours et parler d'intelligence artificielle",

  podcast: [
    "https://anchor.fm/tonpodcast/embed/episodes/ton-episode" // Remplace ce lien par ton propre podcast
  ],
  display: false // mettre false si tu n’as pas encore de podcast
};



const contactInfo = {
  title: emoji("Contactez-moi ☎️"),
  subtitle: "Vous avez un projet à me proposer ou souhaitez simplement échanger ? Ma boîte mail est ouverte !",
  number: "+33 7 51 26 29 71",
  email_address: "symphoriada@gmail.com"
};


// Achievement Section
const achievementSection = {
  title: emoji("Réalisations 🏆"),
  subtitle: "Quelques-unes de mes réalisations et distinctions",
  achievementsCards: [
    {
    
      title: "Projet de Chatbot",
      subtitle: "S&H Beauté",
      footerLink: [
        {
          name: "Voir le projet",
          url: "https://github.com/symphopho/chatbot-S-M"
        }
      ]
    }
  ]
};

// Blog Section
const blogSection = {
  title: emoji("Blog 📝"),
  subtitle: "J'écris sur l'intelligence artificielle, le développement et la technologie",
  blogs: [
    {
      url: "https://medium.com/@symphoriaada", // Remplace par ton lien Medium ou blog
      title: "Mon blog Medium",
      description: "Découvrez mes derniers articles sur l'IA et la tech"
    }
  ],
  display: false // Mettre false si tu n’as pas encore de blog
};





const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer


export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  podcastSection,
  contactInfo,
  isHireable,

// Déclarations (au moins une fois)
// const talkSection = { /* ... */ }; // <-- définir si tu veux l'exporter

// Export groupé
// (Déjà exporté plus haut, donc cette section est redondante et doit être supprimée)
}
