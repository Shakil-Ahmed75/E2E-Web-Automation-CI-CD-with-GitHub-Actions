import { test, expect } from "@playwright/test";
import { WebSiteName } from "../../../fixtures/tags";
import { OrangeHrmLoginPage } from "../../../pages/orangeHrmPage";

test.describe("OrangeHRM Login - Negative Test Cases", () => {
  test(
    "TC001 should show error for invalid credentials",
    { tag: [WebSiteName.OrangeHRM] },
    async ({ page }) => {
      const loginPage = new OrangeHrmLoginPage(page);

      await test.step("Navigate to login and attempt with invalid credentials.", async () => {
        await loginPage.gotoLogin();
        await loginPage.ui.submitLogin("invalid_user", "invalid_password");
      });

      await expect(
        loginPage.ui.invalidCredentialsAlert,
        "Invalid credentials alert should be shown.",
      ).toContainText(/invalid credentials/i);
    },
  );

  test(
    "TC002 should show required validation when username and password are empty",
    { tag: [WebSiteName.OrangeHRM] },
    async ({ page }) => {
      const loginPage = new OrangeHrmLoginPage(page);

      await test.step("Navigate to login and submit empty form.", async () => {
        await loginPage.gotoLogin();
        await loginPage.ui.submitLogin(undefined, undefined);
      });

      await expect(
        loginPage.ui.requiredFieldErrors,
        "Required messages should be shown for empty fields.",
      ).toHaveCount(2);
      await expect(loginPage.ui.requiredFieldErrors.first()).toHaveText(/required/i);
    },
  );

  test(
    "TC003 should show required validation when password is empty",
    { tag: [WebSiteName.OrangeHRM] },
    async ({ page }) => {
      const loginPage = new OrangeHrmLoginPage(page);

      await test.step("Navigate to login and submit with username only.", async () => {
        await loginPage.gotoLogin();
        await loginPage.ui.submitLogin("Admin", "");
      });

      await expect(
        loginPage.ui.requiredFieldErrors,
        "Required message should be shown for missing password.",
      ).toHaveCount(1);
      await expect(loginPage.ui.requiredFieldErrors.first()).toHaveText(/required/i);
    },
  );

  test(
    "TC004 should show required validation when username is empty",
    { tag: [WebSiteName.OrangeHRM] },
    async ({ page }) => {
      const loginPage = new OrangeHrmLoginPage(page);

      await test.step("Navigate to login and submit with password only.", async () => {
        await loginPage.gotoLogin();
        await loginPage.ui.submitLogin("", "admin123");
      });

      await expect(
        loginPage.ui.requiredFieldErrors,
        "Required message should be shown for missing username.",
      ).toHaveCount(1);
      await expect(loginPage.ui.requiredFieldErrors.first()).toHaveText(/required/i);
    },
  );
});

