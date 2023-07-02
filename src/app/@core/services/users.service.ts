import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, Observable, of} from 'rxjs';
import { ApiUrls } from '@core/data/api';
import {User, UsersData, LoginPost, SpotifyAccess, SpotifyConnectData} from "@core/data/users";
import {map} from "rxjs/operators";
import {StorageService} from "@core/services/storage.service";


@Injectable()
export class UsersService extends UsersData {

  constructor(private http: HttpClient, private storage: StorageService) {
    super();
  }

  getUser(): Observable<User> {
    return this.http.get<User>(ApiUrls.U_USER());
  }

  deleteUser(): Observable<User> {
    return this.http.delete<User>(ApiUrls.U_USER());
  }

  getUserSpotifyAccess(): Observable<SpotifyAccess>{
    return this.http.get<SpotifyAccess>(ApiUrls.U_USER_SPOTIFY_ACCESS());
  }

  deleteUserSpotifyAccess(): Observable<SpotifyAccess>{
    return this.http.delete<SpotifyAccess>(ApiUrls.U_USER_SPOTIFY_ACCESS());
  }

  getUserSpotifyConnectData(): Observable<SpotifyConnectData> {
    return this.http.get<SpotifyConnectData>(ApiUrls.U_USER_SPOTIFY_LOGIN());
  }

  getUserSpotifyConnectCallback(code: string): Observable<any> {
    return this.http.get<any>(`${ApiUrls.U_USER_SPOTIFY_CALLBACK()}?code=${code}`);
  }

  getToken(): string {
    return this.storage.getToken()
  }

  login(data: LoginPost): Observable<Boolean> {
    return this.http.post(ApiUrls.U_LOGIN(), data).pipe(
      catchError((error, caught) => {
        if (error.status == 401 || error.status == 403) {
          return of(error.status);
        }
        throw error;
      }),
      map((r) => {
        console.log(r)
        const response = <any>r;
        if (response === 401 || response === 403) {
          return false
        }
        this.storage.setToken(response.token)
        return true
      })
    );
  }

  logout(): Observable<Boolean> {
    this.storage.clearStorage();
    return this.http.delete(ApiUrls.U_LOGOUT(), {}).pipe(
      map((r) => {
        return true
      })
    );
  }

  public isLoggedIn(): boolean {
    let token: string = this.storage.getToken();
    if (!token) {
      return false
    }
    return true
  }

}
