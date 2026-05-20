import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldWrapper, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormlyPrimengFieldProps } from './field.props';

@Component({
  selector: 'formly-primeng-field',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, FloatLabelModule],
  template: `
    @if (props.floatLabel) {
      <p-floatlabel [variant]="props.floatLabelVariant ?? 'over'">
        <ng-container #fieldComponent></ng-container>
        @if (props.label && !props.hideLabel) {
        <label [for]="id">
          {{ props.label }}
          @if (props.required && !props.hideRequiredMarker) {
            <span aria-hidden="true">*</span>
          }
        </label>
        }
      </p-floatlabel>
    } @else {
      @if (props.label && !props.hideLabel) {
      <label [for]="id">
        {{ props.label }}
        @if (props.required && !props.hideRequiredMarker) {
          <span aria-hidden="true">*</span>
        }
      </label>
      }
      <ng-container #fieldComponent></ng-container>
    }

    @if (showError) {
      <small [id]="id + '-help'" [ngStyle]="{ color: '#f44336' }">
        <formly-validation-message [field]="field"></formly-validation-message>
      </small>
    } @else { 
      @if (props.helpText && !props.hideHelpText) {
        <small [id]="id + '-help'">{{props.helpText}}</small>
      }
    }
  `,
})
export class FormlyPrimengFieldWrapper extends FieldWrapper<FormlyFieldConfig<FormlyPrimengFieldProps>> {
}
