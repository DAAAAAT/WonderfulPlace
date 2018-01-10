import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// Models
import { RegisterModel } from '../components/auth/models/register.model';
import { LoginModel } from '../components/auth/models/login.model';

const url = 'http://localhost:5000';


@Injectable()
export class AuthenticationService {
  private currentAuthtoken : string;
  private currRole : string;

  constructor(
    private http : HttpClient
  ) { }

  login(loginModel : LoginModel) {
    return this.http.post(url + '/login', loginModel, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  register(registerModel : RegisterModel) : Observable<Object> {
    return this.http.post(url + '/register', registerModel, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  logout(){
    localStorage.clear();
  }


  isLoggedIn() {
    let authtoken : string = localStorage.getItem("authtoken");
    return authtoken === this.currentAuthtoken;
  }

  get authtoken() {
    return this.currentAuthtoken;
  }

  set authtoken(value : string) {
    this.currentAuthtoken = value;
  }
}
