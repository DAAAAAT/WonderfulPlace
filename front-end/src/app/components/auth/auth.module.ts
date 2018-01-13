import {NgModule} from '@angular/core';

import {authenticationComponents} from './index';

// Modules
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

// Services
import {AuthenticationService} from '../../core/services/auth/auth.service';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    ...authenticationComponents
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    ...authenticationComponents
  ],
  providers: [AuthenticationService]
})
export class AuthenticationModule {
}
