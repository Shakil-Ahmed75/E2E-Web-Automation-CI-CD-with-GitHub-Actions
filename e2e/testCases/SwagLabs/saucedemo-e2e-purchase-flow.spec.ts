import { test, Page, expect } from "@playwright/test";
import { SwagLabsPage } from "../../../pages/swagLabsPage";
import { testData } from "../../../fixtures/testData";

test.describe("@saucedemo End-to-End Purchase Flow", () => {
  let swagLabsPage: SwagLabsPage;
  let page: Page;

  test.beforeEach(async ({ page: testPage }) => {
    page = testPage;
    swagLabsPage = new SwagLabsPage(page);
  });

  test("Complete purchase flow from login to order confirmation", async () => {
    // 1. Login with valid credentials
    await test.step("Login with valid credentials", async () => {
      await swagLabsPage.loginToSwagLabs();
      
      // Verify successful login and navigation to inventory page
      await expect(page).toHaveURL(/inventory.html/);
      await expect(page.locator(".inventory_list")).toBeVisible();
      await expect(page.getByText("Products")).toBeVisible();
    });

    // 2. Add a product to the cart
    await test.step("Add product to cart", async () => {
      const productName = testData.products.sauceLabsBackpack;
      await swagLabsPage.addItemToCart(productName);
      
      // Verify item was added to cart
      const cartBadge = page.locator('[data-test="shopping-cart-badge"]');
      await expect(cartBadge).toBeVisible();
      await expect(cartBadge).toHaveText("1");
    });

    // 3. Navigate to the Cart page
    await test.step("Navigate to cart page", async () => {
      await swagLabsPage.navigateToCart();
      
      // Verify cart page is visible and contains the added item
      await expect(page.getByText("Your Cart")).toBeVisible();
      await expect(page.locator(`[data-test="inventory-item-name"]`).filter({ hasText: testData.products.sauceLabsBackpack })).toBeVisible();
    });

    // 4. Proceed to Checkout
    await test.step("Proceed to checkout", async () => {
      await swagLabsPage.proceedToCheckout();
      
      // Verify checkout information page is visible
      await expect(page.getByText("Checkout: Your Information")).toBeVisible();
    });

    // 5. Fill required fields
    await test.step("Fill customer information", async () => {
      await swagLabsPage.fillCustomerInformation(
        testData.customerInfo.firstName,
        testData.customerInfo.lastName,
        testData.customerInfo.zipCode
      );
      
      // Verify all fields are filled
      await expect(page.getByPlaceholder("First Name")).toHaveValue(testData.customerInfo.firstName);
      await expect(page.getByPlaceholder("Last Name")).toHaveValue(testData.customerInfo.lastName);
      await expect(page.getByPlaceholder("Zip/Postal Code")).toHaveValue(testData.customerInfo.zipCode);
    });

    // 6. Click Continue
    await test.step("Continue to overview", async () => {
      await swagLabsPage.continueToOverview();
      
      // Verify checkout overview page is visible
      await expect(page.getByText("Checkout: Overview")).toBeVisible();
    });

    // 7. Finish the checkout
    await test.step("Complete checkout", async () => {
      await swagLabsPage.finishCheckout();
      
      // Verify order completion page is visible
      await expect(page.getByText("Checkout: Complete!")).toBeVisible();
    });

    // 8. Validate the successful order confirmation message
    await test.step("Validate order confirmation", async () => {
      const completeMessage = await swagLabsPage.getCompleteOrderMessage();
      expect(completeMessage).toBe(testData.expectedMessages.completeOrder);
      
      // Additional verification of completion elements
      await expect(page.getByText("Thank you for your order!")).toBeVisible();
      await expect(page.getByText("Your order has been dispatched, and will arrive just as fast as the pony can get there!")).toBeVisible();
      await expect(page.getByRole("button", { name: "Back Home" })).toBeVisible();
    });

    // 9. Navigate back to home (optional cleanup)
    await test.step("Navigate back to home", async () => {
      await swagLabsPage.navigateToHome();
      
      // Verify back to inventory page
      await expect(page).toHaveURL(/inventory.html/);
      await expect(page.getByText("Products")).toBeVisible();
    });
  });

  test("Verify cart functionality with multiple products", async () => {
    // Login and add multiple items
    await swagLabsPage.loginToSwagLabs();
    
    await swagLabsPage.addItemToCart(testData.products.sauceLabsBackpack);
    await swagLabsPage.addItemToCart(testData.products.sauceLabsBikeLight);
    
    // Verify cart badge shows 2 items
    const cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    await expect(cartBadge).toHaveText("2");
    
    // Navigate to cart and verify both items
    await swagLabsPage.navigateToCart();
    await expect(page.locator(`[data-test="inventory-item-name"]`).filter({ hasText: testData.products.sauceLabsBackpack })).toBeVisible();
    await expect(page.locator(`[data-test="inventory-item-name"]`).filter({ hasText: testData.products.sauceLabsBikeLight })).toBeVisible();
  });

  test("Verify error handling for invalid login", async () => {
    // Navigate to login page
    await swagLabsPage.navigateToLogin();
    
    // Attempt login with invalid credentials
    await swagLabsPage.loginActions.login(
      testData.credentials.invalid.username,
      testData.credentials.invalid.password
    );
    
    // Verify error message is displayed
    await expect(page.locator("[data-test='error']")).toBeVisible();
    await expect(page.locator("[data-test='error']")).toContainText(testData.expectedMessages.loginError);
  });
});