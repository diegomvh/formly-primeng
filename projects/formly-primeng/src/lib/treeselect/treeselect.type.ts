import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimengFieldProps } from '../field';
import { FormlyFieldSelectProps, FormlySelectModule } from '@ngx-formly/core/select';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TreeSelect, TreeSelectModule } from 'primeng/treeselect';

interface FormlyPrimengTreeselectProps extends FormlyPrimengFieldProps, FormlyFieldSelectProps {
  appendTo?: TreeSelect['appendTo'];
  filter?: boolean;
  filterBy?: string;
}

export interface FormlyPrimengTreeselectConfig extends FieldTypeConfig<FormlyPrimengTreeselectProps> {
  type: 'treeselect' | Type<FormlyFieldTreeselect>;
}

@Component({
  selector: 'formly-primeng-treeselect',
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
export class FormlyFieldTreeselect extends FieldType<FormlyPrimengTreeselectConfig> {
  override defaultOptions?: Partial<FormlyPrimengTreeselectConfig> = {
    props: {
    },
  };
}