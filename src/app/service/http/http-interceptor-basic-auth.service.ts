import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  constructor(
    private basicAuthService : BasicAuthenticationService
  ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler){
    // let username = 'user';
    // let password = 'password';
    // let basicAuthenticationString = 'Basic ' + window.btoa(username + ':' + password);

    let user = this.basicAuthService.getAuthenticatedUser();
    let basicAuthenticationString = this.basicAuthService.getAuthenticatedToken();

    if(user && basicAuthenticationString){
      request = request.clone({
          setHeaders : {
            Authorization: basicAuthenticationString
          }
      });
    }
    return next.handle(request);
  }
}
