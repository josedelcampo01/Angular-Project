import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
  declarations: [ProductsListComponent],
  imports: [CommonModule, ProductsListComponent],
  exports: [ProductsListComponent],
})
export class ProductsModule {}
