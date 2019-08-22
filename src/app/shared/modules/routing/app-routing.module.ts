import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/components/auth/login/login.component';
import { PendingRequestsComponent } from 'src/app/components/admin/pending-requests/pending-requests.component';
import { ReviewedRequestsComponent } from 'src/app/components/admin/reviewed-requests/reviewed-requests.component';
import { RequestComponent } from 'src/app/components/admin/request/request.component';
import {MakeRequestComponent} from 'src/app/components/officer/make-request/make-request.component';
import { LoanTypeComponent } from 'src/app/components/admin/loan-type/loan-type.component';


const routes: Routes = [
  { path: 'admin/pending', component: PendingRequestsComponent },
  { path: 'admin/reviewed', component: ReviewedRequestsComponent },
  { path: 'admin/loan-type', component: LoanTypeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'admin/request/:id', component: RequestComponent },
  { path: 'makeReq', component: MakeRequestComponent },
  { path: '**', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
