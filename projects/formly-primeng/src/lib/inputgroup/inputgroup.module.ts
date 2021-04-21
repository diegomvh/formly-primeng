import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FormlyFormFieldModule } from '../form-field/form-field.module';

import { FormlyFieldInputGroup } from './inputgroup.type';

@NgModule({
  declarations: [FormlyFieldInputGroup],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'inputgroup',
          component: FormlyFieldInputGroup,
          wrappers: ['form-field'],
        },
        { name: 'string', extends: 'inputgroup' },
        { name: 'number', extends: 'inputgroup',
          defaultOptions: {
            templateOptions: {
              type: 'number',
            },
          },
        },
        { name: 'integer', extends: 'inputgroup',
          defaultOptions: {
            templateOptions: {
              type: 'number',
            },
          },
        },
      ],
    }),
  ],
})
export class FormlyInputGroupModule {}
