import { DataUser } from './../../models/DataUser';
import { map } from 'rxjs/operators';
import { User } from './../../models/User';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = 'https://trototbe.herokuapp.com/api/admin/accounts/';
  constructor(private http: HttpClient) { }
  getAllUser(): Observable<DataUser> {
    return this.http
    .get<DataUser>(this.url)
    .pipe(
      map(res => {
        // console.log(res.data);
        return res;
      })
    );
  }
}
