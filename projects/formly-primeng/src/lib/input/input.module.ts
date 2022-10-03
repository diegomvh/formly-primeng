import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { KeyFilterModule } from 'primeng/keyfilter';

import { FormlyFormFieldModule } from '../form-field/form-field.module';

import { FormlyPrimengInput } from './input.type';

@NgModule({
  declarations: [FormlyPrimengInput],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    TooltipModule,
    KeyFilterModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'input',
          component: FormlyPrimengInput,
          wrappers: ['form-field'],
        },
        { name: 'string', extends: 'input' },
      ],
    }),
  ],
})
export class PrimengInputModule {}
