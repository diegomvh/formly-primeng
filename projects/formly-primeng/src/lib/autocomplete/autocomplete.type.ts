import {
  Component,
  ChangeDetectionStrategy,
  Type,
} from '@angular/core';
import { AutoComplete, AutoCompleteCompleteEvent, AutoCompleteDropdownClickEvent, AutoCompleteModule, AutoCompleteSelectEvent, AutoCompleteUnselectEvent } from 'primeng/autocomplete';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyFieldSelectProps, FormlySelectModule } from '@ngx-formly/core/select';
import { FormlyFieldProps } from '../field';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface AutoCompleteProps extends FormlyFieldProps, FormlyFieldSelectProps {
  appendTo?: AutoComplete['appendTo'];
  multiple?: boolean;
  dropdown?: boolean;
  forceSelection?: boolean;
  autofocus?: boolean;
  showClear?: boolean;
  showEmptyMessage?: boolean;
  emptyMessage?: string;
  show?: (field: FieldTypeConfig<AutoCompleteProps>, event: Event) => void;
  hide?: (field: FieldTypeConfig<AutoCompleteProps>, event: Event) => void;
  clear?: (field: FieldTypeConfig<AutoCompleteProps>, event?: Event) => void;
  completeMethod?: (field: FieldTypeConfig<AutoCompleteProps>, event: AutoCompleteCompleteEvent) => void;
  dropdownClick?: (field: FieldTypeConfig<AutoCompleteProps>, event: AutoCompleteDropdownClickEvent) => void;
  select?: (field: FieldTypeConfig<AutoCompleteProps>, event: AutoCompleteSelectEvent) => void;
  unselect?: (field: FieldTypeConfig<AutoCompleteProps>, event: AutoCompleteUnselectEvent) => void;
}

export interface FormlyAutoCompleteFieldConfig extends FormlyFieldConfig<AutoCompleteProps> {
  type: 'autocomplete' | Type<FormlyFieldAutoComplete>;
}

@Component({
  selector: 'formly-field-primeng-autocomplete',
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
      (onFocus)="props.focus && props.focus(field, $event)"
      (onBlur)="props.blur && props.blur(field, $event)"
      (onKeyUp)="props.keyup && props.keyup(field, $event)"
      (onSelect)="props.select && props.select(field, $event)"
      (onUnselect)="props.unselect && props.unselect(field, $event)"
      (onDropdownClick)="props.dropdownClick && props.dropdownClick(field, $event)"
      (onClear)="props.clear && props.clear(field, $event)"
      (onShow)="props.show && props.show(field, $event)"
      (onHide)="props.hide && props.hide(field, $event)"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
    </p-autoComplete>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldAutoComplete extends FieldType<FieldTypeConfig<AutoCompleteProps>> {
  override defaultOptions?: Partial<FieldTypeConfig<AutoCompleteProps>> = {
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

