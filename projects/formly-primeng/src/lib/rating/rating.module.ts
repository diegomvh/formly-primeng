import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PasswordModule } from 'primeng/password';

import { FormlyFieldModule } from '../field/field.module';
import { withFormlyFieldRating } from './rating.config';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PasswordModule,

    FormlyFieldModule,
    FormlyModule.forChild(withFormlyFieldRating()),
  ],
})
export class FormlyRatingModule {}
