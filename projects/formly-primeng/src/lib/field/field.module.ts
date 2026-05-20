import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { withFormlyPrimengField } from './field.config';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormlyModule.forChild(withFormlyPrimengField())],
})
export class FormlyPrimengFieldModule {}
