import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  order: Order;
  date: Date;
  user: User;
  products: Product[];
  
  constructor(
    private ordersService: OrdersService,
    private usersService: UsersService,
    private productService: ProductsService,
    private route: ActivatedRoute,
  ) {}
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      
      this.ordersService.orders.subscribe((data: Order[]) => {
        if (data.length > 0) {
          this.order = data.find(order => order.OrderId === id);
          this.usersService.users.subscribe(() => {
            this.user = this.usersService.getUser(this.order.UserId)
          });
          this.products = this.order.Products.map(
            (orderProduct: OrderProduct) => this.productService.getProduct(orderProduct.ProductId)
          );
        }
      });

    })
  }

}
