import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { NavComponent } from './nav/nav.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [NavComponent, InputComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [NavComponent, InputComponent],
})
export class SharedModule {}
