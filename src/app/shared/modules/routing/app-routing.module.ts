import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/components/auth/login/login.component';
import { PendingRequestsComponent } from 'src/app/components/admin/pending-requests/pending-requests.component';
import { ReviewedRequestsComponent } from 'src/app/components/admin/reviewed-requests/reviewed-requests.component';
import { RequestComponent } from 'src/app/components/admin/request/request.component';
import {MakeRequestComponent} from 'src/app/components/officer/make-request/make-request.component';
import { LoanTypeComponent } from 'src/app/components/admin/loan-type/loan-type.component';
import { AuthGuard } from '../../services/login/auth.guard';
import { CalculationComponent } from 'src/app/components/officer/calculation/calculation.component';
import { AllRequestComponent } from 'src/app/components/officer/all-request/all-request.component';
import { AuthAdminGuard } from '../../services/login/auth-admin.guard';
import { NotFoundComponent } from 'src/app/components/common/not-found/not-found.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin/pending', component: PendingRequestsComponent ,canActivate: [AuthAdminGuard] }, //
  { path: 'admin/reviewed', component: ReviewedRequestsComponent ,canActivate: [AuthAdminGuard] },
  { path: 'admin/loan-type', component: LoanTypeComponent ,canActivate: [AuthAdminGuard]},
  { path: 'admin/reviewed/request/:id', component: RequestComponent,canActivate: [AuthAdminGuard] },
  { path: 'officer/term-calculator', component: CalculationComponent, canActivate: [AuthGuard]},
  { path: 'officer/make-requests', component: MakeRequestComponent, canActivate: [AuthGuard]},
  { path: 'officer/all-requests', component: AllRequestComponent, canActivate: [AuthGuard]},
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers : [AuthGuard]
})
export class AppRoutingModule { }
