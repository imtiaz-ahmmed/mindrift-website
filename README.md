<div align="center">

# Mindrift Agency

<p align="center">
  <strong>Engineering Digital Solutions for a Smarter Future.</strong>
</p>

<p align="center">
  A high-performance digital presence for <strong>Mindrift Agency</strong> — delivering enterprise software development, AI & data intelligence, cloud architecture, cybersecurity engineering, and GIS location solutions.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.4-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.3-blue?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Turbopack-Enabled-0284c7?style=for-the-badge&logo=vercel&logoColor=white" alt="Turbopack" />
  <img src="https://img.shields.io/badge/License-Private-red?style=for-the-badge" alt="License" />
</p>

---

</div>

## 📌 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Pages & Routes](#-pages--routes)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running Locally](#running-locally)
- [Available Scripts](#-available-scripts)
- [Email & Contact System](#-email--contact-system)
- [Deployment](#-deployment)
- [Brand & Socials](#-brand--socials)
- [Contributing & Standards](#-contributing--standards)

---

## 🌟 Overview

**Mindrift Agency** is a modern technology consultancy and engineering partner. This web platform showcases Mindrift's capabilities across enterprise software engineering, AI/ML integrations, cloud infrastructure, geospatial intelligence, and end-to-end digital product design.

Built on the latest **Next.js App Router (Turbopack)** and **React 19**, the site delivers:
- Lightning-fast page loads with static and dynamic hybrid rendering.
- Immersive 3D interactive visuals powered by **Three.js** and subtle scroll animations via **AOS**.
- Type-safe user inquiries and contact workflows with **Zod** and **Resend** integration.
- Production-grade SEO setup including structured metadata, OpenGraph tags, dynamic sitemaps, and robots.txt.

---

## ✨ Key Features

- **⚡ Blazing Fast Performance:** Powered by Next.js 16 with Turbopack for near-instant dev reloads and optimized production builds.
- **🌌 Immersive 3D & Particle Visuals:** Interactive Three.js particle backgrounds and smooth micro-interactions that elevate brand perception.
- **🎨 Modern Dark/Light Design System:** Built with Tailwind CSS v4 and a unified theme provider supporting fluid color transitions.
- **📱 Fully Responsive:** Carefully tuned layouts optimized for mobile, tablet, desktop, and ultra-wide screens.
- **🛡️ Type-Safe Form Inquiries:** Contact and inquiry forms validated client- and server-side using Zod schemas with formatted error feedback.
- **✉️ Resend Email Integration:** Automated email dispatch to agency inboxes with graceful development-mode fallback logging.
- **🔍 Comprehensive SEO & Accessibility:** Includes automated `sitemap.ts`, `robots.ts`, semantic HTML5 tags, and rich OpenGraph/Twitter social cards.

---

## 🛠️ Tech Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) | React framework with Turbopack bundler |
| **Library** | [React 19](https://react.dev/) | Component architecture & modern hooks |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | End-to-end type safety |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern utility-first CSS design system |
| **3D & Canvas** | [Three.js](https://threejs.org/) | Interactive 3D particle fields & visual canvas |
| **Animations** | [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) | Scroll-triggered element reveals |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, consistent SVG iconography |
| **Validation** | [Zod 4](https://zod.dev/) | Client and API schema validation |
| **Fonts** | [Geist & Geist Mono](https://vercel.com/font) | High-legibility typography optimized via `next/font` |

---

## 📂 Project Architecture

```plaintext
mindrift-website/
├── public/                 # Static public assets, favicon, SVGs
├── assets/                 # Brand assets & logos
├── src/
│   ├── app/                # Next.js App Router pages and endpoints
│   │   ├── about/          # Agency background, values & leadership
│   │   ├── api/
│   │   │   └── contact/    # Serverless contact inquiry endpoint (Zod + Resend)
│   │   ├── contact/        # Interactive project inquiry & consultation form
│   │   ├── industries/     # Industry-specific solutions (FinTech, Health, etc.)
│   │   ├── insights/       # Technical articles, case analyses & blog posts
│   │   ├── privacy-policy/ # Legal privacy policy
│   │   ├── projects/       # Portfolio case studies and project filters
│   │   ├── services/       # Core service offerings and practice areas
│   │   ├── terms/          # Terms of service
│   │   ├── globals.css     # Global styles & Tailwind CSS tokens
│   │   ├── layout.tsx      # Root layout, fonts, header, footer & providers
│   │   ├── loading.tsx     # Global suspense loading UI
│   │   ├── not-found.tsx   # Custom 404 error page
│   │   ├── page.tsx        # Homepage (hero, stats, pillars, showcase, etc.)
│   │   ├── robots.ts       # Dynamic robots.txt generator
│   │   └── sitemap.ts      # Dynamic sitemap generator
│   ├── components/
│   │   ├── forms/          # Form components (ContactForm, FormFields)
│   │   ├── insights/       # Blog & article cards and grids
│   │   ├── layout/         # Header, Navigation, Footer, MobileMenu
│   │   ├── projects/       # Project cards, galleries & filtering widgets
│   │   ├── providers/      # ThemeProvider, AOSProvider
│   │   ├── sections/       # Modular homepage and page sections
│   │   └── ui/             # Reusable atomic UI (Buttons, Badges, Modals, Particles)
│   ├── data/               # Structured content & static databases
│   │   ├── industries.ts   # Industry solutions and metrics
│   │   ├── insights.ts     # Articles, read times & categories
│   │   ├── navigation.ts   # Header & footer navigation links
│   │   ├── projects.ts     # Project details, outcomes & technology tags
│   │   ├── services.ts     # Practice area definitions and deliverables
│   │   └── site-config.ts  # Global agency metadata and configuration
│   ├── lib/                # Utility helpers, validators, and formatters
│   └── types/              # Global TypeScript interfaces and schemas
├── .env.example            # Environment variables template
├── next.config.ts          # Next.js configuration
├── package.json            # Scripts & project dependencies
└── tsconfig.json           # TypeScript configuration
```

---

## 🗺️ Pages & Routes

| Route | Description |
| :--- | :--- |
| `/` | Landing page featuring Hero, Impact Metrics, Practice Areas, Projects, and Testimonials |
| `/about` | Company mission, leadership, approach, and engineering philosophy |
| `/services` | Detailed directory of engineering, AI, cloud, and security capabilities |
| `/projects` | Filterable portfolio of case studies, client challenges, and delivered solutions |
| `/industries` | Vertical-specific solutions (Enterprise, Logistics, Healthcare, FinTech, Public Sector) |
| `/insights` | Engineering blog, architecture insights, and research papers |
| `/contact` | Project inquiry form with budget/timeline selectors and direct contact info |
| `/privacy-policy` | Data privacy guidelines and client protection policies |
| `/terms` | Website terms of use and legal governance |

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally on your machine.

### Prerequisites

Ensure you have the following installed:
- **Node.js**: `v20.x` or higher (LTS recommended)
- **Package Manager**: `npm`, `pnpm`, or `yarn`
- **Git**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/imtiaz-znzit/mindrift-website.git
   cd mindrift-website
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

### Running Locally

Start the Turbopack development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📜 Available Scripts

In the project root, you can run:

```bash
# Start development server with Turbopack
npm run dev

# Compile TypeScript and build for production
npm run build

# Start the built production server locally
npm run start

# Run ESLint to check for code quality and syntax issues
npm run lint
```



<div align="center">
  <p>© 2026 Mindrift Agency. All rights reserved.</p>
</div>
