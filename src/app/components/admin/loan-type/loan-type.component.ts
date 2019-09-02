import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { SelectItem, MessageService, MenuItem, Message } from 'primeng/api';
import { LoanType } from 'src/app/shared/classes/loan-type';
import { LoanTypeService } from 'src/app/shared/services/loan-type/loan-type.service';
import { SideBarComponent } from '../../common/side-bar/side-bar.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

@Component({
  selector: 'app-loan-type',
  templateUrl: './loan-type.component.html',
  styleUrls: ['./loan-type.component.css']
})
export class LoanTypeComponent implements OnInit {

  @ViewChild(SideBarComponent, {static: true}) sidebar;

  loanTypeForm: FormGroup;
  loanTypes: LoanType[] = [];
  loanType: LoanType[];
  cloned: { [s: string]: LoanType; } = {};
  id;
  // breadcrumb items
  items: MenuItem[];
  home: MenuItem;
  // message service
  msgs: Message[] = [];

  constructor(
    public fb: FormBuilder,
    private ltService: LoanTypeService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.sidebar.adminRole = true;
    this.initBreadCrumb();
    this.initForm();
    this.getLoanTypes();
  }
  // initiate bread crumb
  private initBreadCrumb() {
    this.items = [
      {label: 'Admin  '},
      {label: 'Loan Types', url: '/admin/loan-type'}
    ];
    this.home = {icon: 'pi pi-home'};
  }
  // intiate form
  private initForm() {
    this.loanTypeForm = this.fb.group({
      id: [''],
      label: ['', Validators.required],
      rate: ['', Validators.required]
    });
  }
  // get loan types from db
  private getLoanTypes(): void {
    this.ltService.loanTypesGet().subscribe(item => (this.loanTypes.push(...item) ));
  }
  // form submission add to db
  onSubmit() {
    this.loanTypeForm.get('id').setValue(0);
    const data = this.loanTypeForm.value;
    this.ltService.loanTypesAdd(data).
      subscribe(val => {
                  console.log('Successfully Added.');
                  this.loanTypes.push(data);
                  this.msgs = [];
                  this.msgs.push({severity: 'success', summary: 'Success Message : ', detail: 'Submitting Successfully!'});
                },
                response => {
                  console.log('Error Occoured -->', response);
                  this.msgs = [];
                  this.msgs.push({severity: 'error', summary: 'Error Message : ', detail: 'Submitting Failed!'});
                 },
      );
    this.initForm();
  }
  // form update
  private onUpdate(lType: LoanType) {
    this.ltService.loanTypeUpdate(lType);
  }
  // form submission cancel
  onCancel() {
    this.initForm();
  }
  // edit rate value
  onRowEditInit(lType: LoanType) {
    this.cloned[lType.label] = {...lType};
  }
  // edit rate value
  onRowEditSave(lType: LoanType) {
    if (lType.rate > 0) {
        delete this.cloned[lType.rate];
        console.log(lType.rate);
        this.onUpdate(lType);
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Rate is updated'});
    } else {
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'Rate is required'});
    }
  }
  // edit rate value
  onRowEditCancel(lType: LoanType, index: number) {
    // this.loanType[index] = this.cloned[lType.rate];
    delete this.cloned[lType.rate];
  }

}
