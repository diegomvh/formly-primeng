import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormlyFormFieldModule } from '../field';

import { withFormlyFieldInputNumber } from './inputnumber.config';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputNumberModule,
    FormlyFormFieldModule,
    FormlyModule.forChild(withFormlyFieldInputNumber()),
  ],
})
export class FormlyInputNumberModule {}