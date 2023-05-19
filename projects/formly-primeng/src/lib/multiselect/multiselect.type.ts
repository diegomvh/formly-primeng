import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MultiSelect } from 'primeng/multiselect';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-multiSelect',
  template: `
    <p-multiSelect
      [style]="{ width: '100%' }"
      [placeholder]="to.placeholder"
      [options]="
        to.group
          ? to.options || []
          : (to.options | formlySelectOptions : field | async) || []
      "
      [disabled]="to.disabled"
      [group]="to.group ?? false"
      [defaultLabel]="to.defaultLabel"
      [optionLabel]="to.optionLabel || 'label'"
      [optionValue]="to.optionValue || 'value'"
      [emptyFilterMessage]="to.emptyFilterMessage"
      [emptyMessage]="to.emptyMessage"
      [display]="to.display || null"
      (onClick)="to.onClick && to.onClick(field, $event)"
      (onChange)="to.onChange && to.onChange(field, $event)"
      (onFilter)="to.onFilter && to.onFilter(field, $event)"
      (onFocus)="to.onFocus && to.onFocus(field, $event)"
      (onBlur)="to.onBlur && to.onBlur(field, $event)"
      (onPanelShow)="to.onPanelShow && to.onPanelShow(field, $event)"
      (onPanelHide)="to.onPanelHide && to.onPanelHide(field, $event)"
      [formControl]="formControl"
      [formlyAttributes]="field"
      appendTo="body"
    >
    </p-multiSelect>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengMultiSelect extends PrimengComponentType {
  @ViewChild(MultiSelect) multiselect!: MultiSelect;
  defaultOptions = {
    templateOptions: {
      options: [],
    },
  };
}
