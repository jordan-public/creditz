import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/creditz";

const nextConfig: NextConfig = {
  ...(isGithubPages
    ? {
        output: "export" as const,
        basePath: repoBasePath,
        assetPrefix: repoBasePath,
        images: {
          unoptimized: true
        }
      }
    : {})
};

export default nextConfig;
