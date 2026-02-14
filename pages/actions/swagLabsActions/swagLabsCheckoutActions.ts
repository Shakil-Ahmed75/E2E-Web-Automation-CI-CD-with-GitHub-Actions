import { Page } from "@playwright/test";
import { SwagLabsCheckoutLocators } from "../../locators/swagLabs/swagLabsCheckoutLocators";

export class SwagLabsCheckoutActions extends SwagLabsCheckoutLocators {
  constructor(page: Page) {
    super(page);
  }

  async fillCustomerInformation(firstName: string, lastName: string, zipCode: string): Promise<void> {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.zipCodeInput.fill(zipCode);
  }

  async continueToOverview(): Promise<void> {
    await this.continueButton.click();
  }

  async cancelCheckout(): Promise<void> {
    await this.cancelButton.click();
  }

  async isCheckoutPageVisible(): Promise<boolean> {
    return await this.pageTitle.isVisible();
  }

  async waitForCheckoutPage(): Promise<void> {
    await this.pageTitle.waitFor({ state: "visible" });
  }
}