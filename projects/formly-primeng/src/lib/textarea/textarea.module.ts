import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { FormlyPrimengFieldModule } from '../field';
import { withFormlyPrimengTextarea } from './textarea.config';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextareaModule,

    FormlyPrimengFieldModule,
    FormlyModule.forChild(withFormlyPrimengTextarea()),
  ],
})
export class FormlyPrimengTextareaModule {}
