import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyFieldProps } from '../field';
import { FormlyFieldSelectProps, FormlySelectModule } from '@ngx-formly/core/select';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TreeSelect, TreeSelectModule } from 'primeng/treeselect';

interface TreeSelectProps extends FormlyFieldProps, FormlyFieldSelectProps {
  appendTo?: TreeSelect['appendTo'];
  filter?: boolean;
  filterBy?: string;
}

export interface FormlyTreeSelectFieldConfig extends FormlyFieldConfig<TreeSelectProps> {
  type: 'treeselect' | Type<FormlyFieldTreeSelect>;
}

@Component({
  selector: 'formly-field-treeselect',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, FormlySelectModule, TreeSelectModule],
  template: `
    <p-treeselect
      [placeholder]="props.placeholder"
      [options]="$any(props.options | formlySelectOptions: field | async)"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [showClear]="!props.required"
      [appendTo]="props.appendTo"
      [filter]="props.filter"
      [filterBy]="props.filterBy ?? 'label'"
      (onChange)="props.change && props.change(field, $event)"
    >
    </p-treeselect>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldTreeSelect extends FieldType<FieldTypeConfig<TreeSelectProps>> {
  override defaultOptions?: Partial<FieldTypeConfig<TreeSelectProps>> = {
    props: {
    },
  };
}