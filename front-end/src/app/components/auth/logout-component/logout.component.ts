import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  template: ''
})
export class LogoutComponent implements OnInit {
  constructor(
    private authService : AuthenticationService,
    private router : Router
  ) { }

  ngOnInit() {
    this.authService.logout();
    this.router.navigate(['/login']);

  }
}
