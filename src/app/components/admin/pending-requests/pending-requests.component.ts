import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Request } from '../../../shared/classes/request';
import { Router } from '@angular/router';
import { RequestService } from '../../../shared/services/request/request.service';

@Component({
  selector: 'app-pending-requests',
  templateUrl: './pending-requests.component.html',
  styleUrls: ['./pending-requests.component.css']
})
export class PendingRequestsComponent implements OnInit {

  requests: Request[];

  constructor(
    private http: HttpClient,
    private router: Router,
    public requestService: RequestService
    ) {}


  handleClick(id) {
    this.router.navigate(['/admin/request', id]);
    localStorage.setItem('RID', id);
  }

  ngOnInit() {
    this.requestService.getJSON()
    const req = localStorage.getItem('req');
    this.requests = JSON.parse(req);
  }

}
