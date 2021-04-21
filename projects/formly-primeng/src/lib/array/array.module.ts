import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FormlyFormFieldModule } from '../form-field/form-field.module';

import { FormlyFieldArray } from './array.type';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [FormlyFieldArray],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        { name: 'array', component: FormlyFieldArray },
      ]
    }),
  ]
})
export class FormlyArrayModule {}
