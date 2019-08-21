import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/components/auth/login/login.component';
import { PendingRequestsComponent } from 'src/app/components/admin/pending-requests/pending-requests.component';
import { ReviewedRequestsComponent } from 'src/app/components/admin/reviewed-requests/reviewed-requests.component';
import {MakeRequestComponent} from 'src/app/components/officer/make-request/make-request.component';


const routes: Routes = [
  { path: 'pending', component: PendingRequestsComponent },
  { path: 'reviewed', component: ReviewedRequestsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'makeReq', component: MakeRequestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
