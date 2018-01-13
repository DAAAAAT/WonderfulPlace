import { Component } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { AuthenticationService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  public model: LoginModel = new LoginModel();
  public loginFail: boolean;
  public username: string;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
  }

  login(): void {
    this.authService.login(this.model)
      .subscribe(
        data => {
          console.log(data);
          if(data['success']){
            this.successfulLogin(data);
          }else{

            this.loginFail = true;
          }
        })
  }

  successfulLogin(data): void {
    console.log(this.authService);
    this.authService.authtoken = data['token'];
    localStorage.setItem('authtoken', data['token']);
    localStorage.setItem('username', data['user']['userName']);
    localStorage.setItem('role', data['user']['roles'][0]);
    this.loginFail = false;
    this.router.navigate(['/home']);
  }
}
