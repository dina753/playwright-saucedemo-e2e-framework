import { Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addBackpackToCart() {
    await this.page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
}