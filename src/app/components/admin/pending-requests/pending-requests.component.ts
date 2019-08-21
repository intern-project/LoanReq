import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Request } from '../../../shared/classes/request';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pending-requests',
  templateUrl: './pending-requests.component.html',
  styleUrls: ['./pending-requests.component.css']
})
export class PendingRequestsComponent implements OnInit {

  private _jsonURL = '../../../../assets/requests.json';
  requests: Request[];

  constructor(
    private http: HttpClient,
    private router: Router) {
    this.getJSON().subscribe(data => {
      console.log(data.request);
      this.requests = data.request;
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  handleClick(id) {
    this.router.navigate(['/request', id]);
    localStorage.setItem('RID', id);
  }

  ngOnInit() {

  }

}
