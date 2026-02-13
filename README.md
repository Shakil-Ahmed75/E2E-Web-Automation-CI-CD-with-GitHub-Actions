# E2E Web Automation – CI/CD with GitHub Actions

[![CI/CD](https://github.com/Shakil-Ahmed75/E2E-Web-Automation-CI-CD-with-GitHub-Actions/actions/workflows/playwright.yml/badge.svg)](https://github.com/Shakil-Ahmed75/E2E-Web-Automation-CI-CD-with-GitHub-Actions/actions/workflows/playwright.yml)

An end-to-end automation project that validates critical HR workflows and runs automated tests through a GitHub Actions CI/CD pipeline to ensure faster releases, early bug detection, and improved application quality.

## 🎯 Overview

This project implements comprehensive E2E (End-to-End) web automation testing for multiple applications using **Playwright** and **TypeScript**. It features a robust CI/CD pipeline integrated with GitHub Actions that automatically runs tests on every push and pull request.

### Key Features

- ✅ **Multi-Application Testing**: Supports testing for OrangeHRM and SwagLabs applications
- ✅ **CI/CD Integration**: Automated testing via GitHub Actions
- ✅ **Page Object Model (POM)**: Clean, maintainable test architecture
- ✅ **Multiple Reporters**: HTML reports, Allure reports, and console output
- ✅ **Environment Configuration**: Flexible configuration via environment variables
- ✅ **Headed/Headless Mode**: Smart configuration for local development and CI environments
- ✅ **Test Isolation**: Serial test execution for better reliability
- ✅ **Video & Trace Recording**: Automatic recording on test failures

## 🏗️ Project Structure

```
├── .github/
│   └── workflows/
│       └── playwright.yml          # GitHub Actions CI/CD workflow
├── config/
│   ├── orangeHrm.ts                # OrangeHRM application configuration
│   └── swagLabs.ts                 # SwagLabs application configuration
├── e2e/
│   └── testCases/
│       ├── OrangeHRM/
│       │   └── orangeHrmLogin.negative.spec.ts
│       └── SwagLabs/
│           └── swagLabs.spec.ts
├── fixtures/
│   └── tags.ts                     # Test tagging configuration
├── pages/
│   ├── actions/                    # Page action classes
│   ├── locators/                   # Page locator classes
│   ├── orangeHrmPage.ts           # OrangeHRM page object
│   └── swagLabsPage.ts            # SwagLabs page object
├── playwright.config.ts            # Playwright configuration
├── package.json                    # Project dependencies
└── README.md                       # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18 or higher (LTS recommended)
- **npm**: v9 or higher
- **Git**: Latest version

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shakil-Ahmed75/E2E-Web-Automation-CI-CD-with-GitHub-Actions.git
   cd E2E-Web-Automation-CI-CD-with-GitHub-Actions
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install --with-deps
   ```

### Environment Configuration

Create a `.env` file in the root directory (optional - defaults are provided):

```env
# OrangeHRM Configuration
ORANGEHRM_BASE_URL=https://opensource-demo.orangehrmlive.com
ORANGEHRM_USERNAME=Admin
ORANGEHRM_PASSWORD=admin123

# SwagLabs Configuration
BASE_URL=https://www.saucedemo.com
SWAGLABS_USERNAME=standard_user
SWAGLABS_PASSWORD=secret_sauce
```

## 🧪 Running Tests

### Run All Tests

```bash
npx playwright test
```

### Run Tests for Specific Project

```bash
# Run OrangeHRM tests only
npx playwright test --project=OrangeHRM

# Run SwagLabs tests only
npx playwright test --project=SwagLabs
```

### Run Tests in Headed Mode (UI Mode)

```bash
# Run tests with browser visible (default for local development)
npx playwright test --headed

# Or use UI mode for interactive debugging
npx playwright test --ui
```

### Run Tests in Debug Mode

```bash
npx playwright test --debug
```

### Run Specific Test File

```bash
npx playwright test e2e/testCases/OrangeHRM/orangeHrmLogin.negative.spec.ts
```

## 📊 Test Reports

### HTML Report

After running tests, view the HTML report:

```bash
npx playwright show-report
```

The report is also generated at: `reports/html/`

### Allure Report

Generate and view Allure report:

```bash
# Generate Allure results
npx allure generate allure-results --clean

# Open Allure report
npx allure open
```

## 🔧 Configuration

### Playwright Configuration

The `playwright.config.ts` file contains all test configuration:

- **Test Directory**: `./e2e/testCases`
- **Timeout**: 2 minutes per test
- **Retries**: 2 retries in CI, 0 locally
- **Parallel Execution**: Disabled (serial mode) for better test isolation
- **Headless Mode**: 
  - `false` for local development (headed mode)
  - `true` for CI environments (automatic)
- **Reporters**: List, HTML, and Allure
- **Video**: Recorded on test failures
- **Trace**: Recorded on first retry

### Projects

The configuration includes two test projects:

1. **OrangeHRM**: Tests for OrangeHRM application
2. **SwagLabs**: Tests for SwagLabs demo application

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow

The project includes a GitHub Actions workflow (`.github/workflows/playwright.yml`) that:

1. ✅ Triggers on push and pull requests to `main`/`master` branches
2. ✅ Sets up Node.js environment
3. ✅ Installs dependencies using `npm ci`
4. ✅ Installs Playwright browsers
5. ✅ Runs all tests in headless mode
6. ✅ Uploads HTML reports as artifacts (retained for 30 days)

### Viewing CI/CD Results

1. Go to the **Actions** tab in your GitHub repository
2. Click on the latest workflow run
3. Download the `playwright-report` artifact to view test results

## 📝 Test Cases

### OrangeHRM Test Cases

- **TC001**: Verify error message for invalid credentials
- **TC002**: Verify required validation when username and password are empty
- **TC003**: Verify required validation when password is empty
- **TC004**: Verify required validation when username is empty

### SwagLabs Test Cases

- **TC001**: Verify user can log in with valid credentials and see inventory page

## 🏛️ Architecture

### Page Object Model (POM)

The project follows the Page Object Model pattern:

- **Pages**: High-level page objects (`orangeHrmPage.ts`, `swagLabsPage.ts`)
- **Locators**: Centralized element locators (`pages/locators/`)
- **Actions**: Reusable action methods (`pages/actions/`)
- **Config**: Environment-specific configuration (`config/`)

### Benefits

- ✅ **Maintainability**: Changes to UI elements require updates in one place
- ✅ **Reusability**: Page objects can be reused across multiple tests
- ✅ **Readability**: Tests are more readable and expressive
- ✅ **Scalability**: Easy to add new pages and tests

## 🛠️ Technologies Used

- **[Playwright](https://playwright.dev/)**: Modern end-to-end testing framework
- **[TypeScript](https://www.typescriptlang.org/)**: Type-safe JavaScript
- **[Allure](https://docs.qameta.io/allure/)**: Test reporting framework
- **[GitHub Actions](https://github.com/features/actions)**: CI/CD automation
- **[dotenv](https://www.npmjs.com/package/dotenv)**: Environment variable management

## 📦 Dependencies

### Dev Dependencies

- `@playwright/test`: ^1.58.0
- `@types/node`: ^25.0.10
- `allure-playwright`: ^3.4.5
- `npm-run-all`: ^4.1.5

### Dependencies

- `dotenv`: ^17.2.3
- `dotenv-flow`: ^4.1.0

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

**Shakil Ahmed**

- GitHub: [@Shakil-Ahmed75](https://github.com/Shakil-Ahmed75)
- Repository: [E2E-Web-Automation-CI-CD-with-GitHub-Actions](https://github.com/Shakil-Ahmed75/E2E-Web-Automation-CI-CD-with-GitHub-Actions)

## 📞 Support

For issues, questions, or contributions, please open an issue on the [GitHub Issues](https://github.com/Shakil-Ahmed75/E2E-Web-Automation-CI-CD-with-GitHub-Actions/issues) page.

## 🙏 Acknowledgments

- [Playwright](https://playwright.dev/) for the excellent testing framework
- [OrangeHRM](https://www.orangehrm.com/) for the demo application
- [SwagLabs](https://www.saucedemo.com/) for the demo application

---

⭐ If you find this project helpful, please consider giving it a star!
