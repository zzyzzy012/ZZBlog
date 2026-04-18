# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

FEBlog is a personal blog built with **React 19 + TypeScript** using Google's **Material Design 3** (M3). The site features a "Digital Curator" aesthetic—quiet luxury with intentional asymmetry and tonal depth.

## Site Structure

| Route | Description |
|-------|-------------|
| `/` | **Home (Combined)** — Hero introduction + philosophy + expertise + about + contact form all-in-one |
| `/portfolio` | **Works** — Selected projects with asymmetric bento grid gallery |
| `/journal` | **八股** — Blog articles/essays on thoughts and experiences |
| `/docs` | **Technical Docs** — Technical documentation, tutorials, and engineering notes |

## Technology Stack

- **Core:** React 19 + TypeScript (Strict Mode)
- **UI:** Google M3 React (Material Design 3)
- **Styling:** CSS Modules with M3 Design Tokens
- **State:** TanStack Query (API caching) + Zustand (global state)
- **Routing:** React Router v7

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (Vite)
npm run build        # Production build
npm run lint         # Run ESLint
npm run lint:fix     # Auto-fix ESLint issues
npm run format       # Run Prettier
npm run prepare      # Install Husky git hooks
npm test             # Run tests (Vitest)
npm run type-check  # TypeScript type check
```

## Code Quality Tools

- **Prettier** — Code formatting (see `.prettierrc`)
- **ESLint** — Linting with TypeScript support (see `.eslintrc.js`)
- **Husky** — Git hooks for pre-commit validation
- **lint-staged** — Run linters on staged files only
- **commitlint** — Conventional commit message validation
- **Vitest** — Unit testing with coverage

## Code Architecture

### Component Structure (Atomic Design)
```
src/
├── components/
│   ├── atoms/        # M3 base component wrappers
│   ├── molecules/    # Business components (card, list item)
│   └── organisms/    # Complex blocks (navbar, footer, editor)
├── pages/
│   ├── Home/         # Combined home + about + contact
│   ├── Portfolio/    # Works showcase
│   ├── Journal/      # 八股 blog posts
│   └── Docs/         # Technical documentation
├── services/         # API layer
├── hooks/            # Custom hooks
├── stores/           # Zustand stores
├── styles/           # Global styles, tokens
└── types/            # TypeScript interfaces
```

### Data Flow
- `services/` → API calls (no axios in components)
- `hooks/` → Encapsulate service calls, return typed data
- Components only handle UI, never business logic

### API Response Standard
```typescript
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
  timestamp: number;
}
```

## Design System

From `stitch_elegant_minimalist_personal_portfolio/atelier_monolith/DESIGN.md`:

- **0px border-radius** — Sharp edges throughout
- **Colors:** Off-white base (`#fcf9f8`), obsidian text (`#1c1b1b`), gold accent (`#775a19`)
- **Typography:** Newsreader (serif) for headlines, Manrope (sans-serif) for body
- **No line borders** — Use background color shifts to define sections
- **Glassmorphism** — Navigation at 80% opacity with backdrop-blur
- **Scroll animation** — "Curated Reveal": slide up 20px + fade in with stagger

### Breakpoints
- Mobile: < 600px
- Tablet: 600px - 900px
- Desktop: > 900px

## Naming Conventions

| Category | Convention | Example |
|----------|------------|---------|
| Component folders | PascalCase | `src/components/PostCard/` |
| Component files | `index.tsx` | Avoid redundant names |
| Page routes | kebab-case | `/blog/my-first-post` |
| Interfaces | `I` prefix or `Entity` suffix | `IPostDetail`, `UserSchema` |
| Hooks | `use` + camelCase | `usePostList` |
| API functions | Verb + resource | `getPostById` |
| CSS Modules | `.module.css` | `Button.module.css` |

## Git Workflow

1. **Branch naming:** `feature/xxx`, `fix/xxx`, `docs/xxx`
2. **Commits:** Follow Conventional Commits (`feat:`, `fix:`, `docs:`, `refactor:`)
3. **Pre-commit:** Husky runs lint-staged → lint + format checks
4. **Messages:** commitlint validates commit messages

## AI Collaboration Guidelines

- **Don't repeat yourself** — Extract repeated logic into custom hooks
- **Type Safety** — No `any`; all component props must define interfaces
- **Atomic commits** — Each refactor targets one component or module
- **Test coverage** — New features should include corresponding tests