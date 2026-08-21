import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimengFieldProps } from '../field';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormlyAsyncPipe } from '../pipes/formly-async.pipe';
import { FormlyPrimengFieldEventProps } from '../field/field.props';

interface FormlyPrimengSelectbuttonProps extends 
  FormlyPrimengFieldProps, 
  FormlyPrimengFieldEventProps<FormlyPrimengSelectbuttonProps> {
}

export interface FormlyPrimengSelectbuttonConfig extends FieldTypeConfig<FormlyPrimengSelectbuttonProps> {
  type: 'selectbutton' | Type<FormlyPrimengSelectbutton>;
}

@Component({
  selector: 'formly-primeng-selectbutton',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, FormlyAsyncPipe, SelectButtonModule],
  template: `
    <p-selectbutton
      [options]="(props.options | formlyAsync: field | async) ?? []"
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