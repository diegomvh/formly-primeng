import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FormlyFieldProps } from '../field';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';

interface SliderProps extends FormlyFieldProps {
}

export interface FormlySliderFieldConfig extends FormlyFieldConfig<SliderProps> {
  type: 'slider' | Type<FormlyFieldSlider>;
}

@Component({
  selector: 'formly-field-primeng-slider',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, SliderModule],
  template: `
    <p-slider
      (onBlur)="props.blur && props.blur(field, $event)"
      (onFocus)="props.focus && props.focus(field, $event)"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
    </p-slider>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldSlider extends FieldType<FieldTypeConfig<SliderProps>> {
  override defaultOptions?: Partial<FieldTypeConfig<SliderProps>> = {
    props: {
    },
  };
}