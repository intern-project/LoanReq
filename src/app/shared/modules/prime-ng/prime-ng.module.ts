import { NgModule } from '@angular/core';
import {SlideMenuModule} from 'primeng/slidemenu';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';



@NgModule({
  exports: [
    SlideMenuModule,
    CardModule,
    TableModule,
    ButtonModule
  ],
})
export class PrimeNgModule { }
