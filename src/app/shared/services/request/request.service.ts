import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  getAllRequests() {
    
  }

  add({severity: string, summary: sum, detail: any}){


  }
}
