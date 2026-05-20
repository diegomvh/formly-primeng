import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FormlyPrimengFieldProps } from '../field';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { KnobModule } from 'primeng/knob';

export interface FormlyPrimengKnobProps extends FormlyPrimengFieldProps {
}

export interface FormlyPrimengKnobConfig extends FieldTypeConfig<FormlyPrimengKnobProps> {
  type: 'knob' | Type<FormlyPrimengKnob>;
}

@Component({
  selector: 'formly-primeng-knob',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, KnobModule],
  template: `
    <p-knob
      (onBlur)="props.blur && props.blur(field, $event)"
      (onFocus)="props.focus && props.focus(field, $event)"
      [formControl]="formControl"
      [formlyAttributes]="field"
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