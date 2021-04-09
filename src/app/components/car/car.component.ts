import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import {HttpClient} from '@angular/common/http';
import { CarService } from 'src/app/services/carService/car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

dataLoaded=false;
  cars:Car[]=[];
  

  constructor(private carService:CarService,private activatedRoute:ActivatedRoute){ }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"]);
      }
      else{
        this.getCars();
      }
    })
    
    

  }

  getCars() {
    this.carService.getCars().subscribe(Response=>{
      this.cars= Response.data
      this.dataLoaded = true;
    })
    console.log();
    } ;
  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(Response=>{
      this.cars=Response.data;
      this.dataLoaded=true;
    })
  }

}
