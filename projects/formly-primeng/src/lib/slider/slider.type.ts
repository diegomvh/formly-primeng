import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  ViewChild,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';
import { RadioButton } from 'primeng/radiobutton';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-slider',
  template: ` <p-slider [formControl]="formControl"> </p-slider> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengSliderButton extends PrimengComponentType {
  @ViewChild(RadioButton) slider!: RadioButton;
}
