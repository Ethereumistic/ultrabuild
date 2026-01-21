import {
    generateOrganizationSchema,
    generateLocalBusinessSchema,
    generateWebsiteSchema,
} from "@/lib/seo";

/**
 * JSON-LD Structured Data Component
 * Injects structured data into the page for rich search results
 */
export function JsonLd() {
    const organizationSchema = generateOrganizationSchema();
    const localBusinessSchema = generateLocalBusinessSchema();
    const websiteSchema = generateWebsiteSchema();

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema),
                }}
            />
        </>
    );
}

/**
 * Page-specific JSON-LD component
 * Use this to add additional structured data to specific pages
 */
export function PageJsonLd({ schema }: { schema: object }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema),
            }}
        />
    );
}
