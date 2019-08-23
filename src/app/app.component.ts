import { Component, OnInit } from '@angular/core';
import { LoginService } from './shared/services/login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'loanReq';

constructor(private loginService: LoginService){}

ngOnInit(){
  this.loginService.autoAuthUser();
}

}
