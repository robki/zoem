import { Component, OnInit } from '@angular/core';
import { AuthService} from './../auth/auth.service';
@Component({
  selector: 'zm-carrequest',
  templateUrl: './carrequest.component.html',
  styleUrls: ['./carrequest.component.css']
})
export class CarrequestComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
