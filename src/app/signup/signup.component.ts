import { Component, OnInit } from '@angular/core';

import { LoginComponent } from '../login/login.component'
import { User } from "../models/user"
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'zm-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {

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
  sign():void{
    // let name: string;
    
    // name = (<HTMLInputElement>document.getElementById('firstname')).value;
    // console.log(name);


    this.user.firstName = (<HTMLInputElement>document.getElementById('firstname')).value;
    this.user.lastName = (<HTMLInputElement>document.getElementById('lastname')).value;
    this.user.email = (<HTMLInputElement>document.getElementById('email')).value;
    this.user.password = (<HTMLInputElement>document.getElementById('psw')).value;
    
    this.http.post('localhost:3000/api/', this.user)
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err.message);
      }
    )
  }


  public user: User;
  constructor(private http:HttpClient){
    this.user = new User();

  }



}
