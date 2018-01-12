import {NgModule} from '@angular/core';
import {allArticles} from './index';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DestinationService} from '../../core/services/destination.service';

@NgModule({
  declarations: [...allArticles],
  exports: [...allArticles],
  providers: [DestinationService],
  imports: [
    CommonModule,
    FormsModule,
  ]
})

export class DestinationModule {
}
