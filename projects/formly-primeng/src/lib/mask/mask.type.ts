import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { InputMask } from 'primeng/inputmask';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-mask',
  template: `
    <p-inputMask
      [style]="{ width: '100%' }"
      [mask]="to.mask || null"
      (onComplete)="to.onComplete && to.onComplete(field, $event)"
      (onInput)="to.onInput && to.onInput(field, $event)"
      (onKeydown)="to.onKeydown && to.onKeydown(field, $event)"
      [formControl]="formControl"
      [formlyAttributes]="field"
    ></p-inputMask>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengMask extends PrimengComponentType {
  @ViewChild(InputMask) mask!: InputMask;
}
