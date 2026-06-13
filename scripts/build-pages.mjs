import { existsSync, renameSync, rmSync } from "node:fs";
import { resolve } from "node:path";
import { spawnSync } from "node:child_process";

const apiDir = resolve("apps/web/src/app/api");
const disabledApiDir = resolve("apps/web/.api-disabled-for-pages");

if (existsSync(disabledApiDir)) {
  throw new Error(`${disabledApiDir} already exists. Restore or remove it before building Pages.`);
}

let moved = false;

try {
  rmSync(resolve("apps/web/.next"), { recursive: true, force: true });
  rmSync(resolve("apps/web/out"), { recursive: true, force: true });

  if (existsSync(apiDir)) {
    renameSync(apiDir, disabledApiDir);
    moved = true;
  }

  const result = spawnSync("pnpm", ["--filter", "@creditz/web", "build"], {
    stdio: "inherit",
    env: {
      ...process.env,
      GITHUB_PAGES: "true"
    }
  });

  if (result.status !== 0) {
    process.exitCode = result.status ?? 1;
  }
} finally {
  if (moved) {
    renameSync(disabledApiDir, apiDir);
  }
}
