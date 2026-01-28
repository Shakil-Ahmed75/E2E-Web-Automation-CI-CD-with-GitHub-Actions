/**
 * OrangeHRM Application Configuration
 * Contains base URL and common application paths
 */
export const swagLabsConfig = {
  baseUrl: process.env.BASE_URL || "https://www.saucedemo.com",
  username: process.env.SWAGLABS_USERNAME || "standard_user",
  password: process.env.SWAGLABS_PASSWORD || "secret_sauce",

  paths: {
    login: "/",
  },
};
