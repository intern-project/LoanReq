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


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin/pending', component: PendingRequestsComponent },
  { path: 'admin/reviewed', component: ReviewedRequestsComponent },
  { path: 'admin/loan-type', component: LoanTypeComponent},
  { path: 'admin/reviewed/request/:id', component: RequestComponent },
  { path: 'officer/term-calculator', component: CalculationComponent},
  { path: 'officer/make-requests', component: MakeRequestComponent }, //canActivate: [AuthGuard] Add the Guards
  { path: 'officer/all-requests', component: AllRequestComponent},
  { path: '**', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers : [AuthGuard]
})
export class AppRoutingModule { }
