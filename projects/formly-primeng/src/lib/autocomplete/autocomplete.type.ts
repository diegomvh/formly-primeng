import {
  Component,
  ChangeDetectionStrategy,
  Type,
} from '@angular/core';
import { AutoCompleteCompleteEvent, AutoCompleteDropdownClickEvent, AutoCompleteModule, AutoCompleteSelectEvent, AutoCompleteUnselectEvent } from 'primeng/autocomplete';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimengFieldProps } from '../field';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormlyPrimengFieldEventProps, FormlyPrimengFieldOverlayProps } from '../field/field.props';
import { FormlyAsyncPipe } from '../pipes/formly-async.pipe';

export interface FormlyPrimengAutocompleteProps extends 
  FormlyPrimengFieldProps, 
  FormlyPrimengFieldOverlayProps, 
  FormlyPrimengFieldEventProps<FormlyPrimengAutocompleteProps> {
  multiple?: boolean;
  dropdown?: boolean;
  forceSelection?: boolean;
  autofocus?: boolean;
  showClear?: boolean;
  showEmptyMessage?: boolean;
  emptyMessage?: string;
  completeMethod?: (field: FieldTypeConfig<FormlyPrimengAutocompleteProps>, event: AutoCompleteCompleteEvent) => void;
  onClear?: (field: FormlyFieldConfig<FormlyPrimengAutocompleteProps>, event?: Event) => void;
  onSelect?: (field: FormlyFieldConfig<FormlyPrimengAutocompleteProps>, event: AutoCompleteSelectEvent) => void;
  onUnselect?: (field: FormlyFieldConfig<FormlyPrimengAutocompleteProps>, event: AutoCompleteUnselectEvent) => void;
  onDropdownClick?: (field: FormlyFieldConfig<FormlyPrimengAutocompleteProps>, event: AutoCompleteDropdownClickEvent) => void;
}

export interface FormlyPrimengAutocompleteConfig extends FieldTypeConfig<FormlyPrimengAutocompleteProps> {
  type: 'autocomplete' | Type<FormlyPrimengAutocomplete>;
}

@Component({
  selector: 'formly-primeng-autoComplete',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, AutoCompleteModule, FormlyAsyncPipe],
  template: `
    <p-autocomplete
      [inputId]="id"
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
      [appendTo]="props.appendTo"
      [tabindex]="props.tabindex"
      [showEmptyMessage]="props.showEmptyMessage"
      [emptyMessage]="props.emptyMessage"
      [suggestions]="(props.options | formlyAsync: field | async) ?? []"
      [multiple]="props.multiple"
      [showClear]="props.showClear"
      [dropdown]="props.dropdown"
      [forceSelection]="props.forceSelection"
      [autofocus]="props.autofocus"

      [formControl]="formControl"
      [formlyAttributes]="field"

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
    >
    </p-autocomplete>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengAutocomplete extends FieldType<FormlyPrimengAutocompleteConfig> {
  override defaultOptions?: Partial<FormlyPrimengAutocompleteConfig> = {
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

