import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { RadioButton } from 'primeng/radiobutton';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-radioButton',
  template: `
    <p-radioButton
      *ngFor="let option of to.options | formlySelectOptions : field | async"
      [name]="field.name || id"
      [label]="option.label"
      [value]="option.value"
      (onBlur)="to.onBlur && to.onBlur(field, $event)"
      (onFocus)="to.onFocus && to.onFocus(field, $event)"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
    </p-radioButton>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengRadioButton extends PrimengComponentType {
  @ViewChild(RadioButton) radio!: RadioButton;
}
