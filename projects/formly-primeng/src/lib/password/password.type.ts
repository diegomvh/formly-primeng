import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { FormlyFieldProps } from '../field';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

interface PasswordProps extends FormlyFieldProps {
  toggleMask?: boolean;
}

export interface FormlyInputTextFieldConfig extends FormlyFieldConfig<PasswordProps> {
  type: 'password' | Type<FormlyFieldPassword>;
}

@Component({
  selector: 'formly-field-primeng-password',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, PasswordModule],
  template: `
    <p-password
      [placeholder]="props.placeholder"
      [toggleMask]="props.toggleMask"
      (onBlur)="props.blur && props.blur(field, $event)"
      (onFocus)="props.focus && props.focus(field, $event)"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
    </p-password>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldPassword extends FieldType<FieldTypeConfig<PasswordProps>> {
  override defaultOptions?: Partial<FieldTypeConfig<PasswordProps>> = {
    props: {
      toggleMask: false,
    },
  };
}