import {CategoryViewModel} from './category.view-model';
import {CommentViewModel} from './comment.view-model';

export class DestinationViewModel {
  public _id: string
  public name: string
  public image: string
  public lat: number
  public lng: number
  public city: string
  public country: string
  public description: string
  public author: string
  public comments: CommentViewModel[]
  public category: CategoryViewModel
  public rating: number
}
