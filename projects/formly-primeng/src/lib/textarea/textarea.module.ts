import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { FormlyFormFieldModule } from '../field';
import { withFormlyFieldTextArea } from './textarea.config';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextareaModule,

    FormlyFormFieldModule,
    FormlyModule.forChild(withFormlyFieldTextArea()),
  ],
})
export class FormlyTextAreaModule {}
