import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormlyPrimengFieldModule } from '../field';

import { withFormlyPrimengInputnumber } from './inputnumber.config';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputNumberModule,
    FormlyPrimengFieldModule,
    FormlyModule.forChild(withFormlyPrimengInputnumber()),
  ],
})
export class FormlyPrimengInputnumberModule {}