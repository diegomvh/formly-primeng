import { Component, ChangeDetectionStrategy, ViewChild, OnDestroy, AfterViewInit, OnInit } from '@angular/core';
import { InputNumber } from 'primeng/inputnumber';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-currency',
  template: `
    <p-inputNumber
      mode="currency"
      [formControl]="formControl"
      [formlyAttributes]="field"
    ></p-inputNumber>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengCurrency extends PrimengComponentType implements OnDestroy, OnInit {
  @ViewChild(InputNumber, {static: true}) input!: InputNumber;
  ngOnInit(): void {
    this.bind(this.input);
  }
  ngOnDestroy(): void {
    this.unbind();
  }
}
