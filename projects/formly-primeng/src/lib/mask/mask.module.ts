import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { PasswordModule } from 'primeng/password';
import { FormlyFormFieldModule } from '../form-field/form-field.module';

import { FormlyPrimengMask } from './mask.type';

@NgModule({
  declarations: [FormlyPrimengMask],
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
          name: 'mask',
          component: FormlyPrimengMask,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class PrimengMaskModule {}
