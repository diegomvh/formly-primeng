import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-primeng-form-field-fieldset',
  template: `
    <p-fieldset>
      <ng-template *ngIf="to.type !== 'hidden'" pTemplate="header">
        <label [for]="id" *ngIf="to.label && to.hideLabel !== true">
          {{ to.label }}
          <span *ngIf="to.required && to.hideRequiredMarker !== true">*</span>
        </label>
      </ng-template>
      <ng-container #fieldComponent></ng-container>
      <ng-template *ngIf="showError" pTemplate="footer">
        <formly-validation-message [field]="field"> </formly-validation-message>
      </ng-template>
    </p-fieldset>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyWrapperFormFieldFieldset extends FieldWrapper {}
