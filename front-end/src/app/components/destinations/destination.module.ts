import {NgModule} from '@angular/core';
import {allArticles} from './index';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DestinationService} from '../../core/services/destination.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [...allArticles],
  exports: [...allArticles],
  providers: [DestinationService],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    SharedModule
  ]
})

export class DestinationModule {
}
