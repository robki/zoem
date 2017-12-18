import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PageComponent } from './page/page.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { CarsresultComponent } from './carsresult/carsresult.component';
import { LoginComponent } from './login/login.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DatepickerComponent } from './datepicker/datepicker.component';
import {FormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AccountComponent } from './account/account.component';
import { DashboardnavComponent } from './dashboardnav/dashboardnav.component';
import { MycarsComponent } from './mycars/mycars.component';
import { AccpaymentComponent } from './accpayment/accpayment.component';
import { CarrequestComponent } from './carrequest/carrequest.component';
import { CarpageComponent } from './carpage/carpage.component';
import { AddcarComponent } from './addcar/addcar.component';
import { MyrentalsComponent } from './myrentals/myrentals.component';

//material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageComponent,
    FooterComponent,
    AboutComponent,
    SignupComponent,
    CarsresultComponent,
    LoginComponent,
    DatepickerComponent,
    AccountComponent,
    DashboardnavComponent,
    MycarsComponent,
    AccpaymentComponent,
    CarrequestComponent,
    CarpageComponent,
    AddcarComponent,
    MyrentalsComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
