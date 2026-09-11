import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://victorleparis.github.io/victor-le-site";
const ROUTES = ["", "/about", "/participate", "/mentions-legales"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({ url: `${SITE_URL}${route}` }));
}
