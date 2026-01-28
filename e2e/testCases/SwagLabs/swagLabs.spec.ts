import { test, Page, expect } from "@playwright/test";
import { WebSiteName } from "../../../fixtures/tags";
import { SwagLabsLoginPage } from "../../../pages/swagLabsPage";

let page: Page;

test.describe.configure({ mode: "serial" });

test.describe("SwagLabs Test Cases.", () => {
  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    const loginPage = new SwagLabsLoginPage(page);

    await test.step("Log in to SwagLabs using valid credentials.", async () => {
      await loginPage.loginToSwagLabs();
    });
  });

  test.afterAll(async () => {
    await page.close();
  });

  test(
    "TC001 Verify user can log in with valid credentials and see inventory page",
    {
      tag: [WebSiteName.SwagLabs],
    },
    async () => {
      await expect(
        page,
        `After login, the user should be redirected to the inventory page.`,
      ).toHaveURL(/inventory.html/);

      await expect(
        page.locator(".inventory_list"),
        `Inventory list should be visible after successful login.`,
      ).toBeVisible();
    },
  );
});
