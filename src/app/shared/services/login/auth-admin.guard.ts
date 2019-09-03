import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>{
    const isAuth = this.loginService.getIsAuth();
    const role = this.loginService.getRole().role;


    if (isAuth && role === 'Admin'){
     // this.router.navigate(['/login']);
      return true;
    } else {
      this.loginService.logout();
      this.router.navigate(['/login']);

    }
    // return isAuth ;
  }

}
