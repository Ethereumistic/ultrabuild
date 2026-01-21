import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

export default defineCloudflareConfig({
    // Use static assets for build-time cached routes (SSG)
    // This is read-only and doesn't require R2 or D1
    // Note: Time-based revalidation (ISR) is not supported with this cache
    incrementalCache: staticAssetsIncrementalCache,
    // Enable cache interception for better cold start performance
    enableCacheInterception: true,
});
