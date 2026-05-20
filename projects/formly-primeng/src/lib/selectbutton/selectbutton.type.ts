import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimengFieldProps } from '../field';
import { FormlyFieldSelectProps, FormlySelectModule } from '@ngx-formly/core/select';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';

interface FormlyPrimengSelectbuttonProps extends FormlyPrimengFieldProps, FormlyFieldSelectProps {
  filter?: boolean;
  filterBy?: string;
}

export interface FormlyPrimengSelectbuttonConfig extends FieldTypeConfig<FormlyPrimengSelectbuttonProps> {
  type: 'selectbutton' | Type<FormlyPrimengSelectbutton>;
}

@Component({
  selector: 'formly-primeng-selectbutton',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, FormlySelectModule, SelectButtonModule],
  template: `
    <p-selectbutton
      [options]="$any(props.options | formlySelectOptions: field | async)"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [optionLabel]="'label'"
      [optionValue]="'value'"
      (onChange)="props.change && props.change(field, $event)"
    >
    </p-selectbutton>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengSelectbutton extends FieldType<FormlyPrimengSelectbuttonConfig> {
  override defaultOptions?: Partial<FormlyPrimengSelectbuttonConfig> = {
    props: {
    },
  };
}