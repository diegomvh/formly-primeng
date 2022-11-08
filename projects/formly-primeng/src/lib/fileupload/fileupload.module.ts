import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { FormlyFormFieldModule } from '../form-field/form-field.module';
import { FormlyPrimengFileUpload } from './fileupload.type';

@NgModule({
  declarations: [FormlyPrimengFileUpload],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FileUploadModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'fileUpload',
          component: FormlyPrimengFileUpload,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class PrimengFileUploadModule {}
