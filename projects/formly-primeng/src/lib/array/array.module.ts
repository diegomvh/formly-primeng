import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FormlyFormFieldModule } from '../form-field/form-field.module';

import { FormlyFieldArray } from './array.type';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  declarations: [FormlyFieldArray],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PanelModule,
    FieldsetModule,
    InputTextModule,
    ButtonModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [{ name: 'array', component: FormlyFieldArray }],
    }),
  ],
})
export class FormlyArrayModule {}
