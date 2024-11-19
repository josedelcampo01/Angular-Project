import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  // private productsList: Product[] = [
  //   {
  //     name: 'producto 1',
  //     id: 1,
  //     description: 'desc prod 1',
  //     price: 2.3,
  //   },
  //   {
  //     name: 'producto 2',
  //     id: 2,
  //     description: 'desc prod 2',
  //     price: 2.53,
  //   },
  //   {
  //     name: 'producto 3',
  //     id: 3,
  //     description: 'desc prod 3',
  //     price: 25,
  //   },
  // ];
  // getProducts(): Product[] {
  //   return this.productsList;
  // }
  // searchProduct(query: number | string): Product | undefined {
  //   const queryNumber = Number(query);
  //   if (!isNaN(queryNumber)) {
  //     return this.productsList.find((result) => result.id === queryNumber);
  //   } else {
  //     return this.productsList.find(
  //       (result) => result.name.toLowerCase() === query
  //     );
  //   }
  // }

  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}
  getProducts(): Observable<Product[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  searchProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
}
