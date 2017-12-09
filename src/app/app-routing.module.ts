import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PageComponent } from './page/page.component';
import { CarsresultComponent } from './carsresult/carsresult.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'page'},
  {path: 'about', component: AboutComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: PageComponent},
  {path: 'carsresult', component: CarsresultComponent},
  {path: 'account', component: AccountComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
