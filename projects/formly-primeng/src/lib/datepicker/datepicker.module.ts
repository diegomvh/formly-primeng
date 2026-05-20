import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { FormlyPrimengFieldModule } from '../field';
import { withFormlyPrimengDatepicker } from './datepicker.config';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DatePickerModule,

    FormlyPrimengFieldModule,
    FormlyModule.forChild(withFormlyPrimengDatepicker()),
  ],
})
export class FormlyPrimengDatepickerModule {}
