import { Component, OnInit } from '@angular/core';
import '../../scripts/app.js';
import { SignupComponent } from '../signup/signup.component'
@Component({
  selector: 'zm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    
  }
  //show registercomponent on click in header
  open():void{
    (<HTMLInputElement>document.getElementById('modal')).style.display = 'block';
  }
  //show the navigation with 'animation'
  openNav():void{
    (<HTMLInputElement>document.getElementById('myNav')).style.height = '100%';
  }
  //close the navigation
  closeNav():void{
    (<HTMLInputElement>document.getElementById('myNav')).style.height = '0%';
  }
}
