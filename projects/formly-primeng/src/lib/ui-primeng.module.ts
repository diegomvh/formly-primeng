import { NgModule } from '@angular/core';
import { FormlyFormFieldModule } from './form-field/form-field.module';
import { FormlyInputModule } from './input/input.module';
import { FormlyTextAreaModule } from './textarea/textarea.module';
import { FormlyRadioModule } from './radio/radio.module';
import { FormlyCheckboxModule } from './checkbox/checkbox.module';
import { FormlySelectModule } from './select/select.module';
import { FormlyDatePickerModule } from './datepicker/datepicker.module';
import { FormlyNullModule } from './null/null.module';

@NgModule({
  imports: [
    FormlyFormFieldModule,
    FormlyInputModule,
    FormlyTextAreaModule,
    FormlyRadioModule,
    FormlyCheckboxModule,
    FormlySelectModule,
    FormlyDatePickerModule,
    FormlyNullModule
  ],
})
export class FormlyPrimeNGModule {}
