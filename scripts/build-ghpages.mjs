import { spawnSync } from "node:child_process";

const result = spawnSync("npm run build", {
  shell: true,
  stdio: "inherit",
  env: {
    ...process.env,
    NEXT_PUBLIC_SITE_BASE_PATH: "/aligatour_codex",
  },
});

process.exit(result.status ?? 1);