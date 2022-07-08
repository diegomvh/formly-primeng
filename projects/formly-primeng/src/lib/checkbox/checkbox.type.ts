import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  OnInit,
} from '@angular/core';
import { Checkbox } from 'primeng/checkbox';
import { PrimengComponentType } from '../prime.type';

@Component({
  selector: 'formly-primeng-checkbox',
  template: `
    <p-checkbox
      [name]="to.name ?? null"
      [value]="to.value ?? null"
      [label]="to.label ?? null"
      [disabled]="to.disabled ?? false"
      [binary]="to.binary ?? false"
      [tabindex]="to.tabindex ?? null"
      [inputId]="to.inputId ?? null"
      [ariaLabelledBy]="to.ariaLabelledBy ?? null"
      [ariaLabel]="to.ariaLabel ?? null"
      [style]="to.style ?? null"
      [styleClass]="to.styleClass ?? null"
      [labelStyleClass]="to.labelStyleClass ?? null"
      [checkboxIcon]="to.checkboxIcon ?? 'pi pi-check'"
      [readonly]="to.readonly ?? false"
      [required]="to.required ?? false"
      [trueValue]="to.trueValue ?? null"
      [falseValue]="to.falseValue ?? null"
      (onChange)="to.onChange && to.onChange(field, $event)"
      [formControl]="formControl"
      [formlyAttributes]="field"
    ></p-checkbox>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengCheckbox extends PrimengComponentType {
  @ViewChild(Checkbox) checkbox!: Checkbox;
  defaultOptions = {
    templateOptions: {
      hideLabel: true,
    },
  };
}
