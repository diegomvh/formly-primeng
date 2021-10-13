import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { AutoComplete } from 'primeng/autocomplete';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-autoComplete',
  template: `
    <p-autoComplete
      [placeholder]="to.placeholder"
      [suggestions]="to.suggestions"
      [field]="to.field"
      [disabled]="to.disabled"
      [formControl]="formControl"
      [multiple]="to.multiple || false"
      [dropdown]="to.dropdown || false"
      (completeMethod)="to.completeMethod && to.completeMethod(field, $event)"
      [formlyAttributes]="field"
    >
    </p-autoComplete>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengAutoComplete
  extends PrimengComponentType
  implements AfterViewInit, OnDestroy
{
  @ViewChild(AutoComplete) autoComplete!: AutoComplete;
  defaultOptions = {
    templateOptions: {
      suggestions: [],
      events: {},
    },
  };

  ngAfterViewInit(): void {
    this.bind(this.autoComplete);
  }

  ngOnDestroy(): void {
    this.unbind();
  }
}
