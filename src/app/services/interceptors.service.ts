import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class InterceptorsService implements HttpInterceptor
{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
    let http = req.clone({
      url: environment.serverIP + req.url,
      setHeaders: {
        'X-Requested-With': 'XMLHttpRequest',
        //'Authentication-Token': this.cookie.get(environment.JWTName),
        //'_csrf': this.cookie.get(environment.csrf)
      },
      withCredentials: true
    });

    return next.handle(http);
  }
}
