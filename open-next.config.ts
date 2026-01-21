import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

const baseConfig = defineCloudflareConfig({
    // Use static assets for build-time cached routes (SSG)
    incrementalCache: staticAssetsIncrementalCache,
    // Enable cache interception for better cold start performance
    enableCacheInterception: true,
});

// We manually extend the config to add code splitting and minification
// This helps stay under the 3MB Cloudflare Workers Free limit
export default {
    ...baseConfig,
    default: {
        ...baseConfig.default,
        minify: true,
    },
    functions: {
        studio: {
            // Move the heavy Sanity Studio to its own worker
            routes: ["app/studio/[[...tool]]/page"],
            patterns: ["studio/*"],
            minify: true,
        },
    },
};
