import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { InputNumber } from 'primeng/inputnumber';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-number',
  template: `
    <p-inputNumber
      [mode]="'decimal'"
      [style]="{ width: '100%' }"
      [inputStyle]="{ width: '100%' }"
      [suffix]="to.suffix || null"
      [prefix]="to.prefix || null"
      [locale]="to.locale || 'en-US'"
      [minFractionDigits]="to.minFractionDigits || null"
      [maxFractionDigits]="to.maxFractionDigits || null"
      [min]="to.min || null"
      [max]="to.max || null"
      [useGrouping]="to.useGrouping ?? true"
      (onBlur)="to.onBlur && to.onBlur(field, $event)"
      (onFocus)="to.onFocus && to.onFocus(field, $event)"
      (onInput)="to.onInput && to.onInput(field, $event)"
      [formControl]="formControl"
      [formlyAttributes]="field"
    ></p-inputNumber>
  `,
  styles: [
    `
      :host ::ng-deep p-inputNumber {
        width: 100% !important;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengNumber extends PrimengComponentType {
  @ViewChild(InputNumber) number!: InputNumber;
}
