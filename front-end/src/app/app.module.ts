import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthenticationModule } from './components/auth/auth.module';
import { HomeComponent } from './components/home/home.component';
import { routes } from './router';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { SharedModule } from './components/shared/shared.module';
import { DestinationModule } from './components/destinations/destination.module';
import { HttpClientService } from './core/services/auth/http-client.service';
import { TokenService } from './core/services/auth/token.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { ProfileComponent } from './components/profile/profile.component';
import {CreateCategoryComponent} from './components/categories/create-category/create-category.component';
import {AgmCoreModule} from '@agm/core'
import {GuardsModule} from './core/guards/guards.module';
import {RouterModule} from '@angular/router';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WishListComponent,
    ProfileComponent,
    CreateCategoryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AuthenticationModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: environment.googleApiKey
    }),
    DestinationModule,
    SharedModule,
    NgbModule.forRoot(),
    GuardsModule,
    DestinationModule,
    AngularFontAwesomeModule
  ],
  providers: [HttpClientService, TokenService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
