import { Page, Locator } from "@playwright/test";

export class SwagLabsCheckoutOverviewLocators {
  readonly pageTitle: Locator;
  readonly finishButton: Locator;
  readonly cancelButton: Locator;
  readonly cartItems: Locator;
  readonly paymentInfo: Locator;
  readonly shippingInfo: Locator;
  readonly totalPrice: Locator;
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.getByText("Checkout: Overview");
    this.finishButton = page.getByRole("button", { name: "Finish" });
    this.cancelButton = page.getByRole("button", { name: "Cancel" });
    this.cartItems = page.locator('[data-test="inventory-item"]');
    this.paymentInfo = page.locator('[data-test="payment-info-value"]');
    this.shippingInfo = page.locator('[data-test="shipping-info-value"]');
    this.totalPrice = page.locator('[data-test="total-label"]');
  }
}