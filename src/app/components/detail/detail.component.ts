import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  selectedCarId:number;
  car:Car;
  carImageLink:string = "https://localhost:44398/api/carimage/get?carid=";
  constructor(private activatedRoute:ActivatedRoute, private carService:CarService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.selectedCarId = params["carId"];
      this.carImageLink += this.selectedCarId;
    })
    this.getCarObject(this.selectedCarId);
  }

  getCarObject(carId:number) {
    this.carService.getCarByCarId(carId).subscribe(car => {
      this.car = car.data;
    })
  }
}
