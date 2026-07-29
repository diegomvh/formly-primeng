import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimengFieldProps } from '../field';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { FormlyPrimengFieldEventProps, FormlyPrimengFieldOverlayProps } from '../field/field.props';

interface FormlyPrimengCascadeselectProps extends 
  FormlyPrimengFieldProps, 
  FormlyPrimengFieldOverlayProps, 
  FormlyPrimengFieldEventProps<FormlyPrimengCascadeselectProps> {
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