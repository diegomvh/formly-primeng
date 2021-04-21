import { Component, ChangeDetectionStrategy, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { AutoComplete } from 'primeng/autocomplete';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-autoComplete',
  template: `
    <p-autoComplete
      [placeholder]="to.placeholder"
      [suggestions]="to.suggestions | formlySelectOptions: field | async"
      [dropdown]="to.dropdown"
      [multiple]="to.multiple"
      [minLength]="to.minLength"
      (completeMethod)="to.search && to.search(field, $event)"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
    </p-autoComplete>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengAutoComplete extends PrimengComponentType implements AfterViewInit, OnDestroy {
  @ViewChild(AutoComplete, {static: true}) autoComplete!: AutoComplete;
  ngAfterViewInit() {
    this.bind(this.autoComplete);
  }
  ngOnDestroy(): void {
    this.unbind();
  }
}
