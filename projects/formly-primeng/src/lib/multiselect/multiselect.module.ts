import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormlySelectModule } from '@ngx-formly/core/select';

import { FormlyFormFieldModule } from '../form-field/form-field.module';
import { FormlyPrimengMultiSelect } from './multiselect.type';

@NgModule({
  declarations: [FormlyPrimengMultiSelect],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MultiSelectModule,
    FormlyFormFieldModule,
    FormlySelectModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'multiSelect',
          component: FormlyPrimengMultiSelect,
          wrappers: ['form-field'],
        }
      ],
    }),
  ],
})
export class PrimengMultiSelectModule {}
