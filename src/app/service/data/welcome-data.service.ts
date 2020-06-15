import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
export class Welcome {
  constructor(
    message: string
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private httCliente: HttpClient
  ) { }

  getWelcomeMessage() {
    return this.httCliente.get<Welcome>('http://localhost:8080/welcome-message');
  }

  getWelcomeError() {
    return this.httCliente.get<Welcome>('http://localhost:8080/welcome-error');
  }

  getWelcomeWithPathVariable(name: string) {
    let authorizationString = this.createBasicAuthenticationHttpHeader();
    let headers = new HttpHeaders({
      Authorization : authorizationString
    });    
    return this.httCliente.get<Welcome>(`http://localhost:8080/welcome/${name}`, {headers});
  }

  createBasicAuthenticationHttpHeader(){
    let username = 'user';3
    let password = 'password';
    let basicAuthenticationString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthenticationString;
  }
}
