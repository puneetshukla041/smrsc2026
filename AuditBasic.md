## Critical

### 1. No rate limiting on API endpoints
**File:** `app/api/contact/route.js`
Right now, anyone can hit our `/api/contact` endpoint thousands of times per second. A bot could spam our database with junk entries or crash the server. Add rate limiting (e.g., max 5 requests per minute per IP).

### 2. No CORS configuration on API routes
**File:** `app/api/contact/route.js`
Our API accepts requests from any website. Someone could build a page on their own domain that submits fake contact forms to our server. We need to restrict which origins can call our API.

### 3. No CSRF protection
**File:** `app/api/contact/route.js`
There's no CSRF token on form submissions. An attacker could trick a logged-in user into submitting a form without their knowledge. Add CSRF tokens to all state-changing requests.

### 4. No connection timeout in MongoDB client
**File:** `lib/mongodb.js`, line 27-31
If the database goes down, `mongoose.connect()` will hang forever — no timeout is set. The server will just freeze waiting. Add `serverSelectionTimeoutMS` and `connectTimeoutMS` to the connection options.

### 5. No graceful degradation if MongoDB is down
**File:** `app/api/contact/route.js`
If MongoDB is unreachable, the whole API crashes with a generic 500 error. The contact form should show a friendly message like "We're experiencing issues, please email us directly" instead of just failing silently.

---

## High

### 6. Image optimization is completely disabled
**File:** `next.config.mjs`, line 4
`unoptimized: true` means Next.js serves every image at full size — no resizing, no modern formats, no lazy optimization. On a site with 300+ images, this will make pages extremely slow, especially on mobile. Remove this flag and let Next.js handle image optimization.

### 7. Cookie consent banner has no actual GDPR functionality
**File:** `components/features/CookieBanner.tsx`
The banner says "Accept All" but doesn't actually save the user's choice anywhere (no localStorage, no cookie). It also shows up again on every page load. There's no way for users to reject cookies, and there's no data deletion mechanism — both required by GDPR.

### 8. No consent tracking for GDPR compliance
**File:** `app/home/page.jsx`, lines 25-29
We start tracking visits (sending data to `/api/track-visit`) immediately on page load — before the user has accepted cookies. Under GDPR, you must get consent before collecting any user data. The tracking should only fire after the user clicks "Accept All."

### 9. Client-side form lacks validation attributes
**File:** `app/(src)/contactus/page.jsx`, lines 121-161
The form inputs have `required` but nothing else. Add `maxLength` (prevent absurdly long inputs), `pattern` on email (extra browser-level check), and `minLength` on message. This stops bad data before it even hits the server.

### 10. `setInterval` carousel has a dependency array bug
**Files:** `components/home/Section1.jsx` line 31, `components/home/Section3.jsx` line 42, `components/home/Section5.jsx` line 35
The auto-advance timer uses `[currentSlide]` or `[page]` as a dependency. Every time the slide changes, the interval is destroyed and recreated. This means the timer resets on every slide change, making the timing inconsistent. Change the dependency array to `[]` and use a ref for the slide value instead.

### 11. Zero tests exist
**Entire project**
There are no test files anywhere in the project. No Jest, no React Testing Library, no Vitest — nothing. If someone changes the contact form API and breaks it, we won't know until a user complains. Set up a test framework and write tests for at least the API routes and critical components.

---

## Medium

### 12. TypeScript strict mode is disabled
**File:** `tsconfig.json`, line 11
`"strict": false` turns off all type safety checks. This defeats the purpose of having TypeScript. Bugs that the compiler could catch at build time will slip through to production instead.

### 13. Malformed `tsconfig.json` entry
**File:** `tsconfig.json`, line 33
There's a stray entry: `, "components/home/Section7.jsx"` tacked onto the include array. This looks like an accidental edit. Clean it up — it could confuse the compiler or other tooling.

### 14. SpeedLogger takes bundle space even when disabled
**File:** `components/features/SpeedLogger.jsx`
This component checks `process.env.NODE_ENV` at runtime to skip logging in production. But the entire component code (70+ lines) still ships in the production bundle. Either remove it from production pages entirely or wrap the import in a `process.env.NODE_ENV !== 'production'` check so it gets tree-shaken.

### 15. SearchModal lives in the wrong folder
**File:** `lib/SearchModal.js`
This is a React component (it renders JSX, uses hooks, uses framer-motion). It belongs in `components/`, not `lib/`. The `lib/` folder should only have utility functions and config — not UI components.

### 16. No service layer — API routes directly call Mongoose
**File:** `app/api/contact/route.js`
The API route file directly imports Mongoose models and runs database queries. If you later need to send a confirmation email, validate against a blocklist, or log the submission — all of that logic piles up in the route file. Extract database operations into a service layer (e.g., `services/contactService.js`).

