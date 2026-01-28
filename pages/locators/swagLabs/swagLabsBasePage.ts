import { Page } from "@playwright/test";
import { swagLabsConfig } from "../../../config/swagLabs";

export class SwagLabsBasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToLogin(): Promise<void> {
    await this.page.goto(
      `${swagLabsConfig.baseUrl}${swagLabsConfig.paths.login}`,
    );
  }
}
