import { Component } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { AuthenticationService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  public model : LoginModel;
  public loginFail : boolean;
  public username : string;

  constructor(
    private authService : AuthenticationService,
    private router : Router
  ) {
    this.model = new LoginModel("", "");
    this.username = "";
  }

  login () : void {
    this.authService.login(this.model)
      .subscribe(
        data => {
          this.successfulLogin(data);
        },
        err => {
          this.loginFail = true;
        }
      )
  }

  get diagnostics() : string {
    return JSON.stringify(this.model);
  }

  successfulLogin(data) : void {
    this.authService.authtoken = data['_kmd']['authtoken'];
    localStorage.setItem('authtoken', data['_kmd']['authtoken']);
    localStorage.setItem('username', data['username']);
    localStorage.setItem('role', data['role']);
    this.loginFail = false;
    this.router.navigate(['/home']);
  }
}
