import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyFieldProps } from '../field';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputOtpModule } from 'primeng/inputotp';

interface InputOtpProps extends FormlyFieldProps {
  integerOnly: boolean;
}

export interface FormlyInputOtpFieldConfig extends FormlyFieldConfig<InputOtpProps> {
  type: 'inputotp' | Type<FormlyFieldInputOtp>;
}

@Component({
  selector: 'formly-field-primeng-inputotp',
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
export class FormlyFieldInputOtp extends FieldType<FieldTypeConfig<InputOtpProps>> {
  override defaultOptions?: Partial<FieldTypeConfig<InputOtpProps>> = {
    props: {
      integerOnly: false,
    },
  }
}
