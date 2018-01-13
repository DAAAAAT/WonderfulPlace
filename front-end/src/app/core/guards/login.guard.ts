import {Injectable} from '@angular/core'
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'
import {TokenService} from '../services/auth/token.service';

@Injectable()

export class LoginFormGuard implements CanActivate {

  constructor(private router: Router,
              private tokenService: TokenService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkIsLoggedIn()
  }

  checkIsLoggedIn(): boolean {
    let token = this.tokenService.getToken()

    return token == null || token == undefined;
  }
}
