import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any = [];
  constructor() {}

  addToCart(product: any) {
    this.cartItems.push(product);
  }

  getCartItems() {
    return this.cartItems;
  }

  deleteCartItem(product: any) {
    const index = this.cartItems.findIndex(
      (item: any) => item.id === product.id
    );

    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }
}
