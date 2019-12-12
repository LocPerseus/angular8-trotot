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
  customerInfo: User[] = [];
  name: string;
  lastname: { displayName: any; };
  final: any;
  constructor(private auth: AuthService, private router: Router ) { }
  ngOnInit() {
    this.getUserInfo();
  }
  getUserInfo = () => {
    this.auth
      .getInfoUser()
      .subscribe(res => {
        this.customerInfo = res;
        // console.log(this.customerInfo);
        this.name = JSON.stringify(this.customerInfo);
        this.lastname = JSON.parse(this.name);
        // console.log(this.lastname.displayName);
        this.final = this.lastname.displayName;
      });
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
  }
}
