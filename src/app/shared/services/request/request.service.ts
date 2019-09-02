import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Request } from '../../classes/request';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private _jsonURL = 'https://localhost:5001/api/request';
  requests: Request[];

  private responseData: any;
  private loanData: any;
  mkreq: any = {};


  constructor(private http: HttpClient, public router:Router) { }

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
// Accept Loan Requst
  UpdateLOAN(request: Request) {
    const header = new HttpHeaders();
    header.set('content-Type', 'application/json');
    const options = { headers: header };
    const id = request.rid;
    const url = `${this._jsonURL}/${id}`;
    this.http.put<Request>(url, request, options).
      subscribe(val => {console.log('done')
                        this.router.navigate(['/admin/reviewed'])
                        },
        response => {console.log("Error", response)})
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


  addLoan(data: Request): Observable<Request> {
    return this.http.post<Request>(this.jsonURL, data);

  }

}
