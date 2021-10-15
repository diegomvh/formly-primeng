import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { InputNumber } from 'primeng/inputnumber';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-currency',
  template: `
    <p-inputNumber
      [mode]="'currency'"
      [currency]="to.currency || 'USD'"
      [locale]="to.locale || 'en-US'"
      [currencyDisplay]="to.currencyDisplay || 'symbol'"
      [suffix]="to.suffix || null"
      [prefix]="to.prefix || null"
      [min]="to.min || null"
      [max]="to.min || null"
      (onFocus)="to.onFocus && to.onFocus(field, $event)"
      (onBlur)="to.onBlur && to.onBlur(field, $event)"
      (onInput)="to.onInput && to.onInput(field, $event)"
      [formControl]="formControl"
      [formlyAttributes]="field"
    ></p-inputNumber>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengCurrency extends PrimengComponentType {
  @ViewChild(InputNumber) input!: InputNumber;
}
