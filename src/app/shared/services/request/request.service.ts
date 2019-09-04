import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Request } from '../../classes/request';
import { fileUpload } from '../../classes/fileUpload';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
   jsonURL = 'https://localhost:5001/api/Request';
   jsonURLupload = 'https://localhost:5001/api/values';
  requests: Request[];

  private responseData: any;
  private loanData: any;
  private uploaddata: any;

  constructor(private http: HttpClient, public router: Router) { }

  // Get All
  getJSON() {

    const promise = new Promise((resolve, reject) => {
      this.http.get(this.jsonURL)
        .toPromise()
        .then(
          res => { // Success
            this.requests = res as Request[];
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
    const url = `${this.jsonURL}/${id}`;
    this.http.put<Request>(url, request, options).
      subscribe(val => {console.log('done');
                        this.router.navigate(['/admin/reviewed']);
                        },
        response => {console.log('Error', response);});
  }
  
  add({severity: string, summary: sum, detail: any}) {
  }

  addLoan(data: Request): Observable<Request> {
    return this.http.post<Request>(this.jsonURL, data);
  }

  // uploadfile(data: fileUpload): Observable<fileUpload> {
  //   const header = new HttpHeaders();
  //   header.set('content-Type', 'application/json');
  //   const options = { headers: header };
  //   console.log('came to make-request service file uploader');
  //   console.log(data);
  //   this.uploaddata = {data};
  //   console.log(this.uploaddata);
  //   return this.http.post<fileUpload>(this.jsonURL, data, options);

  // } 
  uploadFile(data: File): Observable<Response > {
    const fd = new FormData();
    fd.append('image', data, data.name);
    return this.http.post<any>('https://localhost:5001/api/request/upload', fd);
  }

}
