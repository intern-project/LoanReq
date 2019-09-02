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
  sidebarVisible = true;
  adminRole = false;
  officerRole = false ;

  constructor(
    private router: Router,
  ) {
    this.admin = [
      {label: 'Pending Request',
       icon: 'pi pi-clock',
       routerLink: ['/admin/pending'],
       style: {'margin-bottom': '10px', 'padding-top': '1em'}},
      {label: 'Reviewed Request',
       icon: 'pi pi-check',
       routerLink: ['/admin/reviewed'],
       style: {'margin-bottom': '10px'}},
      {label: 'Loan Types',
       icon: 'pi pi-dollar',
       routerLink: ['/admin/loan-type'],
       style: {'margin-bottom': '10px'}},
    ];
    this.officer = [
      {label: 'Loan Request Form',
       icon: 'pi pi-plus-circle',
       routerLink: ['/officer/make-requests'],
       style: {'margin-bottom': '20px', 'background-color': 'black'}},
      {label: 'All Requests',
       icon: 'pi pi-list',
       routerLink: ['/officer/all-requests'],
       style: {'margin-bottom': '20px'}},
      {label: 'Term Calculator',
       icon: 'pi pi-cog',
       routerLink: ['/officer/term-calculator'],
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
