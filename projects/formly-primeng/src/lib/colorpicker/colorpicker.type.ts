import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimengFieldProps } from '../field';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ColorPickerModule } from 'primeng/colorpicker';
import { FormlyPrimengFieldEventProps, FormlyPrimengFieldOverlayProps, FormlyPrimengFieldPassThroughProps } from '../field/field.props';
import { OverlayOptions } from 'primeng/api';

interface FormlyPrimengColorpickerProps extends FormlyPrimengFieldProps, 
  FormlyPrimengFieldPassThroughProps,
  FormlyPrimengFieldOverlayProps, 
  FormlyPrimengFieldEventProps<FormlyPrimengColorpickerProps> 
{
  inline?: boolean;
  format? : 'hex' | 'rgb' | 'hsb';
  autoZIndex?: boolean;
  autofocus?: boolean;
  defaultColor?: string;
  overlayOptions?: OverlayOptions;
  motionOptions?: { [key: string]: any };
}

export interface FormlyPrimengColorpickerConfig extends FieldTypeConfig<FormlyPrimengColorpickerProps> {
  type: 'colorpicker' | Type<FormlyPrimengColorpicker>;
}

@Component({
  selector: 'formly-primeng-colorpicker',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, ColorPickerModule],
  template: `
    <p-colorpicker
      [dt]="props.dt"
      [unstyled]="props.unstyled"
      [pt]="props.pt"
      [ptOptions]="props.ptOptions"
      [required]="props.required ?? false"
      [invalid]="props.invalid ?? false"
      [disabled]="props.disabled ?? false"
      [name]="props.name"

      [inline]="props.inline ?? false"
      [format]="props.format ?? 'hex'"
      [tabindex]="props.tabindex?.toString()"
      [inputId]="id"
      [autoZIndex]="props.autoZIndex ?? true"
      [autofocus]="props.autofocus ?? false"
      [defaultColor]="props.defaultColor ?? 'ff0000'"
      [appendTo]="props.appendTo"
      [overlayOptions]="props.overlayOptions"
      [motionOptions]="props.motionOptions"

      [formControl]="formControl"
      [formlyAttributes]="field"

      (onChange)="props.change && props.change(field, $event) || props.onChange && props.onChange(field, $event)"
      (onShow)="props.onShow && props.onShow(field, $event)"
      (onHide)="props.onHide && props.onHide(field, $event)"
    >
    </p-colorpicker>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengColorpicker extends FieldType<FormlyPrimengColorpickerConfig> {
  override defaultOptions?: Partial<FormlyPrimengColorpickerConfig> = {
    props: {},
  };
}
