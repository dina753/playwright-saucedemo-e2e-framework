import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('user can complete checkout successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addBackpackToCart();
  await inventoryPage.goToCart();

  await cartPage.clickCheckout();

  await checkoutPage.fillCheckoutInformation('Diana', 'Jimenez', '60610');
  await checkoutPage.clickContinue();
  await checkoutPage.clickFinish();

  await checkoutPage.assertOrderComplete();
});

test('checkout shows error when information is missing', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addBackpackToCart();
  await inventoryPage.goToCart();

  await cartPage.clickCheckout();
  await checkoutPage.clickContinue();

  await checkoutPage.assertCheckoutErrorVisible();
});