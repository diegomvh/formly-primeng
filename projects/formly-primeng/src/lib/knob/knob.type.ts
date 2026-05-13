import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FormlyFieldProps } from '../field';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { KnobModule } from 'primeng/knob';

interface KnobProps extends FormlyFieldProps {
}

export interface FormlyKnobFieldConfig extends FormlyFieldConfig<KnobProps> {
  type: 'knob' | Type<FormlyFieldKnob>;
}

@Component({
  selector: 'formly-field-primeng-knob',
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
export class FormlyFieldKnob extends FieldType<FieldTypeConfig<KnobProps>> {
  override defaultOptions?: Partial<FieldTypeConfig<KnobProps>> = {
    props: {
    },
  };
}