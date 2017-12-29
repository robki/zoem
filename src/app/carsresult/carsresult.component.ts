import { Component, OnInit } from '@angular/core';
import{ Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { forEach } from '@angular/router/src/utils/collection';
@Component({
  selector: 'zm-carsresult',
  templateUrl: './carsresult.component.html',
  styleUrls: ['./carsresult.component.css']
  
})
export class CarsresultComponent implements OnInit {
  
  title = "it works!";
  private apiUrl = 'http://localhost:3000/api/getusers';
  data : any ={};

  constructor(private http: Http) { 
    /*console.log('Hello testing');*/
    this.getData();
    this.getCars();
  }

  getData(){
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())

  }
  getCars(){
    this.getData().subscribe(data =>{
      this.data = data;
      console.log(data);
    })
  }
  value: number = 55;
  ngOnInit(){
    
  }
}
