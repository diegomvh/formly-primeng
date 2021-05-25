import { Component, ChangeDetectionStrategy, AfterViewInit, OnDestroy, ViewChild, OnInit } from '@angular/core';
import { Checkbox } from 'primeng/checkbox';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-checkbox',
  template: `
    <p-checkbox
      [binary]="true"
      [label]="to.label"
      [formControl]="formControl"
      [formlyAttributes]="field"
      (onChange)="to.change && to.change(field, $event)"
    >
    </p-checkbox>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengCheckbox extends PrimengComponentType implements OnInit, OnDestroy {
  @ViewChild(Checkbox, {static: true}) checkbox!: Checkbox;
  defaultOptions = {
    templateOptions: {
      hideLabel: true,
      properties: {},
      events: {}
    }
  };
  ngOnInit(): void {
    this.bind(this.checkbox);
  }
  ngOnDestroy(): void {
    this.unbind();
  }
}
