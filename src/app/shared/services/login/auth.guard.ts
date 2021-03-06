import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>{
    const isAuth = this.loginService.getIsAuth();
    const role = this.loginService.getRole().role;


    if (isAuth && role === 'officer'){
     // this.router.navigate(['/login']);
      return true;
    } else {
      this.loginService.logout();
      this.router.navigate(['/login']);

    }
    // return isAuth ;
  }
}

//guardroutes
