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



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalculationComponent,
    PendingRequestsComponent,
    ReviewedRequestsComponent,
    RequestComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimeNgModule,
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
