import {Observable} from "rxjs";

export interface User {
  id: number;
  phone: string;
  first_name: string;
  last_name: string;
  username: string;
  is_staff: string;
  date_joined: string;
  last_login: string;
}


export abstract class UsersData {
  abstract getUser(): Observable<User>;
}
