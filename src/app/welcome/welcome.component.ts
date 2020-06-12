import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
// import {AppComponent} from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Welcome !!!';
  name = '';
  welcomeMessage : string

  constructor(
    private route: ActivatedRoute,
    private welcomeService: WelcomeDataService
  ) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
    // this.name = this.route.snapshot.params['name']
    //console.log(this.route.snapshot.params['name']);
  }

  getWelcomeFromService() {
    this.welcomeService.getWelcomeError().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    console.log("Last line of the welcome message");
  }

  handleSuccessfulResponse(response){
    // console.log(response);
    this.welcomeMessage = response.message;
    // console.log(response.message);
  }

  handleErrorResponse(error){
    // console.log(error);
    // console.log(error.error);
    this.welcomeMessage = error.error.message;
    // console.log(error.error.message);
    // console.log(error.message);
  }
}
