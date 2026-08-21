import { Component, ChangeDetectionStrategy, Type, InputSignal } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimengFieldProps } from '../field';
import { SelectFilterEvent, SelectLazyLoadEvent, SelectModule } from 'primeng/select';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyPrimengFieldEventProps, FormlyPrimengFieldOverlayProps } from '../field/field.props';
import { isObservable } from 'rxjs';
import { FormlyAsyncPipe } from '../pipes/formly-async.pipe';

interface FormlyPrimengSelectProps extends 
  FormlyPrimengFieldProps, 
  FormlyPrimengFieldOverlayProps, 
  FormlyPrimengFieldEventProps<FormlyPrimengSelectProps> {
  filter?: boolean;
  filterBy?: string;
  optionLabel?: string;
  optionValue?: string;
  optionDisabled?: string;
  optionGroupLabel?: string;
  optionGroupChildren?: string;
  onFilter?: (field: FormlyPrimengSelectConfig, event: SelectFilterEvent) => void;
  onClear?: (field: FormlyPrimengSelectConfig, event: Event) => void;
  onLazyLoad?: (field: FormlyPrimengSelectConfig, event: SelectLazyLoadEvent) => void;
}

export interface FormlyPrimengSelectConfig extends FieldTypeConfig<FormlyPrimengSelectProps> {
  type: 'select' | Type<FormlyPrimengSelect>;
}

@Component({
  selector: 'formly-primeng-select',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, SelectModule, FormlyAsyncPipe],
  template: `
    <p-select
      [dt]="props.dt"
      [unstyled]="props.unstyled"
      [pt]="props.pt"
      [ptOptions]="props.ptOptions"
      [required]="props.required ?? false"
      [invalid]="props.invalid ?? false"
      [disabled]="props.disabled ?? false"
      [name]="props.name"
      [fluid]="props.fluid"

      [appendTo]="props.appendTo"
      [placeholder]="props.placeholder"
      [options]="(props.options | formlyAsync: field | async) ?? []"
      [showClear]="!props.required"
      [filter]="props.filter"
      [filterBy]="props.filterBy"
      [optionLabel]="props.optionLabel"
      [optionValue]="props.optionValue"
      [optionDisabled]="props.optionDisabled"
      [optionGroupLabel]="props.optionGroupLabel"
      [optionGroupChildren]="props.optionGroupChildren ?? 'label'"

      [formControl]="formControl"
      [formlyAttributes]="field"

      (onChange)="props.change && props.change(field, $event) || props.onChange && props.onChange(field, $event)"
      (onFilter)="props.onFilter && props.onFilter(field, $event)"
      (onFocus)="props.focus && props.focus(field, $event) || props.onFocus && props.onFocus(field, $event)"
      (onBlur)="props.blur && props.blur(field, $event) || props.onBlur && props.onBlur(field, $event)"
      (onClick)="props.click && props.click(field, $event) || props.onClick && props.onClick(field, $event)"
      (onShow)="props.onShow && props.onShow(field, $event)"
      (onHide)="props.onHide && props.onHide(field, $event)"
      (onClear)="props.onClear && props.onClear(field, $event)"
      (onLazyLoad)="props.onLazyLoad && props.onLazyLoad(field, $event)"
    >
    </p-select>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengSelect extends FieldType<FormlyPrimengSelectConfig> {
  override defaultOptions?: Partial<FormlyPrimengSelectConfig> = {
    props: {
    },
  };
}