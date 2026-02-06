export const siteContent = {
    brand: {
        name: "Navigator System",
        tagline: "Keep Your Infrastructure Running. Build What’s Next.",
        phone: "",
        email: "",
        address: ""
    },
    home: {
        heroSlider: [
            {
                id: 1,
                tagline: "IT Infrastructure Support",
                title: "Reliable Support for Growing Businesses",
                subtitle: "Maintain critical server, storage, and network infrastructure with maximum uptime.",
                bgImage: "/assets/img/banner/7.jpg",
                ctaPrimary: "Request a Quote",
                ctaSecondary: "Talk to an Engineer"
            },
            {
                id: 2,
                tagline: "Cloud & Modernization",
                title: "Modern Engineering & Cloud Solutions",
                subtitle: "Scalable cloud services and modern software engineering to power your digital transformation.",
                bgImage: "/assets/img/banner/hero-slide-2.jpg",
                ctaPrimary: "Explore Cloud",
                ctaSecondary: "View Services"
            },
            {
                id: 3,
                tagline: "Network Security",
                title: "Secure Network Infrastructure",
                subtitle: "Robust network maintenance and security solutions to keep your business connected and protected.",
                bgImage: "/assets/img/banner/hero-slide-3.jpg",
                ctaPrimary: "Secure Network",
                ctaSecondary: "Get Audited"
            },
            {
                id: 4,
                tagline: "Data Center Expert",
                title: "Expert Data Center Solutions",
                subtitle: "End-to-end data center management and optimization for peak performance and efficiency.",
                bgImage: "/assets/img/banner/hero-slide-4.jpg",
                ctaPrimary: "Optimize Now",
                ctaSecondary: "Contact Us"
            }
        ],
        hero: { // Keep for backward compatibility if needed, or remove after verifying usage
            title: "Reliable IT Support and Modern Engineering for Growing Businesses",
            subtitle: "With 20+ years of experience, Navigator System helps organizations maintain critical server, storage, and network infrastructure with maximum uptime.",
            ctaPrimary: "Request a Quote",
            ctaSecondary: "Talk to an Engineer"
        },
        servicesOverview: {
            title: "What We Do",
            items: [
                {
                    title: "Infrastructure Support",
                    description: "Server maintenance, AMC, network maintenance, data center support, helpdesk/FMS, and IT operations management."
                },
                {
                    title: "Technology Delivery",
                    description: "Website & app development, UI/UX, branding, e-commerce, software engineering, cloud services, and AI automation."
                }
            ]
        }
    },
    about: {
        title: "About Us",
        description: "Navigator System is a technology services company delivering end-to-end support for servers, storage, and networking infrastructure — backed by experienced engineers, service processes, and multi-brand capabilities. We also provide engineering services across web, mobile, cloud, and automation so customers can modernize alongside keeping their core systems stable.",
        values: [
            { title: "Reliability", description: "Reliability and uptime for business-critical systems" },
            { title: "Transparency", description: "Transparent SLAs and measurable service outcomes" },
            { title: "Security", description: "Security-first practices and controlled access" },
            { title: "Modernization", description: "Practical modernization — optimize, extend lifecycle, and migrate when needed" }
        ]
    },
    services: {
        infrastructure: [
            {
                id: "server-maintenance-support",
                title: "Server Maintenance & Support",
                summary: "Cost-effective server maintenance and support designed to maximize uptime, reduce risk, and extend the lifecycle of your server assets — including multi-OEM environments and mixed x86/UNIX estates.",
                features: [
                    "Preventive maintenance: health checks, cleaning, diagnostics, patch guidance",
                    "Onsite troubleshooting and break-fix support",
                    "Remote monitoring (optional): proactive alerts to prevent failures",
                    "Hardware replacement with compatible spares (as per contract scope)",
                    "Performance tuning support and incident root cause analysis"
                ]
            },
            {
                id: "amc-services",
                title: "AMC (Annual Maintenance Contract)",
                summary: "Comprehensive IT hardware AMC for servers (including OS support as applicable), storage devices, and networking devices — designed for maximum uptime through quick breakdown resolution and preventive maintenance.",
                features: [
                    "Servers + OS support (as defined in SLA)",
                    "Storage maintenance (SAN/NAS/Tape as applicable)",
                    "Networking equipment support",
                    "Spare parts coverage and replacements per contract"
                ]
            },
            {
                id: "network-maintenance",
                title: "Network Maintenance",
                summary: "Network support services covering routing, switching, wireless, LAN, VPN security, and VOIP — ensuring stable connectivity and secure access across your offices and sites.",
                features: [
                    "Switch and router maintenance",
                    "Wireless access point/controller support",
                    "LAN/VPN configuration and troubleshooting",
                    "Security hardening guidance and patch planning",
                    "Performance monitoring and incident management"
                ]
            },
            {
                id: "data-center-solutions",
                title: "Data Center Solutions",
                summary: "Data center services to design, improve, and maintain facilities and systems — including capacity planning, maintenance governance, and operational best practices.",
                features: [
                    "Data center assessment and gap analysis",
                    "Maintenance programs and vendor coordination",
                    "Monitoring and reporting setup",
                    "Security, access control, and operational process improvement"
                ]
            },
            {
                id: "it-operations-management",
                title: "IT Operations Management (ITOM)",
                summary: "Improve service delivery through structured IT operations management — service desk workflows, monitoring, automation, and reporting designed to reduce incidents and speed resolution.",
                features: [
                    "Better incident response and reduced MTTR",
                    "Standard processes, SLAs, and reporting",
                    "Automation and AI-assisted recommendations (optional)"
                ]
            },
            {
                id: "helpdesk-fms",
                title: "Helpdesk / FMS Assistance",
                summary: "24x7 helpdesk coverage and facilities management support to keep daily IT operations smooth — ideal for distributed sites and lean internal IT teams.",
                features: [
                    "Ticketing, triage, escalation, and vendor coordination",
                    "Onsite support (as per plan) for end-user and infra issues",
                    "SLA reporting and weekly/monthly reviews"
                ]
            }
        ],
        technology: [
            {
                id: "website-development",
                title: "Website Development",
                summary: "Modern, fast, secure websites that are easy to manage and built to convert — including corporate sites, service portals, and product websites.",
                features: [
                    "Information architecture and sitemap finalization",
                    "Responsive UI implementation (mobile-first)",
                    "CMS setup (WordPress / headless CMS / custom) as needed",
                    "Performance optimization and technical SEO foundations",
                    "Security hardening, backups, and monitoring"
                ]
            },
            {
                id: "ui-ux-design",
                title: "UI/UX Design",
                summary: "User-first interface design that improves usability, reduces friction, and supports business outcomes — from websites to internal dashboards.",
                features: [
                    "User flows, wireframes, and prototypes",
                    "Design system (colors, typography, components)",
                    "Accessibility and responsiveness guidelines",
                    "Developer-ready handoff (Figma specs + assets)"
                ]
            },
            {
                id: "branding-strategy",
                title: "Branding & Strategy",
                summary: "Brand foundations and messaging that clarify your positioning and make your digital presence consistent across touchpoints.",
                features: [
                    "Brand story, tone of voice, messaging pillars",
                    "Visual identity guidance (logo refinement, colors, typography)",
                    "Website content hierarchy and CTA strategy",
                    "Sales collateral templates (company profile, one-pagers)"
                ]
            },
            {
                id: "mobile-app-development",
                title: "Mobile App Development",
                summary: "iOS/Android app development for customer apps and internal operations — built for performance, stability, and maintainability.",
                features: [
                    "Cross-platform (Flutter/React Native) or native builds",
                    "Backend APIs, authentication, and role-based access",
                    "Offline-first flows (when required)",
                    "App store deployment support"
                ]
            },
            {
                id: "ecommerce-solutions",
                title: "E-Commerce Solutions",
                summary: "E-commerce builds and upgrades that improve catalog management, payments, order operations, and customer experience.",
                features: [
                    "Store setup (Shopify/WooCommerce/custom) as required",
                    "Payment gateway integrations and tax-ready invoicing flows",
                    "Inventory, shipping, and notification automation",
                    "Performance optimization and security hardening"
                ]
            },
            {
                id: "seo-sem",
                title: "SEO & SEM",
                summary: "Search visibility services focused on technical SEO, content structure, and measurable search performance — plus paid search campaigns where required for immediate demand.",
                features: [
                    "Site speed optimization (Core Web Vitals focus)",
                    "Schema markup and crawlability improvements",
                    "Indexing hygiene, redirects, canonicalization",
                    "Content architecture and internal linking",
                    "Search campaign setup aligned to service/product intent"
                ]
            },
            {
                id: "software-development",
                title: "Software Development",
                summary: "Custom software engineering for portals, internal tools, integrations, and business automation — with clean architecture and documentation.",
                features: [
                    "Admin panels and operational dashboards",
                    "Workflow systems (approvals, tickets, SLAs)",
                    "API integrations (payments, CRMs, ERPs, messaging)",
                    "Data pipelines and reporting"
                ]
            },
            {
                id: "cloud-services",
                title: "Cloud Services",
                summary: "Cloud strategy and implementation to improve reliability, scalability, and cost governance — including hybrid approaches where required.",
                features: [
                    "Cloud readiness assessment and migration planning",
                    "Compute, storage, networking architecture",
                    "Backup, DR planning, and monitoring",
                    "Cost optimization and security posture improvements"
                ]
            },
            {
                id: "ai-automation",
                title: "AI / Automation",
                summary: "Practical automation and AI-assisted workflows to reduce repetitive work, improve response times, and create better visibility for operations.",
                features: [
                    "Automated ticket triage and routing",
                    "Predictive alerts and anomaly detection (where data exists)",
                    "Chatbot/virtual assistant for internal support",
                    "Document processing and structured reporting"
                ]
            }
        ]
    }
};
