import {NgModule} from '@angular/core';
import {allDestinations} from './index';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DestinationService} from '../../core/services/destination.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [...allDestinations],
  exports: [...allDestinations],
  providers: [DestinationService],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    SharedModule,
    RouterModule
  ]
})

export class DestinationModule {
}
