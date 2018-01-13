import {Injectable} from '@angular/core';
import {HttpClientService} from './auth/http-client.service';
import {DestinationInputModel} from '../models/view-models/destination-input.model';
import { retry } from 'rxjs/operators/retry';

@Injectable()

export class DestinationService {
  constructor(private httpClient: HttpClientService){
  }

  public getAllDestinations() {
    return this.httpClient.get('destinations')
  }

  public getMyDestinations(){
    return this.httpClient.get('profile/myVisitedDestination');
  }

  public published(destinationModel: DestinationInputModel) {
    return this.httpClient.post('admin/addDestination', destinationModel)
  }

  public getAllCategory() {
    return this.httpClient.get('admin/getAllCategories');
  }
}
