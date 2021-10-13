import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ChipsModule } from 'primeng/chips';
import { FormlyFormFieldModule } from '../form-field/form-field.module';

import { FormlyPrimengChips } from './chips.type';

@NgModule({
  declarations: [FormlyPrimengChips],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChipsModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'chips',
          component: FormlyPrimengChips,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class PrimengChipsModule {}
