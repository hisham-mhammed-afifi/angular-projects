import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit, OnDestroy {
  sub = new Subscription();
  logedIn = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.sub = this.userService
      .isLogedIn()
      .subscribe((data) => (this.logedIn = data));
  }

  logout() {
    this.userService.logout();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
