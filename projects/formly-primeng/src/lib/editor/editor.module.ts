import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { FormlyFormFieldModule } from '../form-field/form-field.module';
import { FormlyPrimengEditor } from './editor.type';


@NgModule({
  declarations: [FormlyPrimengEditor],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditorModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'editor',
          component: FormlyPrimengEditor,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class PrimengEditorModule {}
