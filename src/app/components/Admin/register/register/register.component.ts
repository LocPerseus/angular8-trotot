import { Router } from '@angular/router';
import { AuthService } from './../../../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {};
  // tslint:disable-next-line: variable-name
  constructor(private _auth: AuthService, private router: Router) { }

  ngOnInit() {
  }
  registerUser() {
    this._auth
      .regiterUser(this.registerUserData)
      .subscribe(
        res => {
          // console.log(res);
          return this.router.navigate(['login']);
        },
        err => console.log(err)
        );
    // console.log(this.registerUserData);
  }

}
