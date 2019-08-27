import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/shared/services/request/request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reviewed-requests',
  templateUrl: './reviewed-requests.component.html',
  styleUrls: ['./reviewed-requests.component.css']
})
export class ReviewedRequestsComponent implements OnInit {
  requests: Request[];

  constructor(public requestService: RequestService, public router: Router) { }

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
