/*
  githubUrl is null where it only pointed to your GitHub profile, not a repository.
  Replace null with the real repo link (https://github.com/molatunji-ctrl/<repo>)
  and the "View code" button will appear automatically.
*/
export const projects = [
  {
    id: 1,
    title: "Glory House of Restoration",
    description:
      "A full-featured church PWA with Firebase Firestore/Auth admin panel, EmailJS notifications, installable offline support, and custom brand theming.",
    icon: "⛪",
    accent: "violet",
    liveUrl: "https://glory-house.vercel.app",
    githubUrl: null,
    stack: ["React", "Vite", "Firebase", "Tailwind", "EmailJS", "PWA"],
  },
  {
    id: 2,
    title: "Grace Cathedral App",
    description:
      "A responsive church web app with mobile hamburger navigation, program toggle filters, SEO sitemap integration, and Google Search Console submission.",
    icon: "✝️",
    accent: "cyan",
    liveUrl: "https://gracecathedral.vercel.app",
    githubUrl: null,
    stack: ["React", "Vite", "Tailwind", "Vercel", "SEO"],
  },
  {
    id: 3,
    title: "Lexy Kitchen",
    description:
      "Lagos-based restaurant platform with JWT auth, Paystack payment integration, table booking system, private chef service, and a full Node.js/MySQL backend.",
    icon: "🍽️",
    accent: "pink",
    liveUrl: null,
    githubUrl: null, // add the Lexy Kitchen repo link
    stack: ["React", "Node.js", "Express", "MySQL", "JWT", "Paystack"],
  },
  {
    id: 4,
    title: "FreshFind",
    description:
      "A food marketplace for finding the best food in your area, with a simple interface and a wide variety of options to browse.",
    icon: "🥬",
    accent: "cyan",
    liveUrl: "https://freshfind-app.netlify.app/",
    githubUrl: null, // add the FreshFind repo link
    stack: ["React", "Tailwind", "Netlify"],
  },
  {
    id: 5,
    title: "Developer Portfolio",
    description:
      "Glassmorphism personal portfolio with animated gradient orbs, scroll reveal animations, and a contact form, built with React and deployed on Vercel.",
    icon: "🧑‍💻",
    accent: "gradient",
    liveUrl: "https://myporfolio-ebon.vercel.app",
    githubUrl: null, // add the portfolio repo link
    stack: ["React", "Vite", "Tailwind", "Vercel"],
  },
];
