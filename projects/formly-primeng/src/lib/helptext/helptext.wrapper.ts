import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldWrapper, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormlyPrimengFieldProps } from '../field';

export interface FormlyPrimengHelptextProps extends 
  FormlyPrimengFieldProps {
  hideHelpText?: boolean;
}
@Component({
  selector: 'formly-primeng-helptext',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, FloatLabelModule],
  template: `
    <ng-container #fieldComponent></ng-container>
    @if (!showError && props.helpText && !props.hideHelpText) {
      <small [id]="id + '-help'">{{props.helpText}}</small>
    }
  `,
})
export class FormlyPrimengHelptextWrapper extends FieldWrapper<FormlyFieldConfig<FormlyPrimengHelptextProps>> {
}
