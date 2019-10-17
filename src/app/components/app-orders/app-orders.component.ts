import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './app-orders.component.html',
  styleUrls: ['./app-orders.component.scss']
})
export class AppOrdersComponent implements OnInit {
  orders: Order[] = [];

  constructor(private service: OrdersService) {
    this.service.orders.subscribe((data: Order[]) => this.orders = data);
  }

  ngOnInit() {
  }

}
