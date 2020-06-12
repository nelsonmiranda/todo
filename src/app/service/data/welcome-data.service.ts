import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Welcome{
  constructor(
    message : string
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private httCliente : HttpClient
  ) { }

  getWelcomeMessage() {
    return this.httCliente.get<Welcome>('http://localhost:8080/welcome-message');
  }

  getWelcomeError() {
    return this.httCliente.get<Welcome>('http://localhost:8080/welcome-error');
  }
}
