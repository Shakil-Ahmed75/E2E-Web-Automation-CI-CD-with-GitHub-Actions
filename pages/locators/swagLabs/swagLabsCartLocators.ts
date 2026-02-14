import { Page, Locator } from "@playwright/test";

export class SwagLabsCartLocators {
  readonly pageTitle: Locator;
  readonly cartItems: Locator;
  readonly checkoutButton: Locator;
  readonly continueShoppingButton: Locator;
  readonly removeButtons: Locator;
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.getByText("Your Cart");
    this.cartItems = page.locator('[data-test="cart-item"]');
    this.checkoutButton = page.getByRole("button", { name: "Checkout" });
    this.continueShoppingButton = page.getByRole("button", { name: "Continue Shopping" });
    this.removeButtons = page.locator('[data-test*="remove"]');
  }

  getCartItemByName(productName: string): Locator {
    return this.page.locator(`[data-test="inventory-item-name"]`).filter({ hasText: productName });
  }

  getRemoveButton(productName: string): Locator {
    return this.page.locator(`[data-test="remove-${productName.toLowerCase().replace(/\s+/g, '-')}"]`);
  }
}