import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { withFormlyPrimengArray } from './array.config';
import { FormlyPrimengFieldModule } from '../field';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyPrimengFieldModule,
    FormlyModule.forChild(withFormlyPrimengArray()),
  ],
})
export class FormlyPrimengArrayModule {}
