import { Component, OnInit } from '@angular/core';
import {AuthService}  from '../auth/auth.service'
@Component({
  // lselector: 'zm-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }
}
