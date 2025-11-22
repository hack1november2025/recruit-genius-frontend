# Recruit Genius - AI-Powered Recruitment Platform

![Recruit Genius](https://img.shields.io/badge/Recruit_Genius-v1.0.0-8b5cf6?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-16.0.0-000000?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)

**Transform your recruitment process with AI-powered CV analysis and intelligent candidate matching**

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Quick Start](#quick-start)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Core Features](#core-features)
- [API Integration](#api-integration)
- [Docker Deployment](#docker-deployment)
- [Development Guidelines](#development-guidelines)
- [Documentation](#documentation)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Overview

**Recruit Genius** is a cutting-edge AI-powered recruitment management platform designed to streamline and optimize the hiring process. Built with modern web technologies, it provides HR professionals with intelligent tools to analyze CVs, match candidates to job offers, and make data-driven hiring decisions.

### Why Recruit Genius

- **AI-Powered Analysis**: Advanced machine learning algorithms analyze CVs across 8 key metrics
- **Smart Matching**: Intelligent candidate-job matching with semantic similarity scoring
- **Data-Driven Insights**: Comprehensive analytics for informed decision-making
- **Modern Stack**: Built with Next.js 16, React 19, and TypeScript for optimal performance
- **Beautiful UI**: Glassmorphism design with Tailwind CSS v4 and shadcn/ui components
- **Responsive**: Fully responsive design that works on all devices
- **Type-Safe**: Full TypeScript coverage for reliability and maintainability

## Key Features

### Core Functionality

#### 1. Intelligent CV Analysis

**Multi-Metric Evaluation** - Analyzes CVs across 8 comprehensive metrics:

- **Semantic Similarity Score** (35% weight): Contextual matching with job requirements
- **Skills Match Score** (25% weight): Technical and soft skills alignment
- **Experience Relevance Score** (20% weight): Years and quality of relevant experience
- **Education Fit Score** (10% weight): Academic background compatibility
- **Achievement Impact Score** (15% weight): Quantified accomplishments
- **Keyword Density Score** (10% weight): Industry-specific terminology
- **Employment Gap Score** (-5% penalty): Career continuity assessment
- **Readability Score** (5% weight): CV clarity and structure
- **AI Confidence Score**: Overall prediction confidence (>80% threshold)

**Additional Features**:

- Composite Scoring: Weighted algorithm combining all metrics for final match score
- Real-Time Processing: Fast CV parsing and analysis
- Batch Upload: Process multiple CVs simultaneously

#### 2. Smart Candidate Matching

- **Semantic Search**: AI-powered matching beyond keyword matching
- **Seniority Analysis**: Automatic role-level detection (Junior, Mid, Senior, Lead)
- **Location Compatibility**: Geographic fit assessment
- **Skills Gap Analysis**: Identify missing qualifications
- **Experience Breakdown**: Total vs. relevant experience comparison
- **Detailed Rationale**: AI-generated explanation for each match

#### 3. Job Offer Management

- **Comprehensive Job Profiles**: Title, description, department, location, salary range
- **Status Tracking**: Active, Draft, Closed job status management
- **Metadata Support**: Custom fields for additional job requirements
- **Candidate Pipeline**: View matched candidates per job offer
- **Sorting & Filtering**: Find the right candidates quickly

#### 4. Candidate Database

- **Centralized Repository**: All candidate information in one place
- **Profile Management**: Name, email, phone, skills, experience, education
- **Status Workflow**: New → Reviewing → Shortlisted → Hired/Rejected
- **Notes & Comments**: Add hiring manager observations
- **CV Storage**: Access original CV documents
- **Search & Filter**: Quick candidate lookup

#### 5. Interactive CV Chat

- **Ask Questions**: Natural language queries about candidate CVs
- **Detailed Insights**: Get specific information from CVs instantly
- **Context-Aware**: AI understands CV content and context
- **Multi-CV Support**: Compare multiple candidates

### User Experience

**Beautiful Landing Page**:

- Hero section with animated gradient blobs
- Feature showcase with glassmorphism cards
- Metrics visualization
- Call-to-action sections

**Intuitive Dashboard**:

- Quick stats overview (candidates count, active jobs)
- Easy navigation to key features
- Responsive design for mobile and desktop

**Modern Design System**:

- Glassmorphism effects with backdrop blur
- Gradient accents (violet to sky blue signature)
- Smooth transitions and hover effects
- Accessible color contrast
- Dark mode support (via CSS variables)

## Technology Stack

### Frontend Framework

- **Next.js 16.0.0**: React framework with App Router, Server Components, and optimizations
- **React 19.2.0**: Latest React with concurrent rendering and improved performance
- **TypeScript 5.x**: Strict type checking for reliability

### Styling & UI

- **Tailwind CSS v4**: Utility-first CSS framework with CSS-first configuration
- **shadcn/ui**: High-quality, accessible React components built on Radix UI
- **Lucide React**: Modern icon library (546+ icons)
- **Radix UI Primitives**: Unstyled, accessible component primitives
  - Dialog, Progress, Separator, Tooltip, Slot

### Design System

- **CVA (class-variance-authority)**: Component variant management
- **clsx**: Conditional className utility
- **tailwind-merge**: Intelligent Tailwind class merging
- **Poppins Font**: Google Font via next/font optimization

### State & Interactions

- **Embla Carousel**: Smooth, performant carousel with autoplay
- **Sonner**: Beautiful toast notifications
- **React Hooks**: Custom hooks for reusable logic

### Development Tools

- **ESLint 9**: Code quality and consistency
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

### Package Management

- **pnpm 10.19.0**: Fast, efficient package manager

### Deployment

- **Docker**: Containerized deployment with multi-stage builds
- **Standalone Output**: Optimized production builds
- **Docker Compose**: Multi-service orchestration

## Quick Start

### Prerequisites

Ensure you have the following installed:

- **Node.js**: v20.x or higher
- **pnpm**: Latest version (install: `npm install -g pnpm`)
- **Git**: For version control

### Installation in 3 Steps

```bash
# 1. Clone the repository
git clone https://github.com/hack1november2025/recruit-genius-frontend.git
cd recruit-genius-frontend

# 2. Install dependencies
pnpm install

# 3. Start development server
pnpm dev
```

**That's it!** Open [http://localhost:3000](http://localhost:3000) in your browser.

### Expected Output

```text
▲ Next.js 16.0.0
- Local:        http://localhost:3000
- Environments: .env

✓ Ready in 2.5s
```

### Environment Setup

Create a `.env.local` file in the root directory:

```env
# Backend API URL
NEXT_PUBLIC_API_URL=http://localhost:8000

# Environment
NODE_ENV=development
```

## Installation

### Detailed Setup

#### Step 1: Install Node.js

```bash
# Check Node.js version
node --version  # Should be v20.x or higher

# If not installed, download from https://nodejs.org/
```

#### Step 2: Install pnpm

```bash
# Install pnpm globally
npm install -g pnpm

# Verify installation
pnpm --version
```

#### Step 3: Clone Repository

```bash
# Clone from GitHub
git clone https://github.com/hack1november2025/recruit-genius-frontend.git

# Navigate to project
cd recruit-genius-frontend
```

#### Step 4: Install Dependencies

```bash
# Install all dependencies (takes 1-3 minutes)
pnpm install
```

This installs:

- Next.js 16.0.0
- React 19.2.0
- TypeScript 5.x
- Tailwind CSS v4
- shadcn/ui components
- All other dependencies

#### Step 5: Start Development Server

```bash
# Start with Turbopack (faster)
pnpm dev

# Or on a different port
pnpm dev -p 3001
```

#### Step 6: Build for Production

```bash
# Create optimized production build
pnpm build

# Start production server
pnpm start
```

## Project Structure

```text
recruit-genius-frontend/
│
├── Configuration Files
│   ├── package.json              # Dependencies and scripts
│   ├── tsconfig.json             # TypeScript configuration
│   ├── next.config.ts            # Next.js configuration (standalone output)
│   ├── tailwind.config.ts        # Tailwind CSS configuration
│   ├── postcss.config.js         # PostCSS configuration
│   ├── components.json           # shadcn/ui configuration
│   ├── next-env.d.ts            # Next.js TypeScript declarations
│   └── pnpm-lock.yaml           # Dependency lock file
│
├── Docker Files
│   ├── Dockerfile               # Multi-stage production build
│   ├── docker-compose.yaml      # Service orchestration
│   ├── docker-entrypoint.sh     # Container entry point
│   ├── docker-start.sh          # Quick start script
│   └── DOCKER.md                # Docker documentation
│
├── Documentation
│   └── docs/
│       ├── COLOR_PALETTE.md     # Color system reference
│       ├── GETTING_STARTED.md   # Quick start guide
│       ├── LANDING_PAGE.md      # Landing page documentation
│       ├── SETUP.md             # Setup instructions
│       ├── STYLEGUIDE.md        # Complete design system
│       └── TECH_STACK.md        # Technology details
│
└── Source Code (src/)
    │
    ├── app/ (Next.js App Router)
    │   ├── layout.tsx                    # Root layout (Poppins font)
    │   ├── page.tsx                      # Landing page
    │   ├── globals.css                   # Global styles & Tailwind
    │   │
    │   ├── app/                          # Main application
    │   │   ├── page.tsx                  # Dashboard (stats, overview)
    │   │   │
    │   │   ├── candidates/               # Candidate management
    │   │   │   ├── page.tsx             # Candidates list
    │   │   │   └── [id]/                # Dynamic candidate routes
    │   │   │       └── cvs/
    │   │   │           └── page.tsx     # Candidate CV details
    │   │   │
    │   │   ├── cv-chat/                  # CV chat interface
    │   │   │   └── page.tsx             # Chat with CV AI
    │   │   │
    │   │   ├── job-offer/                # Job offer management
    │   │   │   ├── page.tsx             # Jobs list
    │   │   │   ├── new/                 # Create new job
    │   │   │   │   └── page.tsx
    │   │   │   └── [job_id]/            # Dynamic job routes
    │   │   │       ├── page.tsx         # Job details
    │   │   │       └── matches/
    │   │   │           └── page.tsx     # Matched candidates
    │   │   │
    │   │   └── upload-cv/                # CV upload
    │   │       └── page.tsx             # Upload interface
    │   │
    │   └── login/                        # Authentication
    │       └── page.tsx                  # Login page
    │
    ├── components/
    │   ├── ui/                           # shadcn/ui components
    │   ├── AppLayout.tsx                 # Main app layout wrapper
    │   ├── CTASection.tsx                # Call-to-action section
    │   ├── FeaturesSection.tsx           # Features showcase
    │   ├── HeroSection.tsx               # Hero with animated blobs
    │   └── MetricsSection.tsx            # CV metrics display
    │
    ├── lib/
    │   └── utils.ts                      # Utility functions (cn helper)
    │
    └── types/
        ├── candidate.ts                  # Candidate interface
        ├── chat.ts                       # Chat message types
        ├── cv-detail.ts                  # CV detail types
        ├── cv.ts                         # CV types
        ├── job.ts                        # Job offer interface
        └── matching.ts                   # Matching algorithm types
```

### Key Directories Explained

**src/app/ - Next.js App Router**

- File-based routing: Each folder = route segment
- Server Components: Default for optimal performance
- Layouts: Shared UI across routes
- Dynamic routes: `[id]` syntax for variable segments

**src/components/ - React Components**

- `ui/`: shadcn/ui components (Button, Card, Dialog, etc.)
- Feature components: Landing page sections
- Layout components: AppLayout for consistent structure

**src/lib/ - Utilities**

- `utils.ts`: Helper functions (className merging)
- Reusable logic extracted from components

**src/types/ - TypeScript Types**

- Centralized type definitions
- Interfaces for API responses
- Type safety across the application

**docs/ - Documentation**

- Complete project documentation
- Design system reference
- Setup and usage guides

## Core Features

### 1. Landing Page

**File**: `src/app/page.tsx`

**Purpose**: Marketing and product showcase

**Sections**:

1. **Hero Section** (`HeroSection.tsx`):
   - Animated gradient blobs background (fuchsia, sky, amber, teal)
   - Main headline with value proposition
   - Two CTAs: "Get Started" and "Watch Demo"
   - Three key statistics cards (90% accuracy, 10x faster, 98% satisfaction)

2. **Features Section** (`FeaturesSection.tsx`):
   - 6 feature cards with icons (Lucide React)
   - AI-powered matching, automated screening, skills assessment
   - Cultural fit analysis, real-time analytics, seamless integration
   - Hover effects (scale + shadow)
   - Color-coded gradients

3. **Metrics Section** (`MetricsSection.tsx`):
   - 8 detailed CV evaluation metric cards
   - Visual score ranges with colors
   - Composite score showcase
   - Grid layout (responsive: 1/2/4 columns)

4. **CTA Section** (`CTASection.tsx`):
   - Final conversion section
   - "Start Free Trial" and "Schedule Demo" buttons
   - Trust indicators (no credit card, 14-day trial)

**Design Features**:

- Glassmorphism (blur effects, transparency)
- Gradient backgrounds (violet to sky blue)
- Animated blobs (CSS keyframes)
- Responsive design (mobile-first)
- Accessibility (WCAG 2.1 AA)

### 2. Dashboard

**File**: `src/app/app/page.tsx`

**Purpose**: Main application hub with overview statistics

**Features**:

- Real-time data fetching from backend API
- Candidate count display with loading states
- Active job offers count
- Quick action buttons:
  - Create Job Offer
  - Upload CVs
- Empty state with onboarding guidance
- Glassmorphism card design

**API Integration**:

```typescript
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

// Fetch candidates
fetch(`${API_BASE_URL}/api/v1/candidates?skip=0&limit=100`)

// Fetch jobs
fetch(`${API_BASE_URL}/api/v1/jobs?skip=0&limit=100`)
```

### 3. Candidate Management

**File**: `src/app/app/candidates/page.tsx`

**Purpose**: Browse and manage candidate profiles

**Features**:

- Grid layout of candidate cards
- Each card displays:
  - Name and experience years
  - Status badge (New, Reviewing, Shortlisted, Hired, Rejected)
  - Contact information (email, phone)
  - Date added
  - Skills tags (first 3 visible)
- Status color coding:
  - New: Sky blue
  - Reviewing: Amber
  - Shortlisted: Violet
  - Hired: Green
  - Rejected: Stone gray
- Click to view detailed CV information
- Upload CV button for quick access
- Empty state with call-to-action
- Skeleton loading states

**Navigation**:

```text
/app/candidates                    # Candidates list
/app/candidates/[id]/cvs          # Candidate CV details
```

### 4. Job Offer Management

**File**: `src/app/app/job-offer/page.tsx`

**Purpose**: Create and manage job postings

**Features**:

- List view of all job offers
- Each job card displays:
  - Job title
  - Department, location, salary range
  - Status (Active, Draft, Closed)
  - Created date
  - Description preview
- Color-coded status badges
- Click to view job details and matches
- Create new job offer button
- Empty state guidance
- Skeleton loading states

**Navigation**:

```text
/app/job-offer                    # Jobs list
/app/job-offer/new               # Create new job
/app/job-offer/[job_id]          # Job details
/app/job-offer/[job_id]/matches  # Matched candidates
```

### 5. CV Upload

**File**: `src/app/app/upload-cv/page.tsx`

**Purpose**: Upload candidate CVs for processing

**Features** (Implementation pending):

- Drag-and-drop file upload
- Multi-file support
- PDF, DOC, DOCX formats
- Progress indicators
- Success/error feedback
- Automatic parsing and candidate creation

### 6. CV Chat

**File**: `src/app/app/cv-chat/page.tsx`

**Purpose**: Interactive AI chat about candidate CVs

**Features** (Implementation pending):

- Natural language queries
- Context-aware responses
- Multi-candidate comparison
- Export chat history
- Suggested questions

### 7. Candidate Details

**File**: `src/app/app/candidates/[id]/cvs/page.tsx`

**Purpose**: Detailed view of candidate CV with all metrics

**Features** (Implementation pending):

- Complete CV text display
- All 8 metric scores with visualizations
- Skills breakdown
- Experience timeline
- Education details
- AI-generated summary
- Notes section
- Status update controls

## API Integration

### Backend Connection

The frontend communicates with a FastAPI backend for all data operations.

**Environment Variable**:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### API Endpoints Used

#### Candidates

```typescript
// Get all candidates
GET /api/v1/candidates?skip=0&limit=100
Response: Candidate[]

// Get single candidate
GET /api/v1/candidates/{candidate_id}
Response: Candidate

// Create candidate
POST /api/v1/candidates
Body: { name, email, phone?, resume_text?, resume_url? }
Response: Candidate

// Update candidate
PUT /api/v1/candidates/{candidate_id}
Body: Partial<Candidate>
Response: Candidate
```

#### Jobs

```typescript
// Get all jobs
GET /api/v1/jobs?skip=0&limit=100
Response: Job[]

// Get single job
GET /api/v1/jobs/{job_id}
Response: Job

// Create job
POST /api/v1/jobs
Body: { title, description, department?, location?, salary_range? }
Response: Job

// Update job
PUT /api/v1/jobs/{job_id}
Body: Partial<Job>
Response: Job
```

#### Matching

```typescript
// Get matched candidates for job
GET /api/v1/jobs/{job_id}/matches
Response: MatchingResponse

// MatchingResponse includes:
// - summary: MatchingSummary
// - candidates: MatchingCandidate[]
```

### Type Definitions

**Candidate Type** (`src/types/candidate.ts`):

```typescript
export interface Candidate {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  resume_text: string | null;
  resume_url: string | null;
  skills: string[];
  experience_years: string | null;
  education: string | null;
  notes: string | null;
  status: string;  // "new" | "reviewing" | "shortlisted" | "hired" | "rejected"
  analysis: Record<string, unknown> | null;
  created_at: string;
  updated_at: string | null;
}
```

**Job Type** (`src/types/job.ts`):

```typescript
export interface Job {
  id: number;
  title: string;
  description: string;
  department: string | null;
  location: string | null;
  salary_range: string | null;
  additional_metadata: Record<string, unknown> | null;
  status: string;  // "active" | "draft" | "closed"
  created_at: string;
  updated_at: string | null;
}
```

**Matching Type** (`src/types/matching.ts`):

```typescript
export interface MatchingCandidate {
  candidate_id: number;
  cv_id: number;
  name: string;
  current_role: string;
  match_score: number;
  semantic_similarity_score: number;
  skills_match_score: number;
  experience_relevance_score: number;
  education_fit_score: number;
  achievement_impact_score: number;
  keyword_density_score: number;
  employment_gap_score: number;
  readability_score: number;
  ai_confidence_score: number;
  experience: {
    total_years_experience: number;
    relevant_experience_years: number;
    relevant_summary: string;
  };
  seniority_match: string;
  location_match: {
    candidate_location: string;
    candidate_city: string;
    compatible: boolean;
  };
  overall_rationale: string;
  metrics_details: {
    semantic_similarity: number;
    weights_used: {
      skills_experience: number;
      education_achievements: number;
      quality_risk: number;
    };
    threshold_flags: {
      skills_below_70: boolean;
      confidence_below_80: boolean;
      employment_gaps_detected: boolean;
    };
  };
}

export interface MatchingSummary {
  role_title: string;
  primary_stack_or_domain: string;
  key_required_skills: string[];
  nice_to_have_skills: string[];
  hard_constraints_applied: string[];
  total_candidates_evaluated: number;
  top_candidates_returned: number;
}

export interface MatchingResponse {
  job_id: number;
  summary: MatchingSummary;
  candidates: MatchingCandidate[];
}
```

### Error Handling

```typescript
try {
  const response = await fetch(`${API_BASE_URL}/api/v1/candidates`);
  if (response.ok) {
    const data = await response.json();
    // Handle success
  } else {
    // Handle HTTP errors
    console.error('API error:', response.status);
  }
} catch (error) {
  // Handle network errors
  console.error('Network error:', error);
}
```

## Docker Deployment

### Quick Start with Docker

**File**: `docker-start.sh`

```bash
#!/bin/bash
# Quick start script for Docker deployment

# Start services
docker-compose up -d

# Show logs
docker-compose logs -f frontend
```

**Usage**:

```bash
# Make executable
chmod +x docker-start.sh

# Run
./docker-start.sh
```

### Docker Configuration

**Dockerfile** (Multi-stage build):

```dockerfile
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm install -g pnpm && pnpm build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]
```

**docker-compose.yaml**:

```yaml
services:
  frontend:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: recruit-genius-frontend
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_API_URL=http://localhost:8000
      - NODE_ENV=production
    networks:
      - recruit-genius-network
    restart: unless-stopped

networks:
  recruit-genius-network:
    driver: bridge
```

### Docker Commands

```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f frontend

# Rebuild
docker-compose build --no-cache
docker-compose up -d

# Clean up
docker-compose down -v
```

### Accessing the Application

Once deployed:

- **Frontend**: http://localhost:3000
- **Backend API** (if configured): http://localhost:8000
- **API Docs** (if backend running): http://localhost:8000/docs

## Development Guidelines

### Code Style

This project follows strict development guidelines defined in `.github/copilot-instructions.md`:

1. **TypeScript First**: All code uses TypeScript with strict mode
2. **Clean Code**: Prioritize readability and maintainability
3. **Component Design**: Small, focused components with single responsibility
4. **Props Interface**: Use `readonly` for all props
5. **Naming Conventions**:
   - Components: `PascalCase` (e.g., `MyButton`)
   - Props: `camelCase` (e.g., `userName`)
   - Files: Match component name (e.g., `MyButton.tsx`)
   - Types: Organized in `types/` folder

### Component Structure

```typescript
import React from 'react';
import { cn } from '@/lib/utils';

interface ComponentProps {
  readonly title: string;
  readonly description?: string;
  readonly className?: string;
}

export function Component({ title, description, className }: ComponentProps) {
  return (
    <div className={cn('base-classes', className)}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
```

### Styling Guidelines

**Always use Tailwind CSS utility classes**:

```typescript
// ✅ Good
<div className="flex items-center gap-2 p-4 bg-white rounded-lg">

// ❌ Avoid custom CSS
<div className="custom-flex-container">
```

**Use the cn utility for conditional classes**:

```typescript
import { cn } from '@/lib/utils';

<div className={cn(
  'base-classes',
  isActive && 'active-classes',
  className
)}>
```

**Follow mobile-first approach**:

```typescript
// ✅ Correct - Mobile first
<h1 className="text-2xl md:text-3xl lg:text-4xl">

// ❌ Incorrect - Desktop first
<h1 className="text-4xl md:text-3xl sm:text-2xl">
```

### File Organization

**Utils and helpers go in `lib/`**:

```text
src/lib/
├── utils.ts        # Utility functions
├── api.ts          # API helpers
└── constants.ts    # Constants
```

**Types go in `types/`**:

```text
src/types/
├── candidate.ts    # Candidate-related types
├── job.ts          # Job-related types
└── index.ts        # Re-exports (if needed)
```

**No barrel files**: Import directly from specific files:

```typescript
// ✅ Good
import { Candidate } from '@/types/candidate';

// ❌ Avoid
import { Candidate } from '@/types';
```

### Best Practices

1. **Extract reusable logic**: Create custom hooks for shared state logic
2. **Keep components small**: One component = one responsibility
3. **Use Server Components**: Default to server components, use "use client" only when needed
4. **Optimize images**: Always use `next/image` for images
5. **Type everything**: No `any` types, use proper TypeScript types
6. **Error handling**: Always handle errors gracefully
7. **Loading states**: Provide feedback during async operations
8. **Accessibility**: Use semantic HTML and ARIA labels

### Available Scripts

```bash
# Development
pnpm dev             # Start dev server with Turbopack
pnpm dev -p 3001     # Start on custom port

# Production
pnpm build           # Build for production
pnpm start           # Start production server

# Code Quality
pnpm lint            # Run ESLint
pnpm lint --fix      # Fix linting issues

# Dependencies
pnpm install         # Install dependencies
pnpm add <package>   # Add new dependency
pnpm remove <package> # Remove dependency
```

## Documentation

Comprehensive documentation is available in the `/docs` folder:

- **[SETUP.md](docs/SETUP.md)**: Installation and setup instructions
- **[TECH_STACK.md](docs/TECH_STACK.md)**: Detailed technology overview
- **[STYLEGUIDE.md](docs/STYLEGUIDE.md)**: Complete design system guide
- **[COLOR_PALETTE.md](docs/COLOR_PALETTE.md)**: Color usage guidelines
- **[LANDING_PAGE.md](docs/LANDING_PAGE.md)**: Landing page documentation
- **[GETTING_STARTED.md](docs/GETTING_STARTED.md)**: Quick start guide
- **[DOCKER.md](DOCKER.md)**: Docker deployment guide

### Design System

The project uses a comprehensive design system with:

- **Color Palette**: Violet to sky blue gradient signature
- **Typography**: Poppins font family
- **Components**: shadcn/ui components
- **Animations**: Custom CSS animations
- **Responsive**: Mobile-first breakpoints
- **Dark Mode**: CSS variables for theming

See [STYLEGUIDE.md](docs/STYLEGUIDE.md) for complete design system documentation.

## Troubleshooting

### Common Issues

#### Port 3000 is already in use

**Solution**: Run on a different port

```bash
pnpm dev -p 3001
```

Then open `http://localhost:3001`

#### TypeScript errors

**Solution 1**: Restart TypeScript server in VS Code

- Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
- Type "TypeScript: Restart TS Server"
- Press Enter

**Solution 2**: Clean build artifacts

```bash
rm -rf .next node_modules
pnpm install
pnpm dev
```

#### Styling not loading

**Solution**: Clear Next.js cache

```bash
rm -rf .next
pnpm dev
```

#### Dependencies installation fails

**Solution 1**: Clear pnpm cache

```bash
pnpm store prune
pnpm install
```

**Solution 2**: Use npm as fallback

```bash
npm install
npm run dev
```

#### API connection issues

**Problem**: Cannot connect to backend API

**Solution**: Check environment variables

```bash
# Verify .env.local exists
cat .env.local

# Should contain:
NEXT_PUBLIC_API_URL=http://localhost:8000
```

**Verify backend is running**:

```bash
# Test backend connection
curl http://localhost:8000/api/v1/health
```

#### Docker build fails

**Solution**: Clear Docker cache and rebuild

```bash
docker system prune -a
docker-compose build --no-cache
docker-compose up -d
```

#### Page not found (404)

**Problem**: Route not working

**Solution**: Check file structure

```bash
# Verify file exists in correct location
# Example: /app/candidates/page.tsx
ls -la src/app/candidates/page.tsx
```

### Performance Issues

#### Slow page loads

**Check**:

1. Network tab in DevTools for slow API calls
2. Console for errors
3. Build size: `pnpm build` and check output

**Solutions**:

- Implement code splitting with `dynamic` imports
- Optimize images with `next/image`
- Enable caching for API calls
- Use Server Components for static content

#### High memory usage

**Solution**: Clear Next.js cache and restart

```bash
rm -rf .next
pnpm dev
```

## Contributing

Contributions are welcome! Please follow these guidelines:

### Steps to Contribute

1. **Fork the repository**
2. **Create a feature branch**:

   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
4. **Follow code style**: See [Development Guidelines](#development-guidelines)
5. **Test your changes**: Ensure everything works
6. **Commit your changes**:

   ```bash
   git commit -m 'Add amazing feature'
   ```

7. **Push to the branch**:

   ```bash
   git push origin feature/amazing-feature
   ```

8. **Open a Pull Request**

### Code Review Process

1. All PRs require review before merging
2. CI checks must pass
3. Code must follow style guidelines
4. Tests must be added for new features

### Reporting Issues

Found a bug or have a feature request?

1. Check existing issues first
2. Open a new issue with:
   - Clear description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Screenshots (if applicable)
   - Environment details (OS, Node version, etc.)

## License

Copyright © 2025 Hackathon Team. All rights reserved.

This project is licensed under the MIT License - see the LICENSE file for details.

## Team & Contact

**Hackathon Team KLX**

- **Repository**: [recruit-genius-frontend](https://github.com/hack1november2025/recruit-genius-frontend)
- **Contact**: <valerio.silva@klx.pt>
- **Created**: November 2025
- **Version**: 1.0.0

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- Font from [Google Fonts](https://fonts.google.com/)

---

**Built with ❤️ by the Hackathon Team**

*Revolutionizing recruitment with AI-powered intelligence*
