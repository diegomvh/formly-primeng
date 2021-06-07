import { Component, ChangeDetectionStrategy, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { InputMask } from 'primeng/inputmask';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-inputMask',
  template: `
    <p-inputMask
      [formControl]="formControl"
      [formlyAttributes]="field"
    ></p-inputMask>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengInputMask extends PrimengComponentType implements OnDestroy, OnInit {
  @ViewChild(InputMask, {static: true}) input!: InputMask;
  ngOnInit() {
    this.bind(this.input);
  }
  ngOnDestroy(): void {
    this.unbind();
  }
}
