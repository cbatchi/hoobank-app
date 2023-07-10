// Importation des images depuis le dossier des ressources
import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from "../assets";

// Définition des liens de navigation
export const navLinks = [
  {
    id: "home",
    title: "Accueil",
  },
  {
    id: "features",
    title: "Fonctionnalités",
  },
  {
    id: "product",
    title: "Produit",
  },
  {
    id: "clients",
    title: "Clients",
  },
];

// Définition des fonctionnalités
export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Récompenses",
    content:
      "Les meilleures cartes de crédit offrent des combinaisons alléchantes de promotions et de récompenses.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Sécurisé",
    content:
      "Nous prenons des mesures proactives pour garantir la sécurité de vos informations et de vos transactions.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Transfert de solde",
    content:
      "Une carte de crédit pour transfert de solde peut vous faire économiser beaucoup d'argent sur les frais d'intérêt.",
  },
];

// Définition des avis
export const feedback = [
  {
    id: "feedback-1",
    content:
      "L'argent n'est qu'un outil. Il vous emmènera partout où vous le souhaitez, mais il ne vous remplacera pas en tant que conducteur.",
    name: "Herman Jensen",
    title: "Fondateur et Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "L'argent rend votre vie plus facile. Si vous avez la chance de l'avoir, vous êtes chanceux.",
    name: "Steve Mark",
    title: "Fondateur et Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Ce sont généralement les personnes impliquées dans les affaires, la finance et le commerce international qui sont vraiment riches.",
    name: "Kenn Gallagher",
    title: "Fondateur et Leader",
    img: people03,
  },
];

// Définition des statistiques
export const stats = [
  {
    id: "stats-1",
    title: "Utilisateurs actifs",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Fait confiance aux entreprises",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transactions",
    value: "$230M+",
  },
];

// Définition des liens du pied de page
export const footerLinks = [
  {
    title: "Liens utiles",
    links: [
      {
        name: "Contenu",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "Comment ça fonctionne",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Créer",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explorer",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Conditions et services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Communauté",
    links: [
      {
        name: "Centre d'aide",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partenaires",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Lettres d'information",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partenaire",
    links: [
      {
        name: "Notre partenaire",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Devenir partenaire",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const businessTexts = {
  leftSide: {
    title: "Vous faites les affaires, nous gérons l'argent.",
    description:
      "Avec la bonne carte de crédit, vous pouvez améliorer votre vie financière en établissant votre crédit, en gagnant des récompenses et en économisant de l'argent. Mais avec des centaines de cartes de crédit sur le marché.",
  },
  rightSide: [],
};

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const cta = {
  title: "Essayez notre service maintenant",
  paragraph:
    "Tout ce dont vous avez besoin pour accepter les paiements par carte et développer votre entreprise n'importe où sur la planète.",
};
