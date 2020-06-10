import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
// import {AppComponent} from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Welcome !!!';
  name = '';

  constructor(
    private route : ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
    // this.name = this.route.snapshot.params['name']
    console.log(this.route.snapshot.params['name']);
  }

}
