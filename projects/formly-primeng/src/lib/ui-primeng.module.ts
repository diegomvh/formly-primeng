import { NgModule } from '@angular/core';
import { PrimengInputModule } from './input/input.module';
import { PrimengTextAreaModule } from './textarea/textarea.module';
import { PrimengCheckboxModule } from './checkbox/checkbox.module';
import { PrimengDropdownModule } from './dropdown/dropdown.module';
import { PrimengMultiSelectModule } from './multiselect/multiselect.module';
import { PrimengColorPickerModule } from './colorpicker/colorpicker.module';
import { PrimengRadioButtonModule } from './radio/radio.module';
import { PrimengCalendarModule } from './calendar/calendar.module';
import { PrimengEditorModule } from './editor/editor.module';
import { PrimengCurrencyModule } from './currency/currency.module';
import { PrimengSliderModule } from './slider/slider.module';
import { PrimengAutoCompleteModule } from './autocomplete/autocomplete.module';
import { PrimengChipsModule } from './chips/chips.module';
import { PrimengPasswordModule } from './password/password.module';

import { FormlyFormFieldModule } from './form-field/form-field.module';
import { FormlyNullModule } from './null/null.module';
import { FormlyArrayModule } from './array/array.module';
import { FormlyObjectModule } from './object/object.module';
import { FormlyMultiSchemaModule } from './multischema/multischema.module';
import { FormlyFormFieldGroupModule } from './form-field-group/form-field-group.module';

@NgModule({
  imports: [
    PrimengInputModule,
    PrimengTextAreaModule,
    PrimengRadioButtonModule,
    PrimengCheckboxModule,
    PrimengChipsModule,
    PrimengDropdownModule,
    PrimengMultiSelectModule,
    PrimengAutoCompleteModule,
    PrimengCalendarModule,
    PrimengColorPickerModule,
    PrimengEditorModule,
    PrimengCurrencyModule,
    PrimengSliderModule,
    PrimengPasswordModule,
    FormlyFormFieldModule,
    FormlyFormFieldGroupModule,
    FormlyNullModule,
    FormlyArrayModule,
    FormlyObjectModule,
    FormlyMultiSchemaModule,
  ],
})
export class FormlyPrimeNGModule {}
