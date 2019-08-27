import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http'; 
import { Request } from '../../../shared/classes/request';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/shared/services/request/request.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  requests: Request[];
  reqid = "0";

  constructor(private http: HttpClient, private router: Router, public requestService:RequestService) {}

  clickAccept(){
    //update request on status
    this.router.navigate(['/admin/request']);
  }

  clickDecline(){
    //update request on status
    this.router.navigate(['/admin/pending']);
  }

  ngOnInit() {
    this.reqid = localStorage.getItem('RID');
    this.requestService.getJSON()
    const req = localStorage.getItem('req');
    this.requests = JSON.parse(req);
  }

}
