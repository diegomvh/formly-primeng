import { Component, ChangeDetectionStrategy, Input, ViewChild, OnDestroy, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { InputMask } from 'primeng/inputmask';
import { InputNumber } from 'primeng/inputnumber';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-input',
  template: `
  <ng-container [ngSwitch]="to.type">
    <p-inputNumber
      *ngSwitchCase="'number'"
      [formControl]="formControl"
      [formlyAttributes]="field"
    ></p-inputNumber>
    <p-inputMask
      *ngSwitchCase="'mask'"
      mask="''"
      [formControl]="formControl"
      [formlyAttributes]="field"
    ></p-inputMask>
    <input
      #input
      *ngSwitchDefault
      pInputText
      [type]="to.type || 'text'"
      [formControl]="formControl"
      [formlyAttributes]="field"
    />
  </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengInput extends PrimengComponentType implements OnDestroy, AfterViewInit {
  @ViewChild(InputNumber) number!: InputNumber;
  @ViewChild(InputMask) mask!: InputMask;
  @ViewChild('input') input!: ElementRef;
  ngAfterViewInit(): void {
    console.log(this.to);
    switch(this.to.type) {
      case 'number':
        this.bind(this.number);
        break;
      case 'mask':
        this.bind(this.mask);
        break;
      default:
        this.bind(this.input);
    }
  }
  ngOnDestroy(): void {
    this.unbind();
  }
}
