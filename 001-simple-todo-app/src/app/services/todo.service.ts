import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from '../models/itodo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private getUrl() {
    return 'http://localhost:5050/todos';
  }
  private getUrlForId(id: number) {
    return `${this.getUrl()}/${id}`;
  }

  constructor(private http: HttpClient) {}

  all(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(this.getUrl());
  }
  create(todo: ITodo): Observable<ITodo> {
    return this.http.post<ITodo>(this.getUrl(), todo);
  }
  edit(todo: ITodo): Observable<ITodo> {
    return this.http.put<ITodo>(this.getUrlForId(todo.id), todo);
  }
  delete(todo: ITodo): Observable<ITodo> {
    return this.http.delete<ITodo>(this.getUrlForId(todo.id));
  }
}
