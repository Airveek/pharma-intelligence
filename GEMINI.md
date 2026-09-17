# Pharma Intelligence Architecture & Development Standards

## 1. Architecture & Folder Structure

All development in this repository must strictly adhere to the following enterprise SaaS structure:

```text
pharma-intelligence/
├── app/                        # Next.js App Router (Routes, Route groups, Page composition)
│   ├── (dashboard)/            # Authenticated/workspace routes
│   ├── layout.tsx              # Root HTML layout consuming lib/fonts
│   └── globals.css             # Tailwind v4 theme & shadcn semantic color tokens
├── components/
│   ├── ui/                     # Atomic shadcn/ui primitives (Button, Dialog, Popover, etc.)
│   │                           # - Pure, unopinionated presentational components
│   │                           # - No domain logic, no API calls, no route coupling
│   └── layout/                 # Structural layout components (AppShell, Sidebar, Header)
│       └── sidebar/            # Modular sidebar subcomponents (Brand, Workspace, Nav, Status)
├── features/                   # Feature-based domain modules (Core business logic)
│   └── <feature-name>/         # Colocated components, hooks, schemas, services for a feature
├── lib/                        # Shared utilities, configuration, and helpers
│   ├── fonts.ts                # Centralized typography & font loaders (Inter)
│   ├── utils.ts                # Class merging utility (cn)
│   └── constants.ts            # Application & navigation constants
├── types/                      # Centralized TypeScript declarations and interfaces
│   └── navigation.ts           # Navigation contracts & workspace types
└── public/
    └── fonts/                  # Local font assets (Inter .ttf files)
```

### Key Architectural Rules
- **Server-First Mindset**: Keep components Server Components by default. Use `"use client"` only at leaf nodes requiring interactivity (`useState`, `useEffect`, event listeners).
- **Thin Pages**: `page.tsx` files must only handle route parameters, data fetching, and composition. Move presentation and logic to `features/` or `components/layout/`.
- **Separation of Concerns**: Never embed domain data fetching or business logic directly inside `components/ui/`.
- **Centralized Types**: Define shared types and data contracts inside `types/`, never as ad-hoc interfaces scattered inside JSX files.

---

## 2. Design System & Tailwind CSS Rules

- **Zero Hard-Coded Arbitrary Classes**:
  - **NEVER** use arbitrary bracket values (e.g., `w-[260px]`, `text-[13px]`, `p-[17px]`, `bg-[#...]`, `shadow-[...]`).
  - Always use standard Tailwind CSS utility scales (`w-64`, `text-sm`, `text-xs`, `rounded-lg`, `rounded-md`, `shadow-sm`, `shadow-md`, `p-3`, `gap-2`).
  - When a unique design dimension is required, define it inside `@theme inline` in `app/globals.css` (e.g., `--width-sidebar: 16.25rem;`) and reference it as a named utility class (e.g., `w-sidebar`).
- **Strict Shadcn/ui Semantic Theming**:
  - **NEVER** use raw hex, rgb, or oklch colors directly in JSX classes.
  - Always use shadcn semantic color tokens:
    - Surfaces: `bg-background`, `text-foreground`, `bg-card`, `text-card-foreground`, `bg-popover`, `text-popover-foreground`
    - Brand/Actions: `bg-primary`, `text-primary-foreground`, `bg-secondary`, `text-secondary-foreground`
    - Accents & Muted: `bg-muted`, `text-muted-foreground`, `bg-accent`, `text-accent-foreground`
    - Sidebar: `bg-sidebar`, `text-sidebar-foreground`, `bg-sidebar-accent`, `text-sidebar-accent-foreground`, `border-sidebar-border`
    - Interactive/Focus: `ring-ring`, `focus-visible:outline-ring`, `border-border`
  - All color tokens are configured in OKLCH in `app/globals.css` and must support both light mode (`:root`) and dark mode (`.dark`).
  - The project's primary blue brand color is `oklch(0.54 0.235 264.4)` (`#215bf1` / `#2161e9`) for light mode and `oklch(0.62 0.22 264.4)` for dark mode.

---

## 3. Typography & Font Rules

- **NEVER** instantiate fonts inside `app/layout.tsx` or individual components.
- All fonts must be defined in `lib/fonts.ts` and exported as named font objects (e.g., `fontSans`).
- Inter is the official primary font throughout the application, registered with all 8 weights (100–900) and mapped to the CSS variable `--font-sans`.
- `app/layout.tsx` applies `fontSans.variable` to `<html>` and `font-sans` to `<body>`.

---

## 4. TypeScript & Code Quality Standards

- **Strict Typing**: No `any`. Use strict interfaces, type unions, and type guards.
- **Explicit Component Types**: Use `interface <ComponentName>Props` and type functional components with typed props or `FC<Props>`.
- **Named Exports**: Use named exports (`export const Component = ...`) for all components, constants, and utilities. Default exports are reserved solely for Next.js App Router files (`page.tsx`, `layout.tsx`, `not-found.tsx`, `loading.tsx`, `error.tsx`).
- **Class Merging**: Always use the `cn()` utility (`import { cn } from "@/lib/utils"`) when merging classes or handling conditional styles.
- **Clean Code**: Use early returns, guard clauses, and avoid nested conditionals.

---

## 5. Accessibility & UX Requirements

- Use semantic HTML tags (`<main>`, `<aside>`, `<nav>`, `<header>`, `<footer>`, `<section>`).
- Add appropriate ARIA attributes (`aria-label`, `aria-current`, `aria-hidden`, `aria-expanded`).
- All interactive elements must have visible keyboard focus styles (`focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring`).
- Preserve responsive behaviors (desktop aside with `hidden md:flex`, mobile drawer with accessible Dialog/Drawer primitives).
