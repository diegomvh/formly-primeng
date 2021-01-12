import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-primeng-form-field',
  template: `
    <div class="p-field">
      <label [for]="id" *ngIf="to.label && to.hideLabel !== true">
        {{ to.label }}
        <span *ngIf="to.required && to.hideRequiredMarker !== true">*</span>
      </label>
      <ng-container #fieldComponent></ng-container>
      <small class="p-invalid" *ngIf="showError">
        <formly-validation-message [field]="field"></formly-validation-message>
      </small>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyWrapperFormField extends FieldWrapper {}
