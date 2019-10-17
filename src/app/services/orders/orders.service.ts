import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ProductsService } from '../products/products.service';

@Injectable({
  providedIn: 'root'
})

export class OrdersService {
  orders = new BehaviorSubject<Order[]>([]);
  
  constructor(
    private http: HttpClient,
    private productService: ProductsService
  ) {
    this.http.get('./assets/data/Orders.json').subscribe((data: Order[]) => {
      data.map(order => {
        this.setOrderTotalPrice(order);
      })
      this.orders.next(data);
    })
  }

  getOrder(id: number): Order {
    var order: Order;
    this.orders.subscribe((orders: Order[]) => {
      order = orders.find((order: Order) => order.OrderId === id)
    })
    return order;
  }

  setOrderTotalPrice(order: Order): void {
    var TotalPrice: number = 0;
    order.Products.map(product => {
      TotalPrice += this.productService.getProduct(product.ProductId).ProductPrice * product.Quantity;
    })
    order.TotalPrice = TotalPrice;
  }
}
