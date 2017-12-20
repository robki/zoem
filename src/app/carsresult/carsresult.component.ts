import { Component, OnInit } from '@angular/core';
import{ Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'zm-carsresult',
  templateUrl: './carsresult.component.html',
  styleUrls: ['./carsresult.component.css']
  
})
export class CarsresultComponent implements OnInit {
  
  title = "it works!";
  private apiUrl = 'http://localhost:3000/api/cars';
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
      console.log(data);
      this.data = data;
    })
  }
  value: number = 55;
  ngOnInit(){
    
  }
}
