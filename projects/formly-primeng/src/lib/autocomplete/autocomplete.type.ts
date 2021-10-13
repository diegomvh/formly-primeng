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
      [tabindex]="to.tabindex || null"
      [disabled]="to.disabled || false"
      [required]="to.required || false"
      [showEmptyMessage]="to.showEmptyMessage || false"
      [emptyMessage]="to.emptyMessage"
      [suggestions]="to.suggestions"
      [multiple]="to.multiple || false"
      [dropdown]="to.dropdown || false"
      [field]="to.field"
      [forceSelection]="to.forceSelection || false"
      [autofocus]="to.autofocus || false"
      (completeMethod)="to.completeMethod && to.completeMethod(field, $event)"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
    </p-autoComplete>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengAutoComplete extends PrimengComponentType {
  @ViewChild(AutoComplete) autoComplete!: AutoComplete;
  defaultOptions = {
    templateOptions: {
      suggestions: [],
    },
  };
}
