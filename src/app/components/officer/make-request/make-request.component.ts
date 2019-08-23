import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { LoanType } from 'src/app/shared/classes/loan-type';
import {RequestService} from 'src/app/shared/services/request/request.service';



@Component({
  selector: 'app-make-request',
  templateUrl: './make-request.component.html',
  styleUrls: ['./make-request.component.css'],
})
export class MakeRequestComponent implements OnInit {

  loanTypeForm: FormGroup;
  loanTypes: LoanType[];
  loanType: LoanType[];
  cloned: { [s: string]: LoanType; } = {};
  uploadedFiles: any[] = [];

  public step1: boolean = true;
  public step2: boolean = false;
  public step3: boolean = false;


  constructor(
    public fb: FormBuilder,
    private messageService: RequestService
  ) {
   
  }

  ngOnInit() {
    
  }

  initForm() {
    this.loanTypeForm = this.fb.group({
      id: [''],
      type: ['', Validators.required],
      rate: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.loanTypeForm.value);
    const data = this.loanTypeForm.value;
    this.loanTypes.push(data);

    this.initForm();
  }
  onCancel() { }

 
}

