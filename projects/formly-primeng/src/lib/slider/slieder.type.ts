import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FormlyPrimengFieldProps } from '../field';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { FormlyPrimengFieldEventProps } from '../field/field.props';

export interface FormlyPrimengSliderProps extends FormlyPrimengFieldProps, FormlyPrimengFieldEventProps<FormlyPrimengSliderProps> {
}

export interface FormlyPrimengSliderConfig extends FieldTypeConfig<FormlyPrimengSliderProps> {
  type: 'slider' | Type<FormlyPrimengSlider>;
}

@Component({
  selector: 'formly-primeng-slider',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, SliderModule],
  template: `
    <p-slider
      (onBlur)="props.onBlur && props.onBlur(field, $event)"
      (onFocus)="props.onFocus && props.onFocus(field, $event)"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
    </p-slider>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengSlider extends FieldType<FormlyPrimengSliderConfig> {
  override defaultOptions?: Partial<FormlyPrimengSliderConfig> = {
    props: {
    },
  };
}