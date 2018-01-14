import {Injectable} from '@angular/core'
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'
import {AuthenticationService} from '../services/auth/auth.service';

@Injectable()

export class AdminGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthenticationService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkRole()
  }

  checkRole(): boolean {
    let role: string = localStorage.role

    if (role === 'Admin') {
      return true
    }
    console.log('Unauthorized user!')
    this.router.navigate(['/home'])

    return false
  }
}
