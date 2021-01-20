import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FormlyFormFieldModule } from '../wrapper/wrapper.module';

import { FormlyFieldMultiSchema } from './multischema.type';

@NgModule({
  declarations: [FormlyFieldMultiSchema],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        { name: 'multischema', component: FormlyFieldMultiSchema },
      ]
    }),
  ]
})
export class FormlyMultiSchemaModule {}
