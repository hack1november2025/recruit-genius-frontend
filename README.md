# HR AI Recruitment Manager

> AI-powered recruitment platform that streamlines hiring with intelligent job offers, smart CV evaluation, and conversational AI assistance.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)

## 🚀 Overview

**HR AI Recruitment Manager** is a cutting-edge recruitment platform that leverages artificial intelligence to transform the hiring process. Built for recruiters and hiring managers, it automates repetitive tasks, provides data-driven insights, and reduces time-to-hire by up to 70%.

## ✨ Key Features

### 🤖 AI-Generated Job Offers
- Generate complete job postings from brief descriptions in under 30 seconds
- Automatic bias detection and inclusive language suggestions
- Industry-specific terminology and tone adaptation

### 📊 Smart CV Evaluation (8 Core Metrics)
- **Skills Match Score** (0-100%): Semantic skill matching
- **Experience Relevance** (0-10): Weighted by recency
- **Education Fit Score** (0-10): Degree + certifications
- **Achievement Impact** (0-10): Quantified accomplishments
- **Keyword Density** (0-100%): Normalized term usage
- **Employment Gap Score** (0-10): Gap identification
- **Readability & Structure** (0-10): CV clarity
- **AI Confidence Score** (0-100%): Extraction reliability

**Overall Candidate Fit Score**: 40% skills/experience + 30% education/achievements + 30% quality/risk

### 💬 CV Database Chat & Prompting
- Natural language querying via web UI and Telegram
- RAG-powered contextual search with follow-up questions
- Candidate comparison and intelligent filtering
- Multi-channel interaction (Web + Telegram)

### 📈 Interactive Dashboard
- Real-time recruitment metrics and analytics
- Candidate pipeline visualization
- AI-generated insights and recommendations
- Score distributions and drill-down capabilities

## 🛠 Technology Stack

- **Framework**: [Next.js 16.0.0](https://nextjs.org/) with App Router
- **Language**: [TypeScript 5.x](https://www.typescriptlang.org/)
- **UI Library**: [React 19.2.0](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/) (New York style)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 📋 Prerequisites

- **Node.js**: 20.x or higher (LTS recommended)
- **pnpm**: Latest version (installed globally)

## 🚀 Quick Start

### 1. Install pnpm (if not already installed)

```bash
npm install -g pnpm
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Run the development server

```bash
pnpm dev
```

### 4. Open your browser

Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

```bash
pnpm dev      # Start development server with Turbopack
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

## 🎨 Design System

### Color Palette

- **Primary Gradient**: Violet (#8b5cf6) → Sky Blue (#0ea5e9)
- **Background**: Cream (#FAF8F5)
- **Glassmorphism**: White with backdrop blur
- **Accent Colors**: Fuchsia, Sky, Amber, Teal

### Typography

- **Font Family**: Poppins (Google Fonts)
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

### Component Patterns

- Hero section with animated background blobs
- Feature cards with gradient backgrounds
- Metrics grid with color-coded indicators
- Responsive mobile-first design

## 📂 Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Landing page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── HeroSection.tsx     # Hero with stats
│   │   ├── FeaturesSection.tsx # Feature cards
│   │   ├── MetricsSection.tsx  # Evaluation metrics
│   │   └── CTASection.tsx      # Call-to-action
│   └── lib/
│       └── utils.ts            # Utility functions
├── docs/
│   ├── COLOR_PALETTE.md        # Color system
│   ├── SETUP.md                # Setup guide
│   ├── STYLEGUIDE.md           # Design system
│   ├── TECH_STACK.md           # Technology details
│   └── LANDING_PAGE.md         # Landing page docs
├── package.json
├── tsconfig.json
├── next.config.ts
└── components.json
```

## 📖 Documentation

Comprehensive documentation is available in the `/docs` folder:

- **[SETUP.md](docs/SETUP.md)**: Installation and setup instructions
- **[TECH_STACK.md](docs/TECH_STACK.md)**: Detailed technology overview
- **[STYLEGUIDE.md](docs/STYLEGUIDE.md)**: Complete design system guide
- **[COLOR_PALETTE.md](docs/COLOR_PALETTE.md)**: Color usage guidelines
- **[LANDING_PAGE.md](docs/LANDING_PAGE.md)**: Landing page documentation

## 🎯 Development Guidelines

This project follows strict development guidelines:

1. **TypeScript First**: All code uses TypeScript with strict mode
2. **Clean Code**: Prioritize readability and maintainability
3. **Component Design**: Small, focused components with single responsibility
4. **Styling**: Tailwind CSS utility classes only
5. **File Organization**: Logical grouping by feature
6. **Documentation**: All utilities and components documented

See [`.github/copilot-instructions.md`](.github/copilot-instructions.md) for complete guidelines.

## 🔧 Configuration

### TypeScript

TypeScript is configured with strict mode and path aliases:

```json
{
  "compilerOptions": {
    "strict": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Tailwind CSS v4

Tailwind is configured using the new CSS-first approach in `src/app/globals.css`:

```css
@import "tailwindcss";
@theme inline {
  --color-background: var(--background);
  /* ... other theme variables */
}
```

### shadcn/ui

Components are configured with:
- **Style**: New York
- **Base Color**: Neutral
- **Icon Library**: Lucide React

## 🚀 Deployment

### Recommended: Vercel

This project is optimized for deployment on [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with one click

### Alternative Platforms

- **Docker**: Dockerfile support coming soon
- **Node.js Hosting**: Any platform supporting Node.js 20+
- **Static Export**: Configure for static export if needed

## 📊 Performance Targets

- **Page Load**: < 2 seconds
- **First Contentful Paint**: < 1.5 seconds
- **Largest Contentful Paint**: < 2.5 seconds
- **Time to Interactive**: < 3 seconds

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML throughout
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast ratios

## 🌐 Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## 📈 Future Enhancements

- [ ] Authentication integration (NextAuth.js)
- [ ] Backend API connection
- [ ] Form validation (React Hook Form + Zod)
- [ ] State management (Zustand)
- [ ] Data fetching (TanStack Query)
- [ ] Admin dashboard
- [ ] Candidate portal
- [ ] Analytics integration

## 👥 Team

**Hackathon Team**

- **Contact**: valerio.silva@klx.pt
- **Created**: November 18, 2025
- **Version**: 1.0

## 📄 License

Copyright © 2025 Hackathon Team. All rights reserved.

---

## 🤝 Contributing

Contributions are welcome! Please read the development guidelines in [`.github/copilot-instructions.md`](.github/copilot-instructions.md) before submitting pull requests.

### Steps to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Issues

Found a bug or have a feature request? Please open an issue on GitHub.

## 📞 Support

For questions or support:
- **Email**: valerio.silva@klx.pt
- **Documentation**: See `/docs` folder
- **GitHub Issues**: For bug reports and feature requests

---

**Built with ❤️ by the Hackathon Team**

*Revolutionizing recruitment with AI-powered intelligence*
