import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyFormFieldModule } from '../field';

import { withFormlyFieldInputMask } from './inputmask.config';
import { InputMaskModule } from 'primeng/inputmask';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputMaskModule,
    FormlyFormFieldModule,
    FormlyModule.forChild(withFormlyFieldInputMask()),
  ],
})
export class FormlyInputMaskModule {}