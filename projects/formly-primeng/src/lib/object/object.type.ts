import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-object-type',
  template: `
    <div class="p-grid">
      <div class="p-col-12">
        <h6 *ngIf="to.label">{{ to.label }}</h6>
        <p *ngIf="to.description">{{ to.description }}</p>
      </div>
      <formly-field *ngFor="let f of field.fieldGroup" [field]="f" class="p-col-12 p-md-{{12 / field.fieldGroup.length}}"></formly-field>
      <small class="p-col-12 p-invalid" *ngIf="showError && formControl.errors">
        <formly-validation-message [field]="field"></formly-validation-message>
      </small>
    </div>
  `,
})
export class FormlyFieldObject extends FieldType {
}
