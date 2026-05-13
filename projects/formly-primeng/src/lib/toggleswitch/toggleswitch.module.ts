import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormlyFieldModule } from '../field/field.module';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { withFormlyFieldToggleSwitch } from './toggleswitch.config';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToggleSwitchModule,

    FormlyFieldModule,
    FormlyModule.forChild(withFormlyFieldToggleSwitch()),
  ],
})
export class FormlyToggleSwitchModule {}