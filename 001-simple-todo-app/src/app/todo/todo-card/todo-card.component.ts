import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from 'src/app/models/itodo';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css'],
})
export class TodoCardComponent implements OnInit {
  @Input() todo!: ITodo;
  @Output() onEdit = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  editTodo() {
    this.onEdit.emit(this.todo);
  }
  deleteTodo() {
    this.onDelete.emit(this.todo);
  }
}
