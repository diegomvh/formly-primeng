import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyFieldProps } from '../field';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

interface ToggleSwitchProps extends FormlyFieldProps {
  inputId?: string;
  ariaLabelledBy?: string;
  trueValue: boolean;
  falseValue: boolean;
  ariaLabel?: string;
}

export interface FormlyToggleSwitchFieldConfig extends FormlyFieldConfig<ToggleSwitchProps> {
  type: 'toggleswitch' | Type<FormlyFieldToggleSwitch>;
}

@Component({
  selector: 'formly-field-primeng-toggleswitch',
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
export class FormlyFieldToggleSwitch extends FieldType<FieldTypeConfig<ToggleSwitchProps>> {
  override defaultOptions?: Partial<FieldTypeConfig<ToggleSwitchProps>> = {
    props: {
      trueValue: true,
      falseValue: false,
    },
  };
}

