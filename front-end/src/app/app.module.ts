import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
