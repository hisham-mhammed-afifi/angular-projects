import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() inputId = '';
  @Input() type = 'text';
  @Input() label = '';
  @Input() value: string | undefined = '';
  @Input() control: FormControl = new FormControl('');

  constructor() {}

  ngOnInit(): void {}
}
