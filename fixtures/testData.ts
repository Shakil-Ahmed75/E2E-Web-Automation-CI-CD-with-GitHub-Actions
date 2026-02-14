/**
 * Test Data for SauceDemo E2E Tests
 */
export const testData = {
  credentials: {
    valid: {
      username: "standard_user",
      password: "secret_sauce"
    },
    invalid: {
      username: "invalid_user",
      password: "invalid_password"
    }
  },
  
  customerInfo: {
    firstName: "John",
    lastName: "Doe",
    zipCode: "12345"
  },

  products: {
    sauceLabsBackpack: "Sauce Labs Backpack",
    sauceLabsBikeLight: "Sauce Labs Bike Light",
    sauceLabsBoltTShirt: "Sauce Labs Bolt T-Shirt",
    sauceLabsFleeceJacket: "Sauce Labs Fleece Jacket",
    testAllThingsTShirt: "Test.allTheThings() T-Shirt (Red)",
    sauceLabsOnesie: "Sauce Labs Onesie"
  },

  expectedMessages: {
    loginError: "Epic sadface: Username and password do not match any user in this service",
    lockedOutError: "Epic sadface: Sorry, this user has been locked out.",
    completeOrder: "Thank you for your order!"
  }
};