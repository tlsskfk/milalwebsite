// list of static texts

import { close, instagram, facebook, youtube, kakaotalk, google_maps, /*people01, people02, people03, linkedin, twitter, airbnb, binance, coinbase, dropbox,*//* mic, wordsearch, plate */  } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
    link: "https://www.washingtonmilal.org/About",
    content: [
      {
        title: "History",
        id: "about/History",
        link: "https://www.washingtonmilal.org/About/History",
      },
      {
        title: "Mission",
        id: "about/Mission",
        link: "https://www.washingtonmilal.org/About/Mission",
      },
      {
        title: "Class Agape",
        id: "about/ClassAgape",
        link: "https://www.washingtonmilal.org/About/ClassAgape",
      },
      {
        title: "Camp Agape",
        id: "about/CampAgape",
        link: "https://www.washingtonmilal.org/About/CampAgape",
      },
    ]
  },
  {
    id: "contact",
    title: "Contact",
    link: "https://www.washingtonmilal.org/Contact",
    content: [
      {
        title: "FAQ",
        id: "Contact/FAQ",
        link: "https://www.washingtonmilal.org/Contact/FAQ",
      },
      {
        title: "ContactForm",
        id: "Contact/ContactForm",
        link: "https://www.washingtonmilal.org/Contact/ContactForm",
      },
      {
        title: "NewsLetter",
        id: "Contact/NewsLetter",
        link: "https://www.washingtonmilal.org/Contact/NewsLetter",
      },
      {
        title: "Forms",
        id: "Contact/Forms",
        link: "https://www.washingtonmilal.org/Contact/Forms",
      },
    ]
  },
  {
    id: "wordgame",
    title: "Game",
    link: "https://www.washingtonmilal.org/WordSearchGame",
  },
  {
    id: "donate",
    title: "Donate",
    link: "https://www.washingtonmilal.org/Donate",
  },
];

export const heroMessage = {
  id: "heroMessage",
  title: "43",
  content: "years of service",
  desc: "Milal's Mission ............... lorem ipsum yabba doodoo Milal's Mission ............... lorem ipsum yabba doodoo Milal's Mission ............... lorem ipsum yabba doodoo "
}

export const locations = [
  {
    id: "Baltimore",
    region: "East",
    icon: google_maps,
    title: "Baltimore",
    content:
      "10624 Scaggsville Rd, Laurel, MD 20723",
  },
  {
    id: "Rockville",
    region: "East",
    icon: google_maps,
    title: "Rockville",
    content:
      "13925 Travilah Rd. Rockville, MD 20850",
  },
  {
    id: "Virginia",
    region: "East",
    icon: google_maps,
    title: "Virginia",
    content:
      "null",
  },
  {
    id: "New York",
    region: "East",
    icon: google_maps,
    title: "New York",
    content:
      "null",
  },
  {
    id: "Orange County",
    region: "West",
    icon: google_maps,
    title: "San Diego",
    content:
      "null",
  },
  {
    id: "Chicago?",
    region: "MidWest",
    icon: google_maps,
    title: "Chicago",
    content:
      "null",
  },
  {
    id: "Charlotte",
    region: "SouthEast",
    icon: google_maps,
    title: "Charlotte",
    content:
      "null",
  }
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: close,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: close,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: close,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Volunteers",
    value: "450+",
  },
  {
    id: "stats-2",
    title: "Hours/Year",
    value: "21000+",
  },
  {
    id: "stats-3",
    title: "Cities",
    value: "17",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
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
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
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
    icon: youtube,
    link: "https://www.youtube.com/",
  },
  {
    id: "social-media-4",
    icon: kakaotalk,
    link: "https://www.kakaotalk.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: facebook,
  },
  {
    id: "client-2",
    logo: facebook,
  },
  {
    id: "client-3",
    logo: facebook,
  },
  {
    id: "client-4",
    logo: facebook,
  },
]; 