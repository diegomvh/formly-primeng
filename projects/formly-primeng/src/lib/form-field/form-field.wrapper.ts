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
      <div>
        <small class="p-ml-auto" *ngIf="to.description && to.hideDescription !== true"> {{ to.description }} </small>
        <small class="p-mr-auto p-invalid" *ngIf="showError"> <formly-validation-message [field]="field"> </formly-validation-message> </small>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyWrapperFormField extends FieldWrapper {
}
