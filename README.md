# BSERC Website — Bharat Space Education Research Centre

A production-grade, scalable **Next.js 14** website built with **TypeScript**, **Redux Toolkit**, **Context API**, and **custom hooks**. Faithfully recreates the BSERC website with a dark space-tech aesthetic.

---

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Project Structure](#project-structure)
3. [Getting Started](#getting-started)
4. [Architecture Overview](#architecture-overview)
5. [State Management](#state-management)
6. [Custom Hooks](#custom-hooks)
7. [Components](#components)
8. [Styling System](#styling-system)
9. [Scalability Guide](#scalability-guide)
10. [Environment Variables](#environment-variables)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v3 |
| Global State | Redux Toolkit |
| Context | React Context API |
| Animation | CSS keyframes + Framer Motion (ready) |
| Icons | Lucide React |
| Fonts | Google Fonts (Orbitron, Exo 2, Space Mono) |

---

## Project Structure

```
src/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout — wraps all providers
│   ├── page.tsx                # Home page — composes all sections
│   ├── globals.css             # Global styles, CSS variables, keyframes
│   ├── loading.tsx             # Global loading UI
│   ├── error.tsx               # Global error boundary
│   └── not-found.tsx           # 404 page
│
├── components/
│   ├── layout/                 # Structural layout components
│   │   ├── Navbar.tsx          # Fixed nav with dropdown, mobile menu, scroll detection
│   │   └── Footer.tsx          # Footer with links, social, newsletter
│   │
│   ├── sections/               # Page section components (one per visual block)
│   │   ├── AnnouncementSection.tsx   # Top announcement bar (dismissable via Context)
│   │   ├── HeroSection.tsx           # Full-screen hero with auto-rotating slides
│   │   ├── PMSection.tsx             # PM recognition section
│   │   ├── AboutSection.tsx          # About BSERC + animated stat counters
│   │   ├── VisionMissionSection.tsx  # Vision / Mission / Goal cards
│   │   ├── SupportersSection.tsx     # Infinite marquee of supporter logos
│   │   ├── AchievementsSection.tsx   # Who we are + achievement cards
│   │   ├── ProgramsSection.tsx       # Filterable program grid (Redux-powered)
│   │   ├── NewsSection.tsx           # News & events cards
│   │   └── ContactSection.tsx        # Contact info + form with toast feedback
│   │
│   ├── ui/                     # Reusable primitive UI components
│   │   ├── Button.tsx          # Polymorphic button (4 variants, 3 sizes)
│   │   ├── Badge.tsx           # Pill badge (3 colour variants)
│   │   ├── StarField.tsx       # Canvas animated star background
│   │   ├── ToastContainer.tsx  # Toast notification system (Redux-driven)
│   │   └── ScrollProgressBar.tsx  # Scroll progress indicator
│   │
│   └── shared/                 # Cross-cutting shared components
│       └── SectionHeader.tsx   # Eyebrow + title + subtitle block
│
├── store/                      # Redux Toolkit store
│   ├── index.ts                # configureStore — root store definition
│   ├── provider.tsx            # <ReduxProvider> client wrapper
│   └── slices/
│       ├── navigationSlice.ts  # Menu open/close, active section, scroll state
│       ├── programsSlice.ts    # Programs data, category filter, selectors
│       └── uiSlice.ts          # Toast queue, modal state, theme toggle
│
├── context/
│   └── SiteContext.tsx         # Site config, announcement bar — React Context API
│
├── hooks/
│   └── index.ts                # All custom hooks (typed Redux, scroll, intersection, countup…)
│
├── lib/
│   └── utils.ts                # cn(), formatDate(), truncate(), uid(), clamp()
│
└── types/
    └── index.ts                # All shared TypeScript types and interfaces
```

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm or yarn or pnpm

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Type-check without emitting
npm run type-check

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                    layout.tsx (Root)                    │
│                                                         │
│  ┌──────────────┐  ┌──────────────────────────────────┐ │
│  │ ReduxProvider│  │         SiteProvider             │ │
│  │ (RTK store)  │  │     (React Context API)          │ │
│  └──────────────┘  └──────────────────────────────────┘ │
│                                                         │
│  StarField ← Canvas animation (fixed, z-0)              │
│  ScrollProgressBar ← useScrollPosition() hook           │
│  Navbar ← Redux navigation state                        │
│  <main> → page.tsx → Section components                 │
│  Footer                                                 │
│  ToastContainer ← Redux ui.toasts                       │
└─────────────────────────────────────────────────────────┘
```

Data flows **one direction**: Redux store → components → dispatch actions → reducers → updated store.

---

## State Management

### Redux Toolkit (Global State)

Three slices power the application:

#### `navigationSlice`
```ts
{ isMenuOpen: boolean, activeSection: string, scrolled: boolean }
```
Actions: `toggleMenu`, `closeMenu`, `setActiveSection`, `setScrolled`

Used by: Navbar (hamburger, scroll shadow), ScrollProgressBar

#### `programsSlice`
```ts
{ items: Program[], selectedCategory: ProgramCategory | 'all', loading, error }
```
Actions: `setSelectedCategory`, `setLoading`, `setError`
Selector: `selectFilteredPrograms` — memoised filter

Used by: ProgramsSection (category tabs + program cards)

#### `uiSlice`
```ts
{ toasts: ToastMessage[], modal: ModalState, theme: 'dark' | 'light' }
```
Actions: `addToast`, `removeToast`, `openModal`, `closeModal`, `toggleTheme`

Used by: ContactSection (form submit feedback), ToastContainer (rendering), any future modal

### Context API (Site-Wide Config)

`SiteContext` stores site configuration and the dismissible announcement banner — data that doesn't need the performance optimisations of Redux but benefits from being available globally.

```ts
const { config, showAnnouncement, dismissAnnouncement } = useSite()
```

---

## Custom Hooks

All hooks live in `src/hooks/index.ts`.

| Hook | Purpose |
|---|---|
| `useAppDispatch` | Typed `dispatch` (RTK) |
| `useAppSelector` | Typed `useSelector` (RTK) |
| `useScrollPosition` | Returns `{ scrollY, progress }` (passive listener) |
| `useIntersectionObserver` | Returns `[ref, isVisible]` — triggers once on entry |
| `useMediaQuery` | Reactive boolean for a media query string |
| `useCountUp` | Animates a number 0 → target when visible |
| `useLocalStorage` | Typed localStorage get/set with SSR guard |
| `useDebounce` | Debounces any value by given delay |

### Example usage

```tsx
// Scroll-linked animation
const { progress } = useScrollPosition()

// Appear-on-scroll
const [ref, visible] = useIntersectionObserver({ threshold: 0.2 })

// Animated counter
const { count, ref } = useCountUp(500)
```

---

## Components

### Button
```tsx
<Button variant="primary" size="lg" isLoading leftIcon={<Rocket />} rightIcon={<ArrowRight />}>
  Apply Now
</Button>
```
Variants: `primary` | `secondary` | `ghost` | `outline`
Sizes: `sm` | `md` | `lg`

### Badge
```tsx
<Badge variant="blue">Advanced Drone Technology</Badge>
```
Variants: `blue` | `orange` | `gold`

### SectionHeader
```tsx
<SectionHeader
  eyebrow="What We Offer"
  title="Our Programs"
  subtitle="Cutting-edge programs for tomorrow's scientists."
  align="center"
/>
```

### ToastContainer / addToast
```tsx
dispatch(addToast({ type: 'success', message: 'Form submitted!' }))
// Types: 'success' | 'error' | 'info' | 'warning'
// Auto-dismisses after 4 seconds
```

---

## Styling System

### Tailwind Theme Tokens

| Token | Value |
|---|---|
| `primary` | `#00B4FF` (BSERC blue) |
| `secondary` | `#FF6B35` (accent orange) |
| `accent` | `#FFD700` (gold) |
| `space-black` | `#060810` |
| `space-dark` | `#0D1117` |
| `space-navy` | `#0A0F1E` |
| `space-card` | `#141C2E` |

### Fonts (via CSS Variables)
```css
font-family: var(--font-orbitron);   /* Display headings */
font-family: var(--font-exo);        /* Body text */
font-family: var(--font-space-mono); /* Labels, badges, UI text */
```

Use via Tailwind: `font-display`, `font-body`, `font-mono`

### Animations
| Class | Effect |
|---|---|
| `animate-float` | Gentle vertical float |
| `animate-pulse-glow` | Blue glow pulse |
| `animate-shimmer` | Shimmer loading state |
| `shadow-glow-blue` | Blue drop shadow |
| `shadow-glow-orange` | Orange drop shadow |

---

## Scalability Guide

### Adding a new page

1. Create `src/app/your-page/page.tsx`
2. Add a link in `src/components/layout/Navbar.tsx` (NAV_LINKS array)
3. Create section components in `src/components/sections/`

### Adding a new Redux slice

1. Create `src/store/slices/yourSlice.ts`
2. Export reducer, actions, and selectors
3. Add to `src/store/index.ts` under `reducer: { ... }`
4. TypeScript picks up the new state shape automatically via `RootState`

### Adding a new program

Edit `PROGRAMS_DATA` in `src/store/slices/programsSlice.ts`:
```ts
{
  id: 'new-program',
  title: 'New Program',
  category: 'satellite',    // must match ProgramCategory type
  badge: 'SATELLITE TECH',
  description: '...',
  highlights: ['...'],
  duration: '6 Weeks',
  ageGroup: '14+',
}
```

### Adding a new custom hook

Add a named export to `src/hooks/index.ts`. All hooks are auto-imported from this barrel file.

### Internationalisation (future)

Replace hardcoded strings with `next-intl` or `react-i18next`. The `SiteContext` config object is the natural place to store locale-specific overrides.

---

## Environment Variables

Create `.env.local` for local overrides:

```env
# API (future)
NEXT_PUBLIC_API_URL=https://api.bserc.org

# Analytics (future)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

No environment variables are required to run the development server.

---

## Scripts Reference

```bash
npm run dev          # Hot-reload dev server on :3000
npm run build        # Production build
npm start            # Serve production build
npm run lint         # ESLint
npm run type-check   # tsc --noEmit (no build artefacts)
```

---

## Licence

Private — Bharat Space Education Research Centre © 2024
