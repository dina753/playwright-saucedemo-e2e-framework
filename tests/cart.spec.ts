import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('user can add product to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('.shopping_cart_link').click();

  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
});

test('user can remove product from cart', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();

  await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);
});