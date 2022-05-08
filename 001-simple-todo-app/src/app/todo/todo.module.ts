import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';
import { SharedModule } from '../shared/shared.module';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

@NgModule({
  declarations: [TodoListComponent, TodoComponent, TodoCardComponent, TodoFormComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
})
export class TodoModule {}
