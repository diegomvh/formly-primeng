import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimengFieldProps } from '../field';
import { CommonModule } from '@angular/common';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormlySelectModule } from '@ngx-formly/core/select';

export interface FormlyPrimengRadioButtonProps extends FormlyPrimengFieldProps {}

export interface FormlyPrimengRadioButtonConfig extends FieldTypeConfig<FormlyPrimengRadioButtonProps> {
  type: 'radiobutton' | Type<FormlyPrimengRadioButton>;
}

@Component({
  selector: 'formly-primeng-radioButton',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, FormlySelectModule, RadioButtonModule],
  template: `
    <div
      class="p-field-radiobutton"
      *ngFor="let option of props.options | formlySelectOptions: field | async; let index = index"
    >
      <p-radioButton
        [name]="field.name || id"
        [formControl]="option.disabled ? disabledControl : formControl"
        [value]="option.value"
        [inputId]="id + index"
      >
      </p-radioButton>
      <label [for]="id + index" class="ml-2">{{ option.label }}</label>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengRadioButton extends FieldType<FormlyPrimengRadioButtonConfig> {
  get disabledControl() {
    return new UntypedFormControl({ value: this.formControl.value, disabled: true });
  }
}
