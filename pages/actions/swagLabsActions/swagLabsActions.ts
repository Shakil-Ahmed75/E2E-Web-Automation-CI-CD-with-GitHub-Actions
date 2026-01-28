import { Page } from "@playwright/test";
import { SwagLabsLocators } from "../../locators/swagLabs/swagLabsLocators";

export class SwagLabsActions extends SwagLabsLocators {
  constructor(page: Page) {
    super(page);
  }

  async loginPage(username: string, password: string): Promise<void> {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }
}
