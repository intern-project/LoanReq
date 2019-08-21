import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { PrimeNgModule } from '../../../shared/modules/prime-ng/prime-ng.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Message} from 'primeng/components/common/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      'email' : new FormControl(null,{validators: [Validators.required]}),
      'password': new FormControl(null,{validators: [Validators.required]})
    });
  }

  onLogin(){
    console.log('login works');
    console.log(this.form.value.email);
    if(this.form.invalid){
      return
    }

    else{

    }

  }



}
