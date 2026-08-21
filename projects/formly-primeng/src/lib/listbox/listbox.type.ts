import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimengFieldProps } from '../field';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';
import { FormlyPrimengFieldEventProps } from '../field/field.props';
import { FormlyAsyncPipe } from '../pipes/formly-async.pipe';

interface FormlyPrimengListboxProps extends 
  FormlyPrimengFieldProps,
  FormlyPrimengFieldEventProps<FormlyPrimengListboxProps> {
  filter?: boolean;
  filterBy?: string;
  optionLabel?: string;
  optionValue?: string;
  optionDisabled?: string;
  optionGroupLabel?: string;
  optionGroupChildren?: string;
}

export interface FormlyPrimengListboxConfig extends FieldTypeConfig<FormlyPrimengListboxProps> {
  type: 'listbox' | Type<FormlyPrimengListbox>;
}

@Component({
  selector: 'formly-primeng-listbox',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, FormlyAsyncPipe, ListboxModule],
  template: `
    <p-listbox
      [dt]="props.dt"
      [unstyled]="props.unstyled"
      [pt]="props.pt"
      [ptOptions]="props.ptOptions"
      [required]="props.required ?? false"
      [invalid]="props.invalid ?? false"
      [disabled]="props.disabled ?? false"
      [name]="props.name"
      [fluid]="props.fluid"

      [options]="(props.options | formlyAsync: field | async) ?? []"
      [filter]="props.filter"
      [filterBy]="props.filterBy"
      [optionLabel]="props.optionLabel"
      [optionValue]="props.optionValue"
      [optionDisabled]="props.optionDisabled"
      [optionGroupLabel]="props.optionGroupLabel"
      [optionGroupChildren]="props.optionGroupChildren ?? 'label'"

      [formControl]="formControl"
      [formlyAttributes]="field"

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