import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { FormlyPrimengFieldProps } from '../field';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

interface FormlyPrimengPasswordProps extends FormlyPrimengFieldProps {
  toggleMask?: boolean;
}

export interface FormlyPrimengPasswordConfig extends FieldTypeConfig<FormlyPrimengPasswordProps> {
  type: 'password' | Type<FormlyPrimengPassword>;
}

@Component({
  selector: 'formly-primeng-password',
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
export class FormlyPrimengPassword extends FieldType<FormlyPrimengPasswordConfig> {
  override defaultOptions?: Partial<FormlyPrimengPasswordConfig> = {
    props: {
      toggleMask: false,
    },
  };
}