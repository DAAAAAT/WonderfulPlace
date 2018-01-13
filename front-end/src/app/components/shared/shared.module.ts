import {FormsModule} from '@angular/forms';
import {sharedComponents} from './index';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NgbModule
  ],
  declarations: [...sharedComponents],
  exports: [...sharedComponents]
})

export class SharedModule {
}
