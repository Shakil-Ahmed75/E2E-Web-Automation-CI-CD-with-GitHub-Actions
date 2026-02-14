import { Page } from "@playwright/test";
import { SwagLabsCompleteLocators } from "../../locators/swagLabs/swagLabsCompleteLocators";

export class SwagLabsCompleteActions extends SwagLabsCompleteLocators {
  constructor(page: Page) {
    super(page);
  }

  async navigateToHome(): Promise<void> {
    await this.backHomeButton.click();
  }

  async isCompletePageVisible(): Promise<boolean> {
    return await this.pageTitle.isVisible();
  }

  async getCompleteHeader(): Promise<string> {
    return await this.completeHeader.textContent() || "";
  }

  async getCompleteText(): Promise<string> {
    return await this.completeText.textContent() || "";
  }

  async waitForCompletePage(): Promise<void> {
    await this.pageTitle.waitFor({ state: "visible" });
  }
}