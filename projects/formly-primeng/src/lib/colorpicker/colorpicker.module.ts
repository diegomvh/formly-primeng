import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ColorPickerModule } from 'primeng/colorpicker';
import { FormlyFormFieldModule } from '../form-field/form-field.module';
import { FormlyPrimengColorPicker } from './colorpicker.type';

@NgModule({
  declarations: [FormlyPrimengColorPicker],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ColorPickerModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'colorPicker',
          component: FormlyPrimengColorPicker,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class PrimengColorPickerModule {}
