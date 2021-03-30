import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormlyFormFieldModule } from '../form-field/form-field.module';
import { FormlyAutoComplete } from './autocomplete.type';

@NgModule({
  declarations: [FormlyAutoComplete],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'autocomplete',
          component: FormlyAutoComplete,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FormlyAutoCompleteModule {}
