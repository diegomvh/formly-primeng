import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyPrimengFieldProps } from '../field';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FormlyPrimengFieldAriaProps, FormlyPrimengFieldEventProps } from '../field/field.props';

interface FormlyPrimengToggleswitchProps extends FormlyPrimengFieldProps,
  FormlyPrimengFieldAriaProps,
  FormlyPrimengFieldEventProps<FormlyPrimengToggleswitchProps>
 {
  inputId?: string;
  trueValue: boolean;
  falseValue: boolean;
}

export interface FormlyPrimengToggleswitchConfig extends FieldTypeConfig<FormlyPrimengToggleswitchProps> {
  type: 'toggleswitch' | Type<FormlyPrimengToggleswitch>;
}

@Component({
  selector: 'formly-primeng-toggleswitch',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, ToggleSwitchModule],
  template: `
    <p-toggleswitch
      [tabindex]="props.tabindex"
      [inputId]="props.inputId"
      [ariaLabelledBy]="props.ariaLabelledBy"
      [trueValue]="props.trueValue"
      [falseValue]="props.falseValue"
      [ariaLabel]="props.ariaLabel"
      (onChange)="props.change && props.change(field, $event)"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
    </p-toggleswitch>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengToggleswitch extends FieldType<FormlyPrimengToggleswitchConfig> {
  override defaultOptions?: Partial<FormlyPrimengToggleswitchConfig> = {
    props: {
      trueValue: true,
      falseValue: false,
    },
  };
}