### 17. Business logic mixed into page components
**Files:** `app/home/page.jsx` (visit tracking, lines 20-68), `app/(src)/contactus/page.jsx` (form handling)
Page components should just render UI. The visit tracking logic (calculating watch time, sending beacons, handling visibility changes) is 50 lines of business logic crammed into a page component. Extract it into a custom hook like `useVisitTracker()`.

### 18. No centralized error handling
**Files:** `app/api/contact/route.js`, `components/features/GlobalPreloader.jsx`
Each file handles errors differently. The API route catches everything and returns 500. The GlobalPreloader silently swallows errors with `.catch(() => {})`. There's no consistent pattern. Create a shared error handler that logs properly and returns meaningful messages.

### 19. GlobalPreloader fetches 300+ assets and marks all hero images as priority
**File:** `components/features/GlobalPreloader.jsx`, lines 6-13 and 329-345
All 6 hero images are fetched with top priority simultaneously. Only the first visible image should be priority — the rest should load in the background. Also, fetching 300+ assets on mount (including all 40 committee photos and 51 cardiac faculty images) hurts initial page load.

### 20. Event listener recreation in SearchModal
**File:** `lib/SearchModal.js`, lines 83-86
The `keydown` event listener is added and removed on every change to `isOpen`, `selectedIndex`, or `results`. That's potentially dozens of add/remove cycles during a single search session. Use a ref for the handler to avoid this.

### 21. `requestAnimationFrame` leak in SmoothScroll
**File:** `lib/SmoothScroll.js`, lines 33-38
The `raf` function calls `requestAnimationFrame(raf)` in a loop, but the RAF ID is never stored. When the component unmounts, `lenis.destroy()` is called but the pending RAF callback isn't cancelled. Store the ID and call `cancelAnimationFrame()` in the cleanup.

### 22. No retry logic on failed API calls
**File:** `app/home/page.jsx`, lines 25-29
The visit tracking fetch just logs an error and gives up. For non-critical calls like analytics, add a simple retry (1-2 attempts with a short delay). For critical calls like contact form submission, show the user a "retry" button.

---

## Low

### 23. Form state lost on navigation
**File:** `app/(src)/contactus/page.jsx`
If a user fills out the contact form, navigates to another page, and comes back — everything they typed is gone. Consider saving form state to `sessionStorage` so it persists during the session.

### 24. No caching strategy for static content
**General**
Pages like About, Agenda, and Venue have static content that doesn't change often, but there's no caching headers or revalidation strategy set up. Use Next.js `revalidate` or proper `Cache-Control` headers for static pages.

### 25. Missing `will-change` hints on heavy animations
**Files:** `components/home/Section3.jsx`, `components/home/Section5.jsx`
The carousel cards use heavy CSS transforms and filters but don't have `will-change: transform` set (except in the inline `style` on Section3 line 134). Adding this hint tells the browser to GPU-accelerate these elements, reducing jank.

### 26. No code splitting beyond a few dynamic imports
**File:** `app/home/page.jsx`, lines 10-15
Only the home page sections use `dynamic()` imports. Pages like About (with heavy faculty image grids), Agenda, and Past Events load everything upfront. Add dynamic imports for heavy components on those pages too.

### 27. Missing ARIA labels on interactive elements
**File:** `components/common/Header.jsx`, lines 266-272 (search button), lines 289-300 (mobile menu button)
The search and menu buttons have no `aria-label`. Screen readers will just announce "button" with no context. Add `aria-label="Open search"` and `aria-label="Open menu"` respectively.

### 28. SearchModal missing dialog accessibility
**File:** `lib/SearchModal.js`, lines 96-236
The modal doesn't have `role="dialog"`, `aria-modal="true"`, or `aria-labelledby`. Focus isn't trapped inside the modal — a screen reader user could tab behind it into the page content.

### 29. No reduced-motion support
**All animation files**
Users who have "Reduce Motion" enabled in their OS still get all the spring animations, carousels, and parallax effects. Wrap animations in a `prefers-reduced-motion` media query check, or use framer-motion's `useReducedMotion()` hook.

### 30. No focus indicators on interactive elements
**Files:** `components/common/Header.jsx`, `components/common/footer.jsx`
Many buttons and links use `outline-none` or have no visible focus state. Keyboard users can't see which element is currently focused. Add a visible focus ring (e.g., `focus-visible:ring-2 focus-visible:ring-white/50`).

### 31. Multiple scroll event listeners from Header
**File:** `components/common/Header.jsx`
The Header component doesn't add a direct scroll listener, but the CountdownTimer (rendered inside the layout on mobile) does at line 189. If Header is ever refactored to add scroll behavior, there's a risk of stacking listeners. Keep scroll handlers centralized or use a shared hook.

---

## Summary

| Severity | Count |
|----------|-------|
| Critical | 5     |
| High     | 6     |
| Medium   | 11    |
| Low      | 9     |
| **Total** | **31** |

