import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldArrayType, FormlyFieldConfig, FormlyFieldProps as CoreFormlyFieldProps, FormlyModule, FieldTypeConfig } from '@ngx-formly/core';

export interface FormlyArrayProps extends CoreFormlyFieldProps {
  hideLabel?: boolean;
  helpText?: boolean;
  hideHelpText?: boolean;
  min: number;
  max: number,
  editable: boolean,
  add: boolean,
  remove: boolean,
  direction?: 'row' | 'col';
}

@Component({
  selector: 'formly-wrapper-primeng-array',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule],
  template: `
    <div class="flex flex-col">
      @if (props.label && !props.hideLabel) {
      <div>
        <legend>
            <strong class="font-semibold text-xl">{{ props.label }}</strong>
          &nbsp;
          @if (props.description) {
          <small>({{ props.description }})</small>
          }
        </legend>
      </div>
      }
      <div class="flex flex-{{props.direction ?? 'row'}} gap-2 w-full">
      @for (subField of fields(); track subField; let i = $index) {
      <div [class]="subFieldClass()">
        <div class="flex flex-col">
          <formly-field
            [class]="fieldClass()"
            [field]="subField"
          ></formly-field>
          @if (hasActions()) {
          <div
            class="col-1 flex align-content-end flex-wrap"
          >
            @if (canRemove(i + 1)) {
            <button
              pButton
              pRipple
              icon="pi pi-minus-circle"
              class="p-button-rounded p-button-text p-button-danger"
              (click)="remove(i)"
            ></button>
            }
            @if (canAdd(i + 1)) {
            <button
              pButton
              pRipple
              icon="pi pi-plus-circle"
              class="p-button-rounded p-button-text p-button-success"
              (click)="add()"
            ></button>
            }
          </div>
        }
      </div>
      </div>
      }
      </div>
      <div>
          @if (canAdd(0)) {
        <button
          pButton
          pRipple
          icon="pi pi-plus-circle"
          class="p-button-rounded p-button-text p-button-success"
          (click)="add()"
        ></button>
          }
          @if (showError) {
        <small [ngStyle]="{ color: '#f44336' }"> 
          <formly-validation-message [field]="field"></formly-validation-message>
        </small>
          }
      </div>
    </div>
  `,
})
export class FormlyFieldArrayWrapper extends FieldArrayType<FormlyFieldConfig<FormlyArrayProps>> {
  override defaultOptions?: Partial<FieldTypeConfig<FormlyArrayProps>> = {
    props: {
      min: 0,
      max: Infinity,
      editable: true,
      add: true,
      remove: true,
      direction: 'col'
    }
  };

  fields() {
    return this.field.fieldGroup || [];
  }

  subFieldClass() {
    return `col-${12 / (this.props.cols ?? 1)}`;
  }

  groupLength() {
    return this.field.fieldGroup?.length || 0;
  }

  fieldClass() {
    return this.hasActions() ? `col-11` : `col-12`;
  }

  hasActions() {
    return (
      this.props.editable &&
      (this.props.add || this.props.remove) &&
      this.props.min !== this.props.max
    );
  }

  canRemove(index: number) {
    return (
      this.props.editable && this.props.remove && this.groupLength() > this.props!.min!
    );
  }

  canAdd(index: number) {
    return (
      this.props.editable &&
      this.props.add &&
      this.groupLength() < this.props!.max! &&
      index === this.groupLength()
    );
  }
}
