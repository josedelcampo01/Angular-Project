import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  totalAmount: any;
  productList: Product[] = [];
  cartItems: any[] = [];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.productList = this.cartService.getCartItems();
    this.totalAmount = this.productList.length;
  }

  deleteFromCart(product: any) {
    this.cartService.deleteCartItem(product);
    this.cartItems = this.cartService.getCartItems(); // Actualizar la lista del carrito
  }
}
