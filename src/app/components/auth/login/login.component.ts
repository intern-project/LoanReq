import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { PrimeNgModule } from '../../../shared/modules/prime-ng/prime-ng.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Message} from 'primeng/components/common/api';
import {CardModule} from 'primeng/card';
import { LoginService } from 'src/app/shared/services/login/login.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;


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
    
    console.log(this.form.get('email').value);
    if (this.form.get('email').value === 'admin') {
      this.router.navigate(['/admin/pending']);
    }

    else{
      this.loginService.onLogin(this.form.value.email,this.form.value.password);
      console.log("login passed to the service");
//     if (this.form.get('email').value === 'officer') {
//       this.router.navigate(['/officer/make-requests']);
    }


  }



}
