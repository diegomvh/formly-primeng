import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimengFieldProps } from '../field';
import { FormlyFieldSelectProps, FormlySelectModule } from '@ngx-formly/core/select';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';

interface FormlyPrimengListboxProps extends FormlyPrimengFieldProps, FormlyFieldSelectProps {
  filter?: boolean;
  filterBy?: string;
}

export interface FormlyPrimengListboxConfig extends FieldTypeConfig<FormlyPrimengListboxProps> {
  type: 'listbox' | Type<FormlyPrimengListbox>;
}

@Component({
  selector: 'formly-primeng-listbox',
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
export class FormlyPrimengListbox extends FieldType<FormlyPrimengListboxConfig> {
  override defaultOptions?: Partial<FormlyPrimengListboxConfig> = {
    props: {
    },
  };
}