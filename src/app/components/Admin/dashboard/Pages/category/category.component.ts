import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';

// import { CategoryService } from '../../../../../category.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  user: User;
  term: {};
  userInfo: User;
  settingsForm: FormGroup;
  isSubmitting = false;
  displayName: string;
  email: string;
  phoneNumber: string;
  birthDay: Date;
  select = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuider: FormBuilder
  ) {
    this.settingsForm = this.formBuider.group({
      displayName: '',
      email: '',
      birthday: '',
      phoneNumber: '',
      avatar: ''
    });
  }
  ngOnInit() {
    this.getUserInfo();
  }
  getUserInfo() {
    this.authService
      .getInfoUser()
      .subscribe(res => {
        this.user = res;
        this.displayName = this.user.displayName;
        this.email = this.user.email;
        this.phoneNumber = this.user.phoneNumber;
        this.birthDay = this.user.birthday;
        this.userInfo = {
          favourite: this.user.favourite,
          _id: this.user._id,
          id_account: this.user.id_account,
          displayName: this.user.displayName,
          createdDay: this.user.createdDay,
          email: this.user.email,
          address: this.user.address,
          gender: this.user.gender,
          avatar: this.user.avatar,
          phoneNumber: this.user.phoneNumber,
          identityCard: this.user.identityCard,
          birthday: this.user.birthday
        };
        Object.assign(this.user, this.userInfo);
        this.settingsForm.patchValue(this.user);
        // console.log(this.user);
      });
  }
  submitForm() {
    this.isSubmitting = true;
    this.updateUser(this.settingsForm.value);
    this.authService
      .updateUser(this.user)
      .subscribe(res => {
        console.log(this.user);
        console.log(res);
        // this.router.navigate(['dashboard']);
        location.reload();
      });

  }
  // tslint:disable-next-line: ban-types
  updateUser(values: Object) {
    Object.assign(this.user, values);
  }

  onSelectedPass() {
    this.select = true;
  }

}
