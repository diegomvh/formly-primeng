import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { withFormlyField } from './field.config';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormlyModule.forChild(withFormlyField())],
})
export class FormlyFieldModule {}
