# Harsh Singh — Personal Portfolio

A modern, dark-themed portfolio built with React + TypeScript + Tailwind CSS + Framer Motion.

## Tech Stack

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS v3** for styling
- **Framer Motion** for animations
- **React Router v6** for routing
- **React Icons** for icon library
- **EmailJS** for contact form

## Features

- ✅ Loading screen with progress animation
- ✅ Custom cursor (hidden on touch devices)
- ✅ Scroll progress indicator
- ✅ Animated typing effect in hero
- ✅ Smooth section reveal animations
- ✅ Skills with animated progress bars
- ✅ Project filtering by technology
- ✅ Glassmorphism UI throughout
- ✅ Back-to-top button
- ✅ Mobile-responsive + SEO-friendly
- ✅ Deploy-ready for Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## EmailJS Setup

1. Create a free account at [EmailJS](https://emailjs.com)
2. Set up an Email Service and Template
3. In `src/components/sections/Contact.tsx`, replace:
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`
   - `YOUR_PUBLIC_KEY`

## Deploying to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## Customization

- **Personal info**: `src/data/index.ts`
- **Colors/theme**: `tailwind.config.js` + `src/index.css`
- **Components**: `src/components/sections/`

## Folder Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, About, Skills, Projects, ...
│   └── ui/           # CustomCursor, LoadingScreen, BackToTop
├── data/             # Portfolio content
├── hooks/            # Custom React hooks
└── index.css         # Global styles
```
"# Portfolio" 
"# Portfolio" 
