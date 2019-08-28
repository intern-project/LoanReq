import { Component, OnInit } from '@angular/core';
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
  reqid = 0;

  constructor(private http: HttpClient, public router: Router, public requestService:RequestService) {}

  public clickAccept(requ: Request){
    requ.accepted = 1;
    requ.pending = 0;
    requ.declined = 0;
    requ.rid = this.reqid;

    //update request on status
    this.requestService.UpdateLOAN(requ);
    console.log("Clicked")
  }

  public clickDecline(requ: Request){
    requ.accepted = 0;
    requ.pending = 0;
    requ.declined = 1;
    requ.rid = this.reqid;

    //update request on status
    this.requestService.UpdateLOAN(requ);
  }

  ngOnInit() {
    this.reqid = parseInt(localStorage.getItem('RID'));
    this.requestService.getJSON();
    const req = localStorage.getItem('req');
    this.requests = JSON.parse(req);
  }

}
