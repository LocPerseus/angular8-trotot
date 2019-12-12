import { AuthService } from './../../../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { NgForm } from '@angular/forms';
declare var $;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {};
  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    document.body.className = 'hold-transition login-page';
    $(() => {
      $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' /* optional */
      });
    });
    this.checkToken();
  }

  loginUser() {
    this.auth
      .loginUser(this.loginUserData)
      .subscribe(
        res => {
          // this.loginUserData = res;
          localStorage.setItem('token', res.token);
          localStorage.setItem('id', res.id);
          this.router.navigate(['Dashboard']);
      },
        err => console.log(err)
      );
    // console.log(this.loginUserData);
  }
  checkToken() {
    if (localStorage.getItem('token')) {
      this.router.navigate(['Dashboard']);
    }
  }
  // onSubmit(form: NgForm) {
  //   console.log(form.value);
  // }
}
