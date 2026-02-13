import { Page } from "@playwright/test";
import { OrangeHrmLoginLocators } from "../../locators/orangeHrm/orangeHrmLoginLocators";

export class OrangeHrmLoginActions extends OrangeHrmLoginLocators {
  constructor(page: Page) {
    super(page);
  }

  async submitLogin(username?: string, password?: string): Promise<void> {
    if (username !== undefined) {
      await this.username.fill(username);
    }
    if (password !== undefined) {
      await this.password.fill(password);
    }
    await this.loginButton.click();
  }
}

