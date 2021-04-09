import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44311/api/cars/getall";
  constructor(private httpClient:HttpClient) { }
  getCars():Observable<ListResponseModel<Car>>{
  
    this.httpClient
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl);
  }
}