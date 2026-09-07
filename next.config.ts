import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Media is served from /public/media and from a small set of
    // documented external sources (see content/site.config.ts).
    remotePatterns: [],
  },
};

export default nextConfig;
