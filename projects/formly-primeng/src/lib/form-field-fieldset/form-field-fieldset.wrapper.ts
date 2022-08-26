import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-primeng-form-field-fieldset',
  template: `
    <p-fieldset>
      <ng-template pTemplate="header">
        <strong>{{ to.label }}</strong> &nbsp;
        <small *ngIf="to.description">({{ to.description }})</small>
      </ng-template>
      <ng-container #fieldComponent></ng-container>
    </p-fieldset>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyWrapperFormFieldFieldset extends FieldWrapper {}
