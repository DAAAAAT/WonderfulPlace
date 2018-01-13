import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../core/services/auth/auth.service'
import { CategoryViewModel } from '../../../core/models/view-models/category.view-model';
import { DestinationService } from '../../../core/services/destination.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public allCategory: CategoryViewModel[];

  constructor(private authService: AuthenticationService, private destinationService: DestinationService) { }

  ngOnInit() {
    this.destinationService.getAllCategory().subscribe(data => {
      if (data['success']) {
        this.allCategory = data['categories'];
        console.log(this.allCategory)
      }
    })
  }

  onSelect(val) {
    console.log(val)
  }

}
