import { FormlyArrayModule } from './array/array.module';
import { FormlyFormFieldGroupModule } from './form-field-group/form-field-group.module';
import { FormlyFormFieldModule } from './form-field/form-field.module';
import { FormlyMultiSchemaModule } from './multischema/multischema.module';
import { FormlyNullModule } from './null/null.module';
import { FormlyObjectModule } from './object/object.module';
import { NgModule } from '@angular/core';
import { PrimengAutoCompleteModule } from './autocomplete/autocomplete.module';
import { PrimengCalendarModule } from './calendar/calendar.module';
import { PrimengCheckboxModule } from './checkbox/checkbox.module';
import { PrimengChipsModule } from './chips/chips.module';
import { PrimengColorPickerModule } from './colorpicker/colorpicker.module';
import { PrimengCurrencyModule } from './currency/currency.module';
import { PrimengDropdownModule } from './dropdown/dropdown.module';
import { PrimengEditorModule } from './editor/editor.module';
import { PrimengInputModule } from './input/input.module';
import { PrimengListboxModule } from './listbox/listbox.module';
import { PrimengMultiSelectModule } from './multiselect/multiselect.module';
import { PrimengPasswordModule } from './password/password.module';
import { PrimengRadioButtonModule } from './radio/radio.module';
import { PrimengSliderModule } from './slider/slider.module';
import { PrimengTextAreaModule } from './textarea/textarea.module';
import { PrimengSwitchModule } from './switch/switch.module';
import { PrimengMaskModule } from './mask/mask.module';
import { PrimengNumberModule } from './number/number.module';

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
    PrimengListboxModule,
    PrimengSwitchModule,
    PrimengMaskModule,
    PrimengNumberModule,
    FormlyFormFieldModule,
    FormlyFormFieldGroupModule,
    FormlyNullModule,
    FormlyArrayModule,
    FormlyObjectModule,
    FormlyMultiSchemaModule,
  ],
})
export class FormlyPrimeNGModule {}
