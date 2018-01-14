import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DestinationService} from '../../../core/services/destination.service';
import {CategoryViewModel} from '../../../core/models/view-models/category.view-model';

@Component({
  selector: 'app-publish-destination',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']

})
export class CreateCategoryComponent implements OnInit {
  public categoryModel : CategoryViewModel;
  public addCategorySuccess : boolean;
  public addCategoryFail : boolean;
  public failMessage : string;


  constructor(
    private destinationService : DestinationService,
    private router : Router
  ) {
    this.categoryModel = new CategoryViewModel();
  }

  ngOnInit() {

  }


  createCategory() : void {
    this.destinationService.createCategory(this.categoryModel).subscribe(data => {
      console.log(data);
      if(data['success']){
        this.successfulAddCategory();
        window.location.reload();
      }else{
        this.addCategoryFail  = true;
        this.failMessage = data.message;
      }
    });

  }

  successfulAddCategory() : void {
    this.addCategorySuccess = true;
    this.router.navigate(['/']);
  }

}


