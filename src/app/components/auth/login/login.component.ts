import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { PrimeNgModule } from '../../../shared/modules/prime-ng/prime-ng.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Message} from 'primeng/components/common/api';
import {CardModule} from 'primeng/card';
import { LoginService } from 'src/app/shared/services/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(public loginService: LoginService) { }

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
      this.loginService.onLogin(this.form.value.email,this.form.value.password);
      console.log("login passed to the service");
    }

  }



}
