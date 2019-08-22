import {Component,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-make-request',
  templateUrl: './make-request.component.html',
  styleUrls: ['./make-request.component.css'],
})
export class MakeRequestComponent implements OnInit {

  public model: any = {};
  
   constructor() {}

  ngOnInit() {
    
  }

}