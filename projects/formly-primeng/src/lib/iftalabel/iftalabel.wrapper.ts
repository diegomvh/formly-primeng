import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldWrapper, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { IftaLabelModule } from 'primeng/iftalabel';
import { FormlyPrimengFieldProps } from '../field/field.props';

export interface FormlyPrimengIftalabelProps extends 
  FormlyPrimengFieldProps {
}

@Component({
  selector: 'formly-primeng-iftalabel',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, IftaLabelModule],
  template: `
    <p-iftalabel>
      <ng-container #fieldComponent></ng-container>
    </p-iftalabel>
  `,
})
export class FormlyPrimengIftalabelWrapper extends FieldWrapper<FormlyFieldConfig<FormlyPrimengIftalabelProps>> {}
