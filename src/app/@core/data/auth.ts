import { Observable } from "rxjs";

export interface LoginPost {
    username: string;
    password: string;
}

export interface Token {
    token: string;
}

export abstract class AuthData {
    abstract getToken(): string;
    abstract login(data: LoginPost): Observable<Boolean>;
    abstract logout(): Observable<Boolean>;
    abstract isLoggedIn(): Boolean;
}