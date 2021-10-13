import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlySelectModule } from '@ngx-formly/core/select';

import { PasswordModule } from 'primeng/password';

import { FormlyFormFieldModule } from '../form-field/form-field.module';
import { FormlyPrimengBase } from './base.type';

@NgModule({
  declarations: [FormlyPrimengBase],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PasswordModule,

    FormlyFormFieldModule,
    FormlySelectModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'password',
          component: FormlyPrimengBase,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class PrimengBaseModule {}
