# Playwright SauceDemo E2E Framework

![Playwright Tests](https://github.com/dina753/playwright-saucedemo-e2e-framework/actions/workflows/playwright.yml/badge.svg)

End-to-end test automation framework built with Playwright and TypeScript using SauceDemo as the application under test.

## Tech Stack
- Playwright
- TypeScript
- Node.js
- GitHub Actions (CI/CD)

## Project Structure
playwright-saucedemo-e2e-framework/
├── pages/
│ ├── LoginPage.ts
│ ├── InventoryPage.ts
│ ├── CartPage.ts
│ └── CheckoutPage.ts
├── tests/
│ ├── auth.spec.ts
│ ├── cart.spec.ts
│ └── checkout.spec.ts
├── .github/workflows/
│ └── playwright.yml
├── playwright.config.ts
├── package.json
└── README.md

## Test Coverage
Authentication: valid login, invalid login  
Inventory: add product to cart  
Cart: remove product, navigate to checkout  
Checkout: successful checkout, validation errors  

## Architecture
This framework follows the Page Object Model (POM) design pattern, where each page has its own class, making tests clean, reusable, and easy to scale.

## How to Run
Install dependencies:
npm install

Run tests:
npx playwright test

Run tests in UI mode:
npx playwright test --ui

Open report:
npx playwright show-report

## CI/CD
Tests run automatically on every push using GitHub Actions.

## Key Features
- Playwright + TypeScript
- Page Object Model (POM)
- Multi-browser support
- CI/CD integration
- Clean and scalable structure

## Future Improvements
- Data-driven testing
- API testing
- Visual regression testing
- Custom reporting

## Author
Diana Jimenez
