import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { PrimengComponentType } from '../prime.type';

/*
  Common Key Filter
  pint: Positive integers
  int: Integers
  pnum: Positive numbers
  num: Numbers
  hex: Hexadecimal
  email: Email
  alpha: Alphabetic
  alphanum: Alphanumeric
*/

@Component({
  selector: 'formly-primeng-input',
  template: `
    <input
      #input
      pInputText
      [style]="{ width: '100%' }"
      [type]="'text'"
      (change)="to.change && to.change(field, $event)"
      (focus)="to.focus && to.focus(field, $event)"
      (blur)="to.blur && to.blur(field, $event)"
      [formControl]="formControl"
      [formlyAttributes]="field"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengInput extends PrimengComponentType {
  @ViewChild('input') input!: ElementRef;
}
