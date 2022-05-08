import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ITodo } from 'src/app/models/itodo';
import { LsService } from 'src/app/services/ls.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  @Input() todo: ITodo | undefined;
  @Output() onSubmit = new EventEmitter();

  title = new FormControl('');

  todoForm = new FormGroup({
    title: this.title,
  });

  constructor(private lsService: LsService) {}

  ngOnInit(): void {}

  submit() {
    if (this.todo?.id) {
      this.onSubmit.emit({ ...this.todo });
    } else {
      this.onSubmit.emit({
        ...this.todoForm.value,
        completed: false,
        userId: this.lsService.getUserId(),
      });
    }
    this.todoForm.reset();
    this.todo = undefined;
  }
}
