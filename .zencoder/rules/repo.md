---
description: Repository Information Overview
alwaysApply: true
---

# BSides Agra 2025 Website Information

## Summary
A React-based website for the BSides Agra 2025 cybersecurity conference, featuring information about the event, speakers, schedule, sponsors, and registration functionality. The site uses a dark theme with cool scrolling animations.

## Structure
- **public/**: Static assets including logos and manifest files
- **src/**: React source code with component-based architecture
  - **components/**: UI components organized by feature (About, Hero, Speakers, etc.)
  - **styles/**: Global CSS and styling utilities

## Language & Runtime
**Language**: JavaScript (React)
**Version**: React 19.1.1
**Build System**: Create React App
**Package Manager**: npm

## Dependencies
**Main Dependencies**:
- react: ^19.1.1
- react-dom: ^19.1.1
- framer-motion: ^12.23.12
- lucide-react: ^0.542.0

**Development Dependencies**:
- tailwindcss: ^3.4.0
- postcss: ^8.4.31
- autoprefixer: ^10.4.16

## Build & Installation
```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## UI Framework
**CSS Framework**: Tailwind CSS
**Theme**: Dark theme with BSides red (#e50914) as primary color
**Animation**: Framer Motion for component animations with custom scroll animations
**Components**: Modular component structure with reusable UI elements