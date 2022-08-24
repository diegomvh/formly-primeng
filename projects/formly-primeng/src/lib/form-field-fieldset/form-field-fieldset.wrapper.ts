import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-primeng-form-field-fieldset',
  template: `
    <p-fieldset>
      <ng-template pTemplate="header">Custom Legend Content</ng-template>
      <ng-container #fieldComponent></ng-container>
    </p-fieldset>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyWrapperFormFieldFieldset extends FieldWrapper {
}
