import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Dropdown } from 'primeng/dropdown';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-dropdown',
  template: `
    <p-dropdown
      appendTo="body"
      [placeholder]="to.placeholder"
      [options]="to.options | formlySelectOptions: field | async"
      [disabled]="to.disabled"
      [showClear]="to.showClear || false"
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
