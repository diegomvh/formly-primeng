import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyFieldProps } from '../field';
import { FormlyFieldSelectProps, FormlySelectModule } from '@ngx-formly/core/select';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MultiSelect, MultiSelectModule } from 'primeng/multiselect';

interface MultiSelectProps extends FormlyFieldProps, FormlyFieldSelectProps {
  appendTo?: MultiSelect['appendTo'];
  filter?: boolean;
  filterBy?: string;
}

export interface FormlyMultiSelectFieldConfig extends FormlyFieldConfig<MultiSelectProps> {
  type: 'multiselect' | Type<FormlyFieldMultiSelect>;
}

@Component({
  selector: 'formly-field-multiselect',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, FormlySelectModule, MultiSelectModule],
  template: `
    <p-multiselect
      [placeholder]="props.placeholder"
      [options]="$any(props.options | formlySelectOptions: field | async)"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [showClear]="!props.required"
      [appendTo]="props.appendTo"
      [filter]="props.filter"
      [filterBy]="props.filterBy ?? 'label'"
      [optionLabel]="'label'"
      [optionValue]="'value'"
      (onChange)="props.change && props.change(field, $event)"
    >
    </p-multiselect>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldMultiSelect extends FieldType<FieldTypeConfig<MultiSelectProps>> {
  override defaultOptions?: Partial<FieldTypeConfig<MultiSelectProps>> = {
    props: {
    },
  };
}