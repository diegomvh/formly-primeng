import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-primeng-form-field',
  template: `
    <div class="p-field" *ngIf="to.type !== 'hidden'">
      <label [for]="id" *ngIf="to.label && to.hideLabel !== true">
        {{ to.label }}
        <span *ngIf="to.required && to.hideRequiredMarker !== true">*</span>
      </label>
      <ng-container #fieldComponent></ng-container>
      <div>
        <small
          class="mr-auto"
          [ngStyle]="{ color: '#f44336' }"
          *ngIf="showError"
        >
          <formly-validation-message [field]="field">
          </formly-validation-message>
        </small>
        <small
          class="ml-auto"
          *ngIf="!showError && to.description && to.hideDescription !== true"
        >
          {{ to.description }}
        </small>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyWrapperFormField extends FieldWrapper {}
