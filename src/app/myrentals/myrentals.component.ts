import { Component, OnInit } from '@angular/core';
import { AuthService} from './../auth/auth.service';
@Component({
  selector: 'zm-myrentals',
  templateUrl: './myrentals.component.html',
  styleUrls: ['./myrentals.component.css']
})
export class MyrentalsComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
