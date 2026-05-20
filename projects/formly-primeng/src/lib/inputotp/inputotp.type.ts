import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimengFieldProps } from '../field';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputOtpModule } from 'primeng/inputotp';

export interface FormlyPrimengInputotpProps extends FormlyPrimengFieldProps {
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
      [integerOnly]="props.integerOnly"
      [formControl]="formControl"
      [formlyAttributes]="field"
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
