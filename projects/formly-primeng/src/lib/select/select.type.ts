import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimengFieldProps } from '../field';
import { FormlyFieldSelectProps, FormlySelectModule } from '@ngx-formly/core/select';
import { Select, SelectModule } from 'primeng/select';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

interface FormlyPrimengSelectProps extends FormlyPrimengFieldProps, FormlyFieldSelectProps {
  appendTo?: Select['appendTo'];
  filter?: boolean;
  filterBy?: string;
}

export interface FormlyPrimengSelectConfig extends FieldTypeConfig<FormlyPrimengSelectProps> {
  type: 'select' | Type<FormlyPrimengSelect>;
}

@Component({
  selector: 'formly-primeng-select',
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
export class FormlyPrimengSelect extends FieldType<FormlyPrimengSelectConfig> {
  override defaultOptions?: Partial<FormlyPrimengSelectConfig> = {
    props: {
    },
  };
}