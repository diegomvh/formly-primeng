import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FormlyFormFieldModule } from '../form-field/form-field.module';
import { FormlyPrimengAutoComplete } from './autocomplete.type';
import { FormlyAutoCompleteOptionsPipe } from './autocomplete-options.pipe';

@NgModule({
  declarations: [FormlyPrimengAutoComplete, FormlyAutoCompleteOptionsPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    FormlyFormFieldModule,
    FormlySelectModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'autoComplete',
          component: FormlyPrimengAutoComplete,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class PrimengAutoCompleteModule {}
