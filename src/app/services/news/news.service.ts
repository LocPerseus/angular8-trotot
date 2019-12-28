import { News } from './../../shared/News.model';
import { ServerResponse } from './../../models/serverResponse';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { DataNews } from '../../models/DataNews';

// RXJS
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';

const httpOption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  // tslint:disable-next-line: variable-name
  private _url = 'https://trototbe.herokuapp.com/api/admin/news';
  constructor(private http: HttpClient) { }
  getTheNews(): Observable<DataNews> {
    return this.http
    // tslint:disable-next-line: no-trailing-whitespace
    .get<DataNews>(this._url)
    .pipe(
      map(res => {
        // console.log(res);
        // res.data.map(rs => {
        //   // tslint:disable-next-line: no-unused-expression
        //   rs;
        // });
        return res;
      })
    );
    // .pipe(
    //   map((theNews) => theNews.map((news) => {
    //     return {
    //       ...news,
    //       data: news.data ? news.data : []
    //     };
    //   })),
    // );
  }
  setStatus(news: any, id: number): Observable<DataNews> {
    return this.http
      .patch<DataNews>(`${this._url}/${id}`, news, httpOption)
      .pipe(
        tap(updatedStatus => console.log(`updated news = ${JSON.stringify(updatedStatus)}`)),
        catchError(err => this.errorHandler(err))
      );
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server error');
  }

}
