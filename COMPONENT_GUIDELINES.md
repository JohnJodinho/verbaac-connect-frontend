# Verbaac Connect – Component Guidelines

This document provides **detailed specifications and behavior rules** for core UI components in the Verbaac Connect frontend.  
It complements the `STYLE_GUIDE.md` by describing how components **should be designed, used, and reused** across different modules (housing, marketplace, agreements, roommates, dashboards).

---

## 🎯 Goals
- Maintain **consistency** across all modules.
- Ensure components are **reusable, composable, and scalable**.
- Prioritize **accessibility** and **modern UI/UX patterns**.

---

## 🧩 Core Component Categories

### 1. **Navigation Components**
#### Navbar
- Fixed at the top, height: `h-16`
- Includes logo (left), global nav links (center), profile/actions (right)
- Scroll behavior: apply shadow on scroll
- Responsive:
  - Mobile → collapses into a hamburger menu (`Drawer` with Radix UI)
  - Desktop → full navigation visible

#### Sidebar (Dashboard/Admin)
- Collapsible with icons + labels
- Active route highlighted (`bg-primary/10`, bold text)
- Responsive:
  - Hidden on mobile by default
  - Slide-in drawer for small screens

#### Breadcrumbs
- Always show in dashboard subpages
- Format: `Dashboard > Section > Page`

---

### 2. **Form Components**
#### Input
- Variants: text, password, email, number, textarea
- States: default, focus (`ring-2 ring-primary`), disabled, error (`ring-red-500`)
- Support prefix/suffix icons

#### Select / Dropdown
- Built with Radix Select
- Animated open/close
- Support search inside dropdown for long lists (e.g., universities)

#### Checkbox / Radio
- Use Radix primitives
- Consistent styling across modules
- Accessible labels required

#### Button
- Variants: `primary`, `secondary`, `outline`, `ghost`, `destructive`
- Sizes: `sm`, `md`, `lg`, `icon-only`
- Interactive states: hover, active, disabled
- Icon support (`leftIcon`, `rightIcon` props)

#### Form
- Validate with Zod + React Hook Form
- Error messages inline, styled in red
- Success states styled in green

---

### 3. Data Display Components
#### Card (General Rules)

- Shared conventions for all cards:

- - Rounded corners (rounded-2xl)

- - Subtle shadow by default, elevate with shadow-lg on hover

- - Smooth hover animation (scale-105, transition ease-in-out)

- - Responsive layout (stacked on mobile, grid on larger screens)

- - Always include alt text for images and ARIA labels for interactivity

#### HousingCard

- Structure:

- - Image gallery preview (primary housing image, optional carousel)

- - Title (property name), Location, and Short description

- - Price per year (N150,000 / year)

- - Availability badge (Available / Occupied)

- - Call-to-Action (CTA) → “View Details”

- Behavior:

- - Hover → Show subtle overlay with property highlights (bedrooms, distance from campus, WiFi availability).

- - On mobile → stacked format with larger image for better tap targets.

#### Marketplace ProductCard

- Structure:

- - Product image (square or 4:3 aspect ratio)

- - Title + category (e.g., “Laptop – Electronics”)

- - Price in bold

- - Seller info (small text or avatar)

- - Wishlist button (heart icon in top-right)

- - “Add to Cart” button (revealed on hover / always visible on mobile)

- Behavior:

- - Hover → Elevate + reveal CTA (Add to Cart)

- - Wishlist toggles state (♥ filled vs outline)

- - Supports “Escrow” badge if item purchase goes into escrow

#### RoommateProfileCard

- Structure:

- - Profile picture (circular avatar)

- - Name + Year/Major

- - Short description / preferences (e.g., “Non-smoker, likes quiet study spaces”)

- - Match percentage with progress bar or radial chart

- - CTA → “View Profile” or “Connect”

- Behavior:

- - Hover → Show expanded preferences or compatibility highlights

