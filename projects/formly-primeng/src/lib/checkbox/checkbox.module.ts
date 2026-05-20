import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { FormlyPrimengFieldModule } from '../field';

import { withFormlyPrimengCheckbox } from './checkbox.config';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CheckboxModule,
    FormlyPrimengFieldModule,
    FormlyModule.forChild(withFormlyPrimengCheckbox()),
  ],
})
export class FormlyPrimengCheckboxModule {}
