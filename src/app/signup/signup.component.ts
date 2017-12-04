import { Component, OnInit } from '@angular/core';

import { LoginComponent } from '../login/login.component'
@Component({
  selector: 'zm-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  /*public close(){
    /*alert('anso');*//*
    (<HTMLInputElement>document.getElementById('modal')).style.display = 'none';
}*/
  close():void{
    (<HTMLInputElement>document.getElementById('modal')).style.display = 'none';
  }
  gologin():void{
    (<HTMLInputElement>document.getElementById('modal2')).style.display = 'block';
    (<HTMLInputElement>document.getElementById('modal')).style.display = 'none';

  }


}
