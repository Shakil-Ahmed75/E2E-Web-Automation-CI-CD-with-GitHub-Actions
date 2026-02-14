import { Page } from "@playwright/test";
import { SwagLabsCartLocators } from "../../locators/swagLabs/swagLabsCartLocators";

export class SwagLabsCartActions extends SwagLabsCartLocators {
  constructor(page: Page) {
    super(page);
  }

  async proceedToCheckout(): Promise<void> {
    await this.checkoutButton.click();
  }

  async continueShopping(): Promise<void> {
    await this.continueShoppingButton.click();
  }

  async removeItem(productName: string): Promise<void> {
    const removeButton = this.getRemoveButton(productName);
    await removeButton.click();
  }

  async isCartPageVisible(): Promise<boolean> {
    return await this.pageTitle.isVisible();
  }

  async getCartItemNames(): Promise<string[]> {
    const items = await this.cartItems.allTextContents();
    return items;
  }

  async waitForCartPage(): Promise<void> {
    await this.pageTitle.waitFor({ state: "visible" });
  }
}