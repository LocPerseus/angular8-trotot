import { Account } from './../../models/account';
import { Page } from './../../models/page';
import { DataUser } from './../../models/DataUser';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'util';

const httpOption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = 'https://trototbe.herokuapp.com/api/admin/accounts/';
  constructor(private http: HttpClient) { }
  getAllUser(): Observable<DataUser> {
    console.log(Page.iPage);
    return this.http
    // .get<DataUser>(`${this.url}?page=${Page.iPage}&pageSize=2`)
    .get<DataUser>(this.url)
    .pipe(
      map(res => {
        // console.log(res.data);
        return res;
      })
    );
  }

  setStatus(user: any): Observable<DataUser> {
    return this.http
      .put<DataUser>(this.url, user, httpOption)
      .pipe(
        tap(updateStatus => console.log(`updated member = ${JSON.stringify(updateStatus)}`)),
        catchError(err => this.errorHandler(err))
      );
  }
  // tslint:disable-next-line: no-shadowed-variable
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server error');
  }
}
