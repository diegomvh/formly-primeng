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
    <ng-container #fieldComponent></ng-container>
  `,
})
export class FormlyPrimengFieldWrapper extends FieldWrapper<FormlyFieldConfig<FormlyPrimengFieldProps>> {
}
