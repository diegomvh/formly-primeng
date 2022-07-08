import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { InputSwitch } from 'primeng/inputswitch';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-switch',
  template: `
    <p-inputSwitch
      [style]="to.style ?? null"
      [styleClass]="to.styleClass ?? null"
      [tabindex]="to.tabindex ?? null"
      [inputId]="to.inputId ?? null"
      [name]="to.name ?? null"
      [ariaLabelledBy]="to.ariaLabelledBy ?? null"
      [disabled]="to.disabled ?? false"
      [readonly]="to.readonly ?? false"
      [trueValue]="to.trueValue ?? null"
      [falseValue]="to.falseValue ?? null"
      [ariaLabel]="to.ariaLabel ?? null"
      (onChange)="to.onChange && to.onChange(field, $event)"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
    </p-inputSwitch>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengSwitch extends PrimengComponentType {
  @ViewChild(InputSwitch) switch!: InputSwitch;
}
