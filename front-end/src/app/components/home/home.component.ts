import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { DestinationService } from '../../core/services/destination.service';
import { DestinationViewModel } from '../../core/models/view-models/destination.view-model';
import { PopupComponent } from './popup-window/popup-window.component';

@Component({
  templateUrl: './home.components.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // google maps zoom level
  zoom: number = 7;

  // initial center position for the map
  lat: number = 42.621834;
  lng: number = 25.395756;
  public destinationModel: DestinationViewModel[];

  constructor(private destinationService: DestinationService) {

  }
  ngOnInit() {
    this.destinationService.getAllDestinations().subscribe(data => {
      if (data['success']) {
        this.destinationModel = data['topDestinations'];
        console.log(this.destinationModel)
      }
    })
  }

  public clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
}