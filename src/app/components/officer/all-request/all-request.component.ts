import { Component, OnInit, ViewChild } from '@angular/core';
import { SideBarComponent } from '../../common/side-bar/side-bar.component';
import { RequestService } from 'src/app/shared/services/request/request.service';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-all-request',
  templateUrl: './all-request.component.html',
  styleUrls: ['./all-request.component.css']
})


export class AllRequestComponent implements OnInit {

  @ViewChild(SideBarComponent, {static: true}) sidebar;

  requests: Request[];
  // breadcrumb items
  items: MenuItem[];
  home: MenuItem;

  constructor(public requestService: RequestService, public router: Router) { }

  ngOnInit() {
    this.sidebar.officerRole = true;
    this.initBreadCrumb();
    this.requestService.getJSON()
    const req = localStorage.getItem('req');
    this.requests = JSON.parse(req);
  }
  // initiate bread crumb
  private initBreadCrumb() {
    this.items = [
      {label: 'Officer'},
      {label: 'All Requests', url: '/officer/all-requests'}
    ];
    this.home = {icon: 'pi pi-home'};
  }
  handleClick(id) {
    this.router.navigate(['/admin/request', id]);
    localStorage.setItem('RID', id);
  }
  
}
