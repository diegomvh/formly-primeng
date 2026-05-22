import { Component, ChangeDetectionStrategy, Type, InputSignal } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimengFieldProps } from '../field';
import { FormlyFieldSelectProps, FormlySelectModule } from '@ngx-formly/core/select';
import { Select, SelectModule } from 'primeng/select';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyPrimengFieldOverlayProps } from '../field/field.props';

interface FormlyPrimengSelectProps extends FormlyPrimengFieldProps, FormlyPrimengFieldOverlayProps, FormlyFieldSelectProps {
  filter?: Select['filter'];
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
      [appendTo]="props.appendTo"
      [placeholder]="props.placeholder"
      [options]="$any(props.options | formlySelectOptions: field | async)"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [showClear]="!props.required"
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