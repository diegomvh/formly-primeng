import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PasswordModule } from 'primeng/password';

import { FormlyPrimengFieldModule } from '../field/field.module';
import { withFormlyPrimengKnob } from './knob.config';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PasswordModule,

    FormlyPrimengFieldModule,
    FormlyModule.forChild(withFormlyPrimengKnob()),
  ],
})
export class FormlyPrimengKnobModule {}
