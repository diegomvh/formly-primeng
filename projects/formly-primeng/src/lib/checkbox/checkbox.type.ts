import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimengFieldProps } from '../field';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { FormlyPrimengFieldEventProps, FormlyPrimengFieldPassThroughProps } from '../field/field.props';

export interface FormlyPrimengCheckboxProps extends FormlyPrimengFieldProps, 
  FormlyPrimengFieldPassThroughProps,
  FormlyPrimengFieldEventProps<FormlyPrimengCheckboxProps>
  {
  value?: any;
  binary?: boolean;
  ariaLabelledBy?: string;
  ariaLabel?: string;
  inputStyle?: { [key: string]: any };
  inputClass?: string;
  indeterminate?: boolean;
  checkboxIcon?: string;
  autofocus?: boolean;
  trueValue?: any;
  falseValue?: any;
  variant?: 'outlined' | 'filled';
  size?: 'small' | 'large';
}

export interface FormlyPrimengCheckboxConfig extends FieldTypeConfig<FormlyPrimengCheckboxProps> {
  type: 'checkbox' | Type<FormlyPrimengCheckbox>;
}

@Component({
  selector: 'formly-primeng-checkbox',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, CheckboxModule],
  template: `
    <p-checkbox
      [dt]="props.dt"
      [unstyled]="props.unstyled"
      [pt]="props.pt"
      [ptOptions]="props.ptOptions"
      [required]="props.required ?? false"
      [invalid]="props.invalid ?? false"
      [disabled]="props.disabled ?? false"
      [name]="props.name"

      [value]="props.value"
      [binary]="props.binary ?? false"
      [ariaLabelledBy]="props.ariaLabelledBy"
      [ariaLabel]="props.ariaLabel"
      [tabindex]="props.tabindex"
      [inputId]="id"
      [inputStyle]="props.inputStyle"
      [inputClass]="props.inputClass"
      [indeterminate]="props.indeterminate ?? false"
      [checkboxIcon]="props.checkboxIcon"
      [readonly]="props.readonly ?? false"
      [autofocus]="props.autofocus ?? false"
      [trueValue]="props.trueValue ?? true"
      [falseValue]="props.falseValue ?? false"
      [variant]="props.variant"
      [size]="props.size"

      [formControl]="formControl"
      [formlyAttributes]="field"

      (onChange)="props.change && props.change(field, $event) || props.onChange && props.onChange(field, $event)"
      (onFocus)="props.focus && props.focus(field, $event) || props.onFocus && props.onFocus(field, $event)"
      (onBlur)="props.blur && props.blur(field, $event) || props.onBlur && props.onBlur(field, $event)"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengCheckbox extends FieldType<FormlyPrimengCheckboxConfig> {
  override defaultOptions?: Partial<FormlyPrimengCheckboxConfig> = {
    props: { },
  };
}
