import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('user can complete checkout successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('.shopping_cart_link').click();

  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();

  await page.getByRole('button', { name: 'Checkout' }).click();

  await page.getByPlaceholder('First Name').fill('Diana');
  await page.getByPlaceholder('Last Name').fill('Jimenez');
  await page.getByPlaceholder('Zip/Postal Code').fill('60610');

  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Finish' }).click();

  await expect(page.getByText('Thank you for your order!')).toBeVisible();
});

test('checkout shows error when information is missing', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('.shopping_cart_link').click();

  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();

  await expect(page.getByText(/Error:/i)).toBeVisible();
});