import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { FormlyFormFieldModule } from '../field';

import { withFormlyFieldColorPicker } from './colorpicker.config';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CheckboxModule,
    FormlyFormFieldModule,
    FormlyModule.forChild(withFormlyFieldColorPicker()),
  ],
})
export class FormlyColorPickerModule {}
