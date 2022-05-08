import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/itodo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() todos: ITodo[] = [];
  @Output() onEdit = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  editTodo(e: ITodo) {
    this.onEdit.emit(e);
  }
  deleteTodo(e: ITodo) {
    this.onDelete.emit(e);
  }
}
