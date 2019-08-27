import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Request } from '../../classes/request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private _jsonURL = 'https://localhost:5001/api/request/';
  requests: Request[];

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
}
