import { Page, Locator } from '@playwright/test';
import { orangeHrmConfig } from '../config/OrangeHRM';


export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
  }

  async navigateToLoginPage(): Promise<void> {
    await this.page.goto(
      `${orangeHrmConfig.baseUrl}/${orangeHrmConfig.paths.login}`
    );
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
