import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface ProductItem {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // private readonly products: ProductItem[] = [
  //   { id: 1, name: 'Laptop', price: 65000, inStock: true },
  //   { id: 2, name: 'Phone', price: 28000, inStock: true },
  //   { id: 3, name: 'Headphones', price: 3500, inStock: false },
  // ];

  // getProducts(): ProductItem[] {
  //   return this.products;
  // }

  constructor(private http:HttpClient) {  }
      getProductlist(){
      const url="https://dummyjson.com/products";
      return this.http.get(url);
    }
}
