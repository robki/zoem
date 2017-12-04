import { Component, OnInit } from '@angular/core';
import '../../scripts/app.js';
import { SignupComponent } from '../signup/signup.component'
@Component({
  selector: 'zm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  test():void{
    console.log("worksss")

}
  open():void{
    (<HTMLInputElement>document.getElementById('modal')).style.display = 'block';
  }

}
