import { Page, Locator } from "@playwright/test";

export class SwagLabsCheckoutLocators {
  readonly pageTitle: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly zipCodeInput: Locator;
  readonly continueButton: Locator;
  readonly cancelButton: Locator;
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.getByText("Checkout: Your Information");
    this.firstNameInput = page.getByPlaceholder("First Name");
    this.lastNameInput = page.getByPlaceholder("Last Name");
    this.zipCodeInput = page.getByPlaceholder("Zip/Postal Code");
    this.continueButton = page.getByRole("button", { name: "Continue" });
    this.cancelButton = page.getByRole("button", { name: "Cancel" });
  }
}