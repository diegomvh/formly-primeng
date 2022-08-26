import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldsetModule } from 'primeng/fieldset';
import { FormlyFormFieldModule } from '../form-field/form-field.module';
import { FormlyWrapperFormFieldFieldset } from './form-field-fieldset.wrapper';

@NgModule({
  declarations: [FormlyWrapperFormFieldFieldset],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FieldsetModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      wrappers: [
        {
          name: 'form-field-fieldset',
          component: FormlyWrapperFormFieldFieldset,
        },
      ],
    }),
  ],
})
export class FormlyFormFieldFieldsetModule {}
