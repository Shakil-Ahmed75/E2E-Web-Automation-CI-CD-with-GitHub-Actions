import { Page, Locator } from "@playwright/test";

export class SwagLabsInventoryLocators {
  readonly pageTitle: Locator;
  readonly inventoryItems: Locator;
  readonly addToCartButtons: Locator;
  readonly cartBadge: Locator;
  readonly shoppingCartLink: Locator;
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.getByText("Products");
    this.inventoryItems = page.locator('[data-test="inventory-item"]');
    this.addToCartButtons = page.locator('[data-test*="add-to-cart"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
  }

  getAddToCartButton(productName: string): Locator {
    return this.page.locator(`[data-test="add-to-cart-${productName.toLowerCase().replace(/\s+/g, '-')}"]`);
  }

  getInventoryItemByName(productName: string): Locator {
    return this.page.locator(`[data-test="inventory-item-name"]`).filter({ hasText: productName });
  }
}