import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
 
import { UserCars }         from '../userCars';
import { CarsService }  from '../services/cars.service';
import { Input } from '@angular/core';
import {AuthService}  from '../auth/auth.service'

@Component({
  selector: 'zm-carpage',
  templateUrl: './carpage.component.html',
  styleUrls: ['./carpage.component.css'],
})
export class CarpageComponent implements OnInit {
  //hardcoded maps values
  lat: number = 50.827730;
  lng: number = 3.262274;
  @Input() userCars: UserCars;
  constructor(private route: ActivatedRoute,
    private carsService: CarsService,
    private location: Location,
  public authService: AuthService) {

  } 
  //get the car from its id
  getCar(){
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.carsService.getCar(id)
      .subscribe(car => this.userCars = car);
    console.log(this.userCars);

  }
  
  ngOnInit() {
    this.getCar();
  }
 

}