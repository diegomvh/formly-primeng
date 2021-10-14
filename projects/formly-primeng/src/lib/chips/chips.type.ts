import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Chips } from 'primeng/chips';

import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-chips',
  template: `
    <p-chips
      [placeholder]="to.placeholder"
      [tabindex]="to.tabindex || null"
      [disabled]="to.disabled || false"
      [separator]="to.separator || null"
      [addOnTab]="to.addOnTab || false"
      [addOnBlur]="to.addOnBlur || false"
      (onAdd)="to.onAdd && to.onAdd(field, $event)"
      (onRemove)="to.onRemove && to.onRemove(field, $event)"
      (onChipClick)="to.onChipClick && to.onChipClick(field, $event)"
      [formControl]="formControl"
      [formlyAttributes]="field"
    ></p-chips>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengChips extends PrimengComponentType {
  @ViewChild(Chips) chips!: Chips;
  defaultOptions = {
    templateOptions: {},
  };
}
