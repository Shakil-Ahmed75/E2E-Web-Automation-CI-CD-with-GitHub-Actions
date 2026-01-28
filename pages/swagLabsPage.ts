import { Page } from "@playwright/test";
import { SwagLabsActions } from "./actions/swagLabsActions/swagLabsActions";
import { SwagLabsBasePage } from "./locators/swagLabs/swagLabsBasePage";
import { swagLabsConfig } from "../config/swagLabs";

export class SwagLabsLoginPage extends SwagLabsBasePage {
  private readonly swagLabsActions: SwagLabsActions;

  constructor(page: Page) {
    super(page);
    this.swagLabsActions = new SwagLabsActions(page);
  }

  async loginToSwagLabs(): Promise<void> {
    this.navigateToLogin();
    await this.swagLabsActions.loginPage(
      swagLabsConfig.username,
      swagLabsConfig.password,
    );
  }
}
