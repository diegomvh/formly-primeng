import { Component } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'formly-array-type',
  template: `
    <div class="grid">
      <div class="col-12" *ngIf="to.label && to.hideLabel !== true">
        <legend>
          <strong>{{ to.label }}</strong>
          &nbsp;
          <small *ngIf="to.description">({{ to.description }})</small>
        </legend>
      </div>
      <div
        [class]="subFieldClass()"
        *ngFor="let subField of fields(); let i = index"
        style="padding-top: 0; padding-bottom: 0;"
      >
        <div class="grid">
          <formly-field [class]="fieldClass()" [field]="subField"></formly-field>
          <div
            *ngIf="hasActions()"
            class="col-1 flex align-content-end flex-wrap"
            style="padding-right: 0; padding-left: 0"
          >
            <button
              pButton
              pRipple
              *ngIf="canRemove(i + 1)"
              icon="pi pi-minus-circle"
              class="p-button-rounded p-button-text p-button-danger"
              (click)="remove(i)"
            ></button>
            <button
              pButton
              pRipple
              *ngIf="canAdd(i + 1)"
              icon="pi pi-plus-circle"
              class="p-button-rounded p-button-text p-button-success"
              (click)="add()"
            ></button>
          </div>
        </div>
      </div>
      <div>
        <button
          pButton
          pRipple
          *ngIf="canAdd(0)"
          icon="pi pi-plus-circle"
          class="p-button-rounded p-button-text p-button-success"
          (click)="add()"
        ></button>
        <small
          class="mr-auto"
          [ngStyle]="{ color: '#f44336' }"
          *ngIf="showError"
        >
          <formly-validation-message [field]="field">
          </formly-validation-message>
        </small>
      </div>
    </div>
  `,
})
export class FormlyFieldArray extends FieldArrayType {
  defaultOptions = {
    templateOptions: {
      min: 0,
      max: Infinity,
    },
  }

  fields() {
    return this.field.fieldGroup || [];
  }

  subFieldClass() {
    return `col-${12 / (this.to.cols ?? 1)}`;
  }

  fieldClass() {
    return this.to.min === this.to.max ? `col-12` : `col-11` ;
  }

  hasActions() {
    return this.to.min !== this.to.max;
  }

  groupLength() {
    return this.field.fieldGroup?.length || 0;
  }

  canRemove(index: number) {
    return index > this.to!.min!;
  }

  canAdd(index: number) {
    return index < this.to!.max! && index === this.groupLength();
  }
}
