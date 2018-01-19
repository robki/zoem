import { Component, OnInit } from '@angular/core';

import { SignupComponent } from '../signup/signup.component'

@Component({
  selector: 'zm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //TODO make login work
  //close login component
  close():void{
    (<HTMLInputElement>document.getElementById('modal2')).style.display = 'none';
  }
  //change to register component
  gosignup():void{
    (<HTMLInputElement>document.getElementById('modal')).style.display = 'block';
    (<HTMLInputElement>document.getElementById('modal2')).style.display = 'none';
  }
}
