import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoanType } from '../../classes/loan-type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanTypeService {

  loanTypeUrl = 'https://localhost:5001/api/LoanTypes';

  constructor(
    private http: HttpClient
  ) { }

  // add to db
  loanTypesAdd(loanType: LoanType): Observable<LoanType> {
    return this.http.post<LoanType>(this.loanTypeUrl, loanType);
  }

  // update db
  loanTypeUpdate(loanType: LoanType): Observable<LoanType> {
      const id = loanType.id;
      const url = `${this.loanTypeUrl}/${id}`;
      console.log(url + ' ' + id);
      console.log(this.http.put<LoanType>(url, loanType));
      return this.http.put<LoanType>(url, loanType);
  }

  // delete from db
  loanTypeDelete(id: number): Observable<{}> {
    const url = `${this.loanTypeUrl}/${id}`;
    return this.http.delete(url);
  }

  // get all from db
  loanTypesGet(): Observable<LoanType[]> {
    return this.http.get<LoanType[]>(this.loanTypeUrl);
  }

  // get one from db
  loanTypeGetOne() {}



}
