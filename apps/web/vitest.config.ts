import { defineConfig } from "vitest/config";
import { resolve } from "node:path";

export default defineConfig({
  test: {
    environment: "node",
    globals: true,
    include: ["src/**/*.test.ts"],
    pool: "forks",
    setupFiles: ["./vitest.setup.ts"]
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  ssr: {
    external: ["node:sqlite", "sqlite"]
  }
});
