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
      [placeholder]="to.placeholder"
      [options]="to.options | formlySelectOptions: field | async"
      [disabled]="to.disabled"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [showClear]="!to.required"
      appendTo="body"
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
