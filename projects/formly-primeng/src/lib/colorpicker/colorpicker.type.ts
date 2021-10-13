import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  OnInit,
} from '@angular/core';
import { ColorPicker } from 'primeng/colorpicker';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-colorPicker',
  template: `
    <p-colorPicker
      [style]="{ display: 'block', width: '60px' }"
      [format]="to.format || 'hex'"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
    </p-colorPicker>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengColorPicker
  extends PrimengComponentType
  implements OnDestroy, AfterViewInit
{
  @ViewChild(ColorPicker) picker!: ColorPicker;
  ngAfterViewInit(): void {
    this.bind(this.picker);
  }
  ngOnDestroy(): void {
    this.unbind();
  }
}
