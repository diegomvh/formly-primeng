import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Chips } from 'primeng/chips';

import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-chips',
  template: `
    <p-chips
      [field]="to.field ?? null"
      [max]="to.max ?? null"
      [disabled]="to.disabled ?? false"
      [style]="to.style ?? null"
      [styleClass]="to.styleClass ?? null"
      [placeholder]="to.placeholder ?? null"
      [tabindex]="to.tabindex ?? null"
      [inputId]="to.inputId ?? null"
      [ariaLabelledBy]="to.ariaLabelledBy ?? null"
      [allowDuplicate]="to.allowDuplicate ?? true"
      [inputStyle]="to.inputStyle ?? null"
      [inputStyleClass]="to.inputStyleClass ?? null"
      [addOnTab]="to.addOnTab ?? false"
      [addOnBlur]="to.addOnBlur ?? false"
      [separator]="to.separator ?? null"
      [showClear]="to.showClear ?? false"
      (onAdd)="to.onAdd && to.onAdd(field, $event)"
      (onRemove)="to.onRemove && to.onRemove(field, $event)"
      (onChipClick)="to.onChipClick && to.onChipClick(field, $event)"
      (onFocus)="to.onFocus && to.onFocus(field, $event)"
      (onBlur)="to.onBlur && to.onBlur(field, $event)"
      (onClear)="to.onClear && to.onClear(field, $event)"
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
