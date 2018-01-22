import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PageComponent } from './page/page.component';
import { CarsresultComponent } from './carsresult/carsresult.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { MycarsComponent } from './mycars/mycars.component';
import { AccpaymentComponent } from './accpayment/accpayment.component';
import { CarrequestComponent } from './carrequest/carrequest.component';
import { CarpageComponent } from './carpage/carpage.component';
import { AddcarComponent } from './addcar/addcar.component';
import { MyrentalsComponent } from './myrentals/myrentals.component';
import { SearchmapComponent } from './searchmap/searchmap.component';
import { CallbackComponent } from './pages/callback/callback.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'page'},
  {path: 'about', component: AboutComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: PageComponent},
  {path: 'carsresult', component: CarsresultComponent},
  {path: 'account', component: AccountComponent},
  {path: 'mycars', component: MycarsComponent},
  {path: 'accpayment', component: AccpaymentComponent},
  {path: 'carrequest', component: CarrequestComponent},
  {path: 'addcar', component: AddcarComponent},
  {path: 'myrentals', component: MyrentalsComponent},
  {path: 'searchmap', component: SearchmapComponent},
  { path: 'carpage/:id', component: CarpageComponent },
  {path: 'callback', component: CallbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
