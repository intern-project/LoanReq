import { Component, OnInit } from '@angular/core';
import {  MenuItem } from 'primeng/api';
import { Route, Router } from '@angular/router';
import {SidebarModule} from 'primeng/sidebar';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  admin: MenuItem[];
  officer: MenuItem[];
  adminRole = true;
  officerRole = false;

  constructor(
    private router: Router,
  ) {
    this.admin = [
      {label: 'Pending Request',
       icon: 'pi pi-clock',
       routerLink: ['/admin/pending'],
       style: {'margin-bottom': '10px', 'padding-top': '1em'}},
      {label: 'Approved Request',
       icon: 'pi pi-check',
       routerLink: ['/admin/reviewed'],
       style: {'margin-bottom': '10px'}},
      {label: 'Loan Types',
       icon: 'pi pi-dollar',
       routerLink: ['/admin/loan-type'],
       style: {'margin-bottom': '10px'}},
    ];
    this.officer = [
      {label: 'Pending Request',
       icon: 'pi pi-clock',
       routerLink: ['/admin/pending'],
       style: {'margin-bottom': '20px', 'background-color': 'black'}},
      {label: 'Approved Request',
       icon: 'pi pi-check',
       routerLink: ['/admin/reviewed'],
       style: {'margin-bottom': '20px'}},
      {label: 'Loan Types',
       icon: 'pi pi-dollar',
       routerLink: [''],
       style: {'margin-bottom': '20px'}},
    ];

  }

  ngOnInit() {
  }

  logout() {
    console.log('click');
    this.router.navigate(['/login']);
  }

}
