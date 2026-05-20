import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimengFieldProps } from '../field';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputNumberModule } from 'primeng/inputnumber';

interface FormlyPrimengInputnumberProps extends FormlyPrimengFieldProps {
  mode?: 'decimal' | 'currency';
}

export interface FormlyPrimengInputnumberConfig extends FieldTypeConfig<FormlyPrimengInputnumberProps> {
  type: 'inputnumber' | Type<FormlyPrimengInputnumber>;
}

@Component({
  selector: 'formly-primeng-inputnumber',
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
export class FormlyPrimengInputnumber extends FieldType<FormlyPrimengInputnumberConfig> {
  override defaultOptions?: Partial<FormlyPrimengInputnumberConfig> = {
    props: {
      mode: 'decimal',
    },
  }
}
