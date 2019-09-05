import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  loanTypeUpdate(loanType: LoanType) {
      const header = new HttpHeaders();
      header.set('Content-Type', 'application/json');
      const options = { headers: header};
      const id = loanType.id;
      const url = `${this.loanTypeUrl}/${id}`;
      this.http.put<LoanType>(url, loanType, options)
        .subscribe(val => {console.log('Successfully Updated.'); } ,
                  response => { console.log('Error Occoured -->', response); },
        );
  }

  // delete from db
  loanTypeDelete(id: number) {
    const url = `${this.loanTypeUrl}/${id}`;
    this.http.delete(url).subscribe();
  }

  // get all from db
  loanTypesGet(): Observable<LoanType[]> {
    return this.http.get<LoanType[]>(this.loanTypeUrl);
  }

  // get one from db
  loanTypeGetOne() {}



}
