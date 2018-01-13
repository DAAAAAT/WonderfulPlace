import { Component } from '@angular/core';
import { DestinationViewModel } from '../../../core/models/view-models/destination.view-model';
import { DestinationService } from '../../../core/services/destination.service';

@Component({
  templateUrl: './my-destinations.component.html',
  styleUrls: ['./my-destinations.component.scss']
})

export class MyDestinationsComponent {
  public destinationModel: DestinationViewModel[] = []

  constructor(private destinationService: DestinationService) {
  }
  public ngOnInit() {
    this.destinationService.getMyDestinations()
      .subscribe(destinations => {
        this.destinationModel = destinations.topDestinations
      })
  }
}
