import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { ListboxModule } from 'primeng/listbox';
import { FormlySelectModule } from '@ngx-formly/core/select';

import { FormlyFormFieldModule } from '../form-field/form-field.module';
import { FormlyPrimengListbox } from './listbox.type';

@NgModule({
  declarations: [FormlyPrimengListbox],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ListboxModule,
    FormlyFormFieldModule,
    FormlySelectModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'listbox',
          component: FormlyPrimengListbox,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class PrimengListboxModule {}
