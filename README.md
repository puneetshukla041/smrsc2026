# SMRSC 2026 – Conference Platform

SMRSC (SSI Multi-Specialty Robotic Surgery Conference) is a global conference focused on robotic and technology-driven surgery. The platform brings together surgeons, healthcare professionals, innovators, and medical leaders to exchange knowledge, demonstrate robotic procedures, and explore advancements shaping the future of connected surgical care.

This repository contains the **official web platform for SMRSC 2026**, built with **Next.js** using the App Router architecture. The platform provides information about the conference including schedules, faculty, media, venues, registration, and past events.

---

# Tech Stack

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

# System Architecture Diagram

The platform follows a **Next.js full-stack architecture** where the frontend UI and backend APIs are handled within the same application using the App Router. Data persistence is handled through MongoDB, while contact submissions and inquiries are managed through dedicated API routes.

```mermaid
flowchart LR

User[User Browser]

User --> NextApp[Next.js Application]

NextApp --> UI[React Components]
NextApp --> Pages[App Router Pages]

Pages --> About[About & FAQ]
Pages --> Agenda[Agenda Page]
Pages --> Media[Media & Blogs]
Pages --> Register[Registration & Contact]
Pages --> Visit[Travel & Venue Info]
Pages --> Legal[Legal Pages]

NextApp --> APIRoutes[Next.js API Routes]

APIRoutes --> ContactAPI[Contact API]
ContactAPI --> MongoDB[(MongoDB Database)]

NextApp --> Assets[Static Assets]
Assets --> Images[Images & Logos]
Assets --> Fonts[Fonts]
Assets --> MediaAssets[Videos & PDFs]

MongoDB --> ContactModel[Contact Model]
