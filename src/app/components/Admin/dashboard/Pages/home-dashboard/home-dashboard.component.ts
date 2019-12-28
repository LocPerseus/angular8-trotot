import { UsersService } from './../../../../../services/users/users.service';
import { NewsService } from './../../../../../services/news/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent implements OnInit {

  amoutUser: number;
  amoutNews: number;
  constructor(private usersService: UsersService, private newsService: NewsService) { }

  ngOnInit() {
    this.getAmoutUser();
    this.getAmoutnNews();
  }
  getAmoutUser() {
    return this.usersService
      .getAllUser()
      .subscribe( res => {
        this.amoutUser = res.data.length;
        console.log(this.amoutUser);
      }
      );
  }
  getAmoutnNews() {
    return this.newsService
      .getTheNews()
      .subscribe( res => {
        this.amoutNews = res.data.length;
      });
  }
}
