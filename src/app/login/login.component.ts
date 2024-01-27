import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.email, this.password)
      .then(res => {
        // Handle the response after successful login
        console.log('Login successful', res);
      })
      .catch(err => {
        // Handle login errors
        console.error('Login failed', err);
      });
  }

}
