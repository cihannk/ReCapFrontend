import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorResponseModel } from '../models/responseModels/colorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl= "https://localhost:44398/api/color/"
  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ColorResponseModel> {
    let currentUrl:string = this.apiUrl + "getall"
    return this.httpClient.get<ColorResponseModel>(currentUrl);
  }



  
}
