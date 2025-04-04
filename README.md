# Resume Project - Technical Specification

## Project Overview

A modern, responsive resume application with light and dark modes (featuring a cyberpunk-inspired design in dark mode). The resume is designed to be printable on A4 pages while maintaining a clean, professional appearance with interactive elements for web viewing.

## Technical Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Deployment**: Static site (Netlify-ready)

## Project Structure

- `src/components/layout/` - Layout components (Header)
- `src/components/sections/` - Resume section components (Education, Experience, etc.)
- `src/components/ui/` - Reusable UI components
- `src/context/` - React context providers (ThemeContext for dark/light mode)

## Design System

### Light Mode

- Clean, minimal design with subtle accents
- Professional typography with clear hierarchy
- Subtle separator lines between sections
- Optimized for print with A4 formatting

### Dark Mode (Cyber Theme)

- Cyberpunk-inspired interface with tech accents
- Monospaced fonts and terminal-like aesthetic
- Glowing accents and cyber-grid background
- Corner brackets and geometric elements

### Color Palette

- **Light**:

  - Primary: Indigo/blue
  - Text: Dark gray
  - Background: Light gray/white
  - Accents: Medium gray

- **Dark/Cyber**:
  - Primary: Cyan (#0ff)
  - Secondary: Teal
  - Background: Dark blue-black
  - Grid: Subtle blue lines
  - Accents: Neon highlights

## Components

### Core Components

- **Header**: Name, title, contact details, and links to GitHub/LinkedIn
- **ProfessionalSummary**: Brief overview of skills and career focus
- **Skills**: Technologies organized by category with styled tags
- **Experience**: Work history with accomplishments and project links
- **Education**: Educational background and certifications
- **Projects**: Portfolio projects with links to live demos and GitHub

### UI Components

- **Section**: Generic section wrapper with theme-appropriate styling
- **ThemeToggle**: Switch between light and dark/cyber modes
- **PrintButton**: Controls for optimized printing

## Special Features

- Responsive design works on all devices
- A4 print optimization with proper margins and spacing
- Dark/Cyber mode with comprehensive theme transformation
- Direct links to portfolio projects (GitHub, live demos)
- Typography optimized for both screen and print

## Implementation Notes

### Resume Data

- Experience entries include links to relevant portfolio projects
- Skills are categorized by type (Languages & Frameworks, Tools & Libraries, etc.)
- Project links provide direct access to live demos and source code

### Print Optimization

- Carefully adjusted margins, font sizes, and spacing for A4 pages
- Special print-specific styles using `print:` Tailwind variants
- Multi-column layouts where appropriate to maximize space usage

### Dark Mode Implementation

- Complete theme transformation with dedicated dark mode styling
- Custom cyber-themed UI elements visible only in dark mode
- Special text and background effects for the cyberpunk aesthetic

### Responsive Design

- Mobile-first approach with responsive adjustments
- Grid layouts that adapt to available screen space
- Optimized typography at all viewport sizes

## Project Purpose

This resume is designed to showcase frontend development skills while providing a professional overview of work experience, education, and projects. The interactive elements and theme switching demonstrate technical abilities beyond what a traditional PDF resume could convey.

## GitHub Links

- Personal GitHub: https://github.com/Hyde-grey
- Project repositories:
  - Mr.HydeStore: https://github.com/Hyde-grey/Mr-Hyde-Store
  - TraderSphere: https://github.com/Hyde-grey/TraderSphere

## Live Project Links

- Mr.HydeStore: https://mrhydestore.netlify.app/
- TraderSphere: https://tradersphere.netlify.app/
