import {FormsModule} from '@angular/forms';
import {sharedComponents} from './index';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NgbModule,
    RouterModule
  ],
  declarations: [...sharedComponents],
  exports: [...sharedComponents]
})

export class SharedModule {
}
