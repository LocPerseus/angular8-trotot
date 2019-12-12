import { News } from './../../../../../shared/News.model';
import { DataNews } from '../../../../../models/DataNews';
import { NewsService } from './../../../../../services/news/news.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newsData: News[];
  constructor( private newService: NewsService) { }

  ngOnInit() {
    this.getTheNews();
  }
  getTheNews(): void {
    this.newService
    .getTheNews()
    .subscribe((res) => {
      this.newsData = res.data;
      // console.log(this.newsData);
      // console.log(`this.newsData = ${JSON.stringify(this.newsData)}`);
    });
  }
}
