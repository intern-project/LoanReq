import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { LoanType } from 'src/app/shared/classes/loan-type';
import {RequestService} from 'src/app/shared/services/request/request.service';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-make-request',
  templateUrl: './make-request.component.html',
  styleUrls: ['./make-request.component.css'],
})
export class MakeRequestComponent implements OnInit {

  public loanList: any[] = [];
  addLoan:boolean = false;
  reqMakeForm: FormGroup;
  uploadedFiles: any[] = [];

  

  private _jsonURL = '../../../../assets/requests.json';

  requests: Request[];

  constructor(
    public fb: FormBuilder,
    private messageService: RequestService,
    private http: HttpClient,
    private router: Router
  ) {this.getJSON().subscribe(data => {
    console.log(data.request);
    this.requests = data.request;
  });
}

public getJSON(): Observable<any> {
  return this.http.get(this._jsonURL);
}

  

  ngOnInit() {
    this.ReqForm();
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
      doc: ['0', Validators.required],
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
  }


  onCancel() { 
    this.addLoan = false;
  }

  onUpload(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
    
    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    console.log(this.uploadedFiles);
}

 
}
