import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthenticationModule} from './components/auth/auth.module';
import {HomeComponent} from './components/home/home.component';
import {routes} from './router';
import {WishListComponent} from './components/wish-list/wish-list.component';
import {SharedModule} from './components/shared/shared.module';
import {DestinationModule} from './components/destinations/destination.module';
import {HttpClientService} from './core/services/auth/http-client.service';
import {TokenService} from './core/services/auth/token.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//Google Maps module
import {AgmCoreModule} from '@agm/core'
import {GuardsModule} from './core/guards/guards.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WishListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AuthenticationModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD829mBycxCy4Ws_06Pj3PVw4fij-h_s1o'
    }),
    DestinationModule,
    SharedModule,
    NgbModule.forRoot(),
    GuardsModule
  ],
  providers: [HttpClientService, TokenService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
