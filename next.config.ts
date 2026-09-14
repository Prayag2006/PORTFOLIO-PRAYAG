import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Hides Next's floating dev-tools badge in the corner. It is a development
  // affordance only and never ships in a production build — this just keeps it
  // out of the way while working on the layout.
  devIndicators: false,

  // three.js ships untranspiled ESM; this prevents build failures in the
  // App Router when three/examples modules are pulled in by drei.
  transpilePackages: ["three"],

  images: {
    // NOTE: required only for a static export (`output: 'export'`, e.g. GitHub
    // Pages). If deploying to Vercel/Node, delete this line to get automatic
    // AVIF/WebP + responsive sizing on every project thumbnail.
    unoptimized: true,
  },
};

export default nextConfig;
