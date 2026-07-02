# Michael Molatunji — Personal Portfolio

A glassmorphism personal portfolio built with React + Vite + Tailwind CSS.

## 🗂️ Project Structure

```
portfolio/
├── index.html                   # HTML entry point
├── vite.config.js               # Vite config
├── tailwind.config.js           # Tailwind config
├── postcss.config.js            # PostCSS config
├── vercel.json                  # SPA rewrite rules for Vercel deployment
├── .env.example                 # Environment variable template
├── .gitignore
├── package.json
└── src/
    ├── main.jsx                 # React entry — mounts <App />
    ├── App.jsx                  # Root — composes all sections
    │
    ├── styles/
    │   └── globals.css          # Global CSS vars, glass utility, Tailwind
    │
    ├── assets/                  # Static files (images, icons)
    │
    ├── data/
    │   ├── projects.js          # All project data — edit here to add projects
    │   └── skills.js            # All skills/tech stack data
    │
    ├── hooks/
    │   └── useScrollReveal.js   # Custom IntersectionObserver scroll hook
    │
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.jsx       # Sticky nav + mobile hamburger drawer
    │   │   └── Footer.jsx       # Footer with links and copyright
    │   └── ui/
    │       ├── BackgroundCanvas.jsx  # Animated orbs + grid texture
    │       ├── GlassCard.jsx         # Reusable glassmorphism card wrapper
    │       └── SectionHeader.jsx     # Label + title + description block
    │
    └── sections/
        ├── Hero.jsx             # Landing hero with avatar, stats, CTAs
        ├── About.jsx            # Bio, info grid, quote, focus list
        ├── Skills.jsx           # Tech stack organised by category
        ├── Projects.jsx         # Project cards with links and tech pills
        └── Contact.jsx          # Contact info + EmailJS-ready form
```

## 🚀 Getting Started

### Install dependencies
```bash
npm install
```

### Start dev server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

## 🌐 Deploy to Vercel

```bash
vercel --prod
```

Or push to GitHub and connect the repo on vercel.com — it auto-detects Vite.

## ✉️ EmailJS Setup (Contact Form)

1. Create a free account at [emailjs.com](https://emailjs.com)
2. Create a service and email template
3. Copy `.env.example` → `.env`
4. Fill in your keys:
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxx
   ```
5. In `src/sections/Contact.jsx`, replace the `setTimeout` mock with:
   ```js
   import emailjs from '@emailjs/browser';

   emailjs.send(
     import.meta.env.VITE_EMAILJS_SERVICE_ID,
     import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
     { name: form.name, email: form.email, message: form.message },
     import.meta.env.VITE_EMAILJS_PUBLIC_KEY
   );
   ```

## 🎨 Customisation

| File | What to change |
|---|---|
| `src/data/projects.js` | Add/edit your projects |
| `src/data/skills.js` | Add/edit your tech stack |
| `src/sections/Hero.jsx` | Name, headline, bio text |
| `src/sections/About.jsx` | Personal info, quote |
| `src/sections/Contact.jsx` | Email, phone, social links |
| `src/styles/globals.css` | Colour palette (CSS variables) |

## 🛠️ Tech Stack

- **React 19** + **Vite 6**
- **Tailwind CSS v3**
- **Custom CSS** — glassmorphism via `backdrop-filter: blur`
- **Inter** + **Space Grotesk** (Google Fonts)
- **EmailJS** — contact form (plug in your keys)
- **Vercel** — deployment

## 👤 Author

Michael Molatunji · [github.com/molatunji-ctrl](https://github.com/molatunji-ctrl)
# MyPorfolio
