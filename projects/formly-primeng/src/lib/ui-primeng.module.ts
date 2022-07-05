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
import { PrimengCascadeSelectModule } from './cascadeselect/cascadeselect.module';
import { PrimengKnobModule } from './knob/knob.module';
import { PrimengRatingModule } from './rating/rating.module';
import { PrimengTreeSelectModule } from './treeselect/treeselect.module';

@NgModule({
  imports: [
    FormlyArrayModule,
    PrimengAutoCompleteModule,
    PrimengCalendarModule,
    PrimengCascadeSelectModule,
    PrimengCheckboxModule,
    PrimengChipsModule,
    PrimengColorPickerModule,
    PrimengDropdownModule,
    PrimengTreeSelectModule,
    PrimengEditorModule,

    FormlyFormFieldModule,
    FormlyFormFieldGroupModule,

    PrimengInputModule,
    PrimengKnobModule,
    PrimengListboxModule,
    PrimengMaskModule,

    FormlyMultiSchemaModule,

    PrimengMultiSelectModule,

    FormlyNullModule,

    PrimengNumberModule,

    FormlyObjectModule,

    PrimengPasswordModule,
    PrimengRadioButtonModule,
    PrimengRatingModule,
    PrimengSliderModule,
    PrimengSwitchModule,
    PrimengTextAreaModule,
  ],
})
export class FormlyPrimeNGModule {}
