import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { DropdownModule } from 'primeng/dropdown';
import { FormlySelectModule } from '@ngx-formly/core/select';

import { FormlyFormFieldModule } from '../form-field/form-field.module';
import { FormlyPrimengDropdown } from './dropdown.type';

@NgModule({
  declarations: [FormlyPrimengDropdown],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownModule,
    FormlyFormFieldModule,
    FormlySelectModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'dropdown',
          component: FormlyPrimengDropdown,
          wrappers: ['form-field'],
        },
        { name: 'enum', extends: 'dropdown' },
      ],
    }),
  ],
})
export class PrimengDropdownModule {}
