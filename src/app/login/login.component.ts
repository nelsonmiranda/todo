import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'in28minutes';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin() {

    if (this.username === 'in28minutes' && this.password === 'dummy') {
      this.invalidLogin = false;
      // Redirect to welcome page
      this.router.navigate(['welcome', this.username]);

    } else {
      this.invalidLogin = true;
    }

  }

}
