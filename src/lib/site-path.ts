const siteBasePath = process.env.NEXT_PUBLIC_SITE_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  if (!siteBasePath || path.startsWith("http") || path.startsWith("data:") || path.startsWith("#")) {
    return path;
  }

  return `${siteBasePath}${path.startsWith("/") ? path : `/${path}`}`;
}