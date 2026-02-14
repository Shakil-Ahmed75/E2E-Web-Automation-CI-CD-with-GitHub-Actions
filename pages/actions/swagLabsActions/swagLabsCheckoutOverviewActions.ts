import { Page } from "@playwright/test";
import { SwagLabsCheckoutOverviewLocators } from "../../locators/swagLabs/swagLabsCheckoutOverviewLocators";

export class SwagLabsCheckoutOverviewActions extends SwagLabsCheckoutOverviewLocators {
  constructor(page: Page) {
    super(page);
  }

  async finishCheckout(): Promise<void> {
    await this.finishButton.click();
  }

  async cancelCheckout(): Promise<void> {
    await this.cancelButton.click();
  }

  async isOverviewPageVisible(): Promise<boolean> {
    return await this.pageTitle.isVisible();
  }

  async getPaymentInfo(): Promise<string> {
    return await this.paymentInfo.textContent() || "";
  }

  async getShippingInfo(): Promise<string> {
    return await this.shippingInfo.textContent() || "";
  }

  async getTotalPrice(): Promise<string> {
    return await this.totalPrice.textContent() || "";
  }

  async waitForOverviewPage(): Promise<void> {
    await this.pageTitle.waitFor({ state: "visible" });
  }
}