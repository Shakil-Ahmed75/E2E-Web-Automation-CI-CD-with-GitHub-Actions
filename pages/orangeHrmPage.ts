import { Page } from "@playwright/test";
import { OrangeHrmLoginActions } from "./actions/orangeHrmActions/orangeHrmLoginActions";
import { OrangeHrmBasePage } from "./locators/orangeHrm/orangeHrmBasePage";
import { orangeHrmConfig } from "../config/orangeHrm";

export class OrangeHrmLoginPage extends OrangeHrmBasePage {
  private readonly orangeHrmActions: OrangeHrmLoginActions;

  constructor(page: Page) {
    super(page);
    this.orangeHrmActions = new OrangeHrmLoginActions(page);
  }

  async gotoLogin(): Promise<void> {
    await this.navigateToLogin();
  }

  async loginWith(username: string, password: string): Promise<void> {
    await this.gotoLogin();
    await this.orangeHrmActions.submitLogin(username, password);
  }

  async loginWithValidCredentials(): Promise<void> {
    await this.loginWith(orangeHrmConfig.username, orangeHrmConfig.password);
  }

  get ui(): OrangeHrmLoginActions {
    return this.orangeHrmActions;
  }
}

