import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { withFormlyPrimengError } from './error.config';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormlyModule.forChild(withFormlyPrimengError())],
})
export class FormlyPrimengErrorModule {}
