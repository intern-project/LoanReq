import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { LoanType } from 'src/app/shared/classes/loan-type';
import { LoanTypeService } from 'src/app/shared/services/loan-type/loan-type.service';

@Component({
  selector: 'app-loan-type',
  templateUrl: './loan-type.component.html',
  styleUrls: ['./loan-type.component.css']
})
export class LoanTypeComponent implements OnInit {
  loanTypeForm: FormGroup;
  loanTypes: LoanType[] = [];
  loanType: LoanType[];
  cloned: { [s: string]: LoanType; } = {};
  id;
  // loanTypeTest: LoanType[]=[];


  constructor(
    public fb: FormBuilder,
    private ltServevice: LoanTypeService
  ) {}

  ngOnInit() {
    this.initForm();
    this.getLoanTypes();
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
    this.ltServevice.loanTypesGet().subscribe(item => (this.loanTypes.push(...item) ));
  }
  // form submission add to db
  onSubmit() {
    console.log(this.loanTypeForm.value);
    this.loanTypeForm.get('id').setValue(2);
    const data = this.loanTypeForm.value;
    this.ltServevice.loanTypesAdd(data).subscribe();
    this.loanTypes.push(data);
    this.initForm();
  }
  // form update
  private onUpdate(lType: LoanType) {
    this.ltServevice.loanTypeUpdate(lType);
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
        // this.messageService.add({severity:'success', summary: 'Success', detail:'Car is updated'});
    } else {
        // this.messageService.add({severity:'error', summary: 'Error', detail:'Year is required'});
    }
  }
  // edit rate value
  onRowEditCancel(lType: LoanType, index: number) {
    // this.loanType[index] = this.cloned[lType.rate];
    delete this.cloned[lType.rate];
  }

}
