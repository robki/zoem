import { Component, OnInit } from '@angular/core';
import '../../scripts/app.js';
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

}
