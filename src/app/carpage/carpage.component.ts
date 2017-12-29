import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
 
import { UserCars }         from '../userCars';
import { CarsService }  from '../services/cars.service';
import { Input } from '@angular/core';
@Component({
  selector: 'zm-carpage',
  templateUrl: './carpage.component.html',
  styleUrls: ['./carpage.component.css'],
})
export class CarpageComponent implements OnInit {
  @Input() userCars: UserCars;
  constructor(private route: ActivatedRoute,
    private carsService: CarsService,
    private location: Location) {

  } 
  getCar(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.carsService.getCar(id)
      .subscribe(car => this.userCars = car);
    console.log(this.userCars);
  }
  
  ngOnInit() {
    this.getCar();
  }
 

}