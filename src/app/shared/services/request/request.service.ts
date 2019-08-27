import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { LoginData } from '../../classes/login';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private responseData:any;
  private loanData:any;

  constructor(private http: HttpClient) { }

  getAllRequests() {
    
  }

  add({severity: string, summary: sum, detail: any}){


  }

  // addLoan(Req) {

  //   console.log("create user in database called");
  //   let headers = new HttpHeaders();
  //   headers.append("Content-Type", "application/json");
  //   var data = { Req }

  //   return this.http.post(environment.apiBaseUrl + "addLoan", data, { headers: headers }).subscribe((res: any) => {
  //     console.log(res)

  //     this.responseData = res;

  //   });


  // }

  addLoan(data:any){
    console.log("came to make-request service");
    console.log(data);
     this.loanData= {data: data};
     console.log(this.loanData);

    this.http.post<{token: string}>('http://localhost:3000/api/users/signin',this.loanData).subscribe((response)=>{

    });


  }

}
