import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-object-type',
  template: `
    <div class="p-grid">
      <div class="p-col-12" *ngIf="to.label && to.hideLabel !== true">
        <h5>{{ to.label }}
          <small *ngIf="to.description">({{ to.description }})</small>
        </h5>
      </div>
      <formly-field *ngFor="let subField of fields()"
        [field]="subField"
        class="p-col-12 p-md-{{12 / groupLength()}}"
      ></formly-field>
      <small class="p-mr-auto" [ngStyle]="{color: '#f44336'}" *ngIf="showError">
        <formly-validation-message [field]="field"> </formly-validation-message>
      </small>
    </div>
  `,
})
export class FormlyFieldObject extends FieldType {
  groupLength() {
    return this.field.fieldGroup?.length || 1;
  }

  fields() {
    return this.field.fieldGroup || [];
  }
}
