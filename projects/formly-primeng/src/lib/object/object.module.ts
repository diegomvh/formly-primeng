import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FormlyFormFieldModule } from '../form-field/form-field.module';

import { FormlyFieldObject } from './object.type';

@NgModule({
  declarations: [FormlyFieldObject],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        { name: 'object', component: FormlyFieldObject },
      ]
    }),
  ]
})
export class FormlyObjectModule {}
