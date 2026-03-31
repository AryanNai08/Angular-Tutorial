import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Users {
  constructor(private http: HttpClient) { }

  getUserslist() {
    const url ="http://localhost:3000/users";
    return this.http.get(url);
  }
}
