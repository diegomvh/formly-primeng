import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimengFieldProps } from '../field';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputMaskModule } from 'primeng/inputmask';

export interface FormlyPrimengInputmaskProps extends FormlyPrimengFieldProps {}

export interface FormlyPrimengInputmaskConfig extends FieldTypeConfig<FormlyPrimengInputmaskProps> {
  type: 'inputmask' | Type<FormlyPrimengInputmask>;
}

@Component({
  selector: 'formly-primeng-inputmask',
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
export class FormlyPrimengInputmask extends FieldType<FormlyPrimengInputmaskConfig> {}
