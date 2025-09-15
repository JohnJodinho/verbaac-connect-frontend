# Verbaac Connect – Frontend Project Specification

## 📦 Tech Stack

- **React + TypeScript + Vite** → modern, fast build setup  
- **Tailwind CSS** → utility-first styling  
- **shadcn/ui + Radix UI** → accessible, composable UI components  
- **React Router v6** → routing and navigation  
- **Framer Motion** → animations and transitions  
- **Recharts** → data visualization for dashboards and analytics  
- **React Query (TanStack Query)** → client-side data fetching and caching  
- **Lucide React** → modern icons  
- **Zod + React Hook Form** → type-safe form validation  
- **Axios** → API client  

---

## 📂 Project Structure

```
src/
├── assets/              # Static assets (logos, icons, images)
├── components/          # Reusable UI components
│   ├── ui/              # Base UI (Button, Input, Modal, etc.)
│   ├── shared/          # Cross-module widgets (ListingCard, FilterSidebar)
│   └── feedback/        # Alerts, toasts, skeletons
├── layout/              # Layout wrappers (MainLayout, AuthLayout, DashboardLayout)
├── hooks/               # Custom React hooks (useAuth, useTheme, useCart, etc.)
├── lib/                 # Utilities, API client, SEO config
├── types/               # Global TypeScript types/interfaces
├── modules/             # Feature-based modules
│   ├── home/            # Landing page + subcomponents
│   ├── auth/            # Login, Register, Forgot Password, Onboarding
│   ├── housing/         # Housing listings, detail, filters
│   ├── marketplace/     # Marketplace with escrow/cart
│   ├── agreements/      # Rental agreements module
│   ├── roommates/       # Roommate matching
│   ├── dashboard/       # Student dashboard (profile, wallet, activity)
│   ├── notifications/   # Notification list + preferences
│   ├── messaging/       # In-app chat UI
│   ├── admin/           # Admin moderation pages
│   └── error-pages/     # 404, Maintenance
├── routes/              # Route definitions
├── store/               # Zustand/Context state management
├── styles/              # Tailwind globals, theme configs
├── App.tsx              # Router and providers
├── main.tsx             # React entry point
└── index.css            # Global styles
```

---

## 🧭 Pages & Routes

### Public
- `/` → Landing Page  
- `/about` → About the platform  
- `/faq` → FAQ/help page  
- `/terms` → Terms of service  
- `/privacy` → Privacy policy  
- `/not-found` → 404 fallback  
- `/maintenance` → Maintenance screen  

### Auth
- `/login` → Login form  
- `/register` → Registration form  
- `/verify-email` → Email verification  
- `/forgot-password` → Forgot password form  
- `/reset-password/:token` → Reset password  
- `/onboarding` → Student onboarding setup  

### Housing Module
- `/housing` → Browse/filter housing listings  
- `/housing/:id` → Housing detail page  
- `/housing/list-property` → Add property  
- `/housing/my-listings` → User’s listings  

### Marketplace Module
- `/marketplace` → Product catalog (filter by university, category, price)  
- `/marketplace/:id` → Product detail  
- `/marketplace/cart` → Shopping cart  
- `/marketplace/order-summary` → Checkout/escrow step  
- `/marketplace/post` → Post new item for sale  
- `/marketplace/my-items` → Manage user’s posted items  
- `/marketplace/wishlist` → Wishlist page  
- `/marketplace/delivery-status/:id` → Escrow/delivery tracker  

### Agreements Module
- `/agreements` → List all agreements  
- `/agreements/create` → Create new agreement  
- `/agreements/:id` → Agreement details  
- `/agreements/review/:id` → Review terms before signing  
- `/agreements/sign/:id` → Signing page  
- `/agreements/success` → Agreement success confirmation  

### Roommates Module
- `/roommates` → Match preferences form  
- `/roommates/result` → Match results  
- `/roommates/profile/:id` → Roommate profile  
- `/roommates/invite/:id` → Connect/invite page  

### Dashboard
- `/dashboard` → Overview  
- `/dashboard/profile` → Profile settings  
- `/dashboard/security` → Security & 2FA  
- `/dashboard/kyc` → KYC verification  
- `/dashboard/activity` → Activity logs  
- `/dashboard/wallet` → Wallet & escrow balance  
- `/dashboard/rewards` → Referral rewards  

### Messaging & Notifications
- `/messages` → Inbox  
- `/messages/:threadId` → Message thread  
- `/notifications` → Notifications list  

### Admin
- `/admin` → Admin dashboard  
- `/admin/users` → User management  
- `/admin/listings` → Listing moderation  
- `/admin/disputes` → Dispute resolution  
- `/admin/payments` → Payment logs  
- `/admin/analytics` → Analytics dashboard  

---

## 🧩 Components

### Global
- **Navbar** → Top navigation bar with auth-aware menu  
- **Footer** → Global footer with links  
- **Sidebar** → Dashboard/admin sidebar  
- **Breadcrumbs** → Page navigation trail  

### UI Elements
- **Button** (primary, secondary, outline, ghost, destructive)  
- **Input** (text, password, search, number)  
- **Select, Dropdown, Checkbox, RadioGroup**  
- **Card** (for products, properties, dashboards)  
- **Modal/Dialog** (confirmations, forms)  
- **Tabs** (dashboard sections, agreements flow)  
- **Accordion** (FAQs, collapsible filters)  
- **Table** (for activity logs, user lists)  
- **Pagination** (housing, marketplace listings)  
- **Toast/Alert** (success, error, info)  
- **Skeleton Loader** (loading states)  

### Feature Components
- Just an overview. Detailed in COMPONENT_GUIDELINES.md
- **ListingCard** → Housing/marketplace preview card  
- **FilterSidebar** → Filtering options (price, location, university)  
- **SearchBar** → Global and module-specific search  
- **WishlistButton** → Save items to wishlist  
- **CartWidget** → Quick access to cart  
- **EscrowTracker** → Marketplace order progress  
- **AgreementViewer** → View/sign agreements  
- **RoommateMatchCard** → Potential roommate preview  
- **ChatBubble** → Messaging component  
- **NotificationBell** → Alerts and notifications  

---

## 🎨 Design & UX Guidelines

- **Theme:** Airbnb-inspired (clean, minimal, modern) with bold typography  
- **Color Mode:** Light/Dark/System toggle (via `theme.json` or `lib/theme.ts`)  
- **Spacing:** Consistent Tailwind spacing scale (`p-6`, `gap-4`)  
- **Animations:**  
  - Use **Framer Motion** for modals, route transitions, and list stagger effects  
  - Tailwind transitions for hover/focus states  
- **Responsive:** Fully responsive (mobile-first → tablet → desktop)  
- **Accessibility:**  
  - Use Radix UI primitives for ARIA-compliant components  
  - Proper semantic HTML  

---

## 📈 Future Enhancements

- Add **PWA support** for mobile app-like experience  
- Add **global search page** (`/search`) with federated results across housing, marketplace, roommates  
- Introduce **event/ticket module** for student events  
- Add **job board module** for internships/part-time gigs  

---

## ✅ Deliverables for Frontend

- All pages scaffolded 
- Routing fully set up with React Router v6  
- Layouts applied (MainLayout, AuthLayout, DashboardLayout)  
- Global theme and Tailwind configured  
- Components available in `components/ui/` and `components/shared/`  
- Basic animations integrated (Framer Motion + Tailwind transitions)  
