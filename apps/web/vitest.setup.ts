import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const testDir = mkdtempSync(join(tmpdir(), "creditz-vitest-"));

process.env.DATABASE_URL = `file:${join(testDir, "creditz.sqlite")}`;
process.env.NEXT_PUBLIC_DEMO_MODE = "true";
process.env.NEXT_PUBLIC_WORLD_ACTION_REGISTER = "creditz-register-v1";
process.env.NEXT_PUBLIC_WORLD_ACTION_SPEND = "creditz-spend-v1";
