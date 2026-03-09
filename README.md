# SMRSC 2026 – Conference Platform

SMRSC (SSI Multi-Specialty Robotic Surgery Conference) is a global conference focused on robotic and technology-driven surgery. The platform brings together surgeons, healthcare professionals, innovators, and medical leaders to exchange knowledge, demonstrate robotic procedures, and explore advancements shaping the future of connected surgical care.

This repository contains the **official web platform for SMRSC 2026**, built with **Next.js** using the App Router architecture. The platform provides information about the conference including schedules, faculty, media, venues, registration, and past events.

---

## Tech Stack

### Framework
- Next.js 16 (App Router)
- React 19

### Styling
- TailwindCSS 4
- Custom fonts and assets

### Animations & UI
- Framer Motion
- Lenis (smooth scrolling)
- tsParticles

### Icons
- Lucide React

### Backend / Data
- MongoDB
- Mongoose
- Next.js API Routes

### Tooling
- ESLint
- PostCSS
- TypeScript configuration support

---

## System Architecture Diagram

The platform follows a **Next.js full-stack architecture** where the frontend UI and backend APIs are handled within the same application using the App Router. Data persistence is handled through MongoDB, prioritizing contact inquiries over the legacy visit-tracking system. Route groups are used to logically separate legal pages from core application routes.

```mermaid
flowchart LR

User[User Browser]

User --> NextApp[Next.js Application]

NextApp --> UI[React Components]
NextApp --> Pages[App Router Pages]

Pages --> Legal["(legal) Route Group"]
Pages --> Src["(src) Route Group"]

Legal --> Cookies[Cookies / Privacy / Terms]
Src --> Core[Home / About / Agenda / Map]
Src --> Engagement[Register / Contact Us]
Src --> Media[Media / Blogs]
Src --> Visit[Visit / Hotels / Venue]

NextApp --> APIRoutes[Next.js API Routes]

APIRoutes --> ContactRoute[Contact API]
ContactRoute --> MongoDB[(MongoDB Database)]

NextApp --> Assets[Static Assets]
Assets --> Images[Images / Logos]
Assets --> Fonts[Fonts]
Assets --> Videos[Videos]

MongoDB --> ContactModel[Contact Model]
