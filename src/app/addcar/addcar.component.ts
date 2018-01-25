import { Component, OnInit } from '@angular/core';
import { AuthService} from './../auth/auth.service';
@Component({
  selector: 'zm-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
