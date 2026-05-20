import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimengFieldProps } from '../field';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

export interface FormlyPrimengCheckboxProps extends FormlyPrimengFieldProps {}

export interface FormlyPrimengCheckboxConfig extends FieldTypeConfig<FormlyPrimengCheckboxProps> {
  type: 'checkbox' | Type<FormlyPrimengCheckbox>;
}

@Component({
  selector: 'formly-primeng-checkbox',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, CheckboxModule],
  template: `
    <div class="p-field-checkbox flex items-center gap-1">
      <p-checkbox
        [inputId]="id"
        [binary]="true"
        [formControl]="formControl"
        [formlyAttributes]="field"
        [inputId]="id"
      />
      <label [for]="id" class="ml-2">{{ props.label }}</label>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengCheckbox extends FieldType<FormlyPrimengCheckboxConfig> {
  override defaultOptions?: Partial<FormlyPrimengCheckboxConfig> = {
    props: {
      hideLabel: true 
    },
  };
}
