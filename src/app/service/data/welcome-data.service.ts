import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';
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
    return this.httCliente.get<Welcome>(`${API_URL}/welcome-message`);
  }

  getWelcomeError() {
    return this.httCliente.get<Welcome>(`${API_URL}/welcome-error`);
  }

  getWelcomeWithPathVariable(name: string) {
    let authorizationString = this.createBasicAuthenticationHttpHeader();
    let headers = new HttpHeaders({
      Authorization : authorizationString
    });    
    return this.httCliente.get<Welcome>(`${API_URL}/welcome/${name}`, {headers});
  }

  createBasicAuthenticationHttpHeader(){
    let username = 'user';
    let password = 'password';
    let basicAuthenticationString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthenticationString;
  }
}
