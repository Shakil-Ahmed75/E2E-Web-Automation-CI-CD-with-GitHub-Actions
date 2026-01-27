import { test, expect } from '@playwright/test';

// Base URL
const baseURL = 'https://opensource-demo.orangehrmlive.com';

// Login credentials
const username = 'Admin';
const password = 'admin123';

test('OrangeHRM Login Test', async ({ page }) => {
  // Navigate to login page
  await page.goto(`${baseURL}/web/index.php/auth/login`);

  // Fill in username
  await page.fill('input[name="username"]', username);

  // Fill in password
  await page.fill('input[name="password"]', password);

  // Click login button
  await page.click('button[type="submit"]');

  // Wait for dashboard to load and verify URL contains dashboard
  await expect(page).toHaveURL(/dashboard/);

  // Optional: Verify some element on dashboard is visible
  await expect(page.locator('h6:has-text("Dashboard")')).toBeVisible();
});
