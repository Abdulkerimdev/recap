import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Category } from 'src/app/models/category';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brandService/brand.service';
import { CategoryService } from 'src/app/services/categoryService/category.service';
import { ColorService } from 'src/app/services/colorService/color.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  
  categories:Category[]=[];
  colors:Color[]=[];
  brands:Brand[]=[];
  currentCategory:Category;
  currentColor:Color;
  currentBrand:Brand;
  
  
  constructor(private categoryService:CategoryService,
    private colorService:ColorService,
    private brandService:BrandService) { }
  
  ngOnInit(): void {
    this.getCategories();
    this.getColors();
    this.getBrands();
   
  }

  getCategories(){
  
    this.categoryService.getCategories().subscribe(response=>{

      this.categories=response.data;
      
    })

  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
        this.colors=response.data;
    })
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
        this.brands=response.data;
    })
  }
  
  setCurrentCategory(category:Category){
    this.currentCategory=category;
  }
  
  setCurrentColor(color:Color){
    this.currentColor=color;
  }

  setCurrentBrand(brand:Brand){
    this.currentBrand=brand;
  }

  getCurrentColorClass(color:Color){
    if(color==this.currentColor){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }

  getCurrentCategoryClass(category:Category){
    if(category==this.currentCategory){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
  getCurrentBrandClass(brand:Brand){
    if(brand==this.currentBrand){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
    
    
}