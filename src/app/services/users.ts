import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/User';

@Injectable({
  providedIn: 'root',
})
export class Users {
  constructor(private http: HttpClient) { }

  getUserslist() :Observable<User[]> {
    const url ="http://localhost:3000/users";
    return this.http.get<User[]>(url);
  }

    saveUser(user:User) :Observable<User> {
    const url ="http://localhost:3000/users";
    return this.http.post<User>(url,user);
  }
}
