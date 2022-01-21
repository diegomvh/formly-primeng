import { Component } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'formly-array-type',
  template: `
    <div class="grid">
      <div class="col-12" *ngIf="to.label && to.hideLabel !== true">
        <p>
          {{ to.label }}
        </p>
      </div>
      <div
        [class]="to.className"
        *ngFor="let subField of fields(); let i = index"
      >
        <div class="grid">
          <div class="col-11">
            <formly-field [field]="subField"></formly-field>
          </div>
          <div class="col">
            <button
              pButton
              pRipple
              icon="pi pi-minus-circle"
              class="p-button-rounded p-button-text p-button-danger"
              (click)="remove(i)"
            ></button>
            <button
              pButton
              pRipple
              *ngIf="i === groupLength() - 1"
              icon="pi pi-plus-circle"
              class="p-button-rounded p-button-text p-button-success"
              (click)="add()"
            ></button>
          </div>
        </div>
      </div>
      <button
        pButton
        pRipple
        *ngIf="groupLength() === 0"
        icon="pi pi-plus-circle"
        class="p-button-rounded p-button-text p-button-success"
        (click)="add()"
      ></button>
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
})
export class FormlyFieldArray extends FieldArrayType {
  groupLength() {
    return this.field.fieldGroup?.length || 0;
  }
  fields() {
    return this.field.fieldGroup || [];
  }
}
