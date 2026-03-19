import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly userMenu: Locator;
  readonly logoutMenuItem: Locator;
  readonly dashboardHeading: Locator;

  constructor(page: Page, user = 'Admin', password = 'admin123') {
    this.page = page;

    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.getByRole('button', { name: 'Login' });

    this.userMenu = page.locator('.oxd-userdropdown-tab');
    this.logoutMenuItem = page.getByRole('menuitem', { name: 'Logout' });
    this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' });
  }

  async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  async login(user: string, password: string) {
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async loginAsAdmin() {
    await this.login('Admin', 'admin123');
  }

  async logout() {
    await this.userMenu.click();
    await this.logoutMenuItem.click();
  }

 
}