import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoanTypeService {

  constructor(
    private http: HttpClient
  ) { }

  // add to db
  loanTypesAdd() {}

  // update db
  loanTypeUpdate() {}

  // delete from db
  loanTypeDelete() {}

  // get all from db
  loanTypesGet() {}

  // get one from db
  loanTypeGetOne() {}


}
