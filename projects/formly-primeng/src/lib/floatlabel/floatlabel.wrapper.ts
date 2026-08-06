import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldWrapper, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormlyPrimengFieldProps } from '../field/field.props';

export interface FormlyPrimengFloatlabelProps extends 
  FormlyPrimengFieldProps {
  floatLabelVariant?: 'in' | 'over' | 'on';
}

@Component({
  selector: 'formly-primeng-floatlabel',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, FloatLabelModule],
  template: `
    <p-floatlabel [variant]="props.floatLabelVariant ?? 'over'">
      <ng-container #fieldComponent></ng-container>
    </p-floatlabel>
  `,
})
export class FormlyPrimengFloatlabelWrapper extends FieldWrapper<FormlyFieldConfig<FormlyPrimengFloatlabelProps>> {}
