import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Image optimization configuration
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        port: "",
        pathname: "/gh/Ethereumistic/**",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
        port: "",
        pathname: "**",
      },
      // Sanity CDN for CMS images
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "**",
      },
    ],
    // Enable image optimization
    formats: ["image/avif", "image/webp"],
  },

  // Compression for better performance (affects SEO)
  compress: true,

  // Strict mode for better debugging
  reactStrictMode: true,

  // Power by header removal for security
  poweredByHeader: false,

  // Security and SEO-related headers
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Security headers
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Cache control for static assets
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
      // Cache static assets aggressively
      {
        source: "/(.*)\\.(ico|png|jpg|jpeg|gif|webp|svg|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Redirects if needed (example for www to non-www)
  async redirects() {
    return [
      {
        // Redirect Studio to Vercel deployment
        source: "/studio/:path*",
        destination: "https://ultrabuild.vercel.app/studio/:path*", // REPLACE with your actual Vercel URL
        permanent: false,
      },
    ];
  },
}

export default nextConfig

// Enable calling `getCloudflareContext()` in `next dev`.
// See https://opennext.js.org/cloudflare/bindings#local-access-to-bindings
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();