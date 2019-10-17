import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppProductsComponent } from './components/app-products/app-products.component';
import { AppOrdersComponent } from './components/app-orders/app-orders.component';
import { OrderComponent } from './components/order/order.component';


const routes: Routes = [
  { path: '', component: AppProductsComponent },
  { path: 'orders', component: AppOrdersComponent },
  { path: 'orders/:id', component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
