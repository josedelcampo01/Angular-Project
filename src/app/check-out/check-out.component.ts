import { Component } from '@angular/core';
import { CartService } from '../card/cart.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-check-out',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.css',
})
export class CheckOutComponent {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems().map((item: Product) => ({
      ...item,
      quantity: 1,
    }));
  }

  increaseQuantity(item: any) {
    item.quantity += 1;
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity -= 1;
    }
  }

  getTotalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  confirmOrder() {
    // Aquí podrías procesar el pedido o llamar a un API
    alert('Order confirmed! Thank you for your purchase.');
    this.cartItems = [];
  }
}
