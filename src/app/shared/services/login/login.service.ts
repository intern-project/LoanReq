import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
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

    this.http.post<{token: string}>('http://localhost:3000/api/users/signin',loginData).subscribe((response)=>{
      const token = response.token;
      console.log(token);
      this.token=token;
      if(token){
        this.isAuthenticated = true;
        this.authStateListner.next(true);
        this.saveAuthData(token);
        this.router.navigate(['/']);
      }

    });


  }

private saveAuthData(token: string){
    localStorage.setItem('token',token);
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




}
