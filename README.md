# Wheeldogg Blog

Personal blog and digital space for Wheeldogg - exploring the intersections of Music, Software, Nature, Fitness, and Visual Arts.

## About

This is the personal website and blog of Wheeldogg, a multidisciplinary creator with passions spanning creative and technical domains. The site features content across several categories:

- **Music** - Musical projects, compositions, and audio explorations
- **Software** - Development projects, technical writing, and code experiments
- **Nature** - Outdoor adventures, nature photography, and environmental observations
- **Photography** - Visual storytelling and photographic works
- **Drone** - Aerial photography and videography
- **Fitness** - Health, wellness, and athletic pursuits

Visit the live site at [wheeldogg.com](https://wheeldogg.com)

## Tech Stack

This blog is built with a modern, performance-focused static site generation stack:

### Core Technologies

- **[Eleventy (11ty)](https://www.11ty.dev/)** (v3.0.0) - Fast and flexible static site generator that transforms templates into HTML
- **[Twig](https://twig.symfony.com/)** - Powerful templating engine via `@web-alchemy/eleventy-plugin-twig` for clean, maintainable templates
- **[Tailwind CSS](https://tailwindcss.com/)** (v4.0.0) - Utility-first CSS framework for rapid UI development
- **[Vite](https://vitejs.dev/)** (v6.0.0) - Lightning-fast build tool and development server
- **[Alpine.js](https://alpinejs.dev/)** (v3.14.0) - Minimal JavaScript framework for interactive components

### Tailwind Plugins

- `@tailwindcss/forms` - Beautiful form styles
- `@tailwindcss/typography` - Gorgeous typographic defaults for markdown content

### Build Tools

- `npm-run-all` - Run multiple npm scripts in parallel or sequential
- `rimraf` - Cross-platform file deletion for clean builds

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/wheeldogg_blog.git
cd wheeldogg_blog

# Install dependencies
npm install
```

### Development

```bash
# Start development server with hot reload
npm run dev
```

This runs both Eleventy and Vite in watch mode. The site will be available at `http://localhost:8080`

### Build

```bash
# Create production build
npm run build
```

The optimized site will be generated in the `dist/` directory.

### Preview

```bash
# Preview production build locally
npm run preview
```

## Project Structure

```
wheeldogg_blog/
├── src/              # Source files
│   ├── _includes/    # Twig templates and partials
│   ├── _data/        # Global data files
│   ├── _styles/      # Stylesheets
│   ├── _scripts/     # JavaScript files
│   └── [pages]       # Content pages and blog posts
├── public/           # Static assets (images, fonts, etc.)
├── dist/             # Generated site (gitignored)
├── eleventy.config.js # Eleventy configuration
├── vite.config.js    # Vite configuration
└── package.json      # Project dependencies
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run clean` - Remove dist directory
- `npm run preview` - Preview production build locally

## Configuration

- **Eleventy config**: `eleventy.config.js` - Configures Twig plugin, global data, and build settings
- **Vite config**: `vite.config.js` - Configures build optimization and asset handling
- **Tailwind config**: Configured via `@tailwindcss/vite` plugin

## Deployment

The site is automatically deployed via GitHub Actions when pushing to the main branch. The workflow handles building and deploying to the production environment.

## License

Copyright © 2025 Wheeldogg. All rights reserved.

---

Built with passion for the web and creative expression.
