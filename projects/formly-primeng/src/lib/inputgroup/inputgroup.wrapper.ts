import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldWrapper, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FormlyPrimengFieldProps } from '../field';

export interface FormlyPrimengInputgroupProps extends 
  FormlyPrimengFieldProps {
    leftAddons: string[];
    rightAddons: string[];
}
@Component({
  selector: 'formly-primeng-helptext',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, InputGroupModule, InputGroupAddonModule],
  template: `
    <p-inputgroup>
      @for (addon of props.leftAddons; track addon) {
        <p-inputgroup-addon>{{addon}}</p-inputgroup-addon>
      }
    <ng-container #fieldComponent></ng-container>
      @for (addon of props.rightAddons; track addon) {
        <p-inputgroup-addon>{{addon}}</p-inputgroup-addon>
      }
    </p-inputgroup>
  `,
})
export class FormlyPrimengInputgroupWrapper extends FieldWrapper<FormlyFieldConfig<FormlyPrimengInputgroupProps>> {
}
