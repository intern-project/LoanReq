import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './shared/routing/app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { LoginComponent } from './components/auth/login/login.component';
import { PendingRequestsComponent } from './components/admin/pending-requests/pending-requests.component';
import { ReviewedRequestsComponent } from './components/admin/reviewed-requests/reviewed-requests.component';
import {SlideMenuModule} from 'primeng/slidemenu';
import {MenuItem} from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    PendingRequestsComponent,
    ReviewedRequestsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SlideMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
