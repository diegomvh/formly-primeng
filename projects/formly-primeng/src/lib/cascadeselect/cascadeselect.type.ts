import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimengFieldProps } from '../field';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CascadeSelectBeforeHideEvent, CascadeSelectBeforeShowEvent, CascadeSelectModule } from 'primeng/cascadeselect';
import { FormlyPrimengFieldEventProps, FormlyPrimengFieldOverlayProps } from '../field/field.props';

interface FormlyPrimengCascadeselectProps extends 
  FormlyPrimengFieldProps, 
  FormlyPrimengFieldOverlayProps, 
  FormlyPrimengFieldEventProps<FormlyPrimengCascadeselectProps> {
  optionLabel?: string;
  optionValue?: string;
  optionDisabled?: string;
  optionGroupLabel?: string;
  optionGroupChildren?: string;
  onGroupChange?: (field: FormlyPrimengCascadeselectConfig, event: Event) => void;
  onClear?: (field: FormlyPrimengCascadeselectConfig, event: Event) => void;
  onBeforeShow?: (field: FormlyPrimengCascadeselectConfig, event: CascadeSelectBeforeShowEvent) => void;
  onBeforeHide?: (field: FormlyPrimengCascadeselectConfig, event: CascadeSelectBeforeHideEvent) => void;
}

export interface FormlyPrimengCascadeselectConfig extends FieldTypeConfig<FormlyPrimengCascadeselectProps> {
  type: 'cascadeselect' | Type<FormlyPrimengCascadeselect>;
}

@Component({
  selector: 'formly-primeng-cascadeselect',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, FormlySelectModule, CascadeSelectModule],
  template: `
    <p-cascadeselect
      [dt]="props.dt"
      [unstyled]="props.unstyled"
      [pt]="props.pt"
      [ptOptions]="props.ptOptions"
      [required]="props.required ?? false"
      [invalid]="props.invalid ?? false"
      [disabled]="props.disabled ?? false"
      [name]="props.name"

      [appendTo]="props.appendTo"
      [placeholder]="props.placeholder"
      [options]="$any(props.options | formlySelectOptions: field | async)"
      [showClear]="!props.required"
      [optionLabel]="props.optionLabel"
      [optionValue]="props.optionValue"
      [optionDisabled]="props.optionDisabled"
      [optionGroupLabel]="props.optionGroupLabel"
      [optionGroupChildren]="props.optionGroupChildren ?? 'label'"

      [formControl]="formControl"
      [formlyAttributes]="field"

      (onChange)="props.change && props.change(field, $event) || props.onChange && props.onChange(field, $event)"
      (onGroupChange)="props.onGroupChange && props.onGroupChange(field, $event)"
      (onShow)="props.onShow && props.onShow(field, $event)"
      (onHide)="props.onHide && props.onHide(field, $event)"
      (onClear)="props.onClear && props.onClear(field, $event)"
      (onBeforeShow)="props.onBeforeShow && props.onBeforeShow(field, $event)"
      (onBeforeHide)="props.onBeforeHide && props.onBeforeHide(field, $event)"
      (onFocus)="props.focus && props.focus(field, $event) || props.onFocus && props.onFocus(field, $event)"
      (onBlur)="props.blur && props.blur(field, $event) || props.onBlur && props.onBlur(field, $event)"
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