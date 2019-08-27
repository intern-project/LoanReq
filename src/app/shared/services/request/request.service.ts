import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Request } from '../../classes/request';

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
  private _jsonURL = 'https://localhost:5001/api/request/';
  requests: Request[];

  private responseData:any;

  constructor(private http: HttpClient) { }

  //Get All
  getJSON(){

    let promise = new Promise((resolve, reject) => {
      this.http.get(this._jsonURL)
        .toPromise()
        .then(
          res => { // Success
            this.requests = res as Request[]
            console.log(this.requests);
            localStorage.setItem('req', JSON.stringify(this.requests));
            resolve();
          }
        );
    });
    return promise;
  }

  acceptLOAN() {
    
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
