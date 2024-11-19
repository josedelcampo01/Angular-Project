import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../card/cart.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent {
  productValue!: number;
  foundProduct!: Product | undefined;
  productList: Product[] = [];
  constructor(
    private productService: ProductsService,
    private cartService: CartService
  ) {}

  // ngOnInit(): void {
  //   this.productList = this.productService.getProducts();
  // }

  // searchProduct() {
  //   console.log(this.productValue);
  //   this.foundProduct = this.productService.searchProduct(this.productValue);
  //   console.log(this.foundProduct);
  // }

  // addToCart(product: any) {
  //   this.cartService.addToCart(product);
  // }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.productList = data;
    });
  }
  searchProduct() {
    this.productService
      .searchProduct(this.productValue)
      .subscribe((data: Product) => {
        this.foundProduct = data;
      });
  }
  // searchProduct() {
  //   console.log(this.productValue);
  //   this.foundProduct = this.productService.searchProduct(this.productValue);
  //   console.log(this.foundProduct);
  // }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
