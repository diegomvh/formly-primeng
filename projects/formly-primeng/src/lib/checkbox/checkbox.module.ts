import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { FormlyFormFieldModule } from '../form-field/form-field.module';

import { FormlyPrimengCheckbox } from './checkbox.type';

@NgModule({
  declarations: [FormlyPrimengCheckbox],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CheckboxModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'checkbox',
          component: FormlyPrimengCheckbox,
          wrappers: ['form-field'],
        },
        {
          name: 'boolean',
          extends: 'checkbox',
        },
      ],
    }),
  ],
})
export class PrimengCheckboxModule {}
