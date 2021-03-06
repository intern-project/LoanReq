import { Component, OnInit, ViewChild } from '@angular/core';
import { RequestService } from 'src/app/shared/services/request/request.service';
import { Router } from '@angular/router';
import { SideBarComponent } from '../../common/side-bar/side-bar.component';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-reviewed-requests',
  templateUrl: './reviewed-requests.component.html',
  styleUrls: ['./reviewed-requests.component.css']
})
export class ReviewedRequestsComponent implements OnInit {

  @ViewChild(SideBarComponent, {static: true}) sidebar;

  requests: Request[];
  // breadcrumb items
  items: MenuItem[];
  home: MenuItem;

  constructor(public requestService: RequestService, public router: Router) { }

  handleClick(id) {
    this.router.navigate(['admin/reviewed/request/', id]);
    localStorage.setItem('RID', id);
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
      {label: 'Reviewed Requests', url: '/admin/reviewed'}
    ];
    this.home = {icon: 'pi pi-home'};
  }

}
