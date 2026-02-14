import { Page } from "@playwright/test";
import { SwagLabsLoginLocators } from "../../locators/swagLabs/swagLabsLoginLocators";

export class SwagLabsLoginActions extends SwagLabsLoginLocators {
  constructor(page: Page) {
    super(page);
  }

  async login(username: string, password: string): Promise<void> {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  async getErrorMessage(): Promise<string> {
    const text = await this.errorMessage.textContent();
    return text || "";
  }

  async isErrorMessageVisible(): Promise<boolean> {
    return await this.errorMessage.isVisible();
  }
}