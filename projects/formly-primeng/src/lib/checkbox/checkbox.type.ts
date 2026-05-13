import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyFieldProps as CheckboxProps } from '../field';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

export interface FormlyCheckboxFieldConfig extends FormlyFieldConfig<CheckboxProps> {
  type: 'checkbox' | Type<FormlyFieldCheckbox>;
}

@Component({
  selector: 'formly-field-primeng-checkbox',
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
export class FormlyFieldCheckbox extends FieldType<FieldTypeConfig<CheckboxProps>> {
  override defaultOptions?: Partial<FieldTypeConfig<CheckboxProps>> = {
    props: {
      hideLabel: true 
    },
  };
}
