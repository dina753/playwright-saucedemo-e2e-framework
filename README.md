# Playwright SauceDemo E2E Framework

End-to-end test automation framework built with Playwright and TypeScript using SauceDemo as the application under test.

## Tech Stack

- Playwright
- TypeScript
- Node.js
- GitHub

## Project Structure

- pages/LoginPage.ts
- tests/auth.spec.ts
- tests/cart.spec.ts
- tests/checkout.spec.ts
- playwright.config.ts
- package.json

## Test Coverage

### Authentication
- Valid login
- Invalid login

### Cart
- Add product to cart
- Remove product from cart

### Checkout
- Successful checkout
- Validation error when checkout information is missing

## How to Run

Install dependencies:
npm install

Run tests:
npx playwright test

Run tests in UI mode:
npx playwright test --ui

## Key Features

- Playwright + TypeScript
- Multi-browser execution
- Page Object Model with LoginPage
- End-to-end coverage for key SauceDemo flows

## Future Improvements

- Add InventoryPage, CartPage, and CheckoutPage
- Re-enable GitHub Actions workflow
- Add data-driven testing
- Improve reporting and logging

## Author

Diana Jimenez
