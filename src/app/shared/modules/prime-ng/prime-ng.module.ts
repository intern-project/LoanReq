import { NgModule } from '@angular/core';
import {SlideMenuModule} from 'primeng/slidemenu';
import {SidebarModule} from 'primeng/sidebar';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {ListboxModule} from 'primeng/listbox';
import {OrderListModule} from 'primeng/orderlist';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {DropdownModule} from 'primeng/dropdown';
import {PanelMenuModule} from 'primeng/panelmenu';







@NgModule({
  exports: [
    SlideMenuModule,
    CardModule,
    TableModule,
    ButtonModule,
    SidebarModule,
    ListboxModule,
    OrderListModule,
    PanelMenuModule,
    MessagesModule,
    MessageModule,
    TableModule,
    DropdownModule,
  ],
})
export class PrimeNgModule { }
