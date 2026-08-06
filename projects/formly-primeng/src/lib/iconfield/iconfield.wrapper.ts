import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldWrapper, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { FormlyPrimengFieldProps } from '../field';

export interface FormlyPrimengIconfieldProps extends 
  FormlyPrimengFieldProps {
}

@Component({
  selector: 'formly-primeng-iconfield',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, IconFieldModule, InputIconModule],
  template: `
    <p-iconfield>
      @for (icon of props.leftIcons; track icon) {
        <p-inputicon class="{{ icon }}" />
      }
      <ng-container #fieldComponent></ng-container>
      @for (icon of props.rightIcons; track icon) {
        <p-inputicon class="{{ icon }}" />
      } 
    </p-iconfield>
  `,
})
export class FormlyPrimengIconfieldWrapper extends FieldWrapper<FormlyFieldConfig<FormlyPrimengIconfieldProps>> {
}
