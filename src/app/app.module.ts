import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule,HTTP_INTERCEPTORS,HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './shared/modules/routing/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { CalculationComponent } from './components/officer/calculation/calculation.component';
import { PendingRequestsComponent } from './components/admin/pending-requests/pending-requests.component';
import { PrimeNgModule } from './shared/modules/prime-ng/prime-ng.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { ReviewedRequestsComponent } from './components/admin/reviewed-requests/reviewed-requests.component';
import { AuthInterceptor } from './shared/services/login/auth-interceptor';
import { RequestComponent } from './components/admin/request/request.component';
import { MakeRequestComponent } from './components/officer/make-request/make-request.component';
import { LoanTypeComponent } from './components/admin/loan-type/loan-type.component';
import { SideBarComponent } from './common/side-bar/side-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FileUploadModule} from 'primeng/fileupload';
import {SidebarModule} from 'primeng/sidebar';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {StepsModule} from 'primeng/steps';
import {MenuItem} from 'primeng/api';
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
    SidebarModule,
    CardModule,
    InputTextModule,
    StepsModule,


    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpClient,
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
