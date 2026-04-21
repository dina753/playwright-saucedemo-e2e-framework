import { Page, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async assertProductVisible(productName: string) {
    await expect(this.page.getByText(productName)).toBeVisible();
  }

  async removeBackpack() {
    await this.page.click('[data-test="remove-sauce-labs-backpack"]');
  }

  async clickCheckout() {
    await this.page.click('[data-test="checkout"]');
  }
}