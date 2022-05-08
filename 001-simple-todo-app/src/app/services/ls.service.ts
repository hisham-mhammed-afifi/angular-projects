import { Injectable } from '@angular/core';
import { IUser } from '../models/iuser';

@Injectable({
  providedIn: 'root',
})
export class LsService {
  constructor() {}

  loginUser(user: IUser) {
    localStorage.setItem('token', JSON.stringify(user));
  }
  logoutUser() {
    localStorage.removeItem('token');
  }
  getUser() {
    const token = localStorage.getItem('token') as string;
    return JSON.parse(token);
  }
  getUserId() {
    return this.getUser().id;
  }
}
