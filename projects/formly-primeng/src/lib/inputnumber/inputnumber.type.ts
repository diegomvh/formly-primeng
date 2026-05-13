import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyFieldProps } from '../field';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputNumberModule } from 'primeng/inputnumber';

interface InputNumberProps extends FormlyFieldProps {
  mode?: 'decimal' | 'currency';
}

export interface FormlyInputNumberFieldConfig extends FormlyFieldConfig<InputNumberProps> {
  type: 'inputnumber' | Type<FormlyFieldInputNumber>;
}

@Component({
  selector: 'formly-field-primeng-inputnumber',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, InputNumberModule],
  template: `
    <p-inputnumber
      [mode]="props.mode"
      [formControl]="formControl"
      [formlyAttributes]="field"
    ></p-inputnumber>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldInputNumber extends FieldType<FieldTypeConfig<InputNumberProps>> {
  override defaultOptions?: Partial<FieldTypeConfig<InputNumberProps>> = {
    props: {
      mode: 'decimal',
    },
  }
}
