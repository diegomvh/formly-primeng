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
      [tabindex]="to.tabindex || null"
      [disabled]="to.disabled || false"
      [required]="to.required || false"
      [format]="to.format || 'hex'"
      [inline]="to.inline || false"
      (onChange)="to.onChange && to.onChange(field, $event)"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
    </p-colorPicker>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengColorPicker extends PrimengComponentType {
  @ViewChild(ColorPicker) picker!: ColorPicker;
}
