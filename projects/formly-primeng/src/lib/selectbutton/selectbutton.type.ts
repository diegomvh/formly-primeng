import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyFieldProps } from '../field';
import { FormlyFieldSelectProps, FormlySelectModule } from '@ngx-formly/core/select';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';

interface SelectButtonProps extends FormlyFieldProps, FormlyFieldSelectProps {
  filter?: boolean;
  filterBy?: string;
}

export interface FormlySelectButtonFieldConfig extends FormlyFieldConfig<SelectButtonProps> {
  type: 'selectbutton' | Type<FormlyFieldSelectButton>;
}

@Component({
  selector: 'formly-field-selectbutton',
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
export class FormlyFieldSelectButton extends FieldType<FieldTypeConfig<SelectButtonProps>> {
  override defaultOptions?: Partial<FieldTypeConfig<SelectButtonProps>> = {
    props: {
    },
  };
}