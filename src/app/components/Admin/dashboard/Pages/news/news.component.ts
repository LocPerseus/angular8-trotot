import { News } from './../../../../../shared/News.model';
import { NewsService } from './../../../../../services/news/news.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  searchText;
  newsData: News[];
  selectedNews: News;
  termNews: {};
  id;
  constructor( private newsService: NewsService) { }

  ngOnInit() {
    this.getTheNews();
  }
  getTheNews(): void {
    this.newsService
    .getTheNews()
    .subscribe((res) => {
      this.newsData = res.data;
      // console.log(this.newsData);
      // console.log(`this.newsData = ${JSON.stringify(this.newsData)}`);
    });
  }
  setStatus(news: News): void {
    this.selectedNews = news;
    this.id = this.selectedNews._id;
    console.log(this.id);
    this.termNews = {
      status: this.selectedNews.status === 2 ? this.selectedNews.status = 1 : this.selectedNews.status = 2
    };
    this.newsService
      .setStatus(JSON.stringify(this.termNews), this.id)
      .subscribe(res => console.log(res));
  }
}
