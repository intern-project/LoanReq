import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router'
import { promise } from 'protractor';
import { send } from 'q';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private responseData:any;

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

}
