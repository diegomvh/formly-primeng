import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-primeng-form-field-scrollpanel',
  template: `
    <p-scrollPanel>
      <ng-template pTemplate="header">
        <strong>{{ to.label }}</strong> &nbsp;
        <small *ngIf="to.description">({{ to.description }})</small>
      </ng-template>
      <ng-container #fieldComponent></ng-container>
    </p-scrollPanel>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyWrapperFormFieldScrollPanel extends FieldWrapper {}
