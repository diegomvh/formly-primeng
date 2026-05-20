import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { FormlyPrimengFieldModule } from '../field';

import { withFormlyPrimengColorpicker } from './colorpicker.config';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CheckboxModule,
    FormlyPrimengFieldModule,
    FormlyModule.forChild(withFormlyPrimengColorpicker()),
  ],
})
export class FormlyPrimengColorpickerModule {}
