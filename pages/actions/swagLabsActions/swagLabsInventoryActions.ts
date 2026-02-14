import { Page } from "@playwright/test";
import { SwagLabsInventoryLocators } from "../../locators/swagLabs/swagLabsInventoryLocators";

export class SwagLabsInventoryActions extends SwagLabsInventoryLocators {
  constructor(page: Page) {
    super(page);
  }

  async addItemToCart(productName: string): Promise<void> {
    const addToCartButton = this.getAddToCartButton(productName);
    await addToCartButton.click();
  }

  async navigateToCart(): Promise<void> {
    await this.shoppingCartLink.click();
  }

  async isInventoryPageVisible(): Promise<boolean> {
    return await this.pageTitle.isVisible();
  }

  async getCartItemCount(): Promise<number> {
    const badgeText = await this.cartBadge.textContent();
    return badgeText ? parseInt(badgeText, 10) : 0;
  }

  async waitForInventoryPage(): Promise<void> {
    await this.pageTitle.waitFor({ state: "visible" });
  }
}