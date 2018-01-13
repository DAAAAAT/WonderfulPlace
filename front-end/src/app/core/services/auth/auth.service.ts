import {Injectable} from '@angular/core';

// Models
import {RegisterModel} from '../../../components/auth/models/register.model';
import {LoginModel} from '../../../components/auth/models/login.model';
import {HttpClientService} from './http-client.service';
import {Router} from '@angular/router';

@Injectable()

export class AuthenticationService {
  private currentAuthToken: string;
  public currRole: string;
  public redirectUrl: string = ''

  constructor(private http: HttpClientService,
              private router: Router) {
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

    if (authtoken) {
      return true
    }
    return false
  }

  get authtoken() {
    return this.currentAuthToken;
  }

  set authtoken(value: string) {
    this.currentAuthToken = value;
  }

  public logOut(): void {
    localStorage.clear()

    this.router.navigate(['/home'])
  }

  public getUsername(): string {
    return localStorage.getItem('username')
  }
}
