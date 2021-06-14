import { ListResponseModel } from './../models/listResponseModel';
import { ResponseModel } from './../models/responseModel';
import { SingleResponseModel } from './../models/singleModelResponse';
import { PhotoRequestModel } from './../models/photoRequestModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  apiUrl = "https://tojpeggroup.azurewebsites.net/api/photos"
  constructor(private httpClient:HttpClient) { }

  addPhoto(photoRequestModel:PhotoRequestModel):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(`${this.apiUrl}/add`,photoRequestModel);
  }
  
  getAllImage(){
    return this.httpClient.get<ListResponseModel<Photo>>(`${this.apiUrl}/getall`)
  }
}
