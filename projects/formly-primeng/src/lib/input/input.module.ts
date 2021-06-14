import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { PasswordModule } from 'primeng/password';
import { FormlyFormFieldModule } from '../form-field/form-field.module';

import { FormlyPrimengInput } from './input.type';

@NgModule({
  declarations: [FormlyPrimengInput],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    InputMaskModule,
    InputNumberModule,
    PasswordModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'input',
          component: FormlyPrimengInput,
          wrappers: ['form-field'],
        },
        { name: 'string', extends: 'input' },
        { name: 'number', extends: 'input',
          defaultOptions: {
            templateOptions: {
              type: 'number',
            },
          },
        },
        { name: 'integer', extends: 'input',
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
export class PrimengInputModule {}
