import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ColorPickerModule } from 'primeng/colorpicker';
import { FormlyFormFieldModule } from '../wrapper/wrapper.module';
import { FormlyColorPicker } from './colorpicker.type';

@NgModule({
  declarations: [FormlyColorPicker],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ColorPickerModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'colorpicker',
          component: FormlyColorPicker,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FormlyColorPickerModule {}
