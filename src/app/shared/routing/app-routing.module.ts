import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/components/auth/login/login.component';
import { DashboardComponent } from 'src/app/components/admin/dashboard/dashboard.component';


const routes: Routes = [
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: 'admin-dashboard', component: DashboardComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
