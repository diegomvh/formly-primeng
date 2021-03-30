import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-primeng-colorpicker',
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
export class FormlyColorPicker extends FieldType {}
