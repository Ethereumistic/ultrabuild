import type { Metadata, Viewport } from "next";

/**
 * Base URL for the website - used for canonical URLs and Open Graph
 * Update this to your production domain
 */
export const siteConfig = {
    name: "Ultrabuild",
    nameCompany: "УЛТРА БИЛД ООД",
    description:
        "УЛТРА БИЛД е водеща българска строителна компания, специализирана в пътно строителство, саниране на сгради и градско благоустройство. С над 7 години опит и 150+ завършени проекта.",
    shortDescription: "Пътно строителство, саниране и градско благоустройство",
    url: "https://ultrabuild.bg",
    locale: "bg_BG",
    language: "bg",
    siteName: "Ultrabuild",

    // Contact Information
    contact: {
        phone: "+359 893 277 266",
        email: "ultrabild@gmail.com",
        address: {
            street: 'ул. "Димитър Благоев" №19, вх. Е, ап. 180, ет. 5',
            city: "Ямбол",
            country: "България",
            postalCode: "8600",
        },
    },

    // Social Media (add your actual social media URLs when available)
    social: {
        facebook: "",
        instagram: "",
        linkedin: "",
    },

    // Business Information
    business: {
        yearFounded: 2017,
        eik: "204796422",
        manager: "Стефан Стефанов",
    },

    // Keywords for SEO
    keywords: [
        "пътно строителство",
        "строителна компания",
        "саниране на сгради",
        "градско благоустройство",
        "зимно поддържане на пътища",
        "пътна инфраструктура",
        "реставрация на фасади",
        "обновяване на сгради",
        "паркови пространства",
        "Ямбол",
        "България",
        "УЛТРА БИЛД",
        "Ultrabuild",
        "строителство",
        "инфраструктура",
        "автомагистрала Тракия",
        "европейски проекти",
        "EU финансиране",
    ],

    // Theme colors
    themeColor: "#f9831e", // Primary orange color
    backgroundColor: "#0a0a0a", // Dark background
} as const;

/**
 * Default viewport configuration for Next.js 16
 */
export const defaultViewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: siteConfig.themeColor },
    ],
};

/**
 * Base metadata configuration that all pages inherit
 */
export const baseMetadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: `${siteConfig.name} | Пътно Строителство и Благоустройство`,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.nameCompany }],
    creator: siteConfig.nameCompany,
    publisher: siteConfig.nameCompany,

    // Robots configuration
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    // Open Graph
    openGraph: {
        type: "website",
        locale: siteConfig.locale,
        url: siteConfig.url,
        siteName: siteConfig.siteName,
        title: `${siteConfig.name} | Пътно Строителство, Саниране и Благоустройство`,
        description: siteConfig.description,
        images: [
            {
                url: "/og-image.png", // You'll need to create this
                width: 1200,
                height: 630,
                alt: `${siteConfig.name} - Строителна компания`,
                type: "image/png",
            },
        ],
    },

    // Twitter Card
    twitter: {
        card: "summary_large_image",
        title: `${siteConfig.name} | Пътно Строителство и Благоустройство`,
        description: siteConfig.shortDescription,
        images: ["/og-image.png"],
    },

    // Icons configuration
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        ],
        apple: [
            { url: "/apple-icon.png" },
        ],
        other: [
            {
                rel: "android-chrome-192x192",
                url: "/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                rel: "android-chrome-512x512",
                url: "/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    },

    // Manifest
    manifest: "/site.webmanifest",

    // Verification (add your actual verification codes)
    verification: {
        google: "", // Add your Google Search Console verification code
        // yandex: "",
        // bing: "",
    },

    // Alternate languages (if you add multilingual support)
    alternates: {
        canonical: siteConfig.url,
        languages: {
            "bg-BG": siteConfig.url,
        },
    },

    // Category
    category: "construction",

    // Classification
    classification: "Business, Construction, Infrastructure",

    // Format Detection
    formatDetection: {
        email: true,
        address: true,
        telephone: true,
    },
};

/**
 * Generate structured data for Organization (JSON-LD)
 */
export function generateOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteConfig.nameCompany,
        alternateName: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/android-chrome-512x512.png`,
        foundingDate: siteConfig.business.yearFounded.toString(),
        description: siteConfig.description,
        address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.contact.address.street,
            addressLocality: siteConfig.contact.address.city,
            addressCountry: siteConfig.contact.address.country,
            postalCode: siteConfig.contact.address.postalCode,
        },
        contactPoint: {
            "@type": "ContactPoint",
            telephone: siteConfig.contact.phone,
            email: siteConfig.contact.email,
            contactType: "customer service",
            availableLanguage: ["Bulgarian"],
        },
        sameAs: [
            siteConfig.social.facebook,
            siteConfig.social.instagram,
            siteConfig.social.linkedin,
        ].filter(Boolean),
    };
}

/**
 * Generate structured data for LocalBusiness (JSON-LD)
 */
export function generateLocalBusinessSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "GeneralContractor",
        name: siteConfig.nameCompany,
        alternateName: siteConfig.name,
        image: `${siteConfig.url}/android-chrome-512x512.png`,
        url: siteConfig.url,
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        description: siteConfig.description,
        address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.contact.address.street,
            addressLocality: siteConfig.contact.address.city,
            addressCountry: "BG",
            postalCode: siteConfig.contact.address.postalCode,
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 42.4836, // Approximate coordinates for Yambol
            longitude: 26.5033,
        },
        areaServed: [
            {
                "@type": "AdministrativeArea",
                name: "Ямболска област",
            },
            {
                "@type": "AdministrativeArea",
                name: "Хасковска област",
            },
        ],
        serviceType: [
            "Пътно строителство",
            "Саниране на сгради",
            "Градско благоустройство",
            "Зимно поддържане на пътища",
        ],
        priceRange: "$$",
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "17:00",
            },
        ],
    };
}

/**
 * Generate structured data for WebSite (JSON-LD)
 */
export function generateWebsiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteConfig.name,
        alternateName: siteConfig.nameCompany,
        url: siteConfig.url,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
        publisher: {
            "@type": "Organization",
            name: siteConfig.nameCompany,
        },
    };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(
    items: Array<{ name: string; url: string }>
) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `${siteConfig.url}${item.url}`,
        })),
    };
}

/**
 * Generate Service schema for service pages
 */
export function generateServiceSchema(service: {
    name: string;
    description: string;
    url: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: `${siteConfig.url}${service.url}`,
        provider: {
            "@type": "Organization",
            name: siteConfig.nameCompany,
            url: siteConfig.url,
        },
        areaServed: {
            "@type": "Country",
            name: "Bulgaria",
        },
    };
}

/**
 * Generate FAQ schema
 */
export function generateFAQSchema(
    faqs: Array<{ question: string; answer: string }>
) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };
}

/**
 * Helper function to create page-specific metadata
 */
export function createPageMetadata({
    title,
    description,
    path = "",
    images,
    noIndex = false,
}: {
    title: string;
    description: string;
    path?: string;
    images?: Array<{ url: string; width: number; height: number; alt: string }>;
    noIndex?: boolean;
}): Metadata {
    const url = `${siteConfig.url}${path}`;

    return {
        title,
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            images: images || baseMetadata.openGraph?.images,
        },
        twitter: {
            title,
            description,
            images: images?.map((img) => img.url) || ["/og-image.png"],
        },
        robots: noIndex
            ? { index: false, follow: false }
            : baseMetadata.robots,
    };
}
