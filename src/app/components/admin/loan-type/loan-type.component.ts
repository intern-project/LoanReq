import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { LoanType } from 'src/app/shared/classes/loan-type';

@Component({
  selector: 'app-loan-type',
  templateUrl: './loan-type.component.html',
  styleUrls: ['./loan-type.component.css']
})
export class LoanTypeComponent implements OnInit {

  loanTypeForm: FormGroup;
  loanTypes: LoanType[];
  loanType: LoanType[];
  cloned: { [s: string]: LoanType; } = {};


  constructor(
    public fb: FormBuilder
  ) {
    this.loanTypes = [
      {id: '', label: 'Golder Loan', value: 12},
      {id: '', label: 'Vehicle Loan', value: 10},
    ];
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loanTypeForm = this.fb.group({
      id: [''],
      label: ['', Validators.required],
      value: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.loanTypeForm.value);
    const data = this.loanTypeForm.value;
    this.loanTypes.push(data);

    this.initForm();
  }
  onCancel() {}

  onRowEditInit(lType: LoanType) {
    this.cloned[lType.label] = {...lType};
}

onRowEditSave(lType: LoanType) {
  if (lType.value > 0) {
      delete this.cloned[lType.value];
      // this.messageService.add({severity:'success', summary: 'Success', detail:'Car is updated'});
  } else {
      // this.messageService.add({severity:'error', summary: 'Error', detail:'Year is required'});
  }
}

onRowEditCancel(lType: LoanType, index: number) {
  // this.loanType[index] = this.cloned[lType.rate];
  delete this.cloned[lType.value];
}

}
