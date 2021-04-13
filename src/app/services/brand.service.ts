import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { BrandResponseModel } from '../models/responseModels/brandResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl= "https://localhost:44398/api/brand/getall"
  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<BrandResponseModel> {
    return this.httpClient.get<BrandResponseModel>(this.apiUrl);
  }

}
