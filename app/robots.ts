import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

/**
 * Generate robots.txt for the website
 * This file controls how search engine crawlers interact with your site
 */
export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: [
                    "/studio/",      // Sanity Studio admin panel
                    "/api/",         // API routes
                    "/_next/",       // Next.js internal routes
                    "/private/",     // Any private routes
                ],
            },
            // Specific rules for Googlebot
            {
                userAgent: "Googlebot",
                allow: "/",
                disallow: ["/studio/", "/api/"],
            },
            // Block bad bots
            {
                userAgent: ["GPTBot", "ChatGPT-User", "CCBot", "Google-Extended"],
                disallow: ["/"],
            },
        ],
        sitemap: `${siteConfig.url}/sitemap.xml`,
        host: siteConfig.url,
    };
}
