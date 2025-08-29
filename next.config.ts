import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // ✅ This will allow production builds to complete even with TS errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // ✅ Disable ESLint checks during build
    ignoreDuringBuilds: true,
  },
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
