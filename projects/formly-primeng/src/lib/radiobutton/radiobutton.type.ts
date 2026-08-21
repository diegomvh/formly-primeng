import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimengFieldProps } from '../field';
import { CommonModule } from '@angular/common';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormlyAsyncPipe } from '../pipes/formly-async.pipe';
import { FormlyPrimengFieldEventProps, FormlyPrimengFieldOverlayProps } from '../field/field.props';

interface FormlyPrimengRadioButtonProps extends 
  FormlyPrimengFieldProps, 
  FormlyPrimengFieldEventProps<FormlyPrimengRadioButtonProps> {
}

export interface FormlyPrimengRadioButtonConfig extends FieldTypeConfig<FormlyPrimengRadioButtonProps> {
  type: 'radiobutton' | Type<FormlyPrimengRadioButton>;
}

@Component({
  selector: 'formly-primeng-radioButton',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, FormlyAsyncPipe, RadioButtonModule],
  template: `
    @for (option of (props.options | formlyAsync: field | async); track option; let index = $index) {
      <div class="p-field-radiobutton">
        <p-radioButton
          [name]="field.name || id"
          [formControl]="option.disabled ? disabledControl : formControl"
          [value]="option.value"
          [inputId]="id + index"
        >
        </p-radioButton>
        <label [for]="id + index" class="ml-2">{{ option.label }}</label>
      </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyPrimengRadioButton extends FieldType<FormlyPrimengRadioButtonConfig> {
  get disabledControl() {
    return new UntypedFormControl({ value: this.formControl.value, disabled: true });
  }
}
