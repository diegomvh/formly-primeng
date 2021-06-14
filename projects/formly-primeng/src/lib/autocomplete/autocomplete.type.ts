import { Component, ChangeDetectionStrategy, ViewChild, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { AutoComplete } from 'primeng/autocomplete';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-autoComplete',
  template: `
    <p-autoComplete
      [placeholder]="to.placeholder"
      [suggestions]="suggestions"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
    </p-autoComplete>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengAutoComplete extends PrimengComponentType implements AfterViewInit, OnDestroy {
  @ViewChild(AutoComplete) autoComplete!: AutoComplete;
  suggestions: any[] = [];
  ngAfterViewInit(): void {
    this.bind(this.autoComplete);
  }
  ngOnDestroy(): void {
    this.unbind();
  }
}
