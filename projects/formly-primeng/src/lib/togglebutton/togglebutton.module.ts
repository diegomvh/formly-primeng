import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormlyPrimengFieldModule } from '../field/field.module';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { withFormlyPrimengTogglebutton } from './togglebutton.config';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToggleSwitchModule,

    FormlyPrimengFieldModule,
    FormlyModule.forChild(withFormlyPrimengTogglebutton()),
  ],
})
export class FormlyPrimengTogglebuttonModule {}