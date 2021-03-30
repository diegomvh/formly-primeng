import { Component } from '@angular/core';
import { FieldArrayType, FormlyFormBuilder } from '@ngx-formly/core';

@Component({
  selector: 'formly-array-type',
  template: `
    <div class="p-grid">
      <div class="p-col-12">
        <h5 *ngIf="to.label">{{ to.label }}
          <small *ngIf="to.description">({{ to.description }})</small>
        </h5>
      </div>
      <div class="p-col-12" *ngFor="let subField of fields(); let i = index">
        <div class="p-grid">
          <formly-field [field]="subField" class="p-col-9"></formly-field>
          <div class="p-col-3">
            <button pButton pRipple
            icon="pi pi-minus-circle"
            class="p-button-rounded p-button-text p-button-danger" (click)="remove(i)"></button>
          <button pButton pRipple *ngIf="i === (groupLength() - 1)"
            icon="pi pi-plus-circle"
            class="p-button-rounded p-button-text p-button-success" (click)="add()"></button>
          </div>
        </div>
      </div>
      <button pButton pRipple *ngIf="groupLength() === 0"
        icon="pi pi-plus-circle"
        class="p-button-rounded p-button-text p-button-success" (click)="add()"></button>
      <small class="p-mr-auto" [ngStyle]="{color: '#f44336'}" *ngIf="showError">
        <formly-validation-message [field]="field"> </formly-validation-message>
      </small>
    </div>
  `,
})
export class FormlyFieldArray extends FieldArrayType {
  groupLength() {
    return this.field.fieldGroup?.length || 0;
  }
  fields() {
    return this.field.fieldGroup || [];
  }
}
