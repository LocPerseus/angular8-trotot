import { Page } from './../../../../../models/page';
import { Account } from './../../../../../models/account';
import { UsersService } from './../../../../../services/users/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor(private userService: UsersService) {
  }
  userData: Account[];
  totalPage = [];
  searchText;

  selectedUser: Account[];

  ngOnInit() {
    this.setPage();
    this.getAllUser();
    this.getTotalPage();
  }
  getAllUser(): void {
    this.userService
      .getAllUser()
      .subscribe((res) => {
        this.userData = res.data;
      });
  }
  getTotalPage(): void {
    this.userService
      .getAllUser()
      .subscribe((res) => {
        // this.totalPage = res.totalPage;
        for (let i = 1; i <= res.totalPage; i++) {
          this.totalPage.push(i);
        }
        console.log(this.totalPage);
      });
  }
  setPage() {
    Page.iPage = 2;
  }
  onSelect(user: Account[]): void {
    this.selectedUser = user;
    // console.log(`selectedUser = ${JSON.stringify(this.selectedUser)}`);
  }
}
