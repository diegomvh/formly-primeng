import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-primeng-form-field-panel',
  template: `
    <p-panel>
      <ng-template pTemplate="header">
        <strong>{{ to.label }}</strong> &nbsp;
        <small *ngIf="to.description">({{ to.description }})</small>
      </ng-template>
      <ng-container #fieldComponent></ng-container>
    </p-panel>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyWrapperFormFieldPanel extends FieldWrapper {}
