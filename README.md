# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a clean, professional design with smooth animations, dark mode support, and interactive components.

## Features

- **Responsive Design** - Fully optimized for all screen sizes (mobile, tablet, desktop)
- **Dark Mode** - Toggle between light and dark themes with system preference detection
- **Smooth Scroll Animations** - Reveal animations as you scroll through sections
- **Interactive Navigation** - Sticky navbar with scroll spy functionality
- **Project Showcase** - Filterable project gallery with detailed slide-over panels
- **Skills Section** - Categorized technical skills with visual tags
- **Experience Timeline** - Collapsible timeline of work experience and education
- **Services Carousel** - Auto-advancing carousel showcasing services offered
- **Contact Section** - Direct links to email, GitHub, LinkedIn, and WhatsApp
- **3D Background** - Three.js-powered animated background in hero section
- **Accessibility** - ARIA labels, keyboard navigation, and semantic HTML

## Tech Stack

- **Build Tool:** Vite
- **Language:** TypeScript
- **Framework:** React 18
- **Styling:** Tailwind CSS with custom design tokens
- **UI Components:** shadcn-ui (Radix UI primitives)
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **3D Graphics:** Three.js
- **Forms:** React Hook Form with Zod validation
- **Testing:** Vitest with React Testing Library

## Project Structure

```
portfolio/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media
│   ├── components/        # React components
│   │   ├── ui/            # shadcn-ui components
│   │   ├── Navbar.tsx     # Main navigation
│   │   ├── Hero.tsx       # Hero section with 3D background
│   │   ├── About.tsx      # About section
│   │   ├── Skills.tsx     # Skills showcase
│   │   ├── Projects.tsx   # Project gallery
│   │   ├── Experience.tsx # Work experience timeline
│   │   ├── Certifications.tsx # Credentials display
│   │   ├── Services.tsx   # Services carousel
│   │   ├── Contact.tsx    # Contact information
│   │   └── Footer.tsx     # Site footer
│   ├── hooks/             # Custom React hooks
│   │   ├── useScrollReveal.ts  # Scroll animations
│   │   └── use-mobile.tsx      # Mobile detection
│   ├── lib/               # Utility functions
│   ├── pages/             # Page components
│   ├── test/              # Test files
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies
├── tailwind.config.ts     # Tailwind configuration
├── vite.config.ts         # Vite configuration
└── tsconfig.json          # TypeScript configuration
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Lint code
npm run lint
```

## Deployment

The project is configured for GitHub Pages deployment:

```bash
# Build and deploy to GitHub Pages
npm run deploy
```

## Customization

### Theme Colors

Edit the CSS variables in `src/index.css` to customize the color scheme:

```css
:root {
  --accent: 40 67% 48%;      /* Primary accent color */
  --background: 40 33% 97%; /* Light mode background */
  --foreground: 60 5% 7%;   /* Light mode text */
}

.dark {
  --background: 60 5% 7%;   /* Dark mode background */
  --foreground: 40 33% 97%; /* Dark mode text */
}
```

### Adding Projects

Edit the `PROJECTS` array in `src/components/Projects.tsx`:

```typescript
const PROJECTS: Project[] = [
  {
    index: "01",
    name: "Your Project Name",
    shortDesc: "Brief description",
    fullDesc: "Detailed description",
    tags: ["React", "TypeScript"],
    image: yourImage,
    // ... more fields
  },
];
```

### Adding Skills

Edit the `SKILLS` array in `src/components/Skills.tsx`:

```typescript
const SKILLS = [
  {
    category: "Frontend",
    icon: Code,
    tags: ["React", "TypeScript", "Tailwind"],
  },
];
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for your own portfolio.

## Author

**Zoren A. Corbillon**
- GitHub: [@zrncrblln](https://github.com/zrncrblln)
- LinkedIn: [zoren-corbillon](https://linkedin.com/in/zoren-corbillon-96719a138)
- Email: zorencorbillon@gmail.com
