import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimengFieldProps } from '../field';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TreeSelect, TreeSelectModule } from 'primeng/treeselect';
import { FormlyAsyncPipe } from '../pipes/formly-async.pipe';

interface FormlyPrimengTreeselectProps extends FormlyPrimengFieldProps {
  appendTo?: TreeSelect['appendTo'];
  filter?: boolean;
  filterBy?: string;
}

export interface FormlyPrimengTreeselectConfig extends FieldTypeConfig<FormlyPrimengTreeselectProps> {
  type: 'treeselect' | Type<FormlyFieldTreeselect>;
}

@Component({
  selector: 'formly-primeng-treeselect',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, FormlyAsyncPipe, TreeSelectModule],
  template: `
    <p-treeselect
      [placeholder]="props.placeholder"
      [options]="(props.options | formlyAsync: field | async) ?? []"
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