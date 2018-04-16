import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: '';
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signup() {

    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password)
      .then(response => {
        this.email = this.password = '';
        console.log(this.authService.user);
        this.router.navigate(['/']);
      })
      .catch(err => {
        console.log(err);
      });
  }

  logout() {
    this.authService.logout();
  }

}
