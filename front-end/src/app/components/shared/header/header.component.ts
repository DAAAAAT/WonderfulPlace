import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../core/services/auth/auth.service'
import {CategoryViewModel} from '../../../core/models/view-models/category.view-model';
import {DestinationService} from '../../../core/services/destination.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public allCategory: CategoryViewModel[];
  public isLogged: boolean = false;
  public isAdmin: boolean = false;
  public username: string;

  constructor(private authService: AuthenticationService, private destinationService: DestinationService) {
    this.isLogged = authService.isLoggedIn()
  }

  ngOnInit() {
    this.destinationService.getAllCategory().subscribe(data => {
      if (data['success']) {
        this.allCategory = data['categories'];
        console.log(this.allCategory)
      }
    });


    if(this.authService.currRole === "Admin"){
        this.isAdmin = true;
    }

    this.username = localStorage.getItem('username');
  }

  public onSelect(val) {
    console.log(val)
  }

  public logOut(): void {
    this.authService.logOut()
  }
}
