const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";

export function appHref(path: string) {
  if (!path.startsWith("/")) return path;
  if (!basePath) return path;
  if (path === "/") return basePath || "/";
  return `${basePath}${path}`;
}
