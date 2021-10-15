import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Password } from 'primeng/password';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-password',
  template: `
    <p-password
      [placeholder]="to.placeholder"
      [toggleMask]="to.toggleMask || false"
      (onBlur)="to.onBlur && to.onBlur(field, $event)"
      (onFocus)="to.onFocus && to.onFocus(field, $event)"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
    </p-password>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengPassword extends PrimengComponentType {
  @ViewChild(Password) password!: Password;
}
