import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { TreeSelect } from 'primeng/treeselect';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-treeselect',
  template: `
    <p-treeSelect
      appendTo="body"
      [placeholder]="to.placeholder"
      [options]="to.options | formlySelectOptions: field | async"
      [disabled]="to.disabled"
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
    </p-treeSelect>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengTreeSelect extends PrimengComponentType {
  @ViewChild(TreeSelect) treeselect!: TreeSelect;
  defaultOptions = {
    templateOptions: {
      options: [],
    },
  };
}
