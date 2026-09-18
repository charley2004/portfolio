// Case-study content for each Featured Project card.
// Add a new project by adding a new key here — project.html renders it automatically.
const PROJECTS = {
    "jekafly": {
        title: "Jekafly",
        tagline: "Nigeria's #1 Travel Platform",
        category: "Full OTA Platform",
        liveUrl: "https://jekafly.com",
        screenshot: "assets/screenshots/jekafly.jpg",
        overview: "A full Online Travel Agency (OTA) platform covering visa applications for 150+ countries, hotel bookings, proof-of-accommodation letters, flight booking, and travel insurance — all in one integrated system. Built end-to-end: frontend, backend API, and payment infrastructure.",
        features: [
            "Visa application system covering 150+ countries (UK, US, Schengen, Canada, UAE) with real-time status tracking",
            "Hotel booking and proof-of-accommodation letter generation for visa applications",
            "Flight booking module",
            "Travel insurance purchase flow",
            "Affiliate programme for referral-driven bookings",
            "Paystack-integrated payments with AWS S3 document storage"
        ],
        tools: ["HTML5 / CSS3", "JavaScript", "Node.js / Express", "Prisma", "AWS S3", "Paystack", "Affiliate System"],
        role: "Full-stack developer — built the frontend, the Node/Express + Prisma API, and wired up payments and document storage.",
        outcome: "End-to-end travel infrastructure handling visa applications, hotel proof letters, flight booking, and travel insurance — with an affiliate programme and visa tracking system built in. Live in production."
    },
    "uniconnect": {
        title: "UniConnect",
        tagline: "University Student Marketplace (Concept)",
        category: "Student E-Commerce",
        liveUrl: null,
        repoUrl: null,
        screenshot: null,
        overview: "A concept and early prototype for an e-commerce marketplace exclusively for Nigerian university students — think Jumia, but campus-first. Planned around a single-page application with client-side routing and multi-role access; not yet built out to a deployable state.",
        features: [
            "Planned: campus-scoped marketplace across UNILAG, UI, OAU, Covenant, and more",
            "Planned: multi-role access — buyer, seller, and admin",
            "Planned: flash sales with live countdown timers",
            "Planned: persistent shopping cart across sessions",
            "Planned: site-wide dark mode theming system",
            "Planned: admin dashboard for platform oversight and seller management"
        ],
        tools: ["HTML5 / CSS3", "JavaScript (SPA Router)"],
        role: "Solo developer — designed the concept and SPA architecture.",
        outcome: "Concept-stage prototype outlining a single-page marketplace architecture with client-side routing and multi-role access. Not yet completed or deployed."
    },
    "skillforge": {
        title: "SkillForge",
        tagline: "Gamified Learning Platform",
        category: "EdTech Platform",
        liveUrl: "https://charley2004.github.io/skillforge/",
        screenshot: "assets/screenshots/skillforge.jpg",
        overview: "A fully scalable e-learning platform where users access courses, earn XP points, and level up through a gamified progression system. Architected with separate admin, vendor, and student portals.",
        features: [
            "Course creation and approval workflow for vendors",
            "XP-based gamified progression system for learners",
            "Separate student, vendor, and admin portals",
            "Centralized analytics dashboard for tracking learner performance",
            "Role-based authentication system"
        ],
        tools: ["HTML5 / CSS3", "JavaScript", "Admin Panel", "Vendor Portal", "XP / Gamification", "Auth System"],
        role: "Solo developer — designed the multi-portal architecture and gamification logic.",
        outcome: "Multi-role platform (student, vendor, admin) with gamified XP progression, course approval workflows, and a centralized analytics dashboard for tracking learner performance at scale."
    },
    "lsa": {
        title: "LSA",
        tagline: "Legit Source Analysis",
        category: "Media & Analytics",
        liveUrl: "https://charley2004.github.io/lsa/",
        screenshot: "assets/screenshots/lsa.jpg",
        overview: "A premium football match analysis and stats platform with dedicated pages for results, analysis, about, contact, and disclaimer — built for high-frequency data updates and monetization.",
        features: [
            "Football match analysis and stats pages",
            "Structured content architecture for frequent data updates",
            "Results display logic with clean content routing",
            "CPA and affiliate monetization integration",
            "SEO-optimized page architecture"
        ],
        tools: ["HTML5 / CSS3", "JavaScript", "Data Analysis", "CPA Monetization", "SEO Architecture"],
        role: "Solo developer — built the content architecture and monetization integration.",
        outcome: "Multi-page structured platform with clean content routing, results display logic, and SEO-optimized architecture designed to drive consistent organic traffic and affiliate revenue."
    },
    "naija-updates": {
        title: "Naija Updates",
        tagline: "Review & Blog Platform",
        category: "Digital Media",
        liveUrl: "https://naijaupdates.ng",
        screenshot: "assets/screenshots/naija-updates.jpg",
        overview: "A content-driven review and blog platform with a scalable content architecture covering blog posts, reviews, an advertise page, about, and contact — optimized for multi-channel content distribution.",
        features: [
            "Blog and review content architecture covering news, entertainment, lifestyle, and sports",
            "Advertise, about, and contact pages",
            "Automated cross-platform publishing workflow",
            "CPA monetization integration",
            "SEO / SEM-optimized structure for organic discovery"
        ],
        tools: ["HTML5 / CSS3", "JavaScript", "Content Management", "SEO / SEM", "Monetization"],
        role: "Solo developer — built the content hub architecture and publishing/monetization workflow.",
        outcome: "Centralized content hub with structured review and blog architecture, automated cross-platform publishing workflow, and integrated performance tracking for revenue optimization. Live in production."
    },
    "cpa-framework": {
        title: "CPA Revenue Optimization Framework",
        tagline: "Marketing Infrastructure",
        category: "Marketing Infrastructure",
        liveUrl: null,
        screenshot: null,
        overview: "A comprehensive CPA monetization system with conversion tracking, A/B testing infrastructure, and automated optimization protocols — deployed across multiple digital properties rather than built as a single site.",
        features: [
            "Conversion tracking across multiple digital properties",
            "A/B testing infrastructure for systematic optimization",
            "Automated optimization protocols",
            "Analytics API integration with data visualization",
            "Deployed across 8+ live systems"
        ],
        tools: ["JavaScript", "Analytics APIs", "Conversion Tracking", "Data Visualization"],
        role: "Designed and implemented the tracking and optimization framework used across multiple properties.",
        outcome: "Systematic framework for testing and scaling profitable CPA campaigns with quantifiable conversion metrics and automated reporting across 8+ deployed systems."
    },
    "vitalis": {
        title: "Vitalis",
        tagline: "Finance, Growth & Wellness App",
        category: "AI-Powered Wellness App",
        liveUrl: "https://charley2004.github.io/vitalis/",
        repoUrl: "https://github.com/charley2004/vitalis",
        screenshot: null,
        overview: "A React Native wellness and productivity app spanning personal finance tracking, habit and routine building, a growth coach, and an AI-powered insights engine built on Claude. The most actively developed app in the portfolio.",
        features: [
            "Personal finance tracking module",
            "Habit and routine building tools",
            "AI-powered growth coach and insights engine built on the Claude API",
            "Cloud sync via Supabase",
            "Biometric / PIN lock security",
            "CSV / PDF data export"
        ],
        tools: ["React Native / Expo", "TypeScript", "Supabase", "Claude API", "Biometric Auth"],
        role: "Solo developer — actively building and iterating on this app.",
        outcome: "Most actively developed app in the portfolio — cloud-synced finance and coaching data with AI-generated insights and secure local authentication. In active development."
    },
    "voyara": {
        title: "Voyara",
        tagline: "Travel Packages & Ride Booking",
        category: "Travel & Ride Booking Platform",
        liveUrl: "https://charley2004.github.io/voyara-mobile/",
        repoUrl: "https://github.com/charley2004/voyara-mobile",
        screenshot: null,
        overview: "A full-stack travel and ride-booking platform — a Node/Express + MongoDB backend handling auth, travel packages, bookings, payments, and rides, paired with a React Native mobile app covering the complete booking flow. Backend source: github.com/charley2004/voyara-backend.",
        features: [
            "Travel package browsing and booking",
            "Ride booking flow",
            "JWT-authenticated Node/Express + MongoDB backend",
            "Payment processing routes",
            "React Native mobile app covering the full booking flow"
        ],
        tools: ["Node.js / Express", "MongoDB", "JWT", "React Native / Expo"],
        role: "Full-stack developer — built the backend API and the matching mobile app.",
        outcome: "End-to-end MVP with real backend routes for bookings and payments, matched by a fully built mobile front-end."
    },
    "foxglove": {
        title: "Foxglove",
        tagline: "Ambient Focus & Meditation App",
        category: "Meditation & Focus App",
        liveUrl: "https://charley2004.github.io/foxglove/",
        repoUrl: "https://github.com/charley2004/foxglove",
        screenshot: null,
        overview: "A meditation and focus app with custom animated UI — breathing circles, particle rings, and glass-morphic components — backed by a curated ambient sound library across calm, focus, nature, and sleep categories.",
        features: [
            "Custom animated UI: breathing circles, particle rings, glass-morphic cards",
            "Curated ambient sound library across calm, focus, nature, and sleep categories",
            "Stripe-powered premium subscription tier",
            "Zustand state management"
        ],
        tools: ["React Native / Expo", "Zustand", "Stripe", "SVG Animation"],
        role: "Solo developer — designed and built the custom animation and audio systems.",
        outcome: "Most visually original app in the portfolio, showcasing custom animation and interaction design beyond standard UI kits. In active development."
    },
    "prime-axis": {
        title: "Prime Axis Technology",
        tagline: "Agency Site",
        category: "Agency / Business Site",
        liveUrl: null,
        repoUrl: "https://github.com/charley2004/prime-axis",
        screenshot: null,
        overview: "The site for Prime Axis Technology, a development agency — service pages, case-study work items, pricing/FAQ, and a full SEO setup. This is Charles's own agency.",
        features: [
            "Service pages describing the agency's offerings",
            "Case-study style \"Work\" items",
            "Pricing and FAQ pages",
            "Full SEO setup: sitemap, Open Graph images, structured content model",
            "Built with Next.js and a structured, reusable content model"
        ],
        tools: ["Next.js", "TypeScript", "Tailwind CSS", "React Hook Form / Zod"],
        role: "Founder & developer — designed and built the agency's own site.",
        outcome: "A complete agency presence with a structured content model for services, pricing, and case studies — positions the business for client acquisition."
    },
    "unilag-update": {
        title: "UniLag Update",
        tagline: "Hostel & Admissions Hub",
        category: "Student Resource Platform",
        liveUrl: "https://charley2004.github.io/UNU/",
        screenshot: "assets/screenshots/unilag-update.jpg",
        overview: "A resource platform for University of Lagos students covering hostel/accommodation finding, JAMB & Post-UTME guidance, and admission consulting — with dedicated pages for events, opportunities, and services.",
        features: [
            "Hostel and accommodation finder for UNILAG students",
            "JAMB & Post-UTME guidance content",
            "Admission consulting services page",
            "Events and opportunities listings"
        ],
        tools: ["HTML5 / CSS3", "JavaScript", "Content Architecture"],
        role: "Solo developer — built the full multi-page content platform.",
        outcome: "Niche, student-focused platform addressing a specific local audience with structured multi-page content."
    },
    "frenchies-touch": {
        title: "Frenchie's Touch",
        tagline: "Luxury Barber Experience",
        category: "Small Business Site",
        liveUrl: "https://charley2004.github.io/Frenchies/",
        screenshot: "assets/screenshots/frenchies-touch.jpg",
        overview: "A clean marketing site for a luxury barbershop brand, built quickly with Tailwind CSS — home and about pages with a focused, minimal design.",
        features: [
            "Home page with brand-focused hero and service highlights",
            "About page",
            "Built with Tailwind CSS utility classes",
            "Font Awesome iconography"
        ],
        tools: ["HTML5", "Tailwind CSS", "Font Awesome"],
        role: "Solo developer — fast-turnaround design and build.",
        outcome: "Fast-turnaround small-business site demonstrating clean design execution outside the earning-platform niche."
    }
};
