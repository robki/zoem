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
  openhamburger():void{
    (<HTMLInputElement>document.getElementById('zm-hamburger')).style.display = 'none';
    (<HTMLInputElement>document.getElementById('zm-cross')).style.display = 'block';
    (<HTMLInputElement>document.getElementById('zm-menu-mob')).style.display = 'block';
  }
  closenav():void{
    (<HTMLInputElement>document.getElementById('zm-menu-mob')).style.display = 'none';
    (<HTMLInputElement>document.getElementById('zm-cross')).style.display = 'none';
    (<HTMLInputElement>document.getElementById('zm-hamburger')).style.display = 'block';

  }
  test():void{
    console.log("worksss")

}
  open():void{
    (<HTMLInputElement>document.getElementById('modal')).style.display = 'block';
  }
  /* Open when someone clicks on the span element */
  openNav():void{
    (<HTMLInputElement>document.getElementById('myNav')).style.height = '100%';
  }
  closeNav():void{
    (<HTMLInputElement>document.getElementById('myNav')).style.height = '0%';
  }
}
