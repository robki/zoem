import { Component, OnInit } from '@angular/core';
import{ Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { forEach } from '@angular/router/src/utils/collection';
import { UserCars } from '../userCars';
import { CarsService } from '../services/cars.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Component({
  selector: 'zm-carsresult',
  templateUrl: './carsresult.component.html',
  styleUrls: ['./carsresult.component.css']
  
})
export class CarsresultComponent implements OnInit {
  userCars: UserCars[];

  
  constructor(/*private http: Http*/ private carsService: CarsService) { 
 
  }
  // Start value of price range
  value: number = 55;

  //get all the cars
  getCars(){
    this.carsService.getCars()
    .subscribe(userCars => this.userCars = userCars);
  }
  ngOnInit(){
    this.getCars();
  }
  selectedCar: UserCars;

  onSelect(userCars: UserCars){
    this.selectedCar = userCars;
  }
  closeFilter():void{
    (<HTMLInputElement>document.getElementById('searchnav')).style.display = 'none';
    (<HTMLInputElement>document.getElementById('filtersButton')).style.display = 'block'; 
  }
  openFilter():void{
    (<HTMLInputElement>document.getElementById('searchnav')).style.display = 'block';
    (<HTMLInputElement>document.getElementById('filtersButton')).style.display = 'none'; 
  }
  openSort():void{
    (<HTMLInputElement>document.getElementById('zm-carfilter')).style.display = 'block';
    (<HTMLInputElement>document.getElementById('filtersButton')).style.display = 'none';
  }
  closeSort():void{
    (<HTMLInputElement>document.getElementById('zm-carfilter')).style.display = 'none';
    (<HTMLInputElement>document.getElementById('filtersButton')).style.display = 'block';
  }

  
}