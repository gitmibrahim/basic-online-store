
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  users = new BehaviorSubject<User[]>([]);
  
  constructor(private http: HttpClient) {
    this.http.get('./assets/data/Users.json').subscribe((data: User[]) => {
      this.users.next(data);
    })
  }

  getUser(id: string): User {
    var user: User;
    this.users.subscribe((users: User[]) => {
      user = users.find((user: User) => user.Id === id)
    })
    return user;
  }
}
