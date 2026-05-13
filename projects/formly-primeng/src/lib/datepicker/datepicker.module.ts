import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { FormlyFormFieldModule } from '../field';
import { withFormlyFieldDatePicker } from './datepicker.config';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DatePickerModule,

    FormlyFormFieldModule,
    FormlyModule.forChild(withFormlyFieldDatePicker()),
  ],
})
export class FormlyDatePickerModule {}
