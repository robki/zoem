import { Component, OnInit } from '@angular/core';
import { AuthService} from './../auth/auth.service';
@Component({
  selector: 'zm-accpayment',
  templateUrl: './accpayment.component.html',
  styleUrls: ['./accpayment.component.css']
})
export class AccpaymentComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
