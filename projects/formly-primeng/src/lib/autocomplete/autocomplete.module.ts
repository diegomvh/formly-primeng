import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FormlyFormFieldModule } from '../field';
import { withFormlyFieldAutoComplete } from './autocomplete.config';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    FormlyFormFieldModule,
    FormlySelectModule,
    FormlyModule.forChild(withFormlyFieldAutoComplete()),
  ],
})
export class FormlyAutoCompleteModule {}
