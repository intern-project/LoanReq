import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './shared/modules/routing/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { CalculationComponent } from './components/officer/calculation/calculation.component';
import { PendingRequestsComponent } from './components/admin/pending-requests/pending-requests.component';
import { ReviewedRequestsComponent } from './components/admin/reviewed-requests/reviewed-requests.component';
import { PrimeNgModule } from './shared/modules/prime-ng/prime-ng.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RequestComponent } from './components/admin/request/request.component';
import { MakeRequestComponent } from './components/officer/make-request/make-request.component';
import { LoanTypeComponent } from './components/admin/loan-type/loan-type.component';
import { SideBarComponent } from './common/side-bar/side-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalculationComponent,
    PendingRequestsComponent,
    ReviewedRequestsComponent,
    RequestComponent,
    MakeRequestComponent,
    LoanTypeComponent,
    SideBarComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimeNgModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
