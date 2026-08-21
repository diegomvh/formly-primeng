import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimengFieldProps } from '../field';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormlyPrimengFieldEventProps, FormlyPrimengFieldOverlayProps } from '../field/field.props';
import { FormlyAsyncPipe } from '../pipes/formly-async.pipe';

interface FormlyPrimengMultiselectProps extends 
  FormlyPrimengFieldProps, 
  FormlyPrimengFieldOverlayProps, 
  FormlyPrimengFieldEventProps<FormlyPrimengMultiselectProps> {
  filter?: boolean;
  filterBy?: string;
  optionLabel?: string;
  optionValue?: string;
  optionDisabled?: string;
  optionGroupLabel?: string;
  optionGroupChildren?: string;
}

export interface FormlyPrimengMultiselectConfig extends FieldTypeConfig<FormlyPrimengMultiselectProps> {
  type: 'multiselect' | Type<FormlyPrimengMultiselect>;
}

@Component({
  selector: 'formly-primeng-multiselect',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, FormlyAsyncPipe, MultiSelectModule],
  template: `
    <p-multiselect
      [dt]="props.dt"
      [unstyled]="props.unstyled"
      [pt]="props.pt"
      [ptOptions]="props.ptOptions"
      [required]="props.required ?? false"
      [invalid]="props.invalid ?? false"
      [disabled]="props.disabled ?? false"
      [name]="props.name"
      [fluid]="props.fluid"

      [placeholder]="props.placeholder"
      [options]="(props.options | formlyAsync: field | async) ?? []"
      [showClear]="!props.required"
      [appendTo]="props.appendTo"
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
      (onBlur)="props.blur && props.blur(field, $event)"
    >
    </p-multiselect>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengMultiselect extends FieldType<FormlyPrimengMultiselectConfig> {
  override defaultOptions?: Partial<FormlyPrimengMultiselectConfig> = {
    props: {
    },
  };
}