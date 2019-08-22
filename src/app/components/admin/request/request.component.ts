import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http'; 
import { Request } from '../../../shared/classes/request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  private _jsonURL = '../../../../assets/requests.json';
  requests: Request[];
  reqid = "0";

  constructor(private http: HttpClient, private router: Router) {
    this.getJSON().subscribe(data => {
      console.log(data.request);
      this.requests = data.request;
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  clickAccept(){
    //update request on status
    this.router.navigate(['/admin/pending']);
  }

  clickDecline(){
    //update request on status
    this.router.navigate(['/admin/pending']);
  }

  ngOnInit() {
    this.reqid = localStorage.getItem('RID');
  }

}
