import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

export default defineCloudflareConfig({
    // Use static assets for build-time cached routes (SSG)
    incrementalCache: staticAssetsIncrementalCache,
    // Enable cache interception for better cold start performance
    enableCacheInterception: true,
});
