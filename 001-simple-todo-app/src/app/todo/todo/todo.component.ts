import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/itodo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: ITodo[] = [];
  todo!: ITodo;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoService.all().subscribe((data) => {
      this.todos = data.sort((a, b) => b.id - a.id);
    });
  }

  setFormToEdit(todo: ITodo) {
    this.todo = todo;
  }

  submit(e: ITodo) {
    console.log(e);

    if (e.id) {
      this.editeTodo(e);
    } else {
      this.createTodo(e);
    }
  }

  // Create todo
  createTodo(todo: ITodo) {
    this.todoService.create(todo).subscribe({
      next: (todo) => {
        this.todos = [todo, ...this.todos];
      },
    });
  }

  // Edit todo
  editeTodo(todo: ITodo) {
    this.todoService.edit(todo).subscribe({
      next: () => {
        this.getTodos();
      },
    });
  }

  // Delete todo
  deleteTodo(e: ITodo) {
    this.todoService.delete(e).subscribe({
      next: () => {
        this.todos = [...this.todos].filter((t) => t.id !== e.id);
      },
    });
  }
}
