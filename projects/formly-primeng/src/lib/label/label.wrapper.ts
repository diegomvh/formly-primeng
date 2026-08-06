import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldWrapper, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimengFieldProps } from '../field';

export interface FormlyPrimengLabelProps extends 
  FormlyPrimengFieldProps {
}

@Component({
  selector: 'formly-primeng-label',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule],
  template: `
    @if (props.label && !props.hideLabel) {
    <label [for]="id">
      {{ props.label }}
      @if (props.required && !props.hideRequiredMarker) {
        <span aria-hidden="true">*</span>
      }
    </label>
    }
    <ng-container #fieldComponent></ng-container>
  `,
})
export class FormlyPrimengLabelWrapper extends FieldWrapper<FormlyFieldConfig<FormlyPrimengLabelProps>> {
}
