import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormlyFieldModule } from '../field/field.module';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { withFormlyFieldToggleButton } from './togglebutton.config';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToggleSwitchModule,

    FormlyFieldModule,
    FormlyModule.forChild(withFormlyFieldToggleButton()),
  ],
})
export class FormlyToggleButtonModule {}