import type { NextConfig } from "next";

// Set only by the GitHub Pages deploy workflow (.github/workflows/pages.yml).
// Leaving default builds (Vercel, local) completely unaffected — this repo's
// primary/eventual hosting decision is still open, this is a parallel
// preview path while that gets sorted out.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "victor-le-site";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Media is served from /public/media and from a small set of
    // documented external sources (see content/site.config.ts).
    remotePatterns: [],
    // GitHub Pages has no image-optimization server; serve originals as-is.
    ...(isGithubPages ? { unoptimized: true } : {}),
  },
  ...(isGithubPages
    ? {
        output: "export",
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
        // Emit about/index.html instead of about.html so extensionless
        // /about/ requests resolve without relying on server-side
        // extension-guessing.
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
