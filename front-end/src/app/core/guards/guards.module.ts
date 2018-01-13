import {NgModule} from '@angular/core';
import {LoginFormGuard, AdminGuard, AuthGuard} from './';

@NgModule({
  providers: [AuthGuard, AdminGuard, LoginFormGuard]
})

export class GuardsModule {
}
