import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../services/auth.service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  hide: boolean;
  email: string;
  password: string;

  constructor(
    public authService: AuthService,
    public ngZone: NgZone,
    public router: Router,
  )
  {
  }

  ngOnInit() {
  }
  emailInput(value) {
    this.email = value.target.value;
  }

  passwordInput(value)  {
    console.log(value)
    this.password = value.target.value;
  }

  logIn() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }
}
