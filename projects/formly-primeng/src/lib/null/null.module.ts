import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FormlyFormFieldModule } from '../wrapper/wrapper.module';

import { FormlyFieldNull } from './null.type';

@NgModule({
  declarations: [FormlyFieldNull],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        { name: 'null', component: FormlyFieldNull, wrappers: ['form-field'] }
      ]
    }),
  ]
})
export class FormlyNullModule {}
