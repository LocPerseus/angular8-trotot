import { News } from './../../../../../shared/News.model';
import { NewsService } from './../../../../../services/news/news.service';
import { Component, OnInit } from '@angular/core';
import { log } from 'util';
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
  p;
  count: number;
  response: {};
  constructor( private newsService: NewsService) { }

  ngOnInit() {
    this.getTheNews();
  }
  getTheNews(): void {
    this.newsService
    .getTheNews()
    .subscribe((res) => {
      this.newsData = res.data;
      this.count = this.newsData.length;
      console.log(this.count);
      // console.log(res);
      // console.log(`this.newsData = ${JSON.stringify(this.newsData)}`);
    });
  }
  setStatus(news: News): void {
    this.selectedNews = news;
    this.id = this.selectedNews._id;
    // console.log(this.id);
    this.termNews = {
      status: this.selectedNews.status === 1 ? this.selectedNews.status = 2 : this.selectedNews.status = 1
    };
    this.newsService
      .setStatus(JSON.stringify(this.termNews), this.id)
      .subscribe(res => console.log(res));
  }
  setRent(news: News): void {
    this.selectedNews = news;
    this.id = this.selectedNews._id;
    // console.log(this.id);
    this.termNews = {
      status: this.selectedNews.status != 3 ? this.selectedNews.status = 3 : this.selectedNews.status = 2
    };
    this.newsService
      .setStatus(JSON.stringify(this.termNews), this.id)
      .subscribe(res => console.log(res));
  }
  deleteNews(news: News): void {
    this.selectedNews = news;
    this.id = this.selectedNews._id;
    // console.log(this.id);
    this.newsService
      .deleteNews(this.id)
      .subscribe(res => {
        console.log(res);
        // this.response = res;
        console.log(this.count, 'sao khi xoa');
        this.newsData = this.newsData.filter(eachNews => eachNews._id !== this.id);
        console.log(this.newsData.length);
        alert('Xóa thành công');
      }
      );
  }

}
