import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e/testCases",
  testMatch: ["**/*.spec.ts"],
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  timeout: 2 * 60 * 1000,
  reporter: [
    ["list"],
    ["html", { outputFolder: "reports/html", open: "never" }],
    ["allure-playwright"],
  ],

  use: {
    trace: "on-first-retry",
    video: "on",
    ignoreHTTPSErrors: true,
  },

  projects: [
    {
      name: "SwagLabs",
      use: { ...devices["Desktop Chrome"] },
      testMatch: "SwagLabs/*.spec.ts",
    },
  ],
});
