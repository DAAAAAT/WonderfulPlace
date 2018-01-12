import {CategoryViewModel} from './category.view-model';

export class DestinationViewModel {
  name: string
  images: any[]
  latitude: number
  longitude: number
  city: string
  country: string
  description: string
  author: string
  comments: string
  category: CategoryViewModel
  rating: number
}
