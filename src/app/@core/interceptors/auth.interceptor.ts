import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpHandler, HttpRequest, HttpEvent} from '@angular/common/http';
import {catchError, Observable, of } from 'rxjs';
import {AuthData} from '@core/data/auth';
import {StorageService} from "@core/services/storage.service";


@Injectable()
export class AuthAppInterceptor implements HttpInterceptor {

  constructor(private authService: AuthData, private storage: StorageService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.authService.getToken()
    if (token) {
      request = request.clone({setHeaders: {Authorization: `Token ${token}`}});
    }
    return next.handle(request).pipe(
      catchError(error => {
          if (error.status === 401) {
            this.storage.clearStorage();
          }
          throw error;
        }
      )
    );
  }
}
