import { Component, ChangeDetectionStrategy, AfterViewInit, OnDestroy, ViewChild, OnInit } from '@angular/core';
import { Checkbox } from 'primeng/checkbox';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-checkbox',
  template: `
    <p-checkbox
      [label]="to.label"
      [formControl]="formControl"
      [formlyAttributes]="field"
    ></p-checkbox>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengCheckbox extends PrimengComponentType implements OnDestroy, AfterViewInit {
  @ViewChild(Checkbox) checkbox!: Checkbox;
  defaultOptions = {
    templateOptions: {
      properties: {},
      events: {}
    }
  };
  ngAfterViewInit(): void {
    this.bind(this.checkbox);
  }
  ngOnDestroy(): void {
    this.unbind();
  }
}
