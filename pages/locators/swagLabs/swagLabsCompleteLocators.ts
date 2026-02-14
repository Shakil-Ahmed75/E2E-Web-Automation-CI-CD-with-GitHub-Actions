import { Page, Locator } from "@playwright/test";

export class SwagLabsCompleteLocators {
  readonly pageTitle: Locator;
  readonly completeHeader: Locator;
  readonly completeText: Locator;
  readonly backHomeButton: Locator;
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.getByText("Checkout: Complete!");
    this.completeHeader = page.getByText("Thank you for your order!");
    this.completeText = page.getByText("Your order has been dispatched, and will arrive just as fast as the pony can get there!");
    this.backHomeButton = page.getByRole("button", { name: "Back Home" });
  }
}