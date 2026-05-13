import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SelectModule } from 'primeng/select';
import { FormlySelectModule as FormlyCoreSelectModule } from '@ngx-formly/core/select';

import { FormlyFormFieldModule } from '../field';
import { withFormlyFieldMultiSelect } from './multiselect.config';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectModule,

    FormlyFormFieldModule,
    FormlyCoreSelectModule,
    FormlyModule.forChild(withFormlyFieldMultiSelect()),
  ],
})
export class FormlyMultiSelectModule {}
