import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { RequestService } from 'src/app/shared/services/request/request.service';
import { Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import { StepsModule } from 'primeng/steps';
import { MenuItem } from 'primeng/api';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { SideBarComponent } from '../../common/side-bar/side-bar.component';
import {SelectItem} from 'primeng/api';



@Component({
  selector: 'app-make-request',
  templateUrl: './make-request.component.html',
  styleUrls: ['./make-request.component.css'],
})
export class MakeRequestComponent implements OnInit {

  @ViewChild(SideBarComponent, { static: true }) sidebar;

  public loanList: any[] = [];
  items: MenuItem[];
  duration: SelectItem[];
  duration1: string

  addLoan: boolean = false;
  fillform: boolean = false;
  uploadfileform: boolean = true;
  uploaditem: boolean = false;
  showtermvalValtable: boolean = false;
  public showLoader: boolean = false;
  public loading = false;
  str: string;


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
    private messageService: MessageService,

   
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
    this.selectgroup();
  }


  // initiate bread crumb
  private initBreadCrumb() {
    this.breadCrumbItems = [
      { label: 'Officer' },
      { label: 'Loan Request Form', url: '/officer/make-requests' }
    ];
    this.home = { icon: 'pi pi-home' };
  }

  ReqForm() {
    this.reqMakeForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      age: ['', Validators.required],
      job: ['', Validators.required],
      contact: ['', Validators.required],
      nic: ['', Validators.required],
      ammount: ['', Validators.required],
      duration: ['',Validators.required],
      reason: ['', Validators.required],
      doc: [''],
      pending: [1, Validators.required],
      accepted: [0, Validators.required],
      declined: [0, Validators.required]
    });
  }

  selectgroup(){
    this.duration = [
      {label: '1 month', value: '1 month'},
      {label: '3 months', value: '2 months'},
      {label: '9 months', value: '9 months'},
      
  ];
  }

  onSubmit() {
    this.reqMakeForm.get('rid').setValue(0);
    console.log(this.reqMakeForm.value);
    const data = this.reqMakeForm.value;
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

  // file uploader
  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
      const uploadfile = this.uploadedFiles;
      this.Requestservice.uploadFile(event.files[0]).subscribe(
        val => {
          const item = JSON.stringify(val);
          const docName = JSON.parse(item).dbPath;
          const docLocation = docName;
          this.str =  docLocation;
          console.log(this.str);
          this.setStr();
          this.reqMakeForm.get('doc').setValue(docLocation);
          // console.log(this.reqMakeForm.value);

          // console.log('Successfully Added.');
          this.showSuccessfile();
        },
        response => {
          console.log('Error Occoured -->', response);
          this.showError();
        },
      ) ;
      this.loading = true;
      this.uploaditem =true;
    }
  }
  setStr() {
    this.reqMakeForm.get('doc').setValue(this.str);
    console.log(this.reqMakeForm.value);
  }

  formfill() {
    this.uploadfileform = false;
    this.fillform = true;
    this.uploaditem = false;
  }

  uploadfileformview() {
    this.showtermvalValtable = false;
    this.uploadfileform = true;
  }




  //messages
  showSuccessfile() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'File uploaded.' });
  }
  showSuccessform() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'form submited' });
  }

  showInfo() {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
  }

  showWarn() {
    this.msgs = [];
    this.msgs.push({ severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
  }

  showError() {
    this.msgs = [];
    this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Server error!' });
  }

  showMultiple() {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Message 1', detail: 'PrimeNG rocks' });
    this.msgs.push({ severity: 'info', summary: 'Message 2', detail: 'PrimeUI rocks' });
    this.msgs.push({ severity: 'info', summary: 'Message 3', detail: 'PrimeFaces rocks' });
  }

  showViaService() {
    this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
  }

  clear() {
    this.msgs = [];
  }

}
