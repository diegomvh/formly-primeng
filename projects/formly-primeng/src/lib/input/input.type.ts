import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  OnDestroy,
  OnInit,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import { InputMask } from 'primeng/inputmask';
import { InputNumber } from 'primeng/inputnumber';
import { Password } from 'primeng/password';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-input',
  template: `
    <ng-container [ngSwitch]="to.type">
      <p-inputNumber
        *ngSwitchCase="'number'"
        [style]="{ width: '100%' }"
        [suffix]="to.suffix"
        [prefix]="to.prefix"
        [locale]="to.locale || 'en-US'"
        [min]="to.min"
        [max]="to.max"
        [useGrouping]="to.useGrouping"
        [formControl]="formControl"
        [formlyAttributes]="field"
      ></p-inputNumber>
      <p-inputMask
        *ngSwitchCase="'mask'"
        [style]="{ width: '100%' }"
        [mask]="to.mask || ''"
        [formControl]="formControl"
        [formlyAttributes]="field"
      ></p-inputMask>
      <input
        *ngSwitchCase="'password'"
        [style]="{ width: '100%' }"
        pPassword
        [type]="'password'"
        [formControl]="formControl"
        [formlyAttributes]="field"
      />
      <input
        #input
        *ngSwitchDefault
        [style]="{ width: '100%' }"
        pInputText
        [type]="to.type || 'text'"
        [formControl]="formControl"
        [formlyAttributes]="field"
      />
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengInput extends PrimengComponentType {
  @ViewChild(InputNumber) number!: InputNumber;
  @ViewChild(InputMask) mask!: InputMask;
  @ViewChild(Password) password!: Password;
  @ViewChild('input') input!: ElementRef;
}
