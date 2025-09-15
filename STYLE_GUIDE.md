# Verbaac Connect – Frontend Style Guide (Updated)

## 🎯 Purpose

This document defines **design, branding, coding, and UI/UX conventions** for the Verbaac Connect frontend.  
It integrates the latest **brand style guide** (logo, typography, colors, and favicon assets) to ensure consistency across the platform.

---

## 📦 Tech & Libraries Used

- **React (TypeScript)** with **Vite**
- **Tailwind CSS** as the primary styling system
- **shadcn/ui + Radix UI** for accessible, composible UI primitives
- **Framer Motion** for animations
- **Lucide Icons** for consistent iconography
- **Recharts** for charts and data visualization

---

## 🎨 Visual Design

### Typography
- Font Family: **Poppins**
  - **Bold** for headings (student-friendly, approachable)
  - **Regular/Medium** for body text
- Tailwind scaling:
  - `text-sm` (14px) → secondary text
  - `text-base` (16px) → body
  - `text-lg` (18px) → section headers
  - `text-xl` (20px) → card titles
  - `text-2xl` (24px) → page headings
  - `text-3xl` (30px) → primary headers
- Line height: `leading-snug` or `leading-relaxed`

### Brand Colors
Defined in `tailwind.config.ts` (and used across buttons, links, highlights).

- **Primary Teal**: `#3AB1FF`
- **Secondary Coral/Red**: `#FF3855`
- **Neutral Dark Gray**: `#373535`
- **Background Neutrals**: `gray-50`, `gray-200`, `gray-600`

### Spacing
- Use Tailwind spacing scale consistently (`p-4`, `m-6`, `gap-4`)
- Page padding: `px-6 md:px-10`
- Grid gap standard: `gap-6`

### Border Radius
- Global: `rounded-xl` (12px)
- Buttons/inputs: `rounded-lg` (8px)
- Cards: `rounded-2xl` (16px)

### Shadows
- Cards: `shadow-md hover:shadow-lg`
- Modals/overlays: `shadow-xl`
- Subtle UI: `shadow-sm`

---

## 🧩 Brand Assets Integration

### Logo Files
- `logo-full.svg` → Full logo (icon + text)
- `logo-icon.svg` → Just the magnifying pin/magnifier
- `logo-dark.svg` → Dark-mode variant

### Usage
- **Navbar (desktop)** → `logo-full.svg` (h-8)
- **Navbar (mobile)** → `logo-icon.svg`
- **Footer** → `logo-full.svg`
- **Login/Register pages** → `logo-icon.svg` centered

### Favicons & App Icons
Place in `/public` folder:
- `logo-icon.ico`
- `logo-icon-16x16.png`
- `logo-icon-32x32.png`
- `apple-touch-icon.png`
- `manifest.json`

Reference in `index.html` head:
```html
<link rel="icon" type="image/x-icon" href="/logo-icon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/manifest.json" />
```

### Optional Animation Concept
- Pin/magnifier “drops in” with slight bounce, text fades in below.  
- Export as animated **SVG** or **Lottie JSON** for React integration.

---

## 🧩 Component Style Conventions

- **Buttons** → Variants: primary (teal), secondary (coral), outline, ghost, destructive
- **Inputs** → States: default, focused (ring-primary), error (ring-red-500)
- **Cards** → Consistent padding, hover shadow + subtle scale
- **Modals** → Radix Dialog + Framer Motion
- **Tables** → Clean, sortable, mobile-responsive (collapse to cards)
- **Navigation** → Navbar + Footer styled with brand colors

---

## ✨ Animations & Motion

- **Page transitions** → Fade + slide in
- **Hover interactions** → Scale, shadow lift
- **Modals** → Spring-based fade/scale
- **Lists** → Staggered with AnimatePresence

---

## 📐 Code & Styling Standards

- Use Tailwind classes over inline styles
- Keep components small and typed
- Zod schemas for validation
- React Query for fetching (no raw fetch in components)

---

## ♿ Accessibility Standards

- Ensure all interactive elements have labels
- High contrast support (light & dark mode)
- Keyboard navigability (focus outlines visible)
- Images must have alt text

---

## 📈 Testing & QA

- Responsive tests at 375px (mobile), 768px (tablet), 1280px (desktop)
- Dark mode compatibility checks
- Animation performance on low-end devices

---

## 🧠 Version Control & Workflow

- Branch naming: `feat/`, `fix/`, `chore/`
- Conventional commits (`feat:`, `fix:`)
- Code review before merge to `main`

---

## 🚀 Future Brand/Style Considerations

- Support **university-specific themes** (colors/logos override)
- Introduce **design tokens** in JSON for cross-platform use
- Extend **animated brand logo** for landing page intro/splash screens
