import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './shared/modules/routing/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { CalculationComponent } from './components/officer/calculation/calculation.component';
import { PendingRequestsComponent } from './components/admin/pending-requests/pending-requests.component';
import { PrimeNgModule } from './shared/modules/prime-ng/prime-ng.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { ReviewedRequestsComponent } from './components/admin/reviewed-requests/reviewed-requests.component';
import { AuthInterceptor } from './shared/services/login/auth-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestComponent } from './components/admin/request/request.component';
import { MakeRequestComponent } from './components/officer/make-request/make-request.component';
import { LoanTypeComponent } from './components/admin/loan-type/loan-type.component';
import { SideBarComponent } from './common/side-bar/side-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FileUploadModule} from 'primeng/fileupload';




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
    ReactiveFormsModule,
    AppRoutingModule,
    PrimeNgModule,
    AngularFontAwesomeModule,
    FileUploadModule,


    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
