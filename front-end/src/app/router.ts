import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {RegisterFormComponent} from './components/auth/register-form/register-form.component';
import {LoginFormComponent} from './components/auth/login-form/login-form.component';
import {WishListComponent} from './components/wish-list/wish-list.component';
import {AllDestinationsComponent} from './components/destinations/all-destinations/all-destinations.component';
import {MyDestinationsComponent} from './components/destinations/my-destinations/my-destinations.component';
import {PublishDestinationComponent} from './components/destinations/publish-destination/publish-destination.component';
import {LoginFormGuard, AdminGuard, AuthGuard} from './core/guards';
import {DetailsComponent} from './components/destinations/details/details.component';
import {CreateCategoryComponent} from "./components/categories/create-category/create-category.component";

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'publish', component: PublishDestinationComponent, canActivate: [AdminGuard]},
  {path: 'myDestinations', component: MyDestinationsComponent, canActivate: [AuthGuard]},
  {path: 'allDestinations', component: AllDestinationsComponent},
  {path: 'destination/:id', component: DetailsComponent},
  {path: 'wishList', component: WishListComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterFormComponent},
  {path: 'login', component: LoginFormComponent, canActivate: [LoginFormGuard]},
  {path: 'addCategory', component: CreateCategoryComponent}
]
