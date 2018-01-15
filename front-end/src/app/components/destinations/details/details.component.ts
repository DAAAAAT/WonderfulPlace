import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DestinationService} from '../../../core/services/destination.service';
import {DestinationViewModel} from '../../../core/models/view-models/destination.view-model';

@Component({
  templateUrl: './details.component.html'
})

export class DetailsComponent {
  public id: string = ''
  public content: string = ''
  public destinationModel: DestinationViewModel = new DestinationViewModel()

  constructor(private activatedRoute: ActivatedRoute,
              private destinationService: DestinationService) {
  }

  public ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id']

    this.destinationService.getDistinationById(this.id)
      .subscribe(dest => {
        this.destinationModel = dest
        console.log(this.destinationModel)
      })
  }

  public deleteDestination() {
    this.destinationService.deleteDestinationById(this.id)
  }

  public addComment() {

  }

  public deleteComment() {
  }
}
