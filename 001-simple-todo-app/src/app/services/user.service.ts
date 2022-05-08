import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../models/iuser';
import { LsService } from './ls.service';

interface LoginUser {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private logedIn = new BehaviorSubject<boolean>(false);
  private logedIn$ = this.logedIn.asObservable();

  isLogedIn(): Observable<boolean> {
    const user = this.lsService.getUser();
    if (user) this.logedIn.next(true);
    return this.logedIn$;
  }

  authError = '';

  private getUrl() {
    return 'http://localhost:5050/users';
  }

  constructor(
    private http: HttpClient,
    private lsService: LsService,
    private router: Router
  ) {}

  private all(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.getUrl());
  }

  signup(user: any): Observable<any> {
    return this.http.post<any>(this.getUrl(), user);
  }

  login(loginUser: LoginUser) {
    this.all().subscribe({
      next: (users) => {
        const user = users.find((u) => u.email === loginUser.email);
        if (user && user.password === loginUser.password) {
          this.lsService.loginUser(user);
          this.logedIn.next(true);
          this.router.navigateByUrl('/');
        } else {
          this.authError = 'Wrong email or password';
        }
      },
    });
  }

  logout() {
    this.lsService.logoutUser();
    this.logedIn.next(false);
    this.router.navigateByUrl('/');
  }
}
