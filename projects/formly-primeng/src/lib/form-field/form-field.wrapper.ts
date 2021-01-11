import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-primeng-form-field',
  template: `
    <div class="p-field">
      <span class="p-float-label">
        <ng-container #fieldComponent></ng-container>
        <label [for]="id" *ngIf="to.label && to.hideLabel !== true">
          {{ to.label }}
          <span *ngIf="to.required && to.hideRequiredMarker !== true">*</span>
        </label>
      </span>

      <div class="ui-message ui-widget ui-corner-all ui-message-error ui-messages-error" *ngIf="showError">
        <formly-validation-message class="ui-message-text" [field]="field"></formly-validation-message>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyWrapperFormField extends FieldWrapper {}