- - Support swipe interactions on mobile (left = dismiss, right = connect)

#### AgreementCard

- Structure:

- - Agreement title (e.g., “Lease Agreement – Apartment 12B”)

- - Parties involved (student, landlord)

- - Start/End dates

- - Status badge (Draft, Pending, Signed, Completed)

- - CTA → “View / Sign Agreement”

- Behavior:

- - Hover → Highlight border color based on status (e.g., green for signed, yellow for pending)

- - Expandable to preview summary terms before opening full detail

#### Table
- For dashboards, agreements, admin panels
- Features:
  - Sortable columns
  - Pagination
  - Search filter
  - Responsive collapse to cards on mobile

#### List
- Staggered animation on load (`Framer Motion`)
- Support skeleton loading states

#### Modal / Dialog
- Radix Dialog + Framer Motion animation
- Must trap focus, close on ESC
- Use for checkout, filters, agreements preview

#### Toast / Notification
- Use shadcn/ui toast system
- Types: success, error, warning, info
- Position: bottom-right

---

### 4. **Marketplace-Specific Components**
#### ProductCard
- Image, title, price, seller info
- Wishlist button (heart icon)
- Hover: reveal “Add to Cart” button

#### FilterSidebar
- Categories: university, price range, category, condition (new/used)
- Collapsible sections
- Mobile → overlay drawer

#### Cart
- Slide-over panel from the right
- List of items with quantity control
- Checkout button (links to escrow flow)

#### EscrowStatusBadge
- Shows transaction status: Pending, In Escrow, Released, Cancelled
- Color-coded (yellow, blue, green, red)

---

### 5. **Housing-Specific Components**
#### HousingCard
- Image gallery preview
- Title, location, price/month
- Availability badge (Available / Occupied)
- CTA: “View Details”

#### MapView
- Integration with Google Maps / Leaflet
- Shows housing pins with hover details
- Supports filters (price range, distance, amenities)

#### FilterBar
- Quick filters: price slider, # of rooms, furnished/unfurnished
- Sticky on top during scroll

---

### 6. **Roommate Module Components**
#### RoommateProfileCard
- Profile picture, name, major/year, preferences
- Match percentage (with progress bar)
- CTA: “View Profile”

#### MatchResultList
- Displays potential matches in ranked order
- Animates entry with staggered fade/slide

---

### 7. **Agreements Module Components**
#### AgreementCard
- Displays agreement summary (tenant, landlord, property, status)
- CTA: “View” / “Sign”
- Status badge (Draft, Pending, Signed, Completed)

#### AgreementForm
- Multi-step form wizard (property details → parties involved → terms → signatures)
- Save progress locally before submission

---

### 8. **Dashboard Components**
#### StatCard
- Small cards for metrics (listings count, sales, agreements signed)
- Includes icon + number + label

#### Chart
- Use Recharts
- Line/Bar charts for trends
- Responsive, tooltips enabled

#### ActivityTable
- Recent user actions (purchases, listings, agreements)
- Supports infinite scroll / pagination

---

### 9. **Utility Components**
#### Loader / Spinner
- Centered with animation
- Variants: small inline spinner, full-page loader

#### Skeleton
- Placeholder loading states for cards, lists, tables

#### ErrorBoundary
- Catches rendering errors
- Shows fallback UI with “Try Again” button

---

## ♿ Accessibility Rules
- All interactive components must be keyboard accessible
- Forms must include `<label>` or `aria-label`
- High contrast modes must be supported
- Modals must trap focus and restore on close

---

## 🔄 Reusability Rules
- Shared UI components → `components/ui/`
- Feature-specific components → `modules/[feature]/components/`
- Extract repeated patterns early to avoid duplication

---

## 🚀 Future Considerations
- Add **theme variants per university** (custom branding)
- Support **infinite scroll** for marketplace listings
- Add **component-level testing** (React Testing Library)
