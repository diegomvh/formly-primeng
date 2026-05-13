import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyFieldProps } from '../field';
import { FormlyFieldSelectProps, FormlySelectModule } from '@ngx-formly/core/select';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';

interface ListboxProps extends FormlyFieldProps, FormlyFieldSelectProps {
  filter?: boolean;
  filterBy?: string;
}

export interface FormlySelectFieldConfig extends FormlyFieldConfig<ListboxProps> {
  type: 'listbox' | Type<FormlyFieldListbox>;
}

@Component({
  selector: 'formly-field-listbox',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, FormlySelectModule, ListboxModule],
  template: `
    <p-listbox
      [options]="$any(props.options | formlySelectOptions: field | async)"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [filter]="props.filter"
      [filterBy]="props.filterBy ?? 'label'"
      [optionLabel]="'label'"
      [optionValue]="'value'"
      (onChange)="props.change && props.change(field, $event)"
    >
    </p-listbox>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldListbox extends FieldType<FieldTypeConfig<ListboxProps>> {
  override defaultOptions?: Partial<FieldTypeConfig<ListboxProps>> = {
    props: {
    },
  };
}