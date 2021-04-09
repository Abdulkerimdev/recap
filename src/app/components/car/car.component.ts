import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import {HttpClient} from '@angular/common/http';
import { CarService } from 'src/app/services/carService/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

dataLoaded=false;
  cars:Car[]=[];
  

  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCars();
    

  }

  getCars() {
    this.carService.getCars().subscribe(Response=>{
      this.cars= Response.data
      this.dataLoaded = true;
    })
    console.log();

    } ;


}