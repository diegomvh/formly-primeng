import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-primeng-colorpicker',
  template: `
    <p-colorPicker
      [format]="to.format"
      [showTransitionOptions]="to.showTransitionOptions"
      [hideTransitionOptions]="to.hideTransitionOptions"
      [format]="to.format || 'hex'"
      [inline]="to.inline"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
    </p-colorPicker>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyColorPicker extends FieldType {}
