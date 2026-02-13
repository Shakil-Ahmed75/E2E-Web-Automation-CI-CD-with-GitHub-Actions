import { Locator, Page } from "@playwright/test";

export class OrangeHrmLoginLocators {
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;

  // Messages
  readonly requiredFieldErrors: Locator;
  readonly invalidCredentialsAlert: Locator;

  constructor(page: Page) {
    // Inputs (these placeholders are stable on the OrangeHRM login page)
    this.username = page.getByPlaceholder("Username");
    this.password = page.getByPlaceholder("Password");
    this.loginButton = page.getByRole("button", { name: /login/i });

    // Validation / error messages
    this.requiredFieldErrors = page.locator("span.oxd-input-field-error-message");
    this.invalidCredentialsAlert = page.locator(".oxd-alert-content-text");
  }
}

