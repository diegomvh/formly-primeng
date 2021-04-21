import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormlyFormFieldModule } from '../form-field/form-field.module';
import { FormlyPrimengRadioButton } from './radio.type';

@NgModule({
  declarations: [FormlyPrimengRadioButton],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RadioButtonModule,

    FormlyFormFieldModule,
    FormlySelectModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'radioButton',
          component: FormlyPrimengRadioButton,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class PrimengRadioButtonModule {}
