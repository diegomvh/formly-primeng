import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SelectModule } from 'primeng/select';
import { FormlySelectModule as FormlyCoreSelectModule } from '@ngx-formly/core/select';

import { FormlyPrimengFieldModule } from '../field';
import { withFormlyPrimengCascadeselect } from './cascadeselect.config';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectModule,

    FormlyPrimengFieldModule,
    FormlyCoreSelectModule,
    FormlyModule.forChild(withFormlyPrimengCascadeselect()),
  ],
})
export class FormlyPrimengCascadeselectModule {}
