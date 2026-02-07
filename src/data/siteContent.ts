export const siteContent = {
    brand: {
        name: "Navigator System",
        tagline: "Keep Your Infrastructure Running. Build What’s Next.",
        phone: "",
        email: "",
        address: "",
        logo: "/assets/img/navigator-systems-logo.svg",
        logoLight: "/assets/img/navigator-systems-logo.svg", // Assuming same logo for now, or use a specific light version if available
        logoIcon: "/assets/img/navigator-logo-only.svg"
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
            subtitle: "Overview",
            items: [
                {
                    icon: "flaticon-server",
                    title: "Infrastructure Support",
                    description: "Server maintenance, AMC, network maintenance, data center support, helpdesk/FMS, and IT operations management."
                },
                {
                    icon: "flaticon-cloud-computing",
                    title: "Technology Delivery",
                    description: "Website & app development, UI/UX, branding, e-commerce, software engineering, cloud services, and AI automation."
                }
            ]
        },
        industries: [
            { title: "IT & SaaS", icon: "fas fa-laptop-code" },
            { title: "Manufacturing", icon: "fas fa-industry" },
            { title: "Healthcare", icon: "fas fa-heartbeat" },
            { title: "Education", icon: "fas fa-graduation-cap" },
            { title: "Logistics", icon: "fas fa-shipping-fast" },
            { title: "Retail & E-commerce", icon: "fas fa-shopping-cart" },
            { title: "BFSI", icon: "fas fa-university" },
            { title: "Professional Services", icon: "fas fa-briefcase" }
        ],
        howWeWork: [
            {
                step: "01",
                title: "Assess",
                description: "Understand your infrastructure or product scope, risks, dependencies, and business goals."
            },
            {
                step: "02",
                title: "Plan",
                description: "Recommend a maintenance plan or delivery roadmap with clear SLAs, timelines, and commercials."
            },
            {
                step: "03",
                title: "Execute",
                description: "Deploy engineers, monitoring, and delivery teams with structured reporting and escalations."
            }
        ],
        ctaBanner: {
            title: "Ready to improve uptime or launch your next build?",
            subtitle: "Talk to our team for a tailored plan and quote.",
            btnText: "Get Started",
            btnLink: "/talk-to-our-team",
            bgImage: "/assets/img/shape/banner-8.jpg"
        },
        clients: [
            { name: "TCS", logo: "/assets/img/partners/tcs.svg" },
            { name: "Ideal Invent", logo: "/assets/img/partners/ideal-invent.svg" },
            { name: "HCL", logo: "/assets/img/partners/hcl.svg" },
            { name: "Ericsson", logo: "/assets/img/partners/ericsson.svg" },
            { name: "Misys", logo: "/assets/img/partners/misys.svg" },
            { name: "Nokia Siemens Networks", logo: "/assets/img/partners/nokia.svg" },
            { name: "CGI", logo: "/assets/img/partners/cgi.svg" },
            { name: "Mphasis", logo: "/assets/img/partners/mphasis.svg" }
        ]
    },
    about: {
        title: "About Us",
        description: "Navigator System is a technology services company delivering end-to-end support for servers, storage, and networking infrastructure — backed by experienced engineers, service processes, and multi-brand capabilities. We also provide engineering services across web, mobile, cloud, and automation so customers can modernize alongside keeping their core systems stable.",
        values: [
            { title: "Reliability", description: "Reliability and uptime for business-critical systems" },
            { title: "Transparency", description: "Transparent SLAs and measurable service outcomes" },
            { title: "Security", description: "Security-first practices and controlled access" },
            { title: "Modernization", description: "Practical modernization — optimize, extend lifecycle, and migrate when needed" }
        ],
        differentiators: [
            "Preventive maintenance + remote monitoring to catch issues early",
            "Multi-OEM expertise across Dell, HP, IBM, Cisco, and more",
            "Pan-India service capability with structured escalation",
            "A single partner for ongoing maintenance plus new engineering delivery"
        ]
    },
    services: {
        infrastructure: [
            {
                id: "server-maintenance-support",
                category: "infrastructure",
                icon: "icon-server.png",
                title: "Server Maintenance & Support",
                summary: "Cost-effective server maintenance and support designed to maximize uptime, reduce risk, and extend the lifecycle of your server assets — including multi-OEM environments and mixed x86/UNIX estates.",
                features: [
                    "Preventive maintenance: health checks, cleaning, diagnostics, patch guidance",
                    "Onsite troubleshooting and break-fix support",
                    "Remote monitoring (optional): proactive alerts to prevent failures",
                    "Hardware replacement with compatible spares (as per contract scope)",
                    "Performance tuning support and incident root cause analysis"
                ],
                whoIsItFor: [
                    "Organizations with post-warranty servers",
                    "Data centers seeking predictable annual maintenance",
                    "Teams needing multi-brand support under one vendor"
                ],
                keyBenefits: [
                    "Lower cost compared to OEM renewals",
                    "Reduced downtime and faster restoration",
                    "Clear SLA-driven response and escalation"
                ],
                ctaLine: "Get a Server Maintenance Plan and SLA proposal in 24-48 hours."
            },
            {
                id: "amc-services",
                category: "infrastructure",
                icon: "icon-contract.png",
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
                category: "infrastructure",
                icon: "icon-network.png",
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
                category: "infrastructure",
                icon: "icon-datacenter.png",
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
                category: "infrastructure",
                icon: "icon-itom.png",
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
                category: "technology",
                icon: "7.png",
                heroImage: "/assets/img/banner/7.jpg",
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
                category: "technology",
                icon: "8.png",
                heroImage: "/assets/img/banner/8.jpg",
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
                category: "technology",
                icon: "9.png",
                heroImage: "/assets/img/banner/9.jpg",
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
                category: "technology",
                icon: "10.png",
                heroImage: "/assets/img/banner/10.jpg",
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
                category: "technology",
                icon: "11.png",
                heroImage: "/assets/img/banner/hero-slide-2.jpg",
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
                category: "technology",
                icon: "12.png",
                heroImage: "/assets/img/banner/hero-slide-3.jpg",
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
                category: "technology",
                icon: "13.png",
                heroImage: "/assets/img/banner/hero-slide-4.jpg",
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
                category: "technology",
                icon: "14.png",
                heroImage: "/assets/img/banner/infra-service.jpg",
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
                category: "technology",
                icon: "15.png",
                heroImage: "/assets/img/banner/tech-service.jpg",
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
