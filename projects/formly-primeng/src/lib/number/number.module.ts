import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { PasswordModule } from 'primeng/password';
import { FormlyFormFieldModule } from '../form-field/form-field.module';

import { FormlyPrimengNumber } from './number.type';

@NgModule({
  declarations: [FormlyPrimengNumber],
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
          name: 'number',
          component: FormlyPrimengNumber,
          wrappers: ['form-field'],
        },
        { name: 'integer', extends: 'number' },
      ],
    }),
  ],
})
export class PrimengNumberModule {}
