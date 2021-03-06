import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../models/register.model';
import { AuthenticationService } from '../../../core/services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent  {
  public model : RegisterModel;
  public registerSuccess : boolean;
  public registerFail : boolean;

  constructor(
    private authService : AuthenticationService,
    private router : Router
  ) {
    this.model = new RegisterModel("", "", "", "", "","user");
  }

  register() : void {
    this.authService.register(this.model).subscribe(data => {
      console.log(data);
      if(data['success']){
        this.successfulRegister();
      }else{
        this.registerFail = true;
      }
    })
  }

  successfulRegister() : void {
    this.registerSuccess = true;
    this.router.navigate(['/login']);
  }
}
