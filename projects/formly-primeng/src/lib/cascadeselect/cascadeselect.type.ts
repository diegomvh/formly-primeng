import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyFieldProps } from '../field';
import { FormlyFieldSelectProps, FormlySelectModule } from '@ngx-formly/core/select';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CascadeSelect, CascadeSelectModule } from 'primeng/cascadeselect';

interface CascadeSelectProps extends FormlyFieldProps, FormlyFieldSelectProps {
  appendTo?: CascadeSelect['appendTo'];
  filter?: boolean;
  filterBy?: string;
}

export interface FormlyCascadeSelectFieldConfig extends FormlyFieldConfig<CascadeSelectProps> {
  type: 'cascadeselect' | Type<FormlyFieldCascadeSelect>;
}

@Component({
  selector: 'formly-field-cascadeselect',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, FormlySelectModule, CascadeSelectModule],
  template: `
    <p-cascadeselect
      [placeholder]="props.placeholder"
      [options]="$any(props.options | formlySelectOptions: field | async)"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [showClear]="!props.required"
      [appendTo]="props.appendTo"
      [optionLabel]="'label'"
      [optionValue]="'value'"
      (onChange)="props.change && props.change(field, $event)"
    >
    </p-cascadeselect>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldCascadeSelect extends FieldType<FieldTypeConfig<CascadeSelectProps>> {
  override defaultOptions?: Partial<FieldTypeConfig<CascadeSelectProps>> = {
    props: {
    },
  };
}