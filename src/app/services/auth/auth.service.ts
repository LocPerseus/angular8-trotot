import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'https://trototbe.herokuapp.com/api';
  constructor(private http: HttpClient) { }
  regiterUser(user) {
    return this.http.post<any>(`${this.authUrl}/register`, user);
  }
  loginUser(user) {
    return this.http.post<any>(`${this.authUrl}/login`, user);
  }
  getInfoUser() {
    return this.http.get<any>(`${this.authUrl}/userinfo/${localStorage.getItem('id')}`);
  }
  // private handleError(errorRes: HttpErrorResponse) {

  // }
  loggedIn() {
    // double negate return true or false. If exist token return true
    return !!localStorage.getItem('token');
  }
}
