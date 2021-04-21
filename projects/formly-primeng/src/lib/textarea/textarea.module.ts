import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormlyFormFieldModule } from '../form-field/form-field.module';
import { FormlyPrimengTextArea } from './textarea.type';

@NgModule({
  declarations: [FormlyPrimengTextArea],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextareaModule,

    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'textarea',
          component: FormlyPrimengTextArea,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class PrimengTextAreaModule {}
