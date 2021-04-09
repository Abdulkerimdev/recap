import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';

import { BrandService } from 'src/app/services/brandService/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[]=[];
  apiUrl="https://localhost:44311/api/brands/getall";

  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
    

  }

  getBrands() {
    this.brandService.getBrands().subscribe(Response=>{
      this.brands= Response.data
    })


    } ;

}
