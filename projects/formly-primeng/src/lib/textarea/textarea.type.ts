import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-primeng-textarea',
  template: `<textarea
    pInputTextarea
    [placeholder]="to.placeholder"
    [autoResize]="to.autoResize || false"
    [rows]="to.rows || 5"
    [cols]="to.cols || 20"
    (onResize)="to.onResize && to.onResize(field, $event)"
    [formControl]="formControl"
    [formlyAttributes]="field"
  ></textarea>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengTextArea extends FieldType {}
