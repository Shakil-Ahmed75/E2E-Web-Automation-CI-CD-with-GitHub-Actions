import { Page } from "@playwright/test";
import { SwagLabsLoginActions } from "./actions/swagLabsActions/swagLabsLoginActions";
import { SwagLabsInventoryActions } from "./actions/swagLabsActions/swagLabsInventoryActions";
import { SwagLabsCartActions } from "./actions/swagLabsActions/swagLabsCartActions";
import { SwagLabsCheckoutActions } from "./actions/swagLabsActions/swagLabsCheckoutActions";
import { SwagLabsCheckoutOverviewActions } from "./actions/swagLabsActions/swagLabsCheckoutOverviewActions";
import { SwagLabsCompleteActions } from "./actions/swagLabsActions/swagLabsCompleteActions";
import { swagLabsConfig } from "../config/swagLabs";

export class SwagLabsPage {
  private readonly page: Page;
  readonly loginActions: SwagLabsLoginActions;
  readonly inventoryActions: SwagLabsInventoryActions;
  readonly cartActions: SwagLabsCartActions;
  readonly checkoutActions: SwagLabsCheckoutActions;
  readonly checkoutOverviewActions: SwagLabsCheckoutOverviewActions;
  readonly completeActions: SwagLabsCompleteActions;

  constructor(page: Page) {
    this.page = page;
    this.loginActions = new SwagLabsLoginActions(page);
    this.inventoryActions = new SwagLabsInventoryActions(page);
    this.cartActions = new SwagLabsCartActions(page);
    this.checkoutActions = new SwagLabsCheckoutActions(page);
    this.checkoutOverviewActions = new SwagLabsCheckoutOverviewActions(page);
    this.completeActions = new SwagLabsCompleteActions(page);
  }

  async navigateToLogin(): Promise<void> {
    await this.page.goto(swagLabsConfig.baseUrl);
  }

  async loginToSwagLabs(): Promise<void> {
    await this.navigateToLogin();
    await this.loginActions.login(swagLabsConfig.username, swagLabsConfig.password);
    await this.inventoryActions.waitForInventoryPage();
  }

  async addItemToCart(productName: string): Promise<void> {
    await this.inventoryActions.addItemToCart(productName);
  }

  async navigateToCart(): Promise<void> {
    await this.inventoryActions.navigateToCart();
    await this.cartActions.waitForCartPage();
  }

  async proceedToCheckout(): Promise<void> {
    await this.cartActions.proceedToCheckout();
    await this.checkoutActions.waitForCheckoutPage();
  }

  async fillCustomerInformation(firstName: string, lastName: string, zipCode: string): Promise<void> {
    await this.checkoutActions.fillCustomerInformation(firstName, lastName, zipCode);
  }

  async continueToOverview(): Promise<void> {
    await this.checkoutActions.continueToOverview();
    await this.checkoutOverviewActions.waitForOverviewPage();
  }

  async finishCheckout(): Promise<void> {
    await this.checkoutOverviewActions.finishCheckout();
    await this.completeActions.waitForCompletePage();
  }

  async getCompleteOrderMessage(): Promise<string> {
    return await this.completeActions.getCompleteHeader();
  }

  async navigateToHome(): Promise<void> {
    await this.completeActions.navigateToHome();
    await this.inventoryActions.waitForInventoryPage();
  }
}