import {Observable} from "rxjs";

export interface User {
  id: number;
  phone: string;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  is_staff: string;
  date_joined: string;
  last_login: string;
}

export interface LoginPost {
    phone: string;
    password: string;
}

export interface Token {
    token: string;
}

export interface SpotifyAccess {
    spotify_id: string;
    spotify_name: string;
}

export interface SpotifyConnectData {
    auth_url: string;
}


export abstract class UsersData {
  abstract getUser(): Observable<User>;
  abstract getUserSpotifyAccess(): Observable<SpotifyAccess>;
  abstract deleteUserSpotifyAccess(): Observable<SpotifyAccess>;
  abstract getUserSpotifyConnectData(): Observable<SpotifyConnectData>;
  abstract getUserSpotifyConnectCallback(code: string): Observable<SpotifyConnectData>;
  abstract getToken(): string;
  abstract login(data: LoginPost): Observable<Boolean>;
  abstract logout(): Observable<Boolean>;
  abstract isLoggedIn(): Boolean;
}
