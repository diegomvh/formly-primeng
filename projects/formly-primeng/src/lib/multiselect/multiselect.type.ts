import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimengFieldProps } from '../field';
import { FormlyFieldSelectProps, FormlySelectModule } from '@ngx-formly/core/select';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MultiSelect, MultiSelectModule } from 'primeng/multiselect';

interface FormlyPrimengMultiselectProps extends FormlyPrimengFieldProps, FormlyFieldSelectProps {
  appendTo?: MultiSelect['appendTo'];
  optionLabel?: string;
  optionValue?: string;
  filter?: boolean;
  filterBy?: string;
  fluid?: boolean;
}

export interface FormlyPrimengMultiselectConfig extends FieldTypeConfig<FormlyPrimengMultiselectProps> {
  type: 'multiselect' | Type<FormlyPrimengMultiselect>;
}

@Component({
  selector: 'formly-primeng-multiselect',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, FormlySelectModule, MultiSelectModule],
  template: `
    <p-multiselect
      [placeholder]="props.placeholder"
      [options]="$any(props.options | formlySelectOptions: field | async)"
      [optionLabel]="props.optionLabel"
      [optionValue]="props.optionValue"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [showClear]="!props.required"
      [fluid]="props.fluid"
      [appendTo]="props.appendTo"
      [filter]="props.filter"
      [filterBy]="props.filterBy ?? 'label'"
      [optionLabel]="'label'"
      [optionValue]="'value'"
      (onChange)="props.change && props.change(field, $event)"
      (onBlur)="props.blur && props.blur(field, $event)"
    >
    </p-multiselect>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengMultiselect extends FieldType<FormlyPrimengMultiselectConfig> {
  override defaultOptions?: Partial<FormlyPrimengMultiselectConfig> = {
    props: {
    },
  };
}