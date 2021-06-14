import { TokenModel } from './../models/tokenModel';
import { SingleResponseModel } from './../models/singleModelResponse';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from 'src/app/models/loginModel';
import { Observable } from 'rxjs';
import { RegisterModel } from 'src/app/models/regsiterModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "https://tojpeggroup.azurewebsites.net/api/auth"
  constructor(private httpClient:HttpClient) { }

  register(registerModel:RegisterModel):Observable<SingleResponseModel<TokenModel>>{
    return this.httpClient.post<SingleResponseModel<TokenModel>>(`${this.apiUrl}/register`,registerModel);
  }
  login(loginModel:LoginModel):Observable<SingleResponseModel<TokenModel>>{
    return this.httpClient.post<SingleResponseModel<TokenModel>>(`${this.apiUrl}/login`,loginModel);
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }

}
