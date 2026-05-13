import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyFieldProps } from '../field';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ColorPickerModule } from 'primeng/colorpicker';

interface ColorPickerProps extends FormlyFieldProps {
}

export interface FormlyColorPickerFieldConfig extends FormlyFieldConfig<ColorPickerProps> {
  type: 'colorpicker' | Type<FormlyFieldColorPicker>;
}

@Component({
  selector: 'formly-field-primeng-checkbox',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, ColorPickerModule],
  template: `
    <p-colorpicker
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
    </p-colorpicker>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldColorPicker extends FieldType<FieldTypeConfig<ColorPickerProps>> {
  override defaultOptions?: Partial<FieldTypeConfig<ColorPickerProps>> = {
    props: {
    },
  };
}
