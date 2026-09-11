// Kept in sync with next.config.ts's GitHub Pages branch. next/link and
// CSS/JS asset URLs get basePath applied automatically by Next; raw
// string paths we build ourselves (media URLs from the filesystem) do
// not, so they need this prefix applied explicitly.
export const basePath = process.env.GITHUB_PAGES === "true" ? "/victor-le-site" : "";

export function withBasePath(pathname: string): string {
  return `${basePath}${pathname}`;
}
