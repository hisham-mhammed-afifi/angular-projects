import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email = new FormControl('');
  password = new FormControl('');

  loginForm = new FormGroup({
    email: this.email,
    password: this.password,
  });

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  login() {
    this.userService.login(this.loginForm.value);
  }
}
