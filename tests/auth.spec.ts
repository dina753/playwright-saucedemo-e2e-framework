import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('successful login in SauceDemo', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);
  await expect(page.getByText('Products')).toBeVisible();
});

test('invalid login shows error message', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('wrong_user', 'wrong_password');

  await expect(page.getByText(/Epic sadface/i)).toBeVisible();
});