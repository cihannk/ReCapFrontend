import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/responseModels/carResponseModel';
import { SingleCarResponseModel } from '../models/responseModels/singleCarResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl= "https://localhost:44398/api/cars/";
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<CarResponseModel> {
    let currentUrl= this.apiUrl + "getdetails";
    return this.httpClient.get<CarResponseModel>(currentUrl);
  }

  getCarByCarId(carId:number) {
    let currentUrl = this.apiUrl + "getbyid?id="+carId;
    return this.httpClient.get<SingleCarResponseModel>(currentUrl);
  }

  getCarsByColorId(colorId:number) {
    let currentUrl = this.apiUrl + "getbycolorid?colorId="+colorId;
    return this.httpClient.get<CarResponseModel>(currentUrl);
  }

  getCarsByBrandId(brandId:number) {
    let currentUrl = this.apiUrl + "getbybrandid?brandId="+brandId;
    return this.httpClient.get<CarResponseModel>(currentUrl);
  }
  
}
