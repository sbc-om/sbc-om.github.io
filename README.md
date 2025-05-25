# Senior Blockchain Company (SBC) 🚀

A modern, professional website for Senior Blockchain Company built with [Astro](https://astro.build/) and styled with [Tailwind CSS](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/).

## 🌟 Features

### ✨ Design & UX
- **Modern, Responsive Design** - Beautiful UI that works on all devices
- **Dark Theme Support** - Professional "abyss" theme with gradients
- **Smooth Animations** - Enhanced user experience with custom animations
- **Loading Screen** - Professional loading experience with animated elements
- **Back to Top Button** - Easy navigation with smooth scrolling
- **Enhanced Scrollbars** - Custom styled scrollbars for better aesthetics

### 🛠️ Technical Features
- **Static Site Generation** - Built with Astro for optimal performance
- **TypeScript Support** - Type-safe development experience
- **SEO Optimized** - Comprehensive meta tags and structured data
- **Sitemap & Robots.txt** - Automated SEO file generation
- **404 Page** - Custom error page with navigation options
- **Performance Optimized** - Optimized images and assets

### 📱 Components & Sections
- **Hero Section** - Animated typing effect with gradient backgrounds
- **About Section** - Company overview with animated cards
- **Services Section** - Detailed service offerings with icons
- **Portfolio Section** - Project showcase with filtering capabilities
- **Testimonials & Achievements** - Client testimonials with animated counters
- **Team Section** - Team member profiles
- **Timeline** - Company roadmap and milestones
- **Contact Section** - Contact form with social media integration

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sbc-om/sbc-om.github.io.git
   cd sbc-om.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

## 🏗️ Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── banner.jpg
├── src/
│   ├── assets/
│   │   ├── sbc-logo.svg
│   │   └── sbc-logo-about.svg
│   ├── components/
│   │   ├── BackToTop.astro
│   │   ├── Footer.astro
│   │   ├── HeroSection.astro
│   │   ├── LoadingScreen.astro
│   │   ├── Nav.astro
│   │   └── sections/
│   │       ├── About.astro
│   │       ├── EnhancedPortfolio.astro
│   │       ├── ServicesSection.astro
│   │       ├── TestimonialsAchievements.astro
│   │       ├── Timeline.astro
│   │       └── Team.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── work.astro
│   │   ├── contact.astro
│   │   ├── 404.astro
│   │   ├── blog/
│   │   │   └── index.astro
│   │   ├── robots.txt.ts
│   │   └── sitemap.xml.ts
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🛠️ Built With

- **[Astro](https://astro.build/)** - Static Site Generator
- **[TypeScript](https://www.typescriptlang.org/)** - Type Safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-First CSS Framework
- **[DaisyUI](https://daisyui.com/)** - Tailwind CSS Components
- **[React](https://reactjs.org/)** - Interactive Components
- **[Svelte](https://svelte.dev/)** - Additional Framework Support
- **[FontAwesome](https://fontawesome.com/)** - Icons
- **[Vercel](https://vercel.com/)** - Deployment Platform

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run start        # Alias for dev

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Utilities
npm run astro        # Run Astro CLI commands
```

## 🎨 Customization

### Colors & Themes
The website uses DaisyUI's "abyss" theme. You can customize colors in:
- `tailwind.config.mjs` - Tailwind configuration
- `src/styles/global.css` - Global styles and animations

### Content
Update content in the respective component files:
- **Hero Section**: `src/components/HeroSection.astro`
- **About**: `src/components/sections/About.astro`
- **Services**: `src/components/sections/ServicesSection.astro`
- **Portfolio**: `src/components/sections/EnhancedPortfolio.astro`
- **Team**: `src/components/sections/Team.astro`

### SEO
Update SEO settings in:
- `src/layouts/BaseLayout.astro` - Meta tags and titles
- `src/pages/sitemap.xml.ts` - Sitemap configuration

## 🚀 Deployment

### Vercel (Recommended)
The project is configured for Vercel deployment:

1. **Connect your repository** to Vercel
2. **Configure build settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. **Deploy** - Automatic deployments on push

### Other Platforms
The project generates static files that can be deployed to:
- GitHub Pages
- Netlify
- Cloudflare Pages
- AWS S3 + CloudFront

## 📄 License

This project is proprietary to Senior Blockchain Company (SBC).

## 🤝 Contact

- **Website**: [https://sbc-om.github.io](https://sbc-om.github.io)
- **Email**: info@seniorblockchain.io
- **GitHub**: [@sbc-om](https://github.com/sbc-om)

---

**Senior Blockchain Company** - Decentralizing the Future 🌐