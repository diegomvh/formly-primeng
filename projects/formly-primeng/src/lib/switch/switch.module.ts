import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlySelectModule } from '@ngx-formly/core/select';

import { InputSwitchModule } from 'primeng/inputswitch';

import { FormlyFormFieldModule } from '../form-field/form-field.module';
import { FormlyPrimengSwitch } from './switch.type';

@NgModule({
  declarations: [FormlyPrimengSwitch],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputSwitchModule,

    FormlyFormFieldModule,
    FormlySelectModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'switch',
          component: FormlyPrimengSwitch,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class PrimengSwitchModule {}
