import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { withFormlyPrimengIftalabel } from './iftalabel.config';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormlyModule.forChild(withFormlyPrimengIftalabel())],
})
export class FormlyPrimengIftalabelModule {}
