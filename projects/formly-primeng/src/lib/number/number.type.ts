import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { InputNumber } from 'primeng/inputnumber';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-number',
  template: `
    <p-inputNumber
      [mode]="'decimal'"
      [style]="{ width: '100%' }"
      [suffix]="to.suffix"
      [prefix]="to.prefix"
      [locale]="to.locale || 'en-US'"
      [min]="to.min"
      [max]="to.max"
      [useGrouping]="to.useGrouping || true"
      (onBlur)="to.onBlur && to.onBlur(field, $event)"
      (onFocus)="to.onFocus && to.onFocus(field, $event)"
      (onInput)="to.onInput && to.onInput(field, $event)"
      [formControl]="formControl"
      [formlyAttributes]="field"
    ></p-inputNumber>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengNumber extends PrimengComponentType {
  @ViewChild(InputNumber) number!: InputNumber;
}
