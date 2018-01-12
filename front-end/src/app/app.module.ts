import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthenticationModule} from './components/auth/auth.module';
import {HomeComponent} from './components/home/home.component';
import {AppRoutesModule} from './app-routing.module';
import {HeaderComponent} from './components/shared/header/header.component';
import {FooterComponent} from './components/shared/footer/footer.component';
import {WishListComponent} from './components/wish-list/wish-list.component';

//Google Maps module
import {AgmCoreModule} from '@agm/core'
import {DestinationModule} from './components/destinations/destination.module';
import {HttpClientService} from './core/services/auth/http-client.service';
import {TokenService} from './core/services/auth/token.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    WishListComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AuthenticationModule,
    AppRoutesModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD829mBycxCy4Ws_06Pj3PVw4fij-h_s1o'
    }),
    DestinationModule
  ],
  providers: [HttpClientService, TokenService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
