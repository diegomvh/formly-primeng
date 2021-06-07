import { Component, ChangeDetectionStrategy, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { RadioButton } from 'primeng/radiobutton';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-slider',
  template: `
    <p-slider
      [formControl]="formControl"
    >
    </p-slider>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengSliderButton extends PrimengComponentType implements OnDestroy, OnInit {
  @ViewChild(RadioButton, {static: true}) slider!: RadioButton;
  ngOnInit() {
    console.log(this.to);
    this.bind(this.slider);
  }
  ngOnDestroy(): void {
    this.unbind();
  }
}
