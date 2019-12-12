import { Account } from './../../../../../models/account';
import { UsersService } from './../../../../../services/users/users.service';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
// import { FormControl } from '@angular/forms';
// import { DecimalPipe } from '@angular/common';
// import { startWith, map } from 'rxjs/operators';
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  providers: [DecimalPipe]
})
export class MemberComponent implements OnInit {
  userData: Account[];
  userNewData$: Observable<Account[]>;
  filter = new FormControl('');
  constructor(private userService: UsersService, pipe: DecimalPipe ) {
    this.userNewData$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.searchUser(text, pipe))
    );
  }

  ngOnInit() {
    this.getAllUser();
  }
  getAllUser(): void {
    this.userService
      .getAllUser()
      .subscribe((res) => {
        this.userData = res.data;
      });
  }

  searchUser(text: string, pipe: PipeTransform): Account[] {
    return this.userData.filter(user => {
      const term = text.toLowerCase();
      return user.username.toLowerCase().includes(term)
        || pipe.transform(user.role).includes(term);
    } );
  }
}
