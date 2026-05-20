import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimengFieldProps } from '../field';
import { FormlyFieldSelectProps, FormlySelectModule } from '@ngx-formly/core/select';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CascadeSelect, CascadeSelectModule } from 'primeng/cascadeselect';

interface FormlyPrimengCascadeselectProps extends FormlyPrimengFieldProps, FormlyFieldSelectProps {
  appendTo?: CascadeSelect['appendTo'];
  filter?: boolean;
  filterBy?: string;
}

export interface FormlyPrimengCascadeselectConfig extends FieldTypeConfig<FormlyPrimengCascadeselectProps> {
  type: 'cascadeselect' | Type<FormlyPrimengCascadeselect>;
}

@Component({
  selector: 'formly-primeng-cascadeselect',
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
export class FormlyPrimengCascadeselect extends FieldType<FormlyPrimengCascadeselectConfig> {
  override defaultOptions?: Partial<FormlyPrimengCascadeselectConfig> = {
    props: {
    },
  };
}