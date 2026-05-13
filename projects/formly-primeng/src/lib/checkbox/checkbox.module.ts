import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { FormlyFormFieldModule } from '../field';

import { withFormlyFieldCheckbox } from './checkbox.config';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CheckboxModule,
    FormlyFormFieldModule,
    FormlyModule.forChild(withFormlyFieldCheckbox()),
  ],
})
export class FormlyCheckboxModule {}
