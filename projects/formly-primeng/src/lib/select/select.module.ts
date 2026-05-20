import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SelectModule } from 'primeng/select';
import { FormlySelectModule as FormlyCoreSelectModule } from '@ngx-formly/core/select';

import { FormlyPrimengFieldModule } from '../field';
import { withFormlyPrimengSelect } from './select.config';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectModule,

    FormlyPrimengFieldModule,
    FormlyCoreSelectModule,
    FormlyModule.forChild(withFormlyPrimengSelect()),
  ],
})
export class FormlyPrimengSelectModule {}
