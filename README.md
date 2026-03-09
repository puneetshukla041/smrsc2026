# SMRSC 2026 - Official Conference Platform

SMRSC (SSI Multi-Specialty Robotic Surgery Conference) is a premier global conference focused on robotic and technology-driven surgery. This platform facilitates the gathering of surgeons, healthcare professionals, innovators, and medical leaders to exchange knowledge, demonstrate robotic procedures, and explore advancements shaping the future of connected surgical care.

This repository contains the official web platform for SMRSC 2026. It is engineered using Next.js with the App Router architecture, ensuring a highly performant, SEO-optimized, and scalable application. The platform serves as the central hub for conference schedules, faculty profiles, media distribution, venue logistics, registration, and historical event data.

---

## Technology Stack

### Core Framework
* **Next.js 16** (App Router Architecture)
* **React 19**

### Styling & User Interface
* **TailwindCSS 4** (Utility-first styling)
* **Framer Motion** (Advanced UI animations)
* **Lenis** (Optimized smooth scrolling)
* **tsParticles** (Background particle effects)
* **Lucide React** (Consistent iconography system)

### Backend & Data Management
* **MongoDB** (NoSQL Database)
* **Mongoose** (Object Data Modeling)
* **Next.js API Routes** (Serverless backend functions)

### Tooling & Configuration
* **ESLint** (Code linting and formatting)
* **PostCSS** (CSS transformation)
* **TypeScript** (Configuration support)

---

## System Architecture Diagram

The platform utilizes a full-stack Next.js architecture. The frontend UI, client-side routing, and backend API endpoints are unified within the Next.js environment. Data persistence is managed via MongoDB, specifically handling contact inquiries and event registrations through secure serverless routes.

```mermaid
flowchart TD
    %% Define Client Layer
    Client[Client / Web Browser]

    %% Define Application Layer (Next.js)
    subgraph NextJS [Next.js Application Server]
        direction TB
        
        %% Static Assets
        Static[Static Assets Handler]
        
        %% App Router Layer
        subgraph AppRouter [App Router Layer]
            direction LR
            Layout[Root Layout & Providers]
            
            subgraph LegalRoutes [(legal) Route Group]
                CookiesPage[Cookies]
                PrivacyPage[Privacy Policy]
                TermsPage[Terms of Use]
            end
            
            subgraph SrcRoutes [(src) Route Group]
                HomePage[Home]
                AboutPage[About & FAQ]
                AgendaPage[Agenda]
                MediaPage[Media & Blogs]
                VisitPage[Visit, Hotels & Places]
                RegisterPage[Register & Contact]
            end
        end

        %% Components Layer
        subgraph UIComponents [UI Components Library]
            CommonUI[Common: Headers, Footers]
            FeatureUI[Features: Preloader, CookieBanner, Timers]
            PageUI[Page Specific: Agenda Tabs, Home Sections]
        end

        %% Backend API Layer
        subgraph APILayer [API Routes]
            ContactAPI[/api/contact]
        end
        
        %% Utilities & Data Models
        subgraph LibAndModels [Libraries & Models]
            DBConnector[lib/mongodb.js]
            ContactModel[models/Contact.js]
            Utilities[lib/SmoothScroll.js, SearchModal.js]
        end
    end

    %% Define Database Layer
    Database[(MongoDB Cluster)]

    %% Map Relationships
    Client <-->|HTTP/HTTPS Requests| NextJS
    Client -->|Serves fonts, images, videos| Static
    
    Layout --> LegalRoutes
    Layout --> SrcRoutes
    SrcRoutes --> UIComponents
    LegalRoutes --> UIComponents
    
    RegisterPage -->|POST Request| ContactAPI
    ContactAPI --> DBConnector
    ContactAPI --> ContactModel
    
    DBConnector -->|Mongoose Connection| Database
    ContactModel -->|Schema Validation| Database
