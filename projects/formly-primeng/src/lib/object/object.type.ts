import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule, FormlyFieldProps, FieldType } from '@ngx-formly/core';
import { FormlyPrimengFieldHelptextProps, FormlyPrimengFieldLabelProps } from '../field/field.props';

export interface FormlyPrimengObjectProps extends FormlyFieldProps, FormlyPrimengFieldLabelProps, FormlyPrimengFieldHelptextProps {
  hideHelpText?: boolean;
}

@Component({
  selector: 'formly-primeng-object',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule],
  template: `
    @if (props.label && !props.hideLabel) {
      <legend>
        <strong class="font-semibold text-xl">{{ props.label }}</strong>
        &nbsp;
      @if (props.description) {
        <small>({{ props.description }})</small>
      }
      </legend>
    }
    <div [class]="field.fieldGroupClassName">
    @for (subField of field.fieldGroup; track subField) {
      <formly-field [field]="subField"></formly-field>
    }
    </div>
  `,
})
export class FormlyPrimengObject extends FieldType<FormlyFieldConfig<FormlyPrimengObjectProps>> {
  override defaultOptions?: Partial<FormlyFieldConfig<FormlyPrimengObjectProps>> = {
    props: { },
  };
}
