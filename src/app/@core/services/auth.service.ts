import { Injectable } from '@angular/core';
import {catchError, Observable, of} from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { ApiUrls } from "@core/data/api";
import {StorageService} from "@core/services/storage.service";
import {map} from "rxjs/operators";
import { LoginPost, AuthData} from '@core/data/auth';


@Injectable()
export class AuthService extends AuthData{

  constructor(private http: HttpClient, private storage: StorageService) {
    super();
   }

  getToken(): string {
    return this.storage.getToken()
  }

  login(data: LoginPost): Observable<Boolean>{
      return this.http.post(ApiUrls.U_LOGIN(), data).pipe(
        catchError((error, caught) => {
          if (error.status == 401 || error.status == 403) {
            return of(error.status);
          }
          return error;
        }),
        map((r) => {
          console.log(r)
          const response = <any>r;
          if (response === 401|| response === 403){
            return false
          }
          this.storage.setToken(response.token)
          return true
        })
      );
  }

  logout(): Observable<Boolean>{
    return this.http.post(ApiUrls.U_LOGIN(), {}).pipe(
        catchError((error, caught) => {
          if (error.status == 401 || error.status == 403) {
            return of(error.status);
          }
          return error;
        }),
        map((r) => {
            this.storage.clearStorage();
          return true
        })
      );
    
  }

  public isLoggedIn(): boolean{
    let token: string = this.storage.getToken();
    if(!token) { return false}
    return true
  }
}