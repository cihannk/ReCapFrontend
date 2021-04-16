import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {

  colors:Color[] = [];
  cars:Car[];
  constructor(private colorService:ColorService) { }

  

  ngOnInit(): void {
    this.getColors();
    
  }

  getColors() {
    this.colorService.getColors().subscribe(result => {
      this.colors = result.data;
    })
  }


}
