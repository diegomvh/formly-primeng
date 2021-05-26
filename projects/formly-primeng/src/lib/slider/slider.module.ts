import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { SliderModule } from 'primeng/slider';
import { FormlyFormFieldModule } from '../form-field/form-field.module';
import { FormlyPrimengSliderButton } from './slider.type';

@NgModule({
  declarations: [FormlyPrimengSliderButton],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyFormFieldModule,
    SliderModule,
    FormlySelectModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'slider',
          component: FormlyPrimengSliderButton,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class PrimengSliderModule {}
