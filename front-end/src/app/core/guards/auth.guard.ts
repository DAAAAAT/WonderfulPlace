import {Injectable} from '@angular/core'
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'
import {TokenService} from '../services/auth/token.service';
import {AuthenticationService} from '../services/auth/auth.service';

@Injectable()

export class AuthGuard implements CanActivate {
  constructor(private router: Router,
              private tokenService: TokenService,
              private authService: AuthenticationService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url

    return this.checkLogin(url)
  }

  checkLogin(url: string): boolean {
    let token = this.tokenService.getToken()

    if (token) {
      return true
    }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url
    this.router.navigate(['login'])

    return false
  }
}
