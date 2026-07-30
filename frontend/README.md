# Xtreme Fitness — Frontend (Landing Page + Auth)

React + Vite + Tailwind CSS frontend for the Xtreme Fitness gym management system.
This phase covers the **public landing page** and the **authentication flow** (login,
register, forgot/reset password), wired to the live backend API.

## Tech Stack
React 18 · Vite · Tailwind CSS · React Router DOM · Axios · React Hook Form ·
Framer Motion · Lucide React · react-hot-toast

## 1. Setup

```bash
cd frontend
npm install
cp .env.example .env
```

By default `VITE_API_URL=/api` and Vite's dev server proxies `/api` and `/uploads`
requests to `http://localhost:5000` (the backend). Make sure the backend is running
first (`cd ../backend && npm run dev`).

## 2. Run

```bash
npm run dev       # http://localhost:5173
npm run build      # production build → dist/
npm run preview     # preview the production build locally
```

## 3. What's built in this phase

- **Landing page** (`/`): Hero, Why Choose Us, Programs, Membership pricing (live from
  API with graceful fallback), Trainers (live), Transformation Gallery (live), BMI
  Calculator (interactive), Facilities, Nutrition teaser, Testimonials, Contact form +
  embedded Google Map for Raichur, Footer.
- **Auth pages**: Login, Register, Forgot Password, Reset Password — all wired to the
  real backend endpoints with JWT stored in `localStorage` and auto-refresh on 401s
  (see `src/services/api.js`).
- **Role-based routing**: `ProtectedRoute` + a placeholder dashboard shell per role
  (admin/trainer/member) confirms the full login → redirect → protected route flow
  works end to end. The real dashboards (charts, tables, CRUD) are the next phase.

## 4. Design System

Following the brand brief exactly: **Black / Dark Gray / Crimson Red / Accent Red**
palette, **Montserrat** for display type, **Inter** for body copy, **Poppins** for
UI/accent labels. Premium glassmorphism cards (`.glass` in `src/styles/index.css`)
paired with angled, kinetic CTA buttons for contrast.

**Signature element:** the "ring" from the Xtreme Fitness logo mark (the dumbbell
inside a circle) is reused structurally throughout — as a glowing backdrop behind the
hero, as progress rings around animated stat counters, and as the avatar frame on
trainer cards — tying the whole visual system back to the actual brand mark rather
than a generic decorative motif.

## 5. Project Structure

```
frontend/
├── src/
│   ├── assets/           # logo.jpeg
│   ├── components/
│   │   ├── common/       # Loader, Skeleton, ScrollReveal, RingStat
│   │   ├── landing/       # Hero, Programs, Membership, Trainers, Gallery, BMI, etc.
│   │   └── layout/         # Navbar, Footer
│   ├── pages/
│   │   ├── auth/            # Login, Register, ForgotPassword, ResetPassword
│   │   ├── dashboard/         # Placeholder role dashboards
│   │   └── Home.jsx
│   ├── layouts/                # PublicLayout, AuthLayout
│   ├── routes/                  # ProtectedRoute
│   ├── context/                  # AuthContext
│   ├── services/                  # api.js (axios + JWT refresh), authService, publicService
│   └── styles/index.css             # Tailwind + design tokens + .glass/.btn-cta system
```

## 6. Not Yet Implemented (planned for the next phase)
Admin/Trainer/Member dashboards with real charts (Chart.js) and data tables, Programs/
About/Trainers/Gallery/Blog/Contact as standalone routed pages (currently sections on
the one-page landing site), member Profile/Attendance/Payments/Reports pages, image
upload UI, PDF invoice download UI, notifications dropdown.
