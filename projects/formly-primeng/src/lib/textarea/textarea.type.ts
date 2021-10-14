import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-primeng-textarea',
  template: `<textarea
    pInputTextarea
    [placeholder]="to.placeholder"
    [autoResize]="to.autoResize || false"
    [disabled]="to.disabled || false"
    (onResize)="to.onResize && to.onResize(field, $event)"
    [formControl]="formControl"
    [formlyAttributes]="field"
  ></textarea>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengTextArea extends FieldType {}
