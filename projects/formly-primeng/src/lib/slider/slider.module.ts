import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PasswordModule } from 'primeng/password';

import { FormlyFieldModule } from '../field/field.module';
import { withFormlyFieldSlider } from './slider.config';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PasswordModule,

    FormlyFieldModule,
    FormlyModule.forChild(withFormlyFieldSlider()),
  ],
})
export class FormlySliderModule {}
