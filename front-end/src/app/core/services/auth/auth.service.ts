import { Injectable } from '@angular/core';

// Models
import { RegisterModel } from '../../../components/auth/models/register.model';
import { LoginModel } from '../../../components/auth/models/login.model';
import { HttpClientService } from './http-client.service';

@Injectable()

export class AuthenticationService {
  private currentAuthToken: string;
  private currRole: string;

  constructor(private http: HttpClientService) {
  }

  public login(loginModel: LoginModel) {
    return this.http.login(loginModel)
  }

  public register(registerModel: RegisterModel) {
    return this.http.post('register', registerModel)
  }

  public logout() {
    localStorage.clear();
  }

  public isLoggedIn(): boolean {
    let authtoken: string = localStorage.getItem('authtoken');

    return authtoken === this.currentAuthToken;
  }

  get authtoken() {
    return this.currentAuthToken;
  }

  set authtoken(value: string) {
    this.currentAuthToken = value;
  }
}
