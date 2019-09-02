import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { LoanType } from 'src/app/shared/classes/loan-type';
import { RequestService } from 'src/app/shared/services/request/request.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import { StepsModule } from 'primeng/steps';
import { MenuItem } from 'primeng/api';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';
import { SideBarComponent } from '../../common/side-bar/side-bar.component';




@Component({
  selector: 'app-make-request',
  templateUrl: './make-request.component.html',
  styleUrls: ['./make-request.component.css'],
})
export class MakeRequestComponent implements OnInit {

  @ViewChild(SideBarComponent, {static: true}) sidebar;

  public loanList: any[] = [];
  items: MenuItem[];

  addLoan: boolean = false;
  fillform:boolean = true;
  uploadfileform:boolean = false;
  uploaditem:boolean = false;
  showtermvalValtable:boolean = false;


  reqMakeForm: FormGroup;
  uploadedFiles: any[] = [];

  private _jsonURL = '../../../../assets/requests.json';

  requests: Request[];
  msgs: Message[] = [];

  // breadcrumb items
  breadCrumbItems: MenuItem[];
  home: MenuItem;

  constructor(
    public fb: FormBuilder,
    private Requestservice: RequestService,
    private http: HttpClient,
    private router: Router,
    private messageService: MessageService
  ) {
    this.getJSON().subscribe(data => {
      console.log(data.request);
      this.requests = data.request;
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }



  ngOnInit() {
    this.sidebar.officerRole = true;
    this.initBreadCrumb();
    this.ReqForm();
    this.items = [
      { label: 'Step 1' },
      { label: 'Step 2' },
      { label: 'Step 3' }
    ];
  }
  // initiate bread crumb
  private initBreadCrumb() {
    this.breadCrumbItems = [
      {label: 'Officer'},
      {label: 'Loan Request Form', url: '/officer/make-requests'}
    ];
    this.home = {icon: 'pi pi-home'};
  }

  ReqForm() {
    this.reqMakeForm = this.fb.group({
      rid: [],
      name: ['', Validators.required],
      address: ['', Validators.required],
      age: ['', Validators.required],
      job: ['', Validators.required],
      contact: ['', Validators.required],
      nic: ['', Validators.required],
      ammount: ['', Validators.required],
      duration: ['', Validators.required],
      reason: ['', Validators.required],
      doc: ['1', Validators.required],
      pending: [1, Validators.required],
      accepted: [0, Validators.required],
      declined: [0, Validators.required]
    });
  }

  onSubmit() {
    this.reqMakeForm.get('rid').setValue(10);
    console.log(this.reqMakeForm.value);
    const data = this.reqMakeForm.value;
    this.loanList.push(data);
    console.log(this.loanList);
    this.Requestservice.addLoan(data).subscribe(
      val => {
        console.log('Successfully Added.');
        this.showSuccessform();
      },
      response => {
        console.log('Error Occoured -->', response);
        this.showError();
       },
    );
    this.fillform = false;
    this.ReqForm();
    this.uploadfileform = true;
  }


  onCancel() {
    this.uploadfileform = false;
    this.fillform = false;
    this.uploaditem = false;
    this.loanList = [];
    this.uploadfileform = true;
  }

  onUpload(event) {
   
    for (let file of event.files) {
      this.uploadedFiles.push(file);
      this.uploaditem = true;
      console.log(this.uploaditem);
     

    }

    this.Requestservice.add({ severity: 'info', summary: 'File Uploaded', detail: '' })
      this.showSuccessfile();
    console.log(this.uploadedFiles);
  }

  formfill(){
    this.uploadfileform = false;
    this.fillform = true;
    this.uploaditem = false;
  }

  uploadfileformview(){
    this.showtermvalValtable = false;
    this.uploadfileform = true;
  }


  //messages

  
    

  showSuccessfile() {
      this.msgs = [];
      this.msgs.push({severity:'success', summary:'Success Message', detail:'File uploaded.'});
  }
  showSuccessform() {
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'Success Message', detail:'form submited'});
}

  showInfo() {
      this.msgs = [];
      this.msgs.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});
  }

  showWarn() {
      this.msgs = [];
      this.msgs.push({severity:'warn', summary:'Warn Message', detail:'There are unsaved changes'});
  }

  showError() {
      this.msgs = [];
      this.msgs.push({severity:'error', summary:'Error Message', detail:'Validation failed'});
  }

  showMultiple() {
      this.msgs = [];
      this.msgs.push({severity:'info', summary:'Message 1', detail:'PrimeNG rocks'});
      this.msgs.push({severity:'info', summary:'Message 2', detail:'PrimeUI rocks'});
      this.msgs.push({severity:'info', summary:'Message 3', detail:'PrimeFaces rocks'});
  }
  
  showViaService() {
      this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
  }

  clear() {
      this.msgs = [];
  }







  

}
