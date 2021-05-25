import { Component, ChangeDetectionStrategy, AfterViewInit, OnDestroy, ViewChild, OnInit } from '@angular/core';
import { ColorPicker } from 'primeng/colorpicker';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-colorPicker',
  template: `
    <p-colorPicker
      [style]="{'display': 'block', 'width': '60px'}"
      [format]="to.format"
      [showTransitionOptions]="to.showTransitionOptions"
      [hideTransitionOptions]="to.hideTransitionOptions"
      [format]="to.format || 'hex'"
      [inline]="to.inline"
      appendTo="body"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
    </p-colorPicker>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengColorPicker extends PrimengComponentType implements OnInit, OnDestroy {
  @ViewChild(ColorPicker, {static: true}) checkbox!: ColorPicker;
  ngOnInit(): void {
    this.bind(this.checkbox);
  }
  ngOnDestroy(): void {
    this.unbind();
  }
}
