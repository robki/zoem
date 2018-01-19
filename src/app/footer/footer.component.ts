import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'zm-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  //show registercomponent on click in footer
  open():void{
    (<HTMLInputElement>document.getElementById('modal')).style.display = 'block';
  }
}
