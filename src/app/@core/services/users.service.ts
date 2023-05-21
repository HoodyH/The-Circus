import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { ApiUrls } from '@core/data/api';
import {User, UsersData} from "@core/data/users";


@Injectable()
export class UsersService extends UsersData {

    constructor(private http: HttpClient) {
        super();
      }
      
    getUser(): Observable<User> {
       return this.http.get<User>(ApiUrls.U_USER());
    }

}