import { NgModule } from '@angular/core';
import { FormlyFormFieldModule } from './form-field/form-field.module';
import { FormlyInputModule } from './input/input.module';
import { FormlyTextAreaModule } from './textarea/textarea.module';
import { FormlyRadioModule } from './radio/radio.module';
import { FormlyCheckboxModule } from './checkbox/checkbox.module';
import { FormlySelectModule } from './select/select.module';
import { FormlyDatePickerModule } from './datepicker/datepicker.module';
import { FormlyColorPickerModule } from './colorpicker/colorpicker.module';
import { FormlyNullModule } from './null/null.module';
import { FormlyArrayModule } from './array/array.module';
import { FormlyObjectModule } from './object/object.module';
import { FormlyMultiSchemaModule } from './multischema/multischema.module';

@NgModule({
  imports: [
    FormlyFormFieldModule,
    FormlyInputModule,
    FormlyTextAreaModule,
    FormlyRadioModule,
    FormlyCheckboxModule,
    FormlySelectModule,
    FormlyDatePickerModule,
    FormlyColorPickerModule,
    FormlyNullModule,
    FormlyArrayModule,
    FormlyObjectModule,
    FormlyMultiSchemaModule
  ],
})
export class FormlyPrimeNGModule {}
