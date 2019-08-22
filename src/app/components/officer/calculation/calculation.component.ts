import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { TermValue } from 'src/app/shared/classes/term-value';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})
export class CalculationComponent implements OnInit {

  years = [];
  types = [];
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
      {label: 'Gold Loan', value: 10 },
      {label: 'Vehice Loan' , value: 5},
    ];
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.calculationForm = this.fb.group({
      amount: ['', Validators.required],
      duration: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  calculateTerm() {
    const cal = {
      amount: Number(this.calculationForm.get('amount').value),
      months: Number(this.calculationForm.get('duration').value * 12),
      type: Number(this.calculationForm.get('type').value)
    };
    // const amount = this.calculationForm.get('amount').value;
    // const months = this.calculationForm.get('duration').value * 12;
    // const type = this.calculationForm.get('type').value;
    const interest = cal.type / 100 ;

    this.term = ((cal.amount + (cal.amount * interest)) / cal.months);
    console.log('Term ' + this.term);
    if (this.term) {
      this.termValue = true;
    }
    this.termValueArray(cal.months, this.term);
    // console.log(this.calculationForm.get('type').value);

  }
  private termValueArray(months, term) {
    for ( let i = 1; i <= months; i++) {
      const data = {} as TermValue;
      data.label = i;
      data.value = term;
      this.termValueTabel.push(data);
    }
  }
  termClick() {
    this.tableLoading = true;
  }

  onRowEditInit(item: TermValue) {
    this.cloned[item.value] = {...item};
}

onRowEditSave(item: TermValue) {
  if (item.value > 0) {
      delete this.cloned[item.value];
      this.newTermValueCalculation(item);
      // this.messageService.add({severity:'success', summary: 'Success', detail:'Car is updated'});
  } else {
      // this.messageService.add({severity:'error', summary: 'Error', detail:'Year is required'});
  }
}

onRowEditCancel(item: TermValue, index: number) {
  // this.loanType[index] = this.cloned[lType.rate];
  delete this.cloned[item.value];
}

private newTermValueCalculation(item: TermValue) {
  const cal = {
    amount: Number(this.calculationForm.get('amount').value),
    months: Number(this.calculationForm.get('duration').value * 12),
    type: Number(this.calculationForm.get('type').value)
  };
  const tobePaidMonth = (cal.months - item.label);
  const toBePaid = ((item.value * (tobePaidMonth)) - item.value);
  const newTerm = toBePaid / (tobePaidMonth);

  console.log(newTerm);
  for ( let i = item.label; i <= cal.months; i++) {
    const data = {} as TermValue;
    data.label = i + 1;
    data.value = newTerm;
    // this.termValueTabel.map();
  }

}

}
