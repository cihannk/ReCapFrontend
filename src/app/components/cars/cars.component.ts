import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars:Car[]=[];
  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["colorId"]) {
        console.log(params["colorId"])
        this.getCarsByColorId(params["colorId"])
      }
      else if (params["brandId"]) {
        this.getCarsByBrandId(params["brandId"])
      }
      else{
        this.getCars();
      }
      
    })
    
  }

  getCars() {
    this.carService.getCars().subscribe(response => {
      this.cars = response.data;
    })
  }

  getCarsByColorId(colorId:number) {
    this.carService.getCarsByColorId(colorId).subscribe(cars =>{
      this.cars = cars.data;
    })
  }

  getCarsByBrandId(brandId:number) {
    this.carService.getCarsByBrandId(brandId).subscribe(cars =>{
      this.cars = cars.data;
    })
  }

}
