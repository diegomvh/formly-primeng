import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  AfterViewInit,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { RadioButton } from 'primeng/radiobutton';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-radioButton',
  template: `
    <p-radioButton
      *ngFor="let option of to.options | formlySelectOptions: field | async"
      [name]="field.name || id"
      [formControl]="formControl"
      [label]="option.label"
      [value]="option.value"
    >
    </p-radioButton>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengRadioButton extends PrimengComponentType {
  @ViewChild(RadioButton) radio!: RadioButton;
}
