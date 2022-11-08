import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Dropdown } from 'primeng/dropdown';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-dropdown',
  template: `
    <p-dropdown
      appendTo="body"
      [placeholder]="to.placeholder"
      [style]="{ width: '100%' }"
      [options]="to.group ? to.options : (to.options | formlySelectOptions: field | async)"
      [disabled]="to.disabled"
      [editable]="to.editable ?? false"
      [showClear]="to.showClear ?? false"
      [filter]="to.filter ?? false"
      [group]="to.group ?? false"
      [filterValue]="to.filterValue"
      [filterBy]="to.filterBy"
      [filterMatchMode]="to.filterMatchMode || 'contains'"
      [filterPlaceholder]="to.filterPlaceholder || null"
      [filterLocale]="to.filterLocale || undefined"
      (onClick)="to.onClick && to.onClick(field, $event)"
      (onChange)="to.onChange && to.onChange(field, $event)"
      (onFilter)="to.onFilter && to.onFilter(field, $event)"
      (onFocus)="to.onFocus && to.onFocus(field, $event)"
      (onBlur)="to.onBlur && to.onBlur(field, $event)"
      (onShow)="to.onShow && to.onShow(field, $event)"
      (onHide)="to.onHide && to.onHide(field, $event)"
      (onClear)="to.onClear && to.onClear(field, $event)"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
    </p-dropdown>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengDropdown extends PrimengComponentType {
  @ViewChild(Dropdown) dropdown!: Dropdown;
  defaultOptions = {
    templateOptions: {
      options: [],
    },
  };
}
