import { Page } from './../../models/page';
import { DataUser } from './../../models/DataUser';
import { map } from 'rxjs/operators';
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
    console.log(Page.iPage);
    return this.http
    .get<DataUser>(`${this.url}?page=${Page.iPage}&pageSize=2`)
    .pipe(
      map(res => {
        // console.log(res.data);
        return res;
      })
    );
  }
}
