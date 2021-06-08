import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormlyFormFieldModule } from '../form-field/form-field.module';
import { FormlyWrapperFormFieldGroup } from './form-field-group.wrapper';

@NgModule({
  declarations: [FormlyWrapperFormFieldGroup],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      wrappers: [
        {
          name: 'form-field-group',
          component: FormlyWrapperFormFieldGroup,
        }
      ]
    }),
  ],
})
export class FormlyFormFieldGroupModule {}
