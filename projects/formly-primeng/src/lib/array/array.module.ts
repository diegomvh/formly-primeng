import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FormlyFormFieldModule } from '../wrapper/wrapper.module';

import { FormlyFieldArray } from './array.type';

@NgModule({
  declarations: [FormlyFieldArray],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        { name: 'array', component: FormlyFieldArray },
      ]
    }),
  ]
})
export class FormlyArrayModule {}
