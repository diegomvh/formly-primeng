import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  OnDestroy,
  AfterViewInit,
  OnInit,
} from '@angular/core';
import { InputNumber } from 'primeng/inputnumber';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-currency',
  template: `
    <p-inputNumber
      [mode]="'currency'"
      [currency]="to.currency || 'USD'"
      [locale]="to.locale || 'en-US'"
      [formControl]="formControl"
      [formlyAttributes]="field"
    ></p-inputNumber>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengCurrency extends PrimengComponentType {
  @ViewChild(InputNumber) input!: InputNumber;
}
