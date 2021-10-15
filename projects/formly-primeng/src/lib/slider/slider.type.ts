import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Slider } from 'primeng/slider';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-slider',
  template: `
    <p-slider
      [tabindex]="to.tabindex || null"
      [disabled]="to.disabled || false"
      [required]="to.required || false"
      [min]="to.min"
      [max]="to.max"
      [orientation]="to.orientation || 'horizontal'"
      [step]="to.step"
      [range]="to.range"
      (onChange)="to.onChange && to.onChange(field, $event)"
      (onSlideEnd)="to.onSlideEnd && to.onSlideEnd(field, $event)"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
    </p-slider>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengSliderButton extends PrimengComponentType {
  @ViewChild(Slider) slider!: Slider;
}
