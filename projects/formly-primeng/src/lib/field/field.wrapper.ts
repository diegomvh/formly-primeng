import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldWrapper, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { FormlyPrimengFieldProps } from './field.props';

@Component({
  selector: 'formly-primeng-field',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, IconFieldModule, InputIconModule],
  template: `
    @if (props.label && !props.hideLabel) {
    <label [for]="id">
      {{ props.label }}
      @if (props.required && !props.hideRequiredMarker) {
        <span aria-hidden="true">*</span>
      }
    </label>
    }
    @if (props.leftIcons || props.rightIcons) {
      <p-iconfield>
        @for (icon of props.leftIcons; track icon) {
          <p-inputicon class="{{ icon }}" />
        }
        <ng-container #fieldComponent></ng-container>
        @for (icon of props.rightIcons; track icon) {
          <p-inputicon class="{{ icon }}" />
        } 
      </p-iconfield>
    } @else {
      <ng-container #fieldComponent></ng-container>
    }
  `,
})
export class FormlyPrimengFieldWrapper extends FieldWrapper<FormlyFieldConfig<FormlyPrimengFieldProps>> {
}
