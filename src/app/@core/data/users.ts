import {Observable} from "rxjs";

export interface User {
  id: number;
  phone: string;
  first_name: string;
  last_name: string;
  date_joined: string;
  last_login: string;
}


export abstract class UsersData {
  abstract getUser(): Observable<User>;
}
