import { Routes } from '@angular/router';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { CardComponent } from './card/card.component';
import { CheckOutComponent } from './check-out/check-out.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent,
  },
  {
    path: 'cart',
    component: CardComponent,
  },
  {
    path: 'checkout',
    component: CheckOutComponent,
  },
];
