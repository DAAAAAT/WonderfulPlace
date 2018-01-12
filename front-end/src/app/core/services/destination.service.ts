import {Injectable} from '@angular/core';
import {HttpClientService} from './auth/http-client.service';

@Injectable()

export class DestinationService {
  constructor(private httpClient: HttpClientService){
  }

  public getAllDestinations() {
    return this.httpClient.get('destinations')
  }
}
