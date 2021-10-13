import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Knob } from 'primeng/knob';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-knob',
  template: `
    <p-knob
      [tabindex]="to.tabindex || null"
      [disabled]="to.disabled || false"
      [required]="to.required || false"
      [formControl]="formControl"
    >
    </p-knob>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengKnob extends PrimengComponentType {
  @ViewChild(Knob) knob!: Knob;
}
