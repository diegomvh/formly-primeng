import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldWrapper, FormlyFieldConfig, FormlyFieldProps as CoreFormlyFieldProps, FormlyModule } from '@ngx-formly/core';

export interface FormlyObjectProps extends CoreFormlyFieldProps {
  hideLabel?: boolean;
  helpText?: boolean;
  hideHelpText?: boolean;
}

@Component({
  selector: 'formly-primengwrapper-primeng-object',
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
export class FormlyFieldObjectWrapper extends FieldWrapper<FormlyFieldConfig<FormlyObjectProps>> {
  override defaultOptions?: Partial<FormlyFieldConfig<FormlyObjectProps>> = {
    props: { },
  };
}
