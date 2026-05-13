import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyFieldProps } from '../field';
import { CommonModule } from '@angular/common';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormlySelectModule } from '@ngx-formly/core/select';

type RadioButtonProps = FormlyFieldProps;

export interface FormlyRadioButtonFieldConfig extends FormlyFieldConfig<RadioButtonProps> {
  type: 'radiobutton' | Type<FormlyFieldRadioButton>;
}

@Component({
  selector: 'formly-field-radiobutton',
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
export class FormlyFieldRadioButton extends FieldType<FieldTypeConfig<RadioButtonProps>> {
  get disabledControl() {
    return new UntypedFormControl({ value: this.formControl.value, disabled: true });
  }
}
