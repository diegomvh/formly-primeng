import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Checkbox } from 'primeng/checkbox';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-checkbox',
  template: `
    <p-checkbox
      [binary]="to.binary ?? false"
      [label]="to.label"
      [tabindex]="to.tabindex"
      [disabled]="to.disabled ?? false"
      [required]="to.required ?? false"
      (onChange)="to.onChange && to.onChange(field, $event)"
      [formControl]="formControl"
      [formlyAttributes]="field"
    ></p-checkbox>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengCheckbox extends PrimengComponentType {
  @ViewChild(Checkbox) checkbox!: Checkbox;
  defaultOptions = {
    templateOptions: {
      hideLabel: true,
    },
  };
}
