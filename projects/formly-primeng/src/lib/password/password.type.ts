import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { FormlyPrimengFieldProps } from '../field';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyPrimengFieldAriaProps, FormlyPrimengFieldEventProps } from '../field/field.props';

interface FormlyPrimengPasswordProps extends 
  FormlyPrimengFieldProps,
  FormlyPrimengFieldAriaProps,
  FormlyPrimengFieldEventProps<FormlyPrimengPasswordProps> {
  toggleMask?: boolean;
  onClear?: (field: FormlyPrimengPasswordConfig, event: Event) => void;
}

export interface FormlyPrimengPasswordConfig extends FieldTypeConfig<FormlyPrimengPasswordProps> {
  type: 'password' | Type<FormlyPrimengPassword>;
}

@Component({
  selector: 'formly-primeng-password',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, PasswordModule],
  template: `
    <p-password
      [dt]="props.dt"
      [unstyled]="props.unstyled"
      [pt]="props.pt"
      [ptOptions]="props.ptOptions"
      [required]="props.required ?? false"
      [invalid]="props.invalid ?? false"
      [disabled]="props.disabled ?? false"
      [name]="props.name"

      [placeholder]="props.placeholder"
      [toggleMask]="props.toggleMask"
      [ariaLabel]="props.ariaLabel"
      [ariaLabelledBy]="props.ariaLabelledBy"

      [formControl]="formControl"
      [formlyAttributes]="field"

      (onFocus)="props.focus && props.focus(field, $event) || props.onFocus && props.onFocus(field, $event)"
      (onBlur)="props.blur && props.blur(field, $event) || props.onBlur && props.onBlur(field, $event)"
      (onClear)="props.onClear && props.onClear(field, $event)"
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