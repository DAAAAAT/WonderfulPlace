import {Component} from '@angular/core';
import {DestinationViewModel} from '../../../core/models/view-models/destination.view-model';
import {DestinationService} from '../../../core/services/destination.service';

@Component({
  templateUrl: './all-destinations.component.html'
})

export class AllDestinationsComponent {
  public destinationModel: DestinationViewModel = new DestinationViewModel()

  constructor(private destinationService: DestinationService) {
  }

  public ngOnInit() {
    this.destinationService.getAllDestinations()
      .subscribe(destinations => {
        this.destinationModel = destinations
      })
  }
}
