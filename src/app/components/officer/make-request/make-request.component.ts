import { Component, OnInit } from '@angular/core';
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




@Component({
  selector: 'app-make-request',
  templateUrl: './make-request.component.html',
  styleUrls: ['./make-request.component.css'],
})
export class MakeRequestComponent implements OnInit {

  public loanList: any[] = [];
  items: MenuItem[];


  

  addLoan: boolean = false;
  fillform:boolean = false;
  uploadfileform:boolean = false;
  uploaditem:boolean = false;
  showtermvalValtable:boolean = false;


  reqMakeForm: FormGroup;
  uploadedFiles: any[] = [];

  private _jsonURL = '../../../../assets/requests.json';

  requests: Request[];
  msgs: Message[] = [];

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
    this.ReqForm();
    this.items = [
      { label: 'Step 1' },
      { label: 'Step 2' },
      { label: 'Step 3' }
    ];
  }

  ReqForm() {
    this.reqMakeForm = this.fb.group({
      rid: [''],
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
      pending: ['1', Validators.required],
      accepted: ['0', Validators.required],
      declined: ['0', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.reqMakeForm.value);
    const data = this.reqMakeForm.value;
    this.loanList.push(data);
    console.log(this.loanList);
    this.Requestservice.addLoan(this.loanList);
    this.showSuccessform();
    this.fillform = false;
  }


  onCancel() {
    this.uploadfileform = false;
    this.fillform = false;
    this.uploaditem = false;
    this.loanList = [];
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
