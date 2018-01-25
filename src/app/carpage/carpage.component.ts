import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
 
import { UserCars }         from '../userCars';
import { CarsService }  from '../services/cars.service';
import { Input } from '@angular/core';
import { AuthService} from './../auth/auth.service';
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
    this.carsService.getCar(id)
      .subscribe(car => this.userCars = car);

  }
  showPopup(){
    var locInput = (<HTMLInputElement>document.getElementById('locInput')).value;
    var bookDate = (<HTMLInputElement>document.getElementById('bookDate')).value;
    var endDate = (<HTMLInputElement>document.getElementById('endDate')).value;
    
    if(!locInput || !bookDate || !endDate){
      (<HTMLInputElement>document.getElementById('errorMessage')).style.display = 'block';
      (<HTMLInputElement>document.getElementById('popup')).style.display = 'none';
    }
    else{
      (<HTMLInputElement>document.getElementById('errorMessage')).style.display = 'none';
      (<HTMLInputElement>document.getElementById('popup')).style.display = 'block';
      (<HTMLInputElement>document.getElementById('locInput')).value = "";
      (<HTMLInputElement>document.getElementById('bookDate')).value = "";
      (<HTMLInputElement>document.getElementById('endDate')).value = "";

    }
  }
  closePopup(){
    (<HTMLInputElement>document.getElementById('popup')).style.display = 'none';

  }
  ngOnInit() {
    this.getCar();
  }
 

}