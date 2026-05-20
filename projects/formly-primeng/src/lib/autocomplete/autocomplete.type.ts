import {
  Component,
  ChangeDetectionStrategy,
  Type,
} from '@angular/core';
import { AutoComplete, AutoCompleteCompleteEvent, AutoCompleteDropdownClickEvent, AutoCompleteModule, AutoCompleteSelectEvent, AutoCompleteUnselectEvent } from 'primeng/autocomplete';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyFieldSelectProps, FormlySelectModule } from '@ngx-formly/core/select';
import { FormlyPrimengFieldProps } from '../field';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormlyPrimengFieldEventProps } from '../field/field.props';

export interface FormlyPrimengAutoCompleteProps extends FormlyPrimengFieldProps, FormlyFieldSelectProps, FormlyPrimengFieldEventProps<FormlyPrimengAutoCompleteProps> {
  appendTo?: AutoComplete['appendTo'];
  multiple?: boolean;
  dropdown?: boolean;
  forceSelection?: boolean;
  autofocus?: boolean;
  showClear?: boolean;
  showEmptyMessage?: boolean;
  emptyMessage?: string;
  completeMethod?: (field: FieldTypeConfig<FormlyPrimengAutoCompleteProps>, event: AutoCompleteCompleteEvent) => void;
  onClear?: (field: FormlyFieldConfig<FormlyPrimengAutoCompleteProps>, event?: Event) => void;
  onSelect?: (field: FormlyFieldConfig<FormlyPrimengAutoCompleteProps>, event: AutoCompleteSelectEvent) => void;
  onUnselect?: (field: FormlyFieldConfig<FormlyPrimengAutoCompleteProps>, event: AutoCompleteUnselectEvent) => void;
  onDropdownClick?: (field: FormlyFieldConfig<FormlyPrimengAutoCompleteProps>, event: AutoCompleteDropdownClickEvent) => void;
}

export interface FormlyPrimengAutoCompleteConfig extends FieldTypeConfig<FormlyPrimengAutoCompleteProps> {
  type: 'autocomplete' | Type<FormlyPrimengAutoComplete>;
}

@Component({
  selector: 'formly-primeng-autoComplete',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, FormlySelectModule, AutoCompleteModule],
  template: `
    <p-autoComplete
      [inputId]="id"
      [placeholder]="props.placeholder"
      [appendTo]="props.appendTo"
      [tabindex]="props.tabindex"
      [showEmptyMessage]="props.showEmptyMessage"
      [emptyMessage]="props.emptyMessage"
      [suggestions]="$any(props.options | formlySelectOptions: field | async)"
      [multiple]="props.multiple"
      [showClear]="props.showClear"
      [dropdown]="props.dropdown"
      [forceSelection]="props.forceSelection"
      [autofocus]="props.autofocus"
      (completeMethod)="props.completeMethod && props.completeMethod(field, $event)"
      (onFocus)="props.focus && props.focus(field, $event) || props.onFocus && props.onFocus(field, $event)"
      (onBlur)="props.blur && props.blur(field, $event) || props.onBlur && props.onBlur(field, $event)"
      (onKeyUp)="props.keyup && props.keyup(field, $event) || props.onKeyUp && props.onKeyUp(field, $event)"
      (onSelect)="props.onSelect && props.onSelect(field, $event)"
      (onUnselect)="props.onUnselect && props.onUnselect(field, $event)"
      (onDropdownClick)="props.onDropdownClick && props.onDropdownClick(field, $event)"
      (onClear)="props.onClear && props.onClear(field, $event)"
      (onShow)="props.onShow && props.onShow(field, $event)"
      (onHide)="props.onHide && props.onHide(field, $event)"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
    </p-autoComplete>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengAutoComplete extends FieldType<FormlyPrimengAutoCompleteConfig> {
  override defaultOptions?: Partial<FormlyPrimengAutoCompleteConfig> = {
    props: {
      options: [],
      showClear: false,
      showEmptyMessage: false,
      multiple: false,
      dropdown: false,
      forceSelection: false,
      autofocus: false,
    },
  };
}

