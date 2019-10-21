import { Component, HostListener } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)',
    '(document:keydown.escape)': 'onEsc()',
  }
})

export class AppComponent {
  title: string = 'BasicOnlineStore';
  tab: string;
  orders: Order[];
  active: boolean = false;
  smallScreen: boolean;
  onResize(event) {
    this.smallScreen = event.target.innerWidth <= 500 ? true : false;
  }
  onEsc() {
    this.active = false;
  }
  
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.orders = data
    });
  }

  ngOnInit(): void {
    const pathname: string = window.location.pathname.replace(/^\/([^\/]*).*$/, '$1');
    this.tab = pathname === '' ? 'products' : pathname;
    this.smallScreen = window.innerWidth <= 500 ? true : false;
  }
  
  public getJSON(): Observable<any> {
    return this.http.get('./assets/data/Orders.json')
  }
}
