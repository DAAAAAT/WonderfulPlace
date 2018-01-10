import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../models/register.model';
import { AuthenticationService } from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent  {
  public model : RegisterModel;
  public registeredUser : string;
  public registerSuccess : boolean;
  public registerFail : boolean;

  constructor(
    private authService : AuthenticationService,
    private router : Router
  ) {
    this.model = new RegisterModel("", "", "", "", "","user");
  }

  register() : void {
    this.authService.register(this.model)
      .subscribe(
        data => {
          this.successfulRegister(data);
        },
        err => {
          this.registerFail = true;
        }
      )
  }

  get diagnostics() : string {
    return JSON.stringify(this.model);
  }

  successfulRegister(data) : void {
    this.registeredUser = data['username'];
    this.registerSuccess = true;
    this.router.navigate(['/login']);
  }
}
