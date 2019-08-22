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
    this.loanTypes = [
      { id: '', type: 'Golder Loan', rate: 12 },
      { id: '', type: 'Vehicle Loan', rate: 10 },
    ];
  }

  ngOnInit() {
    this.initForm();
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

  onRowEditInit(lType: LoanType) {
    this.cloned[lType.type] = { ...lType };
  }

  onRowEditSave(lType: LoanType) {
    if (lType.rate > 0) {
      delete this.cloned[lType.rate];
      // this.messageService.add({severity:'success', summary: 'Success', detail:'Car is updated'});
    } else {
      // this.messageService.add({severity:'error', summary: 'Error', detail:'Year is required'});
    }
  }

  onRowEditCancel(lType: LoanType, index: number) {
    // this.loanType[index] = this.cloned[lType.rate];
    delete this.cloned[lType.rate];
  }

    onUpload(event) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }
}

