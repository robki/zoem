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

  /*title = "it works!";
  private apiUrl = 'http://localhost:3000/api/getusers';
  data : any ={};
*/
  constructor(/*private http: Http*/ private carsService: CarsService) { 
    /*console.log('Hello testing');*/
    /*this.getData();
    this.getCars();*/
  }

  /*getData(){
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
  }
  getCars(){
    this.getData().subscribe(data =>{
      this.data = data;
      console.log(data);
    })
  }*/
  value: number = 55;
  getCars(){
    //console.log('hallo2');
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
}