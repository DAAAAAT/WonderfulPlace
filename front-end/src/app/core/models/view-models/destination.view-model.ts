import {CategoryViewModel} from './category.view-model';

export class DestinationViewModel {
  constructor(
    public name: string,
    public images: any[],
    public latitude: number,
    public longitude: number,
    public city: string,
    public country: string,
    public description: string,
    public author: string,
    public comments: string,
    public category: CategoryViewModel,
    public rating: number
  ){ }
}
