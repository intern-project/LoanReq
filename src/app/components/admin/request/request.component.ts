import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http'; 
import { Request } from '../../../shared/classes/request';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/shared/services/request/request.service';
import { SideBarComponent } from '../../common/side-bar/side-bar.component';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  @ViewChild(SideBarComponent, {static: true}) sidebar;

  requests: Request[];
  reqid = "0";
   // breadcrumb items
   items: MenuItem[];
   home: MenuItem;

  constructor(private http: HttpClient, private router: Router, public requestService: RequestService) {}

  clickAccept(){
    //update request on status
    this.router.navigate(['/admin/request']);
  }

  clickDecline(){
    //update request on status
    this.router.navigate(['/admin/pending']);
  }

  ngOnInit() {
    this.sidebar.adminRole = true;
    this.initBreadCrumb();
    this.reqid = localStorage.getItem('RID');
    this.requestService.getJSON();
    const req = localStorage.getItem('req');
    this.requests = JSON.parse(req);
  }
  // initiate bread crumb
  private initBreadCrumb() {
    this.items = [
      {label: 'Admin'},
      {label: 'Request', url: '/admin/reviewed'},
      // {label: 'Reviewed Requests'}
    ];
    this.home = {icon: 'pi pi-home'};
  }

}
