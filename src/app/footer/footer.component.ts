import { Component, OnInit } from '@angular/core';
import { AuthService} from './../auth/auth.service';
@Component({
  selector: 'zm-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(public auth: AuthService) {
    
  }

  //show registercomponent on click in footer
  open():void{
    (<HTMLInputElement>document.getElementById('modal')).style.display = 'block';
  }
}
