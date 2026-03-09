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
            
            subgraph LegalRoutes ["(legal) Route Group"]
                CookiesPage[Cookies]
                PrivacyPage[Privacy Policy]
                TermsPage[Terms of Use]
            end
            
            subgraph SrcRoutes ["(src) Route Group"]
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
