import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { TermValue } from 'src/app/shared/classes/term-value';
import { LoanType } from 'src/app/shared/classes/loan-type';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})
export class CalculationComponent implements OnInit {

  years = [];
  types: LoanType[];
  termValueTabel: TermValue[] = [];
  termValueView: TermValue;
  amount: FormControl;
  calculationForm: FormGroup;
  term: number;
  termValue = false;
  tableLoading = false;
  cloned: { [s: string]: TermValue; } = {};


  constructor(
    private fb: FormBuilder
  ) {
    this.years = [
      {label: 'One Year', value: 1},
      {label: 'Two Years' , value: 2},
      {label: 'Three Years', value: 3},
      {label: 'Four Years', value: 4},
      {label: 'Five Years', value: 5},
      {label: 'Six Years', value: 6},
      {label: 'Seven Years', value: 7},
      {label: 'Eight Years', value: 8},
      {label: 'Nine Years', value: 9},
      {label: 'Ten Years', value: 10},
    ];
    this.types = [
      {id: '', label: 'Gold Loan', value: 10 },
      {id: '', label: 'Vehice Loan' , value: 5},
    ];
  }

  ngOnInit() {
    this.initForm();
  }
  // initiate the form
  private initForm() {
    this.calculationForm = this.fb.group({
      amount: ['', Validators.required],
      duration: ['', Validators.required],
      type: ['', Validators.required]
    });
  }
  // create tabel
  private termValueArray(months, term) {
    for ( let i = 1; i <= months; i++) {
      const data = {} as TermValue;
      data.label = i;
      data.value = term;
      this.termValueTabel.push(data);
    }
  }
  // new term calculation with editing
  private newTermValueCalculation(item: TermValue) {
    const cal = {
      amount: Number(this.calculationForm.get('amount').value),
      months: Number(this.calculationForm.get('duration').value * 12),
      type: Number(this.calculationForm.get('type').value)
    };
    // item.value = Number(item.value);
    const tobePaidMonth = (cal.months - item.label);
    const toBePaid = ((this.term * (tobePaidMonth)) - item.value);
    let newTerm = toBePaid / (tobePaidMonth);
    const val = newTerm.toFixed(2);
    newTerm = Number(val);

    for ( let i = item.label; i <= cal.months; i++) {
      const data = {} as TermValue;
      data.label = i + 1;
      data.value = newTerm;
      const findItem = this.termValueTabel.findIndex((e) => e.label === data.label);
      this.termValueTabel[findItem] = data;
    }
  }
  // calculate term
  calculateTerm() {
    const cal = {
      amount: Number(this.calculationForm.get('amount').value),
      months: Number(this.calculationForm.get('duration').value * 12),
      type: Number(this.calculationForm.get('type').value)
    };
    const interest = cal.type / 100 ;

    this.term = ((cal.amount + (cal.amount * interest)) / cal.months);
    const val = this.term.toFixed(2);
    this.term = Number(val);
    
    if (this.term) {
      this.termValue = true;
    }
    this.termValueArray(cal.months, this.term);
  }
  // show the term tabale
  termClick() {
    this.tableLoading = true;
  }
  // tabel edit
  onRowEditInit(item: TermValue) {
    this.cloned[item.value] = {...item};
  }

  // tabel save
  onRowEditSave(item: TermValue) {
    if (item.value > 0) {
        delete this.cloned[item.value];
        this.newTermValueCalculation(item);
        // this.messageService.add({severity:'success', summary: 'Success', detail:'Car is updated'});
    } else {
        // this.messageService.add({severity:'error', summary: 'Error', detail:'Year is required'});
    }
  }
   // tabel edit cancel
   onRowEditCancel(item: TermValue, index: number) {
    // this.loanType[index] = this.cloned[lType.rate];
    delete this.cloned[item.value];
  }
  
}
