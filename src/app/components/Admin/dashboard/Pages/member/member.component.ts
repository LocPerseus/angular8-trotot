import { Page } from './../../../../../models/page';
import { Account } from './../../../../../models/account';
import { UsersService } from './../../../../../services/users/users.service';
import { Component, OnInit } from '@angular/core';
import { TermUser } from 'src/app/models/TermUser';

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
  selectedUser: Account;
  termUser: {};
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
        console.log(res.data);
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
  onSelect(user: Account): void {
    this.selectedUser = user;
    // console.log(`selectedUser = ${JSON.stringify(this.selectedUser._id)}`);
    // this.termUser.id = this.selectedUser._id;
    // console.log(this.termUser);
    console.log(this.selectedUser._id);
    this.termUser = {
      id: this.selectedUser._id,
      status: this.selectedUser.status === 'true' ? this.selectedUser.status = 'false' : this.selectedUser.status = 'true'
    };
    console.log(this.termUser);
    this.userService
      .setStatus(JSON.stringify(this.termUser))
      .subscribe(res => console.log(res));
  }
}
