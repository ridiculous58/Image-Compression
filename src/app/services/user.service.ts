import { TokenModel } from './../models/tokenModel';
import { UserModel } from './../models/userModel';
import { Observable } from 'rxjs';
import { SingleResponseModel } from './../models/singleModelResponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "https://tojpeggroup.azurewebsites.net/api/users"
  constructor(private httpClient:HttpClient) { }

  getByMail(registerModel:String):Observable<SingleResponseModel<UserModel>>{
    return this.httpClient.get<SingleResponseModel<TokenModel>>(`${this.apiUrl}/getbymail`);
  }
}
