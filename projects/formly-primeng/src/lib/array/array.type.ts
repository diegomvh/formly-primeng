import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  FieldArrayType,
  FormlyFieldConfig,
  FormlyFieldProps,
  FormlyModule,
  FieldTypeConfig,
} from '@ngx-formly/core';
import {
  FormlyPrimengFieldHelptextProps,
  FormlyPrimengFieldLabelProps,
} from '../field/field.props';
import { ButtonModule } from 'primeng/button';
export interface FormlyPrimengArrayProps
  extends FormlyFieldProps, FormlyPrimengFieldLabelProps, FormlyPrimengFieldHelptextProps {
  editable: boolean;
  add: boolean;
  remove: boolean;
  columns: number;
}

@Component({
  selector: 'formly-primeng-array',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, ButtonModule],
  template: `
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
    <div class="grid grid-cols-12 gap-4">
      @for (subField of field.fieldGroup; track subField; let i = $index) {
        <div class="col-span-{{fieldColumns()}}">
          <formly-field [field]="subField"></formly-field>
        </div>
        @if (hasActions()) {
          <div class="col-span-{{actionColumns()}}">
            @if (canRemove(i + 1)) {
              <p-button
                icon="pi pi-minus-circle"
                size="small"
                severity="danger"
                [text]="true"
                [rounded]="true"
                (click)="remove(i)"
              ></p-button>
            }
            @if (canAdd(i + 1)) {
              <p-button
                icon="pi pi-plus-circle"
                size="small"
                [text]="true"
                [rounded]="true"
                (click)="add()"
              ></p-button>
            }
          </div>
        }
      }
    </div>
    <div>
      @if (canAdd(0)) {
        <p-button
          icon="pi pi-plus-circle"
          size="small"
          [text]="true"
          [rounded]="true"
          (click)="add()"
        ></p-button>
      }
    </div>
  `,
})
export class FormlyPrimengArray extends FieldArrayType<FormlyFieldConfig<FormlyPrimengArrayProps>> {
  override defaultOptions?: Partial<FieldTypeConfig<FormlyPrimengArrayProps>> = {
    props: {
      min: 0,
      max: Infinity,
      editable: true,
      add: true,
      remove: true,
      columns: 1,
    },
  };

  actionColumns() {
    return this.props.columns === 1 ? 1 : 
      this.props.columns === 2 ? 1 :
      this.props.columns === 3 ? 1 :
      this.props.columns === 4 ? 1 :
      this.props.columns;
  }

  fieldColumns() {
    return this.props.columns === 1 ? 11 : 
      this.props.columns === 2 ? 5 :
      this.props.columns === 3 ? 3 :
      this.props.columns === 4 ? 2 :
      this.props.columns;
  }

  groupLength() {
    return this.field.fieldGroup?.length || 0;
  }

  hasActions() {
    return (
      this.props.editable &&
      (this.props.add || this.props.remove) &&
      this.props.min !== this.props.max
    );
  }

  canRemove(index: number) {
    return this.props.editable && this.props.remove && this.groupLength() > this.props!.min!;
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
