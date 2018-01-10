import { Component } from '@angular/core';
import {AuthenticationService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wonderful world';
  constructor(
    private authService : AuthenticationService
  ) { }
}
