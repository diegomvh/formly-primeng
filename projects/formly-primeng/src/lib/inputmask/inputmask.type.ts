import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimengFieldProps } from '../field';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputMaskModule } from 'primeng/inputmask';
import { FormlyPrimengFieldAriaProps, FormlyPrimengFieldEventProps } from '../field/field.props';

export interface FormlyPrimengInputmaskProps extends 
  FormlyPrimengFieldProps,
  FormlyPrimengFieldAriaProps,
  FormlyPrimengFieldEventProps<FormlyPrimengInputmaskProps> {
  unmask?: boolean;
  mask?: string;
  slotChar?: string;
  characterPattern?: string;
  keepBuffer?: boolean;
  onComplete?: (field: FormlyPrimengInputmaskConfig, event: Event) => void;
  onInput?: (field: FormlyPrimengInputmaskConfig, event: Event) => void;
  onClear?: (field: FormlyPrimengInputmaskConfig, event: void) => void;
}

export interface FormlyPrimengInputmaskConfig extends FieldTypeConfig<FormlyPrimengInputmaskProps> {
  type: 'inputmask' | Type<FormlyPrimengInputmask>;
}

@Component({
  selector: 'formly-primeng-inputmask',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, InputMaskModule],
  template: `
    <p-inputmask
      [inputId]="id"
      [dt]="props.dt"
      [unstyled]="props.unstyled"
      [pt]="props.pt"
      [ptOptions]="props.ptOptions"
      [required]="props.required ?? false"
      [invalid]="props.invalid ?? false"
      [disabled]="props.disabled ?? false"
      [name]="props.name"
      [fluid]="props.fluid"

      [ariaLabel]="props.ariaLabel"
      [ariaLabelledBy]="props.ariaLabelledBy"
      [unmask]="props.unmask"
      [mask]="props.mask"
      [characterPattern]="props.characterPattern ?? '[A-Za-z]'"
      [keepBuffer]="props.keepBuffer"

      [formControl]="formControl"
      [formlyAttributes]="field"

      (onComplete)="props.onComplete && props.onComplete(field, $event)"
      (onFocus)="props.focus && props.focus(field, $event) || props.onFocus && props.onFocus(field, $event)"
      (onBlur)="props.blur && props.blur(field, $event) || props.onBlur && props.onBlur(field, $event)"
      (onInput)="props.onInput && props.onInput(field, $event)"
      (onKeyDown)="props.keydown && props.keydown(field, $event) || props.onKeyDown && props.onKeyDown(field, $event)"
      (onClear)="props.onClear && props.onClear(field, $event)"

    ></p-inputmask>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengInputmask extends FieldType<FormlyPrimengInputmaskConfig> {}
