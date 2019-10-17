import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title: string = 'basic-online-store';
  tab: string;
  orders: Order[]
  
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.orders = data
    });
  }

  ngOnInit(): void {
    const pathname: string = window.location.pathname.replace('/', '');
    this.tab = pathname === '' ? 'products' : pathname;
  }
  
  public getJSON(): Observable<any> {
    return this.http.get('./assets/data/Orders.json')
  }
}
