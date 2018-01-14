import {Injectable} from '@angular/core';
import {HttpClientService} from './auth/http-client.service';
import {DestinationInputModel} from '../models/view-models/destination-input.model';
import {CategoryViewModel} from '../models/view-models/category.view-model';

@Injectable()

export class DestinationService {
  constructor(private httpClient: HttpClientService) {
  }

  public getAllDestinations() {
    return this.httpClient.get('destinations')
  }

  public getMyDestinations() {
    return this.httpClient.get('profile/myVisitedDestination');
  }

  public published(destinationModel: DestinationInputModel) {
    return this.httpClient.post('admin/addDestination', destinationModel)
  }

  public getAllCategory() {
    return this.httpClient.get('admin/getAllCategories');
  }

  public createCategory(categoryModel: CategoryViewModel) {
    return this.httpClient.post('admin/createCategory', categoryModel)
  }

  public getDistinationById(id: string) {
    return this.httpClient.get('destinations/' + id)
  }

  public deleteDestinationById(id: string) {
    return this.httpClient.delete('destinations/deleteDestination/', id)
  }

  public addComment() {

  }
}
