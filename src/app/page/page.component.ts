import { Component, OnInit } from '@angular/core';

@Component({
  // lselector: 'zm-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  close():void{
    (<HTMLInputElement>document.getElementById('modal')).style.display = 'none';
  }
}
