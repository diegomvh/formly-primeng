import { NgModule } from '@angular/core';
import { FormlyPrimengFieldModule } from './field';
import { FormlyPrimengInputtextModule } from './inputtext';
import { FormlyPrimengInputnumberModule } from './inputnumber';
import { FormlyPrimengAutoCompleteModule } from './autocomplete';
import { FormlyPrimengTextareaModule } from './textarea';
import { FormlyPrimengRadioButtonModule } from './radiobutton';
import { FormlyPrimengCheckboxModule } from './checkbox';
import { FormlyPrimengSelectModule } from './select';
import { FormlyPrimengDatepickerModule } from './datepicker';
import { FormlyPrimengToggleswitchModule } from './toggleswitch';
import { FormlyPrimengInputotpModule } from './inputotp';
import { FormlyPrimengPasswordModule } from './password';
import { FormlyPrimengColorpickerModule } from './colorpicker';
import { FormlyPrimengEditorModule } from './editor';
import { FormlyPrimengSliderModule } from './slider';
import { FormlyPrimengRatingModule } from './rating';
import { FormlyPrimengKnobModule } from './knob';
import { FormlyPrimengInputmaskModule } from './inputmask';
import { FormlyPrimengTreeselectModule } from './treeselect';
import { FormlyPrimengTogglebuttonModule } from './togglebutton/togglebutton.module';
import { FormlyPrimengSelectbuttonModule } from './selectbutton';
import { FormlyPrimengMultiselectModule } from './multiselect';
import { FormlyPrimengListboxModule } from './listbox';
import { FormlyPrimengCascadeselectModule } from './cascadeselect';

@NgModule({
  imports: [
    FormlyPrimengAutoCompleteModule,
    FormlyPrimengCascadeselectModule,
    FormlyPrimengFieldModule,
    FormlyPrimengInputtextModule,
    FormlyPrimengInputmaskModule,
    FormlyPrimengInputnumberModule,
    FormlyPrimengInputotpModule,
    FormlyPrimengTextareaModule,
    FormlyPrimengPasswordModule,
    FormlyPrimengRadioButtonModule,
    FormlyPrimengCheckboxModule,
    FormlyPrimengListboxModule,
    FormlyPrimengMultiselectModule,
    FormlyPrimengSelectModule,
    FormlyPrimengSelectbuttonModule,
    FormlyPrimengTreeselectModule,
    FormlyPrimengDatepickerModule,
    FormlyPrimengToggleswitchModule,
    FormlyPrimengTogglebuttonModule,
    FormlyPrimengColorpickerModule,
    FormlyPrimengEditorModule,
    FormlyPrimengSliderModule,
    FormlyPrimengRatingModule,
    FormlyPrimengKnobModule,
  ],
})
export class FormlyPrimeNGModule {}