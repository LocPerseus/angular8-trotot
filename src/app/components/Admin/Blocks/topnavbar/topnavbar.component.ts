import { Router } from '@angular/router';
import { User } from './../../../../models/User';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css']
})
export class TopnavbarComponent implements OnInit {

  userInfo: User;
  displayName: string;
  constructor(private auth: AuthService, private router: Router ) { }
  ngOnInit() {
    this.getUserInfo();
  }
  getUserInfo = () => {
    this.auth
      .getInfoUser()
      .subscribe(res => {
        this.userInfo = res;
        this.displayName = this.userInfo.displayName;
      });
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
  }
}
