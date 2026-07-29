import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FormlyPrimengFieldProps } from '../field';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SliderModule, SliderSlideEndEvent } from 'primeng/slider';
import { FormlyPrimengFieldAriaProps, FormlyPrimengFieldEventProps } from '../field/field.props';

export interface FormlyPrimengSliderProps extends FormlyPrimengFieldProps, 
  FormlyPrimengFieldAriaProps,
  FormlyPrimengFieldEventProps<FormlyPrimengSliderProps> {
  animate?: boolean;
  orientation?: 'vertical' | 'horizontal';
  stpe?: number;
  range?: boolean;
  autofocus?: boolean;
  onSlideEnd?: (field: FormlyPrimengSliderConfig, event: SliderSlideEndEvent) => void;
}

export interface FormlyPrimengSliderConfig extends FieldTypeConfig<FormlyPrimengSliderProps> {
  type: 'slider' | Type<FormlyPrimengSlider>;
}

@Component({
  selector: 'formly-primeng-slider',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, SliderModule],
  template: `
    <p-slider
      [dt]="props.dt"
      [unstyled]="props.unstyled"
      [pt]="props.pt"
      [ptOptions]="props.ptOptions"
      [required]="props.required ?? false"
      [invalid]="props.invalid ?? false"
      [disabled]="props.disabled ?? false"
      [name]="props.name"

      [animate]="props.animate"
      [min]="props.min"
      [max]="props.max"
      [orientation]="props.orientation ?? 'horizontal'"
      [step]="props.step"
      [range]="props.range ?? false"
      [ariaLabel]="props.ariaLabel"
      [ariaLabelledBy]="props.ariaLabelledBy"
      [tabindex]="props.tabindex"
      [autofocus]="props.autofocus ?? false"

      [formControl]="formControl"
      [formlyAttributes]="field"

      (onChange)="props.change && props.change(field, $event) || props.onChange && props.onChange(field, $event)"
      (onSlideEnd)="props.onSlideEnd && props.onSlideEnd(field, $event)"
    >
    </p-slider>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengSlider extends FieldType<FormlyPrimengSliderConfig> {
  override defaultOptions?: Partial<FormlyPrimengSliderConfig> = {
    props: { },
  };
}