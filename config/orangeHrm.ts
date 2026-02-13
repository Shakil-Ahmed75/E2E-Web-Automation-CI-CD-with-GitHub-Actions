/**
 * OrangeHRM Application Configuration
 * Contains base URL and common application paths
 */
export const orangeHrmConfig = {
  baseUrl: process.env.ORANGEHRM_BASE_URL || "https://opensource-demo.orangehrmlive.com",
  username: process.env.ORANGEHRM_USERNAME || "Admin",
  password: process.env.ORANGEHRM_PASSWORD || "admin123",

  paths: {
    login: "/web/index.php/auth/login",
  },
};

