# ZZBlog

A personal blog with "Digital Curator" aesthetic — quiet luxury with intentional asymmetry and tonal depth.

## Features

- **Home Page** — Hero introduction with parallax effect, philosophy section, expertise showcase, and contact form
- **Portfolio** — Card carousel with progress scrubber, featuring AI-generated visuals with 3D tilt effects
- **Demos** — Personal projects showcase with 3D tilt card animations
- **Docs** — Technical documentation section

## Animations

- Loading screen with jumping dots
- Scroll reveal animations
- 3D tilt card effects (Portfolio, Demos)
- Card carousel with progress scrubber
- Navbar logo gestures (hover, tap, drag)
- Ripple button effects

## Tech Stack

- **Core**: React 19 + TypeScript
- **UI**: Material Design 3 (M3)
- **Styling**: CSS Modules
- **Animation**: Framer Motion
- **State**: TanStack Query + Zustand
- **Routing**: React Router v7
- **Build**: Vite

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run lint
npm run lint

# Format code
npm run format

# Run tests
npm test
```

## Project Structure

```
src/
├── components/       # Atomic design components
│   ├── atoms/        # Base components
│   ├── molecules/   # Business components
│   ├── organisms/    # Complex blocks
│   └── layouts/      # Layout components
├── pages/           # Page components
├── hooks/           # Custom hooks
├── services/        # API layer
├── stores/          # Zustand stores
├── styles/          # Global styles
├── types/           # TypeScript types
└── utils/           # Utilities
```

## License

MIT License — see [LICENSE](LICENSE) for details.