import {Injectable} from '@angular/core';

@Injectable()

export class TokenService {
  public getToken(): string {
    let token = localStorage.getItem('authtoken')

    if (token) {
      return token
    }
  }
}
