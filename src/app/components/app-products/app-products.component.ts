import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './app-products.component.html',
  styleUrls: ['./app-products.component.scss']
})
export class AppProductsComponent implements OnInit {
  products: Product[] = []

  constructor(private service: ProductsService) {
    this.service.products.subscribe((data: Product[]) => this.products = data)
  }

  ngOnInit() {
  }

}
