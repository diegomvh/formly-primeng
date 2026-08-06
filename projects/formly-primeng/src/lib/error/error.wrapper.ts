import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldWrapper, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormlyPrimengFieldProps } from '../field';

export interface FormlyPrimengErrorProps extends 
  FormlyPrimengFieldProps {
}

@Component({
  selector: 'formly-primeng-error',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, FloatLabelModule],
  template: `
    <ng-container #fieldComponent></ng-container>
    @if (showError) {
      <small [id]="id + '-help'" [ngStyle]="{ color: '#f44336' }">
        <formly-validation-message [field]="field"></formly-validation-message>
      </small>
    } 
  `,
})
export class FormlyPrimengErrorWrapper extends FieldWrapper<FormlyFieldConfig<FormlyPrimengErrorProps>> {
}
