import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  products = new BehaviorSubject<Product[]>([]);
  
  constructor(private http: HttpClient) {
    this.http.get('./assets/data/Products.json').subscribe((data: Product[]) => {
      this.products.next(data);
    })
  }

  getProduct(id: number): Product {
    var product: Product;
    this.products.subscribe((products: Product[]) => {
      product = products.find((product: Product) => product.ProductId === id)
    })
    return product;
  }
}
