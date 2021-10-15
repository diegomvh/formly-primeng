import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { FormlySelectModule } from '@ngx-formly/core/select';

import { FormlyFormFieldModule } from '../form-field/form-field.module';
import { FormlyPrimengCascadeSelect } from './cascadeselect.type';

@NgModule({
  declarations: [FormlyPrimengCascadeSelect],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CascadeSelectModule,
    FormlyFormFieldModule,
    FormlySelectModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'cascadeSelect',
          component: FormlyPrimengCascadeSelect,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class PrimengCascadeSelectModule {}
