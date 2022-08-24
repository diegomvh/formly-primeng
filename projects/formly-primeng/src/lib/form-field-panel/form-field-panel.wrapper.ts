import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-primeng-form-field-fieldset',
  template: `
    <p-panel>
      <ng-template pTemplate="header">Custom Legend Content</ng-template>
      <ng-container #fieldComponent></ng-container>
    </p-panel>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyWrapperFormFieldPanel extends FieldWrapper {
}
