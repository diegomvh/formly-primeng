import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-primeng-form-field-fieldset',
  template: `
    <p-panel>
      <ng-template pTemplate="header">
        <label [for]="id" *ngIf="to.label && to.hideLabel !== true">
          {{ to.label }}
          <span *ngIf="to.required && to.hideRequiredMarker !== true">*</span>
        </label>
      </ng-template>
      <ng-container #fieldComponent></ng-container>
      <ng-template pTemplate="footer">
        <formly-validation-message [field]="field"> </formly-validation-message>
      </ng-template>
      <ng-container #fieldComponent></ng-container>
    </p-panel>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyWrapperFormFieldPanel extends FieldWrapper {}
