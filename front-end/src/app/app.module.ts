import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationModule } from './components/auth/auth.module';
import { HomeComponent } from './components/home/home.component';
import { AppRoutesModule } from './app-routing.module';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PublishDestinationComponent } from './components/destinations/publish-destination/publish-destination.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { AllDestinationsComponent } from './components/destinations/all-destinations/all-destinations.component';
import { MyDestinationsComponent } from './components/destinations/my-destinations/my-destinations.component';

//Google Maps module
import { AgmCoreModule } from '@agm/core'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PublishDestinationComponent,
    WishListComponent,
    AllDestinationsComponent,
    MyDestinationsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AuthenticationModule,
    AppRoutesModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD829mBycxCy4Ws_06Pj3PVw4fij-h_s1o'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
