import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FormlyPrimengFieldProps } from '../field';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { KnobModule } from 'primeng/knob';
import { FormlyPrimengFieldEventProps } from '../field/field.props';

export interface FormlyPrimengKnobProps extends 
  FormlyPrimengFieldProps,
  FormlyPrimengFieldEventProps<FormlyPrimengKnobProps> {
}

export interface FormlyPrimengKnobConfig extends FieldTypeConfig<FormlyPrimengKnobProps> {
  type: 'knob' | Type<FormlyPrimengKnob>;
}

@Component({
  selector: 'formly-primeng-knob',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, KnobModule],
  template: `
    <p-knob
      [dt]="props.dt"
      [unstyled]="props.unstyled"
      [pt]="props.pt"
      [ptOptions]="props.ptOptions"
      [required]="props.required ?? false"
      [invalid]="props.invalid ?? false"
      [disabled]="props.disabled ?? false"
      [name]="props.name"

      [formControl]="formControl"
      [formlyAttributes]="field"

      (onFocus)="props.focus && props.focus(field, $event) || props.onFocus && props.onFocus(field, $event)"
      (onBlur)="props.blur && props.blur(field, $event) || props.onBlur && props.onBlur(field, $event)"
    >
    </p-knob>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengKnob extends FieldType<FormlyPrimengKnobConfig> {
  override defaultOptions?: Partial<FormlyPrimengKnobConfig> = {
    props: {
    },
  };
}