import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { UserCars } from '../userCars';
import { CarsService } from '../services/cars.service';

@Component({
  // lselector: 'zm-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  userCars: UserCars[];

  constructor(public authService: AuthService, private carsService: CarsService) { }
  //get all the cars
  getCars() {
    this.carsService.getCars()
      .subscribe(userCars => this.userCars = userCars);
  }

  ngOnInit() {
    this.getCars();
  }
  selectedCar: UserCars;

  onSelect(userCars: UserCars){
    this.selectedCar = userCars;
  }
}
