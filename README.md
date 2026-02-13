# OrangeHRM E2E Web Automation with CI/CD

A comprehensive end-to-end web automation testing framework built with Playwright and TypeScript, featuring CI/CD integration with GitHub Actions.

## 🚀 Features

- **Playwright Framework**: Modern, reliable end-to-end testing
- **TypeScript**: Type-safe test development
- **Page Object Model (POM)**: Maintainable and scalable test architecture
- **CI/CD Integration**: Automated testing with GitHub Actions
- **Multiple Test Suites**: Support for OrangeHRM and SwagLabs applications
- **Comprehensive Reporting**: HTML reports and Allure integration
- **Headed/Headless Mode**: Automatic switching based on environment
- **Video Recording**: Automatic video capture for failed tests
- **Trace Viewer**: Detailed trace files for debugging

## 📋 Prerequisites

- **Node.js**: v18 or higher (LTS recommended)
- **npm**: v9 or higher
- **Git**: For version control

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shakil-Ahmed75/OrangeHRM-E2E-Web-Automation-CI-CD-with-GitHub-Actions.git
   cd OrangeHRM-E2E-Web-Automation-CI-CD-with-GitHub-Actions
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install --with-deps
   ```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory (optional, defaults are provided):

```env
# OrangeHRM Configuration
ORANGEHRM_BASE_URL=https://opensource-demo.orangehrmlive.com
ORANGEHRM_USERNAME=Admin
ORANGEHRM_PASSWORD=admin123

# SwagLabs Configuration (if needed)
SWAGLABS_BASE_URL=https://www.saucedemo.com
```

### Playwright Configuration

The framework automatically configures:
- **Local Development**: Runs in headed mode (browser visible)
- **CI Environment**: Runs in headless mode (optimized for CI/CD)
- **Test Timeout**: 2 minutes per test
- **Retries**: 2 retries in CI, 0 locally
- **Parallel Execution**: Disabled for better test isolation

## 🧪 Running Tests

### Run All Tests
```bash
npx playwright test
```

### Run Specific Test Suite

**OrangeHRM Tests:**
```bash
npx playwright test --project=OrangeHRM
```

**SwagLabs Tests:**
```bash
npx playwright test --project=SwagLabs
```

### Run Tests in UI Mode (Headed)
```bash
npx playwright test --headed
```

### Run Tests in UI Mode (Playwright UI)
```bash
npx playwright test --ui
```

### Run Specific Test File
```bash
npx playwright test orangeHrmLogin.negative.spec.ts
```

### Run Tests with Specific Tag
```bash
npx playwright test --grep @orangeHRM
```

## 📊 Test Reports

### HTML Report
After running tests, view the HTML report:
```bash
npx playwright show-report
```

Reports are generated in:
- `reports/html/` - Custom HTML reports
- `playwright-report/` - Default Playwright HTML reports

### Allure Report
Generate and view Allure reports:
```bash
# Generate Allure results
npx playwright test

# Serve Allure report
npx allure serve allure-results
```

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── playwright.yml          # GitHub Actions CI/CD workflow
├── config/
│   ├── orangeHrm.ts                 # OrangeHRM configuration
│   └── swagLabs.ts                  # SwagLabs configuration
├── e2e/
│   └── testCases/
│       ├── OrangeHRM/               # OrangeHRM test cases
│       │   └── orangeHrmLogin.negative.spec.ts
│       └── SwagLabs/                # SwagLabs test cases
│           └── swagLabs.spec.ts
├── fixtures/
│   └── tags.ts                      # Test tags and fixtures
├── pages/
│   ├── actions/                     # Page action classes
│   │   ├── orangeHrmActions/
│   │   └── swagLabsActions/
│   ├── locators/                    # Page locator classes
│   │   ├── orangeHrm/
│   │   └── swagLabs/
│   ├── orangeHrmPage.ts            # OrangeHRM page object
│   └── swagLabsPage.ts              # SwagLabs page object
├── playwright.config.ts             # Playwright configuration
├── package.json                     # Project dependencies
└── README.md                        # Project documentation
```

## 🏗️ Architecture

### Page Object Model (POM)

The framework follows the Page Object Model pattern:

- **Locators**: Element selectors organized by page
- **Actions**: Reusable action methods
- **Pages**: Main page object classes combining locators and actions

### Test Organization

- Tests are organized by application (OrangeHRM, SwagLabs)
- Each test suite has its own configuration
- Tests use tags for filtering and organization

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow

The project includes a GitHub Actions workflow (`.github/workflows/playwright.yml`) that:

1. **Triggers**: On push and pull requests to `main`/`master` branches
2. **Environment**: Runs on Ubuntu latest
3. **Steps**:
   - Checks out code
   - Sets up Node.js (LTS)
   - Installs dependencies (`npm ci`)
   - Installs Playwright browsers
   - Runs tests in headless mode
   - Uploads HTML reports as artifacts

### Viewing CI Results

1. Go to the **Actions** tab in GitHub
2. Select the workflow run
3. Download the `playwright-report` artifact to view test results

## 🧩 Test Cases

### OrangeHRM Test Suite

- **TC001**: Invalid credentials error validation
- **TC002**: Required validation for empty username and password
- **TC003**: Required validation for empty password
- **TC004**: Required validation for empty username

### SwagLabs Test Suite

- **TC001**: Login with valid credentials and verify inventory page

## 🐛 Debugging

### Debug Mode
Run tests in debug mode:
```bash
npx playwright test --debug
```

### Trace Viewer
View detailed traces for failed tests:
```bash
npx playwright show-trace trace.zip
```

### Video Playback
Videos are automatically recorded for all tests and saved in `test-results/`

## 📝 Best Practices

1. **Use Page Object Model**: Keep locators and actions in page objects
2. **Use Test Tags**: Organize tests with tags for easy filtering
3. **Environment Variables**: Use `.env` for sensitive data
4. **Test Isolation**: Tests run sequentially to avoid interference
5. **Meaningful Assertions**: Use descriptive assertion messages

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
- Repository: [OrangeHRM-E2E-Web-Automation-CI-CD-with-GitHub-Actions](https://github.com/Shakil-Ahmed75/OrangeHRM-E2E-Web-Automation-CI-CD-with-GitHub-Actions)

## 🐛 Issues

If you encounter any issues, please file them in the [Issues](https://github.com/Shakil-Ahmed75/OrangeHRM-E2E-Web-Automation-CI-CD-with-GitHub-Actions/issues) section.

## 📚 Resources

- [Playwright Documentation](https://playwright.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

**Happy Testing! 🎉**
