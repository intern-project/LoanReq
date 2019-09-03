import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { LoginData } from '../../classes/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private authStateListner = new Subject<boolean>();
  private isAuthenticated = false;
  private token: string;

  constructor(private http: HttpClient , private router: Router) { }


  getAuthStatusListner(){
    return this.authStateListner.asObservable();
  }


  getToken(){
    return this.token;
  }

  getIsAuth(){
    return this.isAuthenticated ;
  }


   autoAuthUser(){
    const authInformation = this.getAuthData();
    if(!authInformation){
      return;
  }
    this.token = authInformation.token;
    this.isAuthenticated = true;
    this.authStateListner.next(true);

  }

  onLogin(email: string , password: string){

    const loginData:LoginData = {email: email, password: password};

    this.http.post<{token: string, role:string}>('https://localhost:5001/api/login', loginData).subscribe((response)=>{
      const token = response.token;
      const role = response.role;
      if (role === 'Admin') {
        this.router.navigate(['admin/pending']);
      }
      if (role === 'officer') {
        this.router.navigate(['officer/make-requests']);
      }
      console.log(token);
      console.log(role);
      this.token=token;
      if(token){
        this.isAuthenticated = true;
        this.authStateListner.next(true);
        this.saveAuthData(token,role);
      }

    });


  }


  logout(){

    this.token = null;
    this.isAuthenticated = false;
    this.authStateListner.next(false);
    this.clearAuthData();
    this.router.navigate(['/']);
  }

private saveAuthData(token: string,role: string){
    localStorage.setItem('token',token);
    localStorage.setItem('role',role);
}


private clearAuthData(){
  localStorage.removeItem("token");
}

private getAuthData(){
  const token = localStorage.getItem("token");
  if(!token){
    return;
  }
  return {
    token: token
  }
}

public getRole(){
  const role = localStorage.getItem("role");
  if(!role){
    return;
  }
  return {
    role: role
  }
}




}
