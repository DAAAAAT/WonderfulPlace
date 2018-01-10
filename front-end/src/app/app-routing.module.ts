import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './components/home/home.component';
import { RegisterFormComponent } from './components/auth/register-form/register-form.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { LogoutComponent } from './components/auth/logout-component/logout.component';

// Guards



const routes : Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutesModule {  }
