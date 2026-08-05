# Hyde Francois Khamsing - Interactive Resume

An interactive resume and portfolio built with React, TypeScript, and Vite.

This project turns a traditional CV into a small web application: it supports light and dark themes, English and French content, mobile-friendly layouts, and print/PDF export for a cleaner offline version of the resume.

**Live site:** https://hyde-francois-khamsing-cv.netlify.app

## What this repo is

This repository contains the source for Hyde Francois Khamsing's personal resume site. It is designed to do two jobs well:

- present a polished, browsable online resume
- generate a printable A4-friendly version for PDF export or sharing

Instead of storing resume content in static markup, the app keeps most copy in translation files, which makes it easier to maintain multiple languages and reuse the same UI across versions.

## Features

- Light and dark theme toggle
- English and French language toggle
- URL-synced language and theme state
- Local persistence for user-selected theme and language
- Print-optimized layout for resume/PDF export
- Responsive layout for desktop, tablet, and mobile
- Portfolio/project links embedded throughout the resume
- Subtle motion and UI polish via Framer Motion

## Tech stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Headless UI

## Getting started

### Prerequisites

- Node.js 18+ recommended
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Available scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run typecheck` | Run TypeScript without emitting files |
| `npm run lint` | Lint the project with ESLint |

## Project structure

```text
src/
  components/
    layout/      # Page-level layout pieces such as the header
    sections/    # Resume sections: summary, skills, projects, experience, education
    ui/          # Reusable controls such as theme, language, and print buttons
  context/       # Theme and language providers
  i18n/          # English and French resume content and labels
  utils/         # URL state, PDF filename helpers, text formatting helpers
```

## Where to edit content

If you want to customize the resume, start here:

- `src/i18n/en.ts` - English resume content
- `src/i18n/fr.ts` - French resume content
- `src/components/sections/` - section rendering and layout
- `src/components/layout/Header.tsx` - header and contact block

Most of the actual resume data lives in the translation files, including:

- summary text
- skills
- spoken languages
- projects and links
- work experience
- education

## Theme and language behavior

The app keeps language and theme in both local storage and the URL query string, so links can preserve a chosen view.

Examples:

- `?lang=en&theme=light`
- `?lang=fr&theme=dark`

That makes it easy to share a specific presentation mode directly.

## Print and PDF export

The print button switches the page into a print-friendly state and triggers the browser print dialog. The layout is tuned for A4-style export, making it useful as both a web resume and a downloadable PDF.

## Deployment

The project is set up as a static Vite app and is ready to deploy to platforms like Netlify.

## Related links

- Personal GitHub: https://github.com/Hyde-grey
- LinkedIn: https://www.linkedin.com/in/hyde-fran%C3%A7ois-khamsing/
- Strider by Lionstride: https://lionstride.co
- Traidar: https://traidar.ai
- Mr.HydeStore: https://mrhydestore.netlify.app/
- TraderSphere: https://tradersphere.netlify.app/

## Why this project stands out

This is not just a static resume page. It is a frontend portfolio piece in its own right: a bilingual, theme-aware, print-capable application that shows product thinking as well as implementation detail.
