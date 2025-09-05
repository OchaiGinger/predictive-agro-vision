# PredictivePro - Agricultural Intelligence Platform

A 4-page corporate website for PredictivePro, showcasing advanced machine learning and remote process monitoring solutions for weather forecasting and agricultural optimization in Nigeria.

## Project Overview

This project implements a Minimalistic + Neobrutalist Hybrid design website built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui components.

## Content Source

**Primary content sourced from uploaded PDF**: "PredictivePro - ML & RPM Solutions for Weather and Agriculture Landing Page Content.pdf"

### Content Mapping (PDF → Implementation)

- **Hero Headlines**: Exact headlines from PDF used verbatim in src/data/content.ts
- **Mission Statement**: Full mission paragraph copied from PDF to mission.description
- **Key Capabilities**: Four main capability metrics (99.2% accuracy, real-time monitoring, etc.) from PDF
- **Team Information**: Leadership team names, titles, and bio information from PDF
- **Client Testimonials**: Exact client quotes and Nigerian client names from PDF
- **Metrics**: Performance numbers (99.2%, 25%, 500+, 250+, $50M+) from PDF
- **Contact Information**: Phone (+234 705 862 5114) and address from PDF
- **Service Packages**: Four package types and descriptions from PDF
- **Technology Stack**: ML/AI technologies and platform details from PDF

## Design System

### Color Palette
- **Backgrounds**: White (#FFFFFF) and Charcoal (#111214)
- **Accents**: Deep Green (#0FA67A) and Deep Blue (#0B3D91)
- **Typography**: Exo 2 (headlines), Inter (body), Roboto Condensed (labels)

### Visual Language
- Brutalist rectangular blocks with sharp edges
- Generous whitespace for minimalist balance
- Subtle glassmorphism on floating cards
- Flat rectangular buttons with hover effects

## Pages Structure

1. **Home (/)** - Hero, mission, capabilities preview, team preview, testimonials preview
2. **About (/about)** - Expanded services, platform diagram, technology stack
3. **Solutions (/solutions)** - Industries served, packages, get started section
4. **Team & Contact (/team)** - Full team grid, testimonials, contact form

## Nigerian Team Requirement

**IMPORTANT**: All team member photos and testimonial images MUST feature Nigerian professionals.

### Current Team Images
- `/public/assets/team/isaac-aagache.jpg` - Nigerian CEO portrait
- `/public/assets/team/funmi-adebayo.jpg` - Nigerian CTO portrait  
- `/public/assets/team/chidi-okonkwo.jpg` - Nigerian Professor portrait
- `/public/assets/team/sarah-musa.jpg` - Nigerian Meteorologist portrait

All images use alt text format: "Nigerian — [Full Name] — [Title]"

## Technical Stack

- **Framework**: Vite + React 18 + TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Components**: shadcn/ui with custom brutalist variants
- **Routing**: React Router DOM (client-side SPA)
- **Build**: Vite production build with asset optimization

## Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd predictivepro-website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### File Structure
```
src/
├── components/
│   ├── ui/              # Custom brutalist UI components
│   └── layout/          # Navbar and Footer
├── data/
│   └── content.ts       # All site content from PDF
├── pages/               # Four main pages
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Solutions.tsx
│   └── TeamContact.tsx
└── styles/
    └── index.css        # Design system and typography
```

## HTML Structure (index.html)

**CONFIRMED**: The index.html contains NO meta tags as required. Minimal structure:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>PredictivePro - Agricultural Intelligence</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## Content Customization

To modify content without touching JSX:

1. Edit `/src/data/content.ts` - all text content is centralized here
2. Replace team photos in `/public/assets/team/` (maintain Nigerian requirement)
3. Update contact information in content.ts contact section

## Performance & Accessibility

- Lazy loading for images (`loading="lazy"`)
- Semantic HTML with proper ARIA labels
- Keyboard navigation support
- High contrast design for accessibility
- Responsive design (mobile-first approach)

## Deployment

The site is ready for deployment with:
- Static asset optimization
- Client-side routing configuration
- Compressed images and assets
- Production build optimization

## License

Private project for PredictivePro. All content and images are proprietary.

---

**Contact**: For questions about content updates or technical implementation, refer to the centralized content.ts file and maintain the Nigerian professional imagery requirement for all team/testimonial photos.