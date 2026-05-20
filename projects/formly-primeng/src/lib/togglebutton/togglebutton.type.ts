import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyPrimengFieldProps } from '../field';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { ToggleButtonModule } from 'primeng/togglebutton';

interface FormlyPrimengTogglebuttonProps extends FormlyPrimengFieldProps {
  inputId?: string;
  ariaLabelledBy?: string;
  trueValue: boolean;
  falseValue: boolean;
  ariaLabel?: string;
}

export interface FormlyPrimengTogglebuttonConfig extends FieldTypeConfig<FormlyPrimengTogglebuttonProps> {
  type: 'togglebutton' | Type<FormlyPrimengTogglebutton>;
}

@Component({
  selector: 'formly-primeng-togglebutton',
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
export class FormlyPrimengTogglebutton extends FieldType<FormlyPrimengTogglebuttonConfig> {
  override defaultOptions?: Partial<FormlyPrimengTogglebuttonConfig> = {
    props: {
      trueValue: true,
      falseValue: false,
    },
  };
}

