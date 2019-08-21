import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/components/auth/login/login.component';
import { PendingRequestsComponent } from 'src/app/components/admin/pending-requests/pending-requests.component';
import { ReviewedRequestsComponent } from 'src/app/components/admin/reviewed-requests/reviewed-requests.component';
import { MakeRequestComponent } from 'src/app/components/officer/make-request/make-request.component';


const routes: Routes = [
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: 'admin/pending', component: PendingRequestsComponent },
  { path: 'admin/reviewed', component: ReviewedRequestsComponent },
  { path: 'officer/addrequest', component: MakeRequestComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
