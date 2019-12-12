import { News } from './../../shared/News.model';
import { ServerResponse } from './../../models/serverResponse';
import { HttpClient } from '@angular/common/http';
import { DataNews } from '../../models/DataNews';

// RXJS
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  // tslint:disable-next-line: variable-name
  private _url = 'https://trototbe.herokuapp.com/api/news';
  constructor(private http: HttpClient) { }
  getTheNews(): Observable<DataNews> {
    return this.http
    // tslint:disable-next-line: no-trailing-whitespace
    .get<DataNews>(this._url)
    .pipe(
      map(res => {
        // console.log(res.data);
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
  // getTheNews(): Observable<ServerResponse<News[]>> {
  //   return this.http
  //     .get<ServerResponse<News[]>>(this._url)
  //     .pipe(
  //       map(res => {
  //         console.log(res);
  //         // res..map(n => {
  //         //   // tslint:disable-next-line: no-unused-expression
  //         //   n;
  //         //   console.log(n);
  //         // });
  //         return res;
  //       })
  //     );
  // }
}
