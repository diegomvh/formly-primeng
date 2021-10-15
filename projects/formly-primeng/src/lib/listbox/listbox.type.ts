import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Dropdown } from 'primeng/dropdown';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-listbox',
  template: `
    <p-listbox
      [options]="to.options | formlySelectOptions: field | async"
      [disabled]="to.disabled"
      (onChange)="to.onChange && to.onChange(field, $event)"
      (onDblClick)="to.onDblClick && to.onDblClick(field, $event)"
      (onClick)="to.onClick && to.onClick(field, $event)"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
    </p-listbox>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengListbox extends PrimengComponentType {
  @ViewChild(Dropdown) dropdown!: Dropdown;
  defaultOptions = {
    templateOptions: {
      options: [],
    },
  };
}
