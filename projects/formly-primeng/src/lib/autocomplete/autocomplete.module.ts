import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FormlyPrimengFieldModule } from '../field';
import { withFormlyPrimengAutoComplete } from './autocomplete.config';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    FormlyPrimengFieldModule,
    FormlySelectModule,
    FormlyModule.forChild(withFormlyPrimengAutoComplete()),
  ],
})
export class FormlyPrimengAutoCompleteModule {}
