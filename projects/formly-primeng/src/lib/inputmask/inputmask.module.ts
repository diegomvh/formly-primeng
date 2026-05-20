import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyPrimengFieldModule } from '../field';

import { withFormlyPrimengInputmask } from './inputmask.config';
import { InputMaskModule } from 'primeng/inputmask';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputMaskModule,
    FormlyPrimengFieldModule,
    FormlyModule.forChild(withFormlyPrimengInputmask()),
  ],
})
export class FormlyPrimengInputmaskModule {}