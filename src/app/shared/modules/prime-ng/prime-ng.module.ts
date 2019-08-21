import { NgModule } from '@angular/core';
import {SlideMenuModule} from 'primeng/slidemenu';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';



@NgModule({
  exports: [
    SlideMenuModule,
    CardModule,
    ButtonModule
  ],
})
export class PrimeNgModule { }
