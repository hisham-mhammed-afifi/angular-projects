import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  name = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');

  signupForm = new FormGroup({
    name: this.name,
    email: this.email,
    password: this.password,
  });

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  signup() {
    this.userService.signup(this.signupForm.value).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigateByUrl('/auth');
      },
    });
  }
}
