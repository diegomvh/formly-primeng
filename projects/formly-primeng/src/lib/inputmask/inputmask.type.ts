import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyFieldProps } from '../field';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputMaskModule } from 'primeng/inputmask';

interface InputMaskProps extends FormlyFieldProps {}

export interface FormlyInputMaskFieldConfig extends FormlyFieldConfig<InputMaskProps> {
  type: 'inputmask' | Type<FormlyFieldInputMask>;
}

@Component({
  selector: 'formly-field-primeng-inputmask',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, InputMaskModule],
  template: `
    <p-inputmask
      [inputId]="id"
      [formControl]="formControl"
      [formlyAttributes]="field"
    ></p-inputmask>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldInputMask extends FieldType<FieldTypeConfig<InputMaskProps>> {}
