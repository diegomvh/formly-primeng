import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';

import { FormlyFormFieldModule } from '../form-field/form-field.module';
import { FormlyPrimengTreeSelect } from './treeselect.type';
import { TreeSelectModule } from 'primeng/treeselect';
import { FormlyTreeSelectOptionsPipe } from './treeselect-options.pipe';

@NgModule({
  declarations: [
    FormlyPrimengTreeSelect,
    FormlyTreeSelectOptionsPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TreeSelectModule,
    FormlyFormFieldModule,
    FormlySelectModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'treeSelect',
          component: FormlyPrimengTreeSelect,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class PrimengTreeSelectModule {}
