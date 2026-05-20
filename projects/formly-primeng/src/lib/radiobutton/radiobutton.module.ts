import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormlyPrimengFieldModule } from '../field';
import { withFormlyPrimengRadioButton } from './radiobutton.config';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RadioButtonModule,

    FormlyPrimengFieldModule,
    FormlySelectModule,
    FormlyModule.forChild(withFormlyPrimengRadioButton()),
  ],
})
export class FormlyPrimengRadioButtonModule {}
