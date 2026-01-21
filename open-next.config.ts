import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

const baseConfig = defineCloudflareConfig({
    incrementalCache: staticAssetsIncrementalCache,
    enableCacheInterception: true,
});

// Remove "minify: true" as it crashes on Cloudflare with pnpm symlinks.
// Next.js already handles minification.
export default {
    ...baseConfig,
    functions: {
        studio: {
            // Move the heavy Sanity Studio to its own worker function.
            // This is the key to staying under the 3MB limit for the main site.
            routes: ["app/studio/[[...tool]]/page"],
            patterns: ["studio/*"],
        },
    },
};
