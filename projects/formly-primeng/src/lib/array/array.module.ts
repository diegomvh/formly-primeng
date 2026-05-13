import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { withFormlyFieldWrapperArray } from './array.config';
import { FormlyFormFieldModule } from '../field';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyFormFieldModule,
    FormlyModule.forChild(withFormlyFieldWrapperArray()),
  ],
})
export class FormlyFieldArrayModule {}
