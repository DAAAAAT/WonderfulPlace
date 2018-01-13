import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DestinationService} from '../../../core/services/destination.service';
import {CategoryViewModel} from '../../../core/models/view-models/category.view-model';
import {DestinationInputModel} from '../../../core/models/view-models/destination-input.model';

@Component({
  selector: 'app-publish-destination',
  templateUrl: './publish-destination.component.html',
  styleUrls: ['./publish-destination.component.scss']
})
export class PublishDestinationComponent implements OnInit {
  public destinationModel : DestinationInputModel;
  public categoryModel : CategoryViewModel;
  public addDestinationSuccess : boolean;
  public addDestinationFail : boolean;
  public failMessage : string;
  public allCategory : CategoryViewModel[];


  constructor(
    private destinationService : DestinationService,
    private router : Router
  ) {
    this.categoryModel = new CategoryViewModel();
    this.destinationModel = new DestinationInputModel();
  }

  ngOnInit() {
    this.destinationService.getAllCategory().subscribe(data => {
      if(data['success']){
        this.allCategory = data['categories'];
      }
    })
  }


  createDestination() : void {
    console.log(this.destinationModel);
    this.destinationService.published(this.destinationModel).subscribe(data => {
      console.log(data);
      if(data['success']){
        this.successfulAddDestination();
      }else{
        this.addDestinationFail = true;
        this.failMessage = data.message;
      }
    })
  }

  successfulAddDestination() : void {
    this.addDestinationSuccess = true;
    this.router.navigate(['/']);
  }

}


