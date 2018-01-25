import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { UserCars } from '../userCars';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class CarsService {

  private apiUrl = 'http://localhost:3000/api/getusers';
  constructor(private http: HttpClient) { }

  //get all the cars 
  getCars (): Observable<UserCars[]> {
    return this.http.get<UserCars[]>(this.apiUrl)
      .pipe(
      catchError(this.handleError('getusers', []))
      );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
     
      console.error(error); // log to console instead
 
      return of(result as T);
    };
  }
  //error
  getCarNo404<Data>(id: number): Observable<UserCars>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<UserCars[]>(url)
    .pipe(
      map(cars => cars[0]), 
      tap(c =>{
        const outcome = c ? `fetched` : `did not find`;
        
      }),
      catchError(this.handleError<UserCars>(`getCar id=${id}`))
    );
  }
  
  //get car by id
  getCar(id: number): Observable<UserCars>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<UserCars>(url).pipe(
      catchError(this.handleError<UserCars>(`getCar id=${id}`))
    );
  }



}