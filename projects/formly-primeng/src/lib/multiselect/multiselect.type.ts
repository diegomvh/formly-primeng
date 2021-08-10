import { Component, ChangeDetectionStrategy, ViewChild, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { MultiSelect } from 'primeng/multiselect';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-multiSelect',
  template: `
    <p-multiSelect
      [placeholder]="to.placeholder"
      [options]="to.options | formlySelectOptions: field | async"
      [disabled]="to.disabled"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [defaultLabel]="to.defaultLabel"
      [optionLabel]="to.optionLabel || 'label'"
      [optionValue]="to.optionValue || 'value'"
      [emptyFilterMessage]="to.emptyFilterMessage"
      [emptyMessage]="to.emptyMessage"
      appendTo="body"
    >
    </p-multiSelect>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengMultiSelect extends PrimengComponentType implements AfterViewInit, OnDestroy {
  @ViewChild(MultiSelect) multiselect!: MultiSelect;
  defaultOptions = {
    templateOptions: {
      options: [],
      properties: {},
      events: {}
    }
  };
  ngAfterViewInit(): void {
    this.bind(this.multiselect);
  }
  ngOnDestroy(): void {
    this.unbind();
  }
}
