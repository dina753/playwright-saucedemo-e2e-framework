import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillCheckoutInformation(firstName: string, lastName: string, zipCode: string) {
    await this.page.getByPlaceholder('First Name').fill(firstName);
    await this.page.getByPlaceholder('Last Name').fill(lastName);
    await this.page.getByPlaceholder('Zip/Postal Code').fill(zipCode);
  }

  async clickContinue() {
    await this.page.click('[data-test="continue"]');
  }

  async clickFinish() {
    await this.page.click('[data-test="finish"]');
  }

  async assertOrderComplete() {
    await expect(this.page.getByText('Thank you for your order!')).toBeVisible();
  }

  async assertCheckoutErrorVisible() {
    await expect(this.page.locator('[data-test="error"]')).toBeVisible();
  }
}