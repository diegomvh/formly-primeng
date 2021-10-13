import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlySelectModule } from '@ngx-formly/core/select';

import { KnobModule } from 'primeng/knob';

import { FormlyFormFieldModule } from '../form-field/form-field.module';
import { FormlyPrimengKnob } from './knob.type';

@NgModule({
  declarations: [FormlyPrimengKnob],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    KnobModule,

    FormlyFormFieldModule,
    FormlySelectModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'knob',
          component: FormlyPrimengKnob,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class PrimengKnobModule {}
