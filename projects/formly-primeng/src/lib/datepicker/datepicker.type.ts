import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimengFieldProps } from '../field';
import { DatePickerModule } from 'primeng/datepicker';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

interface FormlyPrimengDatePickerProps extends FormlyPrimengFieldProps {
  defaultDate: Date | null;
  dateFormat?: string;
  hourFormat: string;
  showTime: boolean;
  showIcon?: boolean;
  showButtonBar?: boolean;
  showOtherMonths?: boolean;
  selectOtherMonths?: boolean;
  selectionMode?: 'multiple' | 'single' | 'range';
  numberOfMonths: number;
  inline?: boolean;
  readonlyInput?: boolean;
  touchUI?: boolean;
  fluid?: boolean;
}

export interface FormlyPrimengDatepickerConfig extends FieldTypeConfig<FormlyPrimengDatePickerProps> {
  type: 'datepicker' | Type<FormlyPrimengDatePicker>;
}

@Component({
  selector: 'formly-primeng-datepicker',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, DatePickerModule],
  template: `
    <p-datepicker
      [inputId]="id"
      [fluid]="props.fluid"
      [defaultDate]="props.defaultDate"
      [dateFormat]="props.dateFormat"
      [hourFormat]="props.hourFormat"
      [showTime]="props.showTime"
      [showIcon]="props.showIcon"
      [showButtonBar]="props.showButtonBar"
      [showOtherMonths]="props.showOtherMonths"
      [selectOtherMonths]="props.selectOtherMonths"
      [selectionMode]="props.selectionMode || 'single'"
      [numberOfMonths]="props.numberOfMonths"
      [inline]="props.inline"
      [readonlyInput]="props.readonlyInput"
      [touchUI]="props.touchUI"
      [placeholder]="props.placeholder"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
    </p-datepicker>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengDatePicker extends FieldType<FormlyPrimengDatepickerConfig> {
  override defaultOptions?: Partial<FormlyPrimengDatepickerConfig> = {
    props: {
      defaultDate: null,
      dateFormat: 'mm/dd/yy',
      hourFormat: '12',
      showTime: false,
      numberOfMonths: 1,
    },
  };
}
