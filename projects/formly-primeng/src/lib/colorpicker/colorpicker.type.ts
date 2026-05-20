import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimengFieldProps } from '../field';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ColorPickerModule } from 'primeng/colorpicker';
import { FormlyPrimengFieldEventProps } from '../field/field.props';

interface FormlyPrimengColorpickerProps extends FormlyPrimengFieldProps, FormlyPrimengFieldEventProps<FormlyPrimengColorpickerProps> {
  inline?: boolean;
}

export interface FormlyPrimengColorpickerConfig extends FieldTypeConfig<FormlyPrimengColorpickerProps> {
  type: 'colorpicker' | Type<FormlyPrimengColorpicker>;
}

@Component({
  selector: 'formly-primeng-colorpicker',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, ColorPickerModule],
  template: `
    <p-colorpicker
      [inline]="props.inline"
      (onChange)="props.change && props.change(field, $event)"
      (onShow)="props.onShow && props.onShow(field, $event)"
      (onHide)="props.onHide && props.onHide(field, $event)"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
    </p-colorpicker>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengColorpicker extends FieldType<FormlyPrimengColorpickerConfig> {
  override defaultOptions?: Partial<FormlyPrimengColorpickerConfig> = {
    props: {
    },
  };
}
