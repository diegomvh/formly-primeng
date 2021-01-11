import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-null-type',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldNull extends FieldType {}
