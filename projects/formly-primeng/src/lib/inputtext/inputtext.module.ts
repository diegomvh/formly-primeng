import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FormlyPrimengFieldModule } from '../field';

import { withFormlyPrimengInputtext } from './inputtext.config';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    FormlyPrimengFieldModule,
    FormlyModule.forChild(withFormlyPrimengInputtext()),
  ],
})
export class FormlyPrimengInputtextModule {}