import { Component, OnInit } from '@angular/core';
import { AuthService} from './../auth/auth.service';
@Component({
  selector: 'zm-mycars',
  templateUrl: './mycars.component.html',
  styleUrls: ['./mycars.component.css']
})
export class MycarsComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
