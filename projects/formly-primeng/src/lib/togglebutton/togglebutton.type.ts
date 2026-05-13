import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyFieldProps } from '../field';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { ToggleButtonModule } from 'primeng/togglebutton';

interface ToggleButtonProps extends FormlyFieldProps {
  inputId?: string;
  ariaLabelledBy?: string;
  trueValue: boolean;
  falseValue: boolean;
  ariaLabel?: string;
}

export interface FormlyToggleButtonFieldConfig extends FormlyFieldConfig<ToggleButtonProps> {
  type: 'togglebutton' | Type<FormlyFieldToggleButton>;
}

@Component({
  selector: 'formly-field-primeng-togglebutton',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, ToggleButtonModule],
  template: `
    <p-togglebutton
      [tabindex]="props.tabindex"
      [inputId]="props.inputId"
      [ariaLabelledBy]="props.ariaLabelledBy"
      [ariaLabel]="props.ariaLabel"
      (onChange)="props.change && props.change(field, $event)"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
    </p-togglebutton>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldToggleButton extends FieldType<FieldTypeConfig<ToggleButtonProps>> {
  override defaultOptions?: Partial<FieldTypeConfig<ToggleButtonProps>> = {
    props: {
      trueValue: true,
      falseValue: false,
    },
  };
}

