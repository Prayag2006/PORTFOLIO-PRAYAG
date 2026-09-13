import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

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
