import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {RegisterFormComponent} from './components/auth/register-form/register-form.component';
import {LoginFormComponent} from './components/auth/login-form/login-form.component';
import {WishListComponent} from './components/wish-list/wish-list.component';
import {AllDestinationsComponent} from './components/destinations/all-destinations/all-destinations.component';
import {MyDestinationsComponent} from './components/destinations/my-destinations/my-destinations.component';
import {PublishDestinationComponent} from './components/destinations/publish-destination/publish-destination.component';
import {LoginFormGuard, AdminGuard, AuthGuard} from './core/guards';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'publish', component: PublishDestinationComponent},
  {path: 'myDestinations', component: MyDestinationsComponent,},
  {path: 'allDestinations', component: AllDestinationsComponent},
  {path: 'wishList', component: WishListComponent,},
  {path: 'register', component: RegisterFormComponent},
  {path: 'login', component: LoginFormComponent, }
]
