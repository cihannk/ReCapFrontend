import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandResponseModel } from "src/app/models/responseModels/brandResponseModel";
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  brands:Brand[] = [];
  constructor(private brandService:BrandService) { }

  

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe(result => {
      this.brands = result.data;
    })
  }


}
