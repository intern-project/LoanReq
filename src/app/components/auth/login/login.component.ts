import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { PrimeNgModule } from '../../../shared/modules/prime-ng/prime-ng.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Message} from 'primeng/components/common/api';
import {CardModule} from 'primeng/card';
import { LoginService } from 'src/app/shared/services/login/login.service';
import { Router } from '@angular/router';
import { resolve, reject } from 'q';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  msgs: Message[] = [];

  constructor(
    public loginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'email' : new FormControl(null,{validators: [Validators.required]}),
      'password': new FormControl(null,{validators: [Validators.required]})
    });
  }

  onLogin(){
    console.log('login works');
    console.log(this.form.value.email);
    this.loginService.onLogin(this.form.value.email,this.form.value.password);
    // if (!this.loginService.getToken()){
    //   this.msgs = [];
    //   this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Invalid User Name or Password' });
    //   this.form.controls['password'].reset();
    // }
    setTimeout(() => {
      this.showError();
    }, 1000);
  }

  private showError() {
    if (!this.loginService.getToken()){
      this.msgs = [];
      this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Invalid User Name or Password' });
      this.form.controls['password'].reset();
    }
  }



}
