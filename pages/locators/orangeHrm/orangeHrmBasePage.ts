import { Page } from "@playwright/test";
import { orangeHrmConfig } from "../../../config/orangeHrm";

export class OrangeHrmBasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToLogin(): Promise<void> {
    await this.page.goto(`${orangeHrmConfig.baseUrl}${orangeHrmConfig.paths.login}`);
  }
}

