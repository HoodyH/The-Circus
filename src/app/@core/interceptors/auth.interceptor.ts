import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpHandler, HttpRequest, HttpEvent} from '@angular/common/http';
import {catchError, Observable, of } from 'rxjs';
import {UsersData} from "@core/data/users";
import {StorageService} from "@core/services/storage.service";
import {ErrorsData, ErrorCode} from "@core/data/errors";


@Injectable()
export class AuthAppInterceptor implements HttpInterceptor {

  constructor(private userService: UsersData, private storage: StorageService, private errorService: ErrorsData) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.userService.getToken()
    if (token) {
      request = request.clone({setHeaders: {Authorization: `Token ${token}`}});
    }
    return next.handle(request).pipe(
      catchError(error => {
          if (error.status === 401) {
            this.storage.clearStorage();
            this.errorService.displayError(ErrorCode.UNATHORIZED_ERROR)
          }
          throw error;
        }
      )
    );
  }
}
