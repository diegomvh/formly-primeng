import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldWrapper, FormlyFieldConfig, FormlyFieldProps as CoreFormlyFieldProps, FormlyModule } from '@ngx-formly/core';

export interface FormlyFieldProps extends CoreFormlyFieldProps {
  hideRequiredMarker?: boolean;
  hideLabel?: boolean;
  helpText?: boolean;
  hideHelpText?: boolean;
}

@Component({
  selector: 'formly-wrapper-primeng-field',
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
    @if (props.helpText && !props.hideHelpText) {
      <small>{{props.helpText}}</small>
    }

    @if (showError) {
      <small [ngStyle]="{ color: '#f44336' }">
        <formly-validation-message [field]="field"></formly-validation-message>
      </small>
    }
  `,
})
export class FormlyFieldWrapper extends FieldWrapper<FormlyFieldConfig<FormlyFieldProps>> {}
