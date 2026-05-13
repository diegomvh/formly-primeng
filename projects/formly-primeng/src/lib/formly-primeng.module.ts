import { NgModule } from '@angular/core';
import { FormlyFormFieldModule } from './field';
import { FormlyInputTextModule } from './inputtext';
import { FormlyInputNumberModule } from './inputnumber';
import { FormlyAutoCompleteModule } from './autocomplete';
import { FormlyTextAreaModule } from './textarea';
import { FormlyRadioModule } from './radiobutton';
import { FormlyCheckboxModule } from './checkbox';
import { FormlySelectModule } from './select';
import { FormlyDatepickerModule } from './datepicker';
import { FormlyToggleSwitchModule } from './toggleswitch';
import { FormlyInputOtpModule } from './inputotp';
import { FormlyPasswordModule } from './password';
import { FormlyColorPickerModule } from './colorpicker';
import { FormlyEditorModule } from './editor';
import { FormlySliderModule } from './slider';
import { FormlyRatingModule } from './rating';
import { FormlyKnobModule } from './knob';
import { FormlyInputMaskModule } from './inputmask';
import { FormlyTreeSelectModule } from './treeselect';
import { FormlyToggleButtonModule } from './togglebutton/togglebutton.module';
import { FormlySelectButtonModule } from './selectbutton';
import { FormlyMultiSelectModule } from './multiselect';
import { FormlyListboxModule } from './listbox/listbox.module';
import { FormlyCascadeSelectModule } from './cascadeselect';

@NgModule({
  imports: [
    FormlyAutoCompleteModule,
    FormlyCascadeSelectModule,
    FormlyFormFieldModule,
    FormlyInputTextModule,
    FormlyInputMaskModule,
    FormlyInputNumberModule,
    FormlyInputOtpModule,
    FormlyTextAreaModule,
    FormlyPasswordModule,
    FormlyRadioModule,
    FormlyCheckboxModule,
    FormlyListboxModule,
    FormlyMultiSelectModule,
    FormlySelectModule,
    FormlySelectButtonModule,
    FormlyTreeSelectModule,
    FormlyDatepickerModule,
    FormlyToggleSwitchModule,
    FormlyToggleButtonModule,
    FormlyColorPickerModule,
    FormlyEditorModule,
    FormlySliderModule,
    FormlyRatingModule,
    FormlyKnobModule,
  ],
})
export class FormlyPrimeNGModule {}