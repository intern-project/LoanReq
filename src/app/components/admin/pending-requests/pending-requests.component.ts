import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Request } from '../../../shared/classes/request';
import { Router } from '@angular/router';
import { RequestService } from '../../../shared/services/request/request.service';
import { SideBarComponent } from '../../common/side-bar/side-bar.component';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-pending-requests',
  templateUrl: './pending-requests.component.html',
  styleUrls: ['./pending-requests.component.css']
})
export class PendingRequestsComponent implements OnInit {

  @ViewChild(SideBarComponent, {static: true}) sidebar;
  
  requests: Request[];
  // breadcrumb items
  items: MenuItem[];
  home: MenuItem;

  constructor(
    private http: HttpClient,
    private router: Router,
    public requestService: RequestService
    ) {}


  handleClick(id, doc) {
    this.router.navigate(['/admin/reviewed/request', id]);
    localStorage.setItem('RID', id);
    localStorage.setItem('path', doc);
  }

  ngOnInit() {
    this.sidebar.adminRole = true;
    this.initBreadCrumb();
    this.requestService.getJSON()
    const req = localStorage.getItem('req');
    this.requests = JSON.parse(req);
  }

  // initiate bread crumb
  private initBreadCrumb() {
    this.items = [
      {label: 'Admin'},
      {label: 'Pending Requests', url: '/admin/pending'}
    ];
    this.home = {icon: 'pi pi-home'};
  }

}
