import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyFieldProps } from '../field';
import { FormlyFieldSelectProps, FormlySelectModule } from '@ngx-formly/core/select';
import { Select, SelectModule } from 'primeng/select';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

interface SelectProps extends FormlyFieldProps, FormlyFieldSelectProps {
  appendTo?: Select['appendTo'];
  filter?: boolean;
  filterBy?: string;
}

export interface FormlySelectFieldConfig extends FormlyFieldConfig<SelectProps> {
  type: 'select' | Type<FormlyFieldSelect>;
}

@Component({
  selector: 'formly-field-select',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, FormlySelectModule, SelectModule],
  template: `
    <p-select
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
    </p-select>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldSelect extends FieldType<FieldTypeConfig<SelectProps>> {
  override defaultOptions?: Partial<FieldTypeConfig<SelectProps>> = {
    props: {
    },
  };
}