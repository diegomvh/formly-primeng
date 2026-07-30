import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimengFieldProps } from '../field';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputOtpModule } from 'primeng/inputotp';
import { FormlyPrimengFieldEventProps } from '../field/field.props';

export interface FormlyPrimengInputotpProps extends 
  FormlyPrimengFieldProps,
  FormlyPrimengFieldEventProps<FormlyPrimengInputotpProps> {
  integerOnly: boolean;
}

export interface FormlyPrimengInputotpConfig extends FieldTypeConfig<FormlyPrimengInputotpProps> {
  type: 'inputotp' | Type<FormlyPrimengInputotp>;
}

@Component({
  selector: 'formly-primeng-inputotp',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, InputOtpModule],
  template: `
    <p-inputotp
      [dt]="props.dt"
      [unstyled]="props.unstyled"
      [pt]="props.pt"
      [ptOptions]="props.ptOptions"
      [required]="props.required ?? false"
      [invalid]="props.invalid ?? false"
      [disabled]="props.disabled ?? false"
      [name]="props.name"

      [integerOnly]="props.integerOnly"

      [formControl]="formControl"
      [formlyAttributes]="field"

      (onChange)="props.onChange && props.onChange(field, $event)"
      (onFocus)="props.focus && props.focus(field, $event) || props.onFocus && props.onFocus(field, $event)"
      (onBlur)="props.blur && props.blur(field, $event) || props.onBlur && props.onBlur(field, $event)"
    ></p-inputotp>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengInputotp extends FieldType<FormlyPrimengInputotpConfig> {
  override defaultOptions?: Partial<FormlyPrimengInputotpConfig> = {
    props: {
      integerOnly: false,
    },
  }
}
