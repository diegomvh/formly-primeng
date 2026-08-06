import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimengFieldProps } from '../field';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputNumberInputEvent, InputNumberModule } from 'primeng/inputnumber';
import { FormlyPrimengFieldEventProps } from '../field/field.props';

interface FormlyPrimengInputnumberProps extends 
  FormlyPrimengFieldProps, 
  FormlyPrimengFieldEventProps<FormlyPrimengInputnumberProps> {
  mode?: 'decimal' | 'currency';
  suffix?: string;
  minFractionDigits?: number;
  maxFractionDigits?: number;
  onInput?: (field: FormlyPrimengInputnumberConfig, event: InputNumberInputEvent) => void;
  onClear?: (field: FormlyPrimengInputnumberConfig, event: void) => void;
}

export interface FormlyPrimengInputnumberConfig extends FieldTypeConfig<FormlyPrimengInputnumberProps> {
  type: 'inputnumber' | Type<FormlyPrimengInputnumber>;
}

@Component({
  selector: 'formly-primeng-inputnumber',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, InputNumberModule],
  template: `
    <p-inputnumber
      [dt]="props.dt"
      [unstyled]="props.unstyled"
      [pt]="props.pt"
      [ptOptions]="props.ptOptions"
      [required]="props.required ?? false"
      [invalid]="props.invalid ?? false"
      [disabled]="props.disabled ?? false"
      [name]="props.name"
      [fluid]="props.fluid"

      [mode]="props.mode"
      [suffix]="props.suffix"
      [max]="props.max"
      [min]="props.min"
      [minFractionDigits]="props.minFractionDigits"
      [maxFractionDigits]="props.maxFractionDigits"

      [formControl]="formControl"
      [formlyAttributes]="field"

      (onInput)="props.onInput && props.onInput(field, $event)"
      (onFocus)="props.focus && props.focus(field, $event) || props.onFocus && props.onFocus(field, $event)"
      (onBlur)="props.blur && props.blur(field, $event) || props.onBlur && props.onBlur(field, $event)"
      (onKeyDown)="props.keydown && props.keydown(field, $event) || props.onKeyDown && props.onKeyDown(field, $event)"
      (onClear)="props.onClear && props.onClear(field, $event)"
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
