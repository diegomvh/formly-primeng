import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { InputSwitch } from 'primeng/inputswitch';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-switch',
  template: `
    <p-inputSwitch
      [tabindex]="to.tabindex || null"
      [disabled]="to.disabled || false"
      [required]="to.required || false"
      [formControl]="formControl"
    >
    </p-inputSwitch>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengSwitch extends PrimengComponentType {
  @ViewChild(InputSwitch) switch!: InputSwitch;
}
